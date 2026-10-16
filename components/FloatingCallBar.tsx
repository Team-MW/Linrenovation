'use client';

import { Phone, Calendar } from 'lucide-react';

interface FloatingCallBarProps {
  onOpenDevis?: () => void;
}

export default function FloatingCallBar({ onOpenDevis }: FloatingCallBarProps) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 40,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        backgroundColor: 'rgba(15, 23, 42, 0.92)',
        backdropFilter: 'blur(16px)',
        padding: '8px 16px',
        borderRadius: '9999px',
        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        width: 'max-content',
        maxWidth: '90vw',
      }}
      className="mobile-floating-bar"
    >
      <a
        href="tel:0616219905"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: 600,
          padding: '6px 12px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }}
      >
        <Phone size={15} color="#93c5fd" />
        <span>06 16 21 99 05</span>
      </a>

      <button
        onClick={onOpenDevis}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: '#ffffff',
          color: '#0f172a',
          fontSize: '13.5px',
          fontWeight: 600,
          padding: '8px 16px',
          borderRadius: '9999px',
          whiteSpace: 'nowrap',
        }}
      >
        <Calendar size={14} color="#1d4ed8" />
        <span>Devis Gratuit</span>
      </button>

    </div>
  );
}
