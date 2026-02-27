# Tajur Mandiri Prima (TMP) - Corporate Website

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)

Repository resmi untuk website **PT. Tajur Mandiri Prima**, kontraktor spesialis mekanikal dan elektrikal industri di Indonesia sejak tahun 2000. Website ini dibangun untuk menampilkan profil perusahaan, layanan unggulan (Panel Maker, Instalasi, Maintenance, Supply), e-katalog produk, dan portofolio proyek.

Website ini merupakan hasil _rebuild_ modern menggunakan **Next.js 15 (App Router)** yang difokuskan pada performa (Core Web Vitals), SEO dinamis tingkat lanjut, serta pelokalan bahasa ganda (Indonesia & English).

## 🚀 Fitur Utama

- **Multi-language (i18n):** Didukung oleh `next-intl` dengan _middleware_ pendeteksi bahasa otomatis (`/id` & `/en`).
- **Responsive & Modern UI:** Dibangun dengan **Tailwind CSS** dengan panduan warna yang mencerminkan identitas korporat industrial (Navy Blue & Electric Yellow).
- **Smooth Animations:** Efek interaktif dan _Scroll Reveal_ menggunakan **Framer Motion** untuk kesan premium.
- **Dynamic E-Catalog & Portfolio:** Grid produk dan portofolio yang dapat di-_filter_ berdasarkan kategori (mengandalkan struktur JSON).
- **Advanced SEO & Performance:** 
  - Metadata dinamis per bahasa (Title, Description, OpenGraph).
  - Schema Markup JSON-LD (LocalBusiness).
  - Optimasi aset gambar format otomatis (`WebP`/`AVIF`) menggunakan komponen `next/image`.
  - Peta situs (`sitemap.xml`) dan `robots.txt` yang ter- _generate_ secara otomatis.

## 🛠️ Tech Stack Dasar

- **Framework:** Next.js 15 (App Router)
- **Bahasa Pemrograman:** TypeScript
- **Styling:** Tailwind CSS + Shadcn UI (konvensi desain)
- **Animasi:** Framer Motion
- **I18n / Terjemahan:** `next-intl`

## 📂 Struktur Direktori Utama

Pemisahan logika komponen dan terjemahan *(Content separation)*:

```text
src/
├── app/
│   ├── [locale]/           # Routing berdasarkan bahasa (id/en)
│   ├── robots.ts           # Konfigurasi SEO robot crawler
│   └── sitemap.ts          # Sitemap generator
├── components/
│   ├── common/             # Navbar, Footer, LangSwitcher, JsonLd
│   └── sections/           # Highlight Portofolio, Grid Produk, dll
├── data/                   # Data master berformat JSON
│   ├── portfolio.json      # Daftar Proyek
│   └── products.json       # Katalog Produk
├── i18n/                   # Next-Intl Setup & Routing list
├── messages/               # Kamus translasi antarmuka
│   ├── en.json             # Bahasa Inggris
│   └── id.json             # Bahasa Indonesia
└── middleware.ts           # Pendeteksi dan pengarah (/id atau /en)
```

## 💻 Panduan Menjalankan di Lokal (Development)

Pastikan Node.js (direkomendasikan versi 18.x ++ atau terbaru) sudah terpasang.

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/afebrii/tajur-mandiri-prima.git
   cd tajur-mandiri-prima
   ```

2. **Instal dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server *development*:**
   ```bash
   npm run dev
   ```
   > Buka `http://localhost:3000` di *web browser* Anda untuk melihat hasilnya.

4. **Kompilasi ke versi produksi (Build):**
   ```bash
   npm run build
   npm start
   ```

## 📝 Catatan Translasional (i18n)

Setiap penambahan teks *hardcoded* pada UI (contoh: teks pada tombol, judul seksi, deskripsi statis) harus ditambahkan terlebih dahulu *key*-nya pada file `/src/messages/id.json` dan `/src/messages/en.json` agar fitur pergantian bahasa dapat bekerja normal.

---

💼 _Dikembangkan oleh [Selasar Digital](https://github.com/andikafebrians) - 2026_
