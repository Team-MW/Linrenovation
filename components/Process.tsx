'use client';

import { Calendar, FileText, Wrench, Award, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Visite & Étude Technique Gratuite',
    description:
      'Nous nous déplaçons directement sur votre bien à Toulouse ou en agglomération. Écoute de vos attentes, prise de cotes précises et diagnostic des contraintes techniques (murs porteurs, réseaux, isolation).',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Devis Clair & Délais Contractuels',
    description:
      'Sous 48h, vous recevez un devis ligne à ligne détaillé sans frais cachés. Le calendrier de chantier et les dates de début et d’achèvement sont fixés noir sur blanc.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Pilotage & Travaux Tous Corps d’État',
    description:
      'Nos équipes qualifiées exécutent les ouvrages sous la houlette d’un conducteur de travaux dédié. Vous recevez un suivi d’avancement photo régulier et des points d’étape.',
  },
  {
    number: '04',
    icon: Award,
    title: 'Livraison Clés en Main & Décennale',
    description:
      'Nettoyage soigné du chantier, vérification méticuleuse de chaque détail et remise des clés. Votre investissement est couvert par notre garantie décennale et RC Professionnelle.',
  },
];

export default function Process() {
  return (
    <section id="methode" className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div className="eyebrow-badge">
            TRANQUILLITÉ D'ESPRIT ASSURÉE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '16px' }}>
            Une méthodologie rigoureuse, zéro stress.
          </h2>
          <p style={{ fontSize: '17px', color: '#64748b' }}>
            La rénovation ne doit pas être une source d'angoisse. Nous structurons chaque phase pour garantir transparence, ponctualité et sérénité.
          </p>
          <div className="da-separator" />
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
          }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  padding: '32px 24px',
                  borderRadius: '20px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: '#ffffff',
                      color: '#1d4ed8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '32px',
                      fontWeight: 600,
                      color: '#cbd5e1',
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 style={{ fontSize: '19px', fontWeight: 600, color: '#0f172a', marginBottom: '12px' }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '14.5px', color: '#64748b', lineHeight: 1.6 }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
