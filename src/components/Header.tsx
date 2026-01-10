"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#features" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-md py-2 shadow" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">

        <Link href="#hero">
          <Image
            src="/images/JAMS-04.svg"
            alt="JAMS Studio"
            width={scrolled ? 110 : 150}
            height={scrolled ? 38 : 50}
            className="transition-all duration-500"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className="hover:text-yellow-500 transition">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white/95 backdrop-blur-md flex flex-col items-center gap-6 py-8">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-lg">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
