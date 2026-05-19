"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { value: "400+", label: "Events Delivered" },
  { value: "20", label: "Years Experience" },
  { value: "250K+", label: "Delegates Hosted" },
  { value: "250+", label: "ExhibitIONs & Trade Shows" },
];

export default function Stats() {
  return (
    <section style={{ backgroundColor: "#141414", borderTop: "1px solid #222222", borderBottom: "1px solid #222222" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px" }}>
        <div className="ef-grid-stats" style={{ gap: "0" }}>
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 120}>
              <div
                style={{
                  textAlign: "center",
                  padding: "32px 16px",
                  borderRight: i < stats.length - 1 ? "1px solid #222222" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-oswald), Oswald, sans-serif",
                    fontSize: "clamp(36px, 5vw, 60px)",
                    fontWeight: 700,
                    lineHeight: 1,
                    color: "#C41B1B",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    marginTop: "12px",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "#9CA3AF",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
