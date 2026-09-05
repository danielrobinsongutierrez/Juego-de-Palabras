/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameState, DailyChallenge } from '../types';

const STORAGE_KEY = 'constructor_palabras_3d_state_v1';

export function getTodayDateString(): string {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

export function generateDailyChallenges(): DailyChallenge[] {
  return [
    {
      id: 'daily_facil',
      title: 'Desafío Constructor Novato',
      description: 'Construye 3 palabras correctamente.',
      difficulty: 'facil',
      targetCount: 3,
      currentCount: 0,
      completed: false,
      claimed: false,
      rewardCoins: 25,
      rewardGems: 1,
      type: 'words_count',
    },
    {
      id: 'daily_medio',
      title: 'Desafío Maestro de Sílabas',
      description: 'Completa 5 palabras sin cometer errores.',
      difficulty: 'medio',
      targetCount: 5,
      currentCount: 0,
      completed: false,
      claimed: false,
      rewardCoins: 50,
      rewardGems: 3,
      type: 'streak_words',
    },
    {
      id: 'daily_experto',
      title: 'Desafío Gran Arquitecto',
      description: 'Forma 8 palabras de tu grado escolar.',
      difficulty: 'experto',
      targetCount: 8,
      currentCount: 0,
      completed: false,
      claimed: false,
      rewardCoins: 100,
      rewardGems: 5,
      type: 'grade_words',
    },
  ];
}

export const INITIAL_STATE: GameState = {
  currentGrade: 1,
  coins: 20, // Free starter bonus to buy foundation!
  gems: 1,
  purchasedParts: [],
  customization: {
    wallColor: '#fef08a', // Pastel yellow
    roofColor: '#ef4444', // Warm red
    doorColor: '#d97706', // Oak wood
    windowColor: '#38bdf8', // Sky blue glass
    chimneyColor: '#b91c1c', // Rustic brick
    fenceColor: '#ffffff', // Clean white
  },
  activeWordIndex: 0,
  soundEnabled: true,
  voiceEnabled: true,
  dailyChallenges: generateDailyChallenges(),
  parentStats: {
    totalWordsCompleted: 0,
    correctFirstAttempt: 0,
    totalAttempts: 0,
    totalCoinsEarned: 20,
    timeSpentSeconds: 0,
    completedWordsHistory: [],
    lettersPracticed: {},
    difficultLetters: {},
    dailyStreak: 1,
    lastPlayedDate: getTodayDateString(),
  },
};

export function loadGameState(): GameState {
  if (typeof window === 'undefined') return INITIAL_STATE;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_STATE;

    const parsed = JSON.parse(raw) as Partial<GameState>;
    const today = getTodayDateString();

    // Check if daily challenges need reset
    let dailyChallenges = parsed.dailyChallenges || generateDailyChallenges();
    const lastPlayed = parsed.parentStats?.lastPlayedDate;

    if (lastPlayed && lastPlayed !== today) {
      dailyChallenges = generateDailyChallenges();
    }

    return {
      ...INITIAL_STATE,
      ...parsed,
      customization: {
        ...INITIAL_STATE.customization,
        ...(parsed.customization || {}),
      },
      parentStats: {
        ...INITIAL_STATE.parentStats,
        ...(parsed.parentStats || {}),
        lastPlayedDate: today,
        dailyStreak:
          lastPlayed === today
            ? parsed.parentStats?.dailyStreak || 1
            : (parsed.parentStats?.dailyStreak || 0) + 1,
      },
      dailyChallenges,
    };
  } catch {
    return INITIAL_STATE;
  }
}

export function saveGameState(state: GameState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save to localStorage:', err);
  }
}

export function resetGameProgress(): GameState {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
  return INITIAL_STATE;
}
