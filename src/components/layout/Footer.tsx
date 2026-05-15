import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const services = [
  "Event Management Services",
  "Digital Event Management Solutions",
  "Production",
  "Exhibition Management",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const FlickrIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="7" cy="12" r="4.5"/><circle cx="17" cy="12" r="4.5"/></svg>;
const TikTokIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.1a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.47z"/></svg>;

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/eventsfactoryrw/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/eventsfactoryrwanda", label: "Facebook" },
  { icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46L20 4"/></svg>, href: "https://twitter.com/eventsfactoryrw", label: "X" },
  { icon: Youtube, href: "https://www.youtube.com/@EventsFactoryRw", label: "YouTube" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/company/events-factory-rwanda/", label: "LinkedIn" },
  { icon: FlickrIcon, href: "https://www.flickr.com/people/199472815@N07/", label: "Flickr" },
  { icon: TikTokIcon, href: "https://www.tiktok.com/@eventsfactoryrw", label: "TikTok" },
];

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-oswald), Oswald, sans-serif",
  fontSize: "14px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.15em",
  color: "#FFFFFF",
  marginBottom: "24px",
  margin: "0 0 24px 0",
};

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-inter), Inter, sans-serif",
  fontSize: "14px",
  color: "#9CA3AF",
  textDecoration: "none",
  transition: "color 0.2s",
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A0A0A", borderTop: "1px solid #222222" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px" }}>
        <div className="ef-grid-footer">
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "inline-block" }}>
              <Image
                src="/Events-Factory-Logo_W_with-Tagline(1).png"
                alt="Events Factory"
                width={200}
                height={56}
                style={{ height: "48px", width: "auto", objectFit: "contain" }}
              />
            </Link>
            <p style={{ marginTop: "16px", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "14px", color: "#9CA3AF", lineHeight: 1.7 }}>
              Rwanda&apos;s premier event management company. We craft extraordinary
              experiences that leave lasting impressions.
            </p>
            {/* Socials */}
            <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid #222222",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9CA3AF",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={headingStyle}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={linkStyle}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={headingStyle}>Services</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" style={linkStyle}>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={headingStyle}>Contact</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <MapPin size={16} color="#C41B1B" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "14px", color: "#9CA3AF" }}>
                  Kigali, Rwanda
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Phone size={16} color="#C41B1B" style={{ flexShrink: 0 }} />
                <a href="tel:+250788322335" style={linkStyle}>
                  +250 788 322 335
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Mail size={16} color="#C41B1B" style={{ flexShrink: 0 }} />
                <a href="mailto:info@eventsfactory.rw" style={linkStyle}>
                  info@eventsfactory.rw
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ICCA Membership */}
        <div
          style={{
            marginTop: "48px",
            paddingTop: "32px",
            borderTop: "1px solid #222222",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Image
            src="/icca-logo.png"
            alt="ICCA Member"
            width={120}
            height={40}
            style={{ height: "32px", width: "auto", objectFit: "contain", opacity: 0.8 }}
          />
          <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "13px", color: "#9CA3AF", margin: 0 }}>
            Proud member of the International Congress and Convention Association (ICCA)
          </p>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "24px",
            paddingTop: "24px",
            borderTop: "1px solid #222222",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "#9CA3AF", margin: 0 }}>
            © {new Date().getFullYear()} Events Factory Rwanda. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "12px", color: "#9CA3AF", margin: 0, fontStyle: "italic" }}>
            Professional Conference Organiser · Crafting Extraordinary Experiences
          </p>
        </div>
      </div>
    </footer>
  );
}
