"use client";

import { ArrowRight } from "lucide-react";

export function LeadForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{
        maxWidth: "28rem",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        aria-label="Your name"
        style={{
          width: "100%",
          padding: "0.875rem 1.25rem",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-body)",
          color: "#FFFFFF",
          backgroundColor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "var(--radius-sm)",
          outline: "none",
          transition: "border-color var(--transition-fast)",
        }}
      />
      <input
        type="email"
        name="email"
        placeholder="Email address"
        required
        aria-label="Email address"
        style={{
          width: "100%",
          padding: "0.875rem 1.25rem",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-body)",
          color: "#FFFFFF",
          backgroundColor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "var(--radius-sm)",
          outline: "none",
          transition: "border-color var(--transition-fast)",
        }}
      />
      <input
        type="text"
        name="company"
        placeholder="Business name"
        required
        aria-label="Business name"
        style={{
          width: "100%",
          padding: "0.875rem 1.25rem",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-body)",
          color: "#FFFFFF",
          backgroundColor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "var(--radius-sm)",
          outline: "none",
          transition: "border-color var(--transition-fast)",
        }}
      />
      <input
        type="url"
        name="website"
        placeholder="Existing website (if any)"
        aria-label="Existing website URL"
        style={{
          width: "100%",
          padding: "0.875rem 1.25rem",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-body)",
          color: "#FFFFFF",
          backgroundColor: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "var(--radius-sm)",
          outline: "none",
          transition: "border-color var(--transition-fast)",
        }}
      />
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "1rem",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-body)",
          fontWeight: 600,
          color: "#0A1628",
          backgroundColor: "#C8A04E",
          border: "none",
          borderRadius: "var(--radius-sm)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          transition: "background-color var(--transition-fast)",
        }}
      >
        Get Your Site Built <ArrowRight size={18} />
      </button>
    </form>
  );
}
