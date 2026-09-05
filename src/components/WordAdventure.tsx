/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { WordItem, SchoolGrade } from '../types';
import { getWordsByGrade } from '../data/wordBank';
import { playSound, speechHelper } from '../utils/audio';
import {
  Volume2,
  Sparkles,
  RotateCcw,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Trophy,
  Coins,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';

interface WordAdventureProps {
  currentGrade: SchoolGrade;
  onGradeChange: (grade: SchoolGrade) => void;
  onWordCompleted: (word: string, grade: SchoolGrade, attempts: number, earnedCoins: number) => void;
  onGoToShop: () => void;
  soundEnabled: boolean;
  voiceEnabled: boolean;
}

export const WordAdventure: React.FC<WordAdventureProps> = ({
  currentGrade,
  onGradeChange,
  onWordCompleted,
  onGoToShop,
  soundEnabled,
  voiceEnabled,
}) => {
  const words = useMemo(() => getWordsByGrade(currentGrade), [currentGrade]);
  const [wordIndex, setWordIndex] = useState(0);
  const currentWordItem: WordItem = words[wordIndex] || words[0];

  // Placed letter cards
  const [placedLetters, setPlacedLetters] = useState<(string | null)[]>([]);
  // Available card pool: letters with unique keys so duplicates are handled
  const [deckCards, setDeckCards] = useState<{ id: string; letter: string; used: boolean }[]>([]);

  const [attempts, setAttempts] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [shakeError, setShakeError] = useState(false);
  const [earnedReward, setEarnedReward] = useState<{ coins: number; gems: number } | null>(null);

  // Target word characters
  const targetChars = useMemo(() => {
    const raw = currentWordItem.word.toUpperCase();
    return raw.split('');
  }, [currentWordItem]);

  // Setup word letters whenever current word changes
  useEffect(() => {
    const chars = currentWordItem.word.toUpperCase().split('');
    setPlacedLetters(new Array(chars.length).fill(null));
    setAttempts(0);
    setIsSuccess(false);
    setShowHint(false);
    setEarnedReward(null);

    // Create deck cards: target letters + 1 optional distractor for grades > 1
    const cards = chars.map((char, i) => ({
      id: `${char}_${i}_${Math.random()}`,
      letter: char,
      used: false,
    }));

    if (currentGrade >= 2) {
      // Add 1 gentle distractor letter for higher grades
      const distractors = ['A', 'E', 'O', 'S', 'R', 'L', 'M', 'P', 'T'];
      const extra = distractors[Math.floor(Math.random() * distractors.length)];
      cards.push({
        id: `extra_${extra}_${Math.random()}`,
        letter: extra,
        used: false,
      });
    }

    // Shuffle deck
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    setDeckCards(cards);

    // Initial audio speak hint
    if (voiceEnabled) {
      const gradeText = currentGrade === 1 ? '¡Vamos a formar la palabra con letras mayúsculas!' : '¡Forma la palabra!';
      speechHelper.speak(`${gradeText} ${currentWordItem.hint}`, voiceEnabled);
    }
  }, [currentWordItem, currentGrade, voiceEnabled]);

  // Handle card click to place
  const handleCardClick = (cardId: string, letter: string) => {
    if (isSuccess) return;

    // Find first empty slot
    const firstEmptyIndex = placedLetters.findIndex((l) => l === null);
    if (firstEmptyIndex === -1) return;

    // Sound & phoneme
    playSound.cardPop(soundEnabled);
    speechHelper.speakLetter(letter, voiceEnabled);

    // Update placed letters
    const nextPlaced = [...placedLetters];
    nextPlaced[firstEmptyIndex] = letter;
    setPlacedLetters(nextPlaced);

    // Mark card as used in deck
    setDeckCards((prev) =>
      prev.map((c) => (c.id === cardId ? { ...c, used: true } : c))
    );

    // Check if word is complete
    if (firstEmptyIndex === targetChars.length - 1) {
      checkWord(nextPlaced as string[]);
    }
  };

  // Handle removing a placed letter card back to deck
  const handleRemovePlaced = (slotIndex: number) => {
    if (isSuccess) return;
    const letterToRemove = placedLetters[slotIndex];
    if (!letterToRemove) return;

    playSound.cardReturn(soundEnabled);

    const nextPlaced = [...placedLetters];
    nextPlaced[slotIndex] = null;
    setPlacedLetters(nextPlaced);

    // Find first used card in deck with this letter and mark unused
    const cardToUnuse = deckCards.find((c) => c.used && c.letter === letterToRemove);
    if (cardToUnuse) {
      setDeckCards((prev) =>
        prev.map((c) => (c.id === cardToUnuse.id ? { ...c, used: false } : c))
      );
    }
  };

  // Check spelled word
  const checkWord = (spelledLetters: string[]) => {
    const spelled = spelledLetters.join('');
    const target = targetChars.join('');
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (spelled === target) {
      // Correct!
      setIsSuccess(true);
      playSound.success(soundEnabled);
      playSound.coin(soundEnabled);

      // Reward scaled by grade
      const rewardCoins = 15 + currentGrade * 5;
      const rewardGems = currentGrade >= 3 ? 2 : 1;
      setEarnedReward({ coins: rewardCoins, gems: rewardGems });

      // Trigger Confetti
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.65 },
          colors: ['#38bdf8', '#fbbf24', '#34d399', '#f43f5e', '#a855f7'],
        });
      } catch {
        // Confetti fallback
      }

      // Read aloud in Spanish
      speechHelper.speakWord(target, voiceEnabled);

      onWordCompleted(target, currentGrade, newAttempts, rewardCoins);
    } else {
      // Incorrect attempt
      playSound.error(soundEnabled);
      setShakeError(true);
      setTimeout(() => setShakeError(false), 600);

      if (voiceEnabled) {
        speechHelper.speak('¡Casi! Inténtalo de nuevo', voiceEnabled);
      }
    }
  };

  // Reset current slots
  const handleResetCards = () => {
    playSound.cardReturn(soundEnabled);
    setPlacedLetters(new Array(targetChars.length).fill(null));
    setDeckCards((prev) => prev.map((c) => ({ ...c, used: false })));
  };

  // Read word hint out loud
  const handleSpeakHint = () => {
    speechHelper.speak(`${currentWordItem.hint}`, voiceEnabled);
  };

  // Read syllables
  const handleSpeakSyllables = () => {
    const syllableStr = currentWordItem.syllables.join(' ... ');
    speechHelper.speak(syllableStr, voiceEnabled);
  };

  // Next Word
  const handleNextWord = () => {
    playSound.cardPop(soundEnabled);
    setWordIndex((prev) => (prev + 1) % words.length);
  };

  // Prev Word
  const handlePrevWord = () => {
    playSound.cardPop(soundEnabled);
    setWordIndex((prev) => (prev - 1 + words.length) % words.length);
  };

  return (
    <div className="w-full flex flex-col gap-5">
      {/* Grade Selector Bar with large tactile buttons */}
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-md border border-slate-200 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wide">
            Grado Escolar:
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {([1, 2, 3, 4, 5, 6] as SchoolGrade[]).map((g) => (
              <button
                key={g}
                onClick={() => {
                  playSound.cardPop(soundEnabled);
                  onGradeChange(g);
                  setWordIndex(0);
                }}
                className={`px-3 py-1.5 rounded-xl font-black text-sm md:text-base btn-3d transition ${
                  currentGrade === g
                    ? 'bg-amber-500 text-white shadow-md scale-105 border-2 border-amber-600'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
                }`}
              >
                {g}º
              </button>
            ))}
          </div>
        </div>

        {/* Grade 1 Callout: Letras Mayúsculas Imprentas */}
        {currentGrade === 1 && (
          <div className="bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Nivel 1: LETRAS MAYÚSCULAS IMPRENTAS</span>
          </div>
        )}
      </div>

      {/* Main Adventure Card */}
      <div className="bg-white rounded-3xl p-5 md:p-7 shadow-xl border-4 border-sky-100 flex flex-col items-center relative overflow-hidden">
        {/* Decorative subtle background circle */}
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-sky-50 -z-0 pointer-events-none" />

        {/* Word Clue & Navigation */}
        <div className="w-full flex items-center justify-between mb-4 z-10">
          <button
            onClick={handlePrevWord}
            className="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center btn-3d"
            title="Palabra anterior"
            aria-label="Palabra anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Word Index Pill */}
          <div className="flex items-center gap-2 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-bold text-sky-800">
            <span className="text-base">{currentWordItem.iconEmoji}</span>
            <span>
              Palabra {wordIndex + 1} de {words.length}
            </span>
          </div>

          <button
            onClick={handleNextWord}
            className="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center btn-3d"
            title="Siguiente palabra"
            aria-label="Siguiente palabra"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Illustration & Hint Banner */}
        <div className="w-full max-w-xl bg-gradient-to-r from-sky-50 via-indigo-50 to-pink-50 rounded-2xl p-4 md:p-5 border border-sky-200/80 shadow-sm flex flex-col items-center text-center gap-3 z-10 mb-6">
          <div className="text-5xl md:text-6xl animate-bounce drop-shadow">
            {currentWordItem.iconEmoji}
          </div>

          <p className="text-base md:text-xl font-bold text-slate-800 leading-snug">
            "{currentWordItem.hint}"
          </p>

          {/* Syllables sound button */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <button
              onClick={handleSpeakHint}
              className="bg-white/90 hover:bg-white text-sky-700 border border-sky-300 px-3 py-1.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-1.5 shadow-sm btn-3d"
            >
              <Volume2 className="w-4 h-4 text-sky-600" />
              <span>Escuchar pista</span>
            </button>

            <button
              onClick={handleSpeakSyllables}
              className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-3 py-1.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-1.5 shadow-sm btn-3d"
            >
              <HelpCircle className="w-4 h-4 text-indigo-500" />
              <span>
                Sílabas: {currentWordItem.syllables.join(' - ')}
              </span>
            </button>
          </div>
        </div>

        {/* Word Assembly Slots (Target Dropzone) */}
        <div className="w-full flex flex-col items-center gap-3 mb-6 z-10">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Arma la palabra aquí:
          </span>

          <div
            className={`flex flex-wrap items-center justify-center gap-2.5 md:gap-3.5 transition-transform ${
              shakeError ? 'animate-[shake_0.5s_ease-in-out]' : ''
            }`}
          >
            {targetChars.map((_, index) => {
              const letter = placedLetters[index];
              return (
                <button
                  key={index}
                  onClick={() => handleRemovePlaced(index)}
                  disabled={!letter || isSuccess}
                  className={`w-14 h-16 md:w-18 md:h-22 rounded-2xl flex items-center justify-center font-black text-2xl md:text-4xl transition-all ${
                    letter
                      ? 'bg-amber-400 text-slate-900 border-4 border-amber-500 shadow-lg scale-105 btn-3d cursor-pointer'
                      : 'bg-slate-100 text-slate-300 border-3 border-dashed border-slate-300 hover:border-slate-400'
                  }`}
                  aria-label={letter ? `Quitar letra ${letter}` : `Espacio vacío ${index + 1}`}
                >
                  {letter || ''}
                </button>
              );
            })}
          </div>

          {/* Action Helper button */}
          <button
            onClick={handleResetCards}
            disabled={placedLetters.every((l) => l === null) || isSuccess}
            className="text-xs font-bold text-slate-500 hover:text-slate-700 disabled:opacity-30 flex items-center gap-1 mt-1 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Borrar letras para empezar de nuevo</span>
          </button>
        </div>

        {/* Letter Cards Deck (Source to pick from) */}
        {!isSuccess ? (
          <div className="w-full flex flex-col items-center gap-3 z-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Toca las cartas de letras para colocarlas:
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3.5 max-w-xl">
              {deckCards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => handleCardClick(card.id, card.letter)}
                  disabled={card.used}
                  className={`w-13 h-16 md:w-16 md:h-20 rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center transition-all ${
                    card.used
                      ? 'opacity-20 scale-90 bg-slate-200 border-2 border-slate-300 cursor-not-allowed text-slate-400'
                      : 'bg-white hover:bg-amber-50 text-slate-800 border-4 border-amber-300 shadow-md hover:shadow-lg hover:-translate-y-1 btn-3d'
                  }`}
                >
                  {card.letter}
                </button>
              ))}
            </div>

            {/* Hint toggler */}
            {attempts >= 2 && !showHint && (
              <button
                onClick={() => {
                  setShowHint(true);
                  speechHelper.speak(`Pista: La palabra empieza con ${targetChars[0]}`, voiceEnabled);
                }}
                className="mt-3 bg-amber-50 border border-amber-300 text-amber-800 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 animate-pulse btn-3d"
              >
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>¿Necesitas una pista de ayuda?</span>
              </button>
            )}

            {showHint && (
              <div className="mt-2 bg-amber-100 border border-amber-300 text-amber-900 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold text-center">
                💡 Pista: La primera letra es <strong className="text-base font-black underline">{targetChars[0]}</strong> y tiene {targetChars.length} letras.
              </div>
            )}
          </div>
        ) : (
          /* Victory & Reward Screen for this word */
          <div className="w-full max-w-md bg-emerald-50 border-3 border-emerald-300 rounded-2xl p-5 flex flex-col items-center text-center gap-3 z-10 animate-[scaleIn_0.3s_ease-out]">
            <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-xl md:text-2xl font-black text-emerald-800">
              ¡CORRECTO! ¡PALABRA ARMADA!
            </h3>

            <div className="text-2xl md:text-3xl font-black tracking-widest text-emerald-900 bg-white px-6 py-2 rounded-2xl border-2 border-emerald-300 shadow-sm">
              {currentWordItem.word}
            </div>

            {/* Rewards Won */}
            {earnedReward && (
              <div className="flex items-center gap-4 bg-white/90 border border-emerald-200 px-4 py-2 rounded-full text-sm font-bold text-slate-800 shadow-sm">
                <span className="flex items-center gap-1.5 text-amber-600">
                  <Coins className="w-5 h-5 text-amber-500 fill-amber-400" />
                  +{earnedReward.coins} Monedas
                </span>
                <span className="flex items-center gap-1.5 text-purple-600">
                  <Trophy className="w-4 h-4 text-purple-500" />
                  +{earnedReward.gems} Gema
                </span>
              </div>
            )}

            {currentWordItem.funFact && (
              <p className="text-xs text-slate-600 italic bg-white/70 p-2.5 rounded-xl border border-emerald-100">
                ⭐ {currentWordItem.funFact}
              </p>
            )}

            {/* Big Action Buttons */}
            <div className="w-full flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                onClick={handleNextWord}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3 px-4 rounded-2xl shadow-md border-b-4 border-emerald-800 flex items-center justify-center gap-2 btn-3d text-sm md:text-base"
              >
                <span>Siguiente Palabra</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onGoToShop}
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-black py-3 px-4 rounded-2xl shadow-md border-b-4 border-amber-700 flex items-center justify-center gap-2 btn-3d text-sm md:text-base"
              >
                <span>¡Ir a Construir!</span>
                <Coins className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
