import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Mentions légales',
  alternates: { canonical: '/mentions-legales' },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader eyebrow="Informations légales" title="Mentions légales" crumbs={[{ label: 'Mentions légales' }]} />
      <section className="section-padding">
        <div className="container-narrow legal">
          <h2>Éditeur du site</h2>
          <p>
            {site.name}, société par actions simplifiée (SAS).<br />
            SIREN : {site.siren} · R.C.S Toulouse<br />
            Siège social : Toulouse (31), France<br />
            Téléphone : {site.phone}
          </p>

          <h2>Activité</h2>
          <p>
            Travaux de rénovation tous corps d’état : plâtrerie, peinture, plomberie, électricité, carrelage, menuiserie
            intérieure et agencement sur mesure.
          </p>

          <h2>Assurances</h2>
          <p>
            L’entreprise est titulaire d’une assurance garantie décennale et responsabilité civile professionnelle couvrant
            l’ensemble de ses interventions. Les attestations sont communiquées avec chaque devis.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les informations recueillies via les formulaires sont uniquement utilisées pour répondre à votre demande de devis.
            Elles ne sont ni vendues ni cédées à des tiers. Conformément au RGPD, vous disposez d’un droit d’accès, de
            rectification et de suppression de vos données en nous contactant au {site.phone}.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus de ce site (textes, photographies, logo) est la propriété de {site.name}. Toute
            reproduction sans autorisation préalable est interdite.
          </p>
        </div>
      </section>
    </>
  );
}
