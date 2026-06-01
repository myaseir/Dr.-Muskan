"use client";
import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8f7f4", fontFamily: "'DM Sans', sans-serif" }}>

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

        /* ─── BANNER HEADER (EXTENDED UNDER NAVBAR) ─── */
        .contact-hero {
          position: relative;
          background: #0b1f1e;
          padding: 160px 24px 100px; /* Increased top padding to seat content safely below navbar */
          text-align: center;
          overflow: hidden;
        }

        .hero-bg-blend {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(13,117,109,0.35) 0%, transparent 70%);
        }

        .contact-hero h1 {
          position: relative;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 600;
          color: #fff;
          margin-bottom: 16px;
          tracking-tight;
        }

        .contact-hero h1 em {
          font-style: italic;
          color: #5ecdc6;
        }

        .contact-hero p {
          position: relative;
          font-size: clamp(14px, 2vw, 16px);
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ─── MAIN LAYOUT CONTAINER ─── */
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 24px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }

        @media (min-width: 960px) {
          .contact-container {
            grid-template-columns: 5fr 7fr;
            gap: 80px;
            padding: 100px 24px;
          }
        }

        /* ─── LEFT COLUMN: CLINIC INFO ─── */
        .info-pane h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 600;
          font-style: italic;
          color: var(--ink);
          margin-bottom: 36px;
        }

        .info-block {
          border-left: 2px solid var(--teal);
          padding-left: 24px;
          margin-bottom: 40px;
        }

        .info-label {
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-weight: 500;
          color: var(--teal);
          margin-bottom: 8px;
        }

        .info-value {
          font-size: 16px;
          font-weight: 300;
          color: var(--ink);
          line-height: 1.6;
        }

        .info-value a {
          color: var(--teal);
          text-decoration: none;
          font-weight: 400;
        }
        .info-value a:hover {
          text-decoration: underline;
        }

        /* ─── RIGHT COLUMN: INTAKE FORM ─── */
        .form-card {
          background: #fff;
          border: 1px solid var(--border);
          padding: 32px 24px;
          border-radius: 4px;
          box-shadow: 0 4px 30px rgba(0,0,0,0.02);
        }

        @media (min-width: 640px) {
          .form-card {
            padding: 48px 40px;
          }
        }

        .form-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 32px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }

        @media (min-width: 640px) {
          .form-row {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
        }

        .form-group label {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
          font-weight: 500;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          border: none;
          border-bottom: 1px solid var(--border);
          padding: 12px 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: var(--ink);
          background: transparent;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--teal);
        }

        .form-group select {
          border-radius: 0;
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='%236b7280' d='M0 0l5 5 5-5z'/></svg>");
          background-repeat: no-repeat;
          background-position: right 4px center;
        }

        .btn-submit {
          width: 100%;
          border: none;
          display: inline-block;
          padding: 16px 32px;
          background: var(--teal);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border-radius: 2px;
          cursor: pointer;
          margin-top: 16px;
          transition: background 0.25s, transform 0.15s;
        }
        .btn-submit:hover {
          background: var(--teal-dark);
        }
        .btn-submit:active {
          transform: translateY(1px);
        }

        /* ─── FOOTER ─── */
        .footer {
          background: var(--ink);
          padding: 32px 24px;
          text-align: center;
          margin-top: auto;
        }

        .footer-brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          margin-bottom: 4px;
        }

        .footer-sub {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
        }
      `}</style>

      {/* ── BANNER HEADER ── */}
      <section className="contact-hero">
        <div className="hero-bg-blend" />
        <h1>Clinical <em>Scheduling</em></h1>
        <p>
          Connect with us to book your structural diagnosis, request therapeutic sessions, or discuss physical recovery roadmaps.
        </p>
      </section>

      {/* ── MAIN CONTAINER ── */}
      <section className="contact-container">
        
        {/* LEFT COLUMN: INFO */}
        <div className="info-pane">
          <h2>Clinic Details</h2>
          
          <div className="info-block">
            <div className="info-label">Location</div>
            <div className="info-value">
              Dr. Muskan Pain Management Clinic<br />
              28A, Jail Road<br />
              Lahore, Pakistan
            </div>
          </div>

          <div className="info-block">
            <div className="info-label">Direct Contact</div>
            <div className="info-value">
              <a href="mailto:71muskanjamil@gmail.com">71muskanjamil@gmail.com</a>
            </div>
          </div>

          <div className="info-block">
            <div className="info-label">Clinical Hours</div>
            <div className="info-value">
              Monday – Saturday<br />
              9:00 AM – 6:00 PM<br />
              <span style={{ fontSize: '13px', color: 'var(--muted)', display: 'inline-block', marginTop: '4px' }}>
                *Sundays Closed
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: REFACTORED INTAKE FORM */}
        <div className="form-card">
          <h3>Patient Intake Request</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="p-name">Full Name</label>
                <input type="text" id="p-name" placeholder="E.g. Muhammad Yasir" required />
              </div>
              <div className="form-group">
                <label htmlFor="p-phone">Phone Number</label>
                <input type="tel" id="p-phone" placeholder="E.g. +92 300 1234567" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="p-treatment">Primary Treatment Area</label>
              <select id="p-treatment">
                <option>Pain Management Modalities</option>
                <option>General Physiotherapy &amp; Rehab</option>
                <option>Sports Injury Recovery</option>
                <option>Spinal &amp; Sciatica Care</option>
                <option>Neurological (Stroke) Rehab</option>
                <option>Women's Pelvic Health</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="p-desc">Symptoms &amp; History Details</label>
              <textarea id="p-desc" rows={4} placeholder="Briefly describe your current condition, duration of structural pain, or previous diagnosis..." style={{ resize: "none" }} />
            </div>

            <button type="submit" className="btn-submit">
              Submit Inquiry Route
            </button>
          </form>
        </div>

      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-brand">Dr. Muskan</div>
        <div className="footer-sub">Pain Management &amp; Physiotherapy Clinic · Lahore</div>
      </footer>

    </main>
  );
}