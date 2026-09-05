/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SchoolGrade } from '../types';
import { PWAInstallButton } from './PWAInstallButton';
import { OfflineIndicator } from './OfflineIndicator';
import {
  Coins,
  Gem,
  Volume2,
  VolumeX,
  BookOpen,
  Hammer,
  Award,
  Users,
  Sparkles,
} from 'lucide-react';

export type ActiveTab = 'words' | 'shop' | 'challenges' | 'parents';

interface NavigationHeaderProps {
  coins: number;
  gems: number;
  currentGrade: SchoolGrade;
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  voiceEnabled: boolean;
  onToggleVoice: () => void;
  hasUnclaimedChallenges: boolean;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  coins,
  gems,
  currentGrade,
  activeTab,
  onSelectTab,
  soundEnabled,
  onToggleSound,
  voiceEnabled,
  onToggleVoice,
  hasUnclaimedChallenges,
}) => {
  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b-4 border-sky-200 shadow-sm sticky top-0 z-40 px-3 md:px-6 py-2.5">
      <div className="max-w-7xl mx-auto flex flex-col gap-2">
        {/* Top row: Brand + Currency counters + Utilities */}
        <div className="flex items-center justify-between gap-3">
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-500 text-white flex items-center justify-center shadow-md text-xl font-black border-2 border-white">
              🏠
            </div>
            <div>
              <h1 className="text-sm md:text-lg font-black text-slate-800 leading-tight flex items-center gap-1.5">
                <span>Constructor 3D</span>
                <span className="bg-amber-400 text-slate-950 text-[10px] md:text-xs font-black px-2 py-0.5 rounded-full shadow-xs">
                  {currentGrade}º Primaria
                </span>
              </h1>
              <p className="text-[10px] md:text-xs font-semibold text-slate-500 hidden sm:block">
                Aprende a leer y construye tu casa
              </p>
            </div>
          </div>

          {/* Right Actions: Coins, Gems, Sound, PWA */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Coins Counter */}
            <div className="flex items-center gap-1.5 bg-amber-50 border-2 border-amber-300 px-3 py-1.5 rounded-2xl shadow-xs">
              <Coins className="w-5 h-5 text-amber-500 fill-amber-400 animate-pulse" />
              <span className="text-sm md:text-base font-black text-amber-950">
                {coins}
              </span>
            </div>

            {/* Gems Counter */}
            <div className="flex items-center gap-1.5 bg-purple-50 border-2 border-purple-300 px-3 py-1.5 rounded-2xl shadow-xs">
              <Gem className="w-4 h-4 text-purple-600 fill-purple-200" />
              <span className="text-sm md:text-base font-black text-purple-950">
                {gems}
              </span>
            </div>

            {/* Offline Status */}
            <div className="hidden lg:block">
              <OfflineIndicator />
            </div>

            {/* Install PWA Button */}
            <PWAInstallButton />

            {/* Audio Voice Toggle */}
            <button
              onClick={onToggleVoice}
              className={`w-9 h-9 md:w-10 md:h-10 rounded-2xl border flex items-center justify-center btn-3d transition ${
                voiceEnabled
                  ? 'bg-sky-50 border-sky-300 text-sky-700'
                  : 'bg-slate-100 border-slate-300 text-slate-400'
              }`}
              title={voiceEnabled ? 'Voz activada (lee letras y palabras)' : 'Voz desactivada'}
              aria-label="Alternar voz"
            >
              <span className="text-xs font-black">🗣️</span>
            </button>

            {/* Sound FX Toggle */}
            <button
              onClick={onToggleSound}
              className={`w-9 h-9 md:w-10 md:h-10 rounded-2xl border flex items-center justify-center btn-3d transition ${
                soundEnabled
                  ? 'bg-sky-50 border-sky-300 text-sky-700'
                  : 'bg-slate-100 border-slate-300 text-slate-400'
              }`}
              title={soundEnabled ? 'Sonidos activados' : 'Sonidos silenciados'}
              aria-label="Alternar sonido"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-sky-600" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
            </button>
          </div>
        </div>

        {/* Bottom row: Big tactile navigation tabs for kids */}
        <nav className="grid grid-cols-4 gap-2 pt-1">
          {/* Tab 1: Palabras y Aventura */}
          <button
            onClick={() => onSelectTab('words')}
            className={`flex items-center justify-center gap-1.5 md:gap-2.5 py-2.5 px-2 rounded-2xl font-black text-xs md:text-sm btn-3d transition border-b-4 ${
              activeTab === 'words'
                ? 'bg-sky-500 text-white border-sky-700 shadow-md scale-102'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
            }`}
          >
            <BookOpen className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
            <span className="truncate">Palabras</span>
          </button>

          {/* Tab 2: Construir y Tienda */}
          <button
            onClick={() => onSelectTab('shop')}
            className={`flex items-center justify-center gap-1.5 md:gap-2.5 py-2.5 px-2 rounded-2xl font-black text-xs md:text-sm btn-3d transition border-b-4 ${
              activeTab === 'shop'
                ? 'bg-amber-500 text-white border-amber-700 shadow-md scale-102'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
            }`}
          >
            <Hammer className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
            <span className="truncate">Construir</span>
          </button>

          {/* Tab 3: Desafíos Diarios */}
          <button
            onClick={() => onSelectTab('challenges')}
            className={`relative flex items-center justify-center gap-1.5 md:gap-2.5 py-2.5 px-2 rounded-2xl font-black text-xs md:text-sm btn-3d transition border-b-4 ${
              activeTab === 'challenges'
                ? 'bg-purple-600 text-white border-purple-800 shadow-md scale-102'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
            }`}
          >
            <Award className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
            <span className="truncate">Desafíos</span>
            {hasUnclaimedChallenges && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 border-2 border-white rounded-full animate-bounce" />
            )}
          </button>

          {/* Tab 4: Progreso Padres */}
          <button
            onClick={() => onSelectTab('parents')}
            className={`flex items-center justify-center gap-1.5 md:gap-2.5 py-2.5 px-2 rounded-2xl font-black text-xs md:text-sm btn-3d transition border-b-4 ${
              activeTab === 'parents'
                ? 'bg-indigo-600 text-white border-indigo-800 shadow-md scale-102'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
            }`}
          >
            <Users className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
            <span className="truncate">Padres</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
