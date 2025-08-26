"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

import Logo from "../../public/TransparentLogo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/termsofservice", label: "Terms of Service" },
    { href: "/privacyPolicy", label: "Privacy Policy" },
  ];

  return (
    <header className="bg-zinc-900 text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Site Logo"
            className="w-12 h-12 object-contain"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors duration-300 ${pathname === link.href
                  ? "text-cyan-500 font-semibold"
                  : "hover:text-cyan-400"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-zinc-800 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-40" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col gap-4 px-6 pb-4 bg-zinc-900">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)} // close on click
                className={`block transition-colors duration-300 ${pathname === link.href
                  ? "text-cyan-500 font-semibold"
                  : "hover:text-cyan-400"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
