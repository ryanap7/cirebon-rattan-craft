import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Rattan Furniture Export | Cirebon Craftsmanship | Indonesia",
  description:
    "Discover handcrafted Indonesian rattan furniture from Cirebon. Premium quality, sustainable materials, direct manufacturer pricing. Export worldwide with traditional craftsmanship meets modern design.",
  keywords:
    "rattan furniture export indonesia, cirebon rattan furniture manufacturer, handcrafted indonesian rattan, sustainable furniture wholesale, premium rattan dining sets",
  authors: [{ name: "Cirebon Rattan Exports" }],
  openGraph: {
    title: "Premium Rattan Furniture Export from Cirebon, Indonesia",
    description:
      "Handcrafted Indonesian rattan furniture with traditional craftsmanship and modern design. Direct manufacturer pricing for international buyers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Rattan Furniture Export | Cirebon Indonesia",
    description:
      "Discover handcrafted Indonesian rattan furniture with traditional craftsmanship and modern design.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* SEO & Canonical */}
        <link rel="canonical" href="https://cirebonrattan.com" />

        {/* Preconnect ke Pexels (image CDN) */}
        <link
          rel="preconnect"
          href="https://images.pexels.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://images.pexels.com" />

        {/* Preconnect ke Google Fonts (sudah digunakan oleh next/font) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        <link
          rel="preload"
          as="image"
          href="https://images.pexels.com/photos/6969835/pexels-photo-6969835.jpeg?w=1920&auto=compress&cs=tinysrgb&fm=webp"
        />

        <StructuredData type="organization" data={{}} />
      </head>
      <body
        className={`${inter.className} bg-cream-50 text-wood-900 antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
