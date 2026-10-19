import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ContactSection from '@/components/ContactSection';
import ZoneIntervention from '@/components/ZoneIntervention';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Contact & devis gratuit',
  description: 'Contactez L.I.N Rénovation au 06 16 21 99 05 ou via le formulaire pour une visite technique et un devis gratuit à Toulouse.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact & devis personnalisé"
        title="Donnons vie à votre projet"
        description="Remplissez le formulaire ou appelez directement notre conducteur de travaux pour convenir d’une visite gratuite."
        crumbs={[{ label: 'Contact' }]}
      />
      <section className="section-padding">
        <div className="container">
          <ContactSection />
        </div>
      </section>
      <section className="section-padding section-white">
        <div className="container">
          <SectionHeading eyebrow="Zone d’intervention" title="Nous nous déplaçons chez vous." />
          <ZoneIntervention />
        </div>
      </section>
    </>
  );
}
