import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  asLink?: boolean;
}

export default function Logo({ className = '', size = 'md', asLink = true }: LogoProps) {
  const dimensions = {
    sm: { height: 38, width: 180 },
    md: { height: 50, width: 230 },
    lg: { height: 64, width: 290 },
    xl: { height: 80, width: 360 },
  };

  const { height, width } = dimensions[size];

  const content = (
    <div
      style={{
        position: 'relative',
        height: `${height}px`,
        width: `${width}px`,
        display: 'flex',
        alignItems: 'center',
      }}
      className={className}
    >
      <Image
        src="/logo.png"
        alt="L.I.N Rénovation - Entreprise générale de bâtiment Toulouse"
        width={width}
        height={height}
        style={{
          height: '100%',
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
        }}
        priority
      />
    </div>
  );

  if (!asLink) {
    return content;
  }

  return (
    <Link
      href="/"
      className="inline-flex items-center transition-opacity hover:opacity-90"
      style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
    >
      {content}
    </Link>
  );
}
