import React, { useState } from 'react';

export default function SubmissionModal({ tugas, onClose, onSubmit }) {
  const [inputText, setInputText] = useState(tugas.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(tugas.id, inputText);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl">
        <h3 className="text-lg font-bold text-slate-900 mb-1">Form Pengumpulan Tugas</h3>
        <p className="text-sm text-slate-500 mb-4">{tugas.title}</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
              Isi Postingan / Jawaban Tugas Langsung di Web
            </label>
            <textarea
              rows="6"
              className="w-full rounded-lg border border-slate-300 p-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Tuliskan laporan, kode, atau hasil analisis tugas di sini..."
              required
            ></textarea>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-sm"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm shadow-sm"
            >
              Simpan & Publikasikan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}