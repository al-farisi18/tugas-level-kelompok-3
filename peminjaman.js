/* =====================================================================
 * LEVEL 1 — MUDAH  |  TUGAS 3  |  BERKAS: peminjaman.js
 * ---------------------------------------------------------------------
 * TUGAS BERKAS INI : Mengelola STATE (data yang berubah-ubah) peminjaman
 *                    memakai struktur data Map.
 *
 * CARA MENGERJAKAN :
 *   1. Ganti setiap ___ sesuai petunjuk TODO di atasnya (TODO 3.1 - 3.7).
 *   2. Simpan, lalu jalankan:  npm run uji
 *   3. Target bagian "TUGAS 3 — peminjaman.js": Skor bagian 18/18.
 *
 * ATURAN :
 *   - DILARANG memakai document, alert, atau innerHTML di sini.
 *   - Fungsi cukup MENGEMBALIKAN hasil (return). main.js yang menampilkan.
 *
 * CONTEKAN METHOD Map:
 *   .set(kunci, nilai)  simpan data        .has(kunci)  cek ada? (true/false)
 *   .delete(kunci)      hapus (true/false) .size        jumlah data
 *   .values()           semua nilai        .clear()     hapus semua
 * ===================================================================== */

// Mengambil fungsi cekKapasitas dari helper.js (hubungan antar-modul).
import { cekKapasitas } from './helper.js';

// STATE: kunci = id ruangan, nilai = data peminjaman.
// CATATAN: Sengaja tidak di-export. Berkas lain wajib lewat fungsi di bawah.
const daftarPinjaman = new Map();

/**
 * Mencatat peminjaman baru.
 * Mengembalikan objek { berhasil: true/false, pesan: '...' }
 */
export function pinjamRuangan(ruangan, namaPeminjam, jumlahOrang, durasiJam) {
  // VALIDASI 1 (sudah jadi): ruangan harus ada.
  if (!ruangan) {
    return { berhasil: false, pesan: 'Ruangan belum dipilih atau tidak ditemukan.' };
  }

  // VALIDASI 2: ruangan tidak boleh sedang dipinjam.
  // TODO 3.1 : Ganti ___ dengan pengecekan apakah id ruangan sudah ada di Map.
  //   PETUNJUK : daftarPinjaman.has(ruangan.id)
  if (daftarPinjaman.has(ruangan.id)) {
    return { berhasil: false, pesan: `${ruangan.namaRuangan} sedang dipinjam.` };
  }

  // VALIDASI 3 (sudah jadi): nama tidak boleh kosong.
  // CATATAN: .trim() membuang spasi di awal & akhir teks.
  if (!namaPeminjam || namaPeminjam.trim() === '') {
    return { berhasil: false, pesan: 'Nama peminjam wajib diisi.' };
  }

  // VALIDASI 4: jumlah orang harus muat.
  // TODO 3.2 : Ganti kedua ___ dengan argumen yang tepat:
  //            pertama jumlahOrang, kedua ruangan.kapasitas
  if (!cekKapasitas(jumlahOrang, ruangan.kapasitas)) {
    return {
      berhasil: false,
      pesan: `Jumlah orang harus 1 sampai ${ruangan.kapasitas} untuk ${ruangan.namaRuangan}.`,
    };
  }

  // VALIDASI 5 (sudah jadi): durasi harus angka lebih dari 0.
  if (!Number.isFinite(durasiJam) || durasiJam <= 0) {
    return { berhasil: false, pesan: 'Durasi harus lebih dari 0 jam.' };
  }

  // SIMPAN ke Map.
  // TODO 3.3 : Ganti ___ dengan KUNCI penyimpanan, yaitu id ruangan: ruangan.id
  daftarPinjaman.set(ruangan.id, {
    idRuangan: ruangan.id,
    namaRuangan: ruangan.namaRuangan,
    // TODO 3.4 : Simpan nama TANPA spasi di awal/akhir.
    //   PETUNJUK : namaPeminjam.trim()
    namaPeminjam: namaPeminjam.trim(),
    jumlahOrang: jumlahOrang,
    durasiJam: durasiJam,
  });

  return {
    berhasil: true,
    pesan: `${ruangan.namaRuangan} berhasil dipinjam oleh ${namaPeminjam.trim()}.`,
  };
}

/** Membatalkan peminjaman. Mengembalikan true jika berhasil, false jika tidak ada. */
export function batalkanPinjaman(idRuangan) {
  // TODO 3.5 : Hapus data dari Map, lalu kembalikan hasilnya.
  //   PETUNJUK : daftarPinjaman.delete(idRuangan)
  return daftarPinjaman.delete(idRuangan);
}

/** Menghitung jumlah ruangan yang sedang dipinjam. */
export function hitungTotalDipinjam() {
  // TODO 3.6 : Kembalikan jumlah data di dalam Map.
  //   PETUNJUK : properti .size (tanpa tanda kurung)
  return daftarPinjaman.size;
}

/** CONTOH (sudah jadi): mengecek apakah ruangan sedang dipinjam. */
export function sedangDipinjam(idRuangan) {
  return daftarPinjaman.has(idRuangan);
}

/** Mengambil semua data peminjaman dalam bentuk ARRAY. */
export function ambilDaftarPinjaman() {
  // TODO 3.7 : Ubah isi Map menjadi array.
  //   PETUNJUK : Array.from(daftarPinjaman.values())
  // CATATAN  : Array lebih mudah ditampilkan sebagai baris tabel di main.js.
  return Array.from(daftarPinjaman.values());
}

/** (sudah jadi) Menghapus semua data. Dipakai oleh uji-logika.mjs. */
export function resetPinjaman() {
  daftarPinjaman.clear();
}
