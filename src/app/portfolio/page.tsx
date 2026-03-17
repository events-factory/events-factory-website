import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABanner from "@/components/sections/CTABanner";
import { getAlbums, getAlbumPhotos } from "@/lib/flickr";
import type { FlickrPhoto } from "@/lib/flickr";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio | Events Factory Rwanda",
  description:
    "Browse Events Factory's portfolio of extraordinary events — corporate conferences, government summits, brand activations, concerts, and more across Rwanda and Africa.",
};

export default async function PortfolioPage() {
  const albums = await getAlbums();

  let featuredPhotos: FlickrPhoto[] = [];
  if (albums.length > 0) {
    featuredPhotos = await getAlbumPhotos(albums[0].id, 500);
  }

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
          backgroundImage: "url(/images/christmas-carols-concert_54999189689_o.jpg)",
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
            <SectionLabel>Our Work</SectionLabel>
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
              Our Work <span style={{ color: "#C41B1B" }}>Speaks</span>
              <br />
              For Itself
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
              430+ events delivered across Rwanda and Africa. Each one crafted with precision,
              passion, and an unwavering commitment to excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio content */}
      <section style={{ padding: "64px 0 80px", backgroundColor: "#0C0C0C" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          {albums.length > 0 ? (
            <PortfolioClient albums={albums} initialPhotos={featuredPhotos} />
          ) : (
            <NoFlickrKey />
          )}
        </div>
      </section>

      <CTABanner />
    </main>
  );
}

function NoFlickrKey() {
  const placeholders = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div>
      <p style={{ fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "14px", color: "#9CA3AF", marginBottom: "32px", textAlign: "center" }}>
        Configure your{" "}
        <code style={{ color: "#C41B1B" }}>FLICKR_API_KEY</code> environment variable to load your
        Flickr portfolio.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
        {placeholders.map((i) => (
          <div
            key={i}
            style={{
              aspectRatio: "1",
              backgroundColor: "#141414",
              border: "1px solid #222222",
            }}
          />
        ))}
      </div>
    </div>
  );
}
