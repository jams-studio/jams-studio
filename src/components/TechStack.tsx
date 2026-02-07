"use client";
import { motion } from "framer-motion";

const techs = [
  "React",
  "Next.js",
  "TypeScript",
  "SwiftUI",
  "Node.js",
  "Tailwind CSS",
  "Vercel",
  "Azure",
  "Firebase",
  "Figma",
];

export default function TechStack() {
  return (
    <section id="tech" className="relative z-[1] py-28 px-4 sm:px-6">
      <div className="text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          {"// our toolkit"}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Tech We Love
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-desc"
        >
          We pick the right tools for each project — here&apos;s what we work
          with most.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="max-w-[1200px] mx-auto flex justify-center flex-wrap gap-3"
      >
        {techs.map((tech) => (
          <div key={tech} className="tech-pill">
            <span className="w-2 h-2 rounded-full bg-[var(--color-amber)] opacity-50" />
            {tech}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
