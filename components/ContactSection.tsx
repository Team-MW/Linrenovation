'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { site } from '@/lib/site';
import { serviceOptions } from './QuoteModal';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: serviceOptions[0],
    city: 'Toulouse',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [field]: e.target.value });

  const contactPoints = [
    { icon: MapPin, title: 'Siège', text: `${site.city} (31000) · Occitanie` },
    { icon: Clock, title: 'Horaires', text: site.hours },
    { icon: ShieldCheck, title: 'Assurances', text: 'Garantie décennale & RC Professionnelle' },
  ];

  return (
    <div className="grid-contact">
      <div className="da-card contact-card">
        <div>
          <span className="eyebrow-text">Ligne directe travaux</span>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 26px)', marginBottom: '14px', lineHeight: 1.2 }}>
            Une question ou un chantier à démarrer rapidement ?
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '28px' }}>
            Nous répondons du lundi au samedi pour étudier la faisabilité de votre rénovation.
          </p>

          <a href={site.phoneHref} className="phone-pill-btn" style={{ width: '100%', padding: '16px 24px', fontSize: '18px', marginBottom: '32px' }}>
            <Phone size={22} />
            <span>{site.phone}</span>
          </a>

          <ul className="contact-points">
            {contactPoints.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.title}>
                  <div className="icon-tile icon-tile-white icon-tile-xs">
                    <Icon size={18} />
                  </div>
                  <div>
                    <strong>{p.title}</strong>
                    <span>{p.text}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="contact-legal">
          <strong>{site.name}</strong> · SAS · SIREN {site.siren} · R.C.S Toulouse
        </div>
      </div>

      <div className="da-card contact-card">
        {submitted ? (
          <div className="contact-success">
            <div className="success-icon">
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Votre demande a bien été transmise !</h3>
            <p style={{ fontSize: '15px', lineHeight: 1.6, maxWidth: '420px', marginBottom: '24px' }}>
              Merci {formData.name}. Nous étudions votre projet et vous rappelons sous 24 h ouvrées.
            </p>
            <button onClick={() => setSubmitted(false)} className="btn-secondary">
              Envoyer une autre demande
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
          >
            <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)' }}>Demande de devis & visite gratuite</div>

            <div className="form-row">
              <div>
                <label className="form-label" htmlFor="c-name">Nom & prénom *</label>
                <input id="c-name" className="form-input" type="text" required autoComplete="name" placeholder="Jean Dupont" value={formData.name} onChange={update('name')} />
              </div>
              <div>
                <label className="form-label" htmlFor="c-phone">Téléphone *</label>
                <input id="c-phone" className="form-input" type="tel" required autoComplete="tel" placeholder="06 12 34 56 78" value={formData.phone} onChange={update('phone')} />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label className="form-label" htmlFor="c-email">Email</label>
                <input id="c-email" className="form-input" type="email" autoComplete="email" placeholder="vous@email.fr" value={formData.email} onChange={update('email')} />
              </div>
              <div>
                <label className="form-label" htmlFor="c-city">Ville du projet *</label>
                <input id="c-city" className="form-input" type="text" required placeholder="Toulouse, Balma…" value={formData.city} onChange={update('city')} />
              </div>
            </div>

            <div>
              <label className="form-label" htmlFor="c-type">Type de projet</label>
              <select id="c-type" className="form-input" value={formData.projectType} onChange={update('projectType')}>
                {serviceOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label" htmlFor="c-message">Votre projet (surface, délai…)</label>
              <textarea
                id="c-message"
                className="form-input"
                rows={4}
                placeholder="Parlez-nous de vos envies, contraintes et du calendrier souhaité…"
                value={formData.message}
                onChange={update('message')}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px' }}>
              <span>Envoyer ma demande</span>
              <ArrowRight size={18} />
            </button>

            <p style={{ fontSize: '12px', color: 'var(--text-light)', textAlign: 'center' }}>
              Vos données restent confidentielles et ne sont jamais revendues.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
