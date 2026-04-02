import { Anchor } from "lucide-react";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section
      aria-label="Page not found"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "4rem var(--section-pad-x)",
        background:
          "linear-gradient(145deg, var(--color-midnight) 0%, var(--color-hull) 100%)",
      }}
    >
      <Anchor
        size={48}
        style={{ color: "var(--color-signal)", marginBottom: "1.5rem", opacity: 0.6 }}
        aria-hidden="true"
      />
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-hero)",
          fontWeight: 700,
          color: "var(--color-white)",
          marginBottom: "1rem",
        }}
      >
        Off the charts.
      </h1>
      <p
        style={{
          fontSize: "var(--text-body-lg)",
          color: "var(--color-fog)",
          marginBottom: "2.5rem",
          maxWidth: "28rem",
        }}
      >
        The page you're looking for doesn't exist or has been moved. Let's get
        you back on course.
      </p>
      <Button href="/" size="lg">
        Back to Home
      </Button>
    </section>
  );
}
