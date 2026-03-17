interface SectionLabelProps {
  children: string;
  className?: string;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-oswald), Oswald, sans-serif",
        fontSize: "12px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        color: "#C41B1B",
        marginBottom: "16px",
      }}
    >
      {children}
    </span>
  );
}
