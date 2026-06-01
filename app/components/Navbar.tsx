"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/conditions", label: "Conditions We Treat" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .nav-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: background 0.4s ease, padding 0.4s ease, box-shadow 0.4s ease;
          font-family: 'DM Sans', sans-serif;
        }

        /* Scrolled State: Light background with dark text */
        .nav-root.scrolled {
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 rgba(0,0,0,0.06);
          padding: 0;
        }

        .nav-root.scrolled .logo-name { color: #111; }
        .nav-root.scrolled .logo-sub { color: #9ca3af; }
        .nav-root.scrolled .desktop-links a { color: #374151; }
        .nav-root.scrolled .hamburger span { background: #111; }
        .nav-root.scrolled .cta-btn { background: #111827; color: #fff; }

        /* Transparent State on Green Background: White text for visibility */
        .nav-root.transparent {
          background: transparent;
          padding: 8px 0;
        }

        .nav-root.transparent .logo-name { color: #ffffff; }
        .nav-root.transparent .logo-sub { color: rgba(255, 255, 255, 0.5); }
        .nav-root.transparent .desktop-links a { color: rgba(255, 255, 255, 0.9); }
        .nav-root.transparent .hamburger span { background: #ffffff; }
        .nav-root.transparent .cta-btn { background: #ffffff; color: #0b1f1e; }

        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        /* ── Logo ── */
        .logo {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-shrink: 0;
          line-height: 1;
        }

        .logo-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.04em;
          transition: color 0.2s;
        }

        .nav-root.scrolled .logo:hover .logo-name { color: #0f766e; }
        .nav-root.transparent .logo:hover .logo-name { color: #5ecdc6; }

        .logo-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-top: 3px;
          font-weight: 400;
          transition: color 0.2s;
        }

        /* ── Desktop Links ── */
        .desktop-links {
          display: none;
          align-items: center;
          gap: 36px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        @media (min-width: 1024px) {
          .desktop-links { display: flex; }
        }

        .desktop-links a {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.2s;
        }

        .desktop-links a::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 100%;
          height: 1px;
          transition: right 0.3s ease;
        }

        .nav-root.scrolled .desktop-links a::after { background: #0f766e; }
        .nav-root.transparent .desktop-links a::after { background: #5ecdc6; }

        .nav-root.scrolled .desktop-links a:hover { color: #0f766e; }
        .nav-root.transparent .desktop-links a:hover { color: #5ecdc6; }
        .desktop-links a:hover::after { right: 0; }

        /* ── CTA Button ── */
        .cta-btn {
          display: none;
          text-decoration: none;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 10px 22px;
          border-radius: 2px;
          white-space: nowrap;
          transition: background 0.25s, color 0.25s, transform 0.15s;
          flex-shrink: 0;
        }

        .nav-root.scrolled .cta-btn:hover { background: #0f766e; color: #fff; transform: translateY(-1px); }
        .nav-root.transparent .cta-btn:hover { background: #5ecdc6; color: #0b1f1e; transform: translateY(-1px); }
        .cta-btn:active { transform: translateY(0); }

        @media (min-width: 1024px) {
          .cta-btn { display: inline-block; }
        }

        /* ── Hamburger Menu ── */
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          cursor: pointer;
          gap: 5px;
          padding: 0;
          flex-shrink: 0;
        }

        @media (min-width: 1024px) {
          .hamburger { display: none; }
        }

        .hamburger span {
          display: block;
          height: 1.5px;
          border-radius: 2px;
          transition: width 0.25s, transform 0.3s, opacity 0.2s, background 0.4s;
          transform-origin: center;
        }

        .bar1 { width: 24px; }
        .bar2 { width: 16px; }
        .bar3 { width: 20px; }

        /* Dedicated Mobile Overlay Close Button */
        .mobile-close-btn {
          position: absolute;
          top: 20px;
          right: 24px;
          background: none;
          border: none;
          font-size: 24px;
          color: #111111;
          cursor: pointer;
          padding: 8px;
          line-height: 1;
          font-family: Arial, sans-serif;
          z-index: 115;
          transition: color 0.2s;
        }

        .mobile-close-btn:hover {
          color: #0f766e;
        }

        /* ── Mobile Drawer Overlay ── */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: #fafafa;
          z-index: 105;
          display: flex;
          flex-direction: column;
          padding: 100px 40px 48px;
          pointer-events: none;
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .mobile-overlay.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .mobile-link {
          display: block;
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: #111;
          text-decoration: none;
          padding: 10px 0;
          transition: color 0.2s, transform 0.2s;
          opacity: 0;
          transform: translateX(-12px);
        }

        .mobile-overlay.open .mobile-link {
          opacity: 1;
          transform: translateX(0);
        }

        .mobile-overlay.open .mobile-link:nth-child(2) { transition-delay: 0.05s; }
        .mobile-overlay.open .mobile-link:nth-child(3) { transition-delay: 0.09s; }
        .mobile-overlay.open .mobile-link:nth-child(4) { transition-delay: 0.13s; }
        .mobile-overlay.open .mobile-link:nth-child(5) { transition-delay: 0.17s; }
        .mobile-overlay.open .mobile-link:nth-child(6) { transition-delay: 0.21s; }

        .mobile-link:hover { color: #0f766e; transform: translateX(4px); }

        .mobile-cta {
          display: inline-block;
          margin-top: 32px;
          padding: 14px 28px;
          background: #0f766e;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 2px;
          width: fit-content;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.3s 0.28s, transform 0.3s 0.28s, background 0.2s;
        }

        .mobile-overlay.open .mobile-cta {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-cta:hover { background: #115e59; }

        .mobile-footer {
          margin-top: auto;
          font-size: 11px;
          color: #9ca3af;
          letter-spacing: 0.05em;
        }
      `}</style>

      <nav className={`nav-root ${scrolled || isOpen ? "scrolled" : "transparent"}`}>
        <div className="nav-inner">

          {/* Logo */}
          <Link href="/" onClick={close} className="logo">
            <span className="logo-name">Dr. Muskan</span>
            <span className="logo-sub">Pain Management &amp; Physiotherapy</span>
          </Link>

          {/* Desktop Links */}
          <ul className="desktop-links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link href="/book" className="cta-btn">Book Appointment</Link>

          {/* Hamburger Menu Button */}
          <button
            className="hamburger"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            <span className="bar1" />
            <span className="bar2" />
            <span className="bar3" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-overlay ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
        
        {/* Dedicated Tap-Safe Cross Closing Button */}
        <button 
          className="mobile-close-btn" 
          onClick={close} 
          aria-label="Close menu"
        >
          ✕
        </button>

        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className="mobile-link" onClick={close}>
            {label}
          </Link>
        ))}
        
        <Link href="/book" className="mobile-cta" onClick={close}>
          Book Appointment →
        </Link>
        <p className="mobile-footer">Pain Management &amp; Physiotherapy</p>
      </div>
    </>
  );
}