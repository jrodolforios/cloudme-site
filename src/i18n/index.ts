import type { Locale } from '@/config/site';
import type { Dictionary } from './types';
import { pt } from './pt';
import { en } from './en';

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary } from './types';

/**
 * Mapa de rotas equivalentes entre idiomas, usado pelo alternador PT/EN e
 * pelas tags `hreflang`. Ao adicionar uma nova página, registre aqui os
 * dois caminhos correspondentes.
 */
export const routeMap: Record<string, { pt: string; en: string }> = {
  home: { pt: '/', en: '/en/' },
  resume: { pt: '/rodolfo/', en: '/en/rodolfo/' },
  privacy: { pt: '/privacidade/', en: '/en/privacy/' },
  terms: { pt: '/termos/', en: '/en/terms/' },
};

export function alternateLocalePath(routeKey: keyof typeof routeMap, currentLocale: Locale): string {
  const target: Locale = currentLocale === 'pt' ? 'en' : 'pt';
  return routeMap[routeKey][target];
}
