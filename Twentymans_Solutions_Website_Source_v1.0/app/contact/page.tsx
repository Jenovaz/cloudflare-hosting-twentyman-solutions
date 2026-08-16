import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";
import { QuoteForm } from "./quote-form";

export const metadata: Metadata = {
  title: "Free Cleaning Quote Sydney",
  description: "Request a free residential cleaning or home assistance quote from Twentyman's Solutions.",
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Free quote</p>
          <h1>Tell us about your home.</h1>
          <p>The more detail you share, the more accurately we can recommend the right time and service.</p>
        </div>
      </section>
      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-aside">
            <p className="eyebrow">Prefer to talk?</p>
            <h2>Contact us directly</h2>
            <a className="contact-link" href="tel:+61406075725"><span>Phone</span>0406 075 725</a>
            <a className="contact-link" href="mailto:twentyman.solutions@gmail.com"><span>Email</span>twentyman.solutions@gmail.com</a>
            <div className="response-note"><strong>Sydney service coverage</strong><p>Regular routes through the Inner West, Inner City, North Shore, Hornsby area and Northern Beaches.</p></div>
            <div className="contact-image">
              <picture>
                <source media="(max-width: 680px)" srcSet="/mobile/contact-quote.webp" />
                <img
                src="/contact-quote.webp"
                alt="Phone and notebook ready for a cleaning quote enquiry"
                width="1260"
                height="1200"
                loading="lazy"
                decoding="async"
              />
              </picture>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
