# 🚀 Panduan Duplikasi & Deployment VPS (Super Ringan)

Website landing page ini telah dioptimalisasi secara mendalam:
- **Konversi Seluruh Gambar**: Format `.png` & `.jpg` telah diubah menjadi format modern `.webp` (hemat hingga ~90% ukuran file tanpa menurunkan kualitas visual).
- **Kompresi Video**: Video disesuaikan bitrate dan codec-nya agar buffering sangat cepat di perangkat seluler.
- **Lazy Loading**: Ditambahkan otomatis di HTML (`loading="lazy" decoding="async"`).
- **Performa Nginx & Docker**: Konfigurasi server Nginx dilengkapi kompresi Gzip dan Caching statis 1 tahun untuk kecepatan loading mendekati instant.

---

## 📋 Cara 1: Deployment Menggunakan Docker (Direkomendasikan - 1 Menit)

Metode ini paling cepat untuk menduplikasi ke VPS baru (Ubuntu, Debian, CentOS, AlmaLinux, dll).

### Langkah-langkah:
1. **Upload / Clone** folder website ini ke VPS Anda.
2. Masuk ke direktori website di terminal VPS:
   ```bash
   cd /path/to/website
   ```
3. Jalankan script auto-deploy:
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```
   *atau gunakan Docker Compose langsung:*
   ```bash
   docker compose up -d --build
   ```

Website langsung aktif di port 80 HTTP VPS Anda!

---

## 📋 Cara 2: Deployment Manual Menggunakan Nginx (Tanpa Docker)

Jika VPS Anda sudah menggunakan Nginx biasa (misalnya AAPanel, cPanel, Nginx Standalone, Caddy):

1. Upload seluruh file website ke direktori web root VPS (misalnya `/var/www/html/` atau `/www/wwwroot/domainanda.com/`).
2. Pasang konfigurasi dari file `nginx.conf` ke file konfigurasi Nginx situs Anda di VPS.
3. Reload Nginx:
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

---

## ⚡ Cara Mengduplikasi ke Banyak VPS / Subdomain Baru

Untuk menduplikasi ke VPS / domain / subdomain baru:
1. Copy folder website ini ke VPS tujuan.
2. Jalankan `./deploy.sh` atau `docker compose up -d`.
3. Selesai! Tidak ada dependencies rumit (No Node.js runtime needed, No heavy backend). Memory RAM yang digunakan hanya **~10-15 MB RAM**!
