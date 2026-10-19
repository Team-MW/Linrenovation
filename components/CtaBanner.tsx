import { Phone } from 'lucide-react';
import QuoteButton from './QuoteButton';
import { site } from '@/lib/site';

interface CtaBannerProps {
  title?: string;
  text?: string;
  service?: string;
}

export default function CtaBanner({
  title = 'Un projet de rénovation à Toulouse ?',
  text = 'Visite technique et devis détaillé gratuits, sous 48 h. Parlons de votre projet.',
  service,
}: CtaBannerProps) {
  return (
    <section className="section-padding-sm">
      <div className="container">
        <div className="cta-banner">
          <div>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '10px' }}>{title}</h2>
            <p style={{ color: '#cbd5e1', fontSize: '16px', maxWidth: '520px' }}>{text}</p>
          </div>
          <div className="cta-actions">
            <a href={site.phoneHref} className="phone-pill-btn">
              <Phone size={17} />
              <span>{site.phone}</span>
            </a>
            <QuoteButton variant="light" service={service} />
          </div>
        </div>
      </div>
    </section>
  );
}
