/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { WifiOff, Wifi } from 'lucide-react';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  return (
    <div
      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border transition ${
        isOnline
          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
          : 'bg-amber-100 text-amber-900 border-amber-300 animate-pulse'
      }`}
      title={
        isOnline
          ? 'Conectado a Internet (Modo Offline disponible)'
          : 'Modo Offline Activo: Puedes seguir jugando sin conexión.'
      }
    >
      {isOnline ? (
        <>
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="hidden md:inline">Offline Listo</span>
        </>
      ) : (
        <>
          <WifiOff className="w-3.5 h-3.5 text-amber-600" />
          <span>Sin Conexión (Offline OK)</span>
        </>
      )}
    </div>
  );
};
