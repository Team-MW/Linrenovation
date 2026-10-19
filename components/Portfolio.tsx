'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { MapPin, Maximize2, X, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { projects, type Project, type ProjectCategory } from '@/lib/content';
import { site } from '@/lib/site';
import { useQuote } from './QuoteProvider';

const filters: { id: 'all' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'Toutes' },
  { id: 'complete', label: 'Rénovation globale' },
  { id: 'sdb', label: 'Salles de bain' },
  { id: 'cuisine', label: 'Cuisines' },
  { id: 'agencement', label: 'Suites & dressings' },
];

interface PortfolioProps {
  limit?: number;
  showFilters?: boolean;
}

export default function Portfolio({ limit, showFilters = true }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const { openQuote } = useQuote();

  const filtered = (activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)).slice(0, limit);

  useEffect(() => {
    if (!selected) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null);
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  return (
    <>
      {showFilters && (
        <div className="filter-bar" role="tablist">
          {filters.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={activeFilter === f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`pill-toggle ${activeFilter === f.id ? 'pill-toggle-active' : ''}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid-cards grid-cards-wide">
        {filtered.map((project) => (
          <button key={project.id} className="da-card project-card" onClick={() => setSelected(project)}>
            <div className="project-thumb">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                style={{ objectFit: 'cover' }}
                className="project-thumb-img"
              />
              <span className="image-chip">{project.categoryLabel}</span>
              <span className="thumb-expand"><Maximize2 size={16} /></span>
            </div>

            <div className="project-body">
              <div className="project-location">
                <MapPin size={14} />
                <span>{project.location}</span>
              </div>
              <h3 className="card-title" style={{ fontSize: '20px' }}>{project.title}</h3>
              <p className="card-text">{project.description}</p>
              <div className="project-meta">
                <span>Surface : <strong>{project.area}</strong></span>
                <span>Durée : <strong>{project.duration}</strong></span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)} role="dialog" aria-modal="true" aria-labelledby="project-title">
          <div className="modal-box" style={{ maxWidth: '820px', padding: 0 }} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="modal-close modal-close-dark" aria-label="Fermer">
              <X size={18} />
            </button>

            <div className="modal-image">
              <Image src={selected.image} alt={selected.title} fill sizes="820px" style={{ objectFit: 'cover' }} />
            </div>

            <div style={{ padding: 'clamp(22px, 4vw, 32px)' }}>
              <div className="project-location" style={{ flexWrap: 'wrap' }}>
                <MapPin size={15} />
                <span>{selected.location}</span>
                <span>·</span>
                <span>{selected.area}</span>
                <span>·</span>
                <span>{selected.duration}</span>
              </div>

              <h2 id="project-title" style={{ fontSize: 'clamp(22px, 4vw, 28px)', margin: '6px 0 14px' }}>{selected.title}</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>{selected.description}</p>

              <div className="highlight-box">
                <div className="highlight-title">Prestations réalisées</div>
                <div className="highlight-grid">
                  {selected.highlights.map((h) => (
                    <div key={h} className="highlight-item">
                      <CheckCircle2 size={16} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-actions">
                <a href={site.phoneHref} className="phone-pill-btn">
                  <Phone size={16} />
                  <span>{site.phone}</span>
                </a>
                <button
                  className="btn-primary"
                  onClick={() => {
                    setSelected(null);
                    openQuote();
                  }}
                >
                  <span>Un projet similaire ?</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
