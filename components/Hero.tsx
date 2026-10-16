'use client';

import Image from 'next/image';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Clock, Sparkles } from 'lucide-react';

import Logo from './Logo';

interface HeroProps {
  onOpenDevis?: () => void;
}

export default function Hero({ onOpenDevis }: HeroProps) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: '40px', paddingBottom: '90px' }}>
      {/* Background soft ambient gradient */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1000px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(219, 234, 254, 0.45) 0%, rgba(248, 250, 252, 0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center', marginBottom: '56px' }}>
          
          {/* Logo prominently displayed matching DA reference image */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
            <div
              style={{
                padding: '14px 28px',
                borderRadius: '24px',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(15, 23, 42, 0.08)',
                boxShadow: '0 12px 35px -10px rgba(15, 23, 42, 0.08)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Logo size="lg" asLink={false} />
            </div>
          </div>

          {/* Eyebrow badge matching the DA */}
          <div className="eyebrow-badge animate-fade-in">
            RÉNOVATION TOUS CORPS D'ÉTAT · TOULOUSE
          </div>

          {/* Editorial Serif Heading matching DA */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)',
              lineHeight: 1.12,
              marginBottom: '24px',
              fontWeight: 500,
              letterSpacing: '-0.025em',
            }}
          >
            L'art de rénover votre intérieur avec exigence &amp; sérénité.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              lineHeight: 1.7,
              maxWidth: '680px',
              margin: '0 auto 28px',
              color: '#475569',
            }}
          >
            Entreprise générale de bâtiment à Toulouse. Nous transformons appartements, maisons et espaces professionnels grâce à une coordination tous corps d’état irréprochable et un interlocuteur unique.
          </p>

          {/* Subtle separator from the DA */}
          <div className="da-separator" />

          {/* Interactive Actions with Phone Pill from DA */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginTop: '32px',
            }}
          >
            <a href="tel:0616219905" className="phone-pill-btn" style={{ padding: '14px 28px' }}>
              <Phone size={18} />
              <span style={{ fontSize: '16px' }}>06 16 21 99 05</span>
            </a>

            <button onClick={onOpenDevis} className="btn-primary" style={{ padding: '14px 30px' }}>
              <span>Obtenir mon estimation gratuite</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Reassurance pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              marginTop: '32px',
              fontSize: '13px',
              color: '#64748b',
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} color="#1d4ed8" />
              <span>Garantie Décennale 10 ans</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="#1d4ed8" />
              <span>Interlocuteur unique dédié</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} color="#1d4ed8" />
              <span>Devis détaillé sous 48h</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Card (Clean, Framed, Architectural) */}
        <div
          style={{
            position: 'relative',
            maxWidth: '1100px',
            margin: '0 auto',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.12), 0 0 1px 1px rgba(15, 23, 42, 0.05)',
            border: '1px solid rgba(15, 23, 42, 0.08)',
            backgroundColor: '#ffffff',
          }}
        >
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', maxHeight: '560px' }}>
            <Image
              src="/hero.jpg"
              alt="Rénovation haut de gamme d'appartement à Toulouse par L.I.N Rénovation"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
            {/* Subtle overlay gradient */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.0) 50%)',
              }}
            />

            {/* Floating Info Badge on image */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                color: '#ffffff',
              }}
            >
              <div style={{ background: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(10px)', padding: '16px 24px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#93c5fd', fontWeight: 600, marginBottom: '4px' }}>
                  <Sparkles size={14} />
                  <span>Chantier Réalisé · Carmes Toulouse</span>
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 500 }}>
                  Rénovation complète d'un appartement haussmannien (110 m²)
                </div>
              </div>

              <div style={{ background: '#ffffff', color: '#0f172a', padding: '12px 20px', borderRadius: '14px', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', boxShadow: 'var(--shadow-md)' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }}></span>
                <span>Projets en cours acceptés sur Toulouse &amp; agglomération</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
