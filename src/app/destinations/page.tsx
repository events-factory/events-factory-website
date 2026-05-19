import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  ArrowRight,
  Truck,
  Presentation,
  HeadphonesIcon,
  CheckCircle2,
  Award,
  Clock,
  Users,
  Cpu,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "DMC Rwanda | MICE, Corporate Incentive Travel & Tours | Events Factory",
  description:
    "Events Factory Rwanda is your Destination Management Company (DMC) for MICE travel, corporate incentive trips, conference pre/post tours, gorilla trekking, wildlife safaris, and luxury experiences. Conference Organizer Kigali.",
  keywords: [
    'MICE Rwanda',
    'DMC Rwanda',
    'Conference Organizer Kigali',
    'Corporate Events Rwanda',
    'Event Agency Rwanda',
    'Conference Management Services',
    'Event Planning Rwanda',
    'PCO Rwanda',
    'incentive travel Rwanda',
    'corporate retreat Rwanda',
  ],
};

const dmcServices = [
  "Airport meet & greet services",
  "VIP protocol and diplomatic handling",
  "Accommodation sourcing & management",
  "Ground transportation & shuttle coordination",
  "Incentive travel programmes",
  "Cultural and experiential tourism",
  "Gala dinners & themed events",
  "Team-building activities",
  "Conference pre/post tours",
  "Concierge and multilingual support",
  "Security coordination and logistics",
  "Delegate hospitality management",
];

const rwandaFacts = [
  { label: "Capital city", value: "Kigali", sub: "Africa's cleanest and safest capital" },
  { label: "Best time to visit", value: "All year round", sub: "Dry season: Jun–Sep & Dec–Feb" },
  { label: "Mountain gorillas", value: "Half the world's", sub: "Protected in Volcanoes National Park" },
  { label: "MICE revenue 2025", value: "USD 94.7M", sub: "+11% growth year on year" },
  { label: "International events 2025", value: "165 events", sub: "UCI World Championships, MWC & more" },
  { label: "ICCA Africa ranking", value: "Top 3 in Africa", sub: "Leading association meetings destination" },
];

const tours = [
  {
    image: "/dmc/Gorillas-25042024_VolcanoesSafaris_1931.jpg",
    tag: "Signature",
    title: "Gorilla Trekking — Volcanoes National Park",
    description:
      "Nothing prepares you for the moment you encounter a mountain gorilla in the wild. In the mist-shrouded Virunga Mountains, metres from a silverback — Africa's most exclusive and unforgettable wildlife encounter. Ideal for VIP delegates, incentive groups, and executive retreats.",
    features: ["Permit booking", "Expert guides", "Luxury lodge", "Volcanoes NP"],
  },
  {
    image: "/dmc/Rwanda_Akagera_Zebras.jpg",
    tag: "Wildlife",
    title: "Akagera — Big Five Safari",
    description:
      "Rwanda's only savannah park. Game drives, boat cruises on Lake Ihema, rhino tracking, and bush dinners under the stars — a full Big Five experience.",
    features: ["Game drives", "Boat cruises", "Bush dinners", "Big Five"],
  },
  {
    image: "/dmc/nyungwe-forest-national-park.jpg",
    tag: "Nature",
    title: "Nyungwe — Canopy Walk & Rainforest",
    description:
      "Walk 70 m above Africa's oldest rainforest. Chimpanzee trekking and guided nature trails through 1,000 km² of pristine wilderness.",
    features: ["Canopy walkway", "Chimp trekking", "Bird watching", "Guided hikes"],
  },
  {
    image: "/dmc/kigali-the-clean-and.jpg",
    tag: "Urban",
    title: "Kigali City & Cultural Experiences",
    description:
      "Africa's cleanest, safest capital. Art galleries, coffee tasting, memorial tours, culinary immersions, and Rwanda's remarkable innovation story — from Kigali Convention Centre to the INEMA Arts Centre.",
    features: ["Genocide Memorial", "Art & culture", "Fine dining", "City by night"],
  },
  {
    image: "/dmc/Kivu-Marina-Bay-1.webp",
    tag: "Wellness",
    title: "Lake Kivu — Lakeside Retreat",
    description:
      "Boat cruises, kayaking, watersports, beachside gala dinners, and executive wellness offsites on Africa's Great Lake.",
    features: ["Kayaking", "Island hopping", "Sunset cruise", "Beach resorts"],
  },
  {
    image: "/dmc/Tea_Plantation.jpg",
    tag: "Culture",
    title: "Tea Trails & Cultural Immersion",
    description:
      "Walk through lush tea estates in the highlands, visit local farming cooperatives, join a cooking class, and experience authentic Rwandan village life.",
    features: ["Tea estate visit", "Village immersion", "Cooking class", "Cultural exchange"],
  },
  {
    image: "/dmc/Kigali-Golf-Resort-Villas-Kigali-Rwanda-TortoisePathcom-6-816x1024.webp",
    tag: "Leisure",
    title: "Golf — Kigali Golf Resort",
    description:
      "Tee off at the prestigious Kigali Golf Resort & Villas, set against stunning hillside views. A perfect executive leisure activity between sessions — ideal for incentive groups and VIP delegates.",
    features: ["18-hole course", "VIP tee times", "Resort facilities", "Corporate packages"],
  },
  {
    image: "/dmc/oonh-resort-view-drone-17.jpg",
    tag: "Wellness",
    title: "Luxury Wellness & Retreat",
    description:
      "Reconnect and restore at Rwanda's finest luxury lodges and wellness retreats. Spa treatments, yoga at altitude, forest bathing in Nyungwe, and curated executive recovery programmes in extraordinary natural settings.",
    features: ["Luxury spa", "Forest bathing", "Yoga & meditation", "Executive retreats"],
  },
];

const impact = [
  { number: "430+", label: "International conferences" },
  { number: "265K+", label: "Delegates hosted" },
  { number: "250+", label: "Exhibitions managed" },
  { number: "20", label: "Years of experience" },
];

const whyEF = [
  {
    number: "01",
    icon: Award,
    title: "ICCA & RAPCO Member",
    description:
      "Dual membership in the world's leading congress association (ICCA) and Rwanda's own professional body (RAPCO) — global reach, local accountability.",
  },
  {
    number: "02",
    icon: Clock,
    title: "20 Years of Experience",
    description:
      "Established in 2006, our seasoned team brings two decades of hands-on expertise across international conferences, incentive programmes, and government events.",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Proprietary Technology",
    description:
      "SmartEvent and SmartBookings — our own platforms for seamless delegate registration, accreditation, accommodation booking across 90+ curated properties.",
  },
  {
    number: "04",
    icon: Truck,
    title: "End-to-End Logistics",
    description:
      "Ground transport, accommodation, park permits, and F&B — every detail managed so your delegates experience Rwanda without friction.",
  },
  {
    number: "05",
    icon: MapPin,
    title: "Deep Destination Knowledge",
    description:
      "Two decades of supplier relationships — with hotels, national parks, the Rwanda Convention Bureau, and government bodies — run deep.",
  },
  {
    number: "06",
    icon: Users,
    title: "Full In-House Capabilities",
    description:
      "AV production, simultaneous interpretation with AIIC-accredited interpreters, exhibition management, and digital event solutions — all under one roof.",
  },
  {
    number: "07",
    icon: Presentation,
    title: "MICE Specialists",
    description:
      "We blend world-class meetings and conferences with extraordinary excursions — turning your corporate event into an experience delegates remember.",
  },
  {
    number: "08",
    icon: HeadphonesIcon,
    title: "24/7 On-Ground Support",
    description:
      "Multilingual teams — English, French, Kinyarwanda and beyond — providing round-the-clock delegate support from arrival to departure.",
  },
];

export default function DestinationsPage() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          backgroundColor: "#0C0C0C",
          position: "relative",
          overflow: "hidden",
          backgroundImage: "url(/dmc/50489669208_fc63428e08_o.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "80px",
        }}
      >
        {/* Top gradient — keeps transparent navbar readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(12,12,12,0.65) 0%, transparent 28%)",
          }}
        />
        {/* Diagonal gradient — lightened so image is visible */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(170deg, rgba(12,12,12,0.05) 0%, rgba(12,12,12,0.35) 50%, rgba(12,12,12,0.6) 100%)",
          }}
        />
        {/* Left-side gradient — lightened */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(12,12,12,0.45) 0%, transparent 65%)",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", width: "100%" }}>
          <AnimatedSection>
            <SectionLabel>Destination Management Company</SectionLabel>
            <h1
              style={{
                fontFamily: "var(--font-oswald), Oswald, sans-serif",
                fontSize: "clamp(40px, 7vw, 76px)",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#FFFFFF",
                lineHeight: 1,
                margin: "8px 0 0 0",
              }}
            >
              Rwanda&apos;s <span style={{ color: "#C41B1B" }}>Destination</span>
              <br />
              <span style={{ fontWeight: 300, fontSize: "0.8em" }}>...we make it happen</span>
            </h1>
            <p
              style={{
                marginTop: "24px",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                color: "#9CA3AF",
                fontSize: "17px",
                maxWidth: "560px",
                lineHeight: 1.78,
              }}
            >
              Rwanda&apos;s leading event management company and MICE specialist. Our DMC services combine local expertise, strong supplier networks, and end-to-end conference management to ensure every delegate experiences Rwanda beyond the conference room.
            </p>
            <div style={{ marginTop: "36px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  backgroundColor: "#C41B1B",
                  color: "#FFFFFF",
                  fontFamily: "var(--font-oswald), Oswald, sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                }}
              >
                Plan Your Trip <ArrowRight size={14} />
              </Link>
              <Link
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 24px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "rgba(255,255,255,0.82)",
                  fontFamily: "var(--font-oswald), Oswald, sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                }}
              >
                Our Event Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Rwanda as a Destination */}
      <section style={{ padding: "88px 0", backgroundColor: "#141414" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection>
            <SectionLabel>Rwanda as a destination</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-oswald), Oswald, sans-serif",
                fontSize: "clamp(28px, 4vw, 46px)",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#FFFFFF",
                lineHeight: 1.1,
                margin: "8px 0 20px 0",
              }}
            >
              The Land of a Thousand Hills —{" "}
              <span style={{ color: "#C41B1B" }}>Africa&apos;s Premier MICE Destination</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "16px",
                color: "#9CA3AF",
                lineHeight: 1.8,
                maxWidth: "680px",
                margin: 0,
              }}
            >
              Rwanda is an undiscovered, incredibly beautiful country that has risen to become Africa&apos;s
              top-ranked congress destination. Safe, clean, connected — and home to wildlife found nowhere
              else on earth. Events Factory Rwanda knows every corner of it.
            </p>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4px",
              marginTop: "52px",
              backgroundColor: "#222222",
            }}
            className="ef-grid-2col"
          >
            {/* Video */}
            <AnimatedSection>
              <div style={{ position: "relative", height: "420px", overflow: "hidden", backgroundColor: "#000" }}>
                <iframe
                  src="https://www.youtube.com/embed/v1SIZoSfoIc?autoplay=1&mute=1&loop=1&playlist=v1SIZoSfoIc&rel=0&modestbranding=1&controls=0"
                  title="Rwanda — Land of a Thousand Hills"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              </div>
            </AnimatedSection>

            {/* Facts */}
            <AnimatedSection delay={80}>
              <div
                className="ef-facts-panel"
                style={{
                  backgroundColor: "#0C0C0C",
                  padding: "36px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "20px",
                  height: "420px",
                  boxSizing: "border-box",
                }}
              >
                {rwandaFacts.slice(0, 4).map((fact, i) => (
                  <div
                    key={fact.label}
                    style={{
                      paddingBottom: i < 3 ? "20px" : 0,
                      borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "9px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(196,27,27,0.8)",
                        marginBottom: "6px",
                      }}
                    >
                      {fact.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-oswald), Oswald, sans-serif",
                        fontSize: "17px",
                        color: "#FFFFFF",
                        fontWeight: 400,
                        lineHeight: 1.2,
                      }}
                    >
                      {fact.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.38)",
                        marginTop: "3px",
                      }}
                    >
                      {fact.sub}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Signature Experiences Grid */}
      <section style={{ padding: "64px 0", backgroundColor: "#141414" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection>
            <div style={{ marginBottom: "40px" }}>
              <SectionLabel>Signature Rwanda Experiences &amp; Activities</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-oswald), Oswald, sans-serif",
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  margin: "8px 0 0 0",
                }}
              >
                Curated <span style={{ color: "#C41B1B" }}>Tour Packages</span>
              </h2>
            </div>
          </AnimatedSection>

          <div
            className="ef-services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "8px",
              backgroundColor: "#222222",
            }}
          >
            {tours.map((tour, i) => (
              <AnimatedSection key={tour.title} delay={i * 60} className="h-full">
                <div
                  style={{
                    backgroundColor: "#111111",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    borderTop: "3px solid #C41B1B",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "220px",
                      flexShrink: 0,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    {/* Tag */}
                    <div
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "8px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        padding: "3px 10px",
                        backgroundColor: "#C41B1B",
                        color: "#FFFFFF",
                        fontWeight: 600,
                      }}
                    >
                      {tour.tag}
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "60px",
                        background: "linear-gradient(to bottom, transparent, #111111)",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      padding: "20px 24px 28px",
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-oswald), Oswald, sans-serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        margin: "0 0 10px 0",
                        letterSpacing: "0.05em",
                        lineHeight: 1.3,
                      }}
                    >
                      {tour.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "13px",
                        lineHeight: 1.65,
                        color: "#9CA3AF",
                        margin: "0 0 16px 0",
                        flexGrow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {tour.description}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {tour.features.slice(0, 3).map((feat) => (
                        <span
                          key={feat}
                          style={{
                            fontFamily: "var(--font-inter), Inter, sans-serif",
                            fontSize: "10px",
                            fontWeight: 500,
                            textTransform: "uppercase",
                            letterSpacing: "0.07em",
                            color: "rgba(255,255,255,0.45)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            padding: "3px 8px",
                          }}
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}

          </div>
        </div>
      </section>

      {/* Full-width CTA */}
      <AnimatedSection>
        <Link
          href="/contact"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundImage: "url(/dmc/Boat-Safari-Magashi-Rwanda-1280x854.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "80px 24px",
            textDecoration: "none",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(12,12,12,0.78)" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2
              style={{
                fontFamily: "var(--font-oswald), Oswald, sans-serif",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#FFFFFF",
                margin: "0 0 16px 0",
                lineHeight: 1.1,
              }}
            >
              Planning a Corporate Retreat or{" "}
              <span style={{ color: "#C41B1B" }}>Incentive Trip?</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "16px",
                color: "#9CA3AF",
                margin: "0 auto 32px",
                lineHeight: 1.7,
                maxWidth: "560px",
                width: "100%",
                textAlign: "center",
              }}
            >
              Let us design the perfect Rwanda experience for your group — seamlessly combining
              business objectives with unforgettable excursions.
            </p>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-oswald), Oswald, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "16px 36px",
                backgroundColor: "#C41B1B",
                color: "#FFFFFF",
              }}
            >
              Talk to Our DMC Team <ArrowRight size={16} />
            </span>
          </div>
        </Link>
      </AnimatedSection>

      {/* DMC Services List */}
      <section style={{ padding: "80px 0", backgroundColor: "#0C0C0C", borderBottom: "1px solid #222222" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="ef-grid-2col" style={{ gap: "64px", alignItems: "start" }}>
            <AnimatedSection>
              <SectionLabel>Full-Service DMC</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-oswald), Oswald, sans-serif",
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  margin: "8px 0 20px 0",
                }}
              >
                Our DMC <span style={{ color: "#C41B1B" }}>Services Include</span>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "15px",
                  color: "#9CA3AF",
                  lineHeight: 1.75,
                  margin: 0,
                  maxWidth: "480px",
                }}
              >
                From the moment your delegates land in Kigali to their final departure, we manage every
                touchpoint — combining professional event delivery with authentic Rwandan hospitality.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={80}>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {dmcServices.map((service) => (
                  <li
                    key={service}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      fontSize: "14px",
                      color: "#D1D5DB",
                      borderBottom: "1px solid #1E1E1E",
                      paddingBottom: "12px",
                    }}
                  >
                    <CheckCircle2 size={16} color="#C41B1B" style={{ flexShrink: 0 }} />
                    {service}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Events Factory as your DMC */}
      <section style={{ padding: "96px 0", backgroundColor: "#0C0C0C" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection>
            <div style={{ marginBottom: "56px" }}>
              <SectionLabel>Why Events Factory Rwanda</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-oswald), Oswald, sans-serif",
                  fontSize: "clamp(28px, 4vw, 46px)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  margin: "8px 0 16px 0",
                }}
              >
                The <span style={{ color: "#C41B1B" }}>Difference</span> That Matters
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontSize: "15px",
                  color: "#9CA3AF",
                  lineHeight: 1.75,
                  maxWidth: "560px",
                  margin: 0,
                }}
              >
                Eight reasons why Rwanda&apos;s leading organisations and international MICE buyers choose us
                as their trusted partner.
              </p>
            </div>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2px",
              backgroundColor: "#222222",
            }}
            className="ef-grid-4col"
          >
            {whyEF.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.number} delay={i * 80}>
                  <div
                    style={{
                      backgroundColor: "#111111",
                      padding: "28px 24px",
                      height: "100%",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-oswald), Oswald, sans-serif",
                        fontSize: "36px",
                        fontWeight: 300,
                        lineHeight: 1,
                        color: "rgba(196,27,27,0.58)",
                        marginBottom: "10px",
                      }}
                    >
                      {item.number}
                    </div>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        border: "1px solid rgba(196,27,27,0.4)",
                        backgroundColor: "rgba(196,27,27,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "16px",
                      }}
                    >
                      <Icon size={16} color="#C41B1B" />
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-oswald), Oswald, sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        margin: "0 0 10px 0",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                        fontSize: "12.5px",
                        color: "#9CA3AF",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />

      <style>{`
        body { overflow-x: hidden; }

        .ef-grid-2col {
          grid-template-columns: 1fr !important;
        }
        .ef-services-grid {
          grid-template-columns: 1fr !important;
        }
        .ef-grid-4col {
          grid-template-columns: 1fr 1fr !important;
        }
        .ef-facts-panel {
          height: auto !important;
        }

        @media (min-width: 640px) {
          .ef-services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .ef-grid-4col {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (min-width: 1024px) {
          .ef-grid-2col {
            grid-template-columns: 1fr 1fr !important;
          }
          .ef-facts-panel {
            height: 420px !important;
          }
          .ef-services-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .ef-grid-4col {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </main>
  );
}
