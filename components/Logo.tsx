import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const heights = {
    sm: 36,
    md: 46,
    lg: 56,
  };

  return (
    <Link href="/" className={`inline-flex items-center gap-3 transition-opacity hover:opacity-90 ${className}`}>
      <div style={{ position: 'relative', height: heights[size], width: 'auto', display: 'flex', alignItems: 'center' }}>
        <Image
          src="/logo.png"
          alt="L.I.N Rénovation Toulouse"
          width={220}
          height={heights[size]}
          style={{ height: heights[size], width: 'auto', objectFit: 'contain' }}
          priority
        />
      </div>
    </Link>
  );
}
