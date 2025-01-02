import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/page";
import FooterPage from "./components/footer/page";
import Head from "next/head";

export const metadata: Metadata = {
  title: "GDGOC Events",
  description:
    "Google Developer Groups on Campus - Empowering developers through events and projects",
  metadataBase: new URL("https://gdgoc-event.vercel.app"),
  openGraph: {
    title: "GDGOC Events",
    description:
      "Google Developer Groups on Campus - Empowering developers through events and projects",
    url: "https://gdgoc-event.vercel.app",
    siteName: "GDGOC Events",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GDGOC Events Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GDGOC Events",
    description:
      "Google Developer Groups on Campus - Empowering developers through events and projects",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="font-sans min-h-screen bg-white text-gray-900">
        <Navbar />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
