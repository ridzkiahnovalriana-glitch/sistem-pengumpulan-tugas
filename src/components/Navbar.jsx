import React, { useState } from 'react';

export default function Navbar({ currentTab, setCurrentTab }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 navy-glass border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20 items-center">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handleTabChange('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-slate-900 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-900/40 border border-blue-400/20 group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-wide text-white group-hover:text-blue-400 transition-colors">
                  OS PORTAL
                </span>
                <span className="bg-blue-950 text-blue-300 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-800/60">
                  Ridzki Ahnovalrian A
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium block">Informatika B 2025</span>
            </div>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-2 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800 shadow-inner">
            <button
              onClick={() => handleTabChange('home')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                currentTab === 'home' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span>Daftar Tugas</span>
            </button>
            <button
              onClick={() => handleTabChange('about')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                currentTab === 'about' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <span>About Me</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-2 pb-4 space-y-2 animate-fadeIn">
          <button
            onClick={() => handleTabChange('home')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'home'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            Daftar Tugas
          </button>
          <button
            onClick={() => handleTabChange('about')}
            className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${
              currentTab === 'about'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            About Me
          </button>
        </div>
      )}
    </nav>
  );
}