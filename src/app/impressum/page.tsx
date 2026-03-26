import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — JAMS Studio",
};

export default function Impressum() {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-32 max-w-2xl mx-auto">
      <Link
        href="/"
        className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-amber)] transition-colors mb-10 inline-block"
      >
        ← Back
      </Link>

      <h1
        className="text-4xl font-extrabold tracking-tight mb-10"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Impressum
      </h1>

      <div className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            {/* TODO: Replace with your full name and address */}
            Vorname Nachname<br />
            Musterstraße 1<br />
            33100 Paderborn<br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
            Kontakt
          </h2>
          <p>
            E-Mail: <a href="mailto:info@jams-studio.de" className="hover:text-[var(--color-amber)] transition-colors">info@jams-studio.de</a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
            Umsatzsteuer-ID
          </h2>
          <p>
            {/* TODO: Add your Umsatzsteuer-Identifikationsnummer once registered, or remove this section */}
            Wird nachgereicht.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>
            {/* TODO: Replace with your full name and address */}
            Vorname Nachname<br />
            Musterstraße 1<br />
            33100 Paderborn
          </p>
        </section>
      </div>
    </main>
  );
}
