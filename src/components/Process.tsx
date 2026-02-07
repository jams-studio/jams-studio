"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discover", desc: "We learn your goals, audience, and constraints to define the right scope." },
  { num: "02", title: "Design", desc: "Wireframes and mockups that nail the look and feel before any code is written." },
  { num: "03", title: "Develop", desc: "Clean, tested code with regular demos so you see progress in real time." },
  { num: "04", title: "Launch", desc: "Deployment, optimization, and handoff — plus ongoing support if you need it." },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative z-[1] py-28 px-4 sm:px-6"
      style={{ background: "rgba(255,255,255,0.01)" }}
    >
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          {"// how we work"}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Our Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-desc"
        >
          Lean, efficient, and transparent. You&apos;ll know exactly where your
          project stands at every step.
        </motion.p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative">
        {/* Connecting line (desktop) */}
        <div className="process-line hidden md:block" />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="process-step text-center"
          >
            <div className="process-num">{step.num}</div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {step.title}
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
