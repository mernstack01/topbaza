'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Loading() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4 sm:p-6">
      <div className="relative flex flex-col items-center">
        {/* Orqa fon aurasining yorug'ligi */}
        <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-sky-500/20 rounded-full blur-2xl animate-pulse pointer-events-none" />

        {/* Glassmorphic card */}
        <div className="relative bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-blue-100 dark:border-zinc-800/80 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-blue-500/10 flex flex-col items-center text-center max-w-xs">
          
          {/* Aylanuvchi ikki qavatli zamonaviy spinner */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-5 flex items-center justify-center">
            {/* Tashqi aylanuvchi gradient halqa */}
            <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-blue-600 border-r-indigo-500 animate-spin" />
            
            {/* Ichki qarama-qarshi aylanuvchi halqa */}
            <div
              className="absolute inset-2 rounded-full border-2 border-transparent border-b-sky-400 border-l-blue-400 animate-spin"
              style={{ animationDirection: 'reverse', animationDuration: '1.2s' }}
            />
            
            {/* Markazdagi brend nishoni */}
            <img
              src="/uzmo-icon-192.png"
              alt="UzMO.uz"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover shadow-md shadow-blue-500/30"
            />
          </div>

          {/* Brend nomi va yuklanish matni */}
          <h3 className="text-base sm:text-lg font-black text-[#282624] dark:text-zinc-100 tracking-tight mb-1.5">
            <span className="text-blue-700 dark:text-blue-400">Uz</span><span className="text-orange-500">MO</span><span className="text-blue-700 dark:text-blue-400">.uz</span>
          </h3>

          <p className="text-xs font-semibold text-[#67625d] dark:text-zinc-400 flex items-center gap-1.5" suppressHydrationWarning>
            <span>{lang === 'ru' ? 'Подготовка страницы' : 'Sahifa tayyorlanmoqda'}</span>
            <span className="inline-flex gap-0.5">
              <span className="w-1 h-1 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1 h-1 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1 h-1 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '300ms' }} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
