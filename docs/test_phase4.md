# Testing Scenario: Phase 4 (Animasi & Interaktivitas)

Skenario pengujian ini bertujuan untuk memvalidasi penambahan interaktivitas tingkat lanjut (*scroll reveal*, *hover states*) dan memastikan aksesibilitas (a11y) untuk pengguna *keyboard* maupun pembaca layar (*screen reader*) diuji dengan baik berlandaskan standar modern web.

## 1. Verifikasi Animasi Scroll Reveal (Framer Motion)
**Tujuan:** Memastikan elemen-elemen halaman tidak muncul mendadak melainkan dengan transisi halus saat digulir.
- [x] Buka `http://localhost:3000` (Halaman Beranda).
- [x] Lakukan *scroll* ke bawah secara natural.
- [x] **Expected Result:** Bagian seperti Profil, Statistik, dan *Highlight* (Portofolio, Produk, Layanan) muncul menggunakan efek *fade-in up* (merayap ke atas) atau animasi *staggered* (muncul bergantian antarkartu) secara elegan, tepat saat elemennya terlihat di *viewport*.
- [x] Pindah ke halaman `/about`, `/services`, `/portfolio`, dan `/products`.
- [x] **Expected Result:** Header *(Hero text)* masing-masing halaman dan grup konten utama menampilkan animasi masuk (*entrance animation*) yang estetik namun bebas patah-patah (*drop frame*), sehingga tak mengganggu performa.

## 2. Verifikasi Micro-interactions & Hover States
**Tujuan:** Memastikan antarmuka merespons secara visual terhadap *pointer/mouse* untuk UX yang lebih baik dan *premium*.
- [x] Arahkan kursor (*hover*) pada tombol-tombol CTA (seperti "Konsultasi Gratis", "Baca Selengkapnya").
- [x] **Expected Result:** Terjadi perubahan warna (misal, transisi *background color*) atau pergerakan halus (misal, tombol terangkat/muncul *shadow*) dalam durasi transisi wajar (~0.3 dtk).
- [x] Arahkan kursor pada kartu-kartu grid Portofolio dan Produk.
- [x] **Expected Result:** Gambar pada kartu sedikit membesar (*zoom in / scale-up* halus) atau muncul *box-shadow* yang lebih tegas guna mengindikasikan bahwa elemen tersebut merupakan blok interaktif/koleksi E-katalog.
- [x] Berinteraksi dengan elemen navigasi utama dan *filter buttons* (`Semua`, `Panel Maker`, dll).
- [x] **Expected Result:** Cincin interaktif berubah, teks menebal atau mengubah *background color*, lengkap dan padu (saling sinkron animasinya).

## 3. Verifikasi Aksesibilitas Keyboard (Keyboard Navigation)
**Tujuan:** Memastikan pengguna yang bergantung penuh pada *keyboard* tetap mampu bernavigasi dan bertindak (a11y dasar).
- [x] Buka ulang halaman utama tanpa meletakkan tangan di *mouse*.
- [x] Tekan tombol `Tab` pada *keyboard* berkali-kali untuk menyimulasikan navigasi.
- [x] **Expected Result:** Lingkaran fokus (`outline:focus` atau ring visual yang menyala) berpindah logis pada setiap elemen berurut seperti:
  1. *Link* navigasi/Logo Utama.
  2. Tombol pengganti bahasa (*Language Switcher*).
  3. Tombol-tombol navigasi/CTA di dalam area *slider* dan *body* halaman.
  4. *Links* di bagian paling bawah *Footer*.
- [x] Tekan tombol `Enter` (atau Spasi) saat fokus berada di tombol *Language Switcher* atau rute lainnya.
- [x] **Expected Result:** Terjadilah aksi klik (*Click*) yang dieksekusi normal bak menekan tetikus.

## 4. Verifikasi Teks Deskriptif untuk Alat Bantu Baca
**Tujuan:** Memastikan elemen khusus seperti tombol non-teks atau hiasan non-fungsi tersemat tag/atribut ARIA semesta Web Accessibility.
- [x] Inspeksi elemen tombol yang hanya berisi *icon*/simbol (misal: panah geser pada Hero Carousel, atau ikon Hamburger Menu pada mobile).
- [x] **Expected Result:** Setidaknya telah disisipkan atribut seperti `aria-label="Tutup menu navigasi"` atau alternatif teks deskripsi pendukung bagi pembaca layar (VoiceOver/NVDA).
- [x] Inspeksi seluruh elemen pemanggil gambar `<img />` melalui *Next/Image* di tiap halaman aplikasi.
- [x] **Expected Result:** Atribut `alt="..."` harus hadir dan mendeklarasikan maksud gambarnya. Atribut bawaan ini cukup dikosongkan (`alt=""`) jika memang peruntukannya semata-mata untuk gambar dekoratif murni dan tak memuat perihal fungsional.
