/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type SchoolGrade = 1 | 2 | 3 | 4 | 5 | 6;

export interface WordItem {
  id: string;
  word: string; // The word (uppercase for grade 1, or capitalized)
  syllables: string[]; // e.g. ["CA", "SA"]
  hint: string; // Friendly clue
  category: 'construccion' | 'naturaleza' | 'animales' | 'hogar' | 'escuela' | 'fantasia';
  iconEmoji: string;
  grade: SchoolGrade;
  funFact?: string;
}

export type HousePartId =
  | 'foundation'
  | 'walls'
  | 'roof'
  | 'door'
  | 'windows'
  | 'chimney'
  | 'fence'
  | 'garden'
  | 'path'
  | 'decorations';

export interface HousePartConfig {
  id: HousePartId;
  name: string;
  description: string;
  cost: number;
  unlocked: boolean;
  color: string;
  defaultColor: string;
  category: 'base' | 'estructura' | 'acabados' | 'exterior';
  order: number;
}

export interface HouseCustomization {
  wallColor: string;
  roofColor: string;
  doorColor: string;
  windowColor: string;
  chimneyColor: string;
  fenceColor: string;
}

export interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'facil' | 'medio' | 'experto';
  targetCount: number;
  currentCount: number;
  completed: boolean;
  claimed: boolean;
  rewardCoins: number;
  rewardGems: number;
  type: 'words_count' | 'grade_words' | 'streak_words' | 'syllable_words';
}

export interface ParentStats {
  totalWordsCompleted: number;
  correctFirstAttempt: number;
  totalAttempts: number;
  totalCoinsEarned: number;
  timeSpentSeconds: number;
  completedWordsHistory: {
    word: string;
    grade: SchoolGrade;
    timestamp: number;
    attempts: number;
  }[];
  lettersPracticed: Record<string, number>; // letter -> count
  difficultLetters: Record<string, number>; // letter -> error count
  dailyStreak: number;
  lastPlayedDate: string; // YYYY-MM-DD
}

export interface GameState {
  currentGrade: SchoolGrade;
  coins: number;
  gems: number;
  purchasedParts: HousePartId[];
  customization: HouseCustomization;
  activeWordIndex: number;
  soundEnabled: boolean;
  voiceEnabled: boolean;
  dailyChallenges: DailyChallenge[];
  parentStats: ParentStats;
}
