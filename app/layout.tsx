import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";




export const metadata: Metadata = {
  title: {
    default: "Sites ProfissionAI | Criação de Sites em Santa Catarina",
    template: "%s | Sites ProfissionAI",
  },
  description: "Criação de sites profissionais em Santa Catarina para empresas de Florianópolis, São José, Joinville e Balneário Camboriú, com SEO local, Google Business Profile e integração com Google Maps.",
  applicationName: "Sites ProfissionAI",
  keywords: [
    "criação de sites em santa catarina",
    "site profissional em florianópolis",
    "criação de sites em são josé sc",
    "desenvolvimento de sites em joinville",
    "criação de sites em balneário camboriú",
    "seo local santa catarina",
    "google business profile",
    "google maps integração",
    "agência de sites santa catarina",
    "sites para empresas sc",
  ],
  openGraph: {
    title: "Sites ProfissionAI | Criação de Sites em Santa Catarina",
    description: "Criação de sites profissionais em Santa Catarina para empresas de Florianópolis, São José, Joinville e Balneário Camboriú, com SEO local, Google Business Profile e integração com Google Maps.",
    locale: "pt_BR",
    type: "website",
  },
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
