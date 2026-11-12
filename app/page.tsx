import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import Trades from '@/components/Trades';
import Values from '@/components/Values';
import Prestations from '@/components/Prestations';
import BeforeAfter from '@/components/BeforeAfter';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Atelier from '@/components/Atelier';
import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';
import SectionHeading from '@/components/SectionHeading';
import CtaBanner from '@/components/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Trades />

      <section className="section-padding">
        <div className="container">
          <Values />
        </div>
      </section>

      <section className="section-padding section-white" id="prestations">
        <div className="container">
          <SectionHeading
            eyebrow="Le métier"
            title="Un seul interlocuteur, tous les corps d’état."
            description="Vous ne jonglez pas avec dix artisans. On coordonne l’ensemble du chantier et on répond de chaque finition."
          />
          <Prestations />
          <div className="section-more">
            <Link href="/services" className="btn-secondary">
              Toutes nos prestations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding" id="methode">
        <div className="container">
          <SectionHeading
            eyebrow="La méthode"
            title="Quatre étapes, zéro mauvaise surprise."
            description="Chaque phase est structurée pour garantir transparence, ponctualité et sérénité."
          />
          <Process />
        </div>
      </section>

      <section className="section-padding section-white" id="realisations">
        <div className="container">
          <SectionHeading
            eyebrow="Réalisations"
            title="Des lieux qui ont changé de vie."
            description="Glissez le curseur pour voir la transformation. Un aperçu de nos chantiers récents à Toulouse et dans la métropole."
          />
          <BeforeAfter />
          <div style={{ marginTop: 'clamp(32px, 5vw, 48px)' }}>
            <Portfolio limit={3} showFilters={false} />
          </div>
          <div className="section-more">
            <Link href="/realisations" className="btn-secondary">
              Voir toutes les réalisations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding" id="atelier">
        <div className="container">
          <Atelier />
        </div>
      </section>

      <section className="section-padding section-white" id="confiance">
        <div className="container">
          <SectionHeading
            eyebrow="Ils nous font confiance"
            title="Particuliers, mais aussi mairies, agences et architectes."
            description="Au-delà des particuliers, des mairies, des agences immobilières et des architectes nous confient leurs chantiers."
          />
          <Partners />
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading eyebrow="On en parle" title="La confiance, ça se mérite chantier après chantier." />
          <Testimonials />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
