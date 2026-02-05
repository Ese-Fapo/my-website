import React from "react";
import type { Metadata } from "next";
import { Rubik, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "web agency | Next.js + Tailwind CSS",
  description: "A modern web agency website built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-BR" suppressHydrationWarning={true}>
      <body
        className={`${rubik.className} ${geistMono.className} antialiased`}
      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
  );
}
