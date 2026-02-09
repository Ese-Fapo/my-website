import React from "react";
import type { Metadata } from "next";
import { Roboto} from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import { ThemeToggler } from "@/components/Helper/ThemeToggler";


const roboto = Roboto({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});




export const metadata: Metadata = {
  title: "Website-agency",
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
        className={`${roboto.className} antialiased`}
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
