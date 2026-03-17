"use client";

import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

const partners = [
  { name: "World Health Organization", logo: "/partners/who.jpg" },
  { name: "Rwanda National Police", logo: "/partners/rwanda-national-police.png" },
  { name: "MINICOM", logo: "/partners/minicom.png" },
  { name: "Private Sector Federation", logo: "/partners/psf.png" },
  { name: "UCSF", logo: "/partners/ucsf.jpg" },
  { name: "AIMS", logo: "/partners/aims.jpg" },
  { name: "TWAS", logo: "/partners/twas.png" },
  { name: "FANAF", logo: "/partners/fanaf.jpg" },
  { name: "OESAI", logo: "/partners/oesai.jpg" },
  { name: "ICCA", logo: "/partners/icca.png" },
  { name: "Radisson Blu Kigali", logo: "/partners/radisson-kigali.png" },
  { name: "University of Rwanda", logo: "/partners/university-of-rwanda.png" },
];

export default function Partners() {
  return (
    <section style={{ backgroundColor: "#0C0C0C", padding: "80px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <SectionLabel>Trusted By</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-oswald), Oswald, sans-serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Our Partners & Clients
            </h2>
          </div>
        </AnimatedSection>
      </div>

      {/* Sliding logos track */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "partnersSlide 30s linear infinite",
          }}
        >
          {/* Render twice for seamless loop */}
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              style={{
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "180px",
                height: "100px",
                marginRight: "40px",
                position: "relative",
              }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                sizes="180px"
                style={{
                  objectFit: "contain",
                  padding: "12px",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes partnersSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
