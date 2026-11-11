import React from 'react';

export default function TugasDetail({ tugas, onBack }) {
  return (
    <div className="navy-card rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl relative z-10 animate-fadeIn">
      
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-white mb-6 sm:mb-8 bg-blue-950/80 hover:bg-blue-900/50 border border-blue-800/60 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl transition-all"
      >
        <span>←</span>
        <span>Kembali ke Daftar Tugas</span>
      </button>

      {/* Header Info */}
      <div className="flex flex-wrap justify-between items-center gap-2 mb-3 sm:mb-4">
        <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-blue-300 bg-blue-950 border border-blue-800 px-2.5 py-1 rounded-full">
          {tugas.matkul} • {tugas.kategori}
        </span>
        <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
          Deadline: {tugas.deadline}
        </span>
      </div>

      <h1 className="text-xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4 tracking-tight leading-snug">{tugas.title}</h1>
      <p className="text-slate-300 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 leading-relaxed border-b border-slate-800 pb-4 sm:pb-6">{tugas.summary}</p>

      {/* DETIL TUGAS 1 - DISK SCHEDULING */}
      {tugas.id === 1 && (
        <div className="space-y-4 sm:space-y-6 mb-8">
          <div className="bg-slate-950 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-1.5 sm:space-y-2">
            <p className="font-bold text-blue-400 text-xs sm:text-sm mb-1">Parameter & Antrian Hard Disk</p>
            <p><strong className="text-white">Posisi Head Awal:</strong> Track {tugas.details.headAwal} | <strong className="text-white">Total Track:</strong> {tugas.details.totalTrack} (0 - 199)</p>
            <p className="break-all"><strong className="text-white">Urutan Queue:</strong> [{tugas.details.queue.join(", ")}]</p>
          </div>

          <div className="overflow-x-auto rounded-xl sm:rounded-2xl border border-slate-800 shadow-2xl">
            <table className="w-full text-left border-collapse text-xs min-w-[550px]">
              <thead>
                <tr className="bg-slate-950 text-slate-200 font-bold border-b border-slate-800">
                  <th className="p-3 sm:p-4">Algoritma Disk</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Total Lintasan</th>
                  <th className="p-3 sm:p-4">Arah & Urutan Lintasan Process</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                {tugas.details.algoritmaTable.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/80 transition-colors">
                    <td className="p-3 sm:p-4 font-bold text-white whitespace-nowrap">{item.nama}</td>
                    <td className="p-3 sm:p-4 text-blue-400 font-black whitespace-nowrap">{item.lintasan} Track</td>
                    <td className="p-3 sm:p-4 text-slate-300 font-mono text-[11px] leading-relaxed">{item.arah}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* DETIL TUGAS 2 - CPU SCHEDULING */}
      {tugas.id === 2 && (
        <div className="space-y-4 sm:space-y-6 mb-8">
          <div>
            <p className="font-bold text-blue-400 text-xs sm:text-sm mb-2 sm:mb-3">Tabel Data Masukan Proses</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 text-center text-xs">
              {tugas.details.tabelProses.map((p) => (
                <div key={p.id} className="bg-slate-950 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-800">
                  <p className="font-extrabold text-blue-400 text-base sm:text-lg">Proses {p.id}</p>
                  <p className="text-slate-400 mt-0.5">Tiba: <span className="text-white font-bold">{p.tiba}</span></p>
                  <p className="text-slate-400">Lama: <span className="text-white font-bold">{p.lama}</span></p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl sm:rounded-2xl border border-slate-800 shadow-2xl">
            <div className="p-3 sm:p-4 bg-slate-950 border-b border-slate-800 text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">
              Hasil Perhitungan Rata-Rata Waktu Tanggap
            </div>
            <table className="w-full text-left border-collapse text-xs min-w-[550px]">
              <thead>
                <tr className="bg-slate-950/80 text-slate-200 font-bold border-b border-slate-800">
                  <th className="p-3 sm:p-4">Algoritma CPU</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Rata-Rata Tanggap</th>
                  <th className="p-3 sm:p-4">Alur & Keterangan Eksekusi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                {tugas.details.hasilAlgoritma.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/80 transition-colors">
                    <td className="p-3 sm:p-4 font-bold text-white whitespace-nowrap">{item.nama}</td>
                    <td className="p-3 sm:p-4 text-emerald-400 font-black whitespace-nowrap">{item.avg}</td>
                    <td className="p-3 sm:p-4 text-slate-300 text-xs leading-relaxed">{item.arah}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Google Drive Document Option */}
      {tugas.gdriveUrl && (
        <div className="bg-gradient-to-r from-blue-950/90 to-slate-950 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-blue-800/50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 shadow-xl">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">Tautan Dokumen PDF Google Drive (Opsional)</h4>
            <p className="text-[11px] sm:text-xs text-slate-400">Salinan dokumen pengerjaan tugas lengkap juga tersedia untuk diunduh melalui Google Drive.</p>
          </div>
          <a
            href={tugas.gdriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2.5 sm:py-3 rounded-xl text-xs shadow-lg shadow-blue-600/30 transition-all text-center shrink-0"
          >
            Buka Google Drive ↗
          </a>
        </div>
      )}

    </div>
  );
}