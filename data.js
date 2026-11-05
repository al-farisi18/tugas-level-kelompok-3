/* =====================================================================
 * LEVEL 1 — MUDAH  |  TUGAS 1  |  BERKAS: data.js
 * ---------------------------------------------------------------------
 * TUGAS BERKAS INI : Menyimpan DATA daftar ruangan (Array of Objects).
 *
 * CARA MENGERJAKAN :
 *   1. Cari tulisan "TODO". Kerjakan sesuai petunjuknya.
 *   2. Simpan (Ctrl+S), lalu jalankan di terminal:  npm run uji
 *   3. Lihat bagian "TUGAS 1 — data.js". Target: Skor bagian 5/5.
 *
 * ATURAN :
 *   - Berkas ini HANYA berisi data. Tidak boleh ada kode DOM.
 *   - Setiap ruangan WAJIB punya 4 properti:
 *       id (teks), namaRuangan (teks), kapasitas (ANGKA), fasilitas (array)
 * ===================================================================== */

// CATATAN: `export` membuat daftarRuangan bisa dipakai berkas lain.
export const daftarRuangan = [
  {
    id: 'R01',
    namaRuangan: 'Lab Komputer RPL',
    kapasitas: 36,
    fasilitas: ['36 Unit PC', 'Proyektor', 'AC'],
  },
  {
    id: 'R02',
    namaRuangan: 'Lab Bisnis Digital',
    kapasitas: 32,
    fasilitas: ['32 Unit PC', 'Smart TV', 'AC'],
  },
  {
    id: 'R03',
    namaRuangan: 'Aula',
    kapasitas: 150,
    fasilitas: ['Sound System', 'Panggung', 'Proyektor'],
  },

  // TODO 1.1 : Tambahkan ruangan ke-4 dengan data berikut:
  //              id          : 'R04'
  //              namaRuangan : 'Ruang Rapat'
  //              kapasitas   : 20
  //              fasilitas   : 'Meja Rapat', 'Smart TV', 'AC'
  //   PETUNJUK : Salin blok ruangan R03 di atas (dari { sampai },),
  //              tempel di bawah komentar ini, lalu ganti isinya.
  //   CATATAN  : Setiap objek dipisahkan tanda koma. Kapasitas ditulis
  //              tanpa tanda kutip: 20, bukan '20'.

  {
    id: 'R04',
    namaRuangan: 'Ruang Rapat',
    kapasitas: 20,
    fasilitas: ['Meja Rapat', 'Smart TV', 'AC']
  },

  // TODO 1.2 (BONUS, tidak dites) : Tambahkan ruangan ke-5 'Ruang Kelas XI'
  //              dengan id 'R05'. Tentukan sendiri kapasitas dan fasilitasnya.

  {
    id: 'R05',
    namaRuangan: 'Ruang Kelas XI',
    kapasitas: 15,
    fasilitas: ['Meja Belajar', 'Kursi Belajar', 'KIPAS']
  },
];
