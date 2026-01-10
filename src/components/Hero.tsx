"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="w-full bg-[#FFF8E1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 pt-60 flex flex-col md:flex-row items-center justify-between">
        {/* Text */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-black leading-tight">Build Sleek Apps & Websites</h1>
          <p className="mt-6 text-xl md:text-2xl text-[#334155] font-sans max-w-xl">
            JAMS Studio helps small businesses and clubs launch cross-platform apps and professional websites with stunning modern design.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-6">
            <motion.div whileHover={{ y: -2, scale: 1.05 }}>
              <Link href="#contact" className="btn bg-gradient-to-r from-[#F59E0B] to-[#FBC94D] text-white">Get Started</Link>
            </motion.div>
            <motion.div whileHover={{ y: -2, scale: 1.05 }}>
              <Link href="#portfolio" className="btn bg-black text-white">See Portfolio</Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <Image src="/images/default.jpg" alt="Hero illustration" width={320} height={320} className="rounded-3xl shadow-xl animate-float object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
