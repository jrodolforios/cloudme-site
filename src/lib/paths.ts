import { basePath } from '@/config/site';

/**
 * Utilitário de caminhos sensível ao `base` do Astro.
 *
 * O site é publicado no GitHub Pages sob o prefixo `/cloudme-site/`, então
 * qualquer caminho absoluto (links internos, imagens, favicon) precisa desse
 * prefixo. Com `basePath` vazio o resultado é idêntico ao caminho original,
 * o que mantém o funcionamento em um domínio próprio na raiz.
 */
export function withBase(path: string, base: string = basePath): string {
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
}
