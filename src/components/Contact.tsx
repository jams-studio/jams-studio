"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setState("success");
        formRef.current?.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setState("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative z-[1] py-28 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(180deg, var(--color-bg-deep), rgba(245,166,35,0.03))",
      }}
    >
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          {"// get in touch"}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          Let&apos;s Build Something
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-desc"
        >
          Have a project in mind? Drop us a message and we&apos;ll get back to
          you within 24 hours.
        </motion.p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-2xl font-extrabold mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to start?
          </h3>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
            Whether you need a website for your business, an app for your
            community, or a custom digital solution — we&apos;d love to hear
            about it.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="contact-detail-icon">📧</div>
              <div>
                <span
                  className="block text-xs text-[var(--color-text-muted)] mb-0.5"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  EMAIL
                </span>
                <Link
                  href="mailto:info@jams-studio.de"
                  className="text-[var(--color-text-primary)] hover:text-[var(--color-amber)] transition-colors text-sm"
                >
                  info@jams-studio.de
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="contact-detail-icon">📍</div>
              <div>
                <span
                  className="block text-xs text-[var(--color-text-muted)] mb-0.5"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  LOCATION
                </span>
                <p className="text-[var(--color-text-primary)] text-sm">
                  Paderborn, Germany
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="contact-detail-icon">⚡</div>
              <div>
                <span
                  className="block text-xs text-[var(--color-text-muted)] mb-0.5"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  RESPONSE TIME
                </span>
                <p className="text-[var(--color-text-primary)] text-sm">
                  Within 24 hours
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="contact-form-card"
        >
          <AnimatePresence mode="wait">
            {state === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center py-12 gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-amber-glow border border-[rgba(245,166,35,0.3)] flex items-center justify-center text-3xl">
                  ✓
                </div>
                <h4
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Message sent!
                </h4>
                <p className="text-text-secondary text-sm max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="text-sm text-amber hover:underline mt-2"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                ref={formRef}
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="form-label">NAME</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      disabled={state === "loading"}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                      disabled={state === "loading"}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="form-label">PROJECT TYPE</label>
                  <select
                    name="project_type"
                    className="form-select"
                    defaultValue=""
                    disabled={state === "loading"}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Website / Landing Page</option>
                    <option>Mobile App</option>
                    <option>Web Application</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label className="form-label">MESSAGE</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    required
                    disabled={state === "loading"}
                    className="form-textarea"
                  />
                </div>

                {state === "error" && (
                  <p className="text-red-400 text-sm mb-4 px-1">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="btn-submit"
                >
                  {state === "loading" ? "Sending…" : "Send Message →"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
