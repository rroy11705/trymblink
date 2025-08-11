import type { Metadata } from "next";
import Header from "@/components/layout/Header";

import "./styles/globals.css"

export const metadata: Metadata = {
  title: {
    default: "Trymblink - Digital Product Development & Consulting",
    template: "%s | Trymblink"
  },
  description: "Leading digital product development and consulting company specializing in innovative solutions, web development, mobile apps, and digital transformation for businesses worldwide.",
  keywords: [
    "digital product development",
    "consulting",
    "web development", 
    "mobile app development",
    "digital transformation",
    "software development",
    "product design",
    "technology consulting",
    "startup solutions",
    "enterprise software"
  ],
  authors: [{ name: "Trymblink", url: "https://trymblink.com" }],
  creator: "Trymblink",
  publisher: "Trymblink",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trymblink.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Trymblink - Digital Product Development & Consulting",
    description: "Leading digital product development and consulting company specializing in innovative solutions, web development, mobile apps, and digital transformation for businesses worldwide.",
    url: 'https://trymblink.com',
    siteName: 'Trymblink',
    images: [
      {
        url: '/images/logos/trymblink.webp',
        width: 1200,
        height: 630,
        alt: 'Trymblink - Digital Product Development & Consulting',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Trymblink - Digital Product Development & Consulting",
    description: "Leading digital product development and consulting company specializing in innovative solutions, web development, mobile apps, and digital transformation for businesses worldwide.",
    images: ['/images/logos/trymblink.webp'],
    creator: '@trymblink',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
