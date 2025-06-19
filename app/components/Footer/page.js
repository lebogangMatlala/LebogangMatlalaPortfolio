"use client";

import Link from "next/link";

export default function Footer() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "../../pages/about" },
    { name: "Projects", href: "../../pages/projects" },
    { name: "Contact", href: "../../pages/contact" },
  ];

  return (
    <footer className="bg-primary text-white py-6 shadow-inner mt-12">
      <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Lebogang Matlala. All rights reserved.</p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          {navItems.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-accent transition-colors"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
