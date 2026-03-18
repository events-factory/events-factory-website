"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

const testimonials = [
  {
    quote:
      "Rwanda Convention Bureau (RCB) acknowledge the professional manner in which Treasures Company/Events Factory Ltd executed the contract. Their effective organization and coordination significantly contributed to the successful delivery of the International Security Conference on Africa (ISCA). We recommend Events Factory for their dedication and excellent performance throughout the contract period and recommend them for their exemplary service.",
    name: "Paul Mugabo",
    title: "Director of Support Services, RCB — International Security Conference on Africa 2025",
    stars: 5,
  },
  {
    quote:
      "Throughout the conference, Events Factory demonstrated exceptional professionalism, efficiency, attention to detail and a seamless coordination of logistics. From technical support to on-site facilitation, their team ensured a smooth and well-organized experience for all attendees.",
    name: "Dr Shivon Byamukama",
    title: "Deputy Vice Chancellor for Administrative and Financial Affairs, University of Global Health Equity — Advancing Medical Education in Africa Conference 2025",
    stars: 5,
  },
  {
    quote:
      "I wholeheartedly recommend Treasures Company Ltd (Events Factory) to anyone seeking reliable, professional and result driven event management services. Whether you are planning a corporate gathering, trade conference, or social event, you can trust them to deliver beyond expectations.",
    name: "George Omuga",
    title: "Managing Director, East African Trade Association — African Tea Convention and Exhibition 2024",
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section style={{ padding: "96px 0", backgroundColor: "#141414" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <SectionLabel>Client Stories</SectionLabel>
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
              What Our <span style={{ color: "#C41B1B" }}>Clients Say</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div style={{ maxWidth: "768px", margin: "0 auto" }}>
            {/* Quote card */}
            <div
              style={{
                backgroundColor: "#0C0C0C",
                border: "1px solid #222222",
                padding: "56px",
                textAlign: "center",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "32px" }}>
                {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                  <Star key={i} size={16} color="#C41B1B" fill="#C41B1B" />
                ))}
              </div>

              <blockquote
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "18px",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: "32px",
                  color: "rgba(255,255,255,0.9)",
                  margin: "0 0 32px 0",
                }}
              >
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              <div>
                <p
                  style={{
                    fontFamily: "var(--font-oswald), Oswald, sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "#FFFFFF",
                    margin: 0,
                  }}
                >
                  {testimonials[current].name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "14px",
                    color: "#C41B1B",
                    marginTop: "4px",
                    margin: "4px 0 0 0",
                  }}
                >
                  {testimonials[current].title}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "32px" }}>
              <div style={{ display: "flex", gap: "8px" }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    style={{
                      height: "2px",
                      width: i === current ? "32px" : "16px",
                      backgroundColor: i === current ? "#C41B1B" : "#222222",
                      transition: "all 0.3s",
                      border: "none",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <button
                  onClick={prev}
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid #222222",
                    backgroundColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9CA3AF",
                    cursor: "pointer",
                  }}
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid #222222",
                    backgroundColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9CA3AF",
                    cursor: "pointer",
                  }}
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
