import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Cleaners in Wentworth Point, Olympic Park, Lidcombe & Auburn",
  description:
    "Local, owner-operated cleaning in Wentworth Point, Sydney Olympic Park, Lidcombe and Auburn. Apartment and strata specialists based in the area — police-checked and genuinely local.",
};

const suburbs = [
  "Wentworth Point",
  "Sydney Olympic Park",
  "Lidcombe",
  "Auburn",
  "Newington",
  "Rhodes & Homebush",
];

export default function WentworthPointPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Service area</p>
          <h1>Cleaners based in Wentworth Point.</h1>
          <p>
            This is our home patch. We live and work here, which means shorter travel, easier scheduling and a genuinely local service across Wentworth Point, Olympic Park, Lidcombe and Auburn.
          </p>
        </div>
        <div className="container page-feature-image">
          <picture>
            <source media="(max-width: 680px)" srcSet="/mobile/team-apartment-kitchen.webp" />
            <img
            src="/team-apartment-kitchen.webp"
            alt="Twentyman&apos;s Cleaning Solutions team member wiping down a kitchen benchtop in a Wentworth Point apartment"
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
          <p className="eyebrow">Why local matters</p>
          <h2>We&apos;re not driving across Sydney to get here.</h2>
          <p className="section-copy">
            Most cleaning businesses servicing this area are travelling in from somewhere else, which shows up as narrow time windows, rigid scheduling and slow responses when something needs changing. We&apos;re based here. That makes it far easier to fit around your schedule, accommodate a last-minute change, or drop past to quote a job properly before committing to it.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow">
          <p className="eyebrow">The local housing stock</p>
          <h2>Built for apartment living.</h2>
          <p className="section-copy">
            Wentworth Point, Olympic Park and Newington are dominated by newer high-density apartment buildings, while Lidcombe and Auburn mix apartments with established houses. That shapes the work: compact layouts where every surface counts, shared laundries and balconies, building access and lift bookings to coordinate, and a high rate of tenant turnover driving end of lease demand.
          </p>
          <p className="section-copy">
            It also means a lot of strata buildings. Alongside cleaning inside apartments, we handle{" "}
            <Link href="/strata-cleaning">common area and strata cleaning</Link> for buildings in the area — lobbies, corridors, lifts, bin rooms and car parks.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow" style={{ textAlign: "center", marginBottom: 40 }}>
          <p className="eyebrow">Suburbs covered</p>
          <h2>Where we work locally.</h2>
        </div>
        <div className="container">
          <div className="area-list" style={{ maxWidth: 760, margin: "0 auto" }}>
            {suburbs.map((suburb) => (
              <span key={suburb}>{suburb}</span>
            ))}
          </div>
          <p style={{ maxWidth: 700, margin: "28px auto 0", textAlign: "center", color: "var(--muted)" }}>
            Nearby and not listed? Ask anyway — if you&apos;re close by, chances are we can help.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container faq-grid">
          <div className="faq-title">
            <p className="eyebrow">Good to know</p>
            <h2>Local questions</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Do you clean apartments as well as houses?</summary>
              <p>Yes — apartments make up most of our local work. Smaller footprints often mean a shorter visit.</p>
            </details>
            <details>
              <summary>Can you handle building access and lift bookings?</summary>
              <p>Yes, we&apos;re used to it. Let us know what your building requires — visitor parking, a lift booking, concierge sign-in or a key handover — and we&apos;ll work with it.</p>
            </details>
            <details>
              <summary>Do you service strata buildings in Wentworth Point and Olympic Park?</summary>
              <p>Yes. We have over six years of strata experience and are happy to walk a building and quote common area cleaning. Details on our <Link href="/strata-cleaning">strata cleaning page</Link>.</p>
            </details>
            <details>
              <summary>How much notice do you need locally?</summary>
              <p>Less than most, since we&apos;re not travelling far. Short-notice requests are worth asking about, especially for regular clients.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="note-section">
        <div className="container note-card">
          <div>
            <p className="eyebrow">Right around the corner</p>
            <h2>Get a local quote</h2>
          </div>
          <p>Tell us your suburb, building and what you need, and we&apos;ll come back with an honest quote.</p>
          <Link className="button button-primary" href="/contact">
            Request a quote
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
