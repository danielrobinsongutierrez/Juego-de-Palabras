/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Smartphone, X } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-1.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 text-xs font-black text-white shadow-md border-b-2 border-emerald-800 btn-3d transition"
        title="Instalar para jugar sin conexión"
      >
        <Download className="w-4 h-4" />
        <span className="hidden sm:inline">Instalar App Offline</span>
        <span className="sm:hidden">Instalar</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 rounded-2xl border border-sky-300 bg-white/80 px-2.5 py-1.5 text-xs font-bold text-sky-800 hover:bg-white shadow-sm btn-3d"
          title="Instalar en iPad o iPhone"
        >
          <Smartphone className="w-3.5 h-3.5 text-sky-600" />
          <span className="hidden sm:inline">Jugar Offline</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
            <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border-4 border-sky-200 flex flex-col gap-4 text-center">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-800">
                Instalar en iPhone / iPad
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed text-left bg-sky-50 p-3.5 rounded-2xl border border-sky-100">
                1. Toca el botón <strong>Compartir</strong> en la barra de Safari (icono con flecha hacia arriba).
                <br />
                2. Desliza hacia abajo y pulsa en <strong>"Añadir a pantalla de inicio"</strong>.
                <br />
                3. ¡Listo! Podrás abrirlo y jugar 100% sin internet en cualquier lugar.
              </p>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="w-full rounded-2xl bg-sky-600 py-2.5 text-sm font-black text-white hover:bg-sky-700 btn-3d"
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
