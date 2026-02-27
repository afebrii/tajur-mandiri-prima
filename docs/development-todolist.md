# Development To-Do List: Tajur Mandiri Prima (TMP) Website Rebuild

## Phase 1: Inisialisasi & Arsitektur
- [x] Setup project dengan Next.js 15 (App Router) & Tailwind CSS.
- [x] Setup struktur folder proyek (`public/`, `src/app/`, `src/components/`, `src/data/`, `src/i18n/`, dll.).
- [x] Konfigurasi palet warna (Primary, Secondary, Neutral, Deep Dark) pada `tailwind.config.ts`.
- [x] Implementasi sistem Multi-language (i18n) menggunakan `next-intl` dengan middleware pendeteksi bahasa.
- [x] Pembuatan layout dasar dan komponen UI global (Navbar responsif, Footer, Language Switcher).

## Phase 2: Pengembangan Konten (Hardcoded Data)
- [x] Inisialisasi file translasi `id.json` dan `en.json` untuk teks statis website.
- [x] Slicing Halaman Beranda:
  - [x] Hero Section (dengan Hero Carousel).
  - [x] Profil Singkat Perusahaan.
  - [x] Statistik Pencapaian dengan animasi counter.
  - [x] Highlight Portofolio (3-4 proyek terbaru).
  - [x] Produk Terlaris (E-Catalog preview).
  - [x] Highlight Layanan (Mechanical, Panel, Maintenance, Supply).
- [x] Slicing Halaman Tentang Kami (Sejarah, Visi-Misi, Nilai, Profil Perusahaan, Legalitas).

## Phase 3: Fitur Katalog & Portofolio
- [x] Pembuatan sumber data JSON utama (`src/data/products.json` dan `src/data/portfolio.json`).
- [x] Slicing Halaman Portofolio beserta fungsionalitas Project Grid dan Filter kategori.
- [x] Slicing Halaman Produk (E-Katalog) dan kategori produk.
- [x] Slicing Halaman Layanan dengan detail informasi jasa teknis.
- [x] Integrasi tombol interaktif (CTA) untuk konsultasi vis WhatsApp API pada komponen yang relevan.

## Phase 4: Animasi & Interaktivitas
- [x] Penambahan animasi interaktif dengan Framer Motion (Scroll Reveal, hover states).
- [x] Memastikan aksesibilitas (a11y) pada navigasi dan elemen interaktif.

## Phase 5: Performance & SEO (Advanced)
- [ ] Optimasi Core Web Vitals (LCP, FID, CLS) dan analisis bundle size Next.js.
- [ ] Optimasi aset gambar (format WebP/AVIF, lazy loading, proper sizing).
- [ ] Konfigurasi SEO metadata komprehensif (Title, Description, OpenGraph, Twitter Cards) berbasis multi-bahasa.
- [ ] Implementasi Semantic HTML dan Schema Markup JSON-LD (Local Business / Organization).
- [ ] Konfigurasi dan pembuatan `sitemap.xml` serta `robots.txt` yang optimal.

## Phase 6: Finalisasi & Deployment
- [ ] Validasi environment variables untuk environment production.
- [ ] Setup dan konfigurasi server Node.js di Hostinger.
- [ ] Deployment aplikasi tahap akhir (Final Production).
- [ ] Post-deployment testing (pengecekan tautan rusak, uji form kontak, test performa live).
