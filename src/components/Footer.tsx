"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative z-[1] border-t border-white/[0.06] py-8 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/images/JAMS-04-weiss.svg"
            alt="JAMS Studio"
            width={100}
            height={30}
          />
          <div className="w-px h-5 bg-white/[0.06]" />
          <span className="text-sm text-[var(--color-text-muted)]">
            © {year ?? "2025"} JAMS Studio GmbH
          </span>
        </div>

        <div className="flex gap-6">
          {[
            { name: "Services", href: "#services" },
            { name: "Process", href: "#process" },
            { name: "Contact", href: "#contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-amber)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
