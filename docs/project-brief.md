# Project Brief: Tajur Mandiri Prima (TMP) Website Rebuild

**Code Name:** `TMP-Next-Evolution`  
**Developer:** [Andika Febriansyah](https://github.com/andikafebrians) (Selasar Digital)  
**Status:** Phase 1 (Hardcoded Data + Multi-language)

---

## 1. Project Overview
Transformasi website **Tajur Mandiri Prima** dari platform *Hostinger Website Builder* ke **Next.js**. Proyek ini bertujuan untuk meningkatkan performa, fleksibilitas desain, dan profesionalisme melalui fitur multi-bahasa, guna mencerminkan identitas perusahaan spesialis elektrikal industri sejak tahun 2000.

## 2. Objectives
* **Custom UI/UX:** Desain industrial modern yang responsif dan interaktif.
* **Internationalization (i18n):** Mendukung konten dalam Bahasa Indonesia (ID) dan Inggris (EN).
* **Performance:** Optimasi kecepatan loading untuk skor Core Web Vitals yang maksimal.
* **Scalability:** Struktur data JSON yang rapi untuk mempermudah migrasi ke CMS (Sanity) di masa depan.

## 3. Tech Stack
* **Framework:** Next.js 15 (App Router).
* **Language:** TypeScript.
* **Internationalization:** `next-intl`.
* **Styling:** Tailwind CSS + Shadcn UI.
* **Animation:** Framer Motion.
* **Deployment:** Hostinger (Node.js Setup).

---

## 4. Sitemap & Detail Konten

Website terdiri dari 5 halaman utama dengan dukungan dwibahasa:

| Halaman | Section Utama | Deskripsi Konten |
| :--- | :--- | :--- |
| **Beranda** | Hero, Profil, Stats, Portofolio, Produk, Layanan | Ringkasan eksekutif dari seluruh isi website. |
| **Portofolio** | Project Grid & Filter | Dokumentasi proyek pengerjaan teknis di lapangan. |
| **Produk** | E-Katalog & Kategori | Daftar produk elektrikal dengan spesifikasi lengkap. |
| **Layanan** | Detail Jasa Teknis | Penjelasan mendalam mengenai solusi industri. |
| **Tentang Kami** | Sejarah, Visi-Misi, Nilai | Profil mendalam perusahaan dan legalitas. |

### Detail Struktur Beranda (Home):
1.  **Hero Section:** Visual utama yang menampilkan keahlian utama TMP sebagai Mitra Ahli Elektrikal.
2.  **Profil Singkat:** Narasi singkat mengenai jati diri perusahaan sebagai mitra strategis industri.
3.  **Statistik Pencapaian:** Data angka (20+ tahun pengalaman, 1700+ proyek) dengan animasi penghitung.
4.  **Highlight Portofolio:** Menampilkan 3-4 proyek terbaru atau proyek terbesar.
5.  **Produk Terlaris:** Menampilkan produk yang paling sering dicari klien (E-Catalog preview).
6.  **Highlight Layanan:** Ringkasan dari 4 pilar layanan utama (Mechanical, Panel, Maintenance, Supply).

---

## 5. Color Palette
Identitas visual menggunakan kombinasi warna profesional khas industri elektrikal:

| Tipe | Warna | Hex Code | Kegunaan |
| :--- | :--- | :--- | :--- |
| **Primary** | Navy Blue | `#003366` | Header, Background Utama, Teks Judul |
| **Secondary** | Electric Yellow | `#E2FF00` | Call to Action (CTA), Aksen, Icon Highlighting |
| **Neutral** | Slate Gray | `#F8FAFC` | Background Section, Kartu Produk |
| **Deep Dark** | Carbon | `#0F172A` | Footer, Teks Utama (Body) |

---

## 6. Roadmap Pengembangan

### Tahap 1: Inisialisasi & Arsitektur
- [ ] Setup Next.js App Router & Tailwind CSS.
- [ ] Konfigurasi Multi-language (i18n) menggunakan `next-intl`.
- [ ] Pembuatan komponen UI global (Navbar, Footer, Language Switcher).

### Tahap 2: Pengembangan Konten (Hardcoded JSON)
- [ ] Pembuatan skema data `id.json` dan `en.json` untuk semua teks statis.
- [ ] Implementasi Halaman Beranda sesuai struktur (Hero s/d Highlight).
- [ ] Implementasi Halaman Tentang Kami.

### Tahap 3: Fitur Katalog & Portofolio
- [ ] Pembuatan skema data JSON untuk daftar Produk dan Portofolio.
- [ ] Slicing halaman Layanan, Produk (dengan filter), dan Portofolio.
- [ ] Integrasi tombol konsultasi via WhatsApp API.

### Tahap 4: Optimasi & Deployment
- [ ] Penambahan animasi Framer Motion (Scroll Reveal).
- [ ] Optimasi SEO (Metadata & OpenGraph) untuk kedua bahasa.
- [ ] Setup Node.js di Hostinger dan final deployment.

---
*Created by Selasar Digital - 2026*

## 7. Folder Structure (Recommended)
Struktur ini dirancang agar modular dan memudahkan manajemen konten multi-bahasa:

```text
tmp-website/
├── public/               # Asset statis (Logo, favicon, icons)
│   └── images/           # Foto produk & portofolio
├── src/
│   ├── app/              # Next.js App Router
│   │   └── [locale]/     # Folder dinamis untuk bahasa (id/en)
│   │       ├── layout.tsx
│   │       ├── page.tsx  (Beranda)
│   │       ├── portofolio/
│   │       ├── produk/
│   │       ├── layanan/
│   │       └── tentang-kami/
│   ├── components/       # Komponen Reusable
│   │   ├── ui/           # Komponen dasar (Shadcn UI)
│   │   ├── common/       # Navbar, Footer, LangSwitcher
│   │   └── sections/     # Komponen per section (Hero, Stats, dsb)
│   ├── data/             # Sumber data utama (JSON)
│   │   ├── products.json
│   │   └── portfolio.json
│   ├── i18n/             # Konfigurasi next-intl
│   ├── lib/              # Utils, Constants, & Shared Logic
│   ├── messages/         # File Translasi (Sangat Penting)
│   │   ├── id.json       # Teks bahasa Indonesia
│   │   └── en.json       # Teks bahasa Inggris
│   └── types/            # TypeScript Interfaces/Types
├── middleware.ts         # Middleware untuk deteksi bahasa
├── next.config.ts        # Konfigurasi Next.js & next-intl
└── tailwind.config.ts    # Kustomisasi tema warna