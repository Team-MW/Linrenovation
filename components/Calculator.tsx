'use client';

import { useState } from 'react';
import { Calculator as CalcIcon, Check, ArrowRight, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';

interface CalculatorProps {
  onDirectQuote?: (quoteData: any) => void;
}

const projectTypes = [
  { id: 'globale', label: 'Rénovation Globale', basePrice: 950, unit: 'm²' },
  { id: 'sdb', label: 'Salle de Bain / Suite', basePrice: 1200, unit: 'm²', defaultArea: 10 },
  { id: 'cuisine', label: 'Cuisine & Agencement', basePrice: 1100, unit: 'm²', defaultArea: 18 },
  { id: 'peinture_sol', label: 'Peintures & Sols', basePrice: 85, unit: 'm²' },
  { id: 'isolation', label: 'Isolation & Plâtrerie', basePrice: 140, unit: 'm²' },
];

const finishLevels = [
  { id: 'standard', label: 'Standard Soigné', multiplier: 1.0, desc: 'Matériaux certifiés, finitions soignées' },
  { id: 'confort', label: 'Confort Premium', multiplier: 1.3, desc: 'Grand format, robinetterie encastrée, chêne' },
  { id: 'prestige', label: 'Signature Architecte', multiplier: 1.65, desc: 'Sur-mesure total, marbre, gorges LED, domotique' },
];

export default function Calculator({ onDirectQuote }: CalculatorProps) {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [surface, setSurface] = useState(65);
  const [finishLevel, setFinishLevel] = useState(finishLevels[1]);
  const [submitted, setSubmitted] = useState(false);
  
  // Lead form
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Toulouse',
  });

  // Calculate indicative budget
  const rawEstimate = selectedType.basePrice * surface * finishLevel.multiplier;
  const minEstimate = Math.round((rawEstimate * 0.9) / 500) * 500;
  const maxEstimate = Math.round((rawEstimate * 1.15) / 500) * 500;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    onDirectQuote?.({
      ...formData,
      projectType: selectedType.label,
      surface,
      finish: finishLevel.label,
      estimate: `${minEstimate.toLocaleString('fr-FR')} € - ${maxEstimate.toLocaleString('fr-FR')} €`,
    });
  };

  return (
    <section id="simulateur" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
          <div className="eyebrow-badge">
            TRANSPARENCE &amp; BUDGET
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)', marginBottom: '16px' }}>
            Estimez le coût de vos travaux en 1 minute.
          </h2>
          <p style={{ fontSize: '17px', color: '#64748b' }}>
            Obtenez une première projection budgétaire claire pour votre projet à Toulouse, sans engagement.
          </p>
          <div className="da-separator" />
        </div>

        {/* Calculator Card matching DA */}
        <div
          className="da-card"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            padding: 'clamp(24px, 4vw, 44px)',
            borderRadius: '28px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            
            {/* Left Column: Settings */}
            <div>
              {/* 1. Project Type */}
              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#0f172a', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  1. Nature de votre projet
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '10px' }}>
                  {projectTypes.map((type) => {
                    const isSelected = selectedType.id === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => {
                          setSelectedType(type);
                          if (type.defaultArea) setSurface(type.defaultArea);
                        }}
                        style={{
                          padding: '12px 10px',
                          borderRadius: '12px',
                          border: isSelected ? '2px solid #0f172a' : '1px solid #e2e8f0',
                          backgroundColor: isSelected ? '#0f172a' : '#ffffff',
                          color: isSelected ? '#ffffff' : '#334155',
                          fontSize: '13px',
                          fontWeight: 500,
                          textAlign: 'center',
                          transition: 'all 0.2s',
                        }}
                      >
                        {type.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Surface */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <label style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    2. Surface à rénover
                  </label>
                  <span style={{ fontSize: '18px', fontWeight: 700, color: '#1d4ed8' }}>
                    {surface} m²
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="220"
                  step="5"
                  value={surface}
                  onChange={(e) => setSurface(Number(e.target.value))}
                  style={{
                    width: '100%',
                    accentColor: '#1d4ed8',
                    cursor: 'pointer',
                    height: '6px',
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#94a3b8', marginTop: '6px' }}>
                  <span>10 m² (Studio / SdB)</span>
                  <span>100 m²</span>
                  <span>220 m² (Maison)</span>
                </div>
              </div>

              {/* 3. Standing */}
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#0f172a', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  3. Niveau de standing souhaité
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {finishLevels.map((lvl) => {
                    const isSelected = finishLevel.id === lvl.id;
                    return (
                      <div
                        key={lvl.id}
                        onClick={() => setFinishLevel(lvl)}
                        style={{
                          padding: '12px 16px',
                          borderRadius: '12px',
                          border: isSelected ? '2px solid #1d4ed8' : '1px solid #e2e8f0',
                          backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.2s',
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: isSelected ? '#1e3a8a' : '#0f172a' }}>
                            {lvl.label}
                          </div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>
                            {lvl.desc}
                          </div>
                        </div>
                        {isSelected && <Check size={18} color="#1d4ed8" />}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Live Estimate & Validation */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                borderRadius: '20px',
                padding: '30px 24px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1d4ed8', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  <Sparkles size={14} />
                  <span>Estimation indicative L.I.N</span>
                </div>

                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3.5vw, 36px)', fontWeight: 600, color: '#0f172a', lineHeight: 1.1, marginBottom: '6px' }}>
                  {minEstimate.toLocaleString('fr-FR')} € – {maxEstimate.toLocaleString('fr-FR')} €
                </div>
                <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '22px' }}>
                  TTC · Main-d'œuvre &amp; matériaux inclus selon finitions
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px', marginBottom: '20px', fontSize: '13px', color: '#334155', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Type :</span>
                    <strong style={{ color: '#0f172a' }}>{selectedType.label}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Surface :</span>
                    <strong style={{ color: '#0f172a' }}>{surface} m²</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Finition :</span>
                    <strong style={{ color: '#0f172a' }}>{finishLevel.label}</strong>
                  </div>
                </div>
              </div>

              {submitted ? (
                <div style={{ backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '14px', padding: '16px', textAlign: 'center' }}>
                  <Check size={28} color="#059669" style={{ margin: '0 auto 8px' }} />
                  <div style={{ fontWeight: 600, color: '#065f46', fontSize: '15px' }}>Demande enregistrée avec succès !</div>
                  <div style={{ fontSize: '13px', color: '#047857', marginTop: '4px' }}>
                    Notre responsable travaux vous recontacte sous 24h pour affiner votre devis et fixer une visite sur site.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>
                    Recevoir l'étude détaillée &amp; réserver un diagnostic :
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="Votre Nom & Prénom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />

                  <input
                    type="tel"
                    required
                    placeholder="Numéro de téléphone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />

                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '4px' }}>
                    <span>Valider mon chiffrage gratuit</span>
                    <ArrowRight size={16} />
                  </button>

                  <div style={{ fontSize: '11px', color: '#94a3b8', textAlign: 'center' }}>
                    Aucun engagement · Réponse sous 24h ouvrées
                  </div>
                </form>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
