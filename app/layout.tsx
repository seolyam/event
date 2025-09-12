import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/page";
import FooterPage from "./components/footer/page";
import { ThemeProvider } from "@/components/ui/theme-provider";

const description =
  "Google Developer Groups on Campus - Empowering developers through events and projects";
const imgUrl = "/images/og-image.jpg";

export const metadata: Metadata = {
  title: "GDGOC Events",
  description,
  metadataBase: new URL("https://gdgoc-event.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://gdgoc-event.vercel.app",
    title: "GDGOC Events",
    description,
    siteName: "GDGOC Events",
    images: [
      {
        url: imgUrl,
        width: 1200,
        height: 630,
        alt: "GDGOC Events Landing Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GDGOC Events",
    description,
    images: [imgUrl],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <FooterPage />
        </ThemeProvider>
      </body>
    </html>
  );
}
