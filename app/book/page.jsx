"use client";
import React from 'react';
import Link from 'next/link';

export default function BookPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8f7f4", fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --teal: #0d756d;
          --teal-light: #e8f4f3;
          --teal-dark: #094e49;
          --cream: #f8f7f4;
          --ink: #111827;
          --muted: #6b7280;
          --border: #e5e2db;
        }

        /* ─── FULLSCREEN HERO CONTAINER ─── */
        .dev-hero {
          position: relative;
          background: #0b1f1e;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 140px 24px 80px;
          text-align: center;
          overflow: hidden;
        }

        .hero-bg-blend {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 80% 60% at 50% 30%, rgba(13,117,109,0.3) 0%, transparent 70%),
            radial-gradient(ellipse 60% 60% at 50% 100%, rgba(9,78,73,0.2) 0%, transparent 80%);
        }

        /* Grid alignment backing overlay pattern */
        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        .dev-card {
          position: relative;
          z-index: 10;
          max-width: 600px;
          width: 100%;
          padding: 48px 32px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(8px);
          border-radius: 4px;
        }

        .dev-eyebrow {
          font-size: 10px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          font-weight: 600;
          color: #5ecdc6;
          margin-bottom: 24px;
          display: block;
        }

        .dev-card h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 600;
          color: #fff;
          margin-bottom: 20px;
          line-height: 1.15;
          tracking-tight;
        }

        .dev-card h1 em {
          font-style: italic;
          color: #5ecdc6;
          font-weight: 400;
        }

        .dev-card p {
          font-size: clamp(14px, 2vw, 15.5px);
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .btn-stack {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .btn-primary {
          display: inline-block;
          padding: 14px 36px;
          background: var(--teal);
          color: #fff;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 2px;
          transition: background 0.25s, transform 0.15s;
          width: 100%;
          max-width: 280px;
        }
        .btn-primary:hover { background: var(--teal-dark); transform: translateY(-1px); }

        .notice-tag {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          font-weight: 300;
          letter-spacing: 0.02em;
        }

        .notice-tag a {
          color: #5ecdc6;
          text-decoration: none;
        }
        .notice-tag a:hover {
          text-decoration: underline;
        }

        /* ─── FOOTER ─── */
        .footer {
          background: var(--ink);
          padding: 24px;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .footer-copy {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }
      `}</style>

      {/* ── SCREEN BACKDROP LAYOUT ── */}
      <section className="dev-hero">
        <div className="hero-bg-blend" />
        <div className="hero-grid-pattern" />

        {/* INNER DIALOG CARD */}
        <div className="dev-card">
          <span className="dev-eyebrow">System Notification</span>
          <h1>Clinical Module <br /><em>In Development</em></h1>
          
          

          <div className="btn-stack">
          
            
            <div className="mobile-divider" style={{ height: "12px" }} />
            
            <span className="notice-tag">
              Engineered &amp; Deploying via{" "}
              <a href="https://glacialabs.com" target="_blank" rel="noopener noreferrer">
                Glacia Labs
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* ── FOOTER BAR ── */}
     

    </main>
  );
}