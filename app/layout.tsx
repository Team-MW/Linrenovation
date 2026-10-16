import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "L.I.N RÉNOVATION Toulouse | Rénovation Tous Corps d'État Haut de Gamme",
  description:
    "Entreprise de rénovation d'exception tous corps d'état à Toulouse (31). Rénovation complète d'appartements, maisons, cuisines et salles de bain de standing. Devis gratuit et personnalisé.",
  keywords: [
    "rénovation toulouse",
    "rénovation tous corps d'état toulouse",
    "artisan rénovation toulouse",
    "rénovation appartement toulouse",
    "rénovation salle de bain toulouse",
    "rénovation cuisine toulouse",
    "LIN rénovation",
    "devis rénovation toulouse"
  ],
  authors: [{ name: "L.I.N RÉNOVATION" }],
  creator: "L.I.N RÉNOVATION",
  openGraph: {
    title: "L.I.N RÉNOVATION | Rénovation Tous Corps d'État · Toulouse",
    description: "L'art de rénover votre intérieur avec exigence et sérénité. Interlocuteur unique, finitions d'exception, garantie décennale.",
    url: "https://lin-renovation.fr",
    siteName: "L.I.N RÉNOVATION",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
