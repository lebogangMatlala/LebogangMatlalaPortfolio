"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "../../about" },
    { name: "Projects", href: "../../projects" },
    { name: "Resume", href: "../../resume" },
    { name: "Contact", href: "../../contact" },
  ];

  return (
    <nav className="bg-primary text-white py-4 shadow-md">
      <div className="container mx-auto px-20">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl text-accent">Lebogang Matlala</h1>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                className={`hover:text-accent transition-colors ${
                  pathname === href ? "text-accent font-semibold underline" : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile menu dropdown inside container */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-3">
            {navItems.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block hover:text-accent transition-colors ${
                  pathname === href ? "text-accent font-semibold underline" : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
