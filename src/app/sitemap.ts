import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.landpower.com';

  const routes = [
    '',
    '/about',
    '/founder',
    '/construction',
    '/gallery',
    '/services/open-plots',
    '/services/luxury-villas',
    '/services/residential-spaces',
    '/services/commercial-spaces',
    '/services/investment-guidance',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.7 : 0.8,
  }));
}
