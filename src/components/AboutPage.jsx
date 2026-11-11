import React from 'react';
import fotoRidzki from '../assets/ridzki.jpeg';

export default function AboutPage() {
  const profile = {
    nama: "Ridzki Ahnovalrian Arifin",
    nim: "2503010031",
    prodi: "Teknik Informatika",
    angkatan: "2025",
    kelas: "B",
    matkul: "Sistem Operasi",
    bio: "Halo! Saya Ridzki Ahnovalrian Arifin, mahasiswa Program Studi Teknik Informatika Angkatan 2025 Kelas B. Website ini dikembangkan menggunakan React.js dan Tailwind CSS v3 untuk mempublikasikan hasil pengerjaan seluruh tugas mata kuliah Sistem Operasi secara langsung dalam bentuk postingan web."
  };

  return (
    <div className="max-w-4xl mx-auto py-2 sm:py-4 animate-fadeIn relative z-10">
      <div className="navy-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl">
        
        {/* Profile Card Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-slate-800">
          
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/40 bg-slate-950 flex-shrink-0 group relative">
            <img 
              src={fotoRidzki} 
              alt={profile.nama} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/150?text=Ridzki";
              }}
            />
          </div>

          <div className="text-center sm:text-left space-y-2 sm:space-y-3">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">{profile.nama}</h1>
              <p className="text-xs sm:text-sm font-bold text-blue-400 mt-0.5">{profile.prodi} — Kelas {profile.kelas}</p>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 bg-slate-950 text-slate-200 text-[11px] sm:text-xs font-mono font-bold px-3 py-1.5 rounded-xl border border-slate-800">
                NIM: {profile.nim}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-950 text-slate-200 text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-800">
                Angkatan {profile.angkatan}
              </span>
            </div>
          </div>
        </div>

        {/* Details & Bio */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h2 className="text-base sm:text-lg font-extrabold text-white mb-2">Profil Mahasiswa</h2>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              {profile.bio}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-800">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Mata Kuliah</p>
              <p className="text-sm sm:text-base font-extrabold text-white">{profile.matkul}</p>
            </div>
            <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-800">
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Status Publikasi</p>
              <p className="text-sm sm:text-base font-extrabold text-white">Hosting & Domain Mandiri</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}