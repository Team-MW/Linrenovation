import Image from 'next/image';
import Link from 'next/link';
import QuoteButton from './QuoteButton';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow-badge">Rénovation &amp; architecture d’intérieur</span>

          {/* Accroche provisoire, formulation à valider avec le client */}
          <h1 className="hero-title">
            Lin Rénovation vous <span className="serif-i">accompagne</span> sur vos projets.
          </h1>

          <p className="hero-lead">
            Atelier de rénovation clé en main à Toulouse. De la première esquisse à la remise des clés, on transforme
            votre appartement, votre maison ou votre local avec le soin d’un travail bien fait.
          </p>

          <div className="hero-actions">
            <QuoteButton label="Demander un devis" />
            <Link href="/realisations" className="btn-secondary">
              Voir nos réalisations
            </Link>
          </div>

          <div className="hero-signature">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
              <circle cx="20" cy="20" r="19" stroke="var(--border-input)" />
              <text x="20" y="26" textAnchor="middle" fontFamily="Georgia,serif" fontStyle="italic" fontSize="17" fill="var(--brand-blue)">
                L
              </text>
            </svg>
            <span className="who">
              Un atelier dirigé par <b>Leïla</b> et Nadir, associés toulousains.
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <Image
              src="/hero.jpg"
              alt="Appartement rénové à Toulouse par L.I.N Rénovation"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 520px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="badge-float badge-tl">
            <span className="n">10</span>
            <span className="t">ans de garantie décennale</span>
          </div>
          <div className="badge-float badge-br">
            <span className="n">1</span>
            <span className="t">interlocuteur unique, tous corps d’état</span>
          </div>
        </div>
      </div>
    </section>
  );
}
