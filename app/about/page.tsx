"use client";
import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#ffffff", fontFamily: "'DM Sans', sans-serif" }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;700&display=swap');

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

        /* ─── BANNER HEADER (EXTENDED UNDER NAVBAR FOR SEO) ─── */
        .about-hero {
          position: relative;
          background: #0b1f1e;
          padding: 160px 24px 100px;
          text-align: center;
          overflow: hidden;
        }

        .hero-bg-blend {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(13,117,109,0.35) 0%, transparent 70%);
        }

        .about-hero h1 {
          position: relative;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 600;
          color: #fff;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }

        .about-hero h1 em {
          font-style: italic;
          color: #5ecdc6;
        }

        .about-hero p {
          position: relative;
          font-size: clamp(14px, 2vw, 16px);
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          max-width: 580px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ─── NARRATIVE GRID SECTION ─── */
        .content-section {
          padding: 60px 24px;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .content-section {
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            padding: 100px 24px;
          }
        }

        .image-wrapper {
          position: relative;
          height: clamp(350px, 50vh, 600px);
          w-full;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.04);
          background: var(--cream);
          border-radius: 4px;
          border: 1px solid var(--border);
        }

        .image-wrapper img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          transition: transform 0.7s ease-in-out;
        }

        .image-wrapper:hover img {
          transform: scale(1.02);
        }

        .border-accent {
          position: absolute;
          inset: 0;
          border: 15px solid rgba(255,255,255,0.1);
          margin: 16px;
          pointer-events: none;
        }

        /* ─── TEXT BLOCK STYLING ─── */
        .narrative-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .narrative-block h4 {
          text-transform: uppercase;
          font-size: 10px;
          letter-spacing: 0.25em;
          color: var(--teal);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .narrative-block h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 600;
          color: var(--ink);
          line-height: 1.25;
          margin-bottom: 24px;
        }

        .narrative-block h2 em {
          font-style: italic;
          font-weight: 400;
        }

        .paragraph-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .paragraph-stack p {
          font-size: 15.5px;
          font-weight: 300;
          line-height: 1.75;
          color: var(--muted);
        }

        .btn-action {
          display: inline-block;
          margin-top: 36px;
          padding: 14px 32px;
          background: var(--teal);
          color: #fff;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 2px;
          box-shadow: 0 4px 14px rgba(13,117,109,0.15);
          transition: background 0.25s, transform 0.15s;
        }

        .btn-action:hover {
          background: var(--teal-dark);
          transform: translateY(-1px);
        }

        /* ─── CLINICAL STATEMENT SIGN-OFF ─── */
        .statement-strip {
          background: var(--cream);
          border-top: 1px solid var(--border);
          border-b: 1px solid var(--border);
          padding: 80px 24px;
          text-align: center;
        }

        .statement-strip p {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(20px, 3vw, 28px);
          font-style: italic;
          color: var(--ink);
          max-width: 800px;
          margin: 0 auto 20px;
          line-height: 1.5;
        }

        .statement-strip span {
          font-size: 9.5px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--teal);
          font-weight: 700;
        }
      `}</style>

      {/* ── BANNER HEADER ── */}
      <section className="about-hero">
        <div className="hero-bg-blend" />
        <h1>Our <em>Clinical Story</em></h1>
        <p>
          Discover the evidence-based medical philosophy guiding Lahore's premier outpatient physical rehabilitation and non-surgical pain management setup.
        </p>
      </section>

      {/* ── NARRATIVE GRID SECTION ── */}
      <section className="content-section">
        
        {/* High-Reliability Clean Medical Image */}
        <div className="image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
            alt="Dr. Muskan Physical Therapy and Rehabilitation Clinic Room" 
          />
          <div className="border-accent"></div>
        </div>

        {/* Brand Narrative */}
        <div className="narrative-block">
          <h4>Clinical Practice Overview</h4>
          <h2>Evidence-Based Care &amp; <em>Kinetic Restoration</em></h2>
          
          <div className="paragraph-stack">
            <p>
              Dr. Muskan Pain Management &amp; Physiotherapy Clinic is a highly specialized outpatient medical sanctuary dedicated to identifying and eliminating the root mechanical causes of chronic musculoskeletal and neuropathic ailments. 
            </p>
            <p>
              We firmly believe that sustainable recovery requires looking past localized surface symptoms. By conducting thorough kinetic examinations, diagnostic record reviews, and personalized functional mapping protocols, we build highly specialized recovery roadmaps tailored to individual recovery timelines.
            </p>
            <p>
              Operating directly out of Jail Road, Lahore, our clinic merges hands-on manual adjustment techniques, clinical electrotherapy modalities, and evidence-based exercise setups within a professional environment centered entirely around absolute patient wellbeing.
            </p>
          </div>

          <Link href="/treatments" className="btn-action">
            Explore Treatments
          </Link>
        </div>

      </section>

      {/* ── CLINICAL STATEMENT SIGN-OFF ── */}
      <section className="statement-strip">
        <div className="max-w-3xl mx-auto">
          <p>
            "Our core objective is to dismantle structural pain patterns, restore lost mechanical alignment, and actively empower you to navigate life completely free of discomfort."
          </p>
          <span>The Clinical Promise</span>
        </div>
      </section>

    </main>
  );
}