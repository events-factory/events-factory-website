import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Landmark,
  Mic2,
  Users,
  Camera,
  Lightbulb,
  Presentation,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Handshake,
  UtensilsCrossed,
  Theater,
  MonitorSpeaker,
  Languages,
  ClipboardCheck,
  CookingPot,
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
    icon: Building2,
    title: "Event Design & Management",
    description:
      "End-to-end event management from concept to execution. Our experienced team handles every detail — venue selection, vendor coordination, logistics, and on-site management — so you can focus on enjoying the moment.",
    features: ["Concept development", "Budget management", "Vendor sourcing", "On-site coordination"],
  },
  {
    icon: Mic2,
    title: "AV & Technical Production",
    description:
      "State-of-the-art audio-visual setups that transform any space. We provide professional sound systems, LED screens, dynamic lighting rigs, and full technical crew to ensure your event looks and sounds extraordinary.",
    features: ["Professional sound systems", "LED walls & screens", "Stage lighting design", "Live streaming"],
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Conferences, AGMs, product launches, and team-building retreats that reflect your brand's professionalism. We combine creativity with corporate precision to deliver events that achieve your business objectives.",
    features: ["Conference management", "Product launches", "Team-building retreats", "Annual galas"],
  },
  {
    icon: Landmark,
    title: "Government & NGO Events",
    description:
      "High-level summits, ministerial meetings, and institutional events that demand precision, protocol expertise, and flawless logistics. We manage every detail so delegates can focus on what matters.",
    features: ["Summit management", "Protocol coordination", "VIP logistics", "Multi-language support"],
  },
  {
    icon: Presentation,
    title: "Conferences & Exhibitions",
    description:
      "Professional conference management for local, regional, and international events. From registration systems to exhibition booth design, we handle the complexity so delegates can focus on the content.",
    features: ["Registration management", "Exhibition design", "Speaker coordination", "Accreditation systems"],
  },
  {
    icon: Lightbulb,
    title: "Décor & Set Design",
    description:
      "Transformative décor that turns any venue into an immersive experience. Our creative team designs custom sets, floral arrangements, lighting atmospheres, and thematic environments.",
    features: ["Custom set design", "Floral arrangements", "Themed environments", "Furniture rental"],
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description:
      "Capture every meaningful moment with our professional photography and videography team. From same-day edits to cinematic event films, we preserve your memories in stunning quality.",
    features: ["Event photography", "Cinematic videography", "Same-day edits", "Aerial drone footage"],
  },
  {
    icon: Users,
    title: "Brand Activations",
    description:
      "Create genuine connections between your brand and your audience through immersive experiential campaigns. We design activations that spark conversations, drive engagement, and leave lasting impressions.",
    features: ["Experiential marketing", "Pop-up events", "Product sampling", "Social media integration"],
  },
  {
    icon: Sparkles,
    title: "Entertainment & Talent",
    description:
      "From live bands and DJs to spoken word artists and cultural performers, we source and manage world-class entertainment that elevates your event atmosphere.",
    features: ["Live music booking", "DJ services", "Cultural performers", "MC & host services"],
  },
  {
    icon: ShieldCheck,
    title: "Protocol Team",
    description:
      "Professional protocol officers trained to manage VIP arrivals, seating arrangements, and diplomatic etiquette. We ensure every high-profile guest receives the attention and respect they deserve.",
    features: ["VIP reception", "Diplomatic protocol", "Seating coordination", "Guest escorts"],
  },
  {
    icon: Handshake,
    title: "B2B Meetings",
    description:
      "Structured business-to-business matchmaking sessions that connect the right people at the right time. We handle scheduling, venue setup, and follow-up coordination for productive networking.",
    features: ["Matchmaking systems", "Meeting scheduling", "Dedicated meeting rooms", "Follow-up coordination"],
  },
  {
    icon: UtensilsCrossed,
    title: "Dinner & Side Events",
    description:
      "Elegant dinner galas, cocktail receptions, and curated side events that complement your main programme. We manage everything from menu selection to entertainment and ambiance.",
    features: ["Gala dinners", "Cocktail receptions", "Themed evenings", "Menu curation"],
  },
  {
    icon: Theater,
    title: "Stage & Furniture Setup",
    description:
      "Custom stage construction and furniture rental tailored to your event's scale and aesthetic. From conference-style seating to lounge areas, we create the perfect environment.",
    features: ["Custom stage builds", "Furniture rental", "Layout design", "Themed setups"],
  },
  {
    icon: MonitorSpeaker,
    title: "MC & Presenters",
    description:
      "Experienced masters of ceremony and professional presenters who keep your event flowing seamlessly. We source bilingual and multilingual MCs suited to your audience.",
    features: ["Professional MCs", "Bilingual presenters", "Panel moderators", "Award hosts"],
  },
  {
    icon: ClipboardCheck,
    title: "Accreditation & Delegate Management",
    description:
      "Streamlined registration, badge printing, and delegate tracking systems for conferences of any size. We ensure smooth check-in and real-time attendance monitoring.",
    features: ["Online registration", "Badge printing", "QR check-in", "Attendance tracking"],
  },
  {
    icon: CookingPot,
    title: "Hospitality & Catering",
    description:
      "Premium catering services and hospitality management that leave a lasting impression. From local Rwandan cuisine to international menus, we cater to every palate and dietary requirement.",
    features: ["Menu planning", "On-site catering", "Dietary accommodations", "Beverage service"],
  },
  {
    icon: Languages,
    title: "Simultaneous Interpretation",
    description:
      "Professional real-time interpretation services in multiple languages, complete with booth setup and receiver distribution. Essential for international conferences and multilingual events.",
    features: ["Multi-language booths", "Professional interpreters", "Receiver distribution", "Technical setup"],
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
          backgroundImage: "url(/images/54602042741_a0a9895dd9_o.jpg)",
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", backgroundColor: "#222222" }}>
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 60} className="h-full">
                  <div style={{ backgroundColor: "#111111", padding: "40px 32px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
                    <div style={{ width: "52px", height: "52px", border: "1px solid rgba(196,27,27,0.5)", backgroundColor: "rgba(196,27,27,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", flexShrink: 0 }}>
                      <Icon size={22} color="#C41B1B" />
                    </div>
                    <h2 style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "17px", fontWeight: 600, textTransform: "uppercase", color: "#FFFFFF", margin: "0 0 12px 0", letterSpacing: "0.05em" }}>
                      {service.title}
                    </h2>
                    <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "14px", lineHeight: 1.7, color: "#9CA3AF", margin: "0 0 20px 0", flexGrow: 1 }}>
                      {service.description}
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                      {service.features.map((feat) => (
                        <li key={feat} style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "#9CA3AF" }}>
                          <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#C41B1B", flexShrink: 0 }} />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
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
