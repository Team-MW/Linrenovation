/** Bloc « L'atelier » : présentation de l'équipe (repris du site de base). */
export default function Atelier() {
  return (
    <div className="atelier">
      <div className="portrait">
        <svg viewBox="0 0 400 460" role="img" aria-label="Portrait illustré de Leïla Rahmoun, fondatrice">
          <defs>
            <linearGradient id="atelier-pg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--brand-blue-soft)" />
              <stop offset="1" stopColor="var(--bg-subtle)" />
            </linearGradient>
          </defs>
          <rect width="400" height="460" fill="url(#atelier-pg)" />
          <g opacity=".2" stroke="var(--brand-blue)">
            <line x1="0" y1="150" x2="400" y2="150" />
            <line x1="0" y1="190" x2="400" y2="190" />
            <line x1="70" y1="150" x2="70" y2="190" />
            <line x1="200" y1="150" x2="200" y2="190" />
            <line x1="330" y1="150" x2="330" y2="190" />
          </g>
          <path d="M110 460c0-70 40-104 90-104s90 34 90 104" fill="#fff" stroke="var(--text-primary)" strokeWidth="2.5" />
          <path d="M170 360l30 34 30-34" fill="none" stroke="var(--brand-blue)" strokeWidth="2.5" />
          <circle cx="200" cy="250" r="66" fill="#fff" stroke="var(--text-primary)" strokeWidth="2.5" />
          <path
            d="M134 250c0-52 30-84 66-84s66 32 66 84c8-6 10-40-8-64s-64-40-96-24-42 52-36 78c2 6 6 10 8 10z"
            fill="var(--text-primary)"
            opacity=".9"
          />
          <path d="M138 250c-6 40 6 92 6 92M262 250c6 40-6 92-6 92" fill="none" stroke="var(--text-primary)" strokeWidth="2.5" />
          <path d="M176 246c4-4 12-4 16 0M208 246c4-4 12-4 16 0" fill="none" stroke="var(--text-primary)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M200 254v18l-6 6" fill="none" stroke="var(--text-primary)" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M188 292c8 6 16 6 24 0" fill="none" stroke="var(--brand-blue)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      <div>
        <span className="eyebrow-badge">L’atelier</span>
        <blockquote>
          Une belle rénovation, ce n’est pas un catalogue. C’est votre histoire, traduite dans la matière.
        </blockquote>
        <div className="by">
          <b>Leïla Rahmoun</b>
          Présidente et co-fondatrice · L.I.N RÉNOVATION
        </div>
        <p className="parcours">
          L.I.N, ce sont trois associés qui ont réuni leurs initiales : Leïla, Iman et Nadir. Formés sur les chantiers avant
          de monter leur atelier toulousain, ils mènent chaque rénovation comme ils aimeraient qu’on rénove chez eux : à
          l’écoute, sans jargon, avec une équipe qu’ils connaissent un par un.
        </p>
        <div className="atelier-stats">
          <div className="atelier-stat">
            <div className="v">250<em>+</em></div>
            <div className="l">chantiers livrés</div>
          </div>
          <div className="atelier-stat">
            <div className="v">15</div>
            <div className="l">ans d’expérience</div>
          </div>
          <div className="atelier-stat">
            <div className="v">10</div>
            <div className="l">artisans de confiance</div>
          </div>
        </div>
      </div>
    </div>
  );
}
