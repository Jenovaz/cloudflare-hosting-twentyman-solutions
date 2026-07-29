/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label="Twentyman's Solutions home">
          <img
            src="/twentymans-logo.png"
            alt="Twentyman's Solutions"
            width={2047}
            height={544}
            loading="eager"
            decoding="async"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/strata-cleaning">Strata</Link>
          <Link href="/aged-care-support">Aged Care</Link>
          <Link href="/tips">Tips</Link>
          <Link href="/#areas">Areas</Link>
          <Link href="/#faq">FAQs</Link>
        </nav>
        <Link className="button button-small button-primary" href="/contact">
          Free quote
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            src="/twentymans-logo.png"
            alt="Twentyman's Solutions"
            width={2047}
            height={544}
            loading="lazy"
            decoding="async"
          />
          <p>
            Owner-operated residential cleaning and home assistance across
            established Sydney routes.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/services">Services</Link>
          <Link href="/about">About us</Link>
          <Link href="/strata-cleaning">Strata cleaning</Link>
          <Link href="/end-of-lease-cleaning">End of lease cleaning</Link>
          <Link href="/aged-care-support">Aged care &amp; disability</Link>
          <Link href="/tips">Cleaning tips</Link>
          <Link href="/contact">Request a quote</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="tel:+61406075725">0406 075 725</a>
          <a href="mailto:twentyman.solutions@gmail.com">twentyman.solutions@gmail.com</a>
          <span>Wentworth Point, NSW</span>
        </div>
        <div>
          <h3>Follow</h3>
          <a href="https://www.instagram.com/twentyman.solutions" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/Twentyman.Solutions/" target="_blank" rel="noreferrer">Facebook</a>
          <span>ABN 41 948 246 781</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Twentyman&apos;s Cleaning Solutions</span>
        <span>Finding you the right solution. Every time.</span>
      </div>
    </footer>
  );
}
