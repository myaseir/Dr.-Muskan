import Link from "next/link";

const treatments = [
  {
    id: "01",
    category: "Manual Therapy",
    tagline: "Hands-on joint mobilisation & structural work",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    services: [
      { name: "Joint Mobilisation", detail: "Passive movement techniques applied to spinal and peripheral joints to restore range of motion and reduce stiffness." },
      { name: "Myofascial Release", detail: "Sustained pressure to eliminate fascial restrictions and relieve deep-seated muscular tension throughout the body." },
      { name: "Spinal Manipulation", detail: "Controlled, precise adjustments targeting vertebral alignment, neural function, and lumbar mobility." },
      { name: "Trigger Point Therapy", detail: "Ischemic compression protocols applied directly to hyper-irritable knots within skeletal muscle fibres." },
    ],
  },
  {
    id: "02",
    category: "Electrotherapy",
    tagline: "Targeted pain modulation & deep tissue stimulation",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop",
    services: [
      { name: "TENS & EMS", detail: "Electrical nerve and muscle stimulation to suppress active pain pathways and prevent post-injury muscle atrophy." },
      { name: "Therapeutic Ultrasound", detail: "High-frequency acoustic waves providing deep cellular heating to accelerate soft tissue repair." },
      { name: "Dry Needling", detail: "Intramuscular stimulation using ultra-fine needles to deactivate trigger points and restore muscle length." },
      { name: "Thermal Modalities", detail: "Alternating heat and cold applications calibrated to reduce inflammation and optimise tissue vasodilation." },
    ],
  },
  {
    id: "03",
    category: "Therapeutic Exercise",
    tagline: "Kinetic re-education & evidence-based rehabilitation",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    services: [
      { name: "Core Stabilisation", detail: "Biomechanical conditioning to reinforce pelvic alignment and support deep lumbar spinal stability." },
      { name: "Postural Correction", detail: "Targeted strengthening of postural muscle chains to reverse forward-head posture and spinal imbalances." },
      { name: "Range of Motion", detail: "Progressive active and passive flexibility protocols to eliminate restrictions from frozen shoulder or post-surgery." },
      { name: "Balance & Gait Training", detail: "Proprioceptive training optimised for full sensory recovery during neurological and post-stroke rehabilitation." },
    ],
  },
];

export default function TreatmentsPage() {
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

        /* Hero */
        .t-hero {
          position: relative;
          background: #0b1f1e;
          padding: 140px 24px 88px;
          text-align: center;
          overflow: hidden;
        }
        .t-hero-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 70% 55% at 50% -5%, rgba(13,117,109,0.38) 0%, transparent 68%);
        }
        .t-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .t-eyebrow {
          position: relative;
          display: inline-flex; align-items: center; gap: 12px;
          font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
          font-weight: 500; color: rgba(255,255,255,0.4); margin-bottom: 22px;
        }
        .t-eyebrow::before, .t-eyebrow::after {
          content: ''; width: 24px; height: 1px; background: rgba(255,255,255,0.18);
        }
        .t-hero h1 {
          position: relative;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 7vw, 84px);
          font-weight: 600; line-height: 1.06; letter-spacing: -0.01em; color: #fff;
          margin-bottom: 20px;
        }
        .t-hero h1 em { font-style: italic; color: #5ecdc6; }
        .t-hero-sub {
          position: relative;
          max-width: 500px; margin: 0 auto 36px;
          font-size: clamp(14px, 1.8vw, 16px); font-weight: 300;
          color: rgba(255,255,255,0.48); line-height: 1.8;
        }
        .breadcrumb {
          position: relative;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-size: 11px; color: rgba(255,255,255,0.3);
        }
        .breadcrumb a { color: rgba(255,255,255,0.38); text-decoration: none; transition: color 0.2s; }
        .breadcrumb a:hover { color: #5ecdc6; }

        /* Section */
        .t-section { max-width: 1280px; margin: 0 auto; padding: 88px 24px 100px; }

        /* Treatment Block */
        .t-block {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          padding-bottom: 80px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 80px;
        }
        .t-block:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }

        @media (min-width: 900px) {
          .t-block { grid-template-columns: 5fr 7fr; gap: 72px; align-items: start; }
          .t-block.reverse { direction: rtl; }
          .t-block.reverse > * { direction: ltr; }
        }

        /* Image */
        .t-img-wrap {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
          background: var(--border);
        }
        .t-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.7s ease;
          filter: grayscale(15%);
        }
        .t-block:hover .t-img-wrap img { transform: scale(1.03); filter: grayscale(0%); }

        .t-img-badge {
          position: absolute; top: 16px; left: 16px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px; font-weight: 600;
          color: rgba(255,255,255,0.18); line-height: 1;
          pointer-events: none;
        }

        /* Content */
        .t-content { padding-top: 4px; }

        .t-cat-label {
          font-size: 9.5px; letter-spacing: 0.3em; text-transform: uppercase;
          font-weight: 500; color: var(--teal); margin-bottom: 12px; display: block;
        }
        .t-content h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 3.5vw, 46px);
          font-style: italic; font-weight: 600;
          color: var(--ink); line-height: 1.15; margin-bottom: 8px;
        }
        .t-tagline {
          font-size: 12px; font-weight: 300; color: var(--muted);
          letter-spacing: 0.04em; margin-bottom: 36px;
          padding-bottom: 28px; border-bottom: 1px solid var(--border);
        }

        /* Services grid */
        .t-services {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
        }
        @media (min-width: 560px) {
          .t-services { grid-template-columns: 1fr 1fr; }
        }

        .t-service {
          padding: 18px 0 18px;
          border-bottom: 1px solid var(--border);
          position: relative;
          transition: padding-left 0.25s;
        }
        .t-service::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0;
          width: 2px; background: var(--teal);
          transform: scaleY(0); transform-origin: top;
          transition: transform 0.3s ease;
        }
        .t-service:hover { padding-left: 12px; }
        .t-service:hover::before { transform: scaleY(1); }

        .t-service h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px; font-weight: 600; font-style: italic;
          color: var(--ink); margin-bottom: 6px;
          transition: color 0.2s;
        }
        .t-service:hover h3 { color: var(--teal); }

        .t-service p {
          font-size: 12.5px; font-weight: 300; line-height: 1.75; color: var(--muted);
        }

        .t-inquire {
          display: inline-flex; align-items: center; gap: 0; margin-top: 32px;
          font-size: 10px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; color: var(--ink);
          text-decoration: none; transition: color 0.2s;
        }
        .t-inquire-line {
          display: inline-block; height: 1px; width: 36px;
          background: currentColor; margin-left: 14px;
          transition: width 0.4s ease;
        }
        .t-inquire:hover { color: var(--teal); }
        .t-inquire:hover .t-inquire-line { width: 56px; }

        /* CTA */
        .t-cta {
          background: var(--teal-dark);
          padding: 88px 24px; text-align: center;
        }
        .t-cta h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 4vw, 54px);
          font-style: italic; font-weight: 600; color: #fff;
          line-height: 1.15; margin-bottom: 16px;
        }
        .t-cta p {
          font-size: 14px; font-weight: 300;
          color: rgba(255,255,255,0.48); max-width: 460px;
          margin: 0 auto 44px; line-height: 1.85;
        }
        .btn-primary {
          display: inline-block; padding: 14px 34px;
          background: #5ecdc6; color: #0b1f1e;
          font-size: 10.5px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase;
          text-decoration: none; border-radius: 2px;
          transition: background 0.25s, transform 0.15s;
        }
        .btn-primary:hover { background: #4db8b1; transform: translateY(-1px); }
        .btn-primary:active { transform: translateY(0); }

        .t-footer-strip {
          background: var(--ink); padding: 22px;
          text-align: center;
          font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }
        .t-footer-strip span { color: rgba(255,255,255,0.38); }
      `}</style>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Dr. Muskan — Pain Management & Physiotherapy",
            "url": "https://drmuskan.com",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Physiotherapy & Pain Management Treatments",
              "itemListElement": treatments.map((t) => ({
                "@type": "MedicalTherapy",
                "name": t.category,
                "description": t.tagline,
              })),
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "28A, Jail Road",
              "addressLocality": "Lahore",
              "addressCountry": "PK",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="t-hero" aria-labelledby="treatments-heading">
        <div className="t-hero-bg" aria-hidden="true" />
        <div className="t-hero-grid" aria-hidden="true" />
        <p className="t-eyebrow">Clinical Services</p>
        <h1 id="treatments-heading">
          Our Treatment <em>Offerings</em>
        </h1>
        <p className="t-hero-sub">
          Evidence-based physiotherapy modalities designed to eliminate pain, restore mobility, and rebuild strength — tailored to each patient's unique diagnosis.
        </p>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">Treatments</span>
        </nav>
      </section>

      {/* Treatment Blocks */}
      <section className="t-section" aria-label="Treatment categories">
        {treatments.map((t, i) => (
          <div className={`t-block${i % 2 === 1 ? " reverse" : ""}`} key={t.id}>

            {/* Image */}
            <div className="t-img-wrap">
              <img
                src={t.image}
                alt={`${t.category} physiotherapy at Dr. Muskan clinic, Lahore`}
                loading={i === 0 ? "eager" : "lazy"}
                width={480}
                height={640}
              />
              <span className="t-img-badge" aria-hidden="true">{t.id}</span>
            </div>

            {/* Content */}
            <div className="t-content">
              <span className="t-cat-label">Treatment Category {t.id}</span>
              <h2>{t.category}</h2>
              <p className="t-tagline">{t.tagline}</p>

              <div className="t-services">
                {t.services.map((s) => (
                  <div className="t-service" key={s.name}>
                    <h3>{s.name}</h3>
                    <p>{s.detail}</p>
                  </div>
                ))}
              </div>

              <Link href="/book" className="t-inquire" aria-label={`Book a consultation for ${t.category}`}>
                Book a Consultation
                <span className="t-inquire-line" aria-hidden="true" />
              </Link>
            </div>

          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="t-cta" aria-labelledby="cta-heading">
        <h2 id="cta-heading">Start With an Assessment</h2>
        <p>
          Every recovery plan begins with a thorough clinical evaluation. Visit Dr. Muskan at 28A, Jail Road, Lahore to take the first step.
        </p>
        <Link href="/book" className="btn-primary">Book an Appointment →</Link>
      </section>

      <div className="t-footer-strip">
        Platform by <span>Glacia Labs</span>
      </div>
    </main>
  );
}