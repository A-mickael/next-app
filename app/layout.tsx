import type { Metadata } from "next";
import { ThemeProvider } from "@/src/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starter Next.js - Site Vitrine",
  description:
    "Base de projet vitrine rapide avec Next.js, Tailwind et shadcn/ui.",
  keywords: ["Next.js", "Starter", "Vitrine", "Tailwind", "shadcn/ui"],
  authors: [{ name: "Mika", url: "https://github.com/A-mickael" }],
  creator: "Mika",
  metadataBase: new URL("https://tonsite.com"), // remplace plus tard par ton vrai domaine
  openGraph: {
    title: "Starter Next.js - Site Vitrine",
    description:
      "Base de projet vitrine rapide avec Next.js, Tailwind et shadcn/ui.",
    url: "https://tonsite.com",
    siteName: "Starter Vitrine",
    images: [
      {
        url: "/og-image.jpg", // ajoute ce fichier plus tard dans /public
        width: 1200,
        height: 630,
        alt: "Aperçu du site",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Starter Next.js - Site Vitrine",
    description:
      "Base de projet vitrine rapide avec Next.js, Tailwind et shadcn/ui.",
    creator: "@tonpseudo", // remplace si tu as un compte Twitter
    images: ["/og-image.jpg"],
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} font-sans ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
