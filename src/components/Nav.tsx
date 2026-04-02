"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(10, 22, 40, 0.95)" : "var(--color-midnight)",
        borderBottom: "1px solid var(--color-border)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background-color 250ms ease, backdrop-filter 250ms ease",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 var(--section-pad-x)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "4rem",
        }}
      >
        {/* Logo */}
        <a
          href="#main-content"
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
              fontSize: "1.25rem",
              color: "var(--color-white)",
            }}
          >
            Flagship
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "var(--color-brass)",
            }}
          >
            Digital
          </span>
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                fontWeight: 500,
                color: "var(--color-fog)",
                textDecoration: "none",
                transition: "color var(--transition-fast)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-fog)")}
            >
              {link.label}
            </a>
          ))}
          <Button href="#pricing" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            position: "relative",
            zIndex: 60,
          }}
        >
          <div style={{ width: "24px", height: "18px", position: "relative" }}>
            <span
              style={{
                display: "block",
                position: "absolute",
                height: "2px",
                width: "100%",
                backgroundColor: "var(--color-white)",
                borderRadius: "1px",
                left: 0,
                top: menuOpen ? "8px" : "0px",
                transform: menuOpen ? "rotate(45deg)" : "none",
                transition: "all 250ms ease",
              }}
            />
            <span
              style={{
                display: "block",
                position: "absolute",
                height: "2px",
                width: "100%",
                backgroundColor: "var(--color-white)",
                borderRadius: "1px",
                left: 0,
                top: "8px",
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 250ms ease",
              }}
            />
            <span
              style={{
                display: "block",
                position: "absolute",
                height: "2px",
                width: "100%",
                backgroundColor: "var(--color-white)",
                borderRadius: "1px",
                left: 0,
                top: menuOpen ? "8px" : "16px",
                transform: menuOpen ? "rotate(-45deg)" : "none",
                transition: "all 250ms ease",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "var(--color-midnight)",
            zIndex: 55,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h3)",
                fontWeight: 600,
                color: "var(--color-white)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <Button href="#pricing" size="lg" onClick={() => setMenuOpen(false)}>
            Get Started
          </Button>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
