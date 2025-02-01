import { z } from "zod";

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
