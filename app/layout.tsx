import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCallBar from '@/components/FloatingCallBar';
import QuoteProvider from '@/components/QuoteProvider';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'L.I.N RÉNOVATION Toulouse | Rénovation tous corps d’état',
    template: '%s | L.I.N RÉNOVATION Toulouse',
  },
  description:
    'Entreprise de rénovation tous corps d’état à Toulouse (31) : appartements, maisons, cuisines et salles de bain. Interlocuteur unique, garantie décennale, devis gratuit sous 48 h.',
  keywords: [
    'rénovation toulouse',
    'rénovation tous corps d’état toulouse',
    'entreprise rénovation toulouse',
    'rénovation appartement toulouse',
    'rénovation salle de bain toulouse',
    'rénovation cuisine toulouse',
    'LIN rénovation',
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: 'L.I.N RÉNOVATION | Rénovation tous corps d’état · Toulouse',
    description: 'L’art de rénover votre intérieur avec exigence et sérénité. Interlocuteur unique, finitions soignées, garantie décennale.',
    url: site.url,
    siteName: site.name,
    locale: 'fr_FR',
    type: 'website',
    images: ['/hero.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: site.name,
  url: site.url,
  telephone: '+33616219905',
  image: `${site.url}/hero.jpg`,
  address: { '@type': 'PostalAddress', addressLocality: 'Toulouse', postalCode: '31000', addressCountry: 'FR' },
  areaServed: 'Toulouse et Haute-Garonne',
  openingHours: 'Mo-Sa 08:00-19:30',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <QuoteProvider>
          <a href="#contenu" className="skip-link">Aller au contenu</a>
          <Header />
          <main id="contenu">{children}</main>
          <Footer />
          <FloatingCallBar />
        </QuoteProvider>
      </body>
    </html>
  );
}
