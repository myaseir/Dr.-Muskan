import Link from "next/link";

const conditions = [
  {
    id: "01",
    title: "Chronic Back & Neck Pain",
    specialty: "Spine & Disc Care",
    desc: "Targeted therapy for cervical and lumbar spine disorders including disc herniation, postural dysfunction, and degenerative conditions.",
    tags: ["Disc Herniation", "Postural Rehab", "Spinal Mobilisation"],
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Sciatica & Nerve Compression",
    specialty: "Pain Management",
    desc: "Comprehensive nerve-root decompression protocols combining manual therapy, dry needling, and graded exercise for lasting relief.",
    tags: ["Nerve Compression", "Dry Needling", "Radiculopathy"],
    img: "https://images.unsplash.com/photo-1597457335790-94a11f26487e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Sports & Ligament Injuries",
    specialty: "Physical Rehabilitation",
    desc: "From acute sprains to ligament reconstruction recovery — evidence-based sports physiotherapy to return you to peak performance.",
    tags: ["ACL Rehab", "Taping", "Return to Sport"],
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Arthritis & Joint Stiffness",
    specialty: "Rheumatology & Geriatric Care",
    desc: "Structured mobility and strength programs to reduce pain, preserve joint function, and improve independence in daily activities.",
    tags: ["Osteoarthritis", "Joint Mobilisation", "Functional Training"],
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Post-Stroke Rehabilitation",
    specialty: "Neurological Recovery",
    desc: "Intensive neurological rehab targeting gait retraining, upper limb recovery, and balance restoration after stroke or brain injury.",
    tags: ["Gait Training", "Balance Rehab", "Stroke Care"],
    img: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Frozen Shoulder & Post-Op Rehab",
    specialty: "Orthopedic Physiotherapy",
    desc: "Adhesive capsulitis treatment and post-surgical rehabilitation restoring full range of motion, strength, and functional movement.",
    tags: ["Adhesive Capsulitis", "Post-Surgery", "Shoulder Mobility"],
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "07",
    title: "Pelvic Floor & Women's Health",
    specialty: "Women's Physiotherapy",
    desc: "Specialised pelvic floor rehabilitation for incontinence, pelvic pain, prenatal preparation, and postnatal recovery.",
    tags: ["Pelvic Floor", "Prenatal", "Postnatal Rehab"],
    img: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "08",
    title: "Headaches & TMJ Disorders",
    specialty: "Cervicogenic Pain",
    desc: "Manual therapy and targeted exercise for cervicogenic headaches, migraines, and temporomandibular joint dysfunction.",
    tags: ["Cervicogenic", "TMJ", "Manual Therapy"],
    img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ConditionsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#f8f7f4", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

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

        /* ── Hero ── */
        .c-hero {
          position: relative;
          background: #0b1f1e;
          padding: 140px 24px 80px;
          text-align: center;
          overflow: hidden;
        }

        .c-hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 50% -10%, rgba(13,117,109,0.4) 0%, transparent 70%);
        }

        .c-hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .c-eyebrow {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-weight: 500;
          color: rgba(255,255,255,0.45);
          margin-bottom: 24px;
        }

        .c-eyebrow::before, .c-eyebrow::after {
          content: '';
          width: 24px;
          height: 1px;
          background: rgba(255,255,255,0.2);
        }

        .c-hero-title {
          position: relative;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(38px, 7vw, 80px);
          font-weight: 600;
          line-height: 1.08;
          color: #fff;
          letter-spacing: -0.01em;
          margin-bottom: 20px;
        }

        .c-hero-title em {
          font-style: italic;
          color: #5ecdc6;
        }

        .c-hero-sub {
          position: relative;
          max-width: 520px;
          margin: 0 auto 40px;
          font-size: clamp(14px, 1.8vw, 16px);
          font-weight: 300;
          color: rgba(255,255,255,0.5);
          line-height: 1.8;
          letter-spacing: 0.01em;
        }

        /* ── Breadcrumb ── */
        .breadcrumb {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.05em;
          margin-top: 8px;
        }

        .breadcrumb a {
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: color 0.2s;
        }

        .breadcrumb a:hover { color: #5ecdc6; }

        .breadcrumb-sep { opacity: 0.3; }

        /* ── Grid ── */
        .c-grid-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 24px 100px;
        }

        .c-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2px;
          background: var(--border);
        }

        @media (min-width: 640px) {
          .c-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1024px) {
          .c-grid { grid-template-columns: repeat(4, 1fr); }
        }

        /* ── Card ── */
        .c-card {
          position: relative;
          background: var(--cream);
          overflow: hidden;
          transition: background 0.3s;
        }

        .c-card:hover { background: #fff; }

        .c-card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
        }

        .c-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
          filter: grayscale(20%);
        }

        .c-card:hover .c-card-img img {
          transform: scale(1.04);
          filter: grayscale(0%);
        }

        .c-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11,31,30,0.6) 0%, transparent 55%);
        }

        .c-card-id {
          position: absolute;
          top: 12px;
          left: 14px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.08em;
        }

        .c-card-specialty-badge {
          position: absolute;
          bottom: 12px;
          left: 14px;
          font-size: 8.5px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #5ecdc6;
        }

        .c-card-body {
          padding: 20px 22px 24px;
        }

        .c-card-body h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 19px;
          font-weight: 600;
          font-style: italic;
          color: var(--ink);
          line-height: 1.25;
          margin-bottom: 10px;
        }

        .c-card-body p {
          font-size: 12.5px;
          font-weight: 300;
          line-height: 1.75;
          color: var(--muted);
          margin-bottom: 16px;
        }

        .c-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .c-tag {
          display: inline-block;
          padding: 3px 10px;
          border: 1px solid var(--border);
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--teal);
          border-radius: 20px;
        }

        /* Bottom rule */
        .c-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 100%;
          height: 2px;
          background: var(--teal);
          transition: right 0.4s ease;
        }

        .c-card:hover::after { right: 0; }

        /* ── CTA ── */
        .c-cta {
          background: var(--teal-dark);
          padding: 80px 24px;
          text-align: center;
        }

        .c-cta h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(26px, 4vw, 50px);
          font-style: italic;
          font-weight: 600;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .c-cta p {
          font-size: 14px;
          font-weight: 300;
          color: rgba(255,255,255,0.5);
          max-width: 460px;
          margin: 0 auto 40px;
          line-height: 1.8;
        }

        .c-cta p a {
          color: #5ecdc6;
          text-decoration: none;
        }

        .c-cta p a:hover { text-decoration: underline; }

        .btn-primary {
          display: inline-block;
          padding: 14px 34px;
          background: #5ecdc6;
          color: #0b1f1e;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 2px;
          transition: background 0.25s, transform 0.15s;
        }

        .btn-primary:hover { background: #4db8b1; transform: translateY(-1px); }
        .btn-primary:active { transform: translateY(0); }

        /* ── Footer strip ── */
        .c-footer-strip {
          background: var(--ink);
          padding: 24px;
          text-align: center;
        }

        .c-footer-strip p {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }

        .c-footer-strip span {
          color: rgba(255,255,255,0.4);
        }

        /* ── Schema / SEO metadata ── */
        /* handled via JSON-LD below */
      `}</style>

      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Dr. Muskan — Pain Management & Physiotherapy",
            "url": "https://drmuskan.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "28A, Jail Road",
              "addressLocality": "Lahore",
              "addressCountry": "PK"
            },
            "medicalSpecialty": [
              "Physiotherapy",
              "Pain Management",
              "Orthopedic Surgery",
              "Neurology"
            ]
          })
        }}
      />

      {/* ── Hero ── */}
      <section className="c-hero" aria-labelledby="conditions-heading">
        <div className="c-hero-bg" aria-hidden="true" />
        <div className="c-hero-grid" aria-hidden="true" />

        <p className="c-eyebrow">Clinical Specialties</p>
        <h1 className="c-hero-title" id="conditions-heading">
          Conditions We <em>Treat</em>
        </h1>
        <p className="c-hero-sub">
          Evidence-based non-surgical physiotherapy and advanced pain management protocols — each tailored to your diagnosis, goals, and lifestyle.
        </p>

        {/* Breadcrumb for SEO */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="breadcrumb-sep" aria-hidden="true">›</span>
          <span aria-current="page">Conditions</span>
        </nav>
      </section>

      {/* ── Conditions Grid ── */}
      <section className="c-grid-section" aria-label="Conditions treated">
        <div className="c-grid">
          {conditions.map((c) => (
            <article className="c-card" key={c.id}>
              {/* Image */}
              <div className="c-card-img">
                <img
                  src={c.img}
                  alt={`${c.title} treatment at Dr. Muskan clinic, Lahore`}
                  loading="lazy"
                  width={400}
                  height={300}
                />
                <div className="c-card-img-overlay" aria-hidden="true" />
                <span className="c-card-id" aria-hidden="true">{c.id}</span>
                <span className="c-card-specialty-badge">{c.specialty}</span>
              </div>

              {/* Body */}
              <div className="c-card-body">
                <h2>{c.title}</h2>
                <p>{c.desc}</p>
                <div className="c-tags" aria-label="Treatment tags">
                  {c.tags.map((t) => (
                    <span className="c-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="c-cta" aria-labelledby="cta-heading">
        <h2 id="cta-heading">Begin Your Recovery Today</h2>
        <p>
          Visit Dr. Muskan at <a href="https://maps.google.com/?q=28A+Jail+Road+Lahore" target="_blank" rel="noopener noreferrer">28A, Jail Road, Lahore</a> or send your records to{" "}
          <a href="mailto:71muskanjamil@gmail.com">71muskanjamil@gmail.com</a> ahead of your appointment.
        </p>
        <Link href="/book" className="btn-primary">
          Book a Consultation →
        </Link>
      </section>

      {/* Footer strip */}
      <div className="c-footer-strip">
        <p>
          Platform by <span>Glacia Labs</span>
        </p>
      </div>
    </main>
  );
}