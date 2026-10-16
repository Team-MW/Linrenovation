'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Heart, X } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [showLegal, setShowLegal] = useState(false);

  return (
    <footer style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="container">
        
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {/* Brand Col */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ marginBottom: '20px' }}>
              <Logo size="md" />
            </div>
            <p style={{ fontSize: '14.5px', color: '#64748b', lineHeight: 1.7, marginBottom: '24px' }}>
              Entreprise générale de bâtiment à Toulouse. Rénovation complète tous corps d’état avec exigence architecturale et sérénité.
            </p>

            <a href="tel:0616219905" className="phone-pill-btn">
              <Phone size={15} />
              <span>06 16 21 99 05</span>
            </a>
          </div>

          {/* Expertises */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>
              Savoir-Faire
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#475569' }}>
              <li><a href="#services" style={{ transition: 'color 0.2s' }}>Rénovation Complète Clés en main</a></li>
              <li><a href="#services" style={{ transition: 'color 0.2s' }}>Salles de Bain &amp; Suites Parentales</a></li>
              <li><a href="#services" style={{ transition: 'color 0.2s' }}>Cuisines &amp; Agencements Ouverts</a></li>
              <li><a href="#services" style={{ transition: 'color 0.2s' }}>Électricité &amp; Domotique NF C 15-100</a></li>
              <li><a href="#services" style={{ transition: 'color 0.2s' }}>Plâtrerie &amp; Isolation Thermique</a></li>
              <li><a href="#services" style={{ transition: 'color 0.2s' }}>Parquets &amp; Peintures Décoratives</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>
              Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#475569' }}>
              <li><a href="#avant-apres">Comparateur Avant / Après</a></li>
              <li><a href="#realisations">Nos Réalisations à Toulouse</a></li>
              <li><a href="#methode">Notre Méthode en 4 étapes</a></li>
              <li><a href="#simulateur">Simulateur de Devis Gratuit</a></li>
              <li><a href="#avis">Avis Clients Vérifiés</a></li>
              <li><a href="#contact">Prendre Rendez-vous</a></li>
            </ul>
          </div>

          {/* Legal / Assurances */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>
              Garanties &amp; Siège
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: '#64748b' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <ShieldCheck size={18} color="#1d4ed8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Garantie Décennale 10 ans et Responsabilité Civile Professionnelle.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={18} color="#1d4ed8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Interventions sur Toulouse et Haute-Garonne (31).</span>
              </div>
              <div style={{ marginTop: '8px' }}>
                <button
                  onClick={() => setShowLegal(true)}
                  style={{ fontSize: '13px', color: '#1d4ed8', background: 'none', padding: 0, textDecoration: 'underline' }}
                >
                  Mentions Légales &amp; Conformité
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar exact text from DA */}
        <div
          style={{
            borderTop: '1px solid #f1f5f9',
            paddingTop: '32px',
            textAlign: 'center',
            fontSize: '13px',
            color: '#64748b',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <div style={{ fontWeight: 500, color: '#334155' }}>
            L.I.N RÉNOVATION · SAS au capital social
          </div>
          <div>
            SIREN 942 856 451 · Toulouse (31)
          </div>
          <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '6px' }}>
            © {new Date().getFullYear()} L.I.N Rénovation. Tous droits réservés.
          </div>
        </div>

      </div>

      {/* Mentions Légales Modal */}
      {showLegal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 110,
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setShowLegal(false)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '24px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '36px',
              position: 'relative',
              boxShadow: 'var(--shadow-hover)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowLegal(false)}
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

            <h3 style={{ fontSize: '24px', marginBottom: '20px', color: '#0f172a' }}>
              Mentions Légales
            </h3>

            <div style={{ fontSize: '14px', color: '#475569', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p>
                <strong>Éditeur du site :</strong><br />
                La société <strong>L.I.N RÉNOVATION</strong>, Société par Actions Simplifiée (SAS) au capital social.<br />
                Numéro SIREN : <strong>942 856 451</strong><br />
                Siège social : Toulouse (Haute-Garonne - 31), France.<br />
                Téléphone : 06 16 21 99 05
              </p>

              <p>
                <strong>Activité :</strong><br />
                Travaux de rénovation tous corps d'état, plâtrerie, peinture, plomberie, électricité, carrelage, menuiserie intérieure et agencement sur mesure.
              </p>

              <p>
                <strong>Assurance &amp; Garantie :</strong><br />
                L'entreprise est titulaire d'une police d'assurance Garantie Décennale et Responsabilité Civile Professionnelle souscrite auprès d'une compagnie habilitée, couvrant l'ensemble de ses interventions en France métropolitaine.
              </p>

              <p>
                <strong>Protection des Données Personnelles :</strong><br />
                Les informations recueillies via nos formulaires sont uniquement destinées à l'établissement de propositions commerciales ou devis pour votre projet de rénovation. Elles ne sont ni vendues ni cédées à des tiers.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
