import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check, Phone, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import QuoteButton from '@/components/QuoteButton';
import CtaBanner from '@/components/CtaBanner';
import { services, getService } from '@/lib/services';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: `${service.shortTitle} à Toulouse`,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={service.badge}
        title={`${service.title} à Toulouse`}
        description={service.intro}
        crumbs={[{ label: 'Expertises', href: '/services' }, { label: service.shortTitle }]}
      />

      <section className="section-padding">
        <div className="container">
          <div className="split">
            <div className="split-media">
              <Image src={service.image} alt={service.title} fill sizes="(max-width: 900px) 100vw, 560px" style={{ objectFit: 'cover' }} />
            </div>

            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Ce que comprend la prestation</h2>
              <p style={{ fontSize: '16.5px', lineHeight: 1.7, marginBottom: '24px' }}>{service.description}</p>
              <ul className="check-list check-list-lg">
                {service.details.map((d) => (
                  <li key={d}>
                    <Check size={16} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div className="price-hint">
                Budget indicatif : <strong>{service.priceFrom}</strong>
              </div>
              <div className="inline-actions">
                <QuoteButton service={service.title} label="Chiffrer mon projet" />
                <a href={site.phoneHref} className="phone-pill-btn">
                  <Phone size={17} />
                  <span>{site.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-white">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow-badge">Déroulement</div>
            <h2 className="section-title">Comment nous procédons</h2>
            <div className="da-separator" />
          </div>
          <div className="grid-steps grid-steps-3">
            {service.steps.map((step, i) => (
              <div key={step.title} className="step-card">
                <span className="step-number" style={{ marginBottom: '16px', display: 'block' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="card-title" style={{ fontSize: '19px' }}>{step.title}</h3>
                <p className="card-text" style={{ marginBottom: 0 }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow-badge">À découvrir aussi</div>
            <h2 className="section-title">Nos autres expertises</h2>
            <div className="da-separator" />
          </div>
          <div className="grid-cards">
            {others.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="da-card service-card">
                  <div>
                    <div className="icon-tile" style={{ marginBottom: '18px' }}>
                      <Icon size={22} />
                    </div>
                    <h3 className="card-title">{s.title}</h3>
                    <p className="card-text">{s.description}</p>
                  </div>
                  <span className="card-link">
                    En savoir plus <ArrowRight size={16} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner service={service.title} />
    </>
  );
}
