import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-narrow" style={{ textAlign: 'center', padding: '60px 24px' }}>
        <div className="eyebrow-badge">Erreur 404</div>
        <h1 className="page-title">Cette page n’existe pas.</h1>
        <p className="page-lead" style={{ marginBottom: '32px' }}>
          Elle a peut-être été déplacée. Revenez à l’accueil pour poursuivre votre visite.
        </p>
        <Link href="/" className="btn-primary">
          <ArrowLeft size={17} />
          <span>Retour à l’accueil</span>
        </Link>
      </div>
    </section>
  );
}
