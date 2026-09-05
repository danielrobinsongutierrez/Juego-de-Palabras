/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { ParentStats, SchoolGrade } from '../types';
import {
  ShieldCheck,
  Award,
  BookOpen,
  Target,
  Sparkles,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  GraduationCap,
  Calendar,
} from 'lucide-react';

interface ParentDashboardProps {
  stats: ParentStats;
  currentGrade: SchoolGrade;
  onGradeChange: (grade: SchoolGrade) => void;
  onResetProgress: () => void;
  onClose: () => void;
}

export const ParentDashboard: React.FC<ParentDashboardProps> = ({
  stats,
  currentGrade,
  onGradeChange,
  onResetProgress,
  onClose,
}) => {
  // Parent security gate state
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [mathQuestion] = useState(() => {
    const a = Math.floor(Math.random() * 8) + 4;
    const b = Math.floor(Math.random() * 6) + 3;
    return { a, b, ans: a + b };
  });
  const [userAnswer, setUserAnswer] = useState('');
  const [gateError, setGateError] = useState(false);

  // Confirm reset dialog
  const [confirmReset, setConfirmReset] = useState(false);

  // Accuracy calculation
  const accuracy = useMemo(() => {
    if (stats.totalAttempts === 0) return 100;
    return Math.round((stats.correctFirstAttempt / Math.max(1, stats.totalWordsCompleted)) * 100);
  }, [stats]);

  // Top practiced letters
  const topPracticedLetters = useMemo(() => {
    return Object.entries(stats.lettersPracticed)
      .sort(([, a], [, b]) => Number(b) - Number(a))
      .slice(0, 8);
  }, [stats.lettersPracticed]);

  // Difficult letters
  const difficultLetters = useMemo(() => {
    return Object.entries(stats.difficultLetters)
      .sort(([, a], [, b]) => Number(b) - Number(a))
      .slice(0, 5);
  }, [stats.difficultLetters]);

  const handleGateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(userAnswer, 10) === mathQuestion.ans) {
      setIsUnlocked(true);
      setGateError(false);
    } else {
      setGateError(true);
      setUserAnswer('');
    }
  };

  // Educational advice by grade
  const gradeAdvice: Record<SchoolGrade, string> = {
    1: 'En 1º de Primaria el objetivo principal es la asociación fonema-grafema con mayúsculas imprentas y sílabas directas (ma, pa, sa). Motiva al niño a decir en voz alta cada letra antes de colocarla.',
    2: 'En 2º de Primaria el niño refuerza combinaciones trabadas (pl, tr, br) y palabras de 2 y 3 sílabas. Felicítale por reconocer los grupos de letras sin titubear.',
    3: 'En 3º de Primaria se refuerzan distinciones ortográficas (b/v, c/s/z, ll/y). Puedes repasar las palabras practicadas en casa inventando oraciones con ellas.',
    4: 'En 4º de Primaria ampliamos el vocabulario descriptivo y reglas de acentuación básica. La construcción de la casa refuerza la comprensión espacial y técnica.',
    5: 'En 5º de Primaria el vocabulario incluye conceptos de arquitectura, física y sostenibilidad. Excelente para vincular la lectura con ciencias naturales.',
    6: 'En 6º de Primaria se trabaja la fluidez léxica avanzada, términos compuestos y sinónimos arquitectónicos.',
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Parent Gate Shield */}
      {!isUnlocked ? (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border-4 border-slate-200 flex flex-col items-center text-center max-w-md mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
            <ShieldCheck className="w-9 h-9" />
          </div>

          <h3 className="text-xl md:text-2xl font-black text-slate-800">
            Control para Padres
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mt-1 mb-5">
            Para ver las estadísticas educativas y ajustar el grado escolar, resuelve esta pequeña suma:
          </p>

          <form onSubmit={handleGateSubmit} className="w-full flex flex-col gap-4">
            <div className="bg-slate-100 p-4 rounded-2xl text-2xl font-black text-slate-800 tracking-wider">
              {mathQuestion.a} + {mathQuestion.b} = ?
            </div>

            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Escribe el resultado"
              autoFocus
              className="w-full text-center text-xl font-bold py-3 px-4 rounded-2xl border-2 border-slate-300 focus:border-indigo-500 focus:outline-none"
            />

            {gateError && (
              <span className="text-xs font-bold text-rose-500">
                Respuesta incorrecta. Inténtalo de nuevo.
              </span>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-3 rounded-2xl shadow-md border-b-4 border-indigo-800 btn-3d"
            >
              Entrar al Panel de Padres
            </button>

            <button
              type="button"
              onClick={onClose}
              className="text-xs font-bold text-slate-400 hover:text-slate-600"
            >
              Volver al juego
            </button>
          </form>
        </div>
      ) : (
        /* Unlocked Parent Dashboard */
        <div className="flex flex-col gap-5">
          {/* Header */}
          <div className="bg-white rounded-3xl p-5 md:p-6 shadow-md border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-13 h-13 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-800">
                  Informe de Progreso Educativo
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Seguimiento pedagógico de lectura, precisión y vocabulario adquirido.
                </p>
              </div>
            </div>

            {/* Change Grade Selector for Parents */}
            <div className="flex items-center gap-2 bg-indigo-50 px-3.5 py-2 rounded-2xl border border-indigo-200">
              <span className="text-xs font-bold text-indigo-900">Grado:</span>
              <select
                value={currentGrade}
                onChange={(e) => onGradeChange(parseInt(e.target.value, 10) as SchoolGrade)}
                className="bg-white text-indigo-900 text-xs font-black px-2 py-1 rounded-xl border border-indigo-300 focus:outline-none"
              >
                <option value={1}>1º Primaria (Mayúsculas)</option>
                <option value={2}>2º Primaria (Trabadas)</option>
                <option value={3}>3º Primaria (Ortografía)</option>
                <option value={4}>4º Primaria (Vocabulario)</option>
                <option value={5}>5º Primaria (Avanzado)</option>
                <option value={6}>6º Primaria (Maestro)</option>
              </select>
            </div>
          </div>

          {/* Core Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Metric 1 */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Palabras Aprendidas
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-800">
                  {stats.totalWordsCompleted}
                </span>
                <span className="text-xs text-emerald-600 font-bold">palabras</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Acierto al 1er Intento
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-emerald-600">
                  {accuracy}%
                </span>
                <span className="text-xs text-slate-500 font-medium">precisión</span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Racha de Días
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-amber-500">
                  {stats.dailyStreak}
                </span>
                <span className="text-xs text-slate-500 font-medium">días activos</span>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Total Intentos
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-indigo-600">
                  {stats.totalAttempts}
                </span>
                <span className="text-xs text-slate-500 font-medium">intentos</span>
              </div>
            </div>
          </div>

          {/* Pedagogical Guidance Box */}
          <div className="bg-indigo-50/70 border border-indigo-200 rounded-3xl p-5 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-indigo-900 font-black text-sm">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Consejo pedagógico para {currentGrade}º de Primaria:</span>
            </div>
            <p className="text-xs md:text-sm text-indigo-800 leading-relaxed">
              {gradeAdvice[currentGrade]}
            </p>
          </div>

          {/* Letters Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Top Letters */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col gap-3">
              <h4 className="text-sm font-black text-slate-800 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Letras más practicadas:</span>
              </h4>

              {topPracticedLetters.length === 0 ? (
                <p className="text-xs text-slate-400">
                  Aún no hay suficientes datos registrados.
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {topPracticedLetters.map(([letter, count]) => (
                    <div
                      key={letter}
                      className="bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl flex items-center gap-2"
                    >
                      <span className="font-black text-emerald-800 text-sm">
                        {letter}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-md">
                        {count}x
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Difficult Letters / Reinforcement */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col gap-3">
              <h4 className="text-sm font-black text-slate-800 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>Letras sugeridas para reforzar:</span>
              </h4>

              {difficultLetters.length === 0 ? (
                <p className="text-xs text-slate-500">
                  ¡Excelente! No se registran tropiezos frecuentes en ninguna letra.
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {difficultLetters.map(([letter, count]) => (
                    <div
                      key={letter}
                      className="bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl flex items-center gap-2"
                    >
                      <span className="font-black text-amber-900 text-sm">
                        {letter}
                      </span>
                      <span className="text-xs font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded-md">
                        {count} errores
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* History of Completed Words */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col gap-3">
            <h4 className="text-sm font-black text-slate-800 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Historial de palabras resueltas recientemente:</span>
            </h4>

            {stats.completedWordsHistory.length === 0 ? (
              <p className="text-xs text-slate-400">
                El niño aún no ha completado palabras en esta sesión.
              </p>
            ) : (
              <div className="max-h-48 overflow-y-auto divide-y divide-slate-100">
                {stats.completedWordsHistory
                  .slice(-15)
                  .reverse()
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="py-2.5 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-black text-slate-800 text-sm">
                          {item.word}
                        </span>
                        <span className="bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded-md">
                          Grado {item.grade}º
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`font-bold px-2 py-0.5 rounded-md ${
                            item.attempts === 1
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {item.attempts === 1
                            ? 'Al primer intento'
                            : `${item.attempts} intentos`}
                        </span>
                        <span className="text-slate-400">
                          {new Date(item.timestamp).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Reset progress area */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            {!confirmReset ? (
              <button
                onClick={() => setConfirmReset(true)}
                className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reiniciar datos y comenzar casa desde cero</span>
              </button>
            ) : (
              <div className="flex items-center gap-3 bg-rose-50 border border-rose-200 p-2.5 rounded-xl">
                <span className="text-xs font-bold text-rose-800">
                  ¿Estás seguro de borrar los progresos?
                </span>
                <button
                  onClick={() => {
                    onResetProgress();
                    setConfirmReset(false);
                    onClose();
                  }}
                  className="bg-rose-600 text-white font-bold text-xs px-3 py-1 rounded-lg hover:bg-rose-700"
                >
                  Sí, reiniciar
                </button>
                <button
                  onClick={() => setConfirmReset(false)}
                  className="text-xs font-bold text-slate-500 hover:text-slate-700"
                >
                  Cancelar
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              className="bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs md:text-sm px-5 py-2.5 rounded-xl btn-3d"
            >
              Volver al Juego
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
