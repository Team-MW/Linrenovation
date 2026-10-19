import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Process from '@/components/Process';
import Faq from '@/components/Faq';
import SectionHeading from '@/components/SectionHeading';
import CtaBanner from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Notre méthode',
  description: 'Visite gratuite, devis sous 48 h, conducteur de travaux dédié et livraison clés en main : notre méthode de rénovation en 4 étapes.',
  alternates: { canonical: '/methode' },
};

const commitments = [
  { title: 'Prix ferme', text: 'Le montant signé est celui que vous payez, sauf modification demandée par vos soins.' },
  { title: 'Planning contractuel', text: 'Dates de début et de fin inscrites au devis, suivies chaque semaine.' },
  { title: 'Chantier propre', text: 'Protection des parties communes, nettoyage quotidien, évacuation des gravats.' },
  { title: 'Transparence', text: 'Photos d’avancement régulières et un interlocuteur joignable à tout moment.' },
];

export default function MethodePage() {
  return (
    <>
      <PageHeader
        eyebrow="Tranquillité d’esprit"
        title="Une méthode claire, du premier appel à la remise des clés"
        description="Une rénovation ne doit pas être une source de stress. Voici comment nous travaillons."
        crumbs={[{ label: 'Notre méthode' }]}
      />

      <section className="section-padding">
        <div className="container">
          <Process />
        </div>
      </section>

      <section className="section-padding section-white">
        <div className="container">
          <SectionHeading eyebrow="Nos engagements" title="Ce que nous vous garantissons." />
          <div className="grid-steps">
            {commitments.map((c) => (
              <div key={c.title} className="step-card">
                <h3 className="card-title" style={{ fontSize: '19px' }}>{c.title}</h3>
                <p className="card-text" style={{ marginBottom: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading eyebrow="Questions fréquentes" title="Vous vous posez des questions ?" />
          <Faq />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
