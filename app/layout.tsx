import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const siteUrl = "https://sitesprofissionai.com";
const siteTitle = "Sites ProfissionAI | Criação de Sites em Santa Catarina";
const siteDescription =
  "Criação de sites profissionais em Santa Catarina para empresas de Florianópolis, São José, Joinville e Balneário Camboriú. Se você busca um profissional que faz site com foco em SEO local, Google Business Profile e integração com Google Maps, nós podemos ajudar.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Sites ProfissionAI",
  },
  description: siteDescription,
  applicationName: "Sites ProfissionAI",
  verification: {
    google: "googlea7763214ff9959e3",
  },
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
    "profissional que faz site",
    "profissional que faz site em santa catarina",
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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KBGNRDK6');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KBGNRDK6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
