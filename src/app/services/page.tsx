import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarCheck,
  MonitorPlay,
  Mic2,
  LayoutTemplate,
  Languages,
  Package,
  Lightbulb,
  ClipboardCheck,
  Handshake,
  MapPin,
  ShieldCheck,
  Truck,
  Palette,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Services | Events Factory Rwanda",
  description:
    "From corporate conferences and summits to AV production and brand activations — discover the full range of event services offered by Events Factory Rwanda, your trusted PCO.",
};

const services = [
  {
    icon: CalendarCheck,
    image: "/services/event management services.jpg",
    title: "Event Management Services",
    description:
      "End-to-end planning and execution for corporate events, government summits, galas, and international conferences — delivered with precision and care.",
    features: ["Concept development", "Budget management", "Vendor sourcing", "On-site coordination"],
  },
  {
    icon: MonitorPlay,
    image: "/services/Digital Event Management Solutions.jpg",
    title: "Digital Event Management Solutions",
    description:
      "Seamless hybrid and virtual event experiences powered by cutting-edge platforms, live streaming, real-time engagement tools, and digital accreditation.",
    features: ["Hybrid events", "Live streaming", "Virtual platforms", "Digital accreditation"],
  },
  {
    icon: Mic2,
    image: "/images/54602042741_a0a9895dd9_o.jpg",
    title: "Production Services",
    description:
      "World-class AV production, professional sound systems, LED walls, dynamic lighting rigs, and a full technical crew — ensuring your event looks and sounds extraordinary.",
    features: ["Professional sound", "LED walls & screens", "Stage lighting design", "Live streaming"],
  },
  {
    icon: LayoutTemplate,
    image: "/services/Exhibition Management Services.jpg",
    title: "Exhibition Management Services",
    description:
      "Custom exhibition booth design, floor management, registration systems, and accreditation — handling every logistical detail so delegates can focus on the content.",
    features: ["Booth design", "Floor management", "Registration systems", "Accreditation"],
  },
  {
    icon: Languages,
    image: "/services/Simultaneous Interpretation Services.jpg",
    title: "Simultaneous Interpretation Services",
    description:
      "Professional real-time interpretation services in multiple languages, complete with booth setup and receiver distribution. Essential for international conferences.",
    features: ["Multi-language booths", "Professional interpreters", "Receiver distribution", "Technical setup"],
  },
  {
    icon: Package,
    image: "/services/Rental Services.jpg",
    title: "Rental Services",
    description:
      "Comprehensive inventory of event equipment available for rental — from staging and furniture to AV gear, tents, and décor — tailored to any event scale.",
    features: ["AV equipment", "Staging & furniture", "Tents & structures", "Décor items"],
  },
  {
    icon: Lightbulb,
    image: "/services/Event Strategy and Programme Design.jpg",
    title: "Event Strategy & Programme Design",
    description:
      "Development of the overall event concept, objectives, and format — combined with structured programme design, session flow, speaker coordination, and thematic coherence for impactful delivery.",
    features: ["Concept & objectives", "Format planning", "Programme structuring", "Speaker flow"],
  },
  {
    icon: ClipboardCheck,
    image: "/services/Project Management and Coordination.jpg",
    title: "Project Management & Coordination",
    description:
      "End-to-end management of all event components, timelines, deliverables, and service providers to ensure seamless execution from brief to closing.",
    features: ["Timeline management", "Deliverable tracking", "Vendor coordination", "Risk management"],
  },
  {
    icon: Handshake,
    image: "/services/Networking and Social Events.jpg",
    title: "Networking & Social Events",
    description:
      "Curated gala dinners, cocktail receptions, and networking experiences that bring delegates, partners, and stakeholders together in memorable settings.",
    features: ["Gala dinner production", "Cocktail receptions", "Delegate networking", "VIP hospitality"],
  },
  {
    icon: MapPin,
    image: "/images/Kigali_convention_center.jpg",
    title: "Venue Sourcing & Management",
    description:
      "Identification, contracting, and full operational management of venues, including site inspections, layout planning, and venue liaison.",
    features: ["Site inspections", "Contract negotiation", "Layout design", "Venue liaison"],
  },
  {
    icon: ShieldCheck,
    image: "/services/Protocol and VIP Management.jpg",
    title: "Protocol & VIP Management",
    description:
      "Planning and delivery of official protocol services, including VIP handling, seating plans, flags, precedence, and official ceremonies.",
    features: ["VIP reception", "Diplomatic protocol", "Seating coordination", "Official ceremonies"],
  },
  {
    icon: Truck,
    image: "/services/Logistics Planning and On-Site Operations.jpg",
    title: "Logistics Planning & On-Site Operations",
    description:
      "Comprehensive logistics coordination including equipment, materials, staff deployment, and operational flow during the event.",
    features: ["Equipment logistics", "Staff deployment", "Materials management", "On-site flow"],
  },
  {
    icon: Palette,
    image: "/services/Event Branding and Visual Identity.jpg",
    title: "Event Branding & Visual Identity",
    description:
      "Design coordination and deployment of event branding across venues, signage, backdrops, stage design, and all printed materials.",
    features: ["Venue branding", "Signage & backdrops", "Stage design", "Print materials"],
  },
];

const process = [
  {
    step: "01",
    title: "Brief",
    description: "Tell us your vision, budget, and goals. We listen and ask the right questions.",
  },
  {
    step: "02",
    title: "Design",
    description: "Our creative team develops a bespoke concept and detailed event proposal.",
  },
  {
    step: "03",
    title: "Execute",
    description: "We handle every detail with precision — from setup to the last guest leaving.",
  },
  {
    step: "04",
    title: "Deliver",
    description: "You enjoy a flawless event. We follow up to ensure complete satisfaction.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Page Hero */}
      <section
        style={{
          paddingTop: "160px",
          paddingBottom: "80px",
          backgroundColor: "#0C0C0C",
          position: "relative",
          overflow: "hidden",
          backgroundImage: "url(/images/54602344410_622b39755c_o.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(12,12,12,0.55) 0%, #0C0C0C 90%)",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <AnimatedSection>
            <SectionLabel>What We Do</SectionLabel>
            <h1
              style={{
                fontFamily: "var(--font-oswald), Oswald, sans-serif",
                fontSize: "clamp(40px, 7vw, 72px)",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#FFFFFF",
                lineHeight: 1,
                margin: "8px 0 0 0",
              }}
            >
              Our <span style={{ color: "#C41B1B" }}>Services</span>
            </h1>
            <p
              style={{
                marginTop: "24px",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                color: "#9CA3AF",
                fontSize: "18px",
                maxWidth: "640px",
                lineHeight: 1.7,
              }}
            >
              From intimate private gatherings to large-scale international conferences, we offer a
              comprehensive suite of event services tailored to bring your vision to life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "64px 0", backgroundColor: "#0C0C0C" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="ef-services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", backgroundColor: "#222222" }}>
            {services.map((service, i) => {
              const Icon = service.icon;
              const hasImage = "image" in service && service.image;
              return (
                <AnimatedSection key={service.title} delay={i * 60} className="h-full">
                  {hasImage ? (
                    /* Image card — photo on top, text below */
                    <div style={{ backgroundColor: "#111111", display: "flex", flexDirection: "column", height: "100%", borderTop: "3px solid #C41B1B" }}>
                      {/* Image */}
                      <div style={{ position: "relative", width: "100%", height: "200px", flexShrink: 0, overflow: "hidden" }}>
                        <Image
                          src={(service as typeof service & { image: string }).image}
                          alt={service.title}
                          fill
                          style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                        {/* Bottom fade into card background */}
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", background: "linear-gradient(to bottom, transparent, #111111)" }} />
                      </div>
                      {/* Text content */}
                      <div style={{ padding: "20px 24px 28px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                        <h2 style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "16px", fontWeight: 600, textTransform: "uppercase", color: "#FFFFFF", margin: "0 0 10px 0", letterSpacing: "0.06em" }}>
                          {service.title}
                        </h2>
                        <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", lineHeight: 1.65, color: "#9CA3AF", margin: "0 0 16px 0", flexGrow: 1, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                          {service.description}
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          {service.features.slice(0, 3).map((feat) => (
                            <span key={feat} style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "10px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.07em", color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.12)", padding: "3px 8px" }}>
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Icon card */
                    <div style={{ backgroundColor: "#111111", padding: "36px 28px", boxSizing: "border-box", display: "flex", flexDirection: "column", borderTop: "3px solid #C41B1B", height: "100%" }}>
                      <div style={{ width: "48px", height: "48px", border: "1px solid rgba(196,27,27,0.4)", backgroundColor: "rgba(196,27,27,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "22px", flexShrink: 0 }}>
                        <Icon size={20} color="#C41B1B" />
                      </div>
                      <h2 style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "16px", fontWeight: 600, textTransform: "uppercase", color: "#FFFFFF", margin: "0 0 12px 0", letterSpacing: "0.06em" }}>
                        {service.title}
                      </h2>
                      <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", lineHeight: 1.7, color: "#9CA3AF", margin: "0 0 20px 0", flexGrow: 1, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {service.description}
                      </p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "7px" }}>
                        {service.features.map((feat) => (
                          <li key={feat} style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "11px", color: "#6B7280" }}>
                            <span style={{ width: "3px", height: "3px", borderRadius: "50%", backgroundColor: "#C41B1B", flexShrink: 0 }} />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </AnimatedSection>
              );
            })}

            {/* CTA card filling remaining grid space */}
            <div className="ef-services-cta" style={{ gridColumn: "span 3", minHeight: "100%" }}>
              <AnimatedSection delay={services.length * 60} className="h-full">
              <Link
                href="/contact"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: "#111111",
                  backgroundImage: "url(/images/54602042741_a0a9895dd9_o.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  padding: "40px 32px",
                  height: "100%",
                  minHeight: "100%",
                  boxSizing: "border-box",
                  textDecoration: "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(12,12,12,0.75)" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <h2 style={{
                    fontFamily: "var(--font-oswald), Oswald, sans-serif",
                    fontSize: "clamp(24px, 3vw, 36px)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    margin: "0 0 12px 0",
                    lineHeight: 1.2,
                  }}>
                    Need a Custom <span style={{ color: "#C41B1B" }}>Solution?</span>
                  </h2>
                  <p style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "14px",
                    color: "#9CA3AF",
                    margin: "0 0 24px 0",
                    lineHeight: 1.7,
                    maxWidth: "480px",
                  }}>
                    We tailor our services to fit your unique event needs. Get in touch to discuss your vision.
                  </p>
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "var(--font-oswald), Oswald, sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    padding: "14px 28px",
                    backgroundColor: "#C41B1B",
                    color: "#FFFFFF",
                  }}>
                    Get in Touch <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section style={{ padding: "96px 0", backgroundColor: "#141414" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <SectionLabel>Our Process</SectionLabel>
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
                How We <span style={{ color: "#C41B1B" }}>Work</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="ef-grid-4col" style={{ gap: "32px" }}>
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 100}>
                <div>
                  <span
                    style={{
                      fontFamily: "var(--font-oswald), Oswald, sans-serif",
                      fontSize: "48px",
                      fontWeight: 700,
                      lineHeight: 1,
                      color: "rgba(196,27,27,0.2)",
                    }}
                  >
                    {step.step}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-oswald), Oswald, sans-serif",
                      fontSize: "20px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      marginTop: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      fontSize: "14px",
                      color: "#9CA3AF",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio link */}
      <section style={{ padding: "64px 0", backgroundColor: "#0C0C0C", borderTop: "1px solid #222222", borderBottom: "1px solid #222222" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
          <div>
            <h3
              style={{
                fontFamily: "var(--font-oswald), Oswald, sans-serif",
                fontSize: "24px",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              See Our Services In Action
            </h3>
            <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "14px", color: "#9CA3AF", marginTop: "4px" }}>
              Browse our portfolio of completed events across Rwanda and Africa.
            </p>
          </div>
          <Link
            href="/portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#C41B1B",
              color: "#FFFFFF",
              fontFamily: "var(--font-oswald), Oswald, sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              padding: "16px 32px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            View Portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
