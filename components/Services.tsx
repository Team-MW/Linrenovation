import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '@/lib/services';

export default function ServicesGrid({ showDetails = true }: { showDetails?: boolean }) {
  return (
    <div className="grid-cards">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Link key={service.slug} href={`/services/${service.slug}`} className="da-card service-card">
            <div>
              <div className="service-card-top">
                <div className="icon-tile">
                  <Icon size={24} />
                </div>
                <span className="chip">{service.badge}</span>
              </div>

              <h3 className="card-title">{service.title}</h3>
              <p className="card-text">{service.description}</p>

              {showDetails && (
                <ul className="check-list">
                  {service.details.map((detail) => (
                    <li key={detail}>
                      <Check size={14} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <span className="card-link">
              Découvrir la prestation <ArrowRight size={16} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
