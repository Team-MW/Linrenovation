'use client';

import { Star, Quote, CheckCircle } from 'lucide-react';

const reviews = [
  {
    author: 'Alexandre & Sophie M.',
    location: 'Quartier des Carmes · Toulouse',
    project: 'Rénovation intégrale T4 (110 m²)',
    rating: 5,
    date: 'Septembre 2024',
    comment:
      'Une expérience remarquable. L.I.N Rénovation a su magnifier notre appartement haussmannien en conservant son cachet tout en modernisant l’ensemble des réseaux. Le respect des délais au jour près et la propreté du chantier ont été exemplaires.',
  },
  {
    author: 'Marc V.',
    location: 'Tournefeuille',
    project: 'Création Suite Parentale & Salle d’eau',
    rating: 5,
    date: 'Novembre 2024',
    comment:
      'Artisans ponctuels, discrets et extrêmement compétents. La douche à l’italienne et les finitions de plomberie encastrée sont parfaites. Aucun surcoût par rapport au devis initial, ce qui est très rare dans le bâtiment.',
  },
  {
    author: 'Camille D.',
    location: 'Saint-Cyprien · Toulouse',
    project: 'Ouverture cuisine & verrière atelier',
    rating: 5,
    date: 'Janvier 2025',
    comment:
      'Avoir un seul interlocuteur pour gérer le maçon, l’électricien, le peintre et le menuisier change absolument tout. Le résultat est encore plus beau que nos plans 3D. Merci à toute l’équipe L.I.N !',
  },
];

export default function Testimonials() {
  return (
    <section id="avis" className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
          <div className="eyebrow-badge">
            LA SATISFACTION DE NOS CLIENTS
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '16px' }}>
            Ils nous ont confié leur intérieur.
          </h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#ffffff', padding: '8px 18px', borderRadius: '9999px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-sm)', marginTop: '8px' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>5.0 / 5</span>
            <span style={{ fontSize: '13px', color: '#64748b' }}>· Avis clients vérifiés à Toulouse</span>
          </div>
          <div className="da-separator" />
        </div>

        {/* Testimonials Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="da-card"
              style={{
                padding: '36px 30px',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span style={{ fontSize: '12px', color: '#94a3b8' }}>{rev.date}</span>
                </div>

                <p style={{ fontSize: '15px', color: '#334155', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '24px' }}>
                  "{rev.comment}"
                </p>
              </div>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <strong style={{ fontSize: '15px', color: '#0f172a' }}>{rev.author}</strong>
                  <CheckCircle size={15} color="#1d4ed8" />
                </div>
                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>
                  {rev.location}
                </div>
                <div style={{ fontSize: '12px', color: '#1d4ed8', fontWeight: 500, marginTop: '4px' }}>
                  Projet : {rev.project}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
