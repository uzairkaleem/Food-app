"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left - Logo */}
        <Link href="/" className="text-2xl font-bold">
          MyLogo
        </Link>

        {/* Right - Nav Links */}
        <nav className="flex gap-6">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
          <Link href="/info" className="hover:text-gray-300 transition">
            Info
          </Link>
        </nav>

      </div>
    </header>
  );
}
