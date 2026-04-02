import {
  Anchor,
  Globe,
  Search,
  CreditCard,
  BookOpen,
  Smartphone,
  ShieldCheck,
  FileText,
  Calculator,
  Zap,
  ArrowRight,
  Check,
  ChevronDown,
  Star,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { LeadForm } from "@/components/LeadForm";

/* ============================================================
   JSON-LD Structured Data
   ============================================================ */

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Flagship Digital",
  url: "https://flagshipdigital.com",
  description:
    "Professional digital platform built exclusively for marine service providers.",
  sameAs: [],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Flagship Digital",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "29",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "29",
      priceCurrency: "USD",
      billingDuration: "P1M",
    },
  },
  description:
    "Professional digital platform for marine businesses. Includes custom domain, SEO, payment processing, and accounting integrations.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need any technical skills?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "None at all. We build your entire website from your business information. You review it, request changes if needed, and approve it for launch.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use my own domain name?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A custom domain is included with every plan at no extra cost. If you already own a domain, we'll connect it for you.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get my site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your initial site design is typically ready within 24 hours. After you review and approve, we launch it live for you.",
      },
    },
    {
      "@type": "Question",
      name: "What if I don't like the site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Full refund, no questions asked. We're confident you'll love it, but there's zero risk to you.",
      },
    },
    {
      "@type": "Question",
      name: "Can my customers pay me through my site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Integrated payment processing is included with your site so customers can pay deposits, invoices, or book services directly.",
      },
    },
    {
      "@type": "Question",
      name: "Does it work with my accounting software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with popular accounting platforms like QuickBooks, Wave, and Xero to help keep your books in sync.",
      },
    },
  ],
};

/* ============================================================
   Data Arrays
   ============================================================ */

const features = [
  {
    icon: Globe,
    title: "Custom Domain Included",
    description:
      "Your own .com domain, registered and configured. No extra fees, no DNS headaches. Already own one? We'll connect it.",
  },
  {
    icon: Search,
    title: "Real SEO, Not Lip Service",
    description:
      "Structured data, meta tags, XML sitemap, fast load times. Built to rank where your customers are searching.",
  },
  {
    icon: CreditCard,
    title: "Accept Payments & Deposits",
    description:
      "Integrated payment processing lets your customers pay deposits, invoices, or book services directly on your site.",
  },
  {
    icon: Calculator,
    title: "Accounting Compatible",
    description:
      "Designed to work with popular accounting platforms like QuickBooks, Wave, and Xero.",
  },
  {
    icon: FileText,
    title: "Quote Request Forms",
    description:
      "Custom forms with vessel-specific fields capture exactly what you need. No more back-and-forth phone tag.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Perfect Design",
    description:
      "Your customers search on their phones. Every site is responsive, fast, and looks sharp on any screen size.",
  },
  {
    icon: ShieldCheck,
    title: "ADA-Compliant & Accessible",
    description:
      "Built to WCAG accessibility standards from the ground up. Serve every customer, avoid legal exposure.",
  },
  {
    icon: Zap,
    title: "Done-For-You, Expert-Built",
    description:
      "We build your entire site from scratch, designed specifically for your marine business. Every element is crafted by our team to convert visitors into customers.",
  },
];

const pricingPlan = {
  name: "Flagship",
  price: "29",
  description: "Everything your marine business needs to get found, get paid, and grow — all in one plan.",
  features: [
    "Professional, custom-built website",
    "Custom domain included",
    "Mobile-responsive design",
    "SEO setup & structured data",
    "Payment processing",
    "Lead generation forms",
    "Accounting software compatible",
    "SSL certificate",
  ],
  cta: "Get Your Site Built",
};

const faqs = [
  {
    question: "Do I need any technical skills?",
    answer:
      "None at all. We build your entire website from your business information. You review it, request changes if needed, and approve it for launch. If you can send an email, you can get a Flagship Digital site.",
  },
  {
    question: "Can I use my own domain name?",
    answer:
      "Yes. A custom domain is included with every plan at no extra cost. If you already own a domain, we'll connect it for you — no technical knowledge required.",
  },
  {
    question: "How long does it take to get my site?",
    answer:
      "Your initial site design is typically ready within 24 hours. After you review and approve, we launch it live for you. Most customers are up and running within a few days.",
  },
  {
    question: "What if I don't like the site?",
    answer:
      "Full refund, no questions asked. We're confident you'll love it, but there's zero risk to you.",
  },
  {
    question: "Can my customers pay me through my site?",
    answer:
      "Absolutely. Integrated payment processing is included with your site. Your customers can pay deposits, invoices, or book services directly through your website.",
  },
  {
    question: "Does it connect to my accounting software?",
    answer:
      "We work with popular accounting platforms like QuickBooks, Wave, and Xero to help keep your books in sync with payments coming through your site.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. No contracts, no cancellation fees. Your site stays live through the end of your billing period.",
  },
  {
    question: "Is my site really mine?",
    answer:
      "You own your domain and your content. If you ever leave, your domain goes with you. We'll even help you export your content.",
  },
];

const stats = [
  { value: "86%", label: "of marine buyers shop digitally during their purchase journey" },
  { value: "1 in 3", label: "customers won't consider a business they can't find online" },
  { value: "24hrs", label: "from sign-up to a live, professional website" },
  { value: "$0", label: "setup fee on every plan" },
];

/* ============================================================
   PAGE COMPONENT
   ============================================================ */

export default function Home() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── SECTION 1: HERO ── */}
      <section
        aria-label="Hero"
        className="section-hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(145deg, var(--color-midnight) 0%, var(--color-hull) 50%, var(--color-steel) 100%)",
          overflow: "hidden",
        }}
      >
        {/* Background grid */}
        <div
          className="line-grid"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.4,
          }}
        />
        {/* Radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "20%",
            right: "-10%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,160,78,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "80rem",
            margin: "0 auto",
            width: "100%",
            padding: "8rem var(--section-pad-x) 6rem",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div style={{ maxWidth: "48rem" }}>
            <FadeIn delay={0.1}>
              <p className="eyebrow" style={{ marginBottom: "1.25rem" }}>
                The Digital Platform for Marine Businesses
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-display)",
                  fontWeight: 800,
                  color: "var(--color-white)",
                  lineHeight: 1.05,
                  marginBottom: "1.5rem",
                }}
              >
                Your business deserves a{" "}
                <span className="gradient-text">flagship.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p
                style={{
                  fontSize: "var(--text-body-lg)",
                  color: "var(--color-cream)",
                  lineHeight: 1.75,
                  marginBottom: "2.5rem",
                  maxWidth: "38rem",
                }}
              >
                Your complete digital presence — professional website, payment
                processing, booking, accounting integrations, and real SEO —
                built exclusively for the marine industry. We handle everything.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Button href="#pricing" size="lg">
                  Get Your Site Built <ArrowRight size={18} />
                </Button>
                <Button href="#how-it-works" variant="secondary" size="lg">
                  See How It Works
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p
                style={{
                  marginTop: "1.5rem",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-fog)",
                }}
              >
                Starting at{" "}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-brass)",
                    fontWeight: 500,
                  }}
                >
                  $29/mo
                </span>
                {" "}· No setup fee · Cancel anytime
              </p>
            </FadeIn>
          </div>

          {/* Product mockup placeholder */}
          <FadeIn delay={0.5} direction="right">
            <div
              className="hero-mockup"
              aria-hidden="true"
              style={{
                background: "var(--color-hull)",
                border: "1px solid var(--color-border-light)",
                borderRadius: "var(--radius-lg)",
                aspectRatio: "4/3",
                maxWidth: "480px",
                width: "100%",
                marginLeft: "auto",
                flexDirection: "column",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(10,22,40,0.5), 0 0 40px rgba(200,160,78,0.08)",
              }}
            >
              {/* Browser chrome */}
              <div
                style={{
                  padding: "0.5rem 0.75rem",
                  backgroundColor: "var(--color-steel)",
                  borderBottom: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <div style={{ display: "flex", gap: "6px" }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#FF5F57" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#28C840" }} />
                </div>
                <div
                  style={{
                    flex: 1,
                    height: "1.5rem",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    borderRadius: "6px",
                    marginLeft: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--color-fog)",
                    }}
                  >
                    pacificmarinedetailing.com
                  </span>
                </div>
              </div>
              {/* Mockup website — premium marine detailing, real photos */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", backgroundColor: "#FFFFFF" }}>
                {/* Nav */}
                <div style={{
                  padding: "0.4rem 0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "#FFFFFF",
                  borderBottom: "1px solid #EEF1F4",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    {/* SVG wave logo */}
                    <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
                      <rect width="32" height="32" rx="6" fill="#0D7C6B" />
                      <path d="M6 18c3-3 5-1 8-1s5-2 8-2 4 1.5 4 1.5" stroke="#FFF" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                      <path d="M6 22c3-3 5-1 8-1s5-2 8-2 4 1.5 4 1.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                      <path d="M13 8l3 5.5L19 8" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <line x1="16" y1="13" x2="16" y2="17" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "0.55rem", fontWeight: 700, color: "#1B2D3E" }}>
                      Pacific Marine
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "0.6rem", alignItems: "center" }}>
                    {["Services", "Gallery", "Reviews"].map((item) => (
                      <span key={item} style={{ fontFamily: "var(--font-body)", fontSize: "0.38rem", color: "#7A8B99", fontWeight: 500 }}>{item}</span>
                    ))}
                    <span style={{
                      fontFamily: "var(--font-body)", fontSize: "0.35rem", fontWeight: 600, color: "#FFF",
                      background: "linear-gradient(135deg, #E8734A, #D4592E)", padding: "0.15rem 0.45rem", borderRadius: "3px",
                    }}>Book Now</span>
                  </div>
                </div>

                {/* Hero — real photo background */}
                <div style={{
                  position: "relative",
                  overflow: "hidden",
                  flex: 1,
                }}>
                  {/* Background image */}
                  <img
                    src="/pexels-dpsinghbhullar-30483267.jpg"
                    alt=""
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 40%",
                    }}
                  />
                  {/* Dark overlay — heavier on left for text, fades to show boat on right */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to right, rgba(12,25,42,0.85) 0%, rgba(12,25,42,0.6) 40%, rgba(12,25,42,0.15) 75%, transparent 100%)",
                  }} />
                  {/* Bottom fade */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
                    background: "linear-gradient(180deg, transparent, rgba(12,25,42,0.5))",
                  }} />

                  {/* Text overlay */}
                  <div style={{ position: "relative", zIndex: 1, padding: "1.2rem 0.75rem 0.6rem" }}>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "0.32rem", fontWeight: 600,
                      letterSpacing: "0.12em", textTransform: "uppercase", color: "#4AACA6",
                      marginBottom: "0.3rem",
                    }}>Puget Sound&apos;s Trusted Detailers</p>
                    <p style={{
                      fontFamily: "var(--font-display)", fontSize: "clamp(0.65rem, 1.6vw, 0.85rem)",
                      fontWeight: 800, color: "#FFFFFF", lineHeight: 1.15, marginBottom: "0.25rem", maxWidth: "65%",
                      textShadow: "0 1px 8px rgba(0,0,0,0.3)",
                    }}>Show-ready finish. Every&nbsp;time.</p>
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: "0.32rem", color: "rgba(255,255,255,0.8)",
                      lineHeight: 1.5, marginBottom: "0.45rem", maxWidth: "55%",
                    }}>Premium detailing, ceramic coatings &amp; yacht maintenance from a team that lives on the water.</p>
                    <div style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
                      <span style={{
                        fontFamily: "var(--font-body)", fontSize: "0.35rem", fontWeight: 600, color: "#FFF",
                        background: "linear-gradient(135deg, #E8734A, #D4592E)", padding: "0.2rem 0.55rem", borderRadius: "3px",
                        boxShadow: "0 2px 8px rgba(212,89,46,0.4)",
                      }}>Get a Free Quote</span>
                      <span style={{
                        fontFamily: "var(--font-body)", fontSize: "0.35rem", fontWeight: 500, color: "#FFF",
                        padding: "0.2rem 0.55rem", borderRadius: "3px",
                        border: "1px solid rgba(255,255,255,0.35)", backgroundColor: "rgba(255,255,255,0.1)",
                        backdropFilter: "blur(4px)",
                      }}>Our Work</span>
                    </div>
                  </div>
                </div>

                {/* Trust bar */}
                <div style={{
                  padding: "0.3rem 0.75rem",
                  backgroundColor: "#F8FAFB",
                  borderTop: "1px solid #EEF1F4",
                  borderBottom: "1px solid #EEF1F4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.8rem",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.15rem" }}>
                    <div style={{ display: "flex", gap: "1px" }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={5} fill="#F4A940" style={{ color: "#F4A940" }} />
                      ))}
                    </div>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.3rem", color: "#4A5968", fontWeight: 600 }}>4.9</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.25rem", color: "#8A97A4" }}>(127)</span>
                  </div>
                  <div style={{ width: "1px", height: "0.5rem", backgroundColor: "#DDE3E8" }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.28rem", color: "#8A97A4" }}>Licensed &amp; Insured</span>
                  <div style={{ width: "1px", height: "0.5rem", backgroundColor: "#DDE3E8" }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.28rem", color: "#8A97A4" }}>Est. 2018</span>
                </div>

                {/* Service cards with real images */}
                <div style={{
                  padding: "0.45rem 0.6rem",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  gap: "0.35rem",
                }}>
                  {[
                    {
                      name: "Full Detail",
                      price: "$399+",
                      img: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=400&q=80&auto=format",
                      pos: "center 60%",
                    },
                    {
                      name: "Ceramic Coating",
                      price: "$899+",
                      img: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=400&q=80&auto=format",
                      pos: "center 50%",
                    },
                    {
                      name: "Wash & Wax",
                      price: "$149+",
                      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80&auto=format",
                      pos: "center 70%",
                    },
                  ].map((svc) => (
                    <div key={svc.name} style={{
                      flex: 1, borderRadius: "4px", overflow: "hidden",
                      border: "1px solid #EEF1F4",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                    }}>
                      <div style={{ position: "relative", width: "100%", height: "2.2rem", overflow: "hidden" }}>
                        <img
                          src={svc.img}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: svc.pos,
                          }}
                        />
                        <span style={{
                          position: "absolute", top: "0.2rem", right: "0.2rem",
                          fontFamily: "var(--font-mono)", fontSize: "0.3rem", fontWeight: 600,
                          color: "#FFF", backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)",
                          padding: "0.1rem 0.25rem", borderRadius: "2px",
                        }}>{svc.price}</span>
                      </div>
                      <div style={{ padding: "0.25rem 0.3rem" }}>
                        <p style={{ fontFamily: "var(--font-display)", fontSize: "0.35rem", fontWeight: 700, color: "#1B2D3E" }}>{svc.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Responsive hero grid */}
        <style>{`
          .hero-mockup {
            display: none !important;
          }
          @media (min-width: 1024px) {
            .hero-grid {
              grid-template-columns: 1fr 1fr !important;
            }
            .hero-mockup {
              display: flex !important;
              flex-direction: column;
              max-width: none;
            }
          }
        `}</style>
      </section>

      {/* ── SECTION 2: PROBLEM ── */}
      <SectionWrapper bg="hull" overlay="dot-grid" id="problem" ariaLabel="The problem">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="problem-grid"
        >
          <FadeIn>
            <div>
              <p className="eyebrow" style={{ marginBottom: "1rem" }}>
                The Hard Truth
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-hero)",
                  fontWeight: 700,
                  color: "var(--color-white)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.1,
                }}
              >
                Your customers are searching online.{" "}
                <span style={{ color: "var(--color-brass)" }}>
                  Can they find you?
                </span>
              </h2>
              <p
                style={{
                  fontSize: "var(--text-body-lg)",
                  color: "var(--color-cream)",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                }}
              >
                86% of marine buyers start their search online. If they can't
                find you, they're finding your competitor. Yet most marine
                service providers either have no website or one that hasn't
                been touched in years.
              </p>
              <p
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--color-slate)",
                  marginBottom: "1.5rem",
                }}
              >
                Source: Boatline / MRAA Digital Marketing Report
              </p>
              <p
                style={{
                  fontSize: "var(--text-body-lg)",
                  color: "var(--color-cream)",
                  lineHeight: 1.75,
                }}
              >
                No website means no credibility. An outdated website means lost
                jobs. Every day without a professional online presence is revenue
                walking straight to your competitors.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    padding: "1.5rem",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-h2)",
                      fontWeight: 500,
                      color: "var(--color-brass)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--color-fog)",
                      lineHeight: 1.5,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <style>{`
          @media (min-width: 768px) {
            .problem-grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}</style>
      </SectionWrapper>

      {/* ── SECTION 3: SOLUTION ── */}
      <SectionWrapper bg="midnight" id="solution" ariaLabel="Our solution">
        <div style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto" }}>
          <FadeIn>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              The Solution
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-hero)",
                fontWeight: 700,
                color: "var(--color-white)",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              A complete digital platform for the price of{" "}
              <span style={{ color: "var(--color-brass)" }}>an oil filter.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--color-cream)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Flagship Digital builds a complete professional platform exclusively
              for the marine industry. Real SEO. Payment processing. Lead generation
              forms. Compatible with your accounting software. Your own domain — built around
              your actual business, ready to convert customers the day it
              launches.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p
              style={{
                fontSize: "var(--text-body)",
                color: "var(--color-fog)",
                lineHeight: 1.65,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              You don't need to know anything about websites, hosting, or SEO.
              We handle everything. You focus on what you're already great at.
            </p>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* ── SECTION 4: FEATURES ── */}
      <SectionWrapper bg="hull" overlay="line-grid" id="features" ariaLabel="Features">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <FadeIn>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              What You Get
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 700,
                color: "var(--color-white)",
                marginBottom: "1rem",
              }}
            >
              Everything your marine business needs online
            </h2>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--color-fog)",
                maxWidth: "36rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Not a generic builder. Every feature is purpose-built for marine
              service providers.
            </p>
          </FadeIn>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.08}>
              <div
                className="glass-card"
                style={{
                  padding: "2rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "rgba(200,160,78,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <feature.icon
                    size={22}
                    style={{ color: "var(--color-brass)" }}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h4)",
                    fontWeight: 600,
                    color: "var(--color-white)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-fog)",
                    lineHeight: 1.65,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* ── SECTION 5: HOW IT WORKS ── */}
      <SectionWrapper bg="midnight" id="how-it-works" ariaLabel="How it works">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <FadeIn>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              How It Works
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 700,
                color: "var(--color-white)",
                marginBottom: "1rem",
              }}
            >
              Three steps. Zero hassle.
            </h2>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--color-fog)",
                maxWidth: "32rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              From sign-up to live site in as little as 24 hours.
            </p>
          </FadeIn>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              step: "01",
              icon: Zap,
              title: "We Build It",
              description:
                "Share your business details — name, services, location. Our team designs and builds a complete, professional website tailored to your marine business.",
            },
            {
              step: "02",
              icon: Users,
              title: "You Approve It",
              description:
                "Review your site. Request changes — colors, photos, copy. We revise until you're completely satisfied. No technical skills required from you at any point.",
            },
            {
              step: "03",
              icon: TrendingUp,
              title: "We Launch It",
              description:
                "Your custom domain goes live. SEO is active. Payment processing is configured. Your accounting tools are integrated. Customers can find you and pay you, starting today.",
            },
          ].map((item, i) => (
            <FadeIn key={item.step} delay={i * 0.15}>
              <div
                style={{
                  position: "relative",
                  padding: "2.5rem 2rem",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-hull)",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-display)",
                    fontWeight: 500,
                    color: "rgba(200,160,78,0.2)",
                    position: "absolute",
                    top: "-0.25rem",
                    right: "1.25rem",
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "50%",
                    backgroundColor: "rgba(200,160,78,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                  }}
                >
                  <item.icon
                    size={24}
                    style={{ color: "var(--color-brass)" }}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h3)",
                    fontWeight: 600,
                    color: "var(--color-white)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-fog)",
                    lineHeight: 1.65,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* ── SECTION 6: PRICING ── */}
      <SectionWrapper bg="hull" id="pricing" ariaLabel="Pricing plans">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <FadeIn>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              Simple Pricing
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 700,
                color: "var(--color-white)",
                marginBottom: "1rem",
              }}
            >
              One price. Everything included.
            </h2>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--color-fog)",
                maxWidth: "32rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              No setup fees. No hidden charges. No contracts. Cancel anytime.
            </p>
          </FadeIn>
        </div>

        <FadeIn>
          <div
            style={{
              maxWidth: "32rem",
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
                ${pricingPlan.price}
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
              {pricingPlan.description}
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
              {pricingPlan.features.map((feature) => (
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

            <Button href="#cta" size="lg">
              {pricingPlan.cta} <ArrowRight size={18} />
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

      {/* ── SECTION 7: SOCIAL PROOF ── */}
      <SectionWrapper bg="steel" id="social-proof" ariaLabel="Social proof and testimonials">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <FadeIn>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              Trusted by Marine Professionals
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 700,
                color: "var(--color-white)",
                marginBottom: "1rem",
              }}
            >
              Built for people who work on the water
            </h2>
          </FadeIn>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              quote:
                "I went from zero online presence to a professional site with payment processing in a single day. Customers started booking through the site that same week.",
              name: "Marine Detailing Business",
              role: "Early Access Customer",
            },
            {
              quote:
                "We were losing jobs because we had no website. Now when people search for boat mechanics in our area, we show up. The SEO alone is worth the monthly cost.",
              name: "Boat Repair Shop",
              role: "Early Access Customer",
            },
            {
              quote:
                "The QuickBooks integration saved us hours every week. Deposits come through the site and go straight to our books. No more manual entry.",
              name: "Charter Operation",
              role: "Early Access Customer",
            },
          ].map((testimonial, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div
                className="glass-card"
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "2px",
                    marginBottom: "1rem",
                  }}
                >
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      fill="var(--color-warning)"
                      style={{ color: "var(--color-warning)" }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p
                  style={{
                    fontSize: "var(--text-body)",
                    color: "var(--color-cream)",
                    lineHeight: 1.75,
                    fontStyle: "italic",
                    flex: 1,
                    marginBottom: "1.5rem",
                  }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "var(--text-sm)",
                      color: "var(--color-white)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--color-fog)",
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* ── SECTION 8: PORTFOLIO ── */}
      <SectionWrapper bg="midnight" overlay="line-grid" id="portfolio" ariaLabel="Our portfolio">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <FadeIn>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              Our Work
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 700,
                color: "var(--color-white)",
                marginBottom: "1rem",
              }}
            >
              Sites we&apos;ve built for marine businesses
            </h2>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--color-fog)",
                maxWidth: "36rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Every site is custom-designed for the marine industry. Here&apos;s what
              your business could look like.
            </p>
          </FadeIn>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              name: "Pacific Marine Detailing",
              type: "Mobile Marine Detailing",
              description: "Full-service website with online booking, payment processing, and before/after gallery.",
            },
            {
              name: "Harbour Engine Works",
              type: "Marine Engine Repair",
              description: "Service-focused site with quote request forms, vessel-specific intake, and QuickBooks integration.",
            },
            {
              name: "Coastal Charter Co.",
              type: "Charter & Tours",
              description: "Booking-driven site with fleet gallery, trip itineraries, and integrated deposit payments.",
            },
          ].map((project, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div
                className="glass-card"
                style={{
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {/* Mockup preview area */}
                <div
                  style={{
                    background: "linear-gradient(135deg, var(--color-steel) 0%, var(--color-hull) 100%)",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "200px",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  {/* Browser chrome mockup */}
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "320px",
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
                        padding: "1.5rem 1rem",
                        backgroundColor: "rgba(255,255,255,0.02)",
                        textAlign: "center",
                      }}
                    >
                      <Anchor
                        size={20}
                        style={{ color: "var(--color-brass)", marginBottom: "0.5rem", opacity: 0.7 }}
                        aria-hidden="true"
                      />
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "var(--text-sm)",
                          fontWeight: 600,
                          color: "var(--color-white)",
                        }}
                      >
                        {project.name}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div style={{ padding: "1.5rem" }}>
                  <p
                    className="eyebrow"
                    style={{ marginBottom: "0.5rem", fontSize: "var(--text-xs)" }}
                  >
                    {project.type}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-h4)",
                      fontWeight: 600,
                      color: "var(--color-white)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--color-fog)",
                      lineHeight: 1.65,
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Button href="/portfolio" variant="secondary" size="lg">
              View Full Portfolio <ArrowRight size={18} />
            </Button>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* ── SECTION 9: FAQ ── */}
      <SectionWrapper bg="midnight" overlay="dot-grid" id="faq" ariaLabel="Frequently asked questions">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <FadeIn>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              FAQ
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-h2)",
                fontWeight: 700,
                color: "var(--color-white)",
                marginBottom: "1rem",
              }}
            >
              Questions? Answered.
            </h2>
          </FadeIn>
        </div>

        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <details
                style={{
                  backgroundColor: "var(--color-hull)",
                  border: "1px solid var(--color-border-light)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    padding: "1.25rem 1.5rem",
                    cursor: "pointer",
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "var(--text-body)",
                    color: "var(--color-white)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    listStyle: "none",
                  }}
                >
                  {faq.question}
                  <ChevronDown
                    size={18}
                    style={{ color: "var(--color-fog)", flexShrink: 0 }}
                    aria-hidden="true"
                  />
                </summary>
                <div
                  style={{
                    padding: "0 1.5rem 1.25rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--color-fog)",
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* ── SECTION 9: FINAL CTA ── */}
      <section
        id="cta"
        aria-label="Get started"
        className="section-cta"
        style={{
          position: "relative",
          padding: "var(--section-pad-y) var(--section-pad-x)",
          background:
            "linear-gradient(145deg, var(--color-steel) 0%, var(--color-midnight) 100%)",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,160,78,0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "48rem",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <FadeIn>
            <p className="eyebrow" style={{ marginBottom: "1rem" }}>
              Ready to Get Found?
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-hero)",
                fontWeight: 700,
                color: "var(--color-white)",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              Your customers are searching.{" "}
              <span className="gradient-text">Be there when they do.</span>
            </h2>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--color-cream)",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "36rem",
              }}
            >
              Tell us about your business and we&apos;ll get started. No commitment,
              no credit card required.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <LeadForm />
            <p
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-fog)",
                marginTop: "1.5rem",
              }}
            >
              Starting at{" "}
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--color-brass)",
                  fontWeight: 500,
                }}
              >
                $29/mo
              </span>
              {" "}· No setup fee · No contracts · Full refund guarantee
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
