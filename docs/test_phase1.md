# Testing Scenario: Phase 1 (Inisialisasi & Arsitektur)

Skenario pengujian ini memastikan bahwa fondasi proyek Next.js, Tailwind CSS, komponen UI global (Navbar, Footer), dan pengaturan multi-bahasa (Next-Intl) berjalan sesuai yang diharapkan.

## 1. Verifikasi Next.js Development Server
**Tujuan:** Memastikan aplikasi dapat berjalan secara lokal tanpa error.
- [x] Buka terminal di VSCode.
- [x] Jalankan perintah `npm run dev`.
- [x] Buka `http://localhost:3000` di browser.
- [x] **Expected Result:** Website terbuka (otomatis me-*redirect* ke `/id` karena default locale) dan menampilkan "Tajur Mandiri Prima | Ahli Elektrikal Industri" tanpa error di terminal atau console browser.

## 2. Verifikasi Tema & Warna (Tailwind CSS)
**Tujuan:** Memastikan pengaturan warna khusus perusahaan berfungsi.
- [x] Buka `http://localhost:3000/id` di browser.
- [x] Cek warna background utama halaman.
- [x] **Expected Result:** Background utama tidak berwarna putih pucat (`#ffffff`), melainkan Slate Gray (`#F8FAFC`). Teks utama berwarna Deep Dark / Carbon (`#0F172A`).
- [x] Cek warna teks "TMP" pada navigasi (Navbar).
- [x] **Expected Result:** Teks "TMP" berwarna Navy Blue (`#003366`) yang merupakan warna primary.

## 3. Verifikasi Global Layout (Navbar & Footer)
**Tujuan:** Memastikan komponen UI global tampil di semua halaman.
- [x] Perhatikan bagian atas website (Header/Navbar).
- [x] **Expected Result:** Terdapat logo teks "TMP", menu navigasi (Home, About, Services, Products, Portfolio), dan tombol Language Switcher (ID/EN).
- [x] Scroll ke bagian paling bawah (Footer).
- [x] **Expected Result:** Terdapat teks informasi perusahaan ("Mitra Ahli Elektrikal & Solusi Industri Sejak 2000.") dengan latar belakang gelap (`#0F172A`).

## 4. Verifikasi Multi-language (i18n & Routing)
**Tujuan:** Memastikan *Language Switcher* dapat mengubah bahasa konten dan URL.
- [x] Akses halaman `http://localhost:3000/id`.
- [x] Perhatikan judul utama halaman.
- [x] **Expected Result:** Teks berbunyi: `"Tajur Mandiri Prima | Ahli Elektrikal Industri"`.
- [x] Klik tombol **"EN"** pada Language Switcher di Navbar.
- [x] **Expected Result:**
  - URL di browser berubah menjadi `http://localhost:3000/en`.
  - Judul di halaman otomatis berubah menjadi `"Tajur Mandiri Prima | Industrial Electrical Expert"`.
  - Warna pada tombol **EN** di sebelah kanan atas berubah menjadi warna biru (Primary State), sedangkan tombol **ID** menjadi transparan (Inactive State).

## 5. Verifikasi Komponen & Alias Import
**Tujuan:** Memastikan TypeScript module path/alias (`@/`) dapat dikompilasi dengan baik.
- [x] Coba buat file testing di `src/app/test/page.tsx`.
- [x] Lakukan impor komponen Navbar dengan path: `import Navbar from '@/components/common/Navbar';`.
- [x] **Expected Result:** VSCode atau linter tidak memunculkan indikasi error module not found (garis merah), dan proyek `npm run dev` tetap sukses me-render halaman.

---
**Catatan:** Jika semua *checkbox* di atas berhasil (Pass), tahap Inisialisasi & Arsitektur (Phase 1) siap dilanjutkan ke Phase 2 (Pembuatan Konten Hardcoded).
