import type { Metadata } from "next";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Events Factory Rwanda",
  description:
    "Get in touch with Events Factory to plan your next extraordinary event. We're based in Kigali, Rwanda and serve clients across Africa.",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Kigali, Rwanda",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+250 788 322 335",
    href: "tel:+250788322335",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@eventsfactory.rw",
    href: "mailto:info@eventsfactory.rw",
  },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/eventsfa/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/treasurescompanyltd.biz" },
];

export default function ContactPage() {
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
          backgroundImage: "url(/images/54996229182_0613a96bfa_o.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
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
            <SectionLabel>Get In Touch</SectionLabel>
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
              Let&apos;s Plan Your <br />
              <span style={{ color: "#C41B1B" }}>Next Event</span>
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
              Tell us about your vision and we&apos;ll get back to you within 24 hours with a bespoke
              proposal tailored to your needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact section */}
      <section style={{ padding: "64px 0", backgroundColor: "#0C0C0C" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div className="ef-grid-contact">
            {/* Left: Contact info */}
            <div>
              <AnimatedSection>
                <h2 style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "24px", fontWeight: 700, textTransform: "uppercase", color: "#FFFFFF", marginBottom: "32px" }}>
                  Contact Information
                </h2>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0", display: "flex", flexDirection: "column", gap: "24px" }}>
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} style={{ display: "flex", gap: "16px" }}>
                      <div style={{ width: "40px", height: "40px", border: "1px solid #222222", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={16} color="#C41B1B" />
                      </div>
                      <div>
                        <p style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#9CA3AF", marginBottom: "4px", margin: "0 0 4px 0" }}>
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            style={{ fontFamily: "var(--font-inter), Inter, sans-serif", color: "#FFFFFF", textDecoration: "none" }}
                          >
                            {value}
                          </a>
                        ) : (
                          <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", color: "#FFFFFF", margin: 0 }}>{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Social links */}
                <div>
                  <p style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#9CA3AF", marginBottom: "16px" }}>
                    Follow Us
                  </p>
                  <div style={{ display: "flex", gap: "12px" }}>
                    {socials.map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        style={{
                          width: "40px",
                          height: "40px",
                          border: "1px solid #222222",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#9CA3AF",
                          textDecoration: "none",
                        }}
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Hours */}
                <div style={{ marginTop: "40px", padding: "24px", backgroundColor: "#141414", border: "1px solid #222222" }}>
                  <h3 style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#C41B1B", marginBottom: "16px" }}>
                    Office Hours
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {[
                      { day: "Monday — Friday", hours: "8:00 AM – 6:00 PM" },
                      { day: "Saturday", hours: "9:00 AM – 3:00 PM" },
                      { day: "Sunday", hours: "By Appointment" },
                    ].map(({ day, hours }) => (
                      <div key={day} style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "14px" }}>
                        <span style={{ color: "#9CA3AF" }}>{day}</span>
                        <span style={{ color: "#FFFFFF" }}>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Form */}
            <div>
              <AnimatedSection delay={100}>
                <ContactForm />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
