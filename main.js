/* =====================================================================
 * LEVEL 1 — MUDAH  |  TUGAS 4  |  BERKAS: main.js
 * ---------------------------------------------------------------------
 * TUGAS BERKAS INI : SATU-SATUNYA berkas yang boleh memakai DOM
 *                    (document, querySelector, innerHTML) dan Event Listener.
 *
 * KERJAKAN SETELAH npm run uji MENUNJUKKAN 32/32.
 *
 * CARA MENGERJAKAN :
 *   1. Jalankan index.html dengan Live Server.
 *   2. Buka Console browser: tekan F12 -> tab Console.
 *   3. Ganti setiap ___ sesuai TODO 4.1 - 4.6, simpan, lihat hasilnya.
 *   4. Jika Console menampilkan error merah, klik nama berkas di sebelah
 *      kanan pesan error untuk melompat ke baris yang salah.
 *
 * ALUR BERKAS INI:
 *   LANGKAH 1 import -> LANGKAH 2 ambil elemen -> LANGKAH 3 fungsi tampilan
 *   -> LANGKAH 4 event listener -> LANGKAH 5 tampilan awal
 * ===================================================================== */

// =====================================================================
// LANGKAH 1: IMPORT (sudah jadi)
// CATATAN: Tulis './' di depan dan '.js' di belakang nama berkas.
// =====================================================================
import { daftarRuangan } from './data.js';
import { formatDurasi } from './helper.js';
import {
  pinjamRuangan,
  batalkanPinjaman,
  hitungTotalDipinjam,
  sedangDipinjam,
  ambilDaftarPinjaman,
} from './peminjaman.js';

// =====================================================================
// LANGKAH 2: AMBIL ELEMEN HTML
// =====================================================================
const elemenKatalog = document.querySelector('#katalog-ruangan');
const formPinjam = document.querySelector('#form-pinjam');
const pilihanRuangan = document.querySelector('#pilihan-ruangan');

// TODO 4.1 : Ambil elemen input nama peminjam.
//   PETUNJUK : Buka index.html, cari <input> untuk nama. Id-nya 'nama-peminjam'.
//              Ganti ___ dengan '#nama-peminjam' (pakai tanda kutip dan #).
const inputNama = document.querySelector(___);

const inputJumlah = document.querySelector('#jumlah-orang');
const inputDurasi = document.querySelector('#durasi-jam');
const elemenPesan = document.querySelector('#pesan');
const isiTabel = document.querySelector('#isi-tabel');
const elemenTotal = document.querySelector('#total-dipinjam');

// =====================================================================
// LANGKAH 3: FUNGSI-FUNGSI TAMPILAN
// =====================================================================

/** Menampilkan kartu-kartu ruangan (sudah jadi). */
function tampilkanKatalog() {
  elemenKatalog.innerHTML = '';

  daftarRuangan.forEach((ruangan) => {
    const dipinjam = sedangDipinjam(ruangan.id);
    const kartu = document.createElement('article');
    kartu.className = 'kartu-ruangan';

    // CATATAN: innerHTML aman di sini karena isinya dari data.js (bukan ketikan pengguna).
    kartu.innerHTML = `
      <h3>${ruangan.namaRuangan}</h3>
      <p>Kapasitas: ${ruangan.kapasitas} orang</p>
      <p>Fasilitas: ${ruangan.fasilitas.join(', ')}</p>
      <span class="status ${dipinjam ? 'status-dipinjam' : 'status-tersedia'}">
        ${dipinjam ? 'Dipinjam' : 'Tersedia'}
      </span>
    `;
    elemenKatalog.appendChild(kartu);
  });
}

/** Mengisi pilihan ruangan di dropdown (sudah jadi). */
function tampilkanPilihanRuangan() {
  pilihanRuangan.innerHTML = '<option value="">-- Pilih ruangan --</option>';

  daftarRuangan.forEach((ruangan) => {
    const opsi = document.createElement('option');
    opsi.value = ruangan.id;
    opsi.textContent = `${ruangan.namaRuangan} (maks. ${ruangan.kapasitas} orang)`;
    if (sedangDipinjam(ruangan.id)) {
      opsi.disabled = true;
      opsi.textContent += ' - sedang dipinjam';
    }
    pilihanRuangan.appendChild(opsi);
  });
}

/**
 * Membuat satu sel tabel <td> berisi teks (sudah jadi).
 * CATATAN KEAMANAN: textContent menampilkan ketikan pengguna sebagai teks
 * biasa, sehingga kode HTML/JS yang diketik tidak ikut dijalankan.
 */
function buatSel(isi) {
  const sel = document.createElement('td');
  sel.textContent = isi;
  return sel;
}

/** Menampilkan daftar peminjaman di tabel. */
function tampilkanTabelPinjaman() {
  const semuaPinjaman = ambilDaftarPinjaman();
  isiTabel.innerHTML = '';

  if (semuaPinjaman.length === 0) {
    isiTabel.innerHTML = `
      <tr><td colspan="6" class="kosong">Belum ada ruangan yang dipinjam.</td></tr>
    `;
    return;
  }

  semuaPinjaman.forEach((pinjaman, indeks) => {
    const baris = document.createElement('tr');
    baris.appendChild(buatSel(indeks + 1));
    baris.appendChild(buatSel(pinjaman.namaRuangan));
    baris.appendChild(buatSel(pinjaman.namaPeminjam));
    baris.appendChild(buatSel(`${pinjaman.jumlahOrang} orang`));

    // TODO 4.2 : Tampilkan durasi dalam bentuk teks, contoh '1 jam 30 menit'.
    //   PETUNJUK : Pakai fungsi dari helper.js. Ganti ___ dengan:
    //              formatDurasi(pinjaman.durasiJam)
    baris.appendChild(buatSel(formatDurasi(pinjaman.durasiJam)));

    // Tombol Batalkan. dataset.id menyimpan id ruangan di atribut data-id.
    const selAksi = document.createElement('td');
    const tombolBatal = document.createElement('button');
    tombolBatal.type = 'button';
    tombolBatal.className = 'tombol-batal';
    tombolBatal.textContent = 'Batalkan';
    tombolBatal.dataset.id = pinjaman.idRuangan;
    selAksi.appendChild(tombolBatal);
    baris.appendChild(selAksi);

    isiTabel.appendChild(baris);
  });
}

/** Menampilkan pesan sukses/gagal di bawah form (sudah jadi). */
function tampilkanPesan(teks, jenis) {
  elemenPesan.textContent = teks;
  elemenPesan.className = `pesan pesan-${jenis}`;
}

/** Memperbarui SELURUH tampilan sekaligus (sudah jadi). */
function perbaruiTampilan() {
  tampilkanKatalog();
  tampilkanPilihanRuangan();
  tampilkanTabelPinjaman();
  elemenTotal.textContent = hitungTotalDipinjam();
}

// =====================================================================
// LANGKAH 4: EVENT LISTENER
// =====================================================================

// 4a. Saat form dikirim.
formPinjam.addEventListener('submit', (event) => {
  // TODO 4.3 : Cegah halaman ter-refresh saat form dikirim.
  //   PETUNJUK : Ganti ___ dengan preventDefault
  //   CATATAN  : Tanpa ini, halaman reload dan semua data hilang!
  event.preventDefault();

  const ruanganTerpilih = daftarRuangan.find(
    (ruangan) => ruangan.id === pilihanRuangan.value
  );

  // CATATAN: Nilai dari <input> SELALU berupa teks (string), walaupun
  // type="number". Karena itu harus diubah dengan Number().
  const hasil = pinjamRuangan(
    ruanganTerpilih,
    inputNama.value,
    // TODO 4.4 : Ubah nilai input jumlah orang menjadi angka.
    //   PETUNJUK : Tiru baris durasi di bawahnya. Ganti ___ dengan:
    //              Number(inputJumlah.value)
     Number(inputJumlah.value),
    Number(inputDurasi.value)
  );

  if (hasil.berhasil) {
    tampilkanPesan(hasil.pesan, 'sukses');
    formPinjam.reset();
    perbaruiTampilan();
  } else {
    tampilkanPesan(hasil.pesan, 'gagal');
  }
});

// 4b. Saat tombol "Batalkan" di tabel diklik.
// CATATAN (Event Delegation): cukup SATU listener di <tbody>, karena tombol
// dibuat ulang setiap kali tabel diperbarui.
isiTabel.addEventListener('click', (event) => {
  const tombol = event.target.closest('.tombol-batal');
  if (!tombol) return;

  const idRuangan = tombol.dataset.id;
  if (!confirm('Yakin ingin membatalkan peminjaman ini?')) return;

  // TODO 4.5 : Batalkan peminjaman ruangan yang tombolnya diklik.
  //   PETUNJUK : Ganti ___ dengan variabel yang menyimpan id ruangan
  //              (lihat 3 baris di atas).
  if (batalkanPinjaman(idRuangan)) {
    tampilkanPesan('Peminjaman berhasil dibatalkan.', 'sukses');
    perbaruiTampilan();
  }
});

// =====================================================================
// LANGKAH 5: TAMPILAN AWAL
// TODO 4.6 : Panggil fungsi yang memperbarui SELURUH tampilan agar katalog
//            dan tabel muncul saat halaman dibuka.
//   PETUNJUK : Ganti ___ dengan nama fungsinya (lihat LANGKAH 3, fungsi terakhir).
// =====================================================================
perbaruiTampilan();
