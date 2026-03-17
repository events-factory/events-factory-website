import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { getAlbums, getPhotoUrl } from "@/lib/flickr";

const fallbackEvents = [
  { title: "Christmas Carols Concert", category: "Entertainment", image: "/images/christmas-carols-concert_54999189714_o.jpg" },
  { title: "ISCA Conference", category: "Conference", image: "/images/54602344410_622b39755c_o.jpg" },
  { title: "AV Production", category: "Production", image: "/images/54602042741_a0a9895dd9_o.jpg" },
  { title: "Kwita Izina Exhibition", category: "Exhibition", image: "/images/53466470327_bcafb26d21_o.jpg" },
  { title: "Francophonie Summit", category: "Conference", image: "/images/54945715214_c74c5a1070_o.jpg" },
  { title: "Concert Stage Design", category: "Entertainment", image: "/images/christmas-carols-concert_54999093438_o.jpg" },
];

export default async function PortfolioPreview() {
  const albums = await getAlbums();
  const previewAlbums = albums.slice(0, 6);
  const hasFlickrData = previewAlbums.length > 0;

  return (
    <section style={{ padding: "96px 0", backgroundColor: "#0C0C0C" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <AnimatedSection>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "24px",
              marginBottom: "64px",
            }}
          >
            <div>
              <SectionLabel>Our Work</SectionLabel>
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
                Events That <br />
                <span style={{ color: "#C41B1B" }}>Speak For Themselves</span>
              </h2>
            </div>
            <Link
              href="/portfolio"
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
              View Full Portfolio
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="ef-grid-3col">
          {hasFlickrData
            ? previewAlbums.map((album, i) => {
                const photoUrl = getPhotoUrl(
                  { server: album.server, id: album.primary, secret: album.secret },
                  "b"
                );
                return (
                  <AnimatedSection key={album.id} delay={i * 80}>
                    <Link href="/portfolio" style={{ textDecoration: "none" }}>
                      <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", backgroundColor: "#141414" }}>
                        <Image
                          src={photoUrl}
                          alt={album.title._content}
                          fill
                          style={{ objectFit: "cover", transition: "transform 0.7s ease" }}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }} />
                        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "24px" }}>
                          <span style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "4px", color: "#C41B1B" }}>
                            {album.photos} Photos
                          </span>
                          <h3 style={{ fontFamily: "var(--font-oswald), Oswald, sans-serif", fontSize: "20px", fontWeight: 600, textTransform: "uppercase", color: "#FFFFFF", margin: 0 }}>
                            {album.title._content}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                );
              })
            : fallbackEvents.map((event, i) => (
                <AnimatedSection key={event.title} delay={i * 80}>
                  <Link href="/portfolio" style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "4/3",
                        overflow: "hidden",
                        backgroundColor: "#141414",
                      }}
                    >
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        style={{ objectFit: "cover", transition: "transform 0.7s ease" }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)" }} />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          padding: "24px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-oswald), Oswald, sans-serif",
                            fontSize: "12px",
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                            fontWeight: 600,
                            color: "#C41B1B",
                            marginBottom: "4px",
                          }}
                        >
                          {event.category}
                        </span>
                        <h3
                          style={{
                            fontFamily: "var(--font-oswald), Oswald, sans-serif",
                            fontSize: "20px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            color: "#FFFFFF",
                            margin: 0,
                          }}
                        >
                          {event.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
        </div>
      </div>
    </section>
  );
}
