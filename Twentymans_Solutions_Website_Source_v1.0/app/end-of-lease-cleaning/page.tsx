/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "End of Lease & Bond Cleaning Sydney | Twentyman's Cleaning Solutions",
  description:
    "End of lease and bond cleaning across Sydney from an owner-operated team. Honest assessments, realistic timeframes, and a clear quote before we start — not an inflated promise.",
};

const inclusions = [
  {
    title: "Kitchen",
    intro:
      "Usually the area agents scrutinise hardest, and the one that takes the most time to do properly.",
    items: [
      "Oven, grill and range hood degreased inside and out",
      "Cooktop, splashback and rangehood filters",
      "Inside and outside of all cupboards and drawers",
      "Benchtops, sink, taps and tiled areas",
      "Inside the fridge and dishwasher where they remain in the property",
    ],
  },
  {
    title: "Bathrooms & laundry",
    intro:
      "Soap scum, mould and hard-water build-up are the usual sticking points on a final inspection.",
    items: [
      "Shower screens, tiles and grout treated for build-up",
      "Toilet, vanity, sink, mirrors and all fixtures",
      "Exhaust fans and vents",
      "Inside cupboards and laundry tub",
      "Washing machine and dryer exteriors where they remain",
    ],
  },
  {
    title: "Throughout the property",
    intro:
      "The whole-of-property items that add up quickly and are easy to underestimate.",
    items: [
      "Floors vacuumed and mopped throughout",
      "Inside all wardrobes, cupboards and built-ins",
      "Skirting boards, door frames, light switches and power points",
      "Windows, sills and tracks",
      "Walls spot-cleaned for marks and scuffs",
      "Cobweb removal and light fittings",
    ],
  },
];

export default function EndOfLeasePage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">End of lease &amp; bond cleaning</p>
          <h1>A straight answer before you book.</h1>
          <p>
            End of lease cleaning across Sydney, quoted honestly against your property&apos;s actual condition and your actual inspection date.
          </p>
        </div>
        <div className="container page-feature-image">
          <img
            src="/team-bathroom-detail.webp"
            alt="Twentyman&apos;s Cleaning Solutions team member detailing a bathroom vanity and mirror during an end of lease clean"
            width="1600"
            height="900"
            loading="eager"
            decoding="async"
          />
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">How we quote it</p>
          <h2>No inflated promises.</h2>
          <p className="section-copy">
            Plenty of operators advertise a guaranteed bond return and then argue about the fine print when an agent disputes something. We&apos;d rather be upfront: tell us the property&apos;s size and current condition, what your agent expects, and when the inspection is. We&apos;ll tell you honestly what we can achieve in that window — including if we think the timeframe is too tight, or the job needs more hours than you were expecting.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container narrow" style={{ textAlign: "center", marginBottom: 40 }}>
          <p className="eyebrow">What&apos;s covered</p>
          <h2>Typical end of lease scope.</h2>
          <p style={{ color: "var(--muted)" }}>
            Scoped to your property and your agent&apos;s requirements — this is the usual starting point.
          </p>
        </div>
        <div className="container detail-stack">
          {inclusions.map((section, index) => (
            <article className="service-detail" key={section.title}>
              <div className="detail-index">0{index + 1}</div>
              <div>
                <h2>{section.title}</h2>
                <p>{section.intro}</p>
              </div>
              <ul className="tick-list">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container faq-grid">
          <div className="faq-title">
            <p className="eyebrow">Good to know</p>
            <h2>Common questions</h2>
            <p>Anything else, just ask — we&apos;ll give you a straight answer.</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>How much does end of lease cleaning cost in Sydney?</summary>
              <p>End of lease cleans are quoted as a one-off job rather than by the hour, because the time needed varies enormously with size and condition. Our underlying rate is $60 per hour per cleaner with a $120 minimum call-out — tell us the property details and we&apos;ll give you a firm number before we start.</p>
            </details>
            <details>
              <summary>Do you guarantee my bond back?</summary>
              <p>No, and we&apos;d be cautious of anyone who does. Whether a bond is returned depends on the agent, the condition report, and things outside a cleaner&apos;s control like damage or wear. What we will do is tell you honestly what we can achieve, and do the work properly.</p>
            </details>
            <details>
              <summary>Does it include carpet steam cleaning?</summary>
              <p>Not as standard. Many leases require professional carpet steam cleaning with a receipt — let us know if yours does and we&apos;ll tell you how to handle it alongside the clean.</p>
            </details>
            <details>
              <summary>How much notice do you need?</summary>
              <p>The more the better, especially near end of month when demand peaks. Get in touch as soon as you know your inspection date and we&apos;ll tell you straight away whether we can fit it.</p>
            </details>
            <details>
              <summary>Does the property need to be empty?</summary>
              <p>Ideally yes. An empty property lets us clean inside cupboards, behind appliances and across all floors properly. If furniture is staying, tell us upfront so we can quote realistically rather than working around surprises.</p>
            </details>
            <details>
              <summary>What if the agent isn&apos;t satisfied?</summary>
              <p>Tell us what they&apos;ve flagged. If it&apos;s something within the scope we quoted and we&apos;ve missed it, we&apos;ll come back and put it right.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="note-section">
        <div className="container note-card">
          <div>
            <p className="eyebrow">Inspection coming up?</p>
            <h2>Get a realistic quote</h2>
          </div>
          <p>
            Send us the property size, its current condition and your inspection date, and we&apos;ll come back with an honest answer.
          </p>
          <Link className="button button-primary" href="/contact">
            Request a quote
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
