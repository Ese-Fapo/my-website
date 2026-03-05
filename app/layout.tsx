import React from "react";
import type { Metadata } from "next";
import { Roboto} from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";



const roboto = Roboto({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});




export const metadata: Metadata = {
  title: "Website-agency",
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
    <html lang="PT-BR" suppressHydrationWarning={true}>
      <body
        className={`${roboto.className} antialiased`}
      >
        <Provider>
          
          <ResponsiveNav />
        {children}
    
        </Provider>
      </body>
    </html>
  );
}
