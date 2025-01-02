"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed left-0 right-0 z-40 m-auto mt-10 flex max-w-screen-2xl justify-between px-7 text-black md:px-14 lg:items-center">
      {/* Logo */}
      <div className="text-3xl font-bold">
        <Link href="/">
          <span className="text-blue-600">G</span>
          <span className="text-red-500">D</span>
          <span className="text-yellow-500">G</span>
          <span className="text-blue-600">O</span>
          <span className="text-green-500">C</span>
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-14 text-lg">
        <Link href="/events" className="hover:underline">
          Events
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="p-2">
              {/* Hamburger Icon */}
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
            <Link href="/events" className="text-lg hover:underline">
              Events
            </Link>
            <Link href="/projects" className="text-lg hover:underline">
              Projects
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
