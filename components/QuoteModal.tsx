'use client';

import { useState } from 'react';
import { X, Phone, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function QuoteModal({ isOpen, onClose, initialService }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || 'Rénovation complète',
    city: 'Toulouse',
    details: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 120,
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '28px',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: 'clamp(24px, 4vw, 40px)',
          position: 'relative',
          boxShadow: 'var(--shadow-hover)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#f1f5f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0f172a',
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#ecfdf5',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '24px', color: '#0f172a', marginBottom: '10px' }}>
              Demande bien reçue !
            </h3>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
              Merci {formData.name}. Notre responsable travaux L.I.N Rénovation prend contact avec vous sous 24h ouvrées.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-primary"
            >
              Fermer la fenêtre
            </button>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <div className="eyebrow-badge" style={{ marginBottom: '8px' }}>
                DEVIS GRATUIT SOUS 48H
              </div>
              <h3 style={{ fontSize: '26px', color: '#0f172a', lineHeight: 1.2 }}>
                Votre projet de rénovation à Toulouse
              </h3>
              <p style={{ fontSize: '14.5px', color: '#64748b', marginTop: '6px' }}>
                Remplissez vos coordonnées pour qu’un conducteur de travaux vous recontacte et planifie une visite sur site.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#334155', marginBottom: '6px' }}>
                  Nom &amp; Prénom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jean Dupont"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#334155', marginBottom: '6px' }}>
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="06 16 21 99 05"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#334155', marginBottom: '6px' }}>
                    Ville / Quartier *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Toulouse (31)"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#334155', marginBottom: '6px' }}>
                  Type de prestation souhaitée
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    outline: 'none',
                    backgroundColor: '#ffffff',
                    cursor: 'pointer',
                  }}
                >
                  <option value="Rénovation intégrale appartement / maison">Rénovation intégrale (tous corps d’état)</option>
                  <option value="Salle de bain / Suite parentale">Salle de bain / Suite parentale</option>
                  <option value="Cuisine ouverte & pièce à vivre">Cuisine ouverte &amp; pièce à vivre</option>
                  <option value="Électricité générale & Mise aux normes">Électricité générale &amp; Mise aux normes</option>
                  <option value="Plomberie & Chauffage">Plomberie &amp; Chauffage</option>
                  <option value="Peintures & Sols parquet/carrelage">Peintures &amp; Sols parquet/carrelage</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#334155', marginBottom: '6px' }}>
                  Description rapide (surface, date souhaitée...)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Rénovation d'un T3 de 75m² quartier Saint-Cyprien à commencer en mai..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '14px',
                    outline: 'none',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '6px' }}>
                <span>Envoyer ma demande de visite gratuite</span>
                <ArrowRight size={16} />
              </button>
            </form>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
              <ShieldCheck size={16} color="#1d4ed8" />
              <span>Garantie Décennale · Aucun engagement</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
