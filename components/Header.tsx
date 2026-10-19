'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';
import Logo from './Logo';
import { useQuote } from './QuoteProvider';
import { navItems, site } from '@/lib/site';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { openQuote } = useQuote();

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`glass-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-inner">
        <div className="header-logo">
          <Logo size="md" />
        </div>

        <nav className="desktop-nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${isActive(item.href) ? 'nav-link-active' : ''}`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="desktop-actions">
          <a href={site.phoneHref} className="phone-pill-btn header-phone" style={{ padding: '10px 18px', fontSize: '14px' }}>
            <Phone size={15} />
            <span>{site.phone}</span>
          </a>
          <button onClick={() => openQuote()} className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
            <span>Devis gratuit</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

        <div className="mobile-trigger-wrap">
          <a href={site.phoneHref} className="icon-btn icon-btn-blue" aria-label="Appeler">
            <Phone size={18} />
          </a>
          <button onClick={() => setMobileMenuOpen(true)} className="icon-btn" aria-label="Ouvrir le menu" aria-expanded={mobileMenuOpen}>
            <Menu size={22} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="drawer" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Menu">
            <div className="drawer-head">
              <Logo size="sm" />
              <button onClick={() => setMobileMenuOpen(false)} className="icon-btn" aria-label="Fermer le menu">
                <X size={20} />
              </button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
              {[{ label: 'Accueil', href: '/' }, ...navItems].map((item) => {
                const active = item.href === '/' ? pathname === '/' : isActive(item.href);
                return (
                  <Link key={item.href} href={item.href} className={`drawer-link ${active ? 'drawer-link-active' : ''}`}>
                    <span>{item.label}</span>
                    <ChevronRight size={16} />
                  </Link>
                );
              })}
            </nav>

            <div className="drawer-actions">
              <a href={site.phoneHref} className="phone-pill-btn" style={{ width: '100%' }}>
                <Phone size={17} />
                <span>{site.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuote();
                }}
                className="btn-primary"
                style={{ width: '100%' }}
              >
                <span>Demander un devis gratuit</span>
                <ArrowUpRight size={17} />
              </button>
              <p style={{ fontSize: '12px', color: 'var(--text-light)', textAlign: 'center', marginTop: '6px' }}>
                {site.name} · {site.city} (31) · Garantie décennale
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
