'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onOpenDevis?: () => void;
}

export default function Header({ onOpenDevis }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="glass-header">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '84px' }}>
        {/* Brand Logo */}
        <Logo size="md" />

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          <a href="#services" className="nav-link">
            Expertises
          </a>
          <a href="#avant-apres" className="nav-link">
            Avant / Après
          </a>
          <a href="#realisations" className="nav-link">
            Réalisations
          </a>
          <a href="#methode" className="nav-link">
            Notre Méthode
          </a>
          <a href="#simulateur" className="nav-link">
            Simulateur
          </a>
          <a href="#avis" className="nav-link">
            Avis
          </a>
        </nav>

        {/* Actions desktop */}
        <div style={{ display: 'none', alignItems: 'center', gap: '16px' }} className="desktop-actions">
          <a href="tel:0616219905" className="phone-pill-btn" title="Appeler L.I.N Rénovation">
            <Phone size={16} />
            <span>06 16 21 99 05</span>
          </a>

          <button
            onClick={onOpenDevis}
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '14px' }}
          >
            <span>Devis Gratuit</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            border: '1px solid rgba(15, 23, 42, 0.1)',
            background: '#ffffff',
            color: '#0f172a',
          }}
          className="mobile-burger-btn"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            padding: '24px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          }}
          className="mobile-drawer"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '16px', fontWeight: 500, color: '#1e293b', padding: '8px 0' }}
            >
              Expertises Tous Corps d'État
            </a>
            <a
              href="#avant-apres"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '16px', fontWeight: 500, color: '#1e293b', padding: '8px 0' }}
            >
              Avant / Après
            </a>
            <a
              href="#realisations"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '16px', fontWeight: 500, color: '#1e293b', padding: '8px 0' }}
            >
              Nos Réalisations
            </a>
            <a
              href="#methode"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '16px', fontWeight: 500, color: '#1e293b', padding: '8px 0' }}
            >
              Notre Méthode
            </a>
            <a
              href="#simulateur"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '16px', fontWeight: 500, color: '#1e293b', padding: '8px 0' }}
            >
              Simulateur de Devis
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '16px', fontWeight: 500, color: '#1e293b', padding: '8px 0' }}
            >
              Contact & Rendez-vous
            </a>

            <div style={{ paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="tel:0616219905" className="phone-pill-btn" style={{ width: '100%' }}>
                <Phone size={16} />
                <span>06 16 21 99 05</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDevis?.();
                }}
                className="btn-primary"
                style={{ width: '100%' }}
              >
                <span>Demander une étude gratuite</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
