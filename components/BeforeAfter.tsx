'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowLeftRight } from 'lucide-react';

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const moveTo = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition(Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  const presets = [
    { value: 20, label: 'Avant' },
    { value: 50, label: 'Comparer' },
    { value: 80, label: 'Après' },
  ];

  return (
    <div>
      <div
        ref={containerRef}
        className="ba-container"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          moveTo(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
        role="slider"
        tabIndex={0}
        aria-label="Comparaison avant / après"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setPosition((p) => Math.max(0, p - 5));
          if (e.key === 'ArrowRight') setPosition((p) => Math.min(100, p + 5));
        }}
      >
        <Image src="/after-salon.jpg" alt="Salon après rénovation" fill sizes="(max-width: 1100px) 100vw, 1050px" style={{ objectFit: 'cover' }} draggable={false} />

        <div className="ba-before" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image src="/before-salon.jpg" alt="Salon avant travaux" fill sizes="(max-width: 1100px) 100vw, 1050px" style={{ objectFit: 'cover' }} draggable={false} />
        </div>

        <span className="ba-tag ba-tag-left">Avant</span>
        <span className="ba-tag ba-tag-right">
          <Sparkles size={13} color="#60a5fa" /> Après
        </span>

        <div className="ba-divider" style={{ left: `${position}%` }}>
          <div className="ba-handle">
            <ArrowLeftRight size={20} />
          </div>
        </div>
      </div>

      <div className="ba-presets">
        {presets.map((p) => (
          <button
            key={p.value}
            onClick={() => setPosition(p.value)}
            className={`pill-toggle ${Math.round(position) === p.value ? 'pill-toggle-active' : ''}`}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
}
