"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1F2937] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/images/JAMS-04-weiss.svg"
            alt="JAMS Studio Logo"
            width={140}
            height={40}
            className="mb-2"
          />
          <p className="text-gray-300 text-center md:text-left text-sm">
            Crafting sleek apps & websites for modern businesses.
          </p>
        </div>

        {/* Address & Email */}
        <div className="flex flex-col items-center md:items-end text-gray-300 text-sm text-center md:text-right">
          <p>JAMS Studio GmbH</p>
          <p>Paderborn, Germany</p>
          <Link href="mailto:info@jams-studio.de" className="hover:text-yellow-400 transition-colors mt-1">
            info@jams-studio.de
          </Link>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-6 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} JAMS Studio GmbH. All rights reserved.
      </div>
    </footer>
  );
}
