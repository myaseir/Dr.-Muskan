import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/conditions", label: "Conditions" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book Appointment" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .footer-root {
          background: #111827;
          font-family: 'DM Sans', sans-serif;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .footer-main {
          max-width: 1280px;
          margin: 0 auto;
          padding: 72px 24px 56px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }

        @media (min-width: 768px) {
          .footer-main {
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 40px;
          }
        }

        /* Brand */
        .footer-brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.03em;
          line-height: 1;
          margin-bottom: 6px;
        }

        .footer-brand-sub {
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          font-weight: 400;
          margin-bottom: 20px;
        }

        .footer-brand-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.85;
          color: rgba(255,255,255,0.4);
          max-width: 260px;
        }

        .footer-divider {
          width: 28px;
          height: 1px;
          background: #0d756d;
          margin: 20px 0;
          opacity: 0.6;
        }

        /* Columns */
        .footer-col-heading {
          font-size: 9.5px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          font-weight: 500;
          margin-bottom: 24px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
          position: relative;
        }

        .footer-links a:hover { color: #5ecdc6; }

        address {
          font-style: normal;
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          line-height: 1.9;
          letter-spacing: 0.02em;
        }

        .footer-contact-item {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-contact-item a {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }

        .footer-contact-item a:hover { color: #5ecdc6; }

        /* Bottom bar */
        .footer-bottom {
          max-width: 1280px;
          margin: 0 auto;
          padding: 24px 24px 28px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .footer-copy {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          font-weight: 400;
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-main">

          {/* Brand */}
          <div>
            <div className="footer-brand-name">Dr. Muskan</div>
            <div className="footer-brand-sub">Pain Management &amp; Physiotherapy</div>
            <div className="footer-divider" />
            <p className="footer-brand-desc">
              Evidence-based physiotherapy and pain management in Lahore. 
              Restoring movement, reducing pain, and empowering recovery.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer-col-heading">Navigation</p>
            <ul className="footer-links">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <p className="footer-col-heading">Clinic</p>
            <address>
              28A, Jail Road<br />
              Lahore, Pakistan
            </address>
            <div style={{ marginTop: "20px" }}>
              <p className="footer-col-heading">Hours</p>
              <address>
                Mon – Sat<br />
                9:00 AM – 6:00 PM
              </address>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-col-heading">Contact</p>
            <div className="footer-contact-item">
              <a href="mailto:71muskanjamil@gmail.com">71muskanjamil@gmail.com</a>
              <a href="tel:+923000000000">+92 300 000 0000</a>
            </div>
            <div style={{ marginTop: "28px" }}>
              <p className="footer-col-heading">Follow</p>
              <div className="footer-contact-item">
                <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © {currentYear} Dr. Muskan — Pain Management &amp; Physiotherapy Clinic · Lahore
          </span>
        </div>
      </footer>
    </>
  );
}