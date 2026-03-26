"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const codeLines = [
  '<span class="code-comment">// jams-studio.ts</span>',
  '<span class="code-keyword">const</span> <span class="code-func">studio</span> <span class="code-bracket">=</span> <span class="code-bracket">{</span>',
  '  name<span class="code-bracket">:</span> <span class="code-string">"JAMS Studio"</span><span class="code-bracket">,</span>',
  '  team<span class="code-bracket">:</span> <span class="code-string">"2 developers"</span><span class="code-bracket">,</span>',
  '  stack<span class="code-bracket">:</span> <span class="code-bracket">[</span><span class="code-string">"React"</span><span class="code-bracket">,</span> <span class="code-string">"Swift"</span><span class="code-bracket">,</span> <span class="code-string">"Node"</span><span class="code-bracket">],</span>',
  '  motto<span class="code-bracket">:</span> <span class="code-string">"Ship fast. Ship clean."</span>',
  '<span class="code-bracket">}</span>',
  "",
  '<span class="code-keyword">export default</span> <span class="code-func">studio</span><span class="code-bracket">;</span>',
];

export default function Hero() {
  const codeRef = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState(false);

  useEffect(() => {
    if (typed || !codeRef.current) return;
    setTyped(true);

    let i = 0;
    const container = codeRef.current;

    function typeLine() {
      if (i >= codeLines.length || !container) return;
      const line = document.createElement("div");
      line.innerHTML = codeLines[i] || "&nbsp;";
      line.style.opacity = "0";
      line.style.transform = "translateX(-8px)";
      line.style.transition = "all 0.4s ease";
      container.appendChild(line);

      requestAnimationFrame(() => {
        line.style.opacity = "1";
        line.style.transform = "translateX(0)";
      });

      i++;
      if (i < codeLines.length) {
        setTimeout(typeLine, 180 + Math.random() * 120);
      } else {
        setTimeout(() => {
          const cursor = document.createElement("span");
          cursor.className = "typing-cursor";
          container.lastChild?.appendChild(cursor);
        }, 200);
      }
    }

    setTimeout(typeLine, 1200);
  }, [typed]);

  return (
    <section
      id="hero"
      className="relative z-[1] min-h-screen flex items-center px-4 sm:px-6 py-24 pt-32 md:pt-40 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Text */}
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-badge mb-6"
          >
            <span className="hero-badge-dot" />
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[clamp(2.8rem,5.5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            We build
            <br />
            <span className="bg-gradient-to-r from-[var(--color-amber)] to-[var(--color-amber-light)] bg-clip-text text-transparent">
              digital products
            </span>
            <br />
            that perform.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-[480px] mb-8 mx-auto md:mx-0"
          >
            JAMS Studio is a two-person dev studio based in Paderborn. We design
            and build modern websites, web apps, and cross-platform mobile apps
            for businesses and organizations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link href="#contact" className="btn-primary">
              Start a Project →
            </Link>
            <Link href="#services" className="btn-secondary">
              What We Do
            </Link>
          </motion.div>
        </div>

        {/* Code Window — hidden on small screens */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative hidden md:flex items-center justify-center"
        >
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="code-window">
            <div className="code-titlebar">
              <div className="code-dot code-dot-red" />
              <div className="code-dot code-dot-yellow" />
              <div className="code-dot code-dot-green" />
              <span
                className="ml-3 text-xs text-[var(--color-text-muted)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                project.ts
              </span>
            </div>
            <div className="code-body" ref={codeRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
