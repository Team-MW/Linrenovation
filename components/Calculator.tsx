'use client';

import { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const projectTypes = [
  { id: 'globale', label: 'Rénovation globale', basePrice: 950, defaultArea: 65 },
  { id: 'sdb', label: 'Salle de bain', basePrice: 1200, defaultArea: 8 },
  { id: 'cuisine', label: 'Cuisine', basePrice: 1100, defaultArea: 15 },
  { id: 'peinture_sol', label: 'Peinture & sols', basePrice: 85, defaultArea: 60 },
  { id: 'isolation', label: 'Isolation & plâtrerie', basePrice: 140, defaultArea: 60 },
];

const finishLevels = [
  { id: 'standard', label: 'Standard soigné', multiplier: 1.0, desc: 'Matériaux certifiés, finitions soignées' },
  { id: 'confort', label: 'Confort premium', multiplier: 1.3, desc: 'Grand format, robinetterie encastrée, chêne' },
  { id: 'prestige', label: 'Signature architecte', multiplier: 1.65, desc: 'Sur-mesure, pierre naturelle, éclairage intégré' },
];

const euro = (n: number) => `${n.toLocaleString('fr-FR')} €`;

export default function Calculator() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [surface, setSurface] = useState(projectTypes[0].defaultArea);
  const [finishLevel, setFinishLevel] = useState(finishLevels[1]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const raw = selectedType.basePrice * surface * finishLevel.multiplier;
  const minEstimate = Math.max(500, Math.round((raw * 0.9) / 500) * 500);
  const maxEstimate = Math.max(minEstimate + 500, Math.round((raw * 1.15) / 500) * 500);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="da-card calc-card">
      <div className="calc-grid">
        <div>
          <fieldset className="calc-block">
            <legend className="calc-label">1. Nature du projet</legend>
            <div className="calc-types">
              {projectTypes.map((type) => {
                const isSelected = selectedType.id === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => {
                      setSelectedType(type);
                      setSurface(type.defaultArea);
                    }}
                    className={`calc-type ${isSelected ? 'calc-type-active' : ''}`}
                  >
                    {type.label}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="calc-block">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', gap: '12px' }}>
              <label htmlFor="calc-surface" className="calc-label" style={{ marginBottom: 0 }}>2. Surface</label>
              <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--brand-blue)' }}>{surface} m²</span>
            </div>
            <input
              id="calc-surface"
              type="range"
              min="4"
              max="220"
              step="1"
              value={surface}
              onChange={(e) => setSurface(Number(e.target.value))}
              className="calc-range"
            />
            <div className="calc-range-legend">
              <span>4 m²</span>
              <span>110 m²</span>
              <span>220 m²</span>
            </div>
          </div>

          <fieldset className="calc-block" style={{ marginBottom: 0 }}>
            <legend className="calc-label">3. Niveau de finition</legend>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {finishLevels.map((lvl) => {
                const isSelected = finishLevel.id === lvl.id;
                return (
                  <button
                    key={lvl.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setFinishLevel(lvl)}
                    className={`calc-finish ${isSelected ? 'calc-finish-active' : ''}`}
                  >
                    <span>
                      <span className="calc-finish-title">{lvl.label}</span>
                      <span className="calc-finish-desc">{lvl.desc}</span>
                    </span>
                    {isSelected && <Check size={18} color="var(--brand-blue)" />}
                  </button>
                );
              })}
            </div>
          </fieldset>
        </div>

        <div className="calc-result">
          <div>
            <div className="calc-result-eyebrow">
              <Sparkles size={14} />
              <span>Estimation indicative</span>
            </div>
            <div className="calc-price" aria-live="polite">
              {euro(minEstimate)} – {euro(maxEstimate)}
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '22px' }}>
              TTC · Main-d’œuvre & fournitures incluses
            </div>

            <dl className="calc-summary">
              <div><dt>Type</dt><dd>{selectedType.label}</dd></div>
              <div><dt>Surface</dt><dd>{surface} m²</dd></div>
              <div><dt>Finition</dt><dd>{finishLevel.label}</dd></div>
            </dl>
          </div>

          {submitted ? (
            <div className="calc-success">
              <Check size={28} color="#059669" />
              <div style={{ fontWeight: 600, color: '#065f46', fontSize: '15px' }}>Demande enregistrée !</div>
              <div style={{ fontSize: '13px', color: '#047857', marginTop: '4px' }}>
                Nous vous rappelons sous 24 h pour affiner l’estimation et fixer une visite.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>
                Recevoir une étude détaillée :
              </div>
              <input
                className="form-input"
                type="text"
                required
                autoComplete="name"
                aria-label="Nom et prénom"
                placeholder="Nom & prénom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                className="form-input"
                type="tel"
                required
                autoComplete="tel"
                aria-label="Téléphone"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '4px' }}>
                <span>Être rappelé gratuitement</span>
                <ArrowRight size={16} />
              </button>
              <p style={{ fontSize: '11.5px', color: 'var(--text-light)', textAlign: 'center' }}>
                Estimation non contractuelle · Sans engagement
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
