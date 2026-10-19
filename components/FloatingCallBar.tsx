'use client';

import { Phone, Calendar } from 'lucide-react';
import { useQuote } from './QuoteProvider';
import { site } from '@/lib/site';

export default function FloatingCallBar() {
  const { openQuote } = useQuote();

  return (
    <div className="mobile-floating-bar">
      <a href={site.phoneHref} className="floating-call">
        <Phone size={16} color="#93c5fd" />
        <span>Appeler</span>
      </a>
      <button onClick={() => openQuote()} className="floating-quote">
        <Calendar size={15} color="var(--brand-blue)" />
        <span>Devis gratuit</span>
      </button>
    </div>
  );
}
