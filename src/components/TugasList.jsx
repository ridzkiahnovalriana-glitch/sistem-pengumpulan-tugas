import React, { useState } from 'react';

export default function TugasList({ tugasList, onSelectTugas }) {
  const [filter, setFilter] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTugas = tugasList.filter((t) => {
    const matchesFilter = filter === 'Semua' || t.kategori.toLowerCase() === filter.toLowerCase();
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn relative z-10">
      
      {/* Hero Header Section */}
      <div className="navy-card p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="max-w-3xl space-y-2 sm:space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-800/50 text-blue-300 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full">
            <span>Portofolio Akademik Teknik Informatika</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Arsip Postingan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Tugas & Ujian</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Seluruh pengerjaan tugas disajikan langsung dalam bentuk postingan web interaktif. Klik kartu tugas untuk melihat rincian tabel perhitungan lintasan disk dan scheduling CPU.
          </p>
        </div>

        {/* Filter & Search Controls */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-800/80 flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-3 sm:gap-4">
          
          {/* Search Box */}
          <div className="relative flex-1 w-full">
            <svg className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input 
              type="text" 
              placeholder="Cari materi tugas..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/90 border border-slate-800 text-white placeholder-slate-500 text-xs rounded-xl pl-10 pr-4 py-2.5 sm:py-3 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Filter Pills (Scrollable on small mobile) */}
          <div className="flex bg-slate-950 p-1 sm:p-1.5 rounded-xl border border-slate-800 overflow-x-auto no-scrollbar">
            {['Semua', 'Tugas', 'UTS', 'UAS'].map((kat) => (
              <button
                key={kat}
                onClick={() => setFilter(kat)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  filter === kat 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {kat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {filteredTugas.length > 0 ? (
          filteredTugas.map((tugas) => (
            <div 
              key={tugas.id} 
              className="navy-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:translate-y-[-2px]"
            >
              <div>
                <div className="flex justify-between items-center mb-3 sm:mb-4 gap-2 flex-wrap">
                  <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-blue-400 bg-blue-950/80 border border-blue-800/60 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                    {tugas.kategori}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-400 bg-slate-950 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-slate-800">
                    Deadline: {tugas.deadline}
                  </span>
                </div>

                <h3 
                  onClick={() => onSelectTugas(tugas)}
                  className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 cursor-pointer transition-colors mb-2 sm:mb-3 leading-snug"
                >
                  {tugas.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 mb-5 sm:mb-6 leading-relaxed">
                  {tugas.summary}
                </p>
              </div>

              <button
                onClick={() => onSelectTugas(tugas)}
                className="w-full bg-slate-950 hover:bg-blue-600 border border-slate-800 hover:border-transparent text-white font-bold py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl sm:rounded-2xl transition-all duration-200 text-xs flex items-center justify-between group/btn shadow-md"
              >
                <span>Lihat Detail & Jawaban Lengkap</span>
                <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 sm:py-16 text-center text-xs sm:text-sm text-slate-500 navy-card rounded-2xl sm:rounded-3xl">
            Tidak ditemukan postingan yang cocok.
          </div>
        )}
      </div>

    </div>
  );
}  