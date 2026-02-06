import React from "react";
import type { Metadata } from "next";
import { Rubik,  } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import { ThemeToggler } from "@/components/Helper/ThemeToggler";


const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
        className={`${rubik.className} antialiased`}
      >
        <Provider>
          
          <ResponsiveNav />
        {children}
        <ThemeToggler />
        </Provider>
      </body>
    </html>
  );
}
