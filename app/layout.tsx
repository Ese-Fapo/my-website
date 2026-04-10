import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const siteUrl = "https://sitesprofissionai.com";
const siteTitle = "Sites ProfissionAI | Criação de Sites em Santa Catarina";
const siteDescription =
  "Criação de sites profissionais em Santa Catarina para empresas de Florianópolis, São José, Joinville e Balneário Camboriú, com SEO local, Google Business Profile e integração com Google Maps.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Sites ProfissionAI",
  },
  description: siteDescription,
  applicationName: "Sites ProfissionAI",
  alternates: {
    canonical: "/",
  },
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Sites ProfissionAI",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images.web/logo.png",
        width: 512,
        height: 512,
        alt: "Sites ProfissionAI logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images.web/logo.png"],
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
