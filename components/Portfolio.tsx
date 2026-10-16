'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Eye, MapPin, Calendar, Maximize2, X, Sparkles, CheckCircle2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'complete' | 'sdb' | 'cuisine' | 'agencement';
  categoryLabel: string;
  location: string;
  area: string;
  duration: string;
  image: string;
  description: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 'carmes',
    title: 'Rénovation d’un appartement de caractère',
    category: 'complete',
    categoryLabel: 'Rénovation Complète',
    location: 'Quartier des Carmes · Toulouse',
    area: '110 m²',
    duration: '8 semaines',
    image: '/after-salon.jpg',
    description:
      'Remise à neuf complète d’un appartement ancien : restauration du parquet point de Hongrie d’origine, création de moulures sur mesure, intégration discrète de l’électricité et mise en peinture soignée.',
    highlights: [
      'Parquet chêne massif vitrifié mat',
      'Moulures staff et rosaces préservées',
      'Éclairage architectural basse luminance',
      'Isolation phonique renforcée'
    ],
  },
  {
    id: 'saint-cyprien',
    title: 'Loft contemporain avec brique toulousaine',
    category: 'complete',
    categoryLabel: 'Loft & Rénovation',
    location: 'Saint-Cyprien · Toulouse',
    area: '85 m²',
    duration: '7 semaines',
    image: '/toulouse-loft.jpg',
    description:
      'Mise en valeur d’un mur authentique en briques foraines roses de Toulouse, création d’un espace bureau vitré avec verrière d’angle sur mesure en acier laqué noir et parquet chêne clair.',
    highlights: [
      'Briques foraines jointoyées à la chaux',
      'Verrière atelier thermolaquée sur mesure',
      'Cuisine semi-ouverte avec passe-plat',
      'Plancher chauffant basse température'
    ],
  },
  {
    id: 'bathroom',
    title: 'Salle d’eau minérale en travertin & chêne',
    category: 'sdb',
    categoryLabel: 'Salle de Bain',
    location: 'Tournefeuille · Haute-Garonne',
    area: '14 m²',
    duration: '3 semaines',
    image: '/bathroom.jpg',
    description:
      'Transformation d’une ancienne salle de bain cloisonnée en une suite d’eau épurée. Douche italienne plain-pied, miroir rétroéclairé cintrée, meuble suspendu sur-mesure et robinetterie encastrée noire mate.',
    highlights: [
      'Douche à l’italienne avec caniveau invisible',
      'Revêtement grès cérame grand format effet travertin',
      'Robinetterie thermostatique encastrée',
      'Niche rétroéclairée intégrée'
    ],
  },
  {
    id: 'kitchen',
    title: 'Cuisine architecturale & îlot marbre',
    category: 'cuisine',
    categoryLabel: 'Cuisine Ouverte',
    location: 'Balma · Toulouse Métropole',
    area: '28 m²',
    duration: '4 semaines',
    image: '/kitchen.jpg',
    description:
      'Conception d’un espace de vie convivial et moderne. Façades en chêne strié texturé, îlot central monumental avec retombée en cascade marbre Calacatta et cave à vin intégrée.',
    highlights: [
      'Îlot cascade en céramique marbre Calacatta',
      'Plinthe miroir & éclairage sous meuble',
      'Plaque à induction avec hotte intégrée',
      'Menuiseries sur mesure toute hauteur'
    ],
  },
  {
    id: 'bedroom',
    title: 'Suite parentale & dressing sur mesure',
    category: 'agencement',
    categoryLabel: 'Menuiserie & Chambre',
    location: 'Côte Pavée · Toulouse',
    area: '32 m²',
    duration: '3 semaines',
    image: '/bedroom.jpg',
    description:
      'Agencement complet d’une chambre principale avec dressing en chêne clair sur mesure, penderies éclairées par LED automatiques à l’ouverture et alcôve tête de lit.',
    highlights: [
      'Dressing toute hauteur sans poignée apparente',
      'Bandeaux LED à allumage par détecteur',
      'Tête de lit capitonnée lin naturel',
      'Parquet chêne posé en continu'
    ],
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'complete' | 'sdb' | 'cuisine' | 'agencement'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="realisations" className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
          <div className="eyebrow-badge">
            PORTFOLIO EXCLUSIF · TOULOUSE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '16px' }}>
            Des réalisations pensées pour durer.
          </h2>
          <p style={{ fontSize: '17px', color: '#64748b' }}>
            Découvrez nos chantiers récemment livrés dans les plus beaux quartiers de Toulouse et sa première couronne.
          </p>
          <div className="da-separator" />
        </div>

        {/* Filter buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '48px',
          }}
        >
          {[
            { id: 'all', label: 'Toutes les réalisations' },
            { id: 'complete', label: 'Rénovation Globale' },
            { id: 'sdb', label: 'Salles de Bain' },
            { id: 'cuisine', label: 'Cuisines' },
            { id: 'agencement', label: 'Suites & Dressings' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id as any)}
              style={{
                padding: '9px 20px',
                borderRadius: '9999px',
                fontSize: '13.5px',
                fontWeight: 500,
                backgroundColor: activeFilter === btn.id ? '#0f172a' : '#ffffff',
                color: activeFilter === btn.id ? '#ffffff' : '#475569',
                border: activeFilter === btn.id ? '1px solid #0f172a' : '1px solid #e2e8f0',
                transition: 'all 0.2s ease',
                boxShadow: activeFilter === btn.id ? 'var(--shadow-sm)' : 'none',
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '32px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="da-card"
              style={{
                overflow: 'hidden',
                borderRadius: '24px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div style={{ position: 'relative', width: '100%', height: '280px', overflow: 'hidden' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  className="project-thumb-img"
                />
                
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: 'rgba(15, 23, 42, 0.8)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {project.categoryLabel}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    backgroundColor: '#ffffff',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0f172a',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <Maximize2 size={16} />
                </div>
              </div>

              <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#1d4ed8', fontWeight: 600, marginBottom: '8px' }}>
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#0f172a', marginBottom: '12px' }}>
                    {project.title}
                  </h3>

                  <p style={{ fontSize: '14.5px', color: '#64748b', lineHeight: 1.6, marginBottom: '20px' }}>
                    {project.description}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '16px', fontSize: '13px', color: '#475569' }}>
                  <span>Surface : <strong>{project.area}</strong></span>
                  <span>Durée : <strong>{project.duration}</strong></span>
                  <span style={{ color: '#1d4ed8', fontWeight: 600 }}>Voir détails →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Project Details Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              maxWidth: '820px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(15, 23, 42, 0.8)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}
            >
              <X size={18} />
            </button>

            <div style={{ position: 'relative', width: '100%', height: '380px' }}>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1d4ed8', fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                <MapPin size={15} />
                <span>{selectedProject.location}</span>
                <span>•</span>
                <span>{selectedProject.area}</span>
                <span>•</span>
                <span>{selectedProject.duration} de chantier</span>
              </div>

              <h2 style={{ fontSize: '28px', marginBottom: '14px', color: '#0f172a' }}>
                {selectedProject.title}
              </h2>

              <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
                {selectedProject.description}
              </p>

              <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                  Points clés &amp; Prestations réalisées :
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#334155' }}>
                      <CheckCircle2 size={16} color="#1d4ed8" style={{ flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'flex-end' }}>
                <a href="tel:0616219905" className="phone-pill-btn">
                  <span>06 16 21 99 05</span>
                </a>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary"
                >
                  Étudier un projet similaire
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
