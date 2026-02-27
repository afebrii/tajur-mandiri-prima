# Skenario Pengujian Phase 5: Performance & SEO (Advanced)

Dokumen ini memuat panduan langkah demi langkah untuk memvalidasi performa situs web (Core Web Vitals) dan konfigurasi SEO yang diterapkan pada website Tajur Mandiri Prima (TMP).

## 1. Verifikasi Optimasi Aset Gambar (WebP/AVIF & Lazy Loading)
**Tujuan:** Memastikan penggunaan bandwidth minimal dan waktu muat *(load time)* yang efisien.
- [x] Buka browser (Chrome/Edge/Firefox) dan buka `http://localhost:3000`.
- [x] Klik kanan (Inspect Element) lalu buka tab **Network**. Pastikan opsi "Disable cache" tercentang.
- [x] Filter tab tersebut menjadi **Img** saja. Refresh halaman (F5 atau Ctrl+R / Cmd+R).
- [x] **Expected Result:** Pada kolom **Type** di daftar jaringan, pastikan gambar memiliki format modern (`avif` atau `webp`). Ukuran gambar *(Size)* tidak ada yang terlalu besar (biasanya harus di bawah 200 KB per gambar).
- [x] Lakukan *scroll* perlahan ke bawah.
- [x] **Expected Result:** Gambar-gambar yang berada di bagian bawah halaman baru ter-request/muncul di tab Network ketika hampir atau mulai memasuki viewport (*lazy loading* berhasil).

## 2. Verifikasi Metadata SEO (Title, Description, OpenGraph)
**Tujuan:** Memastikan website terindeks sempurna dan menarik untuk diklik saat dibagikan di *search engine* maupun media sosial, mendukung multi-bahasa (ID & EN).
- [x] Buka halaman utama `http://localhost:3000/id`, klik kanan dan pilih **View Page Source**.
- [x] Tekan `Ctrl+F` atau `Cmd+F` lalu cari tag `<title>`.
- [x] **Expected Result:** Terdapat tag misal `<title>Tajur Mandiri Prima | Kontraktor Listrik & Panel</title>`.
- [x] Cari tag `<meta name="description" content="...">`.
- [x] **Expected Result:** Memiliki deskripsi 1-2 kalimat (misal: "Kami menawarkan layanan elektrikal industri, perakitan panel LVMDP...").
- [x] Lakukan pencarian untuk Facebook Open Graph (`<meta property="og:title" ... />`) dan Twitter Cards (`<meta name="twitter:card" ... />`).
- [x] **Expected Result:** Tag-tag ini terdefinisi dengan konten yang mewakili beranda.
- [x] Beralih ke `/en`, dan lakukan verifikasi yang sama. Pastikan teks *Title* dan *Description* berbahasa Inggris.

## 3. Verifikasi Schema Markup (JSON-LD)
**Tujuan:** Memberikan konteks pada mesin pencari agar situs dikenali dengan Rich Snippets sebagai bisnis lokal teregistrasi.
- [x] Buka tab Inspect Element dan cari `<script type="application/ld+json">`.
- [x] Alternatif: *Copy* tag *script* JSON-LD lalu paste di [Google Rich Results Test](https://search.google.com/test/rich-results).
- [x] **Expected Result:** Tersedia objek `LocalBusiness` atau `Organization` berisikan nama perusahaan "PT. Tajur Mandiri Prima", kontak, dan alamat yang relevan dan **Valid** tanpa error ketika dites.

## 4. Verifikasi `sitemap.xml` & `robots.txt`
**Tujuan:** Memastikan navigasi perayapan (*crawling*) mesin pencari diatur dengan benar.
- [x] Ketikkan `http://localhost:3000/robots.txt` pada address bar browser.
- [x] **Expected Result:** Muncul teks instruksi `User-agent: *`, `Allow: /`, dan mengarahkan ke URL Sitemap (misal: `Sitemap: https://tajurmandiriprima.com/sitemap.xml`).
- [x] Ketikkan `http://localhost:3000/sitemap.xml`.
- [x] **Expected Result:** Merupakan format terstruktur berbasis XML `<urlset>` yang berisi setidaknya jalur `/`, `/about`, `/services`, `/portfolio`, `/products` pada versi `id` dan `en`.

## 5. Simulasi Core Web Vitals (Lighthouse)
**Tujuan:** Memastikan metrik utama berada pada target *"Good"* (hijau).
- [x] Buka aplikasi via Chrome (samarkan ke incognito/private page agar ektensi browser tidak mengganggu kalkulasi).
- [x] Buka **Inspect Element -> tab Lighthouse**.
- [x] Pilih "Navigation", centang "Performance" dan "SEO", format Device "Mobile" atau "Desktop", lalu klik **Analyze Page Load**.
- [x] **Expected Result:** 
  - **Performance Score** sebaiknya > 85 (Target Hijau / *Good* LCP < 2.5s).
  - **SEO Score** harus sempurna atau mendekati ( > 95 ). Tidak mendeteksi masalah tag yang tertinggal.
