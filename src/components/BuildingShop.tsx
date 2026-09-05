/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HouseCustomization, HousePartConfig, HousePartId } from '../types';
import { HOUSE_PARTS, COLOR_PALETTES, ColorOption } from '../data/houseParts';
import { playSound } from '../utils/audio';
import {
  Hammer,
  Palette,
  Check,
  Coins,
  Sparkles,
  Lock,
  ArrowRight,
  Home,
  CheckCircle2,
} from 'lucide-react';

interface BuildingShopProps {
  coins: number;
  purchasedParts: HousePartId[];
  customization: HouseCustomization;
  onBuyPart: (part: HousePartConfig) => void;
  onUpdateColor: (partKey: keyof HouseCustomization, colorHex: string) => void;
  onGoToWords: () => void;
  soundEnabled: boolean;
}

export const BuildingShop: React.FC<BuildingShopProps> = ({
  coins,
  purchasedParts,
  customization,
  onBuyPart,
  onUpdateColor,
  onGoToWords,
  soundEnabled,
}) => {
  const [activeTab, setActiveTab] = useState<'materials' | 'colors'>('materials');
  const [selectedColorCategory, setSelectedColorCategory] = useState<
    'walls' | 'roof' | 'door' | 'windows' | 'chimney' | 'fence'
  >('walls');

  const handleBuy = (part: HousePartConfig) => {
    if (coins < part.cost) return;
    playSound.build(soundEnabled);
    playSound.coin(soundEnabled);
    onBuyPart(part);
  };

  const handleSelectColor = (hex: string) => {
    playSound.cardPop(soundEnabled);
    const keyMap: Record<string, keyof HouseCustomization> = {
      walls: 'wallColor',
      roof: 'roofColor',
      door: 'doorColor',
      windows: 'windowColor',
      chimney: 'chimneyColor',
      fence: 'fenceColor',
    };
    onUpdateColor(keyMap[selectedColorCategory], hex);
  };

  const isPurchased = (id: HousePartId) => purchasedParts.includes(id);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Subnav Tabs: Materiales vs Tienda de Colores */}
      <div className="grid grid-cols-2 gap-3 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 shadow-sm">
        <button
          onClick={() => {
            playSound.cardPop(soundEnabled);
            setActiveTab('materials');
          }}
          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-sm md:text-base btn-3d transition ${
            activeTab === 'materials'
              ? 'bg-amber-500 text-white shadow-md border-b-4 border-amber-700'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Hammer className="w-5 h-5" />
          <span>Comprar Materiales</span>
        </button>

        <button
          onClick={() => {
            playSound.cardPop(soundEnabled);
            setActiveTab('colors');
          }}
          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-sm md:text-base btn-3d transition ${
            activeTab === 'colors'
              ? 'bg-purple-600 text-white shadow-md border-b-4 border-purple-800'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Palette className="w-5 h-5" />
          <span>Tienda de Colores</span>
        </button>
      </div>

      {/* Tab 1: Comprar Materiales */}
      {activeTab === 'materials' && (
        <div className="flex flex-col gap-4">
          <div className="bg-gradient-to-r from-amber-100 via-orange-50 to-amber-50 rounded-2xl p-4 border border-amber-200 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow">
                <Home className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-black text-amber-900">
                  Taller de Construcción
                </h3>
                <p className="text-xs md:text-sm font-semibold text-amber-700">
                  Usa tus monedas ganadas para colocar cada elemento de tu casa.
                </p>
              </div>
            </div>

            <button
              onClick={onGoToWords}
              className="hidden sm:flex items-center gap-2 bg-white text-amber-900 border border-amber-300 px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-amber-50 btn-3d shadow-sm"
            >
              <Coins className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span>Ganar más monedas</span>
            </button>
          </div>

          {/* Grid of House Parts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {HOUSE_PARTS.map((part) => {
              const bought = isPurchased(part.id);
              const canAfford = coins >= part.cost;

              return (
                <div
                  key={part.id}
                  className={`rounded-2xl p-4 border-3 transition-all flex flex-col justify-between gap-3 ${
                    bought
                      ? 'bg-emerald-50/70 border-emerald-300 shadow-sm'
                      : canAfford
                      ? 'bg-white border-amber-300 hover:border-amber-400 shadow-md'
                      : 'bg-slate-50 border-slate-200 opacity-90'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-lg shadow-sm ${
                          bought
                            ? 'bg-emerald-500 text-white'
                            : canAfford
                            ? 'bg-amber-400 text-slate-900'
                            : 'bg-slate-200 text-slate-500'
                        }`}
                      >
                        {part.order}
                      </div>

                      <div>
                        <h4 className="text-base font-black text-slate-800 flex items-center gap-1.5">
                          <span>{part.name}</span>
                          {bought && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                          )}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {part.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action / Status */}
                  <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                    <div className="flex items-center gap-1 font-black text-sm">
                      <Coins className="w-4 h-4 text-amber-500 fill-amber-400" />
                      <span className={bought ? 'text-emerald-700' : 'text-slate-800'}>
                        {bought ? 'Instalado' : `${part.cost} Monedas`}
                      </span>
                    </div>

                    {bought ? (
                      <button
                        onClick={() => {
                          setActiveTab('colors');
                          const mapPartToCat: Partial<
                            Record<
                              HousePartId,
                              'walls' | 'roof' | 'door' | 'windows' | 'chimney' | 'fence'
                            >
                          > = {
                            walls: 'walls',
                            roof: 'roof',
                            door: 'door',
                            windows: 'windows',
                            chimney: 'chimney',
                            fence: 'fence',
                          };
                          const cat = mapPartToCat[part.id];
                          if (cat) setSelectedColorCategory(cat);
                        }}
                        className="bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1 btn-3d"
                      >
                        <Palette className="w-3.5 h-3.5" />
                        <span>Pintar</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleBuy(part)}
                        disabled={!canAfford}
                        className={`font-black text-xs md:text-sm px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm btn-3d transition ${
                          canAfford
                            ? 'bg-amber-500 hover:bg-amber-600 text-white border-b-3 border-amber-700'
                            : 'bg-slate-200 text-slate-400 border border-slate-300 cursor-not-allowed'
                        }`}
                      >
                        {canAfford ? (
                          <>
                            <Hammer className="w-4 h-4" />
                            <span>Construir</span>
                          </>
                        ) : (
                          <>
                            <Lock className="w-3.5 h-3.5" />
                            <span>Faltan monedas</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Tienda de Colores (Personalización) */}
      {activeTab === 'colors' && (
        <div className="bg-white rounded-3xl p-5 shadow-xl border-3 border-purple-200 flex flex-col gap-5">
          <div className="flex items-center gap-3 bg-purple-50 p-3.5 rounded-2xl border border-purple-200">
            <div className="w-11 h-11 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow">
              <Palette className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-black text-purple-950">
                Pinta y Personaliza tu Casa
              </h3>
              <p className="text-xs md:text-sm text-purple-700 font-medium">
                Elige qué parte quieres pintar y selecciona tu color favorito. ¡El cambio se ve al instante en 3D!
              </p>
            </div>
          </div>

          {/* Category Selector Buttons */}
          <div className="flex flex-wrap gap-2">
            {(
              [
                { id: 'walls', label: 'Paredes', emoji: '🧱' },
                { id: 'roof', label: 'Techo', emoji: '🛖' },
                { id: 'door', label: 'Puerta', emoji: '🚪' },
                { id: 'windows', label: 'Ventanas', emoji: '🪟' },
                { id: 'chimney', label: 'Chimenea', emoji: '🔥' },
                { id: 'fence', label: 'Cerca', emoji: '🪵' },
              ] as const
            ).map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  playSound.cardPop(soundEnabled);
                  setSelectedColorCategory(cat.id);
                }}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs md:text-sm font-black btn-3d transition ${
                  selectedColorCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-md border-b-3 border-purple-800 scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Color Palettes for the Selected Category */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Colores Disponibles para {selectedColorCategory.toUpperCase()}:
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {COLOR_PALETTES[selectedColorCategory].map((colorOpt: ColorOption) => {
                const currentHex =
                  selectedColorCategory === 'walls'
                    ? customization.wallColor
                    : selectedColorCategory === 'roof'
                    ? customization.roofColor
                    : selectedColorCategory === 'door'
                    ? customization.doorColor
                    : selectedColorCategory === 'windows'
                    ? customization.windowColor
                    : selectedColorCategory === 'chimney'
                    ? customization.chimneyColor
                    : customization.fenceColor;

                const isSelected =
                  currentHex.toLowerCase() === colorOpt.hex.toLowerCase();

                return (
                  <button
                    key={colorOpt.hex}
                    onClick={() => handleSelectColor(colorOpt.hex)}
                    className={`p-3 rounded-2xl border-3 flex items-center gap-3 transition-all text-left btn-3d ${
                      isSelected
                        ? 'bg-purple-50 border-purple-600 shadow-md ring-2 ring-purple-300 scale-105'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    {/* Big Color Dot */}
                    <div
                      className="w-9 h-9 rounded-xl shadow-inner border-2 border-black/10 flex items-center justify-center text-white"
                      style={{ backgroundColor: colorOpt.hex }}
                    >
                      {isSelected && <Check className="w-5 h-5 drop-shadow stroke-[3]" />}
                    </div>

                    <div className="flex flex-col overflow-hidden">
                      <span className="text-xs font-black text-slate-800 truncate">
                        {colorOpt.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        {colorOpt.badgeEmoji}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
