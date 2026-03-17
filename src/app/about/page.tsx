import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Heart, Shield, Lightbulb, Globe, ArrowRight } from "lucide-react";

/* hero bg kept as CSS background-image for reliability */
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About Us | Events Factory Rwanda",
  description:
    "Learn about Events Factory — Rwanda's premier event management company. Our story, mission, values, and the team behind every extraordinary event.",
};

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We pour heart and soul into every event. No detail is too small, no vision too ambitious.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "When we commit, we deliver. Our clients trust us with their most important moments.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description:
      "We push boundaries to create immersive experiences that surprise and delight.",
  },
  {
    icon: Globe,
    title: "Pan-African Vision",
    description:
      "Rooted in Rwanda, we bring African excellence to events across the continent and beyond.",
  },
];

export default function AboutPage() {
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
          backgroundImage: "url(/images/christmas-carols-concert_54998929431_o.jpg)",
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
            <SectionLabel>Who We Are</SectionLabel>
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
              Our <span style={{ color: "#C41B1B" }}>Story</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Statement */}
      <section style={{ padding: "80px 0", backgroundColor: "#141414", borderTop: "1px solid #222222", borderBottom: "1px solid #222222" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection>
            <blockquote
              style={{
                fontFamily: "var(--font-oswald), Oswald, sans-serif",
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 300,
                color: "#FFFFFF",
                lineHeight: 1.2,
                maxWidth: "900px",
                margin: 0,
              }}
            >
              &ldquo;We believe every event is an opportunity to create a{" "}
              <span style={{ color: "#C41B1B" }}>memory that lasts forever</span>
              .&rdquo;
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section style={{ padding: "96px 0", backgroundColor: "#0C0C0C" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="ef-grid-2col">
            <AnimatedSection>
              <SectionLabel>The Beginning</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-oswald), Oswald, sans-serif",
                  fontSize: "36px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  marginBottom: "24px",
                }}
              >
                Born in Kigali, <br />
                <span style={{ color: "#C41B1B" }}>Built for Africa</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontFamily: "var(--font-inter), Inter, sans-serif", color: "#9CA3AF", lineHeight: 1.7, fontSize: "15px" }}>
                <p style={{ margin: 0 }}>
                  Events Factory was founded with a singular belief: that Africa deserves
                  world-class event experiences. Born in the heart of Kigali, we set out to
                  redefine what event management means on the continent.
                </p>
                <p style={{ margin: 0 }}>
                  Over the years, we&apos;ve grown from a small creative team into Rwanda&apos;s most
                  trusted event management company — delivering 200+ events that have brought
                  together leaders, lovers, and communities from across the globe.
                </p>
                <p style={{ margin: 0 }}>
                  Our portfolio spans corporate conferences, government summits, international
                  concerts, brand activations, and high-level government summits.
                  Every event is approached with the same level of dedication: we show up, we
                  deliver, and we make it extraordinary.
                </p>
              </div>
              <Link
                href="/portfolio"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "32px", color: "#C41B1B", fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}
              >
                See Our Work
                <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            {/* Image + Stats side */}
            <AnimatedSection delay={150}>
              <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", marginBottom: "1px" }}>
                <Image
                  src="/images/54602342565_c010c5bc52_o.jpg"
                  alt="ISCA Conference managed by Events Factory"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,12,12,0.6) 0%, transparent 50%)" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "#222222" }}>
                {[
                  { value: "200+", label: "Events Delivered" },
                  { value: "8+", label: "Years of Excellence" },
                  { value: "150+", label: "Happy Clients" },
                  { value: "10+", label: "Countries" },
                ].map((stat) => (
                  <div key={stat.label} style={{ backgroundColor: "#0C0C0C", padding: "40px", textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "48px", fontWeight: 700, color: "#C41B1B" }}>
                      {stat.value}
                    </div>
                    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "#9CA3AF", marginTop: "8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "96px 0", backgroundColor: "#141414" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <SectionLabel>What Drives Us</SectionLabel>
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
                Our <span style={{ color: "#C41B1B" }}>Values</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="ef-grid-4col" style={{ gap: "1px", backgroundColor: "#222222" }}>
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title} delay={i * 100} className="h-full">
                  <div style={{ backgroundColor: "#141414", padding: "40px 32px", height: "100%", boxSizing: "border-box" }}>
                    <div style={{ width: "52px", height: "52px", border: "1px solid rgba(196,27,27,0.5)", backgroundColor: "rgba(196,27,27,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                      <Icon size={22} color="#C41B1B" />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "18px", fontWeight: 600, textTransform: "uppercase", color: "#FFFFFF", margin: "0 0 12px 0" }}>
                      {value.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "14px", lineHeight: 1.7, color: "#9CA3AF", margin: 0 }}>
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us + Team */}
      <section style={{ padding: "96px 0", backgroundColor: "#0C0C0C" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="ef-grid-2col">
            <AnimatedSection delay={100}>
              <div style={{ backgroundColor: "#141414", border: "1px solid #222222", padding: "40px" }}>
                <h3 style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "24px", fontWeight: 700, textTransform: "uppercase", color: "#FFFFFF", marginBottom: "32px" }}>
                  Why Events Factory?
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "24px" }}>
                  {[
                    { title: "Local Expertise, Global Standards", desc: "Deep roots in Rwanda's culture combined with international event management best practices." },
                    { title: "Full-Service Capability", desc: "One team, one vision — from concept to cleanup, we handle everything." },
                    { title: "Proven Track Record", desc: "200+ successfully delivered events, from corporate galas to international conferences." },
                    { title: "24/7 Support", desc: "We're with you at every stage — before, during, and after your event." },
                  ].map((item) => (
                    <li key={item.title} style={{ display: "flex", gap: "16px" }}>
                      <span style={{ width: "4px", minHeight: "20px", backgroundColor: "#C41B1B", flexShrink: 0, marginTop: "4px" }} />
                      <div>
                        <h4 style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "16px", fontWeight: 600, textTransform: "uppercase", color: "#FFFFFF", margin: 0 }}>
                          {item.title}
                        </h4>
                        <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "14px", color: "#9CA3AF", marginTop: "4px", lineHeight: 1.7 }}>
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <SectionLabel>The Team</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-oswald), Oswald, sans-serif",
                  fontSize: "36px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  marginBottom: "24px",
                }}
              >
                People Who <br />
                <span style={{ color: "#C41B1B" }}>Make It Happen</span>
              </h2>
              <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", color: "#9CA3AF", lineHeight: 1.7, marginBottom: "24px", fontSize: "15px" }}>
                Events Factory is powered by a passionate team of event designers, production
                specialists, creative directors, and logistics experts. We bring diverse skills
                together under a shared obsession: delivering extraordinary event experiences.
              </p>
              <Link
                href="/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#C41B1B", color: "#FFFFFF", fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", padding: "16px 32px", textDecoration: "none" }}
              >
                Work With Us
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
