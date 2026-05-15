'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '640px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#0C0C0C',
      }}
    >
      {/* YouTube background video */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/KIsRlfqPOCY?autoplay=1&mute=1&loop=1&playlist=KIsRlfqPOCY&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3&disablekb=1&start=0&end=36"
          title="Events Factory background"
          allow="autoplay; encrypted-media"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '120vw',
            height: '120vh',
            
            minWidth: '120vw',
            minHeight: '120vh',
            transform: 'translate(-50%, -50%)',
            border: 'none',
          }}
        />
      </div>

      {/* Dark overlay for text readability */}
      <div
        className="ef-hero-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(12,12,12,0) 0%, transparent 55%)',
        }}
      />

      {/* Bottom fade to page background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, transparent 60%, #0C0C0C 100%)',
        }}
      />

      {/* Decorative red accent line — left */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '25%',
          bottom: '25%',
          width: '4px',
          backgroundColor: '#C41B1B',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
        }}
      >
        <div
          style={{
            animation: 'heroFadeIn 1s ease-out forwards',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              fontSize: '12px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              marginBottom: '24px',
              color: '#C41B1B',
            }}
          >
            Kigali · Rwanda · Africa
          </span>

          <h1
            style={{
              fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              fontWeight: 700,
              textTransform: 'uppercase',
              lineHeight: 1,
              margin: 0,
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(40px, 7vw, 96px)',
                color: '#FFFFFF',
                marginBottom: '8px',
                letterSpacing: '-0.02em',
              }}
            >
              We Create Memorable
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(40px, 7vw, 96px)',
                color: '#C41B1B',
                letterSpacing: '-0.02em',
              }}
            >
              Experiences
            </span>
          </h1>

          <p
            style={{
              marginTop: '32px',
              fontSize: '18px',
              maxWidth: '560px',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            From intimate gatherings to large-scale productions, Events Factory
            delivers flawless event experiences that captivate and inspire.
          </p>

          <div
            className="ef-hero-buttons"
            style={{
              marginTop: '40px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <Link
              href="/portfolio"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                padding: '16px 32px',
                backgroundColor: '#C41B1B',
                color: '#FFFFFF',
                textDecoration: 'none',
              }}
            >
              View Our Work <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                padding: '16px 32px',
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#FFFFFF',
                textDecoration: 'none',
                backdropFilter: 'blur(4px)',
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll hint — right side (hidden on mobile) */}
      <div
        className="ef-hide-mobile"
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '32px',
          zIndex: 10,
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          color: 'rgba(255,255,255,0.2)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-oswald), Oswald, sans-serif',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '48px',
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)',
          }}
        />
      </div>
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0px); }
        }
        @media (max-width: 767px) {
          .ef-hero-overlay {
            background: rgba(0,0,0,0.72) !important;
          }
          .ef-hero-buttons {
            flex-direction: column;
          }
          .ef-hero-buttons a {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
