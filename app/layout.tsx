import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";




export const metadata: Metadata = {
  title: "Sites Profissionais | Professional Websites | Sitios Profesionales",
  description: "Somos uma agência web que cria sites incríveis para nossos clientes. Desenvolvemos sites personalizados, adaptados às necessidades e objetivos de cada cliente. Nossa equipe de designers e desenvolvedores trabalha de perto com os clientes para entregar sites bonitos, funcionais e fáceis de usar.",
  icons: {
    icon: "/images.web/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <Provider>
          <ResponsiveNav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
