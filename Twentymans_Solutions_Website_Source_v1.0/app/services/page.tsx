/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Residential Cleaning & Home Assistance Sydney",
  description: "Explore regular cleaning, deep cleans, move-in and move-out cleaning, and flexible home assistance from Twentyman's Cleaning Solutions.",
};

const serviceDetails = [
  {
    title: "Regular home cleaning",
    intro: "Reliable weekly or fortnightly support that keeps your home comfortable and manageable.",
    items: ["Kitchen surfaces and exterior appliance cleaning", "Bathrooms and toilets", "Dusting and general surface care", "Vacuuming and floor cleaning", "Agreed priority tasks within the booked time"],
  },
  {
    title: "Deep & one-off cleaning",
    intro: "Extra attention for homes needing a reset, seasonal refresh or help getting back on top of things.",
    items: ["A scope based on the current condition", "Detailed attention to priority areas", "Flexible one-off scheduling", "Realistic time allowance discussed first", "Optional follow-up regular service"],
  },
  {
    title: "Move-in & move-out support",
    intro: "Practical cleaning around a move, handover or change of occupancy.",
    items: ["Empty or partly furnished properties", "Kitchen and bathroom detailing", "Inside cupboards when agreed", "Floors and reachable surfaces", "Scope confirmed before quoting"],
  },
  {
    title: "Flexible home assistance",
    intro: "Household support shaped around the person and the tasks that would make everyday life easier.",
    items: ["Light household organisation", "Laundry and changing bed linen when agreed", "Practical help alongside cleaning", "Respectful support in lived-in homes", "A clear, personalised task plan"],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Our services</p>
          <h1>Practical help, shaped around your home.</h1>
          <p>Every quote starts with the property, priorities and outcome—not a one-size-fits-all package.</p>
        </div>
        <div className="container page-feature-image">
          <img
            src="/team-kitchen-bench.webp"
            alt="Twentyman&apos;s Cleaning Solutions team member wiping down a kitchen benchtop"
            width="1620"
            height="600"
            loading="eager"
            decoding="async"
          />
        </div>
      </section>
      <section className="section">
        <div className="container detail-stack">
          {serviceDetails.map((service, index) => (
            <article className="service-detail" key={service.title}>
              <div className="detail-index">0{index + 1}</div>
              <div>
                <h2>{service.title}</h2>
                <p>{service.intro}</p>
              </div>
              <ul className="tick-list">
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-soft">
        <div className="container narrow" style={{ textAlign: "center", marginBottom: 40 }}>
          <p className="eyebrow">Pricing</p>
          <h2>Straightforward, hourly pricing.</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem" }}>
            No packages to decode — you pay for the time your home actually needs.
          </p>
        </div>
        <div className="container">
          <div className="values-grid" style={{ maxWidth: 720, margin: "0 auto" }}>
            <div>
              <strong>$60 / hour</strong>
              <span>Per cleaner. Most regular cleans use one cleaner; larger or deeper jobs may use two working together.</span>
            </div>
            <div>
              <strong>$120 minimum call-out</strong>
              <span>Applies to every booking and covers setup and travel within our service area.</span>
            </div>
          </div>
          <p style={{ maxWidth: 720, margin: "24px auto 0", textAlign: "center", color: "var(--muted)" }}>
            Your exact time and price depend on your property&apos;s size, condition and how often you&apos;d like us back — we confirm this with you before booking, never after.
          </p>
        </div>
      </section>
      <section className="note-section">
        <div className="container note-card">
          <div>
            <p className="eyebrow">Clear expectations</p>
            <h2>A quote that reflects the real job</h2>
          </div>
          <p>Condition, size, priorities, access, frequency and travel all affect the right time allowance. Share as much detail as possible and we will confirm the scope before booking.</p>
          <Link className="button button-primary" href="/contact">Request your quote</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
