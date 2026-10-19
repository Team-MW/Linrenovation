import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ServicesGrid from '@/components/Services';
import CtaBanner from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Nos expertises',
  description:
    'Rénovation globale, salle de bain, cuisine, électricité, plomberie, peinture et sols : toutes nos prestations de rénovation à Toulouse.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tous corps d’état"
        title="Nos expertises en rénovation"
        description="De la rénovation d’une pièce à la transformation complète d’une maison, nous coordonnons tous les métiers pour un résultat cohérent et durable."
        crumbs={[{ label: 'Expertises' }]}
      />
      <section className="section-padding">
        <div className="container">
          <ServicesGrid />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
