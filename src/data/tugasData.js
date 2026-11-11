export const initialTugas = [
  {
    id: 1,
    title: "Tugas 1: Analisis Perhitungan Algoritma Disk Scheduling",
    matkul: "Sistem Operasi",
    kategori: "Tugas",
    deadline: "23 November 2026",
    status: "Selesai",
    summary: "Simulasi gerakan head hard disk (200 track: 0 - 199) dengan posisi awal head di track 50. Menghitung total lintasan untuk 16 antrian permintaan akses.",
    gdriveUrl: "https://drive.google.com/file/d/contoh-link-gdrive-tugas1/view?usp=sharing",
    details: {
      headAwal: 50,
      totalTrack: 200,
      queue: [82, 170, 43, 140, 24, 16, 190, 123, 67, 43, 162, 24, 71, 111, 43, 178],
      algoritmaTable: [
        { nama: "FCFS (First-Come, First-Served)", lintasan: 1217, arah: "50 ➔ 82 ➔ 170 ➔ 43 ➔ 140 ➔ 24 ➔ 16 ➔ 190 ➔ 123 ➔ 67 ➔ 43 ➔ 162 ➔ 24 ➔ 71 ➔ 111 ➔ 43 ➔ 178" },
        { nama: "SSTF (Shortest Seek Time First)", lintasan: 622, arah: "50 ➔ 43 ➔ 43 ➔ 43 ➔ 24 ➔ 24 ➔ 16 ➔ 67 ➔ 71 ➔ 82 ➔ 111 ➔ 123 ➔ 140 ➔ 162 ➔ 170 ➔ 178 ➔ 190" },
        { nama: "SCAN (Elevator Algorithm)", lintasan: 332, arah: "50 ➔ 67 ➔ 71 ➔ 82 ➔ 111 ➔ 123 ➔ 140 ➔ 162 ➔ 170 ➔ 178 ➔ 190 ➔ 199 (Ujung) ➔ 43 ➔ 24 ➔ 16" },
        { nama: "C-SCAN (Circular SCAN)", lintasan: 381, arah: "50 ➔ 67 ➔ 71 ➔ 82 ➔ 111 ➔ 123 ➔ 140 ➔ 162 ➔ 170 ➔ 178 ➔ 190 ➔ 199 ➔ 0 (Lompat) ➔ 16 ➔ 24 ➔ 43" }
      ]
    }
  },
  {
    id: 2,
    title: "Tugas 2: Analisis Perbandingan Algoritma CPU Scheduling",
    matkul: "Sistem Operasi",
    kategori: "Tugas",
    deadline: "30 November 2026",
    status: "Selesai",
    summary: "Perhitungan total dan rata-rata waktu tanggap (Turnaround Time & Waiting Time) untuk 5 Proses (A, B, C, D, E) menggunakan 6 mekanisme penjadwalan CPU.",
    gdriveUrl: "https://drive.google.com/file/d/contoh-link-gdrive-tugas2/view?usp=sharing",
    details: {
      tabelProses: [
        { id: 'A', tiba: 0, lama: 7 },
        { id: 'B', tiba: 3, lama: 5 },
        { id: 'C', tiba: 5, lama: 8 },
        { id: 'D', tiba: 8, lama: 6 },
        { id: 'E', tiba: 12, lama: 4 },
      ],
      hasilAlgoritma: [
        { nama: "1. FCFS / PTPD (First-Come First-Serve)", avg: "10.4 Unit", total: "52 Unit", arah: "Proses dieksekusi berdasarkan urutan kedatangan: A (0-7), B (7-12), C (12-20), D (20-26), E (26-30)." },
        { nama: "2. SJF / PTD (Shortest Job First - Non-Preemptive)", avg: "9.2 Unit", total: "46 Unit", arah: "Eksekusi: A (0-7), B (7-12), E (12-16), D (16-22), C (22-30)." },
        { nama: "3. SRT / PTDP (Shortest Remaining Time - Preemptive)", avg: "8.1 Unit", total: "40.5 Unit", arah: "Proses di-preempt saat ada proses baru dengan sisa burst lebih singkat." },
        { nama: "4. HPRN (Highest Response Ratio Next)", avg: "8.9 Unit", total: "44.5 Unit", arah: "Prioritas dinamis dihitung dari rasio (Waktu Tunggu + Burst) / Burst." },
        { nama: "5a. Round Robin (Quantum = 3)", avg: "12.3 Unit", total: "61.5 Unit", arah: "Rotasi waktu 3 unit per siklis: A ➔ B ➔ C ➔ A ➔ D ➔ E ➔ B ➔ dst." },
        { nama: "5b. Round Robin (Quantum = 5)", avg: "11.0 Unit", arah: "Rotasi waktu 5 unit per siklis: A (0-5) ➔ B (5-10) ➔ C (10-15) ➔ A (15-17) ➔ D (17-22) ➔ dst." }
      ]
    }
  }
];