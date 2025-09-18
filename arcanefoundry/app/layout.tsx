import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/seo/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arcane Foundry LLC - Senior Full-Stack Developer | Floyd, Virginia",
  description:
    "Senior full-stack developer based in Floyd, Virginia, serving Roanoke, Blacksburg, Christiansburg and surrounding areas. Specializing in Power Platform development, performance optimization, and custom software solutions. Local expertise, remote capabilities.",
  keywords: [
    "full-stack developer",
    "Power Platform development",
    "software development",
    "Floyd Virginia",
    "Roanoke Valley",
    "Blacksburg",
    "Christiansburg",
    "custom software",
    "performance optimization",
    "SQL optimization",
    "freelance developer",
    "remote development"
  ],
  authors: [{ name: "Josh Wassum" }],
  creator: "Josh Wassum",
  publisher: "Arcane Foundry LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://arcane-foundry.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arcane-foundry.com',
    title: 'Arcane Foundry LLC - Senior Full-Stack Developer',
    description: 'Senior full-stack developer based in Floyd, Virginia, serving the greater Roanoke Valley region with local expertise and remote capabilities.',
    siteName: 'Arcane Foundry LLC',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Arcane Foundry LLC - Senior Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arcane Foundry LLC - Senior Full-Stack Developer',
    description: 'Senior full-stack developer based in Floyd, Virginia, serving the greater Roanoke Valley region.',
    images: ['/og-image.jpg'],
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
    google: 'your-google-verification-code', // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=2" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ef4444" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Arcane Foundry" />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} antialiased`}
      >
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
