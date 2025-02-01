import type { Metadata } from "next";

import "@/css/globals.css";

import { SidebarContextProvider } from "@/context/sidebar-context";

import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased max-h-screen`}>
        <SidebarContextProvider>
          <ToastContainer />
          {children}
        </SidebarContextProvider>
      </body>
    </html>
  );
}
