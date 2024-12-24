import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed left-0 right-0 z-40 m-auto mt-10 flex max-w-screen-2xl justify-between px-7 text-black md:px-14 lg:items-center">
      <div className="text-3xl font-bold">
        <Link href="/">
          <span className="text-blue-600">G</span>
          <span className="text-red-500">D</span>
          <span className="text-yellow-500">G</span>
          <span className="text-blue-600">O</span>
          <span className="text-green-500">C</span>
        </Link>
      </div>
      <div className="flex space-x-14 text-lg">
        <Link href="/events" className="hover:underline">
          Events
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
