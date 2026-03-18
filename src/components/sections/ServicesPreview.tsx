import Link from "next/link";
import { CalendarCheck, MonitorPlay, Mic2, LayoutTemplate, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    icon: CalendarCheck,
    title: "Event Management Services",
    description:
      "End-to-end planning and execution for corporate events, government summits, galas, and international conferences — delivered with precision and care.",
  },
  {
    icon: MonitorPlay,
    title: "Digital Event Management Solutions",
    description:
      "Seamless hybrid and virtual event experiences powered by cutting-edge platforms, live streaming, real-time engagement tools, and digital accreditation.",
  },
  {
    icon: Mic2,
    title: "Production",
    description:
      "World-class AV production, professional sound systems, LED walls, dynamic lighting rigs, and a full technical crew — ensuring your event looks and sounds extraordinary.",
  },
  {
    icon: LayoutTemplate,
    title: "Exhibition Management",
    description:
      "Custom exhibition booth design, registration systems, accreditation, and floor management — handling every detail so delegates focus on the content.",
  },
];

export default function ServicesPreview() {
  return (
    <section style={{ backgroundColor: "#0C0C0C", padding: "96px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header row */}
        <AnimatedSection>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px", marginBottom: "64px" }}>
            <div>
              <SectionLabel>What We Do</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-oswald), Oswald, sans-serif",
                  fontSize: "clamp(32px, 5vw, 48px)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                Services That{" "}
                <span style={{ color: "#C41B1B" }}>Set Us Apart</span>
              </h2>
            </div>
            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-oswald), Oswald, sans-serif",
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#C41B1B",
                textDecoration: "none",
              }}
            >
              See All Services <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1px",
            backgroundColor: "#222222",
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={i * 100} className="h-full">
                <div
                  style={{
                    backgroundColor: "#111111",
                    padding: "40px 32px",
                    height: "100%",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                      border: "1px solid rgba(196,27,27,0.5)",
                      backgroundColor: "rgba(196,27,27,0.1)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={24} color="#C41B1B" />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-oswald), Oswald, sans-serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      margin: "0 0 12px 0",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: "#9CA3AF",
                      margin: 0,
                      flexGrow: 1,
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Red bottom line */}
                  <div
                    style={{
                      marginTop: "24px",
                      height: "2px",
                      width: "32px",
                      backgroundColor: "#C41B1B",
                    }}
                  />
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
