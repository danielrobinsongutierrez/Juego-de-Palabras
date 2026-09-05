/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HousePartConfig, HousePartId } from '../types';

export const HOUSE_PARTS: HousePartConfig[] = [
  {
    id: 'foundation',
    name: 'Cimientos y Base',
    description: 'Plataforma sólida de piedra y hormigón donde descansará toda la casa.',
    cost: 20,
    unlocked: true, // starts already unlocked or first item
    color: '#94a3b8',
    defaultColor: '#94a3b8',
    category: 'base',
    order: 1,
  },
  {
    id: 'walls',
    name: 'Paredes Fuertes',
    description: 'Muros firmes de ladrillo que dan forma y calor a las habitaciones.',
    cost: 35,
    unlocked: false,
    color: '#fef08a',
    defaultColor: '#fef08a',
    category: 'estructura',
    order: 2,
  },
  {
    id: 'roof',
    name: 'Tejado Inclinado',
    description: 'Techo protector que resguarda de la lluvia y abriga el hogar.',
    cost: 45,
    unlocked: false,
    color: '#ef4444',
    defaultColor: '#ef4444',
    category: 'estructura',
    order: 3,
  },
  {
    id: 'door',
    name: 'Puerta Principal',
    description: 'Puerta con marco de madera y picaporte dorado para entrar.',
    cost: 25,
    unlocked: false,
    color: '#d97706',
    defaultColor: '#d97706',
    category: 'acabados',
    order: 4,
  },
  {
    id: 'windows',
    name: 'Ventanas Luminosas',
    description: 'Grandes ventanas con marco que dejan entrar la luz solar.',
    cost: 30,
    unlocked: false,
    color: '#38bdf8',
    defaultColor: '#38bdf8',
    category: 'acabados',
    order: 5,
  },
  {
    id: 'chimney',
    name: 'Chimenea Cálida',
    description: 'Chimenea de ladrillo para encender la fogata en noches frías.',
    cost: 30,
    unlocked: false,
    color: '#b91c1c',
    defaultColor: '#b91c1c',
    category: 'acabados',
    order: 6,
  },
  {
    id: 'path',
    name: 'Camino de Piedras',
    description: 'Hermoso sendero empedrado que conecta la entrada con el jardín.',
    cost: 20,
    unlocked: false,
    color: '#cbd5e1',
    defaultColor: '#cbd5e1',
    category: 'exterior',
    order: 7,
  },
  {
    id: 'fence',
    name: 'Cerca del Jardín',
    description: 'Cerco perimetral de madera para proteger las flores y mascotas.',
    cost: 30,
    unlocked: false,
    color: '#ffffff',
    defaultColor: '#ffffff',
    category: 'exterior',
    order: 8,
  },
  {
    id: 'garden',
    name: 'Césped y Flores',
    description: 'Pradera verde esmeralda con margaritas y tulipanes silvestres.',
    cost: 25,
    unlocked: false,
    color: '#4ade80',
    defaultColor: '#4ade80',
    category: 'exterior',
    order: 9,
  },
  {
    id: 'decorations',
    name: 'Árboles y Farola',
    description: 'Pinos aromáticos, flores colgantes y una farola que alumbra de noche.',
    cost: 40,
    unlocked: false,
    color: '#15803d',
    defaultColor: '#15803d',
    category: 'exterior',
    order: 10,
  },
];

export interface ColorOption {
  name: string;
  hex: string;
  badgeEmoji: string;
}

export const COLOR_PALETTES: Record<
  'walls' | 'roof' | 'door' | 'windows' | 'chimney' | 'fence',
  ColorOption[]
> = {
  walls: [
    { name: 'Amarillo Sol', hex: '#fef08a', badgeEmoji: '☀️' },
    { name: 'Celeste Cielo', hex: '#bae6fd', badgeEmoji: '☁️' },
    { name: 'Rosa Algodón', hex: '#fbcfe8', badgeEmoji: '🌸' },
    { name: 'Verde Menta', hex: '#bbf7d0', badgeEmoji: '🍃' },
    { name: 'Naranja Melocotón', hex: '#fed7aa', badgeEmoji: '🍑' },
    { name: 'Blanco Nieve', hex: '#f8fafc', badgeEmoji: '❄️' },
    { name: 'Lavanda Dulce', hex: '#e9d5ff', badgeEmoji: '💜' },
  ],
  roof: [
    { name: 'Rojo Teja', hex: '#ef4444', badgeEmoji: '🧱' },
    { name: 'Azul Zafiro', hex: '#2563eb', badgeEmoji: '🌊' },
    { name: 'Verde Bosque', hex: '#16a34a', badgeEmoji: '🌲' },
    { name: 'Morado Encantado', hex: '#9333ea', badgeEmoji: '✨' },
    { name: 'Naranja Atardecer', hex: '#ea580c', badgeEmoji: '🌅' },
    { name: 'Chocolate Cálido', hex: '#78350f', badgeEmoji: '🍫' },
  ],
  door: [
    { name: 'Madera Roble', hex: '#d97706', badgeEmoji: '🪵' },
    { name: 'Rojo Pasión', hex: '#dc2626', badgeEmoji: '🔴' },
    { name: 'Turquesa Mar', hex: '#06b6d4', badgeEmoji: '🐬' },
    { name: 'Verde Esmeralda', hex: '#059669', badgeEmoji: '🌿' },
    { name: 'Azul Real', hex: '#1d4ed8', badgeEmoji: '👑' },
    { name: 'Amarillo Girasol', hex: '#eab308', badgeEmoji: '🌻' },
  ],
  windows: [
    { name: 'Azul Cristal', hex: '#38bdf8', badgeEmoji: '🪟' },
    { name: 'Blanco Puro', hex: '#ffffff', badgeEmoji: '🤍' },
    { name: 'Madera Suave', hex: '#b45309', badgeEmoji: '🪵' },
    { name: 'Oro Brillante', hex: '#f59e0b', badgeEmoji: '⭐' },
    { name: 'Menta Fresca', hex: '#34d399', badgeEmoji: '🌱' },
  ],
  chimney: [
    { name: 'Ladrillo Rústico', hex: '#b91c1c', badgeEmoji: '🧱' },
    { name: 'Piedra Gris', hex: '#64748b', badgeEmoji: '🪨' },
    { name: 'Terracota', hex: '#c2410c', badgeEmoji: '🏺' },
    { name: 'Negro Forja', hex: '#334155', badgeEmoji: '⚒️' },
  ],
  fence: [
    { name: 'Blanco Campestre', hex: '#ffffff', badgeEmoji: '🤍' },
    { name: 'Madera Natural', hex: '#b45309', badgeEmoji: '🪵' },
    { name: 'Menta Pastel', hex: '#86efac', badgeEmoji: '🌿' },
    { name: 'Celeste Suave', hex: '#93c5fd', badgeEmoji: '💧' },
    { name: 'Rosa Pastel', hex: '#f472b6', badgeEmoji: '🌷' },
  ],
};
