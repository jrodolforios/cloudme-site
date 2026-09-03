/**
 * Estrutura de conteúdo compartilhada entre os idiomas.
 *
 * Ao adicionar um novo texto, adicione a chave aqui primeiro e depois
 * preencha o valor correspondente em `pt.ts` e `en.ts`. Isso evita que um
 * idioma fique com conteúdo desatualizado em relação ao outro.
 */

export interface NavContent {
  solutions: string;
  howItWorks: string;
  about: string;
  faq: string;
  cta: string;
  skipToContent: string;
  langSwitchLabel: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  capabilities: string[];
}

export interface ProblemContent {
  title: string;
  intro: string;
  opportunitiesLabel: string;
  opportunities: string[];
  quote: string;
  quoteAuthor: string;
}

export interface ExplorerTab {
  id: string;
  label: string;
  description: string;
}

export interface ExplorerContent {
  title: string;
  disclaimer: string;
  tabs: ExplorerTab[];
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServicesContent {
  title: string;
  items: ServiceItem[];
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
}

export interface MethodContent {
  title: string;
  steps: MethodStep[];
}

export interface ResponsibleAiContent {
  title: string;
  intro: string;
  items: string[];
}

export interface WhyItem {
  title: string;
  description: string;
}

export interface WhyContent {
  title: string;
  items: WhyItem[];
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
  cta: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  title: string;
  items: FaqItem[];
}

export interface FinalCtaContent {
  title: string;
  description: string;
  ctaPrimary: string;
  ctaWhatsapp: string;
  note: string;
}

export interface SchedulingContent {
  pendingTitle: string;
  pendingDescription: string;
  detailsLabel: string;
  eventDuration: string;
  eventLocation: string;
  notice: string;
  fallbackEmail: string;
  fallbackWhatsapp: string;
}

export interface FooterContent {
  tagline: string;
  linksTitle: string;
  languagesTitle: string;
  legalTitle: string;
  contactTitle: string;
  resumeLink: string;
  privacyLink: string;
  termsLink: string;
  rightsReserved: string;
}

export interface LandingContent {
  meta: {
    title: string;
    description: string;
  };
  nav: NavContent;
  hero: HeroContent;
  problem: ProblemContent;
  explorer: ExplorerContent;
  services: ServicesContent;
  method: MethodContent;
  responsibleAi: ResponsibleAiContent;
  why: WhyContent;
  about: AboutContent;
  faq: FaqContent;
  finalCta: FinalCtaContent;
  scheduling: SchedulingContent;
  footer: FooterContent;
}

export interface ResumeExperienceItem {
  title: string;
  description: string;
}

export interface ResumeContent {
  meta: {
    title: string;
    description: string;
  };
  backToSite: string;
  eyebrow: string;
  name: string;
  role: string;
  summary: string[];
  experienceTitle: string;
  experienceIntro: string;
  experience: ResumeExperienceItem[];
  skillsTitle: string;
  skills: string[];
  highlightsTitle: string;
  highlights: string[];
  linkedinLabel: string;
  printLabel: string;
  printNote: string;
}

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalContent {
  meta: {
    title: string;
    description: string;
  };
  title: string;
  lastUpdatedLabel: string;
  intro: string;
  sections: LegalSection[];
  backToSite: string;
}

export interface NotFoundContent {
  meta: {
    title: string;
  };
  title: string;
  description: string;
  cta: string;
}

export interface Dictionary {
  landing: LandingContent;
  resume: ResumeContent;
  privacy: LegalContent;
  terms: LegalContent;
  notFound: NotFoundContent;
}
