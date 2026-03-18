'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'SmartEvent', href: 'https://smartevent.rw/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background-color 0.3s, border-color 0.3s',
          backgroundColor: scrolled || menuOpen ? '#0C0C0C' : 'transparent',
          borderBottom:
            scrolled || menuOpen
              ? '1px solid #222222'
              : '1px solid transparent',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '80px',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Events Factory Home"
            style={{ flexShrink: 0 }}
          >
            <Image
              src="/EF logo Red with White Tagline.png"
              alt="Events Factory"
              width={180}
              height={50}
              style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '32px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((link) => (
              <li
                key={link.href}
                style={{ display: 'none' }}
                className="md-nav-item"
              >
                <Link
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: pathname === link.href ? '#C41B1B' : '#9CA3AF',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="md-nav-cta"
            style={{
              display: 'none',
              alignItems: 'center',
              fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '10px 20px',
              backgroundColor: '#C41B1B',
              color: '#FFFFFF',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            Get in Touch
          </Link>

          {/* Hamburger */}
          <button
            className="md-nav-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            style={{
              display: 'block',
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              padding: '8px',
              cursor: 'pointer',
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            backgroundColor: '#0C0C0C',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-oswald), Oswald, sans-serif',
                fontSize: '28px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: pathname === link.href ? '#C41B1B' : '#FFFFFF',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              marginTop: '16px',
              fontFamily: 'var(--font-oswald), Oswald, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '14px 32px',
              backgroundColor: '#C41B1B',
              color: '#FFFFFF',
              textDecoration: 'none',
            }}
          >
            Get in Touch
          </Link>
        </div>
      )}

      {/* Responsive styles for desktop nav items */}
      <style jsx global>{`
        @media (min-width: 768px) {
          .md-nav-item {
            display: list-item !important;
          }
          .md-nav-cta {
            display: inline-flex !important;
          }
          .md-nav-hamburger {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
