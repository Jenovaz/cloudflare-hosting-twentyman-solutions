/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";

const services = [
  {
    number: "01",
    title: "Regular home cleaning",
    copy: "Reliable weekly or fortnightly cleaning shaped around your home, priorities and routine.",
  },
  {
    number: "02",
    title: "Deep & one-off cleans",
    copy: "A detailed reset for homes needing extra attention, a seasonal refresh or help catching up.",
  },
  {
    number: "03",
    title: "Move-in & move-out",
    copy: "Practical cleaning support when preparing a property, changing tenants or settling into a new home.",
  },
  {
    number: "04",
    title: "Home assistance",
    copy: "Flexible help with everyday household tasks when you need more than a standard cleaning checklist.",
  },
  {
    number: "05",
    title: "Aged care & disability support",
    copy: "Respectful in-home cleaning and household help for older clients and people living with disability. Available to self-managed and plan-managed NDIS participants.",
  },
];

const testimonials = [
  {
    quote:
      "We have used the service for a few months now and are very happy with it. The work is punctual, of a high standard and tailored around specific requirements.",
    name: "Carla M.",
  },
  {
    quote:
      "The service is reliable, friendly and incredibly thorough. Our home is always left feeling fresh, comfortable and properly cared for.",
    name: "Jane",
  },
  {
    quote:
      "Communication is always easy, the service is dependable, and the quality of their work is consistently excellent.",
    name: "David",
  },
];

const areas = [
  "Wentworth Point & surrounds",
  "Inner West",
  "Sydney CBD & Inner Sydney",
  "North Shore",
  "Northern Beaches",
  "Eastern Suburbs",
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Residential cleaning &amp; home assistance • Sydney</p>
            <h1>A Solution For Every Property</h1>
            <p className="brand-slogan">Finding you the right solution. Every time.</p>
            <p className="hero-lead">
              Reliable residential cleaning and practical home assistance from
              a hands-on, owner-operated local business.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/contact">
                Get a free quote
              </Link>
              <a className="button button-ghost" href="tel:+61406075725">
                Call 0406 075 725
              </a>
            </div>
            <div className="trust-row" aria-label="Service highlights">
              <span>Familiar, consistent service</span>
              <span>Clear communication</span>
              <span>Help shaped around your home</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="A freshly cleaned contemporary Sydney home">
            <img
              src="/hero-property-clean-v2.webp"
              alt="Freshly cleaned contemporary Sydney apartment living and dining space"
              width="1586"
              height="992"
              loading="eager"
              decoding="async"
            />
            <div className="hero-visual-caption">
              <p className="mini-label">A personal service</p>
              <h2>Your home. Your priorities.</h2>
              <div className="availability-chip">
                <span className="pulse" />
                Now welcoming new Sydney enquiries
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">How we can help</p>
              <h2>Cleaning that fits real life</h2>
            </div>
            <p>
              From regular upkeep to a detailed reset, we agree on priorities
              first and focus our time where it makes the biggest difference.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
          <div className="center-action">
            <Link className="text-link" href="/services">
              Explore services and inclusions <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-blue">
        <div className="container story-grid">
          <div className="story-image">
            <img
              src="/home-assistance-bedroom-v2.webp"
              alt="Freshly made bedroom with folded linen ready for home assistance"
              width="1122"
              height="1402"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="story-copy">
            <p className="eyebrow eyebrow-light">Why Twentyman&apos;s</p>
            <h2>Personal service, clear communication and consistent care.</h2>
            <p>
              We are a small, owner-operated Sydney business. Clients deal
              directly with the people completing the work, keeping communication
              clear and the service personal.
            </p>
            <ul className="tick-list tick-list-light">
              <li>Friendly, respectful and detail-focused service</li>
              <li>Priorities discussed before the work begins</li>
              <li>Direct communication if anything changes</li>
              <li>Ongoing cleaning or flexible home support</li>
            </ul>
            <Link className="button button-white" href="/about">
              Meet the team
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Simple from the start</p>
            <h2>From enquiry to a home that feels reset</h2>
          </div>
          <div className="steps">
            <article>
              <span>1</span>
              <h3>Tell us about your home</h3>
              <p>Share the suburb, property size, frequency and priorities.</p>
            </article>
            <article>
              <span>2</span>
              <h3>Receive a tailored quote</h3>
              <p>We clarify the scope and recommend a practical service plan.</p>
            </article>
            <article>
              <span>3</span>
              <h3>Confirm a suitable time</h3>
              <p>Once agreed, we confirm the booking and keep communication clear.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Client feedback</p>
              <h2>Trusted in homes across Sydney</h2>
            </div>
            <p>Real feedback from people who have experienced our service.</p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <figure className="testimonial" key={item.name}>
                <div className="stars" aria-label="Five stars">★★★★★</div>
                <blockquote>“{item.quote}”</blockquote>
                <figcaption>{item.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="areas">
        <div className="container areas-grid">
          <div>
            <p className="eyebrow">Service area</p>
            <h2>Established service routes across Sydney.</h2>
            <p className="section-copy">
              Our regular work takes us through the Inner West and Inner City,
              up to Hornsby and the North Shore, and across to the Northern Beaches.
              Send us your suburb and preferred schedule and we will confirm availability.
            </p>
            <Link className="button button-primary" href="/contact">
              Check your suburb
            </Link>
          </div>
          <div className="area-list">
            {areas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <div className="faq-title">
            <p className="eyebrow">Good to know</p>
            <h2>Frequently asked questions</h2>
            <p>Still unsure? Call or message us and we will talk it through.</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>Do you offer weekly and fortnightly cleaning?</summary>
              <p>Yes. Regular weekly and fortnightly services are available where the location, scope and schedule are a good fit.</p>
            </details>
            <details>
              <summary>Can I request specific cleaning priorities?</summary>
              <p>Absolutely. We ask what matters most and use the agreed time around those priorities rather than assuming every home needs the same checklist.</p>
            </details>
            <details>
              <summary>Do you provide one-off or deeper cleans?</summary>
              <p>Yes. Tell us about the current condition and desired outcome so we can allow realistic time and prepare an accurate quote.</p>
            </details>
            <details>
              <summary>Will I receive a consistent service?</summary>
              <p>Yes. As an owner-operated business, you deal directly with us and know who is coming to your home.</p>
            </details>
            <details>
              <summary>How quickly will you respond?</summary>
              <p>We aim to respond as soon as practical around client work. Complete quote details help us provide an accurate answer sooner.</p>
            </details>
            <details>
              <summary>Are you police-checked?</summary>
              <p>Yes. Both of us hold current national police checks, and we&apos;re happy to provide evidence on request. Anyone you let into your home should be able to do the same.</p>
            </details>
            <details>
              <summary>How much does house cleaning cost in Sydney?</summary>
              <p>Our rate is $60 per hour per cleaner, with a $120 minimum call-out. What a specific home costs depends on its size, condition and how often we visit — we confirm the expected time with you before booking, never after.</p>
            </details>
            <details>
              <summary>Do I need to provide cleaning products and equipment?</summary>
              <p>No — we bring what we need. If you&apos;d prefer we use particular products in your home, whether for allergies, surfaces or personal preference, just let us know and we&apos;ll work with those instead.</p>
            </details>
            <details>
              <summary>Am I locked into a contract?</summary>
              <p>No. There are no lock-in contracts and no cancellation fees. Regular clients can pause, reschedule or stop whenever they need to — we just ask for reasonable notice where possible.</p>
            </details>
            <details>
              <summary>Do you do end of lease or bond cleaning?</summary>
              <p>Yes. Move-out cleans are quoted as a one-off job based on the property&apos;s size and condition. Tell us your inspection date and what your agent expects, and we&apos;ll let you know honestly whether we can meet it.</p>
            </details>
            <details>
              <summary>Do you work with NDIS participants or older clients?</summary>
              <p>Yes. We&apos;ve provided aged care and in-home support work since 2019, and we work with self-managed and plan-managed NDIS participants. There&apos;s more detail on our <Link href="/aged-care-support">aged care &amp; disability support page</Link>.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow eyebrow-light">Ready when you are</p>
            <h2>Tell us what would make home feel easier.</h2>
            <p>Request a free, no-obligation quote tailored to your home.</p>
          </div>
          <div className="button-row">
            <Link className="button button-white" href="/contact">
              Request a quote
            </Link>
            <a className="button button-outline-light" href="mailto:twentyman.solutions@gmail.com">
              Email us
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
