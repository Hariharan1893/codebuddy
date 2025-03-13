"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/sitelogo.png" alt="Code-Buddy Logo" width={40} height={40} />
            <span className="text-2xl font-bold text-sky-600">Code-Buddy</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-sky-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-sky-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-sky-600 font-medium">
              Contact
            </Link>
            <Link href="/chat" className="text-gray-700 hover:text-sky-600 font-medium">
              Chat
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Smooth Slide-in Animation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-500 ease-in-out 
        ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <div className="flex flex-col space-y-4 p-6">
          {/* Close Button */}
          <button
            className="self-end text-gray-700"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FiX size={28} />
          </button>

          {/* Menu Links */}
          <Link
            href="/"
            className="text-gray-700 hover:bg-sky-100 py-2 px-4 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:bg-sky-100 py-2 px-4 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:bg-sky-100 py-2 px-4 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/chat"
            className="text-gray-700 hover:bg-sky-100 py-2 px-4 rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            Chat
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
