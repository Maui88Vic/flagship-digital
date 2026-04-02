import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for marine business websites. $29/mo with custom domain, SEO, payment processing, and lead generation included. No setup fees.",
};

const features = [
  "Professional, custom-built website",
  "Custom domain included",
  "Mobile-responsive design",
  "SEO setup & structured data",
  "Payment processing",
  "Lead generation forms",
  "Accounting software compatible",
  "SSL certificate",
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-label="Pricing hero"
        style={{
          padding: "6rem var(--section-pad-x) 2rem",
          background:
            "linear-gradient(145deg, var(--color-midnight) 0%, var(--color-hull) 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <FadeIn>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              Pricing
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-hero)",
                fontWeight: 700,
                color: "var(--color-white)",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              One plan. Everything included.
            </h1>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--color-cream)",
                lineHeight: 1.75,
                maxWidth: "36rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Custom domain, SSL, payment processing, lead generation, SEO, and
              a mobile-responsive website — all for one simple price. No setup
              fees, no contracts, cancel anytime.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Card */}
      <SectionWrapper bg="hull" ariaLabel="Pricing">
        <FadeIn>
          <div
            style={{
              maxWidth: "36rem",
              margin: "0 auto",
              padding: "3rem 2.5rem",
              borderRadius: "var(--radius-lg)",
              border: "2px solid var(--color-brass)",
              backgroundColor: "var(--color-midnight)",
              boxShadow: "var(--shadow-card), var(--shadow-glow)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                gap: "0.25rem",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-hero)",
                  fontWeight: 500,
                  color: "var(--color-white)",
                }}
              >
                $29
              </span>
              <span
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--color-fog)",
                }}
              >
                /mo
              </span>
            </div>

            <p
              style={{
                fontSize: "var(--text-body)",
                color: "var(--color-fog)",
                lineHeight: 1.65,
                marginBottom: "2rem",
                maxWidth: "28rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Everything your marine business needs to get found, get paid, and
              grow — all in one plan.
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 2rem 0",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.75rem",
                textAlign: "left",
              }}
            >
              {features.map((feature) => (
                <li
                  key={feature}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.5rem",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-cream)",
                  }}
                >
                  <Check
                    size={16}
                    style={{
                      color: "var(--color-brass)",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <Button href="#" size="lg">
              Get Your Site Built <ArrowRight size={18} />
            </Button>

            <p
              style={{
                marginTop: "1rem",
                fontSize: "var(--text-xs)",
                color: "var(--color-slate)",
              }}
            >
              No setup fee · No contracts · Cancel anytime
            </p>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Bottom CTA */}
      <SectionWrapper bg="midnight" ariaLabel="Call to action">
        <div style={{ textAlign: "center", maxWidth: "36rem", margin: "0 auto" }}>
          <FadeIn>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 700,
                color: "var(--color-white)",
                marginBottom: "1rem",
              }}
            >
              Ready to get started?
            </h2>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--color-fog)",
                marginBottom: "2rem",
              }}
            >
              Full refund guarantee. No risk. Launch your site today.
            </p>
            <Button href="/" size="lg">
              Get Your Site Built <ArrowRight size={18} />
            </Button>
          </FadeIn>
        </div>
      </SectionWrapper>
    </>
  );
}
