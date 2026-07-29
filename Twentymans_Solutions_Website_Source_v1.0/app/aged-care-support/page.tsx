import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Aged Care & Disability Support Cleaning Sydney | Twentyman's Cleaning Solutions",
  description:
    "Respectful in-home cleaning and household support for older Australians and people living with disability across Sydney. Police-checked, owner-operated, and available to self-managed and plan-managed NDIS participants.",
};

const supports = [
  {
    title: "Support after injury, illness or surgery",
    intro:
      "When someone is recovering and the usual household routine becomes difficult, practical help matters more than a rigid cleaning checklist.",
    items: [
      "Keeping kitchens, bathrooms and living areas hygienic and safe to move around",
      "Reducing trip hazards — clutter on floors, loose mats, cluttered walkways",
      "Laundry, bed changes and general tidying while mobility is limited",
      "Scheduling that works around carers, family visits and appointments",
    ],
  },
  {
    title: "Ongoing help for older clients living at home",
    intro:
      "Staying in your own home for longer often comes down to the household tasks that get harder over time. We help with exactly those.",
    items: [
      "Consistent, familiar faces — you always know who is coming to your home",
      "A steady, unhurried pace, with time to talk through what you'd like done",
      "The heavier or higher-reach jobs that have become difficult or unsafe",
      "Flexible frequency — weekly, fortnightly, or as needed",
    ],
  },
  {
    title: "Cleaning support for people living with disability",
    intro:
      "We work with participants and their families directly to build a routine around how the household actually runs, not a generic service template.",
    items: [
      "Support shaped around routines, sensory needs and how you prefer your home kept",
      "Clear, itemised invoicing suitable for self-managed and plan-managed claiming",
      "Consistent scheduling so visits are predictable, not disruptive",
      "Direct communication with you, your family or your plan manager as preferred",
    ],
  },
];

export default function AgedCareSupportPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Aged care &amp; disability support</p>
          <h1>Practical home support, delivered with respect.</h1>
          <p>
            Cleaning and household help for older Australians and people living with disability across Sydney — from a hands-on, owner-operated team who has done this work before.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">Experience</p>
          <h2>This isn&apos;t new ground for us.</h2>
          <p className="section-copy">
            Twentyman&apos;s Solutions has been providing this kind of support since 2019, including work in aged care settings and in-home assistance for older clients recovering from injury and needing extra help around the house. It shaped how we work: patiently, respectfully, and around the person rather than the checklist.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container detail-stack">
          {supports.map((support, index) => (
            <article className="service-detail" key={support.title}>
              <div className="detail-index">0{index + 1}</div>
              <div>
                <h2>{support.title}</h2>
                <p>{support.intro}</p>
              </div>
              <ul className="tick-list">
                {support.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container narrow" style={{ textAlign: "center", marginBottom: 40 }}>
          <p className="eyebrow">NDIS funding</p>
          <h2>How this works with an NDIS plan.</h2>
        </div>
        <div className="container">
          <div className="values-grid" style={{ maxWidth: 900, margin: "0 auto" }}>
            <div>
              <strong>Self-managed</strong>
              <span>You choose your own providers and pay us directly. We provide clear invoices for your records and claiming.</span>
            </div>
            <div>
              <strong>Plan-managed</strong>
              <span>We can invoice your plan manager directly, so the admin stays off your plate.</span>
            </div>
            <div>
              <strong>NDIA-managed</strong>
              <span>NDIA-managed plans require a registered NDIS provider. We are not currently registered, so we would not be the right fit — and we&apos;ll tell you that upfront.</span>
            </div>
          </div>
          <p style={{ maxWidth: 760, margin: "28px auto 0", textAlign: "center", color: "var(--muted)" }}>
            Household cleaning is generally funded under Core Supports where it&apos;s reasonable and necessary because of a participant&apos;s disability. Whether it&apos;s covered depends on your individual plan — worth confirming with your plan manager or support coordinator.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container faq-grid">
          <div className="faq-title">
            <p className="eyebrow">Good to know</p>
            <h2>Common questions</h2>
            <p>Anything not covered here, just ask — we&apos;re happy to talk it through.</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>Are you police-checked?</summary>
              <p>Yes. Both of us hold current national police checks. Anyone entering your home should, and we&apos;re happy to provide evidence on request.</p>
            </details>
            <details>
              <summary>Are you a registered NDIS provider?</summary>
              <p>No. We work with self-managed and plan-managed participants, who are free to choose unregistered providers. If your plan is NDIA-managed, you&apos;ll need a registered provider — we&apos;d rather tell you that straight away than waste your time.</p>
            </details>
            <details>
              <summary>Will I get the same person each visit?</summary>
              <p>Yes. We&apos;re an owner-operated business — you deal directly with us, and you&apos;ll know exactly who is coming to your home. Consistency matters a great deal in this kind of work.</p>
            </details>
            <details>
              <summary>Can family members or a plan manager arrange this on someone&apos;s behalf?</summary>
              <p>Of course. We&apos;re happy to coordinate with family, carers, plan managers or support coordinators — whatever works best for the person we&apos;re supporting.</p>
            </details>
            <details>
              <summary>What does it cost?</summary>
              <p>Our standard rate is $60 per hour per cleaner, with a $120 minimum call-out. We charge the same rate regardless of how your plan is managed.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="note-section">
        <div className="container note-card">
          <div>
            <p className="eyebrow">No pressure, no obligation</p>
            <h2>Let&apos;s talk about what would help</h2>
          </div>
          <p>
            Tell us about the situation and what&apos;s becoming difficult, and we&apos;ll give you an honest answer about whether we&apos;re the right fit.
          </p>
          <Link className="button button-primary" href="/contact">
            Get in touch
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
