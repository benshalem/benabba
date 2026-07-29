import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Transform Your Photos into Unforgettable Cinematic Motion",
  description: "Official site of Ben Abba",
  openGraph: {
    title: "Transform Your Photos into Unforgettable Cinematic Motion",
    description: "Official site of Ben Abba",
    url: "https://benabba.com/",
    siteName: "Ben Abba",
    images: [
      {
        url: "URL_DA_IMAGEM_DE_CAPA_DO_SEU_VIDEO.jpg", // Substitua pelo link direto da imagem
        width: 1200,
        height: 630,
        alt: "Transform Your Photos into Unforgettable Cinematic Motion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>        
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}