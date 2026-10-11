# NxDOM CLI — Landing Page

Website promosi untuk **NxDOM CLI** (`nxdom-cli`).

## Repo & URL

- **Repo GitHub**: https://github.com/nxdevmodel/nxdom-cli
- **Live (GitHub Pages)**: https://nxdevmodel.github.io/nxdom-cli/
- **Folder kerja lokal**: `D:\Framework\CLI\nxdom\website\`
- **Pages source**: branch `main`, path `/` (root) — jadi file web HARUS tetap di
  root repo ini, bukan di dalam subfolder lain.

## Struktur

```
index.html   halaman utama (landing page)
style.css    tema gelap + responsif
index.js     i18n ID/EN (localStorage + deteksi bahasa browser), copy install cmd
logo.png     logo
404.html     halaman error
```

## Isi halaman

1. Hero — tagline, mockup terminal, tombol copy perintah install
2. Kenapa NxDOM — 6 kartu fitur
3. Runtime yang didukung — tabel 5 runtime + component sets UI
4. Agent AI highlight — mockup chat + contoh perintah + token usage
5. Tampilan — screenshot dari unpkg (`nxdom-cli@latest/screenshot/*`)
6. Cara mulai — 3 langkah
7. Download — npm, EXE portabel
8. FAQ
9. Footer — docs, GitHub, lapor bug, Sponsor (pink, tanpa border)

## Catatan penting

- **Bekerja HANYA di folder ini** (`website/`), repo ini independen — `.git`
  ada di dalam folder ini sendiri, BUKAN milik `D:\Framework\CLI\nxdom\`
  (proyek CLI induk). Jangan menarik file proyek CLI (src/, bin/, test/,
  scripts/, package.json, dll.) ke dalam repo ini.
- Jangan memindahkan file web keluar root repo — Pages hanya membaca
  branch `main` path `/`.
- Tombol Sponsor mengarah ke https://github.com/sponsors/iyanrsaleh
- Screenshot memakai URL unpkg; jika gagal dimuat, figure disembunyikan otomatis
  (lihat `index.js`).
- Referensi materi awal: `D:\Framework\CLI\nxdom\website.md`
- Proyek CLI induk (konteks produk): `D:\Framework\CLI\nxdom\`
  (`README.md`, `overview.md`, `teknis.md`)

## Riwayat keputusan

- Repo ini awalnya bercampur dengan source CLI induk → dibersihkan; sekarang
  repo murni berisi website saja (file web di root).
- File web sempat pindah-pindah (root → `website/` → root → `docs/` → root)
  karena Pages hanya mendukung path `/` atau `/docs`. Keputusan final: **root**,
  dan folder kerja lokal yang jadi repo adalah `website/`.
- Tema: gelap (mengikuti tampilan CLI nxdom), dengan switch bahasa ID/EN
  bergaya sama dengan web organisasi `D:\CLI\nxdom\`.
