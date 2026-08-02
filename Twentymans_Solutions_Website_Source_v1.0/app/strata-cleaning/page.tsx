import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Strata Cleaning Sydney | Common Area Cleaning | Twentyman's Cleaning Solutions",
  description:
    "Strata and common area cleaning across Sydney. Over 6 years of strata experience, owner-operated, with consistent scheduling and direct contact — no account managers or call centres.",
};

const areas = [
  {
    title: "Entries, lobbies & corridors",
    intro:
      "The first thing residents, owners and prospective buyers see, and the areas most likely to generate complaints when they slip.",
    items: [
      "Floors vacuumed, mopped and spot-treated",
      "Glass entry doors, intercom panels and mirrors",
      "Mailbox areas, skirtings and handrails",
      "Cobweb removal and light fitting dusting",
    ],
  },
  {
    title: "Stairwells, lifts & shared amenities",
    intro:
      "High-traffic, high-touch surfaces that need consistent attention rather than occasional deep cleans.",
    items: [
      "Lift interiors, tracks, buttons and door frames",
      "Stairs, landings and balustrades",
      "Shared laundries, gyms and common rooms as required",
      "High-touch point wipe-down through shared areas",
    ],
  },
  {
    title: "Car parks, bin rooms & external areas",
    intro:
      "The areas that quietly drive most resident complaints — odour, pests and general presentation.",
    items: [
      "Bin room washing and deodorising",
      "Bin presentation and return where scheduled",
      "Car park sweeping and spot cleaning",
      "Entry paths, driveways and external common areas",
    ],
  },
];

export default function StrataCleaningPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Strata &amp; common area cleaning</p>
          <h1>Common areas that stay consistent.</h1>
          <p>
            Strata cleaning across Sydney, backed by over six years of hands-on experience in residential and mixed-use buildings.
          </p>
        </div>
        <div className="container page-feature-image">
          <picture>
            <source media="(max-width: 680px)" srcSet="/mobile/team-hallway-mirror.webp" />
            <img
            src="/team-hallway-mirror.webp"
            alt="Twentyman&apos;s Cleaning Solutions team member cleaning glass and mirrored surfaces in a shared hallway"
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
          <p className="eyebrow">Why buildings move providers</p>
          <h2>Consistency is the whole job.</h2>
          <p className="section-copy">
            Most strata managers don&apos;t change cleaners because of one bad clean. They change because visits get skipped, standards drift as staff turn over, or nobody answers when something needs sorting. We&apos;re an owner-operated business — the same people attend your building, and when you call, you reach the person doing the work rather than an account manager relaying messages.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow" style={{ textAlign: "center", marginBottom: 40 }}>
          <p className="eyebrow">Scope</p>
          <h2>What common area cleaning covers.</h2>
          <p style={{ color: "var(--muted)" }}>
            Every building differs — scope and frequency are set to suit the site.
          </p>
        </div>
        <div className="container detail-stack">
          {areas.map((area, index) => (
            <article className="service-detail" key={area.title}>
              <div className="detail-index">0{index + 1}</div>
              <div>
                <h2>{area.title}</h2>
                <p>{area.intro}</p>
              </div>
              <ul className="tick-list">
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container narrow" style={{ textAlign: "center", marginBottom: 40 }}>
          <p className="eyebrow">Working with us</p>
          <h2>What to expect.</h2>
        </div>
        <div className="container">
          <div className="values-grid" style={{ maxWidth: 900, margin: "0 auto" }}>
            <div>
              <strong>Site assessment first</strong>
              <span>We walk the building before quoting, so the scope reflects the actual site rather than a generic per-unit rate.</span>
            </div>
            <div>
              <strong>A set schedule</strong>
              <span>Agreed frequency and scope, attended consistently. Weekly and fortnightly are most common.</span>
            </div>
            <div>
              <strong>Direct contact</strong>
              <span>You deal with the people cleaning your building. Issues get answered, not escalated through a queue.</span>
            </div>
            <div>
              <strong>Quoted per building</strong>
              <span>Priced on size, scope and frequency after the site visit — not a flat rate applied blindly.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container faq-grid">
          <div className="faq-title">
            <p className="eyebrow">Good to know</p>
            <h2>Common questions</h2>
            <p>Strata manager, building manager or committee member — happy to talk it through.</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>What does strata cleaning include?</summary>
              <p>Regular upkeep of shared areas — entries, lobbies, corridors, stairwells, lifts, bin rooms, car parks and shared amenities. Scope is set per building depending on layout, foot traffic and what the owners corporation wants covered.</p>
            </details>
            <details>
              <summary>How much does strata cleaning cost in Sydney?</summary>
              <p>It depends on building size, the areas included and how often we attend, so we quote after walking the site rather than guessing. A site visit costs nothing and gives you a firm number.</p>
            </details>
            <details>
              <summary>How often should common areas be cleaned?</summary>
              <p>Weekly or fortnightly suits most residential buildings. Higher-traffic or mixed-use sites often warrant more frequent attendance. We&apos;ll give you an honest recommendation after seeing the building.</p>
            </details>
            <details>
              <summary>Who arranges strata cleaning?</summary>
              <p>Usually the strata manager, building manager or owners corporation rather than individual residents. We&apos;re happy to deal with whoever holds the contract.</p>
            </details>
            <details>
              <summary>Can you work outside business hours?</summary>
              <p>Yes. Scheduling around resident movement and building access is normal, and we can work to the times that suit your site.</p>
            </details>
            <details>
              <summary>Do you take one-off strata jobs?</summary>
              <p>Yes. Post-build cleans, end-of-tenancy common area resets and pre-inspection tidy-ups can all be arranged as one-off work alongside or instead of a regular schedule.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="note-section">
        <div className="container note-card">
          <div>
            <p className="eyebrow">Free site assessment</p>
            <h2>Let&apos;s look at your building</h2>
          </div>
          <p>
            Send through the building address, the areas you need covered and your preferred frequency, and we&apos;ll arrange a walk-through and a firm quote.
          </p>
          <Link className="button button-primary" href="/contact">
            Request a site assessment
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
