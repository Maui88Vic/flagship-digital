import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Flagship Digital. Read our terms for using the digital platform for marine businesses.",
};

const lastUpdated = "April 2, 2026";

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-label="Terms of service hero"
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
              Legal
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
              Terms of Service
            </h1>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--color-cream)",
                lineHeight: 1.75,
              }}
            >
              Last updated: {lastUpdated}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <SectionWrapper bg="hull" id="terms-content" ariaLabel="Terms of service content">
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body)",
            color: "var(--color-body)",
            lineHeight: 1.85,
          }}
        >
          <FadeIn>
            {/* 1 */}
            <LegalSection number="1" title="Acceptance of Terms">
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the services provided by Flagship Digital, operated by 0Billions Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), including our platform, websites we build on your behalf, and all related services (collectively, the &ldquo;Service&rdquo;).
              </p>
              <p>
                By creating an account or using the Service, you agree to be bound by these Terms. If you are using the Service on behalf of a business or organization, you represent that you have the authority to bind that entity.
              </p>
              <p>
                You must be at least 18 years of age to use the Service.
              </p>
            </LegalSection>

            {/* 2 */}
            <LegalSection number="2" title="Description of Service">
              <p>
                Flagship Digital provides a digital platform for marine service providers. Our Service includes:
              </p>
              <ul style={listStyle}>
                <li>Custom-designed, professionally built websites tailored to your marine business.</li>
                <li>Custom domain registration and management.</li>
                <li>Search engine optimization (SEO) setup and structured data.</li>
                <li>Integrated payment processing for accepting customer deposits and invoices.</li>
                <li>Lead generation forms to capture prospective customer inquiries.</li>
                <li>Ongoing hosting, SSL certificates, and platform maintenance.</li>
              </ul>
              <p>
                We are a technology platform. The websites and digital tools we provide are built using our proprietary templates and systems.
              </p>
            </LegalSection>

            {/* 3 */}
            <LegalSection number="3" title="Account Terms">
              <ul style={listStyle}>
                <li>You must provide accurate and complete information when creating your account.</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You are responsible for all activity that occurs under your account.</li>
                <li>You must notify us immediately of any unauthorized access to your account.</li>
                <li>We reserve the right to suspend or terminate accounts that contain inaccurate information or violate these Terms.</li>
              </ul>
            </LegalSection>

            {/* 4 */}
            <LegalSection number="4" title="Subscription, Billing, and Payments">
              <h4 style={subheadingStyle}>4.1 Pricing and Billing</h4>
              <ul style={listStyle}>
                <li>The Service is offered on a monthly subscription basis, currently at $29 USD per month.</li>
                <li>There are no setup fees. Your subscription includes hosting, domain, SSL, and all platform features.</li>
                <li>Subscriptions are billed monthly in advance on the anniversary of your start date.</li>
                <li>All prices are in US dollars unless otherwise stated.</li>
              </ul>

              <h4 style={subheadingStyle}>4.2 Price Changes</h4>
              <p>
                We reserve the right to change our pricing. We will notify you at least 30 days in advance of any price increase. The new price will take effect at the start of your next billing cycle following the notice period.
              </p>

              <h4 style={subheadingStyle}>4.3 Failed Payments</h4>
              <p>
                If a payment fails, we will notify you and provide a 7-day grace period to update your payment method. If payment is not resolved, we may suspend your website and associated services until the balance is settled.
              </p>

              <h4 style={subheadingStyle}>4.4 Refunds</h4>
              <p>
                If you are not satisfied with your website, contact us within 30 days of your initial sign-up for a full refund. After the 30-day period, subscription fees are non-refundable except as required by applicable law.
              </p>
              <p>
                <strong>UK consumers:</strong> You may have additional cancellation rights under the Consumer Contracts Regulations 2013, including a 14-day cooling-off period from the date of purchase.
              </p>
            </LegalSection>

            {/* 5 */}
            <LegalSection number="5" title="Cancellation and Termination">
              <h4 style={subheadingStyle}>5.1 Cancellation by You</h4>
              <ul style={listStyle}>
                <li>You may cancel your subscription at any time. Cancellation takes effect at the end of your current billing period.</li>
                <li>Upon cancellation, your website will go offline at the end of the billing period.</li>
                <li>Your data will be retained in a read-only state for 90 days, after which it will be permanently deleted.</li>
              </ul>

              <h4 style={subheadingStyle}>5.2 Termination by Us</h4>
              <ul style={listStyle}>
                <li>We may suspend or terminate your account immediately if you violate these Terms or engage in prohibited activities.</li>
                <li>We may discontinue the Service entirely with at least 90 days&apos; written notice, during which you may export your content.</li>
              </ul>

              <h4 style={subheadingStyle}>5.3 Effect of Termination</h4>
              <p>
                Upon termination, your website will be taken offline and your domain will no longer resolve. Content you provided (text, images, logos) remains your property. See Section 7 for details on content ownership and export.
              </p>
            </LegalSection>

            {/* 6 */}
            <LegalSection number="6" title="Acceptable Use">
              <p>You agree not to use the Service to:</p>
              <ul style={listStyle}>
                <li>Violate any applicable law, regulation, or third-party rights.</li>
                <li>Publish content that is unlawful, defamatory, obscene, threatening, or that promotes hatred or violence.</li>
                <li>Upload malware, viruses, or any harmful code.</li>
                <li>Attempt to gain unauthorized access to the Service or its infrastructure.</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
                <li>Resell, sublicense, or redistribute the Service without our written consent.</li>
                <li>Use the platform for any industry or purpose unrelated to marine services without prior approval.</li>
                <li>Scrape, harvest, or extract data from the Service through automated means.</li>
                <li>Interfere with the performance, availability, or security of the Service.</li>
              </ul>
              <p>
                We reserve the right to remove any content and suspend any account that violates this policy, with or without notice.
              </p>
            </LegalSection>

            {/* 7 */}
            <LegalSection number="7" title="Intellectual Property and Content Ownership">
              <h4 style={subheadingStyle}>7.1 Your Content</h4>
              <p>
                You retain full ownership of any content you provide to us — including text, photographs, logos, and business information (collectively, &ldquo;Your Content&rdquo;). By using the Service, you grant us a limited, non-exclusive, royalty-free license to use, display, and host Your Content solely for the purpose of operating the Service on your behalf.
              </p>
              <p>
                You represent and warrant that you have all necessary rights to the content you provide and that it does not infringe any third-party intellectual property rights.
              </p>

              <h4 style={subheadingStyle}>7.2 Our Platform</h4>
              <p>
                The Service, including its code, templates, design systems, branding, and underlying technology, is the intellectual property of 0Billions Inc. These materials are licensed to you for use within the Service and may not be copied, modified, distributed, or used outside the platform.
              </p>

              <h4 style={subheadingStyle}>7.3 Generated Websites</h4>
              <p>
                Websites built through the Service are composed of Your Content (which you own) and our platform technology (which we own). You may not export, replicate, or reuse our templates, code, or design systems. Upon cancellation, you may request an export of Your Content (text, images, and files you provided).
              </p>
            </LegalSection>

            {/* 8 */}
            <LegalSection number="8" title="Domain Names">
              <ul style={listStyle}>
                <li>Your subscription includes registration and management of one custom domain name.</li>
                <li>Domains are registered by us on your behalf and managed through the Service.</li>
                <li>Upon cancellation, you may request a transfer of your domain. We will initiate the transfer process within 30 days of your request, subject to standard registrar transfer procedures and any applicable fees.</li>
                <li>You are responsible for ensuring your chosen domain name does not infringe any third-party trademarks or intellectual property rights.</li>
              </ul>
            </LegalSection>

            {/* 9 */}
            <LegalSection number="9" title="Third-Party Services">
              <p>
                The Service integrates with third-party providers for payment processing (Stripe), hosting, domain registration, and other functionality. Your use of these integrations may be subject to the respective third-party&apos;s terms and conditions.
              </p>
              <p>
                We are not responsible for the availability, accuracy, or performance of third-party services. Any outage or issue caused by a third-party provider does not constitute a breach of these Terms on our part.
              </p>
            </LegalSection>

            {/* 10 */}
            <LegalSection number="10" title="Disclaimer of Warranties">
              <p>
                The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. To the maximum extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p>
                We do not warrant that the Service will be uninterrupted, error-free, or completely secure. We do not guarantee any specific business outcomes, including lead generation, search engine rankings, or revenue.
              </p>
              <p>
                <strong>UK consumers:</strong> Nothing in these Terms affects your statutory rights under the Consumer Rights Act 2015. Where the Service does not meet the standard of reasonable care and skill, you may be entitled to a remedy.
              </p>
            </LegalSection>

            {/* 11 */}
            <LegalSection number="11" title="Limitation of Liability">
              <p>
                To the maximum extent permitted by applicable law:
              </p>
              <ul style={listStyle}>
                <li>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, or business opportunities.</li>
                <li>Our total aggregate liability arising from or related to the Service shall not exceed the total fees you paid to us in the 12 months preceding the claim.</li>
              </ul>
              <p>
                <strong>Nothing in these Terms excludes or limits liability for:</strong> (a) death or personal injury caused by negligence; (b) fraud or fraudulent misrepresentation; or (c) any other liability that cannot be excluded or limited under applicable law.
              </p>
            </LegalSection>

            {/* 12 */}
            <LegalSection number="12" title="Indemnification">
              <p>
                You agree to indemnify and hold harmless 0Billions Inc., its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising out of:
              </p>
              <ul style={listStyle}>
                <li>Your use of the Service or violation of these Terms.</li>
                <li>Content published on your website through the Service.</li>
                <li>Your violation of any third-party rights, including intellectual property rights.</li>
                <li>Any dispute between you and your customers or end users.</li>
              </ul>
            </LegalSection>

            {/* 13 */}
            <LegalSection number="13" title="Force Majeure">
              <p>
                Neither party shall be liable for any failure or delay in performing its obligations where such failure or delay arises from circumstances beyond its reasonable control, including but not limited to natural disasters, acts of government, internet outages, power failures, or pandemics.
              </p>
            </LegalSection>

            {/* 14 */}
            <LegalSection number="14" title="Governing Law and Dispute Resolution">
              <p>
                These Terms are governed by the laws of the Province of British Columbia, Canada, without regard to its conflict of law principles.
              </p>
              <p>
                Any disputes arising from these Terms or the Service shall be resolved in the courts of British Columbia, Canada.
              </p>
              <p>
                <strong>UK residents:</strong> Nothing in this section prevents you from bringing a claim in the courts of England and Wales (or Scotland or Northern Ireland, if applicable). Your statutory rights as a consumer are not affected by this clause.
              </p>
              <p>
                <strong>US residents:</strong> To the extent permitted by law, you agree to resolve disputes through binding arbitration on an individual basis, rather than through class actions or class arbitration. You may opt out of this arbitration provision within 30 days of creating your account by notifying us in writing.
              </p>
            </LegalSection>

            {/* 15 */}
            <LegalSection number="15" title="Modifications to These Terms">
              <p>
                We may update these Terms from time to time. If we make material changes, we will notify you by email or through a notice on the Service at least 30 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated Terms.
              </p>
              <p>
                If you do not agree with the modified Terms, you may cancel your subscription before the changes take effect.
              </p>
            </LegalSection>

            {/* 16 */}
            <LegalSection number="16" title="General Provisions">
              <ul style={listStyle}>
                <li><strong>Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.</li>
                <li><strong>Entire agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and us regarding the Service.</li>
                <li><strong>Assignment:</strong> You may not assign or transfer your rights under these Terms without our prior written consent. We may assign our rights in connection with a merger, acquisition, or sale of assets.</li>
                <li><strong>Waiver:</strong> Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision.</li>
              </ul>
            </LegalSection>

            {/* 17 */}
            <LegalSection number="17" title="Contact Us">
              <p>If you have questions about these Terms, contact us at:</p>
              <p>
                <strong>Flagship Digital</strong> — a product of 0Billions Inc.<br />
                Email: <a href="mailto:legal@flagshipdigital.com" style={linkStyle}>legal@flagshipdigital.com</a>
              </p>
            </LegalSection>
          </FadeIn>
        </div>
      </SectionWrapper>
    </>
  );
}

/* ── Shared Styles ── */

const subheadingStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "var(--text-body-lg)",
  fontWeight: 600,
  color: "var(--color-heading)",
  marginTop: "1.5rem",
  marginBottom: "0.75rem",
};

const listStyle: React.CSSProperties = {
  paddingLeft: "1.5rem",
  marginBottom: "1rem",
};

const linkStyle: React.CSSProperties = {
  color: "var(--color-brass)",
  textDecoration: "underline",
  textUnderlineOffset: "3px",
};

/* ── Legal Section Component ── */

function LegalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-h4)",
          fontWeight: 700,
          color: "var(--color-heading)",
          marginBottom: "1rem",
        }}
      >
        {number}. {title}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {children}
      </div>
    </div>
  );
}
