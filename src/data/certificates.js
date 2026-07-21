// ---------------------------------------------------------------------------
// Data sertifikat. Kelompok berdasarkan penerbit (issuer).
// `fileUrl` mengarah ke file PDF — taruh file aslinya di folder `public/certificates/`
// lalu sesuaikan path-nya (contoh: "/certificates/nama-file.pdf").
// `featured: true` akan ditampilkan di carousel utama section Certifications.
// ---------------------------------------------------------------------------

export const CERTIFICATES = [
  // --- Bangkit Academy / Google ---
  { id: "c01", title: "Bangkit 2023 Batch 2 Certificate", issuer: "Bangkit Academy (Google, GoTo, Traveloka)", year: "2024", fileUrl: "/certificates/Bangkit 2023 Batch 2 Certificate - Bima Mukti Wibowo.pdf", featured: true },
  { id: "c02", title: "Coursera System Adminstration and IT Infrastructure Services", issuer: "Coursera", year: "2023", fileUrl: "/certificates/Coursera System Adminstration and IT Infrastructure Services.pdf" },
  { id: "c03", title: "Coursera The Bits and Bytes of Computer Networking", issuer: "Coursera", year: "2023", fileUrl: "/certificates/Coursera The Bits and Bytes of Computer Networking.pdf", featured: true },
 

  // --- Dicoding ---
  { id: "d01", title: "Belajar Dasar Git dengan GitHub", issuer: "Dicoding", year: "2023", fileUrl: "/certificates/Belajar Dasar Git dengan GitHub.pdf" },
  { id: "d02", title: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding", year: "2023", fileUrl: "/certificates/Belajar Dasar Pemrograman JavaScript.pdf", featured: true },
  { id: "d03", title: "Belajar Dasar Pemrograman Web", issuer: "Dicoding", year: "2023", fileUrl: "/certificates/Belajar Dasar Pemrograman Web.pdf", featured: true },
  { id: "d04", title: "Belajar Membuat aplikasi Back-End untuk Pemula dengan Google Cloud", issuer: "Dicoding", year: "2023", fileUrl: "/certificates/Belajar Membuat aplikasi Back-End untuk Pemula dengan Google Cloud.pdf" },
  { id: "d05", title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software", issuer: "Dicoding", year: "2023", fileUrl: "/certificates/Memulai Dasar Pemrograman untuk Menjadi Pengembang Software.pdf" },
  { id: "d06", title: "Menjadi Google Cloud Engineer", issuer: "Dicoding", year: "2023", fileUrl: "/certificates/Menjadi Google Cloud Engineer.pdf" },
  { id: "d07", title: "Pengenalan ke Logika Pemrograman", issuer: "Dicoding", year: "2023", fileUrl: "/certificates/Pengenalan ke Logika Pemrograman.pdf" },

  // --- Binar ---
  { id: "b01", title: "Final Report Scale 1-100 FEJS Bima Mukti Wibowo", issuer: "Binar", year: "2024", fileUrl: "/certificates/Final Report Scale 1-100 FEJS Bima Mukti Wibowo.pdf", featured: true },
  { id: "b02", title: "Sertif MSIB Binar", issuer: "Binar", year: "2024", fileUrl: "/certificates/sertif msib.pdf", featured: true },
 
];

// Daftar penerbit unik, dipakai untuk tab filter di modal
export const ISSUERS = [...new Set(CERTIFICATES.map((c) => c.issuer))];
