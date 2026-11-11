import React from 'react';

export default function TugasCard({ tugas }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 mb-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md">
          {tugas.matkul}
        </span>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
          Deadline: {tugas.deadline}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-3">{tugas.title}</h3>
      <p className="text-slate-600 text-sm mb-6 leading-relaxed">{tugas.summary}</p>

      {/* RENDER KHUSUS TUGAS 1 */}
      {tugas.id === 1 && (
        <div className="space-y-4">
          <div className="bg-indigo-50/50 p-4 rounded-lg border border-indigo-100 text-xs text-indigo-900 font-medium">
            {tugas.details.ketentuan} | Queue: [{tugas.details.queue.join(", ")}]
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="p-3 border-b border-slate-200">Algoritma Disk</th>
                  <th className="p-3 border-b border-slate-200">Total Lintasan</th>
                  <th className="p-3 border-b border-slate-200">Arah Proses / Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {tugas.details.algoritmaTable.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 border-b border-slate-200 font-semibold text-slate-800">{item.nama}</td>
                    <td className="p-3 border-b border-slate-200 text-indigo-600 font-bold">{item.lintasan} Track</td>
                    <td className="p-3 border-b border-slate-200 text-slate-600 text-xs">{item.arah}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* RENDER KHUSUS TUGAS 2 */}
      {tugas.id === 2 && (
        <div className="space-y-6">
          {/* Tabel Proses */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Tabel Data Proses</h4>
            <div className="grid grid-cols-5 gap-2 text-center text-xs">
              {tugas.details.tabelProses.map((p) => (
                <div key={p.id} className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <p className="font-bold text-slate-900 text-sm">Proses {p.id}</p>
                  <p className="text-slate-500 mt-1">Tiba: {p.tiba}</p>
                  <p className="text-slate-500">Lama: {p.lama}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tabel Hasil Algoritma CPU Scheduling */}
          <div className="overflow-x-auto">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Hasil Perhitungan Tanggap Rata-Rata</h4>
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="p-3 border-b border-slate-200">Algoritma CPU Scheduling</th>
                  <th className="p-3 border-b border-slate-200">Rata-rata Waktu Tanggap</th>
                  <th className="p-3 border-b border-slate-200">Arah Proses / Alur</th>
                </tr>
              </thead>
              <tbody>
                {tugas.details.hasilAlgoritma.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 border-b border-slate-200 font-semibold text-slate-800">{item.nama}</td>
                    <td className="p-3 border-b border-slate-200 text-emerald-600 font-bold">{item.avg}</td>
                    <td className="p-3 border-b border-slate-200 text-slate-600 text-xs">{item.arah}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}