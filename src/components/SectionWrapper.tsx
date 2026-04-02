interface SectionWrapperProps {
  id?: string;
  bg?: "midnight" | "hull" | "steel";
  overlay?: "dot-grid" | "line-grid" | "none";
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

const bgMap: Record<string, string> = {
  midnight: "section-midnight",
  hull: "section-hull",
  steel: "section-steel",
};

export function SectionWrapper({
  id,
  bg = "midnight",
  overlay = "none",
  children,
  className = "",
  ariaLabel,
}: SectionWrapperProps) {
  const overlayClass = overlay !== "none" ? overlay : "";
  const sectionClasses = [bgMap[bg], overlayClass, className].filter(Boolean).join(" ");

  return (
    <section
      id={id}
      className={sectionClasses}
      aria-label={ariaLabel}
      style={{
        position: "relative",
        paddingTop: "var(--section-pad-y)",
        paddingBottom: "var(--section-pad-y)",
        paddingLeft: "var(--section-pad-x)",
        paddingRight: "var(--section-pad-x)",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      >
        {children}
      </div>
    </section>
  );
}
