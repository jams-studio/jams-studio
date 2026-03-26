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
    <footer className="relative z-[1] border-t border-white/6 pt-10 pb-8 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <Link href="#hero">
            <Image
              src="/images/JAMS-04-weiss.svg"
              alt="JAMS Studio"
              width={100}
              height={30}
              style={{ height: "auto" }}
            />
          </Link>

          <nav className="flex flex-wrap gap-6">
            {[
              { name: "Services", href: "#services" },
              { name: "Process", href: "#process" },
              { name: "Stack", href: "#tech" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-amber transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-sm text-text-muted">
            © {year ?? "2025"} JAMS Studio — Paderborn, Germany
          </span>
          <div className="flex gap-5">
            <Link
              href="mailto:info@jams-studio.de"
              className="text-sm text-text-muted hover:text-amber transition-colors"
            >
              info@jams-studio.de
            </Link>
            <span className="text-border">|</span>
            <Link
              href="/impressum"
              className="text-sm text-text-muted hover:text-amber transition-colors"
            >
              Impressum
            </Link>
            <span className="text-border">|</span>
            <Link
              href="/datenschutz"
              className="text-sm text-text-muted hover:text-amber transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
