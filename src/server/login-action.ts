"use server";

import { cookies } from "next/headers";

import { loginSchema } from "@/schemas/login-schemas";

import { ResponseLogin } from "@/types/login-types";

export const LoginCredentials = async (previousState: unknown, formData: FormData): Promise<ResponseLogin> => {
  const rawData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  if (typeof rawData.email !== "string" || typeof rawData.password !== "string") {
    return {
      message: "Invalid input",
      code: 422,
      status: false,
      previousState: rawData,
    };
  }

  const validation = loginSchema.safeParse(rawData);
  if (!validation.success) {
    return {
      errors: validation.error.errors.map((err) => err.message),
      message: validation.error.errors.map((err) => err.message).join(", "),
      code: 422,
      status: false,
      previousState: rawData,
    };
  }

  try {
    const response = await fetch(`${process.env.API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        email: rawData.email,
        password: rawData.password,
       }),
    });

    const fetchLogin = (await response.json()) as ResponseLogin;
    if (fetchLogin.status === false) {
      return {
        message: fetchLogin.message,
        code: fetchLogin.code,
        status: false,
        previousState: rawData,
      };
    }

    (await cookies()).set("authToken", JSON.stringify(fetchLogin.dataProfile), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return fetchLogin;
  } catch (error) {
    return {
      message: `Terjadi kesalahan saat login: ${error instanceof Error ? error.message : "Unknown error"}`,
      code: 500,
      status: false,
    };
  }
};

export async function LoginWithGoogle() {
  console.log("Login with Google");
}

export async function LoginWithX() {
  console.log("Login with Twitter");
}

export async function LoginWithFacebook() {
  console.log("Login with Facebook");
}
