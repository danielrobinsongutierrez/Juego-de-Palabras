/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  GameState,
  SchoolGrade,
  HousePartId,
  HousePartConfig,
  HouseCustomization,
} from './types';
import {
  loadGameState,
  saveGameState,
  resetGameProgress,
} from './utils/storage';
import { ThreeHouseScene } from './components/ThreeHouseScene';
import { WordAdventure } from './components/WordAdventure';
import { BuildingShop } from './components/BuildingShop';
import { DailyChallenges } from './components/DailyChallenges';
import { ParentDashboard } from './components/ParentDashboard';
import { NavigationHeader, ActiveTab } from './components/NavigationHeader';
import { OfflineIndicator } from './components/OfflineIndicator';

export default function App() {
  const [state, setState] = useState<GameState>(() => loadGameState());
  const [activeTab, setActiveTab] = useState<ActiveTab>('words');
  const [newlyAddedPartId, setNewlyAddedPartId] = useState<HousePartId | null>(null);
  const [floatingNotice, setFloatingNotice] = useState<string | null>(null);

  // Auto-save state to localStorage whenever modified
  useEffect(() => {
    saveGameState(state);
  }, [state]);

  // Track time spent in session for parent stats
  useEffect(() => {
    const timer = setInterval(() => {
      setState((prev) => ({
        ...prev,
        parentStats: {
          ...prev.parentStats,
          timeSpentSeconds: prev.parentStats.timeSpentSeconds + 10,
        },
      }));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // Show friendly temporary banner
  const showNotice = (msg: string) => {
    setFloatingNotice(msg);
    setTimeout(() => {
      setFloatingNotice(null);
    }, 3500);
  };

  // Handler: When a word is successfully solved
  const handleWordCompleted = useCallback(
    (word: string, grade: SchoolGrade, attempts: number, earnedCoins: number) => {
      setState((prev) => {
        const nextCoins = prev.coins + earnedCoins;
        const nextTotalCoins = prev.parentStats.totalCoinsEarned + earnedCoins;

        // Update letter frequencies and errors
        const lettersPracticed = { ...prev.parentStats.lettersPracticed };
        word.split('').forEach((char) => {
          lettersPracticed[char] = (lettersPracticed[char] || 0) + 1;
        });

        const difficultLetters = { ...prev.parentStats.difficultLetters };
        if (attempts > 1) {
          // If had attempts, record letters as needing attention
          word.split('').forEach((char) => {
            difficultLetters[char] = (difficultLetters[char] || 0) + 1;
          });
        }

        // Update Daily Challenges progress
        const nextChallenges = prev.dailyChallenges.map((ch) => {
          if (ch.completed) return ch;
          let inc = false;
          if (ch.type === 'words_count') inc = true;
          if (ch.type === 'streak_words' && attempts === 1) inc = true;
          if (ch.type === 'grade_words' && grade === prev.currentGrade) inc = true;

          const newCount = inc ? ch.currentCount + 1 : ch.currentCount;
          return {
            ...ch,
            currentCount: newCount,
            completed: newCount >= ch.targetCount,
          };
        });

        // Parent completed history record
        const nextHistory = [
          ...prev.parentStats.completedWordsHistory,
          {
            word,
            grade,
            timestamp: Date.now(),
            attempts,
          },
        ];

        return {
          ...prev,
          coins: nextCoins,
          dailyChallenges: nextChallenges,
          parentStats: {
            ...prev.parentStats,
            totalWordsCompleted: prev.parentStats.totalWordsCompleted + 1,
            correctFirstAttempt:
              attempts === 1
                ? prev.parentStats.correctFirstAttempt + 1
                : prev.parentStats.correctFirstAttempt,
            totalAttempts: prev.parentStats.totalAttempts + attempts,
            totalCoinsEarned: nextTotalCoins,
            lettersPracticed,
            difficultLetters,
            completedWordsHistory: nextHistory,
          },
        };
      });

      showNotice(`¡Ganaste +${earnedCoins} monedas! Ya puedes ir a construir tu casa.`);
    },
    []
  );

  // Handler: Buying a house part with earned coins
  const handleBuyPart = useCallback((part: HousePartConfig) => {
    setState((prev) => {
      if (prev.coins < part.cost || prev.purchasedParts.includes(part.id)) {
        return prev;
      }
      return {
        ...prev,
        coins: prev.coins - part.cost,
        purchasedParts: [...prev.purchasedParts, part.id],
      };
    });

    setNewlyAddedPartId(part.id);
    setTimeout(() => setNewlyAddedPartId(null), 1000);
    showNotice(`¡"${part.name}" agregada a tu casa 3D!`);
  }, []);

  // Handler: Color Customization
  const handleUpdateColor = useCallback(
    (partKey: keyof HouseCustomization, colorHex: string) => {
      setState((prev) => ({
        ...prev,
        customization: {
          ...prev.customization,
          [partKey]: colorHex,
        },
      }));
    },
    []
  );

  // Handler: Claiming a daily challenge reward
  const handleClaimChallenge = useCallback((challengeId: string) => {
    setState((prev) => {
      const target = prev.dailyChallenges.find((c) => c.id === challengeId);
      if (!target || !target.completed || target.claimed) return prev;

      return {
        ...prev,
        coins: prev.coins + target.rewardCoins,
        gems: prev.gems + target.rewardGems,
        dailyChallenges: prev.dailyChallenges.map((c) =>
          c.id === challengeId ? { ...c, claimed: true } : c
        ),
      };
    });
    showNotice('¡Recompensa de desafío diario reclamada!');
  }, []);

  // Handler: Change School Grade
  const handleGradeChange = useCallback((newGrade: SchoolGrade) => {
    setState((prev) => ({
      ...prev,
      currentGrade: newGrade,
    }));
    showNotice(`Cambiado a ${newGrade}º de Primaria.`);
  }, []);

  // Handler: Sound & Voice Toggles
  const handleToggleSound = useCallback(() => {
    setState((prev) => ({ ...prev, soundEnabled: !prev.soundEnabled }));
  }, []);

  const handleToggleVoice = useCallback(() => {
    setState((prev) => ({ ...prev, voiceEnabled: !prev.voiceEnabled }));
  }, []);

  // Handler: Reset progress
  const handleResetProgress = useCallback(() => {
    const reset = resetGameProgress();
    setState(reset);
    showNotice('Juego reiniciado correctamente.');
  }, []);

  // Check if any daily challenges are ready to claim
  const hasUnclaimedChallenges = useMemo(() => {
    return state.dailyChallenges.some((c) => c.completed && !c.claimed);
  }, [state.dailyChallenges]);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col antialiased selection:bg-amber-300">
      {/* Top Navigation Header */}
      <NavigationHeader
        coins={state.coins}
        gems={state.gems}
        currentGrade={state.currentGrade}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        soundEnabled={state.soundEnabled}
        onToggleSound={handleToggleSound}
        voiceEnabled={state.voiceEnabled}
        onToggleVoice={handleToggleVoice}
        hasUnclaimedChallenges={hasUnclaimedChallenges}
      />

      {/* Temporary Floating Achievement Notice */}
      {floatingNotice && (
        <div className="fixed top-28 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 text-white backdrop-blur-md px-5 py-2.5 rounded-full shadow-2xl border border-white/20 text-xs md:text-sm font-black flex items-center gap-2 animate-bounce">
          <span>✨</span>
          <span>{floatingNotice}</span>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 md:p-6 flex flex-col gap-6">
        {/* Responsive Grid: 3D House Scene & Active Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* 3D Scene Viewport (Always visible and interactive on top/left) */}
          <div className="lg:col-span-5 flex flex-col gap-3 lg:sticky lg:top-24">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <span>Tu Casa en Construcción (3D)</span>
              </span>
              <div className="lg:hidden">
                <OfflineIndicator />
              </div>
            </div>

            <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-[460px]">
              <ThreeHouseScene
                purchasedParts={state.purchasedParts}
                customization={state.customization}
                newlyAddedPartId={newlyAddedPartId}
              />
            </div>
          </div>

          {/* Dynamic Interactive Component Panel */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {activeTab === 'words' && (
              <WordAdventure
                currentGrade={state.currentGrade}
                onGradeChange={handleGradeChange}
                onWordCompleted={handleWordCompleted}
                onGoToShop={() => setActiveTab('shop')}
                soundEnabled={state.soundEnabled}
                voiceEnabled={state.voiceEnabled}
              />
            )}

            {activeTab === 'shop' && (
              <BuildingShop
                coins={state.coins}
                purchasedParts={state.purchasedParts}
                customization={state.customization}
                onBuyPart={handleBuyPart}
                onUpdateColor={handleUpdateColor}
                onGoToWords={() => setActiveTab('words')}
                soundEnabled={state.soundEnabled}
              />
            )}

            {activeTab === 'challenges' && (
              <DailyChallenges
                challenges={state.dailyChallenges}
                dailyStreak={state.parentStats.dailyStreak}
                onClaimReward={handleClaimChallenge}
                soundEnabled={state.soundEnabled}
              />
            )}

            {activeTab === 'parents' && (
              <ParentDashboard
                stats={state.parentStats}
                currentGrade={state.currentGrade}
                onGradeChange={handleGradeChange}
                onResetProgress={handleResetProgress}
                onClose={() => setActiveTab('words')}
              />
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 text-center text-xs text-slate-400 border-t border-slate-200 mt-auto bg-white/50">
        <p>
          Constructor de Palabras 3D — Aprende a leer jugando y construyendo • Compatible 100% Sin Conexión (Offline)
        </p>
      </footer>
    </div>
  );
}
