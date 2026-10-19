import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, Users, Ruler, Leaf } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import Testimonials from '@/components/Testimonials';
import ZoneIntervention from '@/components/ZoneIntervention';
import CtaBanner from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'À propos',
  description: 'L.I.N Rénovation, entreprise générale de bâtiment à Toulouse : nos valeurs, notre équipe, notre zone d’intervention et les avis de nos clients.',
  alternates: { canonical: '/a-propos' },
};

const values = [
  { icon: Users, title: 'Interlocuteur unique', text: 'Un conducteur de travaux dédié coordonne tous les corps de métier pour vous.' },
  { icon: Ruler, title: 'Exigence technique', text: 'Respect des DTU et des normes en vigueur, contrôles à chaque étape.' },
  { icon: ShieldCheck, title: 'Engagements tenus', text: 'Prix ferme, délais contractuels et garantie décennale sur nos ouvrages.' },
  { icon: Leaf, title: 'Matériaux responsables', text: 'Peintures sans COV, filières locales et tri des déchets de chantier.' },
];

export default function AProposPage() {
  return (
    <>
      <PageHeader
        eyebrow="Qui sommes-nous"
        title="Une entreprise toulousaine, exigeante et à l’écoute"
        description="L.I.N Rénovation accompagne particuliers et professionnels dans la rénovation de leurs biens, avec une seule ambition : un résultat à la hauteur de vos attentes."
        crumbs={[{ label: 'À propos' }]}
      />

      <section className="section-padding">
        <div className="container">
          <div className="split">
            <div className="split-media">
              <Image src="/toulouse-loft.jpg" alt="Loft rénové à Toulouse" fill sizes="(max-width: 900px) 100vw, 560px" style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Notre histoire</h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75, marginBottom: '16px' }}>
                Née à Toulouse, L.I.N Rénovation réunit des artisans expérimentés autour d’une idée simple : rénover sans
                imposer au client la coordination de multiples entreprises.
              </p>
              <p style={{ fontSize: '16.5px', lineHeight: 1.75 }}>
                Plomberie, électricité, plâtrerie, carrelage, menuiserie, peinture : nous maîtrisons l’ensemble des lots et
                restons votre unique responsable, du premier rendez-vous à la réception des travaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-white">
        <div className="container">
          <SectionHeading eyebrow="Nos valeurs" title="Ce qui nous guide sur chaque chantier." />
          <div className="grid-steps">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="step-card">
                  <div className="icon-tile icon-tile-white" style={{ marginBottom: '20px' }}>
                    <Icon size={22} />
                  </div>
                  <h3 className="card-title" style={{ fontSize: '19px' }}>{v.title}</h3>
                  <p className="card-text" style={{ marginBottom: 0 }}>{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading eyebrow="Avis clients" title="Ils nous ont fait confiance." />
          <Testimonials />
        </div>
      </section>

      <section className="section-padding section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Zone d’intervention"
            title="Toulouse & Haute-Garonne (31)"
            description="Basés à Toulouse, nous intervenons sur l’ensemble de la métropole et de sa première couronne."
          />
          <ZoneIntervention />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
