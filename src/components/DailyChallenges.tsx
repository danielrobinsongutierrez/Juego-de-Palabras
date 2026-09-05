/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DailyChallenge } from '../types';
import { playSound } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  Flame,
  Award,
  Gift,
  Coins,
  Gem,
  CheckCircle2,
  Calendar,
  Sparkles,
} from 'lucide-react';

interface DailyChallengesProps {
  challenges: DailyChallenge[];
  dailyStreak: number;
  onClaimReward: (challengeId: string) => void;
  soundEnabled: boolean;
}

export const DailyChallenges: React.FC<DailyChallengesProps> = ({
  challenges,
  dailyStreak,
  onClaimReward,
  soundEnabled,
}) => {
  const handleClaim = (c: DailyChallenge) => {
    if (!c.completed || c.claimed) return;
    playSound.fanfare(soundEnabled);
    playSound.coin(soundEnabled);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.5 },
      });
    } catch {
      // Confetti fallback
    }

    onClaimReward(c.id);
  };

  const getDifficultyBadge = (diff: DailyChallenge['difficulty']) => {
    switch (diff) {
      case 'facil':
        return (
          <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
            Fácil
          </span>
        );
      case 'medio':
        return (
          <span className="bg-amber-100 text-amber-800 border border-amber-300 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
            Medio
          </span>
        );
      case 'experto':
        return (
          <span className="bg-rose-100 text-rose-800 border border-rose-300 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
            Experto
          </span>
        );
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Daily Streak Header Banner */}
      <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-3xl p-5 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner">
            <Flame className="w-8 h-8 text-yellow-200 fill-yellow-300 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-black">¡Racha de Constructor!</h3>
              <span className="bg-white text-orange-600 text-xs font-black px-2.5 py-0.5 rounded-full">
                {dailyStreak} Días
              </span>
            </div>
            <p className="text-xs sm:text-sm text-yellow-100 font-medium">
              Vuelve cada día para ganar monedas extras y construir más rápido.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-2xl">
          <Calendar className="w-5 h-5 text-yellow-200" />
          <span className="text-xs sm:text-sm font-bold">Retos de hoy</span>
        </div>
      </div>

      {/* Challenges List */}
      <div className="flex flex-col gap-3.5">
        {challenges.map((challenge) => {
          const progressPercent = Math.min(
            100,
            Math.round((challenge.currentCount / challenge.targetCount) * 100)
          );

          return (
            <div
              key={challenge.id}
              className={`rounded-3xl p-5 border-3 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                challenge.claimed
                  ? 'bg-slate-50 border-slate-200 opacity-70'
                  : challenge.completed
                  ? 'bg-emerald-50 border-emerald-300 shadow-md ring-2 ring-emerald-200'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-start gap-4 flex-1">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-sm ${
                    challenge.claimed
                      ? 'bg-slate-200 text-slate-500'
                      : challenge.completed
                      ? 'bg-emerald-500 text-white'
                      : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {challenge.claimed ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <Award className="w-6 h-6" />
                  )}
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-black text-slate-800">
                      {challenge.title}
                    </h4>
                    {getDifficultyBadge(challenge.difficulty)}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600">
                    {challenge.description}
                  </p>

                  {/* Progress bar */}
                  <div className="flex items-center gap-3 pt-2 max-w-sm">
                    <div className="flex-1 bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          challenge.completed ? 'bg-emerald-500' : 'bg-amber-500'
                        }`}
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    <span className="text-xs font-black text-slate-600 min-w-14 text-right">
                      {challenge.currentCount} / {challenge.targetCount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Reward & Claim button */}
              <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                <div className="flex items-center gap-2.5 font-black text-xs sm:text-sm">
                  <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200">
                    <Coins className="w-4 h-4 fill-amber-400 text-amber-500" />
                    <span>+{challenge.rewardCoins}</span>
                  </div>
                  <div className="flex items-center gap-1 text-purple-600 bg-purple-50 px-2.5 py-1 rounded-xl border border-purple-200">
                    <Gem className="w-4 h-4 text-purple-500" />
                    <span>+{challenge.rewardGems}</span>
                  </div>
                </div>

                {challenge.claimed ? (
                  <span className="text-xs font-bold text-slate-400 bg-slate-100 px-4 py-2 rounded-xl">
                    Reclamado
                  </span>
                ) : challenge.completed ? (
                  <button
                    onClick={() => handleClaim(challenge)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md border-b-3 border-emerald-700 flex items-center gap-1.5 animate-bounce btn-3d"
                  >
                    <Gift className="w-4 h-4" />
                    <span>¡Reclamar!</span>
                  </button>
                ) : (
                  <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-xl">
                    En progreso
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
