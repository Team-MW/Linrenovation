import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { services } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/services', '/realisations', '/methode', '/simulateur', '/a-propos', '/contact'];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: 'monthly' as const, priority: p === '' ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, changeFrequency: 'monthly' as const, priority: 0.7 })),
  ];
}
