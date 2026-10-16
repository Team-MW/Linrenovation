'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Rénovation intégrale appartement',
    surface: '',
    city: 'Toulouse',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
          <div className="eyebrow-badge">
            CONTACT &amp; DEVIS PERSONNALISÉ · TOULOUSE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '16px' }}>
            Donnons vie à votre projet d’intérieur.
          </h2>
          <p style={{ fontSize: '17px', color: '#64748b' }}>
            Remplissez notre formulaire ou contactez directement notre conducteur de travaux par téléphone pour convenir d'une visite gratuite sur place.
          </p>
          <div className="da-separator" />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            maxWidth: '1050px',
            margin: '0 auto',
          }}
        >
          {/* Direct Contact Card matching the DA card style */}
          <div
            className="da-card"
            style={{
              padding: 'clamp(28px, 4vw, 44px)',
              borderRadius: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#f8fafc',
            }}
          >
            <div>
              <div style={{ marginBottom: '20px' }}>
                <Logo size="sm" asLink={false} />
              </div>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#1d4ed8',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                LIGNE DIRECTE TRAVAUX
              </span>

              <h3 style={{ fontSize: '26px', color: '#0f172a', marginBottom: '14px', lineHeight: 1.2 }}>
                Une question urgente ou un départ de chantier rapide ?
              </h3>

              <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.7, marginBottom: '28px' }}>
                Nous vous répondons du lundi au samedi pour étudier la faisabilité technique de votre rénovation à Toulouse.
              </p>

              {/* The iconic phone pill button from DA */}
              <div style={{ marginBottom: '32px' }}>
                <a
                  href="tel:0616219905"
                  className="phone-pill-btn"
                  style={{
                    padding: '16px 32px',
                    fontSize: '18px',
                    fontWeight: 700,
                    width: '100%',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <Phone size={22} />
                  <span>06 16 21 99 05</span>
                </a>
              </div>

              {/* Company contact points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14.5px', color: '#334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1d4ed8', boxShadow: 'var(--shadow-sm)' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <strong style={{ color: '#0f172a', display: 'block' }}>Siège &amp; Atelier :</strong>
                    <span>Toulouse (31000) · Occitanie</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1d4ed8', boxShadow: 'var(--shadow-sm)' }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <strong style={{ color: '#0f172a', display: 'block' }}>Horaires de contact :</strong>
                    <span>Lun - Sam : 08h00 - 19h30</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1d4ed8', boxShadow: 'var(--shadow-sm)' }}>
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <strong style={{ color: '#0f172a', display: 'block' }}>Assurances &amp; Garanties :</strong>
                    <span>Garantie Décennale &amp; Responsabilité Civile Professionnelle</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal details snippet from DA */}
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '20px', marginTop: '32px', fontSize: '12.5px', color: '#64748b', textAlign: 'center' }}>
              <div><strong>L.I.N RÉNOVATION</strong> · SAS au capital social</div>
              <div style={{ marginTop: '2px' }}>SIREN 942 856 451 · R.C.S Toulouse (31)</div>
            </div>
          </div>

          {/* Quotation Form */}
          <div
            className="da-card"
            style={{
              padding: 'clamp(28px, 4vw, 44px)',
              borderRadius: '28px',
            }}
          >
            {submitted ? (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '24px', color: '#0f172a', marginBottom: '10px' }}>
                  Votre demande a bien été transmise !
                </h3>
                <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, maxWidth: '420px', marginBottom: '24px' }}>
                  Merci {formData.name}. Nous étudions votre projet avec attention et revenons vers vous par téléphone sous 24h ouvrées.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', marginBottom: '4px' }}>
                  Demande de devis &amp; visite gratuite
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#334155', marginBottom: '6px' }}>
                      Nom &amp; Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '14px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#334155', marginBottom: '6px' }}>
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '14px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#334155', marginBottom: '6px' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="votre@email.fr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '14px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#334155', marginBottom: '6px' }}>
                      Ville du projet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Toulouse, Tournefeuille..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '14px',
                        outline: 'none',
                        backgroundColor: '#ffffff',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#334155', marginBottom: '6px' }}>
                    Type de projet
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                      backgroundColor: '#ffffff',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="Rénovation intégrale appartement">Rénovation intégrale d'appartement</option>
                    <option value="Rénovation maison complète">Rénovation complète de maison</option>
                    <option value="Création / Rénovation Salle de bain">Création / Rénovation Salle de bain</option>
                    <option value="Cuisine & Pièce à vivre">Cuisine &amp; Pièce à vivre</option>
                    <option value="Peinture, Enduits & Parquets">Peinture, Enduits &amp; Parquets</option>
                    <option value="Électricité & Plomberie">Électricité &amp; Plomberie</option>
                    <option value="Autre aménagement sur mesure">Autre aménagement sur mesure</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#334155', marginBottom: '6px' }}>
                    Détails ou description de votre projet (surface, délai envisagé...)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Parlez-nous de vos envies, des contraintes éventuelles ou du calendrier souhaité..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none',
                      backgroundColor: '#ffffff',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px' }}>
                  <span>Envoyer ma demande &amp; réserver un rdv</span>
                  <ArrowRight size={18} />
                </button>

                <div style={{ fontSize: '12px', color: '#94a3b8', textAlign: 'center' }}>
                  Vos données restent strictement confidentielles. Aucun démarchage abusif.
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
