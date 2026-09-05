/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { HouseCustomization, HousePartId } from '../types';
import { RotateCw, ZoomIn, ZoomOut, Sun, Moon, Sparkles } from 'lucide-react';

interface ThreeHouseSceneProps {
  purchasedParts: HousePartId[];
  customization: HouseCustomization;
  newlyAddedPartId?: HousePartId | null;
}

export const ThreeHouseScene: React.FC<ThreeHouseSceneProps> = ({
  purchasedParts,
  customization,
  newlyAddedPartId,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const houseGroupRef = useRef<THREE.Group | null>(null);
  const smokeParticlesRef = useRef<THREE.Mesh[]>([]);
  const cloudsGroupRef = useRef<THREE.Group | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const hemiLightRef = useRef<THREE.HemisphereLight | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  // Camera Orbit State
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const cameraRotationRef = useRef({ azimuth: 0.8, elevation: 0.45, distance: 11 });

  const [isNight, setIsNight] = useState(false);

  // Initialize Three.js scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(isNight ? 0x0f172a : 0xbbe1fa);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    cameraRef.current = camera;
    updateCameraPosition();

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Clean container before appending
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Lights
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.9);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);
    hemiLightRef.current = hemiLight;

    const dirLight = new THREE.DirectionalLight(0xfffae6, 1.4);
    dirLight.position.set(12, 22, 14);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 60;
    dirLight.shadow.camera.left = -10;
    dirLight.shadow.camera.right = 10;
    dirLight.shadow.camera.top = 10;
    dirLight.shadow.camera.bottom = -10;
    scene.add(dirLight);
    sunLightRef.current = dirLight;

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Floating Island Ground (Always visible)
    const islandGroup = new THREE.Group();
    scene.add(islandGroup);

    // Top grass layer
    const grassGeo = new THREE.CylinderGeometry(5.8, 5.4, 0.8, 32);
    const grassMat = new THREE.MeshLambertMaterial({ color: 0x4ade80 });
    const grassMesh = new THREE.Mesh(grassGeo, grassMat);
    grassMesh.position.y = -0.4;
    grassMesh.receiveShadow = true;
    islandGroup.add(grassMesh);

    // Dirt rock underside
    const dirtGeo = new THREE.CylinderGeometry(5.4, 1.8, 2.0, 32);
    const dirtMat = new THREE.MeshLambertMaterial({ color: 0x78350f });
    const dirtMesh = new THREE.Mesh(dirtGeo, dirtMat);
    dirtMesh.position.y = -1.8;
    dirtMesh.receiveShadow = true;
    islandGroup.add(dirtMesh);

    // Drifting cartoon clouds
    const cloudsGroup = new THREE.Group();
    for (let i = 0; i < 4; i++) {
      const cloud = createCloudMesh();
      cloud.position.set(
        (Math.random() - 0.5) * 20,
        6 + Math.random() * 3,
        (Math.random() - 0.5) * 20
      );
      cloudsGroup.add(cloud);
    }
    scene.add(cloudsGroup);
    cloudsGroupRef.current = cloudsGroup;

    // House group
    const houseGroup = new THREE.Group();
    scene.add(houseGroup);
    houseGroupRef.current = houseGroup;

    // Mouse / Touch Drag handlers for rotation
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      cameraRotationRef.current.azimuth -= deltaX * 0.008;
      cameraRotationRef.current.elevation = Math.max(
        0.1,
        Math.min(Math.PI / 2.3, cameraRotationRef.current.elevation + deltaY * 0.008)
      );

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
      updateCameraPosition();
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch events for tablets / smartphones
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
      const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;

      cameraRotationRef.current.azimuth -= deltaX * 0.008;
      cameraRotationRef.current.elevation = Math.max(
        0.1,
        Math.min(Math.PI / 2.3, cameraRotationRef.current.elevation + deltaY * 0.008)
      );

      previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      updateCameraPosition();
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    // Wheel zoom
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      cameraRotationRef.current.distance = Math.max(
        6,
        Math.min(18, cameraRotationRef.current.distance + e.deltaY * 0.01)
      );
      updateCameraPosition();
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    domElem.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    domElem.addEventListener('wheel', handleWheel, { passive: false });

    // ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width;
        const newHeight = entry.contentRect.height;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Gentle cloud movement
      if (cloudsGroupRef.current) {
        cloudsGroupRef.current.children.forEach((cloud, idx) => {
          cloud.position.x += delta * (0.3 + idx * 0.1);
          if (cloud.position.x > 14) cloud.position.x = -14;
        });
      }

      // Animate smoke particles if chimney is unlocked
      if (smokeParticlesRef.current.length > 0) {
        smokeParticlesRef.current.forEach((smoke, i) => {
          smoke.position.y += delta * 0.9;
          smoke.position.x += Math.sin(time * 2 + i) * delta * 0.2;
          const scale = smoke.scale.x + delta * 0.3;
          smoke.scale.set(scale, scale, scale);
          if (smoke.position.y > 4.8) {
            smoke.position.y = 3.2;
            smoke.position.x = 1.0;
            smoke.position.z = -0.5;
            smoke.scale.set(0.2, 0.2, 0.2);
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      domElem.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      domElem.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      domElem.removeEventListener('wheel', handleWheel);
      renderer.dispose();
    };
  }, []);

  // Update Camera position based on spherical coordinates
  const updateCameraPosition = () => {
    if (!cameraRef.current) return;
    const { azimuth, elevation, distance } = cameraRotationRef.current;
    const x = distance * Math.cos(elevation) * Math.sin(azimuth);
    const y = distance * Math.sin(elevation);
    const z = distance * Math.cos(elevation) * Math.cos(azimuth);

    cameraRef.current.position.set(x, y, z);
    cameraRef.current.lookAt(0, 1.2, 0);
  };

  // Switch Day / Night
  useEffect(() => {
    if (!sceneRef.current || !sunLightRef.current || !hemiLightRef.current) return;
    if (isNight) {
      sceneRef.current.background = new THREE.Color(0x090d16);
      sunLightRef.current.color.setHex(0x818cf8);
      sunLightRef.current.intensity = 0.5;
      hemiLightRef.current.intensity = 0.3;
    } else {
      sceneRef.current.background = new THREE.Color(0xbbe1fa);
      sunLightRef.current.color.setHex(0xfffae6);
      sunLightRef.current.intensity = 1.4;
      hemiLightRef.current.intensity = 0.9;
    }
  }, [isNight]);

  // Rebuild 3D House Parts whenever purchasedParts or customization changes
  useEffect(() => {
    const houseGroup = houseGroupRef.current;
    if (!houseGroup) return;

    // Clear previous house meshes
    while (houseGroup.children.length > 0) {
      const obj = houseGroup.children[0];
      houseGroup.remove(obj);
    }
    smokeParticlesRef.current = [];

    // Helper to check unlocked
    const has = (partId: HousePartId) => purchasedParts.includes(partId);

    // 1. Foundation (Terreno y Cimientos)
    if (has('foundation')) {
      const slabGeo = new THREE.BoxGeometry(4.2, 0.4, 3.8);
      const slabMat = new THREE.MeshLambertMaterial({ color: 0x94a3b8 });
      const slab = new THREE.Mesh(slabGeo, slabMat);
      slab.position.set(0, 0.2, 0);
      slab.receiveShadow = true;
      slab.castShadow = true;
      houseGroup.add(slab);

      // Cute stone border bevel
      const borderGeo = new THREE.BoxGeometry(4.4, 0.15, 4.0);
      const borderMat = new THREE.MeshLambertMaterial({ color: 0x64748b });
      const border = new THREE.Mesh(borderGeo, borderMat);
      border.position.set(0, 0.08, 0);
      border.receiveShadow = true;
      houseGroup.add(border);
    }

    // 2. Walls (Paredes Fuertes)
    if (has('walls')) {
      const wallMat = new THREE.MeshLambertMaterial({
        color: new THREE.Color(customization.wallColor),
      });

      // Main house body
      const bodyGeo = new THREE.BoxGeometry(3.6, 2.2, 3.2);
      const body = new THREE.Mesh(bodyGeo, wallMat);
      body.position.set(0, 1.5, 0);
      body.castShadow = true;
      body.receiveShadow = true;
      houseGroup.add(body);

      // Base plinth trim
      const trimGeo = new THREE.BoxGeometry(3.7, 0.15, 3.3);
      const trimMat = new THREE.MeshLambertMaterial({ color: 0x475569 });
      const trim = new THREE.Mesh(trimGeo, trimMat);
      trim.position.set(0, 0.45, 0);
      houseGroup.add(trim);
    }

    // 3. Roof (Tejado Inclinado)
    if (has('roof')) {
      const roofMat = new THREE.MeshLambertMaterial({
        color: new THREE.Color(customization.roofColor),
      });

      // Triangular Prism Roof using Cone with 4 radial segments
      const roofGeo = new THREE.ConeGeometry(2.8, 1.6, 4);
      const roof = new THREE.Mesh(roofGeo, roofMat);
      roof.position.set(0, 3.4, 0);
      roof.rotation.y = Math.PI / 4;
      roof.castShadow = true;
      roof.receiveShadow = true;
      houseGroup.add(roof);

      // Eaves overhang trim
      const eaveGeo = new THREE.ConeGeometry(2.95, 0.2, 4);
      const eaveMat = new THREE.MeshLambertMaterial({ color: 0x7f1d1d });
      const eave = new THREE.Mesh(eaveGeo, eaveMat);
      eave.position.set(0, 2.65, 0);
      eave.rotation.y = Math.PI / 4;
      houseGroup.add(eave);
    }

    // 4. Door (Puerta Principal)
    if (has('door')) {
      const doorGroup = new THREE.Group();

      // Door frame
      const frameGeo = new THREE.BoxGeometry(1.0, 1.5, 0.1);
      const frameMat = new THREE.MeshLambertMaterial({ color: 0x78350f });
      const frame = new THREE.Mesh(frameGeo, frameMat);
      frame.position.set(0, 1.15, 1.62);
      doorGroup.add(frame);

      // Main Door Leaf
      const leafGeo = new THREE.BoxGeometry(0.85, 1.38, 0.08);
      const leafMat = new THREE.MeshLambertMaterial({
        color: new THREE.Color(customization.doorColor),
      });
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.position.set(0, 1.15, 1.65);
      doorGroup.add(leaf);

      // Golden doorknob
      const knobGeo = new THREE.SphereGeometry(0.06, 12, 12);
      const knobMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.8, roughness: 0.2 });
      const knob = new THREE.Mesh(knobGeo, knobMat);
      knob.position.set(0.28, 1.12, 1.72);
      doorGroup.add(knob);

      // Doorstep
      const stepGeo = new THREE.BoxGeometry(1.2, 0.15, 0.4);
      const stepMat = new THREE.MeshLambertMaterial({ color: 0x94a3b8 });
      const step = new THREE.Mesh(stepGeo, stepMat);
      step.position.set(0, 0.42, 1.8);
      doorGroup.add(step);

      houseGroup.add(doorGroup);
    }

    // 5. Windows (Ventanas Luminosas)
    if (has('windows')) {
      const winGroup = new THREE.Group();
      const winMat = new THREE.MeshLambertMaterial({
        color: new THREE.Color(customization.windowColor),
      });
      const frameMat = new THREE.MeshLambertMaterial({ color: 0xffffff });

      // Left front window
      const winGeo = new THREE.BoxGeometry(0.7, 0.7, 0.08);
      const winFrameGeo = new THREE.BoxGeometry(0.8, 0.8, 0.06);

      // Window left front
      const win1Frame = new THREE.Mesh(winFrameGeo, frameMat);
      win1Frame.position.set(-1.1, 1.8, 1.62);
      const win1 = new THREE.Mesh(winGeo, winMat);
      win1.position.set(-1.1, 1.8, 1.64);
      winGroup.add(win1Frame);
      winGroup.add(win1);

      // Window right front
      const win2Frame = new THREE.Mesh(winFrameGeo, frameMat);
      win2Frame.position.set(1.1, 1.8, 1.62);
      const win2 = new THREE.Mesh(winGeo, winMat);
      win2.position.set(1.1, 1.8, 1.64);
      winGroup.add(win2Frame);
      winGroup.add(win2);

      // Window on side wall
      const winSideFrame = new THREE.Mesh(winFrameGeo, frameMat);
      winSideFrame.position.set(-1.82, 1.8, 0);
      winSideFrame.rotation.y = Math.PI / 2;
      const winSide = new THREE.Mesh(winGeo, winMat);
      winSide.position.set(-1.84, 1.8, 0);
      winSide.rotation.y = Math.PI / 2;
      winGroup.add(winSideFrame);
      winGroup.add(winSide);

      // Crossbars on front windows
      [-1.1, 1.1].forEach((x) => {
        const vBar = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.7, 0.1), frameMat);
        vBar.position.set(x, 1.8, 1.65);
        const hBar = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.04, 0.1), frameMat);
        hBar.position.set(x, 1.8, 1.65);
        winGroup.add(vBar);
        winGroup.add(hBar);
      });

      houseGroup.add(winGroup);
    }

    // 6. Chimney (Chimenea Cálida)
    if (has('chimney')) {
      const chimneyGroup = new THREE.Group();
      const chimMat = new THREE.MeshLambertMaterial({
        color: new THREE.Color(customization.chimneyColor),
      });

      // Chimney body
      const chimGeo = new THREE.BoxGeometry(0.5, 1.4, 0.5);
      const chim = new THREE.Mesh(chimGeo, chimMat);
      chim.position.set(1.0, 3.2, -0.5);
      chim.castShadow = true;
      chimneyGroup.add(chim);

      // Chimney top rim
      const rimGeo = new THREE.BoxGeometry(0.65, 0.12, 0.65);
      const rim = new THREE.Mesh(rimGeo, chimMat);
      rim.position.set(1.0, 3.9, -0.5);
      chimneyGroup.add(rim);

      // Smoke particles
      const smokeParticles: THREE.Mesh[] = [];
      for (let i = 0; i < 4; i++) {
        const sGeo = new THREE.SphereGeometry(0.12 + i * 0.05, 8, 8);
        const sMat = new THREE.MeshBasicMaterial({ color: 0xf1f5f9, transparent: true, opacity: 0.7 - i * 0.15 });
        const smoke = new THREE.Mesh(sGeo, sMat);
        smoke.position.set(1.0 + (Math.random() - 0.5) * 0.1, 3.4 + i * 0.35, -0.5);
        chimneyGroup.add(smoke);
        smokeParticles.push(smoke);
      }
      smokeParticlesRef.current = smokeParticles;

      houseGroup.add(chimneyGroup);
    }

    // 7. Path (Camino de Piedras)
    if (has('path')) {
      const pathGroup = new THREE.Group();
      const stoneMat = new THREE.MeshLambertMaterial({ color: 0xcbd5e1 });

      const stones = [
        { x: 0, z: 2.1, r: 0.35 },
        { x: -0.1, z: 2.7, r: 0.38 },
        { x: 0.15, z: 3.3, r: 0.4 },
        { x: -0.05, z: 3.9, r: 0.36 },
        { x: 0.1, z: 4.5, r: 0.32 },
      ];

      stones.forEach((s) => {
        const sGeo = new THREE.CylinderGeometry(s.r, s.r + 0.05, 0.08, 12);
        const stone = new THREE.Mesh(sGeo, stoneMat);
        stone.position.set(s.x, 0.04, s.z);
        stone.receiveShadow = true;
        pathGroup.add(stone);
      });

      houseGroup.add(pathGroup);
    }

    // 8. Fence (Cerca del Jardín)
    if (has('fence')) {
      const fenceGroup = new THREE.Group();
      const fenceMat = new THREE.MeshLambertMaterial({
        color: new THREE.Color(customization.fenceColor),
      });

      const addFenceSection = (x1: number, z1: number, x2: number, z2: number) => {
        const dx = x2 - x1;
        const dz = z2 - z1;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const angle = Math.atan2(dx, dz);
        const postsCount = Math.floor(dist / 0.5);

        for (let i = 0; i <= postsCount; i++) {
          const t = i / postsCount;
          const px = x1 + dx * t;
          const pz = z1 + dz * t;

          // Picket post
          const postGeo = new THREE.BoxGeometry(0.08, 0.6, 0.08);
          const post = new THREE.Mesh(postGeo, fenceMat);
          post.position.set(px, 0.3, pz);
          post.castShadow = true;
          fenceGroup.add(post);
        }

        // Horizontal rails
        const railGeo = new THREE.BoxGeometry(0.04, 0.06, dist);
        const topRail = new THREE.Mesh(railGeo, fenceMat);
        topRail.position.set((x1 + x2) / 2, 0.42, (z1 + z2) / 2);
        topRail.rotation.y = angle;
        fenceGroup.add(topRail);

        const btmRail = new THREE.Mesh(railGeo, fenceMat);
        btmRail.position.set((x1 + x2) / 2, 0.18, (z1 + z2) / 2);
        btmRail.rotation.y = angle;
        fenceGroup.add(btmRail);
      };

      // Left fence
      addFenceSection(-3.8, 3.2, -3.8, -2.8);
      // Right fence
      addFenceSection(3.8, 3.2, 3.8, -2.8);
      // Back fence
      addFenceSection(-3.8, -2.8, 3.8, -2.8);
      // Front left fence
      addFenceSection(-3.8, 3.2, -0.9, 3.2);
      // Front right fence
      addFenceSection(0.9, 3.2, 3.8, 3.2);

      houseGroup.add(fenceGroup);
    }

    // 9. Garden (Césped y Flores)
    if (has('garden')) {
      const gardenGroup = new THREE.Group();

      // Bush spheres
      const bushMat = new THREE.MeshLambertMaterial({ color: 0x22c55e });
      const bushes = [
        { x: -1.6, z: 2.1, r: 0.4 },
        { x: 1.6, z: 2.1, r: 0.45 },
        { x: -2.3, z: 1.4, r: 0.5 },
        { x: 2.4, z: 1.2, r: 0.52 },
      ];
      bushes.forEach((b) => {
        const bGeo = new THREE.SphereGeometry(b.r, 12, 12);
        const bush = new THREE.Mesh(bGeo, bushMat);
        bush.position.set(b.x, b.r * 0.7, b.z);
        bush.castShadow = true;
        gardenGroup.add(bush);
      });

      // Cute colorful flower dots
      const flowerColors = [0xef4444, 0xf59e0b, 0xec4899, 0x3b82f6, 0xffffff];
      for (let i = 0; i < 16; i++) {
        const color = flowerColors[i % flowerColors.length];
        const fMat = new THREE.MeshLambertMaterial({ color });
        const petalGeo = new THREE.CylinderGeometry(0.12, 0.1, 0.05, 8);
        const flower = new THREE.Mesh(petalGeo, fMat);

        const angle = Math.random() * Math.PI * 2;
        const rad = 2.4 + Math.random() * 1.8;
        flower.position.set(Math.cos(angle) * rad, 0.08, Math.sin(angle) * rad);
        gardenGroup.add(flower);
      }

      houseGroup.add(gardenGroup);
    }

    // 10. Decorations (Árboles, Farola y Buzón)
    if (has('decorations')) {
      const decoGroup = new THREE.Group();

      // Low-poly Tree 1 (Back Left)
      const tree1 = createStylizedTree(-3.2, -1.8, 1.1);
      decoGroup.add(tree1);

      // Low-poly Tree 2 (Back Right)
      const tree2 = createStylizedTree(3.2, -1.5, 0.9);
      decoGroup.add(tree2);

      // Mailbox near entrance path
      const postMat = new THREE.MeshLambertMaterial({ color: 0x78350f });
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.7, 8), postMat);
      post.position.set(-0.7, 0.35, 3.8);
      decoGroup.add(post);

      const boxMat = new THREE.MeshLambertMaterial({ color: 0xef4444 });
      const box = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.18, 0.3), boxMat);
      box.position.set(-0.7, 0.72, 3.8);
      decoGroup.add(box);

      // Street Lantern Post
      const lampGroup = new THREE.Group();
      const metalMat = new THREE.MeshLambertMaterial({ color: 0x334155 });
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 2.0, 8), metalMat);
      pole.position.set(1.5, 1.0, 3.5);
      lampGroup.add(pole);

      // Lantern Glass Head
      const glassMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
      const lampHead = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.12, 0.28, 6), glassMat);
      lampHead.position.set(1.5, 2.05, 3.5);
      lampGroup.add(lampHead);

      // PointLight for lantern
      const lanternLight = new THREE.PointLight(0xfacc15, 1.2, 4);
      lanternLight.position.set(1.5, 2.05, 3.5);
      lampGroup.add(lanternLight);

      decoGroup.add(lampGroup);
      houseGroup.add(decoGroup);
    }

    // Playful bounce if there's a newly added part
    if (newlyAddedPartId) {
      houseGroup.scale.set(1.08, 1.08, 1.08);
      setTimeout(() => {
        if (houseGroupRef.current) {
          houseGroupRef.current.scale.set(1, 1, 1);
        }
      }, 250);
    }
  }, [purchasedParts, customization, newlyAddedPartId]);

  // Helper to create cartoon cloud
  function createCloudMesh(): THREE.Group {
    const cloud = new THREE.Group();
    const cloudMat = new THREE.MeshLambertMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 });

    const puffGeos = [
      { r: 0.6, x: 0, y: 0, z: 0 },
      { r: 0.45, x: -0.5, y: -0.1, z: 0 },
      { r: 0.5, x: 0.5, y: -0.05, z: 0 },
      { r: 0.35, x: 0.2, y: 0.3, z: 0.1 },
    ];

    puffGeos.forEach((p) => {
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(p.r, 8, 8), cloudMat);
      mesh.position.set(p.x, p.y, p.z);
      cloud.add(mesh);
    });

    return cloud;
  }

  // Helper to create low poly pine/oak tree
  function createStylizedTree(x: number, z: number, scale = 1.0): THREE.Group {
    const tree = new THREE.Group();

    // Trunk
    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x78350f });
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.12 * scale, 0.16 * scale, 1.0 * scale, 8), trunkMat);
    trunk.position.set(0, 0.5 * scale, 0);
    trunk.castShadow = true;
    tree.add(trunk);

    // Leaves layers (Cone)
    const leavesMat = new THREE.MeshLambertMaterial({ color: 0x15803d });
    const cone1 = new THREE.Mesh(new THREE.ConeGeometry(0.9 * scale, 1.1 * scale, 7), leavesMat);
    cone1.position.set(0, 1.2 * scale, 0);
    cone1.castShadow = true;
    tree.add(cone1);

    const cone2 = new THREE.Mesh(new THREE.ConeGeometry(0.7 * scale, 0.9 * scale, 7), leavesMat);
    cone2.position.set(0, 1.7 * scale, 0);
    cone2.castShadow = true;
    tree.add(cone2);

    const cone3 = new THREE.Mesh(new THREE.ConeGeometry(0.5 * scale, 0.7 * scale, 7), leavesMat);
    cone3.position.set(0, 2.1 * scale, 0);
    cone3.castShadow = true;
    tree.add(cone3);

    tree.position.set(x, 0, z);
    return tree;
  }

  // Camera Quick Controls
  const rotateView = () => {
    cameraRotationRef.current.azimuth += Math.PI / 4;
    updateCameraPosition();
  };

  const zoomIn = () => {
    cameraRotationRef.current.distance = Math.max(6, cameraRotationRef.current.distance - 2);
    updateCameraPosition();
  };

  const zoomOut = () => {
    cameraRotationRef.current.distance = Math.min(18, cameraRotationRef.current.distance + 2);
    updateCameraPosition();
  };

  return (
    <div className="relative w-full h-full min-h-[320px] lg:min-h-[460px] rounded-3xl overflow-hidden shadow-inner border-4 border-white/60 bg-gradient-to-b from-sky-200 via-sky-100 to-emerald-100">
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none select-none"
      />

      {/* Interactive Helper Overlay: drag hint */}
      <div className="absolute top-4 left-4 pointer-events-none bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-200/70 shadow-sm flex items-center gap-2 text-xs font-semibold text-slate-700">
        <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" />
        <span>Gira y explora tu casa en 3D</span>
      </div>

      {/* 3D View Control Buttons (accessible large touch targets) */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
        <button
          onClick={rotateView}
          className="w-11 h-11 rounded-2xl bg-white/90 hover:bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center btn-3d active:scale-95 transition"
          title="Girar vista 3D"
          aria-label="Girar vista 3D"
        >
          <RotateCw className="w-5 h-5 text-sky-600" />
        </button>
        <button
          onClick={zoomIn}
          className="w-11 h-11 rounded-2xl bg-white/90 hover:bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center btn-3d active:scale-95 transition"
          title="Acercar cámara"
          aria-label="Acercar cámara"
        >
          <ZoomIn className="w-5 h-5 text-emerald-600" />
        </button>
        <button
          onClick={zoomOut}
          className="w-11 h-11 rounded-2xl bg-white/90 hover:bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center btn-3d active:scale-95 transition"
          title="Alejar cámara"
          aria-label="Alejar cámara"
        >
          <ZoomOut className="w-5 h-5 text-amber-600" />
        </button>
        <button
          onClick={() => setIsNight(!isNight)}
          className="w-11 h-11 rounded-2xl bg-white/90 hover:bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center btn-3d active:scale-95 transition"
          title={isNight ? 'Cambiar a modo Día' : 'Cambiar a modo Noche'}
          aria-label="Cambiar día y noche"
        >
          {isNight ? (
            <Sun className="w-5 h-5 text-amber-500" />
          ) : (
            <Moon className="w-5 h-5 text-indigo-600" />
          )}
        </button>
      </div>

      {/* Progress pill at bottom of 3D view */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-lg flex items-center gap-3 text-xs md:text-sm font-bold text-slate-800">
        <span className="flex items-center gap-1.5 text-emerald-700">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          Partes construidas: {purchasedParts.length} / 10
        </span>
        <div className="w-24 md:w-32 bg-slate-200 h-2.5 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${(purchasedParts.length / 10) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
