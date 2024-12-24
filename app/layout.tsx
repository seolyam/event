import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "GDGOC Events",
  description:
    "Google Developer Groups on Campus - Empowering developers through events and projects",
};

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-sans min-h-screen bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
