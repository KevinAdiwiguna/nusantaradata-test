
# 📌 Panduan Instalasi Website


## Build
Build: [Nusantara Data Test](https://nusantaradata-test.vercel.app/login)
Source Code: [Repository](https://github.com/KevinAdiwiguna/nusantaradata-test)

---

## 📋 Prasyarat
Sebelum memulai instalasi, pastikan Anda telah menginstal perangkat lunak berikut:

- [Node.js](https://nodejs.org/) (Minimal versi 22)
- [Git](https://git-scm.com/)
- [bun](https://bun.sh/docs/installation) atau [Yarn](https://yarnpkg.com/)

## 📥 Clone Repository
```sh
git clone https://github.com/KevinAdiwiguna/nusantaradata-test.git
cd nusantaradata-test
```

## 📦 Instalasi Dependensi
Gunakan salah satu package manager berikut:
```sh
# Menggunakan NPM
npm install

# Menggunakan Yarn
yarn install

# Menggunakan Bun
bun install (recommended)
```

## ⚙️ Konfigurasi Environment
Buat file `.env` berdasarkan `.env.example` dan masukan URL Backend
```sh
API_URL=http://***.***.***.***:****
```

## 🚀 Menjalankan Aplikasi Secara Lokal
```sh
bun dev || yarn dev || npm run dev 
```
Aplikasi akan berjalan di `http://localhost:3000/` secara default.

## 📦 Build untuk Produksi
```sh
bun run build || npm run build || yarn run build
bun start || npm start || yarn start
```

## ✅ Konfigurasi Teknologi
- Menggunakan **Next.js** sebagai framework utama.
- **Material UI** digunakan untuk chart.
- **Tailwind CSS** digunakan untuk styling lainnya.
- **React Context** digunakan untuk manajemen state sidebar.
- **Zod** digunakan untuk validasi form login.
- **httpOnly Cookie** digunakan untuk menyimpan login user.

## 🛠️ Validasi Form
Menggunakan Zod dengan skema berikut:
```js
export const loginSchema = z.object({
  email: z
    .string()
    .min(5, "Email harus memiliki minimal 5 karakter")
    .max(255, "Email terlalu panjang")
    .email("Format Email tidak valid"),
  password: z
    .string()
    .min(8, "Password harus memiliki minimal 8 karakter")
    .max(100, "Password terlalu panjang")
    .regex(/[A-Z]/, "Password harus mengandung setidaknya satu huruf kapital")
    .regex(/[a-z]/, "Password harus mengandung setidaknya satu huruf kecil")
    .regex(/[0-9]/, "Password harus mengandung setidaknya satu angka")
    .regex(/[^A-Za-z0-9]/, "Password harus mengandung setidaknya satu karakter spesial"),
});
```

## 📊 Visualisasi Data
- **Menggunakan Material UI** untuk chart.
- **Jenis chart** yang digunakan: Pie, Line, dan Bar.
- **Data statis** dibuat sendiri dan ditaruh di file constant.
---
## ❓ Alasan Pemilihan Metode Visualisasi
Material UI Charts dipilih karena:
1. **Integrasi yang Mudah** – Mudah digunakan dalam ekosistem Next.js.
2. **Fitur Interaktif** – Mendukung hover details untuk memberikan informasi tambahan kepada pengguna.
---

🚀 **KevinAdiwiguna**
