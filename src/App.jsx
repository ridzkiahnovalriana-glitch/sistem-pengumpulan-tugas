import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TugasList from './components/TugasList';
import TugasDetail from './components/TugasDetail';
import AboutPage from './components/AboutPage';
import ParticleBackground from './components/ParticleBackground';
import { initialTugas } from './data/tugasData';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [selectedTugas, setSelectedTugas] = useState(null);
  const [tugasList] = useState(initialTugas);

  // Variabel & fungsi navigasi untuk Footer
  const currentYear = new Date().getFullYear();

  const handleNav = (tab, tugas = null) => {
    setCurrentTab(tab);
    setSelectedTugas(tugas);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#020617] text-slate-100 relative">
      
      {/* Dynamic Lucide Icon Floating Particles */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar 
        currentTab={currentTab} 
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          setSelectedTugas(null);
        }} 
      />

      {/* Main Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 relative z-10">
        {currentTab === 'home' ? (
          selectedTugas ? (
            <TugasDetail 
              tugas={selectedTugas} 
              onBack={() => setSelectedTugas(null)} 
            />
          ) : (
            <TugasList 
              tugasList={tugasList} 
              onSelectTugas={(t) => setSelectedTugas(t)} 
            />
          )
        ) : (
          <AboutPage />
        )}
      </main>

      {/* Footer Maksimal & Rinci (Menyatu dalam App.jsx) */}
      <footer className="navy-glass border-t border-slate-800/80 pt-10 sm:pt-12 pb-6 sm:pb-8 text-slate-400 relative z-10 mt-16 sm:mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Upper Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 pb-8 border-b border-slate-800/80">
            
            {/* Kolom 1: Identitas & Bio Singkat */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-slate-900 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-900/40 border border-blue-400/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="4 17 10 11 4 5" />
                    <line x1="12" y1="19" x2="20" y2="19" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-black text-base tracking-wide">
                    Ridzki Ahnovalrian Arifin
                  </h3>
                  <p className="text-xs text-blue-400 font-semibold">Teknik Informatika — Kelas B</p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Website portofolio interaktif penugasan mata kuliah Sistem Operasi yang dipublikasikan langsung melalui web hosting dan domain mandiri.
              </p>

              <div className="inline-flex items-center gap-2 bg-slate-950/90 border border-slate-800 px-3 py-1.5 rounded-xl text-[11px] font-mono font-bold text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                NIM: 2503010031
              </div>
            </div>

            {/* Kolom 2: Navigasi Halaman & Tugas */}
            <div className="space-y-3">
              <h4 className="text-white font-extrabold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
                Navigasi Portofolio
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button 
                    onClick={() => handleNav('home', null)} 
                    className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-left"
                  >
                    <span className="text-blue-500">➔</span> Beranda / Daftar Tugas
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNav('about', null)} 
                    className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-left"
                  >
                    <span className="text-blue-500">➔</span> About Me (Profil Lengkap)
                  </button>
                </li>
                {tugasList && tugasList.map((t) => (
                  <li key={t.id}>
                    <button 
                      onClick={() => handleNav('home', t)} 
                      className="hover:text-blue-400 transition-colors text-left line-clamp-1 text-slate-400 hover:text-white"
                    >
                      <span className="text-slate-600 mr-1">•</span> {t.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom 3: Detail Identitas Akademik */}
            <div className="space-y-3">
              <h4 className="text-white font-extrabold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
                Informasi Akademik
              </h4>
              <div className="space-y-2 text-xs">
                <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block mb-0.5">Program Studi</span>
                  <span className="text-slate-200 font-semibold">Teknik Informatika</span>
                </div>
                <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block mb-0.5">Angkatan & Kelas</span>
                  <span className="text-slate-200 font-semibold">Angkatan 2025 — Kelas B</span>
                </div>
                <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800/80">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block mb-0.5">Mata Kuliah Utama</span>
                  <span className="text-slate-200 font-semibold">Sistem Operasi</span>
                </div>
              </div>
            </div>

            {/* Kolom 4: Stack & Status Web */}
            <div className="space-y-3">
              <h4 className="text-white font-extrabold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
                Teknologi & Server
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dibuat menggunakan bundler modern React.js dan Tailwind CSS v3 untuk tampilan cepat dan responsif di seluruh perangkat.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="bg-blue-950 text-blue-300 border border-blue-800/60 text-[10px] font-bold px-2.5 py-1 rounded-lg">
                  React.js
                </span>
                <span className="bg-blue-950 text-blue-300 border border-blue-800/60 text-[10px] font-bold px-2.5 py-1 rounded-lg">
                  Tailwind CSS v3
                </span>
                <span className="bg-slate-900 text-slate-300 border border-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-lg">
                  Self-Hosted
                </span>
              </div>
            </div>

          </div>

          {/* Lower Credit Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
            <p className="text-slate-400 text-center sm:text-left">
              &copy; {currentYear} <strong className="text-white">Ridzki Ahnovalrian Arifin</strong> (NIM: 2503010031). All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-slate-500 text-[11px]">
              <span>Informatika B 2025</span>
              <span>•</span>
              <span>Portofolio Sistem Operasi</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}