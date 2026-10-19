import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/Hero';
import BeforeAfter from '@/components/BeforeAfter';
import ServicesGrid from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import SectionHeading from '@/components/SectionHeading';
import CtaBanner from '@/components/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="Nos expertises"
            title="Un seul interlocuteur pour l’ensemble de vos travaux."
            description="Notre équipe réunit tous les corps d’état du bâtiment pour vous garantir fluidité, maîtrise du calendrier et finitions irréprochables."
          />
          <ServicesGrid showDetails={false} />
          <div className="section-more">
            <Link href="/services" className="btn-secondary">
              Toutes nos expertises <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Avant / après"
            title="La métamorphose en direct."
            description="Faites glisser le curseur pour mesurer le soin apporté à chaque détail."
          />
          <BeforeAfter />
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading
            eyebrow="Réalisations récentes"
            title="Des chantiers pensés pour durer."
            description="Une sélection de projets livrés à Toulouse et dans sa première couronne."
          />
          <Portfolio limit={3} showFilters={false} />
          <div className="section-more">
            <Link href="/realisations" className="btn-secondary">
              Voir toutes les réalisations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding section-white">
        <div className="container">
          <SectionHeading
            eyebrow="Notre méthode"
            title="Une méthodologie rigoureuse, zéro stress."
            description="Chaque phase est structurée pour garantir transparence, ponctualité et sérénité."
          />
          <Process />
          <div className="section-more">
            <Link href="/methode" className="btn-secondary">
              Découvrir notre méthode <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionHeading eyebrow="Avis clients" title="Ils nous ont confié leur intérieur." />
          <Testimonials />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
