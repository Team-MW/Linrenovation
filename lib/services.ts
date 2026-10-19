import type { LucideIcon } from 'lucide-react';
import { Home, Bath, UtensilsCrossed, Zap, Droplet, Layers } from 'lucide-react';

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  intro: string;
  details: string[];
  steps: { title: string; text: string }[];
  image: string;
  priceFrom: string;
}

export const services: Service[] = [
  {
    slug: 'renovation-globale',
    icon: Home,
    title: 'Rénovation globale clés en main',
    shortTitle: 'Rénovation globale',
    badge: 'Tous corps d’état',
    description:
      'Prise en charge intégrale de votre appartement ou maison : restructuration des espaces, dépose, coordination de tous les corps de métier et finitions sur mesure.',
    intro:
      'Vous souhaitez transformer entièrement votre bien sans gérer dix artisans ? Nous pilotons l’ensemble du chantier, de la démolition à la remise des clés, avec un interlocuteur unique et un planning contractuel.',
    details: [
      'Interlocuteur unique & planning strict',
      'Optimisation des volumes & cloisons',
      'Suivi de chantier hebdomadaire',
      'Nettoyage rigoureux & réception sans réserve',
    ],
    steps: [
      { title: 'Diagnostic', text: 'Relevé des cotes, état des réseaux, murs porteurs et contraintes de copropriété.' },
      { title: 'Conception', text: 'Plan d’aménagement, choix des matériaux et devis détaillé poste par poste.' },
      { title: 'Exécution', text: 'Enchaînement maîtrisé des lots : maçonnerie, réseaux, plâtrerie, revêtements, finitions.' },
    ],
    image: '/after-salon.jpg',
    priceFrom: 'à partir de 850 € / m²',
  },
  {
    slug: 'salle-de-bain',
    icon: Bath,
    title: 'Salles de bain & suites parentales',
    shortTitle: 'Salle de bain',
    badge: 'Espaces d’eau',
    description:
      'Création et rénovation de salles d’eau raffinées : douches à l’italienne sans ressaut, baignoires îlot, faïences XXL et robinetterie encastrée.',
    intro:
      'La salle de bain concentre plomberie, électricité, étanchéité et carrelage : c’est la pièce où la coordination fait toute la différence. Nous la livrons en 2 à 4 semaines selon sa complexité.',
    details: [
      'Étanchéité sous carrelage certifiée',
      'Meubles vasques sur mesure en chêne',
      'Éclairage d’ambiance LED indirect',
      'VMC silencieuse & sanitaires suspendus',
    ],
    steps: [
      { title: 'Dépose', text: 'Démolition propre, évacuation en déchetterie agréée, contrôle des évacuations.' },
      { title: 'Réseaux', text: 'Plomberie multicouche, électricité conforme aux volumes, étanchéité SPEC.' },
      { title: 'Finitions', text: 'Carrelage grand format, joints époxy, pose des équipements et mise en service.' },
    ],
    image: '/bathroom.jpg',
    priceFrom: 'à partir de 9 000 € la pièce',
  },
  {
    slug: 'cuisine',
    icon: UtensilsCrossed,
    title: 'Cuisines équipées & îlots centraux',
    shortTitle: 'Cuisine',
    badge: 'Design & convivialité',
    description:
      'Conception d’espaces de vie ouverts, verrières style atelier, plans de travail en céramique ou quartz et intégration discrète des équipements.',
    intro:
      'Ouverture d’une cloison, création d’un îlot, déplacement des arrivées d’eau : nous réalisons les travaux lourds comme les finitions pour une cuisine fonctionnelle et durable.',
    details: [
      'Verrières sur mesure acier & verre feuilleté',
      'Crédences en marbre ou zellige',
      'Électroménager parfaitement encastré',
      'Plans de travail haute résistance',
    ],
    steps: [
      { title: 'Structure', text: 'Ouverture de cloisons (avec étude si mur porteur), reprise des sols et plafonds.' },
      { title: 'Réseaux', text: 'Circuits électriques dédiés, arrivées et évacuations repositionnées, extraction.' },
      { title: 'Agencement', text: 'Pose des meubles, plans de travail, crédence et réglages finaux.' },
    ],
    image: '/kitchen.jpg',
    priceFrom: 'à partir de 12 000 €',
  },
  {
    slug: 'electricite',
    icon: Zap,
    title: 'Électricité générale & domotique',
    shortTitle: 'Électricité',
    badge: 'Norme NF C 15-100',
    description:
      'Remise aux normes intégrale, réfection des tableaux, éclairage architectural, appareillage design et gestion intelligente de l’éclairage.',
    intro:
      'Une installation ancienne est un risque pour votre sécurité et votre assurance. Nous remettons votre logement aux normes et préparons-le aux usages d’aujourd’hui.',
    details: [
      'Attestation de conformité Consuel',
      'Éclairage scénarisé et dimmable',
      'Appareillage de créateur',
      'Réseau RJ45 & fibre pré-câblé',
    ],
    steps: [
      { title: 'Diagnostic', text: 'Contrôle du tableau, de la terre et des circuits existants.' },
      { title: 'Réfection', text: 'Nouveau tableau, saignées propres, tirage des lignes et protections.' },
      { title: 'Conformité', text: 'Essais, repérage du tableau et remise des attestations.' },
    ],
    image: '/toulouse-loft.jpg',
    priceFrom: 'à partir de 90 € / m²',
  },
  {
    slug: 'plomberie-chauffage',
    icon: Droplet,
    title: 'Plomberie & chauffage économe',
    shortTitle: 'Plomberie & chauffage',
    badge: 'Réseaux & confort',
    description:
      'Remplacement de canalisations, colonnes d’évacuation, chauffe-eau thermodynamiques, radiateurs basse consommation ou planchers chauffants.',
    intro:
      'Des réseaux fiables et un chauffage performant réduisent vos factures et valorisent votre bien. Nous intervenons en rénovation partielle comme complète.',
    details: [
      'Réseau multicouche serti sous garantie',
      'Remplacement des colonnes vétustes',
      'Radiateurs design verticaux',
      'Climatisation réversible silencieuse',
    ],
    steps: [
      { title: 'Étude', text: 'Bilan des besoins en eau chaude et chauffage, choix des équipements.' },
      { title: 'Installation', text: 'Remplacement des réseaux, pose des émetteurs et du générateur.' },
      { title: 'Mise en service', text: 'Essais d’étanchéité, équilibrage et explication du fonctionnement.' },
    ],
    image: '/bedroom.jpg',
    priceFrom: 'sur devis',
  },
  {
    slug: 'peinture-sols',
    icon: Layers,
    title: 'Peinture, enduits & parquets',
    shortTitle: 'Peinture & sols',
    badge: 'Finitions haut de gamme',
    description:
      'Ratissage fin pour une planéité parfaite, peintures sans COV, parquets massifs ou contrecollés, carrelages grand format rectifiés.',
    intro:
      'Les finitions sont ce que l’on voit tous les jours. Nous préparons les supports avec soin pour un rendu net, durable et sans défaut sous la lumière rasante.',
    details: [
      'Préparation minutieuse des supports',
      'Peintures velours & laquées haute résistance',
      'Ponçage et vitrification de parquets anciens',
      'Carrelages grand format rectifiés',
    ],
    steps: [
      { title: 'Protection', text: 'Protection des sols, menuiseries et mobilier restant.' },
      { title: 'Préparation', text: 'Rebouchage, bandes, ratissage et ponçage des supports.' },
      { title: 'Application', text: 'Impression puis deux couches de finition, ou pose et vitrification des sols.' },
    ],
    image: '/hero.jpg',
    priceFrom: 'à partir de 35 € / m²',
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
