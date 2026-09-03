import { describe, expect, it } from 'vitest';
import { routeMap, alternateLocalePath, getDictionary } from '@/i18n';

describe('routeMap', () => {
  it('has a pt and en path for every route key', () => {
    Object.values(routeMap).forEach((entry) => {
      expect(entry.pt.startsWith('/')).toBe(true);
      expect(entry.en.startsWith('/en')).toBe(true);
    });
  });

  it('resolves the alternate locale path for a given route', () => {
    expect(alternateLocalePath('home', 'pt')).toBe('/en/');
    expect(alternateLocalePath('home', 'en')).toBe('/');
    expect(alternateLocalePath('resume', 'pt')).toBe('/en/rodolfo/');
    expect(alternateLocalePath('resume', 'en')).toBe('/rodolfo/');
  });
});

describe('dictionary parity between locales', () => {
  const pt = getDictionary('pt');
  const en = getDictionary('en');

  it('has the same number of FAQ items in both languages', () => {
    expect(pt.landing.faq.items.length).toBe(en.landing.faq.items.length);
  });

  it('has the same number of explorer tabs in both languages', () => {
    expect(pt.landing.explorer.tabs.length).toBe(en.landing.explorer.tabs.length);
  });

  it('has the same number of method steps in both languages', () => {
    expect(pt.landing.method.steps.length).toBe(en.landing.method.steps.length);
  });

  it('has the same number of services in both languages', () => {
    expect(pt.landing.services.items.length).toBe(en.landing.services.items.length);
  });

  it('has the same number of legal sections for privacy and terms', () => {
    expect(pt.privacy.sections.length).toBe(en.privacy.sections.length);
    expect(pt.terms.sections.length).toBe(en.terms.sections.length);
  });

  it('keeps the same resume experience entry count', () => {
    expect(pt.resume.experience.length).toBe(en.resume.experience.length);
  });
});
