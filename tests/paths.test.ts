import { describe, expect, it } from 'vitest';
import { withBase } from '@/lib/paths';
import { routeMap } from '@/i18n';
import { basePath } from '@/config/site';

describe('withBase', () => {
  it('prefixes absolute paths with the GitHub Pages base', () => {
    expect(withBase('/rodolfo/', '/cloudme-site/')).toBe('/cloudme-site/rodolfo/');
    expect(withBase('/favicon.svg', '/cloudme-site')).toBe('/cloudme-site/favicon.svg');
  });

  it('uses the configured base path by default', () => {
    expect(withBase('/en/')).toBe(`${basePath}/en/`);
  });

  it('keeps paths unchanged when the site is served from the root', () => {
    expect(withBase('/en/', '/')).toBe('/en/');
    expect(withBase('/brand/symbol.svg', '/')).toBe('/brand/symbol.svg');
  });

  it('normalises paths without a leading slash', () => {
    expect(withBase('en/', '/cloudme-site/')).toBe('/cloudme-site/en/');
  });

  it('never produces duplicated slashes for the registered routes', () => {
    Object.values(routeMap).forEach((entry) => {
      expect(withBase(entry.pt, '/cloudme-site/')).not.toContain('//');
      expect(withBase(entry.en, '/cloudme-site/')).not.toContain('//');
    });
  });
});
