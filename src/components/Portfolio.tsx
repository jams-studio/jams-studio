"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { title: "Club App", img: "/images/default.jpg" },
  { title: "Tournament App", img: "/images/default.jpg" },
  { title: "Small Biz Website", img: "/images/default.jpg" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-24 bg-[#FFF8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-heading font-bold text-black text-center">Portfolio</h2>
        <p className="mt-4 text-lg text-[#334155] text-center max-w-2xl mx-auto">Some of our recent work.</p>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.2 }} className="card cursor-pointer overflow-hidden">
              <Image src={project.img} alt={project.title} width={400} height={240} className="w-full h-60 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-heading font-bold text-black">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
