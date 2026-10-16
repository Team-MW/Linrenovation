'use client';

import { MapPin, Navigation, Check } from 'lucide-react';

const toulouseDistricts = [
  'Carmes & Saint-Étienne',
  'Capitole & Arnaud Bernard',
  'Saint-Cyprien & Fer à Cheval',
  'Côte Pavée & Le Busca',
  'Compans-Caffarelli & Amidonniers',
  'Saint-Aubin & Dupuy',
  'Minimes & Barrière de Paris',
  'Rangueil & Saouzelong',
];

const surroundingCities = [
  'Blagnac',
  'Colomiers',
  'Tournefeuille',
  'Balma',
  'Ramonville-Saint-Agne',
  'L’Union',
  'Cugnaux',
  'Muret',
  'Castanet-Tolosan',
  'Saint-Orens',
  'Pibrac',
  'Plaisance-du-Touch',
];

export default function ZoneIntervention() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px' }}>
          <div className="eyebrow-badge">
            RAYONNEMENT GÉOGRAPHIQUE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '16px' }}>
            Intervention à Toulouse &amp; Haute-Garonne (31).
          </h2>
          <p style={{ fontSize: '17px', color: '#64748b' }}>
            Basés à Toulouse, nos compagnons se déplacent sur l’ensemble de la métropole pour vos chantiers de rénovation.
          </p>
          <div className="da-separator" />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            maxWidth: '960px',
            margin: '0 auto',
          }}
        >
          {/* Quartiers de Toulouse */}
          <div
            style={{
              padding: '32px',
              borderRadius: '24px',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1d4ed8',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <MapPin size={20} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a' }}>
                Toulouse Intra-Muros
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
              {toulouseDistricts.map((d, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#334155' }}>
                  <Check size={14} color="#1d4ed8" style={{ flexShrink: 0 }} />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Agglomération & 1ère couronne */}
          <div
            style={{
              padding: '32px',
              borderRadius: '24px',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1d4ed8',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <Navigation size={20} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a' }}>
                Toulouse Métropole &amp; Agglomération
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
              {surroundingCities.map((city, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#334155' }}>
                  <Check size={14} color="#1d4ed8" style={{ flexShrink: 0 }} />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
