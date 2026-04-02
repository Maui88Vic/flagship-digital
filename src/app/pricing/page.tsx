import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for marine business websites. Starting at $29/mo with custom domain, SEO, and payment processing included. No setup fees.",
};

const tiers = [
  {
    name: "Starter",
    price: "29",
    description: "Everything you need to get online and start getting found.",
    features: [
      "Professional 5-page website",
      "Custom domain included",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form",
      "SSL certificate",
      "Monthly performance report",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "69",
    description: "For businesses ready to grow. Payments, SEO, and more.",
    features: [
      "Everything in Starter, plus:",
      "Payment processing",
      "Quote request forms",
      "Advanced SEO & JSON-LD",
      "Blog with CMS",
      "QuickBooks / Wave integration",
      "Google Business Profile sync",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "119",
    description: "Full-service digital presence for established operations.",
    features: [
      "Everything in Professional, plus:",
      "Unlimited pages",
      "Multi-location support",
      "Advanced accounting integrations",
      "Custom booking system",
      "Photo gallery with lightbox",
      "Dedicated account manager",
      "Monthly strategy call",
    ],
    popular: false,
  },
];

const comparisonRows = [
  { feature: "Custom domain", starter: true, pro: true, enterprise: true },
  { feature: "SSL certificate", starter: true, pro: true, enterprise: true },
  { feature: "Mobile-responsive", starter: true, pro: true, enterprise: true },
  { feature: "Basic SEO", starter: true, pro: true, enterprise: true },
  { feature: "Contact form", starter: true, pro: true, enterprise: true },
  { feature: "Performance reports", starter: "Monthly", pro: "Weekly", enterprise: "Weekly" },
  { feature: "Number of pages", starter: "5", pro: "15", enterprise: "Unlimited" },
  { feature: "Payment processing", starter: false, pro: true, enterprise: true },
  { feature: "Quote request forms", starter: false, pro: true, enterprise: true },
  { feature: "Advanced SEO & JSON-LD", starter: false, pro: true, enterprise: true },
  { feature: "Blog / CMS", starter: false, pro: true, enterprise: true },
  { feature: "Accounting integrations", starter: false, pro: "QuickBooks, Wave", enterprise: "Full suite" },
  { feature: "Google Business sync", starter: false, pro: true, enterprise: true },
  { feature: "Multi-location", starter: false, pro: false, enterprise: true },
  { feature: "Custom booking system", starter: false, pro: false, enterprise: true },
  { feature: "Photo gallery", starter: false, pro: false, enterprise: true },
  { feature: "Account manager", starter: false, pro: false, enterprise: "Dedicated" },
  { feature: "Strategy calls", starter: false, pro: false, enterprise: "Monthly" },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <Check size={16} style={{ color: "var(--color-signal)" }} aria-label="Included" />
    );
  }
  if (value === false) {
    return (
      <span style={{ color: "var(--color-slate)" }} aria-label="Not included">
        —
      </span>
    );
  }
  return (
    <span style={{ color: "var(--color-chrome)", fontSize: "var(--text-sm)" }}>
      {value}
    </span>
  );
}

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
              Simple pricing. No surprises.
            </h1>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--color-chrome)",
                lineHeight: 1.75,
                maxWidth: "36rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Every plan includes a custom domain, SSL, and mobile-responsive
              design. No setup fees, no contracts, cancel anytime.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <SectionWrapper bg="hull" ariaLabel="Pricing tiers">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            alignItems: "stretch",
          }}
        >
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.12}>
              <div
                style={{
                  position: "relative",
                  padding: "2.5rem 2rem",
                  borderRadius: "var(--radius-lg)",
                  border: tier.popular
                    ? "2px solid var(--color-signal)"
                    : "1px solid var(--color-border-light)",
                  backgroundColor: "var(--color-midnight)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: tier.popular
                    ? "var(--shadow-card), var(--shadow-glow)"
                    : "var(--shadow-card)",
                }}
              >
                {tier.popular && (
                  <span
                    className="badge-popular"
                    style={{
                      position: "absolute",
                      top: "-0.75rem",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    Most Popular
                  </span>
                )}

                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h3)",
                    fontWeight: 600,
                    color: "var(--color-white)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {tier.name}
                </h2>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
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
                    ${tier.price}
                  </span>
                  <span style={{ fontSize: "var(--text-sm)", color: "var(--color-fog)" }}>
                    /mo
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-fog)",
                    lineHeight: 1.65,
                    marginBottom: "1.5rem",
                  }}
                >
                  {tier.description}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 2rem 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    flex: 1,
                  }}
                >
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        fontSize: "var(--text-sm)",
                        color: "var(--color-chrome)",
                      }}
                    >
                      <Check
                        size={16}
                        style={{ color: "var(--color-signal)", flexShrink: 0, marginTop: "2px" }}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button href="#" variant={tier.popular ? "primary" : "secondary"} size="lg">
                  Get Started <ArrowRight size={16} />
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Comparison Table */}
      <SectionWrapper bg="midnight" ariaLabel="Feature comparison">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
              Compare plans
            </h2>
          </FadeIn>
        </div>

        <FadeIn>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "600px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "1rem",
                      borderBottom: "1px solid var(--color-border-light)",
                      color: "var(--color-fog)",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "var(--text-sm)",
                    }}
                  >
                    Feature
                  </th>
                  {["Starter", "Professional", "Enterprise"].map((name) => (
                    <th
                      key={name}
                      style={{
                        textAlign: "center",
                        padding: "1rem",
                        borderBottom: "1px solid var(--color-border-light)",
                        color: "var(--color-white)",
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        fontSize: "var(--text-body)",
                      }}
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td
                      style={{
                        padding: "0.75rem 1rem",
                        borderBottom: "1px solid var(--color-border)",
                        color: "var(--color-chrome)",
                        fontSize: "var(--text-sm)",
                      }}
                    >
                      {row.feature}
                    </td>
                    {[row.starter, row.pro, row.enterprise].map((val, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "0.75rem 1rem",
                          borderBottom: "1px solid var(--color-border)",
                          textAlign: "center",
                        }}
                      >
                        <CellValue value={val} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Bottom CTA */}
      <SectionWrapper bg="hull" ariaLabel="Call to action">
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
