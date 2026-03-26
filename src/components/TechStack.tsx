"use client";
import { motion } from "framer-motion";

const categories = [
  {
    label: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Mobile",
    techs: ["SwiftUI", "React Native", "Expo"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "REST APIs", "Firebase"],
  },
  {
    label: "Cloud & Tools",
    techs: ["Vercel", "Azure", "Figma", "Git"],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="relative z-1 py-28 px-4 sm:px-6">
      <div className="text-center mb-16">
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

      <div className="max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="tech-category-card"
          >
            <span className="tech-category-label">{cat.label}</span>
            <div className="flex flex-wrap gap-2 mt-3">
              {cat.techs.map((tech) => (
                <div key={tech} className="tech-pill">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber opacity-60" />
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
