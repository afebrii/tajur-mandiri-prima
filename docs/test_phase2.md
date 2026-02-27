# Testing Scenario: Phase 2 (Pengembangan Konten Hardcoded)

Skenario pengujian ini bertujuan untuk memastikan setiap komponen pada Halaman Beranda dan Halaman Tentang Kami berhasil dirender menggunakan data statis multibahasa tanpa ada kesalahan fungsional atau visual.

## 1. Verifikasi Komponen Hero Carousel
**Tujuan:** Memastikan presentasi visual utama beranimasi dan merespons interaksi.
- [x] Buka `http://localhost:3000`.
- [x] Amati *slideshow* utama pada bagian paling atas halaman.
- [x] **Expected Result:** *Slider* otomatis bergulir setiap 6 detik.
- [x] Klik tombol panah kiri/kanan.
- [x] **Expected Result:** Judul, deskripsi, dan teks tombol berubah sesuai slide yang aktif. Transisi menggunakan efek *fade* dari *Framer Motion*.

## 2. Verifikasi Animasi Penghitung (Stats Counter)
**Tujuan:** Mematuhi kriteria interaksi saat komponen masuk ke dalam viewport (layar).
- [x] Segarkan (*refresh*) halaman beranda.
- [x] Scroll ke bawah hingga mencapai area statistik (warna latar belakang biru tua).
- [x] **Expected Result:** Angka (misal: "0" menjadi "20+", "1700+") langsung berjalan dari nol hingga mencapai batas maksimumnya saat pertama kali terlihat di layar. Animasi tidak akan berulang jika digulir kembali ke atas dan bawah.

## 3. Verifikasi Grid Highlights (Layanan, Produk, Portofolio)
**Tujuan:** Memvalidasi tata letak responsif (*grid*) dari setiap bagian pratinjau.
- [x] Amati bagian kotak-kotak Layanan, Produk Terlaris, dan Portofolio Terkini.
- [x] **Expected Result (Desktop):** Kotak layanan (4 kolom), produk (4 kolom), dan portofolio (3 kolom) disusun mendatar rapi. Ikon `Lucide` ter-render sempurna.
- [x] Ubah ukuran jendela peramban (*browser window*) menjadi ukuran HP (mobile viewport).
- [x] **Expected Result (Mobile):** Kotak-kotak di atas menumpuk secara vertikal (berubah menjadi 1 kolom) dan teks tetap proporsional tanpa terpotong. *Hover effects* tetap terlihat.

## 4. Verifikasi Halaman Tentang Kami (About)
**Tujuan:** Menguji rute baru dan informasi perusahaan.
- [x] Klik navigasi **"About"** atau **"Tentang Kami"** di bagian Navbar.
- [x] **Expected Result:** Anda dialihkan ke `/id/about` (atau `/en/about`).
- [x] Verifikasi ketersediaan informasi pada halaman ini.
- [x] **Expected Result:** Paragraf sejarah panjang, dua kotak berdampingan berisi *Visi & Misi* beserta poin-poinnya (menggunakan ikon bendera dan target), serta *Core Values* perusahaan tampil dengan susunan *grid* di paling bawah.

## 5. Verifikasi Dual Language (ID/EN) Pada Data Baru
**Tujuan:** Memastikan matiks matriks data JSON tersambung di komponen baru.
- [x] Kembali ke halaman "Home" dan ganti bahasa melalui *Language Switcher* di kiri atas.
- [x] **Expected Result:** Pada Bahasa Inggris (EN), teks `Tahun Pengalaman` berubah menjadi `Years Experience`, `Produk Terlaris` menjadi `Best-Selling Products`, dan seluruh isi sub-teks di komponen-komponen baru menerjemahkan struktur sesuai file `en.json`.

---
**Catatan:** Pastikan tidak ada *Warning* berupa "React Hydration Error" maupun pesan galat `404 Not Found` pada halaman `About` saat pengujian awal. Jika pengujian ini sukses, struktur JSON untuk `products.json` dan aplikasi e-katalog di Phase 3 siap dijalankan.
