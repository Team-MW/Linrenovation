import Link from 'next/link';
import { Phone, MapPin, ShieldCheck, Clock } from 'lucide-react';
import Logo from './Logo';
import { site, navItems } from '@/lib/site';
import { services } from '@/lib/services';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div style={{ maxWidth: '340px' }}>
            <div style={{ marginBottom: '20px' }}>
              <Logo size="md" />
            </div>
            <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
              Entreprise générale de bâtiment à Toulouse. Rénovation tous corps d’état avec exigence et sérénité.
            </p>
            <a href={site.phoneHref} className="phone-pill-btn">
              <Phone size={15} />
              <span>{site.phone}</span>
            </a>
          </div>

          <div>
            <div className="footer-title">Expertises</div>
            <ul className="footer-list">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.shortTitle}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-title">Navigation</div>
            <ul className="footer-list">
              <li><Link href="/">Accueil</Link></li>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-title">Informations</div>
            <ul className="footer-list footer-info">
              <li>
                <ShieldCheck size={17} />
                <span>Garantie décennale & RC Professionnelle</span>
              </li>
              <li>
                <MapPin size={17} />
                <span>Toulouse & {site.region}</span>
              </li>
              <li>
                <Clock size={17} />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {site.name} · SAS · SIREN {site.siren} · R.C.S Toulouse
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
