import { Metadata } from "next";

// Componnents
import { SocialLoginButtons } from "@/components/molecules/social-media-login";
import { LoginForm } from "./login-form";
import { ToastContainer } from "react-toastify";

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <ToastContainer />
      <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
        <div className="hidden md:block w-1/2 bg-contain bg-center bg-no-repeat h-full bg-login-illustration"></div>
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-semibold text-center">Login Sistem</h2>
          <LoginForm />
          <div className="mt-4 text-center">
            <p className="text-gray-600">Sign in with</p>
            <SocialLoginButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};
