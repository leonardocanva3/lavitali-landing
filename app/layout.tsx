import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://lavitali.com.br";
const title = "Lavitali Osteopatia e Pilates | Mariana Mendes em Florianópolis";
const description =
  "Lavitali Osteopatia e Pilates com Mariana Mendes em Florianópolis. Osteopatia, Pilates terapêutico e Laserterapia para adultos, gestantes e crianças.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Lavitali",
    "Lavitali Osteopatia e Pilates",
    "Mariana Mendes",
    "Osteopatia em Florianópolis",
    "Pilates em Florianópolis",
    "Osteopata em Florianópolis",
    "Pilates terapêutico em Florianópolis",
    "Laserterapia em Florianópolis",
    "Tratamento para dor lombar em Florianópolis",
    "Tratamento para dor cervical em Florianópolis",
  ],
  applicationName: "Lavitali Osteopatia e Pilates",
  authors: [{ name: "Mariana Mendes" }],
  creator: "Lavitali Osteopatia e Pilates",
  publisher: "Lavitali Osteopatia e Pilates",
  alternates: {
    canonical: "/",
  },
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
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Lavitali Osteopatia e Pilates",
    title,
    description,
    images: [
      {
        url: "/images/mariana-mendes-hero.jpeg",
        width: 1200,
        height: 1600,
        alt: "Mariana Mendes da Lavitali Osteopatia e Pilates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/mariana-mendes-hero.jpeg"],
  },
  category: "healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${manrope.variable} scroll-smooth antialiased`}>
      <body>{children}</body>
    </html>
  );
}
