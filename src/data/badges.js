// ---------------------------------------------------------------------------
// Koleksi badge digital / kredensial yang diverifikasi via halaman publik
// (bukan file PDF) — misalnya Google Cloud Skill Badges, Credly, dll.
// Tambahkan provider baru di sini kapan saja tanpa perlu upload file apa pun.
//
// PENTING soal `profileUrl` untuk Google Cloud Skills Boost:
// Jangan pakai link dashboard pribadi (skills.google/profile/badges...) —
// link itu mengharuskan pengunjung login dan tidak menampilkan badge Anda
// ke orang lain. Gunakan link "Public Profile" (format:
// cloudskillsboost.google/public_profiles/xxxxx) yang bisa dilihat siapa
// saja tanpa login. Aktifkan di Skills Boost > Profile > "Make profile public".
// ---------------------------------------------------------------------------

export const BADGE_COLLECTIONS = [
  {
    id: "b01",
    provider: "Google Cloud",
    title: "Google Cloud Skill Badges",
    count: 25,
    description:
      "Kumpulan skill badge dari jalur pembelajaran hands-on Google Cloud, terverifikasi langsung oleh Google.",
    // Nama-nama badge yang ingin ditonjolkan sebagai chip (tidak perlu semua 24, cukup yang paling relevan/menonjol)
    highlights: [
      "Cloud Run",
      "Cloud SQL",
      "ML Infrastructure",
      "Monitoring Google Cloud",
      "Cloud Engineering",
    ],
    profileUrl: "https://www.skills.google/public_profiles/0ba04bcc-a46c-4fd4-a337-669f9c58b34e",
    ctaLabel: "Lihat semua badge di Google Cloud Skills Boost",
  },
  // Contoh menambah provider lain nanti:
  // {
  //   id: "b02",
  //   provider: "Credly",
  //   title: "Credly Badges",
  //   count: 5,
  //   description: "Kumpulan badge dari berbagai penerbit yang terverifikasi via Credly.",
  //   highlights: ["AWS Cloud Practitioner", "Scrum Fundamentals"],
  //   profileUrl: "https://www.credly.com/users/username/badges",
  //   ctaLabel: "Lihat semua badge di Credly",
  // },
];
