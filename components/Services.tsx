'use client';

import { useState } from 'react';
import {
  Home,
  Bath,
  UtensilsCrossed,
  Zap,
  Droplet,
  Layers,
  Sparkles,
  ArrowRight,
  Shield,
  Check
} from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

const servicesList = [
  {
    id: 'complete',
    icon: Home,
    title: 'Rénovation Globale Clés en Main',
    badge: 'Tous Corps d’État',
    description:
      'Prise en charge intégrale de votre appartement ou maison. Restructuration des espaces, dépose, coordination de tous les corps de métier et finitions sur-mesure.',
    details: [
      'Interlocuteur unique & planning strict',
      'Optimisation des volumes & cloisons',
      'Suivi de chantier hebdomadaire',
      'Nettoyage rigoureux & réception sans réserve'
    ],
  },
  {
    id: 'sdb',
    icon: Bath,
    title: 'Salles de Bain & Suites Parentales',
    badge: 'Espaces d’eau',
    description:
      'Création et rénovation de salles d’eau raffinées : douches à l’italienne sans ressaut, baignoires îlot, faïences XXL et robinetterie encastrée de prestige.',
    details: [
      'Étanchéité sous carrelage certifiée',
      'Meubles vasques sur-mesure en chêne',
      'Éclairage d’ambiance LED indirect',
      'VMC silencieuse & sanitaires suspendus'
    ],
  },
  {
    id: 'cuisine',
    icon: UtensilsCrossed,
    title: 'Cuisines Équipées & Îlots Centraux',
    badge: 'Design & Convivialité',
    description:
      'Conception d’espaces de vie ouverts, verrières style atelier d’artiste, plans de travail en céramique ou quartz, et intégration discrète des équipements.',
    details: [
      'Verrières sur mesure acier & verre feuilleté',
      'Crédences en marbre ou carrelage zellige',
      'Électroménager parfaitement encastré',
      'Plans de travail haute résistance'
    ],
  },
  {
    id: 'electricite',
    icon: Zap,
    title: 'Électricité Générale & Domotique',
    badge: 'Norme NF C 15-100',
    description:
      'Remise aux normes intégrale, réfection complète des tableaux, gorges lumineuses architecturales, appareillage design et gestion intelligente de l’éclairage.',
    details: [
      'Attestation de conformité Consuel',
      'Éclairage scénarisé dimmable',
      'Appareillage de créateur (Céliane, etc.)',
      'Réseau RJ45 & fibre pré-câblé'
    ],
  },
  {
    id: 'plomberie',
    icon: Droplet,
    title: 'Plomberie & Chauffage Économe',
    badge: 'Réseaux & Confort',
    description:
      'Remplacement de canalisations, colonnes d’évacuation, chauffe-eau thermodynamiques et pose de radiateurs basse consommation ou planchers chauffants.',
    details: [
      'Réseau multicouche serti sous garantie',
      'Remplacement des colonnes vétustes',
      'Radiateurs design verticaux',
      'Climatisation réversible silencieuse'
    ],
  },
  {
    id: 'finitions',
    icon: Layers,
    title: 'Peinture Soignée, Enduits & Parquets',
    badge: 'Finitions Haut de Gamme',
    description:
      'Ratissage fin des surfaces pour une planéité absolue, peintures dépolluantes sans COV, parquets massifs ou contrecollés en point de Hongrie.',
    details: [
      'Préparation minutieuse des supports',
      'Peintures velours & laquées haute résistance',
      'Ponçage et vitrification de parquets anciens',
      'Carrelages grand format rectifiés'
    ],
  },
];

export default function Services({ onSelectService }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  return (
    <section id="services" className="section-padding">
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
          <div className="eyebrow-badge">
            EXPERTISE TOUS CORPS D'ÉTAT · TOULOUSE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '18px' }}>
            Un seul interlocuteur pour l’ensemble de vos travaux.
          </h2>
          <p style={{ fontSize: '17px', color: '#64748b', lineHeight: 1.7 }}>
            Fini les tracas de coordination entre artisans. Notre équipe réunit l'ensemble des corps d'état du bâtiment pour vous garantir fluidité, maîtrise du calendrier et finitions irréprochables.
          </p>
          <div className="da-separator" />
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px',
          }}
        >
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="da-card"
                style={{
                  padding: '36px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '24px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '16px',
                        backgroundColor: '#f1f5f9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#1d4ed8',
                      }}
                    >
                      <Icon size={24} />
                    </div>

                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        padding: '6px 12px',
                        borderRadius: '9999px',
                        backgroundColor: '#eff6ff',
                        color: '#1d4ed8',
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '22px', marginBottom: '14px', fontWeight: 600, color: '#0f172a' }}>
                    {service.title}
                  </h3>

                  <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '24px', lineHeight: 1.6 }}>
                    {service.description}
                  </p>

                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '18px', marginBottom: '24px' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {service.details.map((detail, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: '#334155' }}>
                          <Check size={14} color="#1d4ed8" style={{ flexShrink: 0 }} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => onSelectService?.(service.title)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 18px',
                    borderRadius: '12px',
                    backgroundColor: '#f8fafc',
                    color: '#0f172a',
                    fontSize: '14px',
                    fontWeight: 500,
                    transition: 'all 0.2s',
                    border: '1px solid #e2e8f0',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0f172a';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                    e.currentTarget.style.color = '#0f172a';
                  }}
                >
                  <span>Chiffrer ce type de travaux</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
