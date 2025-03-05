"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-40 w-full transition-all duration-300 py-4 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between py-6 px-10 md:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-14 text-lg md:text-xl">
          <Link
            href="/events"
            className={`relative pb-2 transition-colors hover:text-blue-600 ${
              pathname === "/events"
                ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-600"
                : "text-gray-800"
            }`}
          >
            Events
          </Link>
          <Link
            href="/projects"
            className={`relative pb-2 transition-colors hover:text-blue-600 ${
              pathname === "/projects"
                ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-600"
                : "text-gray-800"
            }`}
          >
            Projects
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex flex-col items-start space-y-4 p-4"
            >
              <Link
                href="/events"
                className="text-lg hover:text-blue-600 font-medium"
              >
                Events
              </Link>
              <Link
                href="/projects"
                className="text-lg hover:text-blue-600 font-medium"
              >
                Projects
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
