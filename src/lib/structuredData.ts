import { brand, contact, legal, social } from '@/config/site';
import type { Locale } from '@/config/site';

/**
 * Dados estruturados (schema.org) para a organização/serviço profissional.
 * Apenas propriedades que refletem informações reais e já divulgadas no
 * site são incluídas — nenhum dado é inventado.
 */
export function organizationJsonLd(siteUrl: string, locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${brand.name}`,
    alternateName: legal.companyName,
    description:
      locale === 'pt'
        ? brand.tagline.pt
        : brand.tagline.en,
    url: siteUrl,
    email: contact.commercialEmail,
    areaServed: 'BR',
    availableLanguage: ['pt-BR', 'en'],
  };
}

export function personJsonLd(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rodolfo Rios',
    jobTitle: 'Software Engineer',
    url: siteUrl,
    sameAs: [social.linkedin],
    worksFor: {
      '@type': 'Organization',
      name: brand.name,
    },
  };
}
