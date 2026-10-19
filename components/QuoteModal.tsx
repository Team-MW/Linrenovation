'use client';

import { useEffect, useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import { services } from '@/lib/services';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const serviceOptions = [...services.map((s) => s.title), 'Autre projet sur mesure'];

export default function QuoteModal({ isOpen, onClose, initialService }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService && serviceOptions.includes(initialService) ? initialService : serviceOptions[0],
    city: 'Toulouse',
    details: '',
  });

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="quote-title">
      <div className="modal-box" style={{ maxWidth: '560px' }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close" aria-label="Fermer">
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div className="success-icon">
              <CheckCircle2 size={36} />
            </div>
            <h3 id="quote-title" style={{ fontSize: '24px', marginBottom: '10px' }}>
              Demande bien reçue !
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
              Merci {formData.name}. Notre responsable travaux vous recontacte sous 24 h ouvrées.
            </p>
            <button onClick={onClose} className="btn-primary">
              Fermer
            </button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '24px', paddingRight: '40px' }}>
              <div style={{ marginBottom: '14px' }}>
                <Logo size="sm" asLink={false} />
              </div>
              <div className="eyebrow-badge" style={{ marginBottom: '8px' }}>
                Devis gratuit sous 48 h
              </div>
              <h3 id="quote-title" style={{ fontSize: 'clamp(22px, 4vw, 26px)', lineHeight: 1.2 }}>
                Votre projet de rénovation
              </h3>
              <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', marginTop: '6px' }}>
                Laissez vos coordonnées : un conducteur de travaux vous rappelle pour planifier une visite.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label className="form-label" htmlFor="q-name">Nom & prénom *</label>
                <input
                  id="q-name"
                  className="form-input"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jean Dupont"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div>
                  <label className="form-label" htmlFor="q-phone">Téléphone *</label>
                  <input
                    id="q-phone"
                    className="form-input"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="q-city">Ville *</label>
                  <input
                    id="q-city"
                    className="form-input"
                    type="text"
                    required
                    placeholder="Toulouse"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="form-label" htmlFor="q-service">Type de prestation</label>
                <select
                  id="q-service"
                  className="form-input"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  {serviceOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label" htmlFor="q-details">Description rapide</label>
                <textarea
                  id="q-details"
                  className="form-input"
                  rows={3}
                  placeholder="Ex : rénovation d’un T3 de 75 m² à Saint-Cyprien, début souhaité en mai…"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '6px' }}>
                <span>Envoyer ma demande</span>
                <ArrowRight size={16} />
              </button>
            </form>

            <div className="modal-footnote">
              <ShieldCheck size={16} color="var(--brand-blue)" />
              <span>Garantie décennale · Sans engagement</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
