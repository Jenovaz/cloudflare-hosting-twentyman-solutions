import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Cleaners on the Northern Beaches — Dee Why, Manly, Belrose & Brookvale",
  description:
    "House and apartment cleaning across the Northern Beaches, including Dee Why, Manly, Belrose and Brookvale. Owner-operated, police-checked, and used to coastal homes.",
};

const suburbs = [
  "Dee Why",
  "Manly",
  "Belrose",
  "Brookvale",
  "Freshwater & Curl Curl",
  "Frenchs Forest",
];

export default function NorthernBeachesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Service area</p>
          <h1>Cleaning across the Northern Beaches.</h1>
          <p>
            From beachside apartments in Manly and Dee Why to family homes in Belrose — regular cleaning, deep cleans and end of lease work across the Beaches.
          </p>
        </div>
        <div className="container page-feature-image">
          <picture>
            <source media="(max-width: 680px)" srcSet="/mobile/team-kitchen-clean.webp" />
            <img
            src="/team-kitchen-clean.webp"
            alt="Twentyman&apos;s Cleaning Solutions team member cleaning a bright kitchen benchtop in a Northern Beaches home"
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
          <p className="eyebrow">Coastal homes</p>
          <h2>Salt, sand and sliding doors.</h2>
          <p className="section-copy">
            Homes near the water carry a different kind of wear. Salt air leaves film on windows and fixtures, sand finds its way through every entry point, and the indoor-outdoor layouts that make coastal living appealing mean far more glass, tracks and thresholds to keep on top of. It&apos;s worth factoring into how often a home genuinely needs attention — coastal properties usually need more, not less.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow">
          <p className="eyebrow">One area, very different homes</p>
          <h2>Beaches, bushland and everything between.</h2>
          <p className="section-copy">
            Manly and Dee Why lean toward apartments and units, with strong short-stay and holiday letting demand and the changeover cleaning that comes with it. Head inland to Belrose and Frenchs Forest and it shifts to larger family homes on bigger blocks — more floor area, more bathrooms, and a stronger case for a regular fortnightly service than an occasional deep clean.
          </p>
          <p className="section-copy">
            Whichever end of that spectrum you&apos;re at, we quote against the actual property rather than a per-bedroom formula. Rentals turning over also make{" "}
            <Link href="/end-of-lease-cleaning">end of lease cleaning</Link> a steady part of our work here.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow" style={{ textAlign: "center", marginBottom: 40 }}>
          <p className="eyebrow">Suburbs covered</p>
          <h2>Where we work on the Beaches.</h2>
        </div>
        <div className="container">
          <div className="area-list" style={{ maxWidth: 760, margin: "0 auto" }}>
            {suburbs.map((suburb) => (
              <span key={suburb}>{suburb}</span>
            ))}
          </div>
          <p style={{ maxWidth: 700, margin: "28px auto 0", textAlign: "center", color: "var(--muted)" }}>
            Elsewhere on the Beaches? Send through your suburb and preferred schedule and we&apos;ll confirm availability.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container faq-grid">
          <div className="faq-title">
            <p className="eyebrow">Good to know</p>
            <h2>Northern Beaches questions</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Do you clean holiday rentals and short-stay properties?</summary>
              <p>Yes. Changeover cleaning between guests can be arranged as one-off jobs or on a recurring basis — tell us your typical turnaround window and we&apos;ll let you know what&apos;s workable.</p>
            </details>
            <details>
              <summary>Do you do windows and glass sliding doors?</summary>
              <p>Interior glass, tracks and sills are included in our deep and end of lease cleans, and can be added to a regular service. They matter more here than most places given the salt air.</p>
            </details>
            <details>
              <summary>How often should a coastal home be cleaned?</summary>
              <p>Fortnightly suits most, though homes close to the beach with a lot of glass and outdoor flow often benefit from weekly. We&apos;ll give you an honest recommendation rather than pushing the bigger booking.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="note-section">
        <div className="container note-card">
          <div>
            <p className="eyebrow">Beaches to bushland</p>
            <h2>Get a quote for your home</h2>
          </div>
          <p>Tell us your suburb, the property and how often you&apos;d like us, and we&apos;ll come back with an honest quote.</p>
          <Link className="button button-primary" href="/contact">
            Request a quote
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
