import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs?: { label: string; href?: string }[];
}

export default function PageHeader({ eyebrow, title, description, crumbs = [] }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <nav className="breadcrumb" aria-label="Fil d’Ariane">
          <Link href="/">Accueil</Link>
          {crumbs.map((c) => (
            <span key={c.label} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ChevronRight size={14} />
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </span>
          ))}
        </nav>
        <div className="eyebrow-badge">{eyebrow}</div>
        <h1 className="page-title">{title}</h1>
        {description && <p className="page-lead">{description}</p>}
      </div>
    </section>
  );
}
