// NxDOM landing — i18n ID/EN + interaksi ringan

const I18N = {
  id: {
    "meta.title": "NxDOM — Bangun aplikasi dari satu CLI",
    "meta.desc": "NxDOM CLI — bangun aplikasi Backend, Desktop, Mobile, dan Web dari satu CLI. Pilih menu, tekan Enter, jadi.",
    "nav.fitur": "Fitur",
    "nav.runtime": "Runtime",
    "nav.tampilan": "Tampilan",
    "nav.mulai": "Cara Mulai",
    "nav.faq": "FAQ",
    "nav.docs": "Docs",
    "nav.download": "Download",
    "hero.badge": "Nxdom CLI v1.0.17 · MIT",
    "hero.title": "Bangun aplikasi dari <span class=\"accent\">satu CLI</span>",
    "hero.desc": "<strong>NxDOM</strong> — Nusantara eXtreme Development Object Model. Backend PHP, Desktop Electron, Mobile Expo, Web Express, dan Web statik — semua dikelola dari terminal. Pilih menu, tekan Enter, jadi.",
    "hero.cta1": "Download untuk Windows",
    "hero.cta2": "Dokumentasi",
    "install.copy": "Copy",
    "install.copied": "Tersalin ✓",
    "hero.note": "Juga tersedia EXE portabel — tanpa installer, tanpa Node.js.",
    "fit.title": "Kenapa NxDOM?",
    "fit.1t": "Semua runtime, satu CLI",
    "fit.1d": "Backend, Desktop, Mobile, Web Express, dan Web statik — dikelola dari satu tempat dengan pola kerja yang sama.",
    "fit.2t": "Modul siap pakai",
    "fit.2d": "Tombol, form, navigasi, chart, ikon, dan banyak lagi. Modul wajib tiap runtime dicek dan dipasang otomatis.",
    "fit.3t": "Agent AI bawaan",
    "fit.3d": "Chat streaming, 22+ provider cloud & lokal. Asisten bisa mengeksekusi install, migrate, hingga update framework — selalu dengan konfirmasi.",
    "fit.4t": "Tanpa konfigurasi rumit",
    "fit.4d": "Menu interaktif dengan tombol panah. Tidak perlu hafal perintah — tapi tetap ada shell <code>❯</code> bagi yang suka ketik cepat.",
    "fit.5t": "EXE portabel",
    "fit.5d": "Satu file <code>nxdom.exe</code> untuk Windows — tanpa installer, tanpa Node.js. Salin ke folder mana pun, langsung jalan.",
    "fit.6t": "Server lokal + live reload",
    "fit.6d": "Server statis dan PHP bawaan dengan live reload. Ubah file, browser ikut segarkan — tanpa ekstensi tambahan.",
    "rt.title": "Runtime yang didukung",
    "rt.h1": "Runtime",
    "rt.h2": "Teknologi",
    "rt.h3": "Untuk apa",
    "rt.1": "API & aplikasi web, migrasi database, generator controller",
    "rt.2": "Aplikasi Android & Web dari satu kode — QR scan langsung jalan",
    "rt.3": "Aplikasi desktop Windows",
    "rt.4": "Aplikasi web dengan server Node",
    "rt.5": "SPA ringan tanpa server dev penuh",
    "rt.extra": "Plus <strong>Component sets UI</strong> — Face, Fluen, Git, Gnumix, IDE, Mcbook, dan lainnya. Ganti set semudah pilih menu.",
    "ai.badge": "Agent AI bawaan",
    "ai.title": "Tanya, dia yang kerjakan",
    "ai.lede": "Ketik langsung di baris <code>❯</code> tanpa awalan <code>/</code> — Asisten membaca runtime, modul, dan config proyekmu, lalu mengeksekusi dengan konfirmasi di terminal.",
    "ai.1": "“Install runtime Mobile beserta modul wajibnya”",
    "ai.2": "“Pasang modul alerts, branch, dan chart”",
    "ai.3": "“Update models Backend dari sumber terbaru”",
    "ai.4": "“Migrasi database — jalankan migrasi pending”",
    "ai.token": "Token per balasan & sesi: <code>↑ input · ↓ output · ∑ total</code>",
    "ai.term1": "Runtime Mobile terpasang beserta 6 modul wajib.",
    "ai.term2": "Jalankan Start untuk membuka QR Expo.",
    "sh.title": "Tampilan",
    "sh.cap1": "Menu Runtime — beranda nxdom",
    "sh.cap2": "Pengaturan Asisten AI",
    "sh.cap3": "Konfirmasi sebelum aksi berdampak",
    "sh.cap4": "Progress operasi",
    "st.title": "Cara mulai",
    "st.1t": "Pasang",
    "st.1a": "atau tanpa instalasi: <code>npx nxdom-cli</code>, atau unduh EXE portabel.",
    "st.2t": "Buka di proyekmu",
    "st.2a": "Menu Runtime langsung tampil.",
    "st.3t": "Pilih runtime → Install → Start",
    "st.3a": "Mobile langsung tampil QR code — scan dari HP, aplikasi berjalan.",
    "dl.title": "Download",
    "dl.1": "Windows, macOS, Linux. Butuh Node.js ≥ 20.17 dan npm.",
    "dl.1n": "Update: npm update --global nxdom-cli",
    "dl.2t": "EXE portabel",
    "dl.2": "Windows x64 — satu file, tanpa installer, tanpa Node.js.",
    "dl.2n": "File baru diunduh dapat memicu peringatan SmartScreen (belum ditandatangani digital). Verifikasi integritas dengan SHA256 yang disertakan.",
    "dl.2x": "Aksi tertentu tetap butuh tool eksternal: npm/npx (Desktop, Mobile, Web), PHP/Composer (Backend), internet (GitHub & provider AI).",
    "faq.title": "FAQ",
    "faq.1q": "Apakah NxDOM gratis?",
    "faq.1a": "Ya, lisensi MIT.",
    "faq.2q": "Apakah butuh Node.js?",
    "faq.2a": "Versi npm butuh Node.js ≥ 20.17. Versi EXE portabel tidak butuh Node sama sekali.",
    "faq.3q": "Port sudah dipakai (mis. 9002)?",
    "faq.3a": "Menu runtime → <strong>Stop</strong> → <strong>Start</strong>. Nxdom otomatis mencoba menghentikan proses lama.",
    "faq.4q": "Browser tidak terbuka saat menekan <code>w</code>?",
    "faq.4a": "Pastikan status berjalan (titik hijau di menu Log), lalu tekan <code>↻ Refresh</code>.",
    "faq.5q": "Rate limit GitHub habis?",
    "faq.5a": "Isi <code>GITHUB_TOKEN</code> di konfigurasi atau tunggu reset limit. Cek sumber aktif dengan <code>nxdom info</code>.",
    "foot.slogan": "Nusantara eXtreme Development Object Model",
    "foot.link1": "Dokumentasi",
    "foot.link3": "Lapor bug",
    "foot.link3b": "Sponsor",
    "foot.copy": "Lisensi MIT · © 2026 NxDOM",
  },
  en: {
    "meta.title": "NxDOM — Build apps from a single CLI",
    "meta.desc": "NxDOM CLI — build Backend, Desktop, Mobile, and Web apps from one CLI. Pick a menu, press Enter, done.",
    "nav.fitur": "Features",
    "nav.runtime": "Runtimes",
    "nav.tampilan": "Screenshots",
    "nav.mulai": "Get Started",
    "nav.faq": "FAQ",
    "nav.docs": "Docs",
    "nav.download": "Download",
    "hero.badge": "Nxdom CLI v1.0.17 · MIT",
    "hero.title": "Build apps from <span class=\"accent\">one CLI</span>",
    "hero.desc": "<strong>NxDOM</strong> — Nusantara eXtreme Development Object Model. PHP Backend, Electron Desktop, Expo Mobile, Express Web, and static Web — all managed from your terminal. Pick a menu, press Enter, done.",
    "hero.cta1": "Download for Windows",
    "hero.cta2": "Documentation",
    "install.copy": "Copy",
    "install.copied": "Copied ✓",
    "hero.note": "Also available as a portable EXE — no installer, no Node.js.",
    "fit.title": "Why NxDOM?",
    "fit.1t": "Every runtime, one CLI",
    "fit.1d": "Backend, Desktop, Mobile, Web Express, and static Web — managed from one place with the same workflow.",
    "fit.2t": "Ready-to-use modules",
    "fit.2d": "Buttons, forms, navigation, charts, icons, and more. Required modules per runtime are checked and installed automatically.",
    "fit.3t": "Built-in AI Agent",
    "fit.3d": "Streaming chat, 22+ cloud & local providers. The assistant can install, migrate, even update the Backend framework — always with confirmation.",
    "fit.4t": "No complex configuration",
    "fit.4d": "Interactive arrow-key menus. No commands to memorize — though there is still a <code>❯</code> shell for fast typers.",
    "fit.5t": "Portable EXE",
    "fit.5d": "One <code>nxdom.exe</code> file for Windows — no installer, no Node.js. Copy it anywhere and it just runs.",
    "fit.6t": "Local server + live reload",
    "fit.6d": "Built-in static and PHP server with live reload. Edit a file and your browser refreshes — no extensions needed.",
    "rt.title": "Supported runtimes",
    "rt.h1": "Runtime",
    "rt.h2": "Technology",
    "rt.h3": "Best for",
    "rt.1": "APIs & web apps, database migrations, controller generator",
    "rt.2": "Android & Web apps from one codebase — scan the QR and run",
    "rt.3": "Windows desktop applications",
    "rt.4": "Web apps with a Node server",
    "rt.5": "Lightweight SPA without a full dev server",
    "rt.extra": "Plus <strong>UI component sets</strong> — Face, Fluen, Git, Gnumix, IDE, Mcbook, and more. Switching sets is as easy as picking a menu.",
    "ai.badge": "Built-in AI Agent",
    "ai.title": "Ask, and it gets done",
    "ai.lede": "Type directly at the <code>❯</code> prompt without a <code>/</code> prefix — the assistant reads your runtimes, modules, and project config, then executes with confirmation in the terminal.",
    "ai.1": "“Install the Mobile runtime with its required modules”",
    "ai.2": "“Install the alerts, branch, and chart modules”",
    "ai.3": "“Update the Backend models from the latest source”",
    "ai.4": "“Database migration — run pending migrations”",
    "ai.token": "Tokens per reply & session: <code>↑ input · ↓ output · ∑ total</code>",
    "ai.term1": "Mobile runtime installed with its 6 required modules.",
    "ai.term2": "Run Start to open the Expo QR.",
    "sh.title": "Screenshots",
    "sh.cap1": "Runtime menu — the nxdom home",
    "sh.cap2": "AI Assistant settings",
    "sh.cap3": "Confirmation before impactful actions",
    "sh.cap4": "Operation progress",
    "st.title": "Get started",
    "st.1t": "Install",
    "st.1a": "or without installing: <code>npx nxdom-cli</code>, or grab the portable EXE.",
    "st.2t": "Open your project",
    "st.2a": "The Runtime menu appears right away.",
    "st.3t": "Pick runtime → Install → Start",
    "st.3a": "Mobile shows a QR code instantly — scan it with your phone and the app runs.",
    "dl.title": "Download",
    "dl.1": "Windows, macOS, Linux. Requires Node.js ≥ 20.17 and npm.",
    "dl.1n": "Update: npm update --global nxdom-cli",
    "dl.2t": "Portable EXE",
    "dl.2": "Windows x64 — one file, no installer, no Node.js.",
    "dl.2n": "Freshly downloaded files may trigger a SmartScreen warning (not yet code-signed). Verify integrity with the included SHA256.",
    "dl.2x": "Some actions still need external tools: npm/npx (Desktop, Mobile, Web), PHP/Composer (Backend), internet (GitHub & AI providers).",
    "faq.title": "FAQ",
    "faq.1q": "Is NxDOM free?",
    "faq.1a": "Yes, MIT licensed.",
    "faq.2q": "Does it need Node.js?",
    "faq.2a": "The npm version needs Node.js ≥ 20.17. The portable EXE needs no Node at all.",
    "faq.3q": "Port already in use (e.g. 9002)?",
    "faq.3a": "Runtime menu → <strong>Stop</strong> → <strong>Start</strong>. Nxdom tries to stop the old process automatically.",
    "faq.4q": "Browser doesn't open when pressing <code>w</code>?",
    "faq.4a": "Make sure the status is running (green dot in the Log menu), then press <code>↻ Refresh</code>.",
    "faq.5q": "GitHub rate limit reached?",
    "faq.5a": "Set <code>GITHUB_TOKEN</code> in the config or wait for the limit to reset. Check the active source with <code>nxdom info</code>.",
    "foot.slogan": "Nusantara eXtreme Development Object Model",
    "foot.link1": "Documentation",
    "foot.link3": "Report a bug",
    "foot.link3b": "Sponsor",
    "foot.copy": "MIT License · © 2026 NxDOM",
  },
};

function setLang(lang) {
  if (!I18N[lang]) lang = "id";
  document.documentElement.lang = lang;
  try { localStorage.setItem("nxdom-lang", lang); } catch {}

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langBtn === lang);
  });

  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n")];
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const v = dict[el.getAttribute("data-i18n-html")];
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.getAttribute("data-i18n-attr").split(",").forEach((rule) => {
      const [attr, key] = rule.split("|");
      if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
    });
  });
  if (dict["meta.title"]) document.title = dict["meta.title"];
}

// --- Interaksi ringan ---

// Salin perintah instalasi di hero
const copyBtn = document.getElementById("copy-install");
const installCmd = document.getElementById("install-cmd");
if (copyBtn && installCmd) {
  const label = () => copyBtn.querySelector("span");
  copyBtn.addEventListener("click", async () => {
    const text = installCmd.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    const lang = document.documentElement.lang === "en" ? "en" : "id";
    label().textContent = I18N[lang]["install.copied"];
    copyBtn.classList.add("done");
    setTimeout(() => {
      label().textContent = I18N[lang]["install.copy"];
      copyBtn.classList.remove("done");
    }, 1800);
  });
}

// Screenshot unpkg gagal dimuat → sembunyikan figure-nya saja
document.querySelectorAll("figure img").forEach((img) => {
  img.addEventListener("error", () => {
    const fig = img.closest("figure") || img.parentElement;
    if (fig) fig.style.display = "none";
  });
});

// --- Init bahasa ---
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.langBtn));
  });

  let saved = null;
  try { saved = localStorage.getItem("nxdom-lang"); } catch {}
  if (saved) {
    setLang(saved);
  } else {
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    setLang(browserLang === "id" ? "id" : "en");
  }
});
