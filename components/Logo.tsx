import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
}

const scales = { sm: 0.8, md: 1, lg: 1.3 };

export default function Logo({ size = 'md', asLink = true }: LogoProps) {
  const s = scales[size];

  const content = (
    <span className="logo" style={{ fontSize: `${s}rem` }}>
      <svg className="logo-mark" viewBox="0 0 40 40" aria-hidden>
        <rect width="40" height="40" rx="10" fill="#0f172a" />
        <path d="M11 28V12h3.4v13h8.2v3H11Z" fill="#fff" />
        <path d="M25 28V17l4-3v14h-4Z" fill="#60a5fa" />
      </svg>
      <span className="logo-text">
        <span className="logo-name">L.I.N</span>
        <span className="logo-sub">Rénovation</span>
      </span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link href="/" aria-label="Accueil L.I.N Rénovation" style={{ display: 'inline-flex', alignItems: 'center' }}>
      {content}
    </Link>
  );
}
