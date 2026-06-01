import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8f7f4", fontFamily: "'DM Sans', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500&display=swap');

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

        /* ─── HERO ─── */
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 100px 24px 64px;
          overflow: hidden;
          background: #0b1f1e;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(13,117,109,0.35) 0%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 80% 100%, rgba(13,117,109,0.18) 0%, transparent 60%);
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .hero-eyebrow {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          margin-bottom: 28px;
        }

        .hero-eyebrow::before, .hero-eyebrow::after {
          content: '';
          width: 28px;
          height: 1px;
          background: rgba(255,255,255,0.25);
        }

        .hero-title {
          position: relative;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(42px, 8vw, 96px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.01em;
          color: #fff;
          margin-bottom: 20px;
        }

        .hero-title em {
          font-style: italic;
          color: #5ecdc6;
        }

        .hero-sub {
          position: relative;
          font-size: clamp(14px, 2vw, 17px);
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          max-width: 420px;
          line-height: 1.75;
          margin-bottom: 48px;
          letter-spacing: 0.01em;
        }

        .hero-actions {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
        }

        .btn-primary {
          display: inline-block;
          padding: 14px 32px;
          background: var(--teal);
          color: #fff;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 2px;
          transition: background 0.25s, transform 0.15s;
        }
        .btn-primary:hover { background: var(--teal-dark); transform: translateY(-1px); }

        .btn-ghost {
          display: inline-block;
          padding: 13px 28px;
          border: 1px solid rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.75);
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 2px;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: #fff; }

        .hero-scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.3);
          font-size: 9px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
        }

        .scroll-line {
          width: 1px;
          height: 36px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.15); }
        }

        /* ─── PHILOSOPHY ─── */
        .philosophy {
          padding: 100px 24px;
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
        }

        .section-rule {
          width: 1px;
          height: 56px;
          background: var(--teal);
          margin: 0 auto 28px;
          opacity: 0.4;
        }

        .section-label {
          font-size: 9.5px;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          font-weight: 500;
          color: var(--teal);
          margin-bottom: 24px;
        }

        .philosophy h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 5vw, 58px);
          font-weight: 600;
          font-style: italic;
          color: var(--ink);
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin-bottom: 28px;
        }

        .philosophy p {
          font-size: 17px;
          font-weight: 300;
          line-height: 1.85;
          color: var(--muted);
          font-style: italic;
        }

        /* ─── STATS BAR ─── */
        .stats-bar {
          background: var(--ink);
          padding: 40px 24px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background-color: rgba(255,255,255,0.08);
        }

        @media (min-width: 640px) {
          .stats-bar { grid-template-columns: repeat(4, 1fr); }
        }

        .stat-cell {
          background: var(--ink);
          padding: 28px 24px;
          text-align: center;
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px;
          font-weight: 600;
          color: #5ecdc6;
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          font-weight: 400;
        }

        /* ─── SERVICES ─── */
        .services {
          padding: 100px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .services-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 72px;
        }

        .services-header h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(30px, 4vw, 50px);
          font-weight: 600;
          font-style: italic;
          color: var(--ink);
          margin-top: 16px;
        }

        .service-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2px;
          background: var(--border);
        }

        @media (min-width: 768px) {
          .service-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .service-card {
          background: var(--cream);
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
          cursor: default;
        }

        .service-card:hover { background: #fff; }

        .service-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 100%;
          height: 2px;
          background: var(--teal);
          transition: right 0.4s ease;
        }

        .service-card:hover::before { right: 0; }

        .service-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 600;
          color: var(--border);
          line-height: 1;
          margin-bottom: 20px;
          transition: color 0.3s;
        }

        .service-card:hover .service-num { color: var(--teal-light); }

        .service-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 600;
          font-style: italic;
          color: var(--ink);
          margin-bottom: 12px;
        }

        .service-card p {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.8;
          color: var(--muted);
          margin-bottom: 24px;
        }

        .service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          display: inline-block;
          padding: 4px 12px;
          border: 1px solid var(--border);
          font-size: 9.5px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--teal);
          border-radius: 20px;
          font-weight: 500;
        }

        /* ─── APPROACH ─── */
        .approach {
          padding: 100px 24px;
          background: #fff;
        }

        .approach-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
        }

        @media (min-width: 900px) {
          .approach-inner { grid-template-columns: 1fr 1fr; gap: 80px; }
        }

        .approach-text h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 3.5vw, 46px);
          font-style: italic;
          font-weight: 600;
          color: var(--ink);
          line-height: 1.25;
          margin-bottom: 24px;
        }

        .approach-text p {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.9;
          color: var(--muted);
          margin-bottom: 16px;
        }

        .approach-steps {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .step {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .step-num {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--teal-light);
          color: var(--teal);
          font-size: 12px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          letter-spacing: 0.05em;
        }

        .step-content h4 {
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
          margin-bottom: 4px;
        }

        .step-content p {
          font-size: 13.5px;
          font-weight: 300;
          color: var(--muted);
          line-height: 1.7;
          margin: 0;
        }

        /* ─── CONTACT STRIP ─── */
        .contact-strip {
          background: var(--teal-dark);
          padding: 80px 24px;
          text-align: center;
        }

        .contact-strip h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 4vw, 52px);
          font-style: italic;
          font-weight: 600;
          color: #fff;
          margin-bottom: 16px;
        }

        .contact-strip p {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          margin-bottom: 48px;
          letter-spacing: 0.02em;
        }

        .contact-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
        }

        .contact-card {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          padding: 20px 28px;
          text-align: left;
          min-width: 220px;
          transition: background 0.2s;
        }

        .contact-card:hover { background: rgba(255,255,255,0.12); }

        .contact-card-label {
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 8px;
          font-weight: 500;
        }

        .contact-card-value {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.85);
          line-height: 1.5;
        }

        .contact-card a {
          color: #5ecdc6;
          text-decoration: none;
        }
        .contact-card a:hover { text-decoration: underline; }

        /* ─── FOOTER ─── */
        .footer {
          background: var(--ink);
          padding: 32px 24px;
          text-align: center;
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

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <p className="hero-eyebrow">Lahore · Est. 2020</p>
        <h1 className="hero-title">
          Expert Care for <br/>
          <em>Pain & Recovery</em>
        </h1>
        <p className="hero-sub">
          Evidence-based physiotherapy and pain management tailored to restore your movement and quality of life.
        </p>
        <div className="hero-actions">
          <Link href="/book" className="btn-primary">Book Appointment</Link>
          <Link href="/treatments" className="btn-ghost">Our Treatments</Link>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="philosophy">
        <div className="section-rule" />
        <p className="section-label">Our Philosophy</p>
        <h2>Heal Deeper. <br/> Move Freer.</h2>
        <p>
          "We focus on understanding the root cause of your pain — not just the symptoms. Through personalised assessment and evidence-based treatment, we restore function, reduce discomfort, and empower you to live fully."
        </p>
      </section>

      {/* ── STATS ── */}
      <div className="stats-bar">
        {[
          { num: "5+", label: "Years of Practice" },
          { num: "2k+", label: "Patients Treated" },
          { num: "15+", label: "Conditions Managed" },
          { num: "98%", label: "Patient Satisfaction" },
        ].map((s) => (
          <div className="stat-cell" key={s.label}>
            <div className="stat-number">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── SERVICES ── */}
      <section className="services">
        <div className="services-header">
          <p className="section-label">What We Offer</p>
          <h2>Specialised Treatment Areas</h2>
        </div>
        <div className="service-grid">
          {[
            {
              num: "01",
              title: "Pain Management",
              desc: "Targeted therapy for acute and chronic pain using advanced manual techniques, dry needling, and therapeutic exercise.",
              tags: ["Chronic Pain", "Dry Needling", "Manual Therapy"],
            },
            {
              num: "02",
              title: "Physiotherapy",
              desc: "Comprehensive rehabilitation programs designed to restore mobility, strength, and function after injury or surgery.",
              tags: ["Rehabilitation", "Post-Surgery", "Mobility"],
            },
            {
              num: "03",
              title: "Sports Injury",
              desc: "Specialised care for athletes — from acute injury management to performance recovery and injury prevention.",
              tags: ["Sports Rehab", "Taping", "Prevention"],
            },
            {
              num: "04",
              title: "Spinal Care",
              desc: "Evidence-based treatment for back pain, disc disorders, sciatica, and cervical spine conditions.",
              tags: ["Back Pain", "Sciatica", "Disc Care"],
            },
            {
              num: "05",
              title: "Neurological Rehab",
              desc: "Supportive therapy for stroke recovery, Parkinson's, and other neurological conditions affecting movement.",
              tags: ["Stroke Care", "Balance", "Gait Training"],
            },
            {
              num: "06",
              title: "Women's Health",
              desc: "Pelvic floor therapy, prenatal and postnatal physiotherapy tailored specifically for women at every stage.",
              tags: ["Pelvic Floor", "Prenatal", "Postnatal"],
            },
          ].map((s) => (
            <div className="service-card" key={s.num}>
              <div className="service-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="approach">
        <div className="approach-inner">
          <div className="approach-text">
            <p className="section-label" style={{ textAlign: "left", marginBottom: "16px" }}>How We Work</p>
            <h2>A Patient-First Approach to Healing</h2>
            <p>
              Dr. Muskan combines clinical expertise with genuine compassion. Every treatment plan is built around you — your lifestyle, your goals, and your specific condition.
            </p>
            <p>
              Located in the heart of Lahore, the clinic provides a calm, professional environment where recovery is taken seriously.
            </p>
            <Link href="/about" className="btn-primary" style={{ marginTop: "8px", display: "inline-block" }}>
              About Dr. Muskan
            </Link>
          </div>
          <div className="approach-steps">
            {[
              { num: "01", title: "Comprehensive Assessment", desc: "A thorough initial evaluation to understand your condition, history, and goals." },
              { num: "02", title: "Personalised Treatment Plan", desc: "A custom protocol built around your diagnosis, lifestyle, and recovery timeline." },
              { num: "03", title: "Hands-On Therapy", desc: "Evidence-based manual techniques, exercise prescription, and modalities." },
              { num: "04", title: "Progress & Prevention", desc: "Continuous monitoring with a long-term strategy to prevent recurrence." },
            ].map((step) => (
              <div className="step" key={step.num}>
                <div className="step-num">{step.num}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-strip">
        <h2>Begin Your Recovery Today</h2>
        <p>Reach out to book a consultation or ask us anything.</p>
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-card-label">Location</div>
            <div className="contact-card-value">28A, Jail Road<br />Lahore, Pakistan</div>
          </div>
          <div className="contact-card">
            <div className="contact-card-label">Email</div>
            <div className="contact-card-value">
              <a href="mailto:71muskanjamil@gmail.com">71muskanjamil@gmail.com</a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-card-label">Hours</div>
            <div className="contact-card-value">Mon – Sat<br />9:00 AM – 6:00 PM</div>
          </div>
        </div>
        <Link href="/book" className="btn-primary" style={{ background: "#5ecdc6", color: "#0b1f1e" }}>
          Book an Appointment
        </Link>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-brand">Dr. Muskan</div>
        <div className="footer-sub">Pain Management &amp; Physiotherapy Clinic · Lahore</div>
      </footer>

    </main>
  );
}