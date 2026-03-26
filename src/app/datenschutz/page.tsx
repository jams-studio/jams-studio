import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — JAMS Studio",
};

export default function Datenschutz() {
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
        Datenschutzerklärung
      </h1>

      <div className="space-y-6 text-[var(--color-text-secondary)] leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
            1. Verantwortlicher
          </h2>
          <p>
            {/* TODO: Replace with your full name and address */}
            Vorname Nachname<br />
            Musterstraße 1<br />
            33100 Paderborn<br />
            E-Mail: info@jams-studio.de
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
            2. Erhebung und Verarbeitung personenbezogener Daten
          </h2>
          <p>
            Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen
            des Kontaktformulars freiwillig mitteilen (Name, E-Mail-Adresse,
            Nachricht). Diese Daten werden ausschließlich zur Bearbeitung Ihrer
            Anfrage verwendet und nicht an Dritte weitergegeben.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
            3. Hosting
          </h2>
          <p>
            Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 701,
            San Francisco, CA 94104, USA gehostet. Beim Aufruf der Website werden
            automatisch Server-Logfiles übertragen, die Informationen wie
            IP-Adresse, Browsertyp und Zugriffszeitpunkt enthalten.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
            4. Cookies
          </h2>
          <p>
            Diese Website verwendet keine Tracking-Cookies oder
            Analyse-Dienste von Drittanbietern.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
            5. Ihre Rechte
          </h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie
            ein Widerspruchsrecht. Wenden Sie sich dazu an:{" "}
            <a
              href="mailto:info@jams-studio.de"
              className="hover:text-[var(--color-amber)] transition-colors"
            >
              info@jams-studio.de
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
