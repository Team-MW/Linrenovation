import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import Calculator from '@/components/Calculator';

export const metadata: Metadata = {
  title: 'Simulateur de budget travaux',
  description: 'Estimez en 1 minute le budget de votre rénovation à Toulouse : type de projet, surface et niveau de finition.',
  alternates: { canonical: '/simulateur' },
};

export default function SimulateurPage() {
  return (
    <>
      <PageHeader
        eyebrow="Transparence & budget"
        title="Estimez le coût de vos travaux en 1 minute"
        description="Une première fourchette budgétaire, sans engagement. Le devis définitif est établi après la visite technique gratuite."
        crumbs={[{ label: 'Simulateur' }]}
      />
      <section className="section-padding">
        <div className="container">
          <Calculator />
          <p className="calc-disclaimer">
            Les montants affichés sont indicatifs et calculés à partir de prix moyens constatés sur nos chantiers toulousains.
            Ils ne tiennent pas compte de l’état existant, de l’accessibilité ni des choix précis de matériaux.
          </p>
        </div>
      </section>
    </>
  );
}
