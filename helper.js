/* =====================================================================
 * LEVEL 1 — MUDAH  |  TUGAS 2  |  BERKAS: helper.js
 * ---------------------------------------------------------------------
 * TUGAS BERKAS INI : Kumpulan FUNGSI MURNI (pure function) pembantu.
 *
 * CARA MENGERJAKAN :
 *   1. Cari setiap tanda ___ (tiga garis bawah) dan ganti dengan jawaban
 *      yang tepat sesuai petunjuk TODO di atasnya.
 *   2. Simpan, lalu jalankan:  npm run uji
 *   3. Target bagian "TUGAS 2 — helper.js": Skor bagian 9/9.
 *
 * CATATAN :
 *   - Jika muncul error "___ is not defined", artinya masih ada ___
 *     yang belum kamu ganti.
 *   - Fungsi murni: input sama -> hasil selalu sama, tanpa DOM.
 * ===================================================================== */

/**
 * Mengubah angka jam menjadi teks.
 *   formatDurasi(2)   -> '2 jam'
 *   formatDurasi(1.5) -> '1 jam 30 menit'
 *   formatDurasi(0.5) -> '30 menit'
 *   formatDurasi(0)   -> 'Durasi tidak valid'
 */
export function formatDurasi(jam) {
  // LANGKAH 1: Tolak nilai yang tidak masuk akal (bukan angka, 0, atau minus).
  if (!Number.isFinite(jam) || jam <= 0) {
    // TODO 2.1 : Ganti ___ dengan teks 'Durasi tidak valid' (pakai tanda kutip).
    return 'Durasi tidak valid';
  }

  // LANGKAH 2: Ubah jam menjadi menit.
  // TODO 2.2 : 1 jam = berapa menit? Ganti ___ dengan angka yang tepat.
  const totalMenit = Math.round(jam * 60);

  // LANGKAH 3: Pecah menjadi jam penuh dan sisa menit.
  //   Contoh: 90 menit -> jamPenuh 1, sisaMenit 30
  const jamPenuh = Math.floor(totalMenit / 60);

  // TODO 2.3 : Sisa menit adalah SISA BAGI totalMenit dengan 60.
  //   PETUNJUK : operator sisa bagi di JavaScript adalah %
  //              Ganti ___ dengan:  totalMenit % 60
  const sisaMenit = totalMenit % 60;

  // LANGKAH 4: Susun teks sesuai kondisinya.
  if (jamPenuh === 0) {
    return `${sisaMenit} menit`;
  }
  if (sisaMenit === 0) {
    // TODO 2.4 : Kembalikan teks jam saja, contoh: '2 jam'.
    //   PETUNJUK : Tiru baris return `${sisaMenit} menit` di atas,
    //              tetapi pakai jamPenuh dan kata jam.
    return `${jamPenuh} jam`;
  }
  return `${jamPenuh} jam ${sisaMenit} menit`;
}

/**
 * Mengecek apakah jumlah orang muat di ruangan.
 *   cekKapasitas(30, 36) -> true
 *   cekKapasitas(40, 36) -> false
 *   cekKapasitas(0, 36)  -> false
 */
export function cekKapasitas(jumlahOrang, kapasitasRuang) {
  // TODO 2.5 : Jumlah orang tidak boleh melebihi kapasitas ruangan.
  //   Ganti ___ dengan nama parameter yang menyimpan kapasitas ruangan.
  // CATATAN : && artinya "DAN". Hasilnya true hanya jika kedua syarat benar.
  return jumlahOrang > 0 && jumlahOrang <= kapasitasRuang;
}
