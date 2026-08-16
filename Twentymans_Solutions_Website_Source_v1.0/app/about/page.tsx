import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "About Blake & Jess",
  description: "Meet the owner-operated two-person team behind Twentyman's Solutions, providing residential cleaning and home assistance across Sydney.",
};

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero page-hero-blue">
        <div className="container narrow">
          <p className="eyebrow eyebrow-light">About us</p>
          <h1>A small Sydney business built on real relationships.</h1>
          <p>Twentyman&apos;s Cleaning Solutions is run hands-on by Blake Twentyman and Jessica Bishop.</p>
        </div>
      </section>
      <section className="section">
        <div className="container about-grid">
          <div className="about-card about-photo">
            <picture>
              <source media="(max-width: 680px)" srcSet="/mobile/about-hands-on-team-v2.webp" />
              <img
              src="/about-hands-on-team-v2.webp"
              alt="Two-person team preparing an organised cleaning kit"
              width="960"
              height="1200"
              loading="eager"
              decoding="async"
            />
            </picture>
            <div className="about-photo-caption">
              <span>Owner-operated</span>
              <p>Hands-on service<br />Sydney, NSW</p>
            </div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">The Twentyman&apos;s difference</p>
            <h2>You are trusting us with your home. We take that seriously.</h2>
            <p>Blake first established the business around 2019, and today we run it together as a hands-on, two-person operation built around dependable communication, thoughtful work and long-term client relationships.</p>
            <p>We know a good home service is about more than completing a checklist. It means listening, respecting your space, noticing the details and making your week a little easier.</p>
            <p>Because we perform the work ourselves, feedback comes directly to us. You can tell us what is working, what needs adjusting and what matters most.</p>
            <div className="values-grid">
              <div><strong>Personal</strong><span>Direct contact with the people doing the work.</span></div>
              <div><strong>Practical</strong><span>Time focused on useful, agreed priorities.</span></div>
              <div><strong>Respectful</strong><span>Care for your home, belongings and routine.</span></div>
              <div><strong>Accountable</strong><span>Clear communication and ownership of our service.</span></div>
            </div>
            <Link className="button button-primary" href="/contact">Talk to Blake & Jess</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
