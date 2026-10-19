export type ProjectCategory = 'complete' | 'sdb' | 'cuisine' | 'agencement';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  area: string;
  duration: string;
  image: string;
  description: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 'carmes',
    title: 'Rénovation d’un appartement de caractère',
    category: 'complete',
    categoryLabel: 'Rénovation complète',
    location: 'Quartier des Carmes · Toulouse',
    area: '110 m²',
    duration: '8 semaines',
    image: '/after-salon.jpg',
    description:
      'Remise à neuf complète d’un appartement ancien : restauration du parquet point de Hongrie, création de moulures sur mesure, intégration discrète de l’électricité et mise en peinture soignée.',
    highlights: [
      'Parquet chêne massif vitrifié mat',
      'Moulures et rosaces préservées',
      'Éclairage architectural',
      'Isolation phonique renforcée',
    ],
  },
  {
    id: 'saint-cyprien',
    title: 'Loft contemporain avec brique toulousaine',
    category: 'complete',
    categoryLabel: 'Loft & rénovation',
    location: 'Saint-Cyprien · Toulouse',
    area: '85 m²',
    duration: '7 semaines',
    image: '/toulouse-loft.jpg',
    description:
      'Mise en valeur d’un mur en briques foraines, création d’un bureau vitré avec verrière sur mesure en acier laqué noir et parquet chêne clair.',
    highlights: [
      'Briques foraines jointoyées à la chaux',
      'Verrière atelier thermolaquée',
      'Cuisine semi-ouverte',
      'Plancher chauffant basse température',
    ],
  },
  {
    id: 'bathroom',
    title: 'Salle d’eau minérale en travertin & chêne',
    category: 'sdb',
    categoryLabel: 'Salle de bain',
    location: 'Tournefeuille · Haute-Garonne',
    area: '14 m²',
    duration: '3 semaines',
    image: '/bathroom.jpg',
    description:
      'Transformation d’une salle de bain cloisonnée en suite d’eau épurée : douche italienne plain-pied, miroir rétroéclairé, meuble suspendu et robinetterie encastrée noire mate.',
    highlights: [
      'Douche italienne avec caniveau invisible',
      'Grès cérame grand format effet travertin',
      'Robinetterie thermostatique encastrée',
      'Niche rétroéclairée intégrée',
    ],
  },
  {
    id: 'kitchen',
    title: 'Cuisine architecturale & îlot marbre',
    category: 'cuisine',
    categoryLabel: 'Cuisine ouverte',
    location: 'Balma · Toulouse Métropole',
    area: '28 m²',
    duration: '4 semaines',
    image: '/kitchen.jpg',
    description:
      'Espace de vie convivial : façades en chêne strié, îlot central avec retombée en cascade effet marbre Calacatta et cave à vin intégrée.',
    highlights: [
      'Îlot cascade effet marbre Calacatta',
      'Éclairage sous meubles',
      'Induction avec hotte intégrée',
      'Menuiseries toute hauteur',
    ],
  },
  {
    id: 'bedroom',
    title: 'Suite parentale & dressing sur mesure',
    category: 'agencement',
    categoryLabel: 'Menuiserie & chambre',
    location: 'Côte Pavée · Toulouse',
    area: '32 m²',
    duration: '3 semaines',
    image: '/bedroom.jpg',
    description:
      'Agencement d’une chambre principale avec dressing en chêne clair, penderies éclairées par LED à l’ouverture et alcôve tête de lit.',
    highlights: [
      'Dressing toute hauteur sans poignée',
      'LED à détection d’ouverture',
      'Tête de lit capitonnée lin naturel',
      'Parquet chêne posé en continu',
    ],
  },
];

export const reviews = [
  {
    author: 'Alexandre & Sophie M.',
    location: 'Quartier des Carmes · Toulouse',
    project: 'Rénovation intégrale T4 (110 m²)',
    date: 'Septembre 2024',
    comment:
      'Une expérience remarquable. L.I.N Rénovation a su sublimer notre appartement ancien en conservant son cachet tout en modernisant les réseaux. Délais respectés et chantier toujours propre.',
  },
  {
    author: 'Marc V.',
    location: 'Tournefeuille',
    project: 'Suite parentale & salle d’eau',
    date: 'Novembre 2024',
    comment:
      'Artisans ponctuels, discrets et très compétents. La douche à l’italienne et la robinetterie encastrée sont parfaites. Aucun surcoût par rapport au devis initial.',
  },
  {
    author: 'Camille D.',
    location: 'Saint-Cyprien · Toulouse',
    project: 'Ouverture cuisine & verrière',
    date: 'Janvier 2025',
    comment:
      'Avoir un seul interlocuteur pour le maçon, l’électricien, le peintre et le menuisier change tout. Le résultat est encore plus beau que nos plans. Merci à toute l’équipe !',
  },
];

export const faqs = [
  {
    q: 'La visite et le devis sont-ils vraiment gratuits ?',
    a: 'Oui. Nous nous déplaçons gratuitement à Toulouse et dans l’agglomération pour étudier votre projet, puis vous envoyons un devis détaillé sous 48 h, sans engagement.',
  },
  {
    q: 'Combien de temps dure une rénovation complète ?',
    a: 'Comptez en moyenne 2 à 4 semaines pour une salle de bain ou une cuisine, et 6 à 12 semaines pour un appartement complet selon la surface et les travaux.',
  },
  {
    q: 'Êtes-vous assurés ?',
    a: 'L’entreprise est couverte par une garantie décennale et une responsabilité civile professionnelle. Les attestations sont jointes à chaque devis.',
  },
  {
    q: 'Faut-il être présent pendant le chantier ?',
    a: 'Non. Un conducteur de travaux dédié suit le chantier et vous envoie des points d’avancement réguliers avec photos. Vous êtes conviés aux étapes clés.',
  },
  {
    q: 'Comment se passe le paiement ?',
    a: 'Un acompte est versé à la signature, puis les paiements suivent l’avancement réel des travaux selon l’échéancier indiqué sur le devis. Le solde est réglé à la réception.',
  },
  {
    q: 'Gérez-vous les démarches de copropriété ?',
    a: 'Nous vous aidons à préparer le dossier technique à présenter au syndic (plans, descriptif, attestations) et respectons le règlement de copropriété pendant les travaux.',
  },
];

export const toulouseDistricts = [
  'Carmes & Saint-Étienne',
  'Capitole & Arnaud-Bernard',
  'Saint-Cyprien',
  'Côte Pavée & Busca',
  'Compans-Caffarelli',
  'Saint-Aubin & Dupuy',
  'Minimes',
  'Rangueil',
];

export const surroundingCities = [
  'Blagnac',
  'Colomiers',
  'Tournefeuille',
  'Balma',
  'Ramonville',
  'L’Union',
  'Cugnaux',
  'Muret',
  'Castanet-Tolosan',
  'Saint-Orens',
  'Pibrac',
  'Plaisance-du-Touch',
];
