import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CTABanner() {
  return (
    <section
      style={{
        padding: "112px 0",
        backgroundColor: "#141414",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top & bottom accent lines */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(196,27,27,0.5), transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(196,27,27,0.5), transparent)",
        }}
      />

      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(196,27,27,0.07) 0%, transparent 70%)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 10 }}>
        <AnimatedSection>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-oswald), Oswald, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              marginBottom: "16px",
              color: "#C41B1B",
            }}
          >
            Let&apos;s Work Together
          </span>
          <h2
            style={{
              fontFamily: "var(--font-oswald), Oswald, sans-serif",
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "#FFFFFF",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Ready to Make It{" "}
            <span style={{ color: "#C41B1B" }}>Unforgettable?</span>
          </h2>
          <p
            style={{
              marginTop: "24px",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "18px",
              maxWidth: "560px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.7,
              color: "#9CA3AF",
            }}
          >
            Tell us about your event and let our team craft an experience your
            guests will talk about for years.
          </p>
          <div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "var(--font-oswald), Oswald, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "16px 40px",
                backgroundColor: "#C41B1B",
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              Start Planning
            </Link>
            <Link
              href="/portfolio"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "var(--font-oswald), Oswald, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "16px 40px",
                border: "1px solid #333333",
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              See Our Work
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
