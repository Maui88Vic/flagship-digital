import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FadeIn } from "@/components/FadeIn";
import { Anchor, Users, Globe, Zap } from "lucide-react";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Flagship Digital is the digital platform built exclusively for marine service providers. Learn about our mission, team, and why we exist.",
};

const values = [
  {
    icon: Anchor,
    title: "Marine-First",
    description:
      "Every feature, template, and integration is designed specifically for marine businesses. We don't do generic — we do boats.",
  },
  {
    icon: Zap,
    title: "Speed to Launch",
    description:
      "Your site goes live in 24 hours, not weeks. We handle the technical complexity so you can focus on your business.",
  },
  {
    icon: Users,
    title: "Built for Operators",
    description:
      "You run a marine business, not a tech company. Our platform works for people who'd rather be on the water than behind a screen.",
  },
  {
    icon: Globe,
    title: "Real Results",
    description:
      "SEO that actually ranks, payment processing that actually works, and lead forms that actually convert. No vanity metrics.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-label="About hero"
        style={{
          padding: "6rem var(--section-pad-x) 4rem",
          background:
            "linear-gradient(145deg, var(--color-midnight) 0%, var(--color-hull) 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <FadeIn>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              About Us
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
              We build digital tools for people who work on the water.
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
              Flagship Digital is the digital platform built exclusively for the marine industry.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <SectionWrapper bg="hull" id="our-story" ariaLabel="Our story">
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <FadeIn>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 700,
                color: "var(--color-heading)",
                marginBottom: "2rem",
              }}
            >
              The Problem We Saw
            </h2>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-lg)",
                color: "var(--color-body)",
                lineHeight: 1.85,
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <p>
                Marine service providers are some of the most skilled professionals in any industry. They maintain million-dollar vessels, manage complex operations, and keep people safe on the water every day.
              </p>
              <p>
                But when it comes to their digital presence, most are invisible. No website. No way to accept payments online. No way for new customers to find them. The marine industry has been left behind by the digital tools that every other industry takes for granted.
              </p>
              <p>
                We started Flagship Digital to change that.
              </p>
              <p>
                We&apos;re not a generic website builder. We don&apos;t sell templates and leave you to figure it out. We build complete digital platforms — professional websites with real SEO, payment processing, lead generation, and a custom domain — specifically for marine businesses. And we do it for $29 a month.
              </p>
              <p>
                Our goal is simple: give every marine service provider the same digital tools that billion-dollar companies take for granted, at a price that makes it a no-brainer.
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper bg="hull" overlay="dot-grid" id="values" ariaLabel="Our values">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <FadeIn>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              What We Believe
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 700,
                color: "var(--color-heading)",
              }}
            >
              Built different, on purpose.
            </h2>
          </FadeIn>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            maxWidth: "64rem",
            margin: "0 auto",
          }}
        >
          {values.map((value, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="glass-card"
                style={{
                  padding: "2rem",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--color-card-icon-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <value.icon size={22} style={{ color: "var(--color-brass)" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h4)",
                    fontWeight: 600,
                    color: "var(--color-heading)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-body)",
                    lineHeight: 1.7,
                  }}
                >
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Company Info */}
      <SectionWrapper bg="hull" id="company" ariaLabel="Company information">
        <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <FadeIn>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 700,
                color: "var(--color-heading)",
                marginBottom: "2rem",
              }}
            >
              The Company
            </h2>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-lg)",
                color: "var(--color-body)",
                lineHeight: 1.85,
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <p>
                Flagship Digital is a product of <strong>0Billions Inc.</strong>, a technology company focused on building vertical SaaS platforms for underserved industries.
              </p>
              <p>
                We&apos;re starting with the marine industry because we know it, we love it, and we believe the people who keep our waterways running deserve better digital tools.
              </p>
              <p>
                Based in British Columbia, Canada, we serve marine businesses across North America and the United Kingdom.
              </p>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section
        aria-label="Get started"
        style={{
          padding: "6rem var(--section-pad-x)",
          background:
            "linear-gradient(145deg, var(--color-midnight) 0%, var(--color-hull) 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "36rem", margin: "0 auto" }}>
          <FadeIn>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 700,
                color: "var(--color-white)",
                marginBottom: "1.5rem",
              }}
            >
              Ready to get started?
            </h2>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--color-cream)",
                lineHeight: 1.75,
                marginBottom: "2rem",
              }}
            >
              Your marine business deserves a professional digital presence. We&apos;ll have your site live in 24 hours.
            </p>
            <Button href="/#pricing" variant="primary" size="lg">
              Get Your Site Built
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
