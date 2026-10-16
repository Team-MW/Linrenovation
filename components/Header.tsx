'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone,
  Menu,
  X,
  ArrowUpRight,
  ChevronRight,
  Layers,
  Sparkles,
  Briefcase,
  ListOrdered,
  Calculator,
  Star,
  MapPin
} from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onOpenDevis?: () => void;
}

const navItems = [
  { label: 'Expertises', href: '#services', icon: Layers },
  { label: 'Avant / Après', href: '#avant-apres', icon: Sparkles },
  { label: 'Réalisations', href: '#realisations', icon: Briefcase },
  { label: 'Notre Méthode', href: '#methode', icon: ListOrdered },
  { label: 'Simulateur', href: '#simulateur', icon: Calculator },
  { label: 'Avis', href: '#avis', icon: Star },
];

export default function Header({ onOpenDevis }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`glass-header ${scrolled ? 'header-scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(248, 250, 252, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
        transition: 'all 0.25s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '84px',
          padding: '0 24px',
        }}
      >
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Logo size="md" />
        </div>

        {/* Desktop Navigation - Perfectly aligned vertically */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '28px',
            height: '100%',
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                height: '100%',
                fontSize: '14.5px',
                fontWeight: 500,
                color: '#334155',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                lineHeight: 1,
                position: 'relative',
                padding: '4px 0',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '14px',
            flexShrink: 0,
          }}
          className="desktop-actions"
        >
          <a
            href="tel:0616219905"
            className="phone-pill-btn"
            title="Appeler L.I.N Rénovation"
            style={{
              padding: '10px 20px',
              fontSize: '14px',
              lineHeight: 1,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Phone size={15} />
            <span>06 16 21 99 05</span>
          </a>

          <button
            onClick={onOpenDevis}
            className="btn-primary"
            style={{
              padding: '10px 20px',
              fontSize: '14px',
              lineHeight: 1,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>Devis Gratuit</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="mobile-trigger-wrap">
          <a
            href="tel:0616219905"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              backgroundColor: '#eff6ff',
              color: '#1d4ed8',
              border: '1px solid #bfdbfe',
            }}
            className="mobile-quick-call"
            title="Appeler"
          >
            <Phone size={18} />
          </a>

          <button
            onClick={() => setMobileMenuOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              border: '1px solid rgba(15, 23, 42, 0.12)',
              backgroundColor: '#ffffff',
              color: '#0f172a',
              boxShadow: 'var(--shadow-sm)',
            }}
            aria-label="Ouvrir le menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Enhanced Full-screen / Overlay Mobile Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Drawer Box */}
          <div
            style={{
              backgroundColor: '#ffffff',
              width: '100%',
              maxWidth: '380px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.15)',
              overflowY: 'auto',
              padding: '24px 20px',
              position: 'relative',
              animation: 'slideInRight 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header: Logo + Close Button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '20px',
                borderBottom: '1px solid #f1f5f9',
                marginBottom: '20px',
              }}
            >
              <Logo size="sm" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  backgroundColor: '#f1f5f9',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #e2e8f0',
                }}
                aria-label="Fermer le menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#94a3b8',
                  marginBottom: '4px',
                  paddingLeft: '6px',
                }}
              >
                Navigation
              </div>

              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      borderRadius: '14px',
                      color: '#1e293b',
                      fontSize: '15px',
                      fontWeight: 500,
                      textDecoration: 'none',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #f1f5f9',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          backgroundColor: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#1d4ed8',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                        }}
                      >
                        <Icon size={16} />
                      </div>
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight size={16} color="#94a3b8" />
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '14px',
                  color: '#1e293b',
                  fontSize: '15px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #f1f5f9',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1d4ed8',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                    }}
                  >
                    <MapPin size={16} />
                  </div>
                  <span>Contact &amp; Visite</span>
                </div>
                <ChevronRight size={16} color="#94a3b8" />
              </a>
            </div>

            {/* Bottom Actions inside drawer */}
            <div
              style={{
                borderTop: '1px solid #f1f5f9',
                paddingTop: '20px',
                marginTop: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <a
                href="tel:0616219905"
                className="phone-pill-btn"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '14px 20px',
                  fontSize: '15px',
                  backgroundColor: '#ffffff',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <Phone size={17} />
                <span>06 16 21 99 05</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDevis?.();
                }}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '14px 20px',
                  fontSize: '15px',
                }}
              >
                <span>Demander un devis gratuit</span>
                <ArrowUpRight size={17} />
              </button>

              <div
                style={{
                  fontSize: '11px',
                  color: '#94a3b8',
                  textAlign: 'center',
                  marginTop: '8px',
                  lineHeight: 1.5,
                }}
              >
                L.I.N RÉNOVATION · Toulouse (31)
                <br />
                Garantie Décennale &amp; RC Pro
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
