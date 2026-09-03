import type { Dictionary } from './types';

/**
 * Conteúdo em português (idioma padrão). Baseado no conteúdo aprovado
 * durante a definição estratégica da CloudMe — ver histórico de decisões
 * no README para o racional de cada seção.
 */
export const pt: Dictionary = {
  landing: {
    meta: {
      title: 'CloudMe — por Rodolfo Rios | Consultoria em Inteligência Artificial',
      description:
        'A CloudMe ajuda pequenas e médias empresas brasileiras a identificar e implementar aplicações práticas de inteligência artificial, com atendimento direto de Rodolfo Rios.',
    },
    nav: {
      solutions: 'Soluções',
      howItWorks: 'Como funciona',
      about: 'Sobre',
      faq: 'Perguntas frequentes',
      cta: 'Agendar uma conversa',
      skipToContent: 'Pular para o conteúdo principal',
      langSwitchLabel: 'Alternar idioma',
    },
    hero: {
      eyebrow: 'Consultoria e soluções em inteligência artificial',
      title: 'Inteligência artificial aplicada a desafios reais.',
      description:
        'A CloudMe ajuda pequenas e médias empresas a identificar e implementar aplicações práticas de IA para otimizar processos, utilizar melhor suas informações e criar novas possibilidades para o negócio.',
      ctaPrimary: 'Agendar uma conversa',
      ctaSecondary: 'Explorar soluções',
      capabilities: [
        'Consultoria estratégica',
        'Agentes de IA',
        'Assistentes internos',
        'Inteligência documental',
      ],
    },
    problem: {
      title: 'Descubra onde a IA pode gerar valor para sua empresa.',
      intro:
        'Sua empresa não precisa adotar inteligência artificial apenas porque o mercado está falando sobre ela. Precisa encontrar aplicações que façam sentido para seus processos, suas informações e seus objetivos.',
      opportunitiesLabel: 'A CloudMe ajuda a avaliar oportunidades como:',
      opportunities: [
        'Automatizar tarefas manuais e repetitivas',
        'Agilizar o atendimento e a triagem de solicitações',
        'Consultar informações internas com mais facilidade',
        'Extrair e organizar dados presentes em documentos',
        'Criar agentes para apoiar atividades operacionais',
        'Definir uma estratégia responsável para adoção de IA',
      ],
      quote:
        'Nem todo problema precisa de inteligência artificial. Meu trabalho começa entendendo o desafio para identificar onde a tecnologia pode realmente gerar valor.',
      quoteAuthor: 'Rodolfo Rios',
    },
    explorer: {
      title: 'Qual desafio sua empresa enfrenta hoje?',
      disclaimer:
        'Essas são possibilidades iniciais. A solução adequada depende do contexto, dos dados e dos objetivos da sua empresa.',
      tabs: [
        {
          id: 'atendimento',
          label: 'Atendimento',
          description:
            'Automatize perguntas frequentes, faça a triagem inicial das solicitações e encaminhe cada situação para o atendimento adequado.',
        },
        {
          id: 'documentos',
          label: 'Documentos',
          description:
            'Extraia, classifique, organize, resuma e consulte informações presentes em documentos empresariais.',
        },
        {
          id: 'conhecimento-interno',
          label: 'Conhecimento interno',
          description:
            'Crie assistentes que ajudem sua equipe a encontrar respostas em políticas, manuais, procedimentos e outras fontes autorizadas.',
        },
        {
          id: 'processos-repetitivos',
          label: 'Processos repetitivos',
          description:
            'Utilize agentes de IA para apoiar fluxos operacionais que hoje exigem tarefas manuais e repetitivas.',
        },
        {
          id: 'estrategia-ia',
          label: 'Estratégia de IA',
          description:
            'Identifique oportunidades, avalie riscos e priorize iniciativas com base em impacto, complexidade e viabilidade.',
        },
      ],
    },
    services: {
      title: 'Da estratégia à implementação',
      items: [
        {
          title: 'Consultoria estratégica em IA',
          description:
            'Identificação e priorização de oportunidades alinhadas aos objetivos da sua empresa. Avaliamos processos, informações disponíveis, riscos, custos e viabilidade antes de recomendar uma solução.',
        },
        {
          title: 'Agentes de IA',
          description:
            'Agentes desenvolvidos para apoiar tarefas, conduzir fluxos e interagir com informações e ferramentas utilizadas pela empresa, mantendo controles e participação humana quando necessários.',
        },
        {
          title: 'Assistentes internos',
          description:
            'Soluções que ajudam sua equipe a consultar documentos, encontrar informações e acessar conhecimento interno por meio de uma experiência simples e conversacional.',
        },
        {
          title: 'Atendimento inteligente',
          description:
            'Automação de perguntas frequentes, triagem e suporte inicial, com possibilidade de integração ao atendimento humano.',
        },
        {
          title: 'Inteligência documental',
          description:
            'Extração, classificação, resumo, comparação e consulta de informações presentes em contratos, formulários, relatórios e outros documentos.',
        },
      ],
    },
    method: {
      title: 'Um caminho claro da oportunidade à solução',
      steps: [
        {
          number: '01',
          title: 'Entendimento',
          description:
            'Começamos pelo contexto, pelo processo atual e pelo resultado que sua empresa deseja alcançar.',
        },
        {
          number: '02',
          title: 'Diagnóstico',
          description:
            'Avaliamos oportunidades, dados disponíveis, integrações, riscos, custos e viabilidade técnica.',
        },
        {
          number: '03',
          title: 'Projeto-piloto',
          description:
            'Construímos uma solução controlada para validar o caso de uso antes de ampliar o investimento.',
        },
        {
          number: '04',
          title: 'Implementação',
          description:
            'Integramos a solução ao contexto da empresa, considerando segurança, acesso, operação e experiência dos usuários.',
        },
        {
          number: '05',
          title: 'Evolução',
          description:
            'Acompanhamos os resultados, identificamos limitações e aprimoramos a solução de forma progressiva.',
        },
      ],
    },
    responsibleAi: {
      title: 'Tecnologia com critério e responsabilidade',
      intro:
        'Uma aplicação de IA precisa ser mais do que tecnicamente interessante. Ela deve ser viável, útil e adequada ao contexto em que será utilizada. Por isso, cada projeto considera:',
      items: [
        'Privacidade e uso adequado das informações',
        'Segurança e controle de acesso',
        'Limitações e riscos da tecnologia',
        'Custos de implementação e operação',
        'Necessidade de supervisão humana',
        'Qualidade e rastreabilidade das respostas',
        'Impacto real sobre o processo',
      ],
    },
    why: {
      title: 'Experiência de engenharia aplicada à inteligência artificial',
      items: [
        {
          title: '16 anos de experiência',
          description:
            'Uma trajetória construída em desenvolvimento de software, cloud, bancos de dados e sistemas de alta complexidade.',
        },
        {
          title: 'Atendimento direto',
          description:
            'Você trabalha diretamente com Rodolfo Rios, da compreensão inicial do problema à evolução da solução.',
        },
        {
          title: 'Aplicação prática',
          description:
            'O projeto começa pelo desafio do negócio — não por uma ferramenta ou tecnologia previamente escolhida.',
        },
        {
          title: 'Projetos selecionados',
          description:
            'Um número limitado de projetos simultâneos permite acompanhamento próximo e envolvimento técnico direto.',
        },
        {
          title: 'Visão internacional',
          description:
            'Experiência remota em projetos complexos para o mercado dos Estados Unidos, nos setores financeiro e de tecnologia para turismo.',
        },
      ],
    },
    about: {
      title: 'Experiência por trás da tecnologia',
      paragraphs: [
        'Sou Rodolfo Rios, engenheiro de software com 16 anos de experiência em desenvolvimento, cloud e bancos de dados, com especialização no ecossistema .NET.',
        'Minha trajetória inclui atuação remota em sistemas de alta complexidade para o mercado norte-americano, incluindo projetos para uma das maiores instituições financeiras do mundo e para uma importante plataforma de tecnologia do setor de turismo.',
        'Criei esta nova fase da CloudMe para ajudar empresas brasileiras a explorar a inteligência artificial com clareza, responsabilidade e uma visão prática de engenharia.',
        'Cada projeto é conduzido diretamente por mim, desde o entendimento do desafio até a implementação e evolução da solução.',
      ],
      cta: 'Conhecer minha trajetória',
    },
    faq: {
      title: 'Perguntas frequentes',
      items: [
        {
          question: 'Minha empresa precisa saber exatamente o que deseja construir?',
          answer:
            'Não. A conversa pode começar por um problema, processo ou oportunidade. A CloudMe ajuda a avaliar se a inteligência artificial é adequada e qual caminho faz mais sentido.',
        },
        {
          question: 'A CloudMe atende algum segmento específico?',
          answer:
            'O atendimento não é limitado a um setor. O principal critério é existir um desafio compatível com a experiência e os serviços da CloudMe.',
        },
        {
          question: 'A CloudMe trabalha com pequenas empresas?',
          answer:
            'Sim. A CloudMe atende pequenas e médias empresas, adaptando o escopo à realidade, aos objetivos e à maturidade tecnológica de cada negócio.',
        },
        {
          question: 'É possível começar com um projeto pequeno?',
          answer:
            'Sim. Sempre que fizer sentido, podemos começar por um projeto-piloto para validar a solução antes de uma implementação mais ampla.',
        },
        {
          question: 'Todo projeto começa com um diagnóstico?',
          answer:
            'Todos começam com o entendimento do problema. Dependendo da complexidade, poderá ser recomendado um diagnóstico estruturado antes do projeto-piloto.',
        },
        {
          question: 'O atendimento é remoto?',
          answer: 'Sim. A CloudMe atende empresas de todo o Brasil de forma remota.',
        },
        {
          question: 'Quem conduzirá meu projeto?',
          answer:
            'Você trabalhará diretamente com Rodolfo Rios durante todas as etapas. A CloudMe mantém um número limitado de projetos simultâneos para preservar a proximidade e a qualidade do acompanhamento.',
        },
        {
          question: 'A conversa inicial é gratuita?',
          answer:
            'Sim. A conversa inicial serve para conhecer o cenário e avaliar se existe aderência entre o desafio e os serviços da CloudMe. Ela não substitui um diagnóstico técnico completo.',
        },
      ],
    },
    finalCta: {
      title: 'Descubra onde a IA pode gerar valor para sua empresa.',
      description:
        'Apresente seu cenário em uma conversa inicial e entenda como a CloudMe pode ajudar a transformar uma oportunidade em uma solução prática.',
      ctaPrimary: 'Agendar uma conversa',
      ctaWhatsapp: 'Falar pelo WhatsApp',
      note: 'Atendimento direto com Rodolfo Rios.',
    },
    scheduling: {
      pendingTitle: 'Agenda em configuração',
      pendingDescription:
        'O agendamento online via Calendly será disponibilizado em breve. Por enquanto, fale diretamente com Rodolfo por e-mail ou WhatsApp para combinar o melhor horário.',
      detailsLabel: 'Como funcionará a conversa inicial',
      eventDuration: 'Duração de 30 minutos, por Google Meet',
      eventLocation: 'Realizada por Google Meet',
      notice: 'Agendamento com 24h de antecedência',
      fallbackEmail: 'Enviar e-mail',
      fallbackWhatsapp: 'Chamar no WhatsApp',
    },
    footer: {
      tagline: 'Inteligência artificial aplicada a desafios reais.',
      linksTitle: 'Navegação',
      languagesTitle: 'Idiomas',
      legalTitle: 'Legal',
      contactTitle: 'Contato',
      resumeLink: 'Currículo interativo',
      privacyLink: 'Política de privacidade',
      termsLink: 'Termos de uso',
      rightsReserved: 'Todos os direitos reservados.',
    },
  },
  resume: {
    meta: {
      title: 'Rodolfo Rios — Currículo | CloudMe',
      description:
        'Currículo interativo de Rodolfo Rios, engenheiro de software com 16 anos de experiência em desenvolvimento, cloud, bancos de dados e aplicações de inteligência artificial.',
    },
    backToSite: 'Voltar para a CloudMe',
    eyebrow: 'Currículo interativo',
    name: 'Rodolfo Rios',
    role: 'Engenheiro de software · Fundador da CloudMe',
    summary: [
      'Engenheiro de software com 16 anos de experiência em desenvolvimento, cloud e bancos de dados, com maior especialidade no ecossistema .NET.',
      'Atuação remota em sistemas de alta complexidade para o mercado norte-americano, incluindo projetos para uma das maiores instituições financeiras do mundo e para uma importante plataforma de tecnologia do setor de turismo dos Estados Unidos.',
      'Atualmente conduz a CloudMe, ajudando pequenas e médias empresas brasileiras a adotar inteligência artificial com clareza, responsabilidade e visão prática de engenharia.',
    ],
    experienceTitle: 'Experiência',
    experienceIntro:
      'Por razões de confidencialidade contratual, nomes de clientes e empregadores específicos não são divulgados publicamente. A descrição abaixo reflete a natureza e a complexidade dos projetos conduzidos.',
    experience: [
      {
        title: 'Engenharia de software para instituição financeira global',
        description:
          'Atuação remota em sistemas corporativos de alta complexidade para uma das maiores instituições financeiras do mundo, com foco em desenvolvimento .NET, integrações e qualidade de software.',
      },
      {
        title: 'Engenharia de software para plataforma de tecnologia do setor de turismo (EUA)',
        description:
          'Participação em sistemas de grande escala para uma importante plataforma de tecnologia do setor de turismo dos Estados Unidos, com foco em cloud, bancos de dados e confiabilidade operacional.',
      },
      {
        title: 'Fundador — CloudMe',
        description:
          'Criação da nova fase da CloudMe, consultoria em inteligência artificial aplicada para pequenas e médias empresas brasileiras.',
      },
    ],
    skillsTitle: 'Competências',
    skills: [
      '.NET',
      'Engenharia de software',
      'Cloud',
      'Bancos de dados',
      'Sistemas corporativos',
      'Atuação internacional remota',
      'Aplicações de inteligência artificial',
    ],
    highlightsTitle: 'Destaques',
    highlights: [
      '16 anos de experiência em desenvolvimento de software',
      'Atuação remota para o mercado dos Estados Unidos',
      'Projetos em sistemas de alta complexidade nos setores financeiro e de tecnologia para turismo',
      'Fundador da CloudMe, consultoria em inteligência artificial aplicada',
    ],
    linkedinLabel: 'Ver perfil no LinkedIn',
    printLabel: 'Salvar como PDF',
    printNote:
      'Use o comando de impressão do navegador (Ctrl/Cmd + P) e escolha "Salvar como PDF" para gerar um PDF atualizado deste currículo.',
  },
  privacy: {
    meta: {
      title: 'Política de Privacidade | CloudMe',
      description: 'Política de privacidade da CloudMe — por Rodolfo Rios.',
    },
    title: 'Política de Privacidade',
    lastUpdatedLabel: 'Última atualização',
    intro:
      'Esta Política de Privacidade descreve como a CloudMe trata dados pessoais relacionados a este site institucional. Ela se aplica exclusivamente às interações realizadas por meio deste site e dos canais de contato aqui divulgados.',
    sections: [
      {
        heading: '1. Controlador e canais de contato',
        body: [
          'A controladora dos dados pessoais tratados por meio deste site é J R C RIOS CONSULTORIA E DESENVOLVIMENTO, CNPJ 31.084.823/0001-76, operando sob a marca CloudMe.',
          'Para qualquer dúvida sobre esta política ou sobre o tratamento de dados pessoais, utilize o canal contato@cloudme.com.br.',
        ],
      },
      {
        heading: '2. Quais dados podem ser coletados',
        body: [
          'Dados fornecidos voluntariamente por contato: nome, e-mail, telefone e o conteúdo da mensagem enviada por e-mail ou WhatsApp.',
          'Dados fornecidos ao agendar uma conversa por Calendly: nome, e-mail e informações que você optar por incluir no formulário de agendamento. O Calendly e o Google Meet possuem políticas de privacidade próprias, disponibilizadas por seus respectivos fornecedores.',
          'Dados técnicos essenciais de hospedagem: registros padrão de acesso ao servidor (como endereço IP, data e hora da requisição e navegador utilizado), coletados automaticamente pela infraestrutura de hospedagem para operação e segurança básica do site.',
          'Este site não utiliza formulário de contato próprio nesta versão, nem ferramentas de analytics ou publicidade comportamental.',
        ],
      },
      {
        heading: '3. Finalidades e bases legais',
        body: [
          'Os dados são tratados para responder a contatos comerciais, viabilizar o agendamento de conversas e garantir o funcionamento técnico e a segurança do site.',
          'As bases legais aplicáveis, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), incluem o legítimo interesse em responder a solicitações de contato e a execução de procedimentos preliminares a eventual contratação, quando aplicável.',
        ],
      },
      {
        heading: '4. Fornecedores e possível transferência internacional',
        body: [
          'Este site pode utilizar serviços de terceiros para hospedagem, agendamento (Calendly) e videoconferência (Google Meet). Esses fornecedores podem processar dados em servidores localizados fora do Brasil, observando suas próprias políticas de privacidade e mecanismos de conformidade.',
          'Recomendamos a leitura das políticas de privacidade desses fornecedores para mais detalhes sobre o tratamento realizado por eles.',
        ],
      },
      {
        heading: '5. Retenção e segurança',
        body: [
          'Os dados fornecidos por contato são mantidos apenas pelo tempo necessário para responder à solicitação e, quando aplicável, conduzir a relação comercial decorrente.',
          'Adotamos medidas razoáveis de segurança compatíveis com o porte e a natureza deste site para proteger os dados pessoais tratados, ainda que nenhum sistema seja absolutamente livre de risco.',
        ],
      },
      {
        heading: '6. Direitos dos titulares',
        body: [
          'Nos termos da legislação aplicável, você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade ou eliminação de dados pessoais, bem como informações sobre compartilhamento com terceiros.',
          'Solicitações podem ser enviadas para contato@cloudme.com.br e serão respondidas dentro de prazo razoável.',
        ],
      },
      {
        heading: '7. Não comercialização de dados',
        body: [
          'A CloudMe não vende, aluga ou comercializa dados pessoais coletados por meio deste site a terceiros.',
        ],
      },
      {
        heading: '8. Publicidade, rastreamento e analytics',
        body: [
          'Nesta versão do site não são utilizados Meta Pixel, ferramentas de publicidade comportamental ou serviços de analytics não essenciais.',
          'Caso essa política venha a mudar no futuro, esta Política de Privacidade será atualizada previamente.',
        ],
      },
      {
        heading: '9. Cookies e armazenamento local',
        body: [
          'Este site utiliza apenas armazenamento local essencial ao funcionamento, como a preferência de idioma (português/inglês) e ajustes de exibição relacionados à experiência do usuário. Não são utilizados cookies de rastreamento publicitário.',
        ],
      },
      {
        heading: '10. Alterações e revisão jurídica',
        body: [
          'Esta política pode ser atualizada para refletir mudanças no site ou na legislação aplicável. Recomenda-se que este conteúdo seja revisado por profissional jurídico habilitado antes de qualquer publicação definitiva, considerando as especificidades do negócio.',
        ],
      },
    ],
    backToSite: 'Voltar para a CloudMe',
  },
  terms: {
    meta: {
      title: 'Termos de Uso | CloudMe',
      description: 'Termos de uso do site institucional da CloudMe — por Rodolfo Rios.',
    },
    title: 'Termos de Uso',
    lastUpdatedLabel: 'Última atualização',
    intro:
      'Estes Termos de Uso regem o acesso e a utilização deste site institucional, operado por J R C RIOS CONSULTORIA E DESENVOLVIMENTO (CNPJ 31.084.823/0001-76), sob a marca CloudMe.',
    sections: [
      {
        heading: '1. Natureza informativa do site',
        body: [
          'O conteúdo deste site tem caráter informativo e institucional, apresentando os serviços de consultoria em inteligência artificial oferecidos pela CloudMe. Nenhum conteúdo aqui publicado constitui proposta comercial vinculante ou consultoria técnica automática.',
        ],
      },
      {
        heading: '2. Ausência de garantia de resultados',
        body: [
          'A adoção de inteligência artificial depende do contexto, dos dados e dos objetivos de cada empresa. A CloudMe não garante resultados específicos, financeiros ou operacionais, apenas com base no conteúdo deste site.',
          'Qualquer projeto real depende de diagnóstico, escopo e condições definidas em proposta e contrato específicos.',
        ],
      },
      {
        heading: '3. Necessidade de diagnóstico e contratação',
        body: [
          'As informações apresentadas neste site não substituem um diagnóstico técnico individualizado. A prestação efetiva de serviços depende de contratação formal, com escopo, prazos e condições definidos previamente entre as partes.',
        ],
      },
      {
        heading: '4. Propriedade intelectual',
        body: [
          'Os textos, elementos visuais, marca CloudMe e demais conteúdos deste site são de titularidade de J R C RIOS CONSULTORIA E DESENVOLVIMENTO ou utilizados sob autorização, sendo vedada a reprodução não autorizada para fins comerciais.',
        ],
      },
      {
        heading: '5. Links e serviços externos',
        body: [
          'Este site pode conter links para serviços de terceiros, como Calendly, Google Meet e WhatsApp. A CloudMe não se responsabiliza pelo conteúdo, disponibilidade ou práticas de privacidade desses serviços externos.',
        ],
      },
      {
        heading: '6. Disponibilidade do site',
        body: [
          'Envidamos esforços razoáveis para manter o site disponível e atualizado, mas não garantimos disponibilidade ininterrupta, podendo haver interrupções temporárias para manutenção ou por motivos fora de nosso controle.',
        ],
      },
      {
        heading: '7. Uso adequado dos canais de contato',
        body: [
          'Os canais de e-mail, WhatsApp e agendamento devem ser utilizados de forma adequada, para fins relacionados aos serviços da CloudMe, sendo vedado o uso para spam, ofensas ou finalidades ilícitas.',
        ],
      },
      {
        heading: '8. Legislação aplicável',
        body: [
          'Estes Termos são regidos pela legislação brasileira. Eventuais controvérsias decorrentes do uso deste site serão submetidas ao foro competente conforme a legislação aplicável.',
        ],
      },
      {
        heading: '9. Identificação da empresa',
        body: [
          'Razão social: J R C RIOS CONSULTORIA E DESENVOLVIMENTO. CNPJ: 31.084.823/0001-76. Marca: CloudMe. Contato: contato@cloudme.com.br.',
        ],
      },
      {
        heading: '10. Revisão jurídica',
        body: [
          'Este conteúdo foi redigido para refletir de forma proporcional as práticas de uma landing page institucional brasileira, mas não constitui aconselhamento jurídico. Recomenda-se revisão por profissional jurídico habilitado antes da publicação definitiva.',
        ],
      },
    ],
    backToSite: 'Voltar para a CloudMe',
  },
  notFound: {
    meta: {
      title: 'Página não encontrada | CloudMe',
    },
    title: 'Página não encontrada',
    description:
      'O endereço acessado não existe ou foi movido. Volte para a página inicial da CloudMe para continuar navegando.',
    cta: 'Voltar para a página inicial',
  },
};
