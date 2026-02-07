"use client";
import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    for (let i = 0; i < 25; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDuration = `${8 + Math.random() * 15}s`;
      p.style.animationDelay = `${Math.random() * 10}s`;
      const size = `${1 + Math.random() * 2}px`;
      p.style.width = size;
      p.style.height = size;
      container.appendChild(p);
    }
  }, []);

  return (
    <>
      <div className="grid-bg" />
      <div className="particles" ref={particlesRef} />
    </>
  );
}
