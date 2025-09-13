"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 10;
      setScrolled(isScrolled);

      if (currentScrollY <= 10) {
        setShowNavbar(true);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setShowNavbar(true);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-40 w-full transition-transform duration-300 py-4 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-background/90 backdrop-blur-sm shadow-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between py-4 px-10 md:px-40">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            quality={100}
            priority
            className="w-auto h-8 md:h-10"
            style={{ objectFit: "contain", maxWidth: "unset" }}
            unoptimized
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-14 text-lg md:text-xl transition-opacity duration-300">
          <Link
            href="/events"
            className={`relative pb-2 transition-colors hover:text-blue-600 ${
              pathname === "/events"
                ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-600"
                : "text-foreground"
            }`}
          >
            Events
          </Link>
          <Link
            href="/projects"
            className={`relative pb-2 transition-colors hover:text-blue-600 ${
              pathname === "/projects"
                ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-600"
                : "text-foreground"
            }`}
          >
            Projects
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className={`p-2 ${
                  !isMenuOpen ? "text-foreground" : "text-white"
                }`}
              >
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
                className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                  pathname === "/events" ? "text-blue-600" : "text-foreground"
                }`}
                onClick={handleMobileNavClick}
              >
                Events
              </Link>
              <Link
                href="/projects"
                className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                  pathname === "/projects" ? "text-blue-600" : "text-foreground"
                }`}
                onClick={handleMobileNavClick}
              >
                Projects
              </Link>
              <div className="pt-4 border-t w-full">
                <ThemeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
