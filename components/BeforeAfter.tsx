'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Sparkles, SlidersHorizontal, ArrowLeftRight } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="avant-apres" className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
          <div className="eyebrow-badge">
            TRANSFORMATION &amp; SAVOIR-FAIRE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '16px' }}>
            La métamorphose en direct.
          </h2>
          <p style={{ fontSize: '17px', color: '#64748b' }}>
            Faites glisser le curseur pour apprécier le niveau d'exigence et le soin apporté à chaque détail lors de nos rénovations complètes à Toulouse.
          </p>
        </div>

        {/* Interactive Slider Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1050px',
            margin: '0 auto',
            aspectRatio: '16/9',
            maxHeight: '580px',
            borderRadius: '24px',
            overflow: 'hidden',
            cursor: 'ew-resize',
            userSelect: 'none',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid rgba(15, 23, 42, 0.08)',
          }}
        >
          {/* AFTER Image (Full background) */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image
              src="/after-salon.jpg"
              alt="Salon rénové haut de gamme à Toulouse"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            {/* After Tag */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(8px)',
                color: '#ffffff',
                padding: '8px 16px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Sparkles size={14} color="#60a5fa" />
              <span>APRÈS RÉNOVATION L.I.N</span>
            </div>
          </div>

          {/* BEFORE Image (Clipped layer) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: `${sliderPosition}%`,
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'relative', width: containerRef.current ? containerRef.current.clientWidth : '1050px', height: '100%' }}>
              <Image
                src="/before-salon.jpg"
                alt="État initial avant rénovation"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            {/* Before Tag */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(8px)',
                color: '#ffffff',
                padding: '8px 16px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}
            >
              AVANT TRAVAUX
            </div>
          </div>

          {/* Slider Divider Bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${sliderPosition}%`,
              width: '3px',
              backgroundColor: '#ffffff',
              boxShadow: '0 0 12px rgba(0,0,0,0.4)',
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
            }}
          >
            {/* Center Handle Button */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                border: '2px solid rgba(15, 23, 42, 0.08)',
              }}
            >
              <ArrowLeftRight size={20} />
            </div>
          </div>
        </div>

        {/* Quick presets & hint */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '24px' }}>
          <button
            onClick={() => setSliderPosition(20)}
            style={{
              background: sliderPosition === 20 ? '#0f172a' : '#f1f5f9',
              color: sliderPosition === 20 ? '#ffffff' : '#475569',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 500,
              transition: 'all 0.2s',
            }}
          >
            Voir Avant (80%)
          </button>
          <button
            onClick={() => setSliderPosition(50)}
            style={{
              background: sliderPosition === 50 ? '#0f172a' : '#f1f5f9',
              color: sliderPosition === 50 ? '#ffffff' : '#475569',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 500,
              transition: 'all 0.2s',
            }}
          >
            Vue Comparée (50/50)
          </button>
          <button
            onClick={() => setSliderPosition(80)}
            style={{
              background: sliderPosition === 80 ? '#0f172a' : '#f1f5f9',
              color: sliderPosition === 80 ? '#ffffff' : '#475569',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 500,
              transition: 'all 0.2s',
            }}
          >
            Voir Après (80%)
          </button>
        </div>

      </div>
    </section>
  );
}
