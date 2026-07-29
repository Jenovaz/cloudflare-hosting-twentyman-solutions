import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Home Cleaning Tips | Twentyman's Cleaning Solutions",
  description:
    "Practical, no-nonsense cleaning and home-care tips from Twentyman's Cleaning Solutions — Sydney's owner-operated residential cleaning team.",
};

const tips = [
  {
    title: "A few things that help on cleaning day",
    intro:
      "None of this is required — but a couple of small things mean more of your booked time goes toward the areas that matter most to you.",
    items: [
      "Clear personal items off benchtops and floors so surfaces can actually be cleaned, not worked around",
      "Let us know about pets in advance, and where they'll be during the visit",
      "Point out your top one or two priorities upfront — we'll make sure they get proper attention",
      "Leave a note (or tell us on the day) about anything fragile or off-limits",
    ],
  },
  {
    title: "Keeping a home feeling clean between visits",
    intro:
      "Small daily habits do more for a home's feel than the occasional big effort. A few that genuinely make a difference:",
    items: [
      "A 5-minute reset each evening — dishes away, surfaces cleared — makes every morning easier",
      "Wipe kitchen and bathroom surfaces right after use, while they're still quick to clean",
      "A shoes-off-at-the-door habit noticeably cuts down on floor grime and vacuuming frequency",
      "Deal with laundry in smaller, regular loads rather than letting it build into a weekend project",
    ],
  },
  {
    title: "A simple seasonal deep-clean checklist",
    intro:
      "If you're tackling a deeper reset yourself, or want to know what a professional deep clean typically covers, this is a solid starting checklist:",
    items: [
      "Inside and behind large appliances (oven, fridge, washing machine)",
      "Skirting boards, light switches and door handles — easy to overlook, quick to notice once clean",
      "Windows, sills and tracks",
      "Wardrobes and cupboards: a quick wipe-out before re-organising what's inside",
      "Grout and tiled areas in bathrooms, which build up gradually and are easy to underestimate",
    ],
  },
  {
    title: "One-off clean or ongoing service — which makes sense?",
    intro:
      "A common question we get, and the honest answer depends on where things stand right now:",
    items: [
      "Moving in or out, or preparing for an event: a one-off clean, scoped to that specific job",
      "Home has gotten away from you and needs a proper reset first: a deep clean, often followed by regular visits to maintain it",
      "Home is generally in good shape and you just want to stay ahead of it: regular weekly or fortnightly cleaning is usually the better value",
      "Not sure which fits? Tell us the current condition honestly — we'll recommend what actually makes sense, not just the bigger booking",
    ],
  },
];

export default function TipsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Home cleaning tips</p>
          <h1>Practical advice, no sales pitch.</h1>
          <p>
            A few honest, useful things we&apos;ve picked up from years of cleaning real Sydney homes.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container detail-stack">
          {tips.map((tip, index) => (
            <article className="service-detail" key={tip.title}>
              <div className="detail-index">0{index + 1}</div>
              <div>
                <h2>{tip.title}</h2>
                <p>{tip.intro}</p>
              </div>
              <ul className="tick-list">
                {tip.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="note-section">
        <div className="container note-card">
          <div>
            <p className="eyebrow">Still deciding?</p>
            <h2>Tell us about your home</h2>
          </div>
          <p>
            Share your suburb, priorities and current condition, and we&apos;ll recommend the right service and give you an honest quote.
          </p>
          <Link className="button button-primary" href="/contact">
            Request your quote
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
