import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Portfolio from '@/components/Portfolio';
import BeforeAfter from '@/components/BeforeAfter';
import SectionHeading from '@/components/SectionHeading';
import CtaBanner from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Nos réalisations',
  description: 'Découvrez nos chantiers de rénovation livrés à Toulouse : appartements, lofts, salles de bain, cuisines et suites parentales.',
  alternates: { canonical: '/realisations' },
};

export default function RealisationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Nos réalisations à Toulouse"
        description="Chaque projet est unique. Voici une sélection de chantiers récemment livrés, des Carmes à Balma."
        crumbs={[{ label: 'Réalisations' }]}
      />
      <section className="section-padding">
        <div className="container">
          <Portfolio />
        </div>
      </section>
      <section className="section-padding section-white">
        <div className="container">
          <SectionHeading eyebrow="Avant / après" title="La transformation, en un geste." description="Faites glisser le curseur pour comparer." />
          <BeforeAfter />
        </div>
      </section>
      <CtaBanner title="Votre projet sera le prochain ?" />
    </>
  );
}
