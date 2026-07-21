// Utility kecil untuk smooth-scroll ke sebuah section berdasarkan id.
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
