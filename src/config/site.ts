/**
 * Configuração institucional central da CloudMe.
 *
 * Este é o único lugar onde dados de contato, integrações e informações
 * legais devem ser mantidos. Nenhum outro componente ou página deve
 * duplicar esses valores — sempre importe a partir deste arquivo.
 *
 * Para atualizar telefone, e-mails, link do Calendly ou dados legais,
 * edite apenas os valores abaixo.
 */

export const brand = {
  name: 'CloudMe',
  signature: 'por Rodolfo Rios',
  tagline: {
    pt: 'Inteligência artificial aplicada a desafios reais.',
    en: 'Artificial intelligence applied to real challenges.',
  },
} as const;

export const contact = {
  /** E-mail comercial, usado nos CTAs de contato direto. */
  commercialEmail: 'rodolfo.rios@cloudme.com.br',
  /** E-mail geral/institucional, usado para privacidade e assuntos gerais. */
  generalEmail: 'contato@cloudme.com.br',
  /** Número de WhatsApp em formato E.164, sem espaços. */
  whatsappNumber: '+5533987393751',
  /** Mesmo número formatado para exibição. */
  whatsappDisplay: '+55 33 98739-3751',
} as const;

/**
 * Mensagens pré-preenchidas usadas no link `wa.me`. Mantidas centralizadas
 * para que qualquer alteração de tom não exija mexer nos componentes.
 */
export const whatsappMessages = {
  pt: 'Olá, Rodolfo! Conheci a CloudMe pelo site e gostaria de conversar sobre uma possível aplicação de inteligência artificial na minha empresa.',
  en: "Hi Rodolfo! I found CloudMe through the website and I'd like to talk about a possible AI application for my company.",
} as const;

export function buildWhatsappLink(locale: 'pt' | 'en'): string {
  const digits = contact.whatsappNumber.replace(/[^\d]/g, '');
  const message = encodeURIComponent(whatsappMessages[locale]);
  return `https://wa.me/${digits}?text=${message}`;
}

/**
 * Integração de agendamento (Calendly + Google Meet).
 *
 * A URL pública do evento Calendly ainda NÃO existe. `eventUrl` permanece
 * `null` de propósito até que o proprietário do site crie o evento e
 * substitua este valor por uma URL real (ex.: "https://calendly.com/cloudme/conversa-inicial").
 *
 * Enquanto `eventUrl` for `null`, os componentes de agendamento devem
 * exibir um estado alternativo elegante (CTA por e-mail/WhatsApp) em vez
 * de um link quebrado ou inventado.
 *
 * As regras abaixo (duração, antecedência, intervalo, limite diário) são
 * configuradas diretamente no Calendly — este arquivo apenas as documenta
 * para exibição informativa no site, o site não as controla.
 */
export const scheduling = {
  eventUrl: null as string | null,
  eventName: {
    pt: 'Conversa inicial com a CloudMe',
    en: 'Initial conversation with CloudMe',
  },
  durationMinutes: 30,
  location: 'Google Meet',
  noticeHours: 24,
  bufferMinutes: 15,
  maxPerDay: 3,
} as const;

/**
 * Dados institucionais/legais. Usados nas páginas de Termos e Privacidade
 * e no rodapé.
 */
export const legal = {
  companyName: 'J R C RIOS CONSULTORIA E DESENVOLVIMENTO',
  cnpj: '31.084.823/0001-76',
  privacyChannel: 'contato@cloudme.com.br',
  /** Não publicar cidade, região ou endereço residencial. */
  country: 'Brasil',
} as const;

export const social = {
  linkedin: 'https://www.linkedin.com/in/jose-rodolfo-campos-rios-168920a3/',
} as const;

/**
 * Prefixo de implantação do site.
 *
 * O domínio personalizado publica o site na raiz, portanto os caminhos
 * absolutos não devem receber um prefixo de repositório.
 */
export const basePath = '';

/** Origem pública usada para URLs canônicas, sitemap e Open Graph. */
export const siteOrigin = 'https://www.cloudme.com.br';

export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt';
