import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Cleaners in Sydney CBD & Inner City",
  description:
    "Apartment and unit cleaning across Sydney CBD and the inner city. Owner-operated, police-checked, and experienced with secure buildings, concierge access and end of lease turnovers.",
};

const suburbs = [
  "Sydney CBD",
  "Pyrmont & Ultimo",
  "Surry Hills & Darlinghurst",
  "Haymarket & Chippendale",
  "Barangaroo & Millers Point",
  "Zetland & Green Square",
];

export default function SydneyCbdPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Service area</p>
          <h1>Cleaning across Sydney CBD &amp; the inner city.</h1>
          <p>
            Apartment and unit cleaning for city residents, owners and investors — with the access logistics handled properly rather than treated as an afterthought.
          </p>
        </div>
        <div className="container page-feature-image">
          <picture>
            <source media="(max-width: 680px)" srcSet="/mobile/team-window-cleaning.webp" />
            <img
            src="/team-window-cleaning.webp"
            alt="Twentyman&apos;s Cleaning Solutions team member cleaning interior glass in a Sydney high-rise apartment"
            width="1620"
            height="600"
            loading="eager"
            decoding="async"
          />
          </picture>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">City buildings</p>
          <h2>Access is half the job.</h2>
          <p className="section-copy">
            Inner city work rarely fails on the cleaning — it fails on logistics. Secure lobbies, concierge sign-in, visitor parking that doesn&apos;t exist, loading dock windows, lift bookings and strict building hours. We plan around all of it before the day rather than discovering it on arrival, which is the difference between a clean that happens and one that gets rescheduled.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow">
          <p className="eyebrow">What city clients need</p>
          <h2>Smaller spaces, higher turnover.</h2>
          <p className="section-copy">
            City apartments tend to be compact, heavily used and quick to show wear — which means detail matters more than square metres. Kitchens and bathrooms in particular carry most of the visible load in a one or two bedroom unit.
          </p>
          <p className="section-copy">
            The other constant is turnover. Inner city rental churn is high, so a lot of our city work is{" "}
            <Link href="/end-of-lease-cleaning">end of lease cleaning</Link> for tenants moving on, and pre-listing cleans for owners and investors preparing a property for inspection or sale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow" style={{ textAlign: "center", marginBottom: 40 }}>
          <p className="eyebrow">Suburbs covered</p>
          <h2>Where we work in the city.</h2>
        </div>
        <div className="container">
          <div className="area-list" style={{ maxWidth: 760, margin: "0 auto" }}>
            {suburbs.map((suburb) => (
              <span key={suburb}>{suburb}</span>
            ))}
          </div>
          <p style={{ maxWidth: 700, margin: "28px auto 0", textAlign: "center", color: "var(--muted)" }}>
            Elsewhere in the inner city? Send us the address and we&apos;ll confirm availability.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container faq-grid">
          <div className="faq-title">
            <p className="eyebrow">Good to know</p>
            <h2>City questions</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>My building requires concierge sign-in or a lift booking. Is that a problem?</summary>
              <p>Not at all — it&apos;s standard in the city. Tell us what your building needs when you book and we&apos;ll arrange it in advance.</p>
            </details>
            <details>
              <summary>Is there a minimum charge for a small studio or one bedroom?</summary>
              <p>Yes. Our $120 minimum call-out applies regardless of size, which usually covers a small apartment comfortably.</p>
            </details>
            <details>
              <summary>Can you clean for an investment property between tenants?</summary>
              <p>Yes, and it&apos;s a large part of our city work. Send through the inspection or listing date and we&apos;ll tell you honestly whether we can meet it.</p>
            </details>
            <details>
              <summary>Can you access the property if I&apos;m at work?</summary>
              <p>Usually yes, by arrangement — a key handover, building concierge or a lockbox all work. We&apos;ll agree the arrangement with you before the first visit.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="note-section">
        <div className="container note-card">
          <div>
            <p className="eyebrow">City apartments welcome</p>
            <h2>Get a quote for your place</h2>
          </div>
          <p>Tell us the suburb, building access arrangements and what you need done.</p>
          <Link className="button button-primary" href="/contact">
            Request a quote
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
