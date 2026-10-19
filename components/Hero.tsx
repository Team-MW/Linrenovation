import Image from 'next/image';
import { Phone, ShieldCheck, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import QuoteButton from './QuoteButton';
import { site } from '@/lib/site';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content">
          <div className="eyebrow-badge animate-fade-in">Rénovation tous corps d’état · Toulouse</div>

          <h1 className="hero-title">L’art de rénover votre intérieur avec exigence &amp; sérénité.</h1>

          <p className="hero-lead">
            Entreprise générale de bâtiment à Toulouse. Nous transformons appartements, maisons et locaux professionnels
            avec une coordination tous corps d’état et un interlocuteur unique.
          </p>

          <div className="hero-actions">
            <QuoteButton label="Obtenir mon estimation gratuite" />
            <a href={site.phoneHref} className="phone-pill-btn">
              <Phone size={18} />
              <span>{site.phone}</span>
            </a>
          </div>

          <ul className="hero-reassurance">
            <li><ShieldCheck size={16} /> Garantie décennale</li>
            <li><CheckCircle2 size={16} /> Interlocuteur unique</li>
            <li><Clock size={16} /> Devis détaillé sous 48 h</li>
          </ul>
        </div>

        <div className="hero-visual">
          <Image
            src="/hero.jpg"
            alt="Appartement rénové haut de gamme à Toulouse par L.I.N Rénovation"
            fill
            priority
            sizes="(max-width: 1140px) 100vw, 1100px"
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-visual-shade" />
          <div className="hero-visual-badges">
            <div className="hero-card">
              <div className="hero-card-eyebrow">
                <Sparkles size={14} />
                <span>Chantier réalisé · Carmes</span>
              </div>
              <div className="hero-card-title">Rénovation complète d’un appartement ancien (110 m²)</div>
            </div>
            <div className="hero-status">
              <span className="status-dot" />
              <span>Nouveaux projets acceptés sur Toulouse &amp; agglomération</span>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          {[
            { value: '10 ans', label: 'Garantie décennale' },
            { value: '48 h', label: 'Délai d’envoi du devis' },
            { value: '1', label: 'Interlocuteur unique' },
            { value: '5,0 / 5', label: 'Satisfaction client' },
          ].map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
