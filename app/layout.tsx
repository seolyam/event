import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/page";
import FooterPage from "./components/footer/page";

export const metadata: Metadata = {
  title: "GDGOC Events",
  description:
    "Google Developer Groups on Campus - Empowering developers through events and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen bg-white text-gray-900">
        <Navbar />

        {children}
        <FooterPage />
      </body>
    </html>
  );
}
