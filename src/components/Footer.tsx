const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "/about" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: "var(--color-midnight)",
        borderTop: "1px solid var(--color-border)",
        padding: "3rem var(--section-pad-x) 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* Top row: logo + links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
            aria-label="Flagship Digital - go to top"
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: "var(--color-white)",
              }}
            >
              Flagship
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.125rem",
                color: "var(--color-brass)",
              }}
            >
              Digital
            </span>
          </a>

          {/* Links */}
          <nav aria-label="Footer navigation" style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-fog)",
                  textDecoration: "none",
                  transition: "color var(--transition-fast)",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "1px solid var(--color-border)", margin: 0 }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              color: "var(--color-slate)",
              margin: 0,
            }}
          >
            &copy; {currentYear} Flagship Digital. All rights reserved.
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              color: "var(--color-slate)",
              margin: 0,
            }}
          >
            Built for the marine industry.
          </p>

          {/* Social links placeholder */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                color: "var(--color-slate)",
              }}
            >
              Twitter
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                color: "var(--color-slate)",
              }}
            >
              LinkedIn
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
