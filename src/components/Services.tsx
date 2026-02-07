"use client";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🌐",
    title: "Websites & Landing Pages",
    desc: "Fast, responsive, SEO-optimized websites built with modern frameworks. Perfect for small businesses looking to establish a professional online presence.",
    tags: ["Next.js", "React", "Responsive", "SEO"],
  },
  {
    icon: "📱",
    title: "Cross-Platform Apps",
    desc: "Native-quality mobile apps for iOS and Android from a single codebase. From utility apps to interactive experiences — designed for engagement.",
    tags: ["iOS", "Android", "SwiftUI", "React Native"],
  },
  {
    icon: "⚡",
    title: "Web Applications",
    desc: "Custom web apps with real-time features, dashboards, admin panels, and integrations. Built to scale with your organization's needs.",
    tags: ["Full-Stack", "APIs", "Databases", "Cloud"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative z-[1] py-28 px-4 sm:px-6">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          {"// what we do"}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-desc"
        >
          From concept to launch — we handle the full stack so you can focus on
          your business.
        </motion.p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="service-card"
          >
            <div className="service-icon">{s.icon}</div>
            <h3
              className="text-xl font-bold mb-2 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {s.title}
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
              {s.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <span key={tag} className="service-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
