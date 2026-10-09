# Nana Kurniasih — Portofolio Personal

Portofolio satu halaman bertema gelap modern untuk **Nana Kurniasih**, Guru
Produktif Desain Komunikasi Visual. Dibangun dengan HTML, CSS, dan JavaScript
murni — tanpa build step, siap produksi, dan sepenuhnya responsif.

Futuristik, elegan, minimalis, dan interaktif: latar gradien beranimasi, efek
floating UI, kartu glassmorphism, aksen glowing lembut, dan animasi scroll yang halus.

## ✨ Fitur (build saat ini)

- **Navbar** — tetap di atas, berubah glass saat scroll, scroll-spy link aktif, menu mobile beranimasi
- **Hero** — landing fullscreen, badge "Terbuka untuk kolaborasi", intro typewriter,
  foto profil bulat bersinar, tombol CTA (Lihat Karya / Unduh CV), latar partikel
  beranimasi + gradien glowing, chip melayang
- **Tentang** — biografi profesional, highlight pengalaman, dan kartu statistik beranimasi

> Bagian lain (Keahlian, Karya, Pengalaman, Testimoni, Kontak, Footer)
> akan ditambahkan setelah konfirmasi.

## 🗂️ Struktur proyek

```
.
├── index.html              # Entry point satu halaman
├── readme.md
├── components/             # Partial section reusable (sumber per blok)
│   ├── navbar.html
│   ├── hero.html
│   └── about.html
├── pages/                  # Cadangan untuk halaman mandiri di masa depan
└── assets/
    ├── fotonana.jpeg       # Foto profil
    ├── css/
    │   ├── variables.css   # Design token (warna, spacing, motion)
    │   ├── base.css        # Reset, global, latar beranimasi
    │   ├── components.css  # Tombol, kartu, badge, utilitas reveal
    │   ├── sections.css    # Navbar, hero, tentang
    │   └── responsive.css  # Breakpoint mobile / tablet / desktop
    ├── js/
    │   ├── particles.js    # Partikel canvas
    │   ├── typewriter.js   # Efek typewriter hero
    │   ├── animations.js   # Scroll reveal + penghitung animasi
    │   └── main.js         # Navbar, menu mobile, scroll spy
    └── files/
        └── nana-kurniasih-cv.pdf   # Placeholder CV (ganti sebelum produksi)
```

## 🎨 Design system

- **Font:** Sora (display) + Space Grotesk (body)
- **Palet:** dasar navy gelap dengan aksen violet `#7c5cff`, teal `#19e3cf`, pink `#ff6ad5`
- **Efek:** orb gradien beranimasi, partikel canvas, glassmorphism, glow lembut, gerak floating

## 🚀 Menjalankan secara lokal

Tanpa build tool. Buka `index.html` langsung di browser, atau sajikan foldernya:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Lalu buka `http://localhost:8000`.

## 📱 Responsif

Teruji untuk desktop, tablet, dan mobile. Menghormati `prefers-reduced-motion`.

## 🔧 Kustomisasi

Ubah data personal di `index.html`, atur tampilan via
`assets/css/variables.css`, dan ganti placeholder CV di `assets/files/`.
