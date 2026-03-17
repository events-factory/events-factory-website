"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { FlickrAlbum, FlickrPhoto } from "@/lib/flickr";
import { getPhotoUrl } from "@/lib/flickr";

const PHOTOS_PER_PAGE = 8;

interface Props {
  albums: FlickrAlbum[];
  initialPhotos: FlickrPhoto[];
}

function getAlbumCoverUrl(album: FlickrAlbum): string {
  return getPhotoUrl(
    { server: album.server, id: album.primary, secret: album.secret },
    "z"
  );
}

export default function PortfolioClient({ albums, initialPhotos }: Props) {
  const [activeAlbum, setActiveAlbum] = useState<string>(albums[0]?.id ?? "");
  const [allPhotos, setAllPhotos] = useState<FlickrPhoto[]>(initialPhotos);
  const [visibleCount, setVisibleCount] = useState(PHOTOS_PER_PAGE);
  const [loading, setLoading] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const visiblePhotos = allPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < allPhotos.length;

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  function scrollAlbums(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }

  async function loadAlbum(albumId: string) {
    if (albumId === activeAlbum) return;
    setActiveAlbum(albumId);
    setVisibleCount(PHOTOS_PER_PAGE);
    setLoading(true);
    try {
      const res = await fetch(`/api/flickr/album?id=${albumId}`);
      const data = await res.json();
      setAllPhotos(data.photos ?? []);
    } catch {
      setAllPhotos([]);
    } finally {
      setLoading(false);
    }
  }

  function loadMore() {
    setVisibleCount((prev) => prev + PHOTOS_PER_PAGE);
  }

  function openLightbox(index: number) {
    setLightbox(index);
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    setLightbox(null);
    document.body.style.overflow = "";
  }

  function prevPhoto() {
    if (lightbox === null) return;
    setLightbox((lightbox - 1 + allPhotos.length) % allPhotos.length);
  }

  function nextPhoto() {
    if (lightbox === null) return;
    setLightbox((lightbox + 1) % allPhotos.length);
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox, allPhotos.length]);

  const activeAlbumData = albums.find((a) => a.id === activeAlbum);

  return (
    <div>
      {/* Album selector strip */}
      <div className="relative mb-16">
        {/* Section label */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-[family-name:var(--font-oswald)] text-sm uppercase tracking-[0.2em] text-[#9CA3AF]">
            Select an Album
            <span className="ml-3 text-[#555]">({albums.length})</span>
          </h2>
          {/* Scroll arrows for desktop */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollAlbums("left")}
              disabled={!canScrollLeft}
              className="w-9 h-9 flex items-center justify-center border border-[#333] text-[#9CA3AF] hover:border-[#C41B1B] hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Scroll albums left"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scrollAlbums("right")}
              disabled={!canScrollRight}
              className="w-9 h-9 flex items-center justify-center border border-[#333] text-[#9CA3AF] hover:border-[#C41B1B] hover:text-white transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Scroll albums right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable album cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {albums.map((album) => {
            const isActive = activeAlbum === album.id;
            const coverUrl = getAlbumCoverUrl(album);
            return (
              <button
                key={album.id}
                onClick={() => loadAlbum(album.id)}
                className="group relative flex-shrink-0 snap-start overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C41B1B]"
                style={{
                  width: "220px",
                  height: "140px",
                }}
              >
                {/* Cover image */}
                <Image
                  src={coverUrl}
                  alt={album.title._content}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="220px"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    background: isActive
                      ? "linear-gradient(to top, rgba(196,27,27,0.85) 0%, rgba(196,27,27,0.3) 50%, transparent 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                  }}
                />
                {/* Active indicator bar */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C41B1B]" />
                )}
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="font-[family-name:var(--font-oswald)] text-xs font-semibold uppercase tracking-wider text-white leading-tight line-clamp-2">
                    {album.title._content}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[10px] text-white/60 mt-1">
                    {album.photos} photos
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active album header */}
      {activeAlbumData && (
        <div style={{ paddingTop: "48px", paddingBottom: "40px", marginBottom: "40px", borderBottom: "1px solid #1a1a1a" }}>
          <h2 className="font-[family-name:var(--font-oswald)] text-2xl md:text-3xl font-bold uppercase text-white leading-tight">
            {activeAlbumData.title._content}
          </h2>
          {(activeAlbumData.description._content || activeAlbumData.photos > 0) && (
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#666] leading-relaxed max-w-4xl" style={{ marginTop: "16px" }}>
              {activeAlbumData.photos} photos
              {activeAlbumData.description._content && (
                <span className="ml-2 text-[#555]">
                  &middot; {activeAlbumData.description._content}
                </span>
              )}
            </p>
          )}
        </div>
      )}

      {/* Photo grid */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: PHOTOS_PER_PAGE }).map((_, i) => (
            <div key={i} className="aspect-square bg-[#141414] animate-pulse" />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {visiblePhotos.map((photo, i) => {
              const url = photo.url_b || photo.url_l || getPhotoUrl(photo, "b");
              return (
                <button
                  key={photo.id}
                  onClick={() => openLightbox(i)}
                  className="group relative aspect-square overflow-hidden bg-[#141414] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C41B1B]"
                >
                  <Image
                    src={url}
                    alt={photo.title || "Event photo"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                    {photo.title && (
                      <p className="p-3 font-[family-name:var(--font-inter)] text-[11px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 leading-tight">
                        {photo.title}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Load More button */}
          {hasMore && (
            <div className="flex justify-center mt-12">
              <button
                onClick={loadMore}
                className="font-[family-name:var(--font-oswald)] text-sm uppercase tracking-[0.15em] px-10 py-4 border border-[#333] text-[#9CA3AF] hover:border-[#C41B1B] hover:text-white hover:bg-[#C41B1B] transition-all duration-300"
              >
                Load More
                <span className="ml-3 text-[#555] text-xs">
                  ({allPhotos.length - visibleCount} remaining)
                </span>
              </button>
            </div>
          )}
        </>
      )}

      {/* Lightbox — navigates through ALL photos, not just visible */}
      {lightbox !== null && allPhotos[lightbox] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 md:left-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Previous photo"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allPhotos[lightbox].url_b || allPhotos[lightbox].url_l || getPhotoUrl(allPhotos[lightbox], "b")}
              alt={allPhotos[lightbox].title || "Event photo"}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 md:right-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Next photo"
          >
            <ChevronRight size={40} />
          </button>

          {/* Bottom bar: title + counter */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-6 px-8 flex items-end justify-between pointer-events-none">
            <p className="font-[family-name:var(--font-inter)] text-sm text-white/80 max-w-lg truncate">
              {allPhotos[lightbox].title}
            </p>
            <span className="font-[family-name:var(--font-oswald)] text-xs text-white/50 uppercase tracking-widest">
              {lightbox + 1} / {allPhotos.length}
            </span>
          </div>
        </div>
      )}

      {/* Hide scrollbar CSS */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
