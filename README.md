# Portofolio Website

Project React + Vite + Tailwind CSS dengan tema hitam & hijau neon (terminal/code-editor style).

## Cara menjalankan di VS Code

1. Buka folder ini di VS Code.
2. Buka terminal (Ctrl+`) lalu install dependency:
   ```
   npm install
   ```
3. Jalankan server development:
   ```
   npm run dev
   ```
4. Buka link yang muncul di terminal (biasanya http://localhost:5173).

## Cara build untuk production

```
npm run build
```
Hasilnya ada di folder `dist/`, tinggal upload ke hosting (Vercel, Netlify, dll).

## Struktur folder

```
src/
├── components/       ← satu komponen = satu section, mudah dicari & diedit
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Certifications.jsx    (carousel sertifikat unggulan)
│   ├── CertificateModal.jsx  (modal "lihat semua" dengan search & filter penerbit)
│   ├── Projects.jsx          (carousel proyek)
│   ├── Experience.jsx        (riwayat karier ala git log)
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   ├── content.js       ← data umum (nama, email, proyek, skill, dll)
│   ├── certificates.js  ← daftar 33+ sertifikat PDF, dikelompokkan per penerbit
│   └── badges.js        ← koleksi badge digital (mis. Google Cloud Skill Badges)
├── utils/
│   └── scrollToSection.js
├── hooks/
│   └── useDraggableCarousel.js  ← logika carousel drag/swipe + infinite loop, dipakai Projects & Certifications
├── App.jsx           ← menyusun semua komponen section di atas
├── main.jsx
└── index.css          ← font, warna dasar, animasi global

public/
└── certificates/     ← taruh file PDF sertifikat asli Anda di sini
```

## Carousel (Projects & Certifications)

Kedua carousel bisa digeser dengan **mouse (klik-tahan-geser)** maupun **jari di layar sentuh (swipe)**, dan bersifat **infinite loop** — kalau digeser terus di slide terakhir, otomatis lanjut mulus ke slide pertama (begitu juga sebaliknya), tanpa lompatan kasar.

Logikanya ada di satu file reusable: `src/hooks/useDraggableCarousel.js`. Kalau ingin menambah carousel baru di section lain, tinggal pakai hook yang sama — tidak perlu menulis ulang logika drag/infinite-loop-nya.

## Section Sertifikat &amp; Badge

Ada dua jenis kredensial yang ditampilkan beda cara:

**1. Badge digital** (`src/data/badges.js`) — untuk kredensial yang jumlahnya sering bertambah dan sudah punya halaman verifikasi publik, contoh: Google Cloud Skill Badges. Ditampilkan sebagai satu **kartu ringkasan** berisi jumlah badge, beberapa **chip nama badge unggulan** (`highlights`) supaya ada bukti visual cepat tanpa perlu klik keluar, dan link ke halaman profil publik Anda.

⚠️ **Penting**: gunakan link **"Public Profile"** dari Google Cloud Skills Boost (format `cloudskillsboost.google/public_profiles/xxxxx`), BUKAN link dashboard pribadi (`skills.google/profile/badges...`). Link dashboard mengharuskan pengunjung login dan tidak akan menampilkan badge Anda ke orang lain. Aktifkan Public Profile di Skills Boost → Profile → "Make profile public", lalu ganti nilai `profileUrl` di `src/data/badges.js`.

**2. Sertifikat PDF** (`src/data/certificates.js`) — untuk sertifikat yang Anda simpan sendiri filenya.
- Beberapa ditandai `featured: true` — tampil di carousel utama halaman.
- Tombol **"Lihat semua"** membuka modal berisi seluruh sertifikat, bisa dicari dan difilter berdasarkan penerbit.
- Setiap kartu membuka file PDF di tab baru sesuai `fileUrl`. Taruh file PDF asli di `public/certificates/` dengan nama file yang sama persis seperti di `fileUrl`.

## Mengedit konten

Cukup buka satu file: **`src/data/content.js`**. Semua teks yang tampil di web (nama, email, link sosial, daftar skill, daftar proyek, riwayat karier, teks animasi hero) ada di situ — tidak perlu menyentuh file komponen sama sekali.

Kalau ingin mengubah **tampilan/layout** suatu section, buka file komponennya langsung di folder `src/components/` (misalnya `Projects.jsx` untuk carousel proyek).

Untuk foto profil: buka `src/components/Hero.jsx`, cari komentar `foto-profil.png`, lalu ganti blok placeholder dengan `<img src="/foto-anda.jpg" className="w-full h-full object-cover" />` (taruh file gambarnya di folder `public/`).

## Requirement
- Node.js versi 18 ke atas (cek dengan `node -v`)
