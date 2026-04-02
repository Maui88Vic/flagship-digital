import type { Metadata } from "next";
import { Anchor, ArrowRight, ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See the professional websites Flagship Digital has built for marine businesses. Custom detailing, engine repair, charter, boatyard, and marine supply sites.",
};

const projects = [
  {
    name: "Pacific Marine Detailing",
    type: "Mobile Marine Detailing",
    description:
      "Full-service website with online booking, integrated payment processing, before/after photo gallery, and automatic QuickBooks sync for every transaction.",
    features: ["Online Booking", "Payment Processing", "Photo Gallery", "QuickBooks Sync"],
  },
  {
    name: "Harbour Engine Works",
    type: "Marine Engine Repair",
    description:
      "Service-focused site with detailed quote request forms featuring vessel-specific intake fields, service menu, and customer testimonial showcase.",
    features: ["Quote Request Forms", "Service Menu", "Testimonials", "SEO Optimized"],
  },
  {
    name: "Coastal Charter Co.",
    type: "Charter & Tours",
    description:
      "Booking-driven site with fleet gallery, trip itineraries, seasonal pricing tables, and integrated deposit collection for reservations.",
    features: ["Fleet Gallery", "Trip Itineraries", "Deposit Payments", "Blog"],
  },
  {
    name: "Tidewater Boatyard",
    type: "Full-Service Boatyard",
    description:
      "Comprehensive boatyard site with haul-out scheduling, service tracker, multi-department service pages, and accounting integration for invoicing.",
    features: ["Service Scheduling", "Multi-Department", "Invoicing", "Wave Integration"],
  },
  {
    name: "Compass Marine Supply",
    type: "Marine Parts & Supply",
    description:
      "Product-focused site with categorized inventory, contact forms for custom orders, and location details with interactive map.",
    features: ["Product Catalog", "Custom Order Forms", "Location Map", "Mobile-Perfect"],
  },
  {
    name: "Northshore Canvas & Upholstery",
    type: "Marine Canvas Work",
    description:
      "Portfolio-driven site showcasing completed projects with high-resolution galleries, measurement request forms, and seasonal promotions.",
    features: ["Project Gallery", "Request Forms", "Seasonal Promos", "ADA Compliant"],
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-label="Portfolio hero"
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
              Our Portfolio
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
              Sites that work as hard as the businesses they represent.
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
              Every Flagship Digital site is custom-built for the marine industry.
              Real businesses. Real results. Here&apos;s a sample of our work.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Grid */}
      <SectionWrapper bg="hull" ariaLabel="Portfolio projects">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className="glass-card"
                style={{
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Mockup preview */}
                <div
                  style={{
                    background: "linear-gradient(135deg, var(--color-steel) 0%, var(--color-midnight) 100%)",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "220px",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "340px",
                      borderRadius: "var(--radius-md)",
                      overflow: "hidden",
                      border: "1px solid var(--color-border-light)",
                    }}
                  >
                    <div
                      style={{
                        padding: "0.5rem 0.75rem",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        borderBottom: "1px solid var(--color-border)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#FF5F57" }} />
                      <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
                      <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#28C840" }} />
                      <span
                        style={{
                          flex: 1,
                          marginLeft: "0.5rem",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6rem",
                          color: "var(--color-fog)",
                        }}
                      >
                        {project.name.toLowerCase().replace(/\s+/g, "")}.com
                      </span>
                    </div>
                    <div
                      style={{
                        padding: "2rem 1rem",
                        backgroundColor: "rgba(255,255,255,0.02)",
                        textAlign: "center",
                      }}
                    >
                      <Anchor
                        size={24}
                        style={{ color: "var(--color-brass)", marginBottom: "0.75rem", opacity: 0.7 }}
                        aria-hidden="true"
                      />
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "var(--text-body)",
                          fontWeight: 600,
                          color: "var(--color-white)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {project.name}
                      </p>
                      <p
                        style={{
                          fontSize: "var(--text-xs)",
                          color: "var(--color-fog)",
                        }}
                      >
                        {project.type}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <p
                    className="eyebrow"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    {project.type}
                  </p>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-h3)",
                      fontWeight: 600,
                      color: "var(--color-white)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {project.name}
                  </h2>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--color-fog)",
                      lineHeight: 1.65,
                      marginBottom: "1.25rem",
                      flex: 1,
                    }}
                  >
                    {project.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        style={{
                          fontSize: "var(--text-xs)",
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                          color: "var(--color-brass)",
                          backgroundColor: "rgba(200,160,78,0.08)",
                          padding: "0.25rem 0.625rem",
                          borderRadius: "9999px",
                          border: "1px solid rgba(200,160,78,0.15)",
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
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
              Ready to see what we can build for you?
            </h2>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--color-fog)",
                marginBottom: "2rem",
              }}
            >
              Every site is custom. Every site is professional. Get started today.
            </p>
            <Button href="/#pricing" size="lg">
              Get Your Site Built <ArrowRight size={18} />
            </Button>
          </FadeIn>
        </div>
      </SectionWrapper>
    </>
  );
}
