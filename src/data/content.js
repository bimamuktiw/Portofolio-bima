import {
  Code2, Server, Database, Globe, Smartphone, GitBranch,
  Cloud,
  SquareDashedMousePointer,
  Laptop,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Semua data dummy portofolio ada di sini.
// Ganti nilai-nilai di bawah ini dengan data asli Anda.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "BIMA MUKTI WIBOWO",
  logoText: "bimamuktiw.dev",
  location: "Surabaya, Jawa Timur, Indonesia",
  role: "Frontend Developer",
  email: "bimamuktiwib@gmail.com",
  github: "github.com/bimamuktiw",
  linkedin: "linkedin.com/in/bimamuktiwibowo/",
};

export const NAV_ITEMS = [
  { id: "home", label: "home.tsx" },
  { id: "about", label: "about.md" },
  { id: "skills", label: "skills.json" },
  { id: "certifications", label: "certs.json" },
  { id: "projects", label: "projects/" },
  { id: "experience", label: "experience.log" },
  { id: "contact", label: "contact.sh" },
];

export const TYPE_STRING =
  "const developer = {\n  name: 'Bima Mukti Wibowo',\n  role: 'Frontend Developer',\n  location: 'Surabaya, ID',\n  passion: 'membangun antarmuka yang responsif dan mudah digunakan\'\n};";

export const ABOUT = {
  paragraphs: [
    "Saya merupakan lulusan Sistem Informasi Universitas Pembangunan Nasional Veteran Jawa Timur dengan pengalaman pada Frontend Development dan Cloud Computing.",
    "Melalui Bangkit Academy dan Binar Academy, saya terus mengembangkan kemampuan teknis untuk membangun solusi digital yang modern dan bermanfaat.",
  ],
  stats: [
    ["4+", "Proyek"],
    ["30+", "sertifikat & Badges"],
    ["2", "Bootcamp"],
    ["3.65", "GPA"],
  ],
};

export const SKILLS = [
  { group: "Frontend", icon: Code2, items: ["React", "JavaScript", "HTML5", "Tailwind CSS", "CSS3", "Bootstrap"] },
  { group: "Backend", icon: Server, items: ["Node.js", "Express.js", "REST API"] },
  { group: "Database", icon: Database, items: ["PostgreSQL", "MongoDB", "MySQL"] },
  { group: "Cloud", icon: Cloud, items: ["Google Cloud Platform", "Cloud Run", "Cloud Storage", "Compute Engine"] },
  { group: "Tools", icon: SquareDashedMousePointer, items: ["VS Code", "Git","GitHub", "Vercel", "Postman"] },
  { group: "Productivity", icon: Laptop, items: ["Microsoft Office", "Google Workspace", "Notion", "Trello", "Canva", "Figma"] },
];

export const PROJECTS = [
  {
    file: "fucking-fake.tsx",
    title: "Fucking Fake — Clothing Brand",
    desc: "Landing page satu halaman untuk brand clothing lokal, menampilkan profil brand, katalog produk dengan harga, dan integrasi peta lokasi toko. Dibangun ringan dan responsif, di-deploy langsung ke Vercel.",
    tags: ["HTML", "CSS", "JavaScript"], // sesuaikan dengan stack asli kamu
    accent: "#7CFC00",
    linkType: "live",
    linkUrl: "https://fuckingfake.vercel.app/",
    // Taruh screenshot situsnya di public/projects/fucking-fake.jpg lalu path-nya di sini
    image: "/project/fucking-fake.png",
  },
  {
    file: "binar-rental-car.tsx",
    title: "Binar Rental Car",
    desc: "Aplikasi penyewaan mobil berbasis web yang dikembangkan menggunakan React.js. Proyek ini menampilkan daftar mobil, detail kendaraan, autentikasi pengguna, serta antarmuka yang responsif untuk meningkatkan pengalaman pengguna.",
    tags: ["HTML", "CSS", "JavaScript"],
    accent: "#39FF14",
    linkType: "live", // "live" = sudah deploy, "pdf" = mobile-only / dokumentasi PDF
    linkUrl: "https://binarrentalcar.vercel.app/",
    image: "/project/binar-rental-car.png", // isi path/URL screenshot kalau ada, mis. "/projects/commerce-engine.jpg"
  },
  {
  file: "meetflix.jsx",
  title: "Meetflix",
  desc: "Platform pencarian film yang terintegrasi dengan TMDB API untuk menampilkan informasi film secara real-time, lengkap dengan fitur pencarian, detail film, rating, dan antarmuka responsif.",
  tags: ["React.js", "TMDB API", "Bootstrap"," Tailwind CSS"],
  accent: "#00FFA3",
  linkType: "live",
  linkUrl: "https://meetflix.vercel.app/",
  image: "/project/meetflix.png",
  },
  {
  file: "ngefly.jsx",
  title: "NgeFly",
  desc: "Platform pemesanan tiket pesawat berbasis React.js yang mengintegrasikan REST API untuk pencarian penerbangan, autentikasi pengguna, riwayat pemesanan, serta antarmuka responsif.",
  tags: ["React.js", "REST API", "Redux Toolkit", "Tailwind CSS"],
  accent: "#39FF14",
  linkType: "live",
  linkUrl: "https://ngeflyy.vercel.app/",
  image: "/project/ngefly.png",
},
  {
    file: "pesonapusaka.ts",
    title: "Pesona Pusaka",
    desc: "Aplikasi wisata berbasis mobile yang membantu pengguna menjelajahi destinasi cagar budaya di Indonesia melalui informasi wisata, peta lokasi, autentikasi pengguna, serta antarmuka yang responsif dan mudah digunakan.",
    tags: [ "Google Cloud", "Cloud Run", "Node.js", "REST API"],
    accent: "#39FF14",
    linkType: "live",
    linkUrl: "https://github.com/bimamuktiw/PesonaPusaka",
    image: "/project/pesonapusaka.png",
  },
];

export const GIT_LOG = [
  { hash: "a3f9c1e", date: "2025 ", role: "Lulus S1 Sistem Informasi", org: "Universitas Pembangunan Nasional Veteran Jawa Timur", branch: "main", msg: "Mempelajari pengembangan perangkat lunak, basis data, analisis sistem, serta manajemen proyek teknologi informasi." },
  { hash: "7d2b8aa", date: "2024", role: "Frontend Developer", org: "Binar Academy", branch: "intern", msg: "Mengembangkan antarmuka web responsif menggunakan React.js serta berkolaborasi dalam pengembangan aplikasi." },
  { hash: "1e44f02", date: "2023 — 2024", role: "Cloud Computing Cohort", org: "Bangkit Academy by Google, GoTo, dan Traveloka", branch: "cohort", msg: "Mempelajari Google Cloud Platform, deployment aplikasi, cloud infrastructure, serta membangun solusi berbasis cloud melalui proyek kolaboratif." },
];
