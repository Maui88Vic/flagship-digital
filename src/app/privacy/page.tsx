import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Flagship Digital. How we collect, use, and protect your data worldwide.",
};

const lastUpdated = "April 2, 2026";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-label="Privacy policy hero"
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
              Privacy Policy
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
      <SectionWrapper bg="hull" id="privacy-content" ariaLabel="Privacy policy content">
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
            {/* 1. Introduction */}
            <LegalSection number="1" title="Introduction">
              <p>
                Flagship Digital (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides a digital platform for marine service providers including professional website building, payment processing, lead generation, and related services (the &ldquo;Service&rdquo;).
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website, use our platform, or interact with us. It applies to all users worldwide. Where specific regional laws apply (including PIPEDA in Canada, CCPA in the United States, and UK GDPR in the United Kingdom), we have included additional provisions below.
              </p>
              <p>
                By using our Service, you agree to the collection and use of information as described in this policy. If you do not agree, please do not use the Service.
              </p>
            </LegalSection>

            {/* 2. Information We Collect */}
            <LegalSection number="2" title="Information We Collect">
              <h4 style={subheadingStyle}>2.1 Information You Provide</h4>
              <ul style={listStyle}>
                <li><strong>Account information:</strong> name, email address, phone number, and business name when you sign up or submit a lead form.</li>
                <li><strong>Business content:</strong> logos, photos, text, service descriptions, and other materials you provide for your website.</li>
                <li><strong>Billing information:</strong> payment details processed securely through our third-party payment processor (Stripe). We do not store full credit card numbers on our servers.</li>
                <li><strong>Communications:</strong> messages you send us via email, forms, or support channels.</li>
              </ul>

              <h4 style={subheadingStyle}>2.2 Information Collected Automatically</h4>
              <ul style={listStyle}>
                <li><strong>Usage data:</strong> pages visited, features used, time spent, and interactions with the Service.</li>
                <li><strong>Device information:</strong> browser type, operating system, screen resolution, and language preferences.</li>
                <li><strong>Log data:</strong> IP address, access times, referring URLs, and error logs.</li>
                <li><strong>Cookies and similar technologies:</strong> as described in Section 6 below.</li>
              </ul>

              <h4 style={subheadingStyle}>2.3 Information from Third Parties</h4>
              <ul style={listStyle}>
                <li>Authentication data from sign-in providers (e.g., Google OAuth).</li>
                <li>Payment verification data from Stripe.</li>
              </ul>
            </LegalSection>

            {/* 3. How We Use Your Information */}
            <LegalSection number="3" title="How We Use Your Information">
              <p>We use the information we collect to:</p>
              <ul style={listStyle}>
                <li>Provide, operate, and maintain the Service, including building and hosting your website.</li>
                <li>Process payments and manage your subscription.</li>
                <li>Communicate with you about your account, provide support, and respond to inquiries.</li>
                <li>Send transactional notifications (billing confirmations, service updates).</li>
                <li>Improve and develop the Service through analytics and usage patterns.</li>
                <li>Detect, prevent, and address fraud, abuse, or technical issues.</li>
                <li>Comply with legal obligations and enforce our Terms of Service.</li>
              </ul>
              <p>
                We will not use your personal information for purposes materially different from those described here without notifying you and, where required, obtaining your consent.
              </p>
            </LegalSection>

            {/* 4. Legal Bases for Processing */}
            <LegalSection number="4" title="Legal Bases for Processing">
              <p>
                For users in the United Kingdom (under UK GDPR) and where otherwise applicable, we process personal data on the following lawful bases:
              </p>
              <ul style={listStyle}>
                <li><strong>Performance of a contract:</strong> to provide the Service you have subscribed to and process your payments.</li>
                <li><strong>Legitimate interests:</strong> to improve the platform, perform analytics, prevent fraud, and ensure security — where these interests are not overridden by your rights.</li>
                <li><strong>Consent:</strong> for marketing communications and non-essential cookies. You may withdraw consent at any time.</li>
                <li><strong>Legal obligation:</strong> to comply with tax reporting, law enforcement requests, and other regulatory requirements.</li>
              </ul>
            </LegalSection>

            {/* 5. How We Share Your Information */}
            <LegalSection number="5" title="How We Share Your Information">
              <p>
                We do not sell your personal information. We may share information with the following categories of third parties, solely to operate and improve the Service:
              </p>
              <ul style={listStyle}>
                <li><strong>Payment processing:</strong> Stripe, to securely process transactions.</li>
                <li><strong>Cloud infrastructure:</strong> hosting and database providers (e.g., Vercel, Cloudflare) to deliver the Service.</li>
                <li><strong>Analytics:</strong> tools that help us understand usage patterns (data is aggregated or anonymized where possible).</li>
                <li><strong>Email delivery:</strong> transactional email services for account notifications.</li>
                <li><strong>Domain registration:</strong> registrars that process domain names included with your subscription.</li>
              </ul>
              <p>
                Each third-party provider is contractually obligated to protect your data and use it only for the purposes we specify. We may also disclose information if required by law, court order, or governmental request, or to protect the rights, safety, or property of our users or the public.
              </p>
            </LegalSection>

            {/* 6. Cookies and Tracking */}
            <LegalSection number="6" title="Cookies and Tracking Technologies">
              <p>We use the following types of cookies:</p>
              <ul style={listStyle}>
                <li><strong>Essential cookies:</strong> required for authentication, session management, and core functionality. These cannot be disabled.</li>
                <li><strong>Analytics cookies:</strong> help us understand how visitors interact with the Service. You may opt out through your browser settings or our cookie preferences.</li>
              </ul>
              <p>
                We do not use advertising or tracking cookies. We do not sell data to advertisers.
              </p>
              <p>
                <strong>UK users:</strong> In accordance with PECR (Privacy and Electronic Communications Regulations), we obtain your consent before placing non-essential cookies.
              </p>
            </LegalSection>

            {/* 7. Data Retention */}
            <LegalSection number="7" title="Data Retention">
              <ul style={listStyle}>
                <li><strong>Active accounts:</strong> we retain your data for as long as your account is active and the Service is in use.</li>
                <li><strong>After cancellation:</strong> we retain your data for up to 90 days in a read-only state to allow for reactivation, after which it is permanently deleted.</li>
                <li><strong>Billing records:</strong> retained as required by tax and financial regulations (typically 7 years).</li>
                <li><strong>Aggregated/anonymized data:</strong> may be retained indefinitely for analytics and product improvement.</li>
              </ul>
            </LegalSection>

            {/* 8. Data Security */}
            <LegalSection number="8" title="Data Security">
              <p>
                We implement industry-standard security measures to protect your personal information, including:
              </p>
              <ul style={listStyle}>
                <li>Encryption in transit (TLS 1.2+) and at rest.</li>
                <li>Access controls and role-based authentication for internal systems.</li>
                <li>Regular security reviews and monitoring.</li>
                <li>Secure, PCI-compliant payment processing through Stripe.</li>
              </ul>
              <p>
                While we strive to protect your data, no method of transmission or storage is completely secure. We cannot guarantee absolute security.
              </p>
            </LegalSection>

            {/* 9. International Data Transfers */}
            <LegalSection number="9" title="International Data Transfers">
              <p>
                Your data may be processed and stored in Canada and the United States, regardless of where you are located. If you are accessing the Service from outside these countries, your information will be transferred to and processed in these jurisdictions. We ensure appropriate safeguards are in place for cross-border transfers, including Standard Contractual Clauses (SCCs) where required under UK GDPR or EU GDPR.
              </p>
              <p>
                Canada has been recognized by the UK as providing an adequate level of data protection.
              </p>
            </LegalSection>

            {/* 10. Your Rights */}
            <LegalSection number="10" title="Your Privacy Rights">
              <p>Depending on your location, you have the following rights regarding your personal information:</p>

              <h4 style={subheadingStyle}>All Users</h4>
              <ul style={listStyle}>
                <li><strong>Access:</strong> request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> request that we correct inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> request that we delete your personal data, subject to legal retention requirements.</li>
                <li><strong>Data portability:</strong> request a copy of your data in a structured, machine-readable format.</li>
              </ul>

              <h4 style={subheadingStyle}>United Kingdom Residents (UK GDPR)</h4>
              <ul style={listStyle}>
                <li>Right to restrict or object to processing.</li>
                <li>Right to withdraw consent at any time.</li>
                <li>Right not to be subject to automated decision-making.</li>
                <li>Right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" style={linkStyle}>ico.org.uk</a>.</li>
              </ul>
              <p>We will respond to UK data rights requests within 30 days.</p>

              <h4 style={subheadingStyle}>Canadian Residents (PIPEDA)</h4>
              <ul style={listStyle}>
                <li>Right to access personal information held about you.</li>
                <li>Right to challenge the accuracy and completeness of your data.</li>
                <li>Right to withdraw consent, subject to legal or contractual restrictions.</li>
                <li>Right to file a complaint with the Office of the Privacy Commissioner of Canada at <a href="https://www.priv.gc.ca" style={linkStyle}>priv.gc.ca</a>.</li>
              </ul>
              <p>We will respond to Canadian data rights requests within 30 days.</p>

              <h4 style={subheadingStyle}>United States Residents (CCPA / State Privacy Laws)</h4>
              <ul style={listStyle}>
                <li>Right to know what personal information is collected and how it is used.</li>
                <li>Right to delete personal information.</li>
                <li>Right to correct inaccurate personal information.</li>
                <li>Right to opt out of the sale or sharing of personal information. <strong>We do not sell or share your personal information.</strong></li>
                <li>Right to non-discrimination for exercising your privacy rights.</li>
              </ul>
              <p>We will respond to US data rights requests within 45 days.</p>
              <p>
                To exercise any of these rights, contact us at <a href="mailto:privacy@flagshipdigital.com" style={linkStyle}>privacy@flagshipdigital.com</a>.
              </p>
            </LegalSection>

            {/* 11. Children's Privacy */}
            <LegalSection number="11" title="Children&rsquo;s Privacy">
              <p>
                The Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a child, please contact us and we will promptly delete it.
              </p>
            </LegalSection>

            {/* 12. Changes to This Policy */}
            <LegalSection number="12" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or through a notice on the Service at least 30 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated policy.
              </p>
            </LegalSection>

            {/* 13. Contact Us */}
            <LegalSection number="13" title="Contact Us">
              <p>If you have questions about this Privacy Policy or wish to exercise your privacy rights, contact us at:</p>
              <p>
                <strong>Flagship Digital</strong><br />
                Email: <a href="mailto:privacy@flagshipdigital.com" style={linkStyle}>privacy@flagshipdigital.com</a>
              </p>
              <p>
                For UK-related privacy inquiries, you may also contact our designated representative at the email above.
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
