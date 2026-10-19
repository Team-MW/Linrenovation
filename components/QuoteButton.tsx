'use client';

import { ArrowRight } from 'lucide-react';
import { useQuote } from './QuoteProvider';

interface QuoteButtonProps {
  service?: string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'light';
  style?: React.CSSProperties;
}

export default function QuoteButton({
  service,
  label = 'Demander un devis gratuit',
  variant = 'primary',
  style,
}: QuoteButtonProps) {
  const { openQuote } = useQuote();
  const className = variant === 'primary' ? 'btn-primary' : variant === 'light' ? 'btn-light' : 'btn-secondary';

  return (
    <button type="button" onClick={() => openQuote(service)} className={className} style={style}>
      <span>{label}</span>
      <ArrowRight size={17} />
    </button>
  );
}
