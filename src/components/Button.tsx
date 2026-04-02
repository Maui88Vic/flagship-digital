import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  type?: "button" | "submit";
}

const baseStyles: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  fontFamily: "var(--font-body)",
  fontWeight: 700,
  textDecoration: "none",
  borderRadius: "var(--radius-md)",
  cursor: "pointer",
  transition: "all 250ms ease",
  whiteSpace: "nowrap",
};

const variants: Record<string, React.CSSProperties> = {
  primary: {
    backgroundColor: "var(--color-brass)",
    color: "var(--color-midnight)",
    border: "2px solid var(--color-brass)",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "var(--color-white)",
    border: "2px solid var(--color-border-light)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--color-brass)",
    border: "2px solid transparent",
    padding: "0",
  },
};

const sizes: Record<string, React.CSSProperties> = {
  sm: { fontSize: "0.8125rem", padding: "0.5rem 1.25rem" },
  md: { fontSize: "0.9375rem", padding: "0.75rem 1.75rem" },
  lg: { fontSize: "1rem", padding: "0.875rem 2.25rem" },
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  onClick,
  ariaLabel,
  type = "button",
}: ButtonProps) {
  const style: React.CSSProperties = {
    ...baseStyles,
    ...variants[variant],
    ...(variant !== "ghost" ? sizes[size] : { fontSize: sizes[size].fontSize }),
  };

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" style={style} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} style={style} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} style={style} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
