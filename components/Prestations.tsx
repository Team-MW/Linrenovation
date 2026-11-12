import Link from 'next/link';

/** Prestations version V2 (reprises du site de base). */

const icons = {
  complete: (
    <svg className="ic" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 42V20L24 6l18 14v22" />
      <path d="M18 42V28h12v14" />
    </svg>
  ),
  pieces: (
    <svg className="ic" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="8" y="8" width="32" height="32" rx="3" />
      <path d="M8 22h32M22 22v18" />
      <circle cx="15" cy="15" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  peinture: (
    <svg className="ic" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M30 8l10 10-20 20-10 2 2-10z" />
      <path d="M26 12l10 10" />
    </svg>
  ),
  elec: (
    <svg className="ic" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 40L40 8" />
      <path d="M8 24V8h16M40 24v16H24" />
    </svg>
  ),
  menuiserie: (
    <svg className="ic" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="7" y="10" width="34" height="28" rx="2" />
      <path d="M24 10v28M7 24h34" />
    </svg>
  ),
  energie: (
    <svg className="ic" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M24 6v6M24 36v6M6 24h6M36 24h6M11 11l4 4M33 33l4 4M37 11l-4 4M15 33l-4 4" />
      <circle cx="24" cy="24" r="8" />
    </svg>
  ),
};

const prestations = [
  {
    key: 'complete',
    title: 'Rénovation complète',
    text: 'Appartement, maison ou local repensés de fond en comble, gros œuvre compris.',
    tags: ['Cloisons', 'Sols', 'Plafonds', 'Ouvertures'],
    href: '/services/renovation-globale',
  },
  {
    key: 'pieces',
    title: 'Cuisines & salles de bains',
    text: 'Les pièces techniques où le détail se voit. Plomberie, faïence, agencement.',
    tags: ['Plomberie', 'Carrelage', 'Meubles'],
    href: '/services/salle-de-bain',
  },
  {
    key: 'peinture',
    title: 'Peinture & enduits',
    text: 'Chaux, tadelakt, béton ciré, papiers peints. La matière juste pour chaque mur.',
    tags: ['Chaux', 'Tadelakt', 'Béton ciré'],
    href: '/services/peinture-sols',
  },
  {
    key: 'elec',
    title: 'Électricité & réseaux',
    text: 'Mise aux normes, tableau, éclairage, domotique. Sécurité d’abord.',
    tags: ['Mise aux normes', 'Éclairage', 'Domotique'],
    href: '/services/electricite',
  },
  {
    key: 'menuiserie',
    title: 'Menuiserie sur mesure',
    text: 'Verrières d’atelier, dressings, bibliothèques, portes. Conçus pour votre espace.',
    tags: ['Verrières', 'Dressings', 'Sur mesure'],
    href: '/contact',
  },
  {
    key: 'energie',
    title: 'Rénovation énergétique',
    text: 'Isolation, chauffage, menuiseries. On vous accompagne aussi sur les aides.',
    tags: ['Isolation', 'Chauffage', 'MaPrimeRénov’'],
    href: '/simulateur',
    cee: true,
  },
] as const;

/**
 * Tampon CEE (Certificats d'Économies d'Énergie).
 * À remplacer par le logo officiel fourni par le client : déposer le fichier dans
 * /public/cee.png puis remplacer ce SVG par <Image src="/cee.png" ... />.
 */
function CeeStamp() {
  return (
    <span className="cee-stamp" title="Éligible aux Certificats d’Économies d’Énergie (CEE)">
      <svg viewBox="0 0 100 100" aria-hidden>
        <defs>
          <path id="cee-arc" d="M50 50 m-36 0 a36 36 0 1 1 72 0 a36 36 0 1 1 -72 0" />
        </defs>
        <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text fontSize="9.5" fontWeight="700" letterSpacing="1.6" fill="currentColor">
          <textPath href="#cee-arc">ÉCONOMIES D’ÉNERGIE · CERTIFICATS ·</textPath>
        </text>
        <text x="50" y="58" textAnchor="middle" fontSize="22" fontWeight="800" fill="currentColor">
          CEE
        </text>
      </svg>
      <span className="sr-only">Éligible aux Certificats d’Économies d’Énergie (CEE)</span>
    </span>
  );
}

export default function Prestations() {
  return (
    <div className="svc-grid">
      {prestations.map((p) => (
        <Link key={p.key} href={p.href} className="svc">
          {'cee' in p && p.cee && <CeeStamp />}
          {icons[p.key]}
          <h3>{p.title}</h3>
          <p>{p.text}</p>
          <ul>
            {p.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Link>
      ))}
    </div>
  );
}
