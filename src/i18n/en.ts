import type { Dictionary } from './types';

/**
 * English content — a natural adaptation of the Portuguese copy, not a
 * literal translation. Tone, structure and claims stay consistent with the
 * approved Portuguese version; wording is adjusted for an English-speaking
 * audience.
 */
export const en: Dictionary = {
  landing: {
    meta: {
      title: 'CloudMe — by Rodolfo Rios | Artificial Intelligence Consulting',
      description:
        'CloudMe helps small and medium-sized Brazilian businesses identify and implement practical AI applications, with Rodolfo Rios working directly on every project.',
    },
    nav: {
      solutions: 'Solutions',
      howItWorks: 'How it works',
      about: 'About',
      faq: 'FAQ',
      cta: 'Book a conversation',
      skipToContent: 'Skip to main content',
      langSwitchLabel: 'Switch language',
    },
    hero: {
      eyebrow: 'Artificial intelligence consulting and solutions',
      title: 'Artificial intelligence applied to real challenges.',
      description:
        'CloudMe helps small and medium-sized businesses identify and implement practical AI applications to streamline processes, make better use of information, and open new possibilities for the business.',
      ctaPrimary: 'Book a conversation',
      ctaSecondary: 'Explore solutions',
      capabilities: [
        'Strategic consulting',
        'AI agents',
        'Internal assistants',
        'Document intelligence',
      ],
    },
    problem: {
      title: 'Find out where AI can create value for your company.',
      intro:
        "Your company doesn't need to adopt artificial intelligence just because everyone is talking about it. What matters is finding applications that make sense for your processes, your information, and your goals.",
      opportunitiesLabel: 'CloudMe helps you evaluate opportunities such as:',
      opportunities: [
        'Automating manual, repetitive tasks',
        'Speeding up support and request triage',
        'Making internal information easier to find',
        'Extracting and organizing data from documents',
        'Building agents to support operational activities',
        'Defining a responsible strategy for AI adoption',
      ],
      quote:
        "Not every problem needs artificial intelligence. My work starts by understanding the challenge, so we can find where technology can actually create value.",
      quoteAuthor: 'Rodolfo Rios',
    },
    explorer: {
      title: 'What challenge is your company facing today?',
      disclaimer:
        'These are starting points, not diagnoses. The right solution depends on your context, your data, and your goals.',
      tabs: [
        {
          id: 'support',
          label: 'Customer support',
          description:
            'Automate frequently asked questions, triage incoming requests, and route each case to the right point of contact.',
        },
        {
          id: 'documents',
          label: 'Documents',
          description:
            'Extract, classify, organize, summarize, and query information contained in business documents.',
        },
        {
          id: 'internal-knowledge',
          label: 'Internal knowledge',
          description:
            'Build assistants that help your team find answers in policies, manuals, procedures, and other authorized sources.',
        },
        {
          id: 'repetitive-processes',
          label: 'Repetitive processes',
          description:
            'Use AI agents to support operational workflows that today rely on manual, repetitive work.',
        },
        {
          id: 'ai-strategy',
          label: 'AI strategy',
          description:
            'Identify opportunities, assess risks, and prioritize initiatives based on impact, complexity, and feasibility.',
        },
      ],
    },
    services: {
      title: 'From strategy to implementation',
      items: [
        {
          title: 'Strategic AI consulting',
          description:
            "Identifying and prioritizing opportunities aligned with your company's goals. We assess processes, available information, risks, costs, and feasibility before recommending a solution.",
        },
        {
          title: 'AI agents',
          description:
            "Agents built to support tasks, run workflows, and interact with your company's information and tools, keeping human oversight and controls where needed.",
        },
        {
          title: 'Internal assistants',
          description:
            'Solutions that help your team query documents, find information, and access internal knowledge through a simple, conversational experience.',
        },
        {
          title: 'Intelligent customer support',
          description:
            'Automation of frequently asked questions, triage, and initial support, with the option to integrate with human support.',
        },
        {
          title: 'Document intelligence',
          description:
            'Extraction, classification, summarization, comparison, and querying of information found in contracts, forms, reports, and other documents.',
        },
      ],
    },
    method: {
      title: 'A clear path from opportunity to solution',
      steps: [
        {
          number: '01',
          title: 'Understanding',
          description:
            'We start with your context, your current process, and the outcome your company wants to achieve.',
        },
        {
          number: '02',
          title: 'Diagnosis',
          description:
            'We assess opportunities, available data, integrations, risks, costs, and technical feasibility.',
        },
        {
          number: '03',
          title: 'Pilot project',
          description:
            'We build a controlled solution to validate the use case before scaling up the investment.',
        },
        {
          number: '04',
          title: 'Implementation',
          description:
            "We integrate the solution into the company's context, considering security, access, operations, and user experience.",
        },
        {
          number: '05',
          title: 'Evolution',
          description:
            'We monitor results, identify limitations, and improve the solution progressively.',
        },
      ],
    },
    responsibleAi: {
      title: 'Technology with judgment and responsibility',
      intro:
        'An AI application needs to be more than technically interesting — it has to be feasible, useful, and appropriate for the context where it will be used. That is why every project considers:',
      items: [
        'Privacy and appropriate use of information',
        'Security and access control',
        "The technology's limitations and risks",
        'Implementation and operating costs',
        'The need for human oversight',
        'Quality and traceability of responses',
        'Real impact on the process',
      ],
    },
    why: {
      title: 'Engineering experience applied to artificial intelligence',
      items: [
        {
          title: '16 years of experience',
          description:
            'A career built in software development, cloud, databases, and highly complex systems.',
        },
        {
          title: 'Direct engagement',
          description:
            'You work directly with Rodolfo Rios, from understanding the problem to evolving the solution.',
        },
        {
          title: 'Practical application',
          description:
            "Every project starts from the business challenge — not from a tool or technology chosen in advance.",
        },
        {
          title: 'Selected projects',
          description:
            'A limited number of simultaneous projects allows for close follow-up and direct technical involvement.',
        },
        {
          title: 'International perspective',
          description:
            'Remote experience on complex projects for the U.S. market, in the financial and travel-technology sectors.',
        },
      ],
    },
    about: {
      title: 'The experience behind the technology',
      paragraphs: [
        "I'm Rodolfo Rios, a software engineer with 16 years of experience in development, cloud, and databases, with deep specialization in the .NET ecosystem.",
        'My career includes remote work on highly complex systems for the U.S. market, including projects for one of the largest financial institutions in the world and for a major technology platform in the travel industry.',
        'I created this new phase of CloudMe to help Brazilian companies explore artificial intelligence with clarity, responsibility, and a practical engineering mindset.',
        'Every project is led directly by me, from understanding the challenge to implementing and evolving the solution.',
      ],
      cta: 'See my full background',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          question: 'Does my company need to know exactly what to build?',
          answer:
            "No. The conversation can start from a problem, a process, or an opportunity. CloudMe helps you assess whether AI is a good fit and which path makes the most sense.",
        },
        {
          question: 'Does CloudMe focus on a specific industry?',
          answer:
            "Support isn't limited to one industry. The main requirement is having a challenge that fits CloudMe's experience and services.",
        },
        {
          question: 'Does CloudMe work with small businesses?',
          answer:
            "Yes. CloudMe works with small and medium-sized businesses, adapting the scope to each company's reality, goals, and technology maturity.",
        },
        {
          question: 'Can we start with a small project?',
          answer:
            'Yes. Whenever it makes sense, we can start with a pilot project to validate the solution before a broader implementation.',
        },
        {
          question: 'Does every project start with a diagnosis?',
          answer:
            'Every project starts with understanding the problem. Depending on complexity, a structured diagnosis may be recommended before the pilot project.',
        },
        {
          question: 'Is the engagement remote?',
          answer: 'Yes. CloudMe works remotely with companies across all of Brazil.',
        },
        {
          question: 'Who will run my project?',
          answer:
            "You'll work directly with Rodolfo Rios throughout every stage. CloudMe keeps a limited number of simultaneous projects to preserve closeness and quality of follow-up.",
        },
        {
          question: 'Is the initial conversation free?',
          answer:
            "Yes. The initial conversation is meant to understand your scenario and assess whether there's a fit between your challenge and CloudMe's services. It doesn't replace a full technical diagnosis.",
        },
      ],
    },
    finalCta: {
      title: 'Find out where AI can create value for your company.',
      description:
        'Share your scenario in an initial conversation and see how CloudMe can help turn an opportunity into a practical solution.',
      ctaPrimary: 'Book a conversation',
      ctaWhatsapp: 'Talk on WhatsApp',
      note: 'Direct engagement with Rodolfo Rios.',
    },
    scheduling: {
      pendingTitle: 'Scheduling is being set up',
      pendingDescription:
        "Online scheduling via Calendly will be available soon. In the meantime, reach out to Rodolfo directly by email or WhatsApp to find the best time.",
      detailsLabel: 'How the initial conversation works',
      eventDuration: '30 minutes, over Google Meet',
      eventLocation: 'Hosted on Google Meet',
      notice: 'Booked at least 24 hours in advance',
      fallbackEmail: 'Send an email',
      fallbackWhatsapp: 'Message on WhatsApp',
    },
    footer: {
      tagline: 'Artificial intelligence applied to real challenges.',
      linksTitle: 'Navigation',
      languagesTitle: 'Languages',
      legalTitle: 'Legal',
      contactTitle: 'Contact',
      resumeLink: 'Interactive résumé',
      privacyLink: 'Privacy policy',
      termsLink: 'Terms of use',
      rightsReserved: 'All rights reserved.',
    },
  },
  resume: {
    meta: {
      title: 'Rodolfo Rios — Résumé | CloudMe',
      description:
        'Interactive résumé of Rodolfo Rios, a software engineer with 16 years of experience in development, cloud, databases, and applied artificial intelligence.',
    },
    backToSite: 'Back to CloudMe',
    eyebrow: 'Interactive résumé',
    name: 'Rodolfo Rios',
    role: 'Software Engineer · Founder of CloudMe',
    summary: [
      'Software engineer with 16 years of experience in development, cloud, and databases, with deep specialization in the .NET ecosystem.',
      'Remote work on highly complex systems for the U.S. market, including projects for one of the largest financial institutions in the world and for a major U.S. travel-technology platform.',
      'Currently leads CloudMe, helping small and medium-sized Brazilian businesses adopt artificial intelligence with clarity, responsibility, and a practical engineering mindset.',
    ],
    experienceTitle: 'Experience',
    experienceIntro:
      'For contractual confidentiality reasons, specific client and employer names are not disclosed publicly. The description below reflects the nature and complexity of the projects carried out.',
    experience: [
      {
        title: 'Software engineering for a global financial institution',
        description:
          'Remote work on highly complex enterprise systems for one of the largest financial institutions in the world, focused on .NET development, integrations, and software quality.',
      },
      {
        title: 'Software engineering for a U.S. travel-technology platform',
        description:
          'Contributed to large-scale systems for a major U.S. travel-technology platform, focused on cloud, databases, and operational reliability.',
      },
      {
        title: 'Founder — CloudMe',
        description:
          "Created CloudMe's new phase, applied artificial intelligence consulting for small and medium-sized Brazilian businesses.",
      },
    ],
    skillsTitle: 'Skills',
    skills: [
      '.NET',
      'Software engineering',
      'Cloud',
      'Databases',
      'Enterprise systems',
      'Remote international work',
      'Artificial intelligence applications',
    ],
    highlightsTitle: 'Highlights',
    highlights: [
      '16 years of software development experience',
      'Remote work for the U.S. market',
      'Projects on highly complex systems in the financial and travel-technology sectors',
      'Founder of CloudMe, applied artificial intelligence consulting',
    ],
    linkedinLabel: 'View LinkedIn profile',
    printLabel: 'Save as PDF',
    printNote:
      'Use your browser\'s print command (Ctrl/Cmd + P) and choose "Save as PDF" to generate an up-to-date PDF of this résumé.',
  },
  privacy: {
    meta: {
      title: 'Privacy Policy | CloudMe',
      description: 'CloudMe privacy policy — by Rodolfo Rios.',
    },
    title: 'Privacy Policy',
    lastUpdatedLabel: 'Last updated',
    intro:
      'This Privacy Policy describes how CloudMe handles personal data related to this institutional website. It applies exclusively to interactions carried out through this site and the contact channels published here.',
    sections: [
      {
        heading: '1. Data controller and contact channels',
        body: [
          'The controller of personal data processed through this site is J R C RIOS CONSULTORIA E DESENVOLVIMENTO, Brazilian company registry (CNPJ) 31.084.823/0001-76, operating under the CloudMe brand.',
          'For any question about this policy or about the processing of personal data, use contato@cloudme.com.br.',
        ],
      },
      {
        heading: '2. What data may be collected',
        body: [
          'Data voluntarily provided through contact: name, email, phone number, and the content of messages sent by email or WhatsApp.',
          'Data provided when booking a conversation through Calendly: name, email, and any information you choose to include in the scheduling form. Calendly and Google Meet have their own privacy policies, provided by their respective vendors.',
          'Essential technical hosting data: standard server access logs (such as IP address, request date and time, and browser used), collected automatically by the hosting infrastructure for basic operation and security of the site.',
          'This site does not use its own contact form in this version, nor analytics or behavioral advertising tools.',
        ],
      },
      {
        heading: '3. Purposes and legal bases',
        body: [
          'Data is processed to respond to business inquiries, enable the scheduling of conversations, and ensure the technical operation and security of the site.',
          "The applicable legal bases, under Brazil's General Data Protection Law (LGPD, Law No. 13,709/2018), include legitimate interest in responding to contact requests and preliminary steps toward a potential engagement, where applicable.",
        ],
      },
      {
        heading: '4. Vendors and possible international transfer',
        body: [
          'This site may use third-party services for hosting, scheduling (Calendly), and video conferencing (Google Meet). These vendors may process data on servers located outside Brazil, subject to their own privacy policies and compliance mechanisms.',
          'We recommend reviewing these vendors\' privacy policies for more details on how they process data.',
        ],
      },
      {
        heading: '5. Retention and security',
        body: [
          'Data provided through contact is kept only for as long as necessary to respond to the request and, where applicable, to carry on any resulting business relationship.',
          'We adopt reasonable security measures appropriate to the size and nature of this site to protect the personal data processed, although no system is entirely free of risk.',
        ],
      },
      {
        heading: '6. Data subject rights',
        body: [
          'Under applicable law, you may request confirmation of processing, access, correction, anonymization, portability, or deletion of personal data, as well as information about sharing with third parties.',
          'Requests can be sent to contato@cloudme.com.br and will be answered within a reasonable time.',
        ],
      },
      {
        heading: '7. No sale of data',
        body: [
          'CloudMe does not sell, rent, or trade personal data collected through this site to third parties.',
        ],
      },
      {
        heading: '8. Advertising, tracking, and analytics',
        body: [
          'This version of the site does not use Meta Pixel, behavioral advertising tools, or non-essential analytics services.',
          'Should this change in the future, this Privacy Policy will be updated in advance.',
        ],
      },
      {
        heading: '9. Cookies and local storage',
        body: [
          'This site uses only local storage that is essential to its operation, such as language preference (Portuguese/English) and display settings related to user experience. No advertising tracking cookies are used.',
        ],
      },
      {
        heading: '10. Changes and legal review',
        body: [
          'This policy may be updated to reflect changes to the site or to applicable law. This content should be reviewed by qualified legal counsel before any final publication, considering the specifics of the business.',
        ],
      },
    ],
    backToSite: 'Back to CloudMe',
  },
  terms: {
    meta: {
      title: 'Terms of Use | CloudMe',
      description: "Terms of use for CloudMe's institutional website — by Rodolfo Rios.",
    },
    title: 'Terms of Use',
    lastUpdatedLabel: 'Last updated',
    intro:
      'These Terms of Use govern access to and use of this institutional website, operated by J R C RIOS CONSULTORIA E DESENVOLVIMENTO (CNPJ 31.084.823/0001-76), under the CloudMe brand.',
    sections: [
      {
        heading: '1. Informational nature of the site',
        body: [
          "This site's content is informational and institutional, presenting the AI consulting services offered by CloudMe. Nothing published here constitutes a binding commercial offer or an automatic technical assessment.",
        ],
      },
      {
        heading: '2. No guarantee of results',
        body: [
          "Adopting artificial intelligence depends on each company's context, data, and goals. CloudMe does not guarantee specific financial or operational results based solely on this site's content.",
          'Any real project depends on diagnosis, scope, and conditions defined in a specific proposal and contract.',
        ],
      },
      {
        heading: '3. Need for diagnosis and engagement',
        body: [
          'The information presented on this site does not replace an individualized technical diagnosis. Actual service delivery depends on a formal engagement, with scope, timelines, and conditions agreed upon in advance between the parties.',
        ],
      },
      {
        heading: '4. Intellectual property',
        body: [
          'The text, visual elements, the CloudMe brand, and other content on this site are owned by J R C RIOS CONSULTORIA E DESENVOLVIMENTO or used under authorization; unauthorized reproduction for commercial purposes is prohibited.',
        ],
      },
      {
        heading: '5. External links and services',
        body: [
          'This site may contain links to third-party services, such as Calendly, Google Meet, and WhatsApp. CloudMe is not responsible for the content, availability, or privacy practices of these external services.',
        ],
      },
      {
        heading: '6. Site availability',
        body: [
          'We make reasonable efforts to keep the site available and up to date, but we do not guarantee uninterrupted availability; temporary interruptions may occur for maintenance or reasons beyond our control.',
        ],
      },
      {
        heading: '7. Appropriate use of contact channels',
        body: [
          'Email, WhatsApp, and scheduling channels must be used appropriately, for purposes related to CloudMe services; use for spam, abuse, or unlawful purposes is prohibited.',
        ],
      },
      {
        heading: '8. Governing law',
        body: [
          'These Terms are governed by Brazilian law. Any disputes arising from the use of this site will be submitted to the competent jurisdiction under applicable law.',
        ],
      },
      {
        heading: '9. Company identification',
        body: [
          'Legal name: J R C RIOS CONSULTORIA E DESENVOLVIMENTO. CNPJ: 31.084.823/0001-76. Brand: CloudMe. Contact: contato@cloudme.com.br.',
        ],
      },
      {
        heading: '10. Legal review',
        body: [
          "This content was written to proportionally reflect the practices of a Brazilian institutional landing page, but it does not constitute legal advice. Review by qualified legal counsel is recommended before final publication.",
        ],
      },
    ],
    backToSite: 'Back to CloudMe',
  },
  notFound: {
    meta: {
      title: 'Page not found | CloudMe',
    },
    title: 'Page not found',
    description:
      "The page you're looking for doesn't exist or has moved. Head back to CloudMe's homepage to keep exploring.",
    cta: 'Back to homepage',
  },
};
