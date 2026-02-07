"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
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
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="contact-form-card"
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="form-label">NAME</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
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
                className="form-input"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="form-label">PROJECT TYPE</label>
            <select name="project_type" className="form-select" defaultValue="">
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
              className="form-textarea"
            />
          </div>

          <button type="submit" className="btn-submit">
            Send Message →
          </button>
        </motion.form>
      </div>
    </section>
  );
}
