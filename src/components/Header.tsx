"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/80 shadow-md py-2"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="#hero" className="transition-all duration-500">
          <Image
            src="/images/JAMS-04.svg"
            alt="JAMS Studio Logo"
            width={scrolled ? 120 : 150} // shrink logo when scrolled
            height={scrolled ? 40 : 50} // adjust height proportionally
            className="transition-all duration-500"
          />
        </Link>
        <nav className="flex gap-8 font-sans font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-black hover:text-[var(--color-yellow)] transition-colors"
            >
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--color-yellow)] transition-all group-hover:w-full"></span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
