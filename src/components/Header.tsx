"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Stack", href: "#tech" },
  ];

  const isScrolled = mounted && scrolled;

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "nav-scrolled py-3"
            : "py-5"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Link href="#hero" className="flex items-center gap-3">
            <Image
              src="/images/JAMS-04-weiss.svg"
              alt="JAMS Studio"
              width={120}
              height={40}
              priority
              className="transition-all duration-500"
              style={{
                width: isScrolled ? 100 : 120,
                height: "auto",
              }}
            />
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
            <Link href="#contact" className="nav-cta">
              Let&apos;s Talk →
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl"
            style={{ color: "var(--color-text-primary)" }}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu — only rendered after mount to avoid hydration issues */}
      {mounted && (
        <div
          className={`fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8 transition-opacity duration-300 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{
            background: "rgba(7, 7, 13, 0.97)",
            backdropFilter: "blur(30px)",
          }}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-3xl"
            style={{ color: "var(--color-text-primary)" }}
          >
            ✕
          </button>
          {[...navItems, { name: "Contact", href: "#contact" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-3xl font-bold"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-text-primary)",
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}