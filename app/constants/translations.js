export const languageOptions = [
  {
    code: "pt-BR",
    label: "Português (Brasil)",
    shortLabel: "PT-BR",
    icon: "Flag",
    colorClass: "text-green-500",
  },
];

export const translations = {
  "pt-BR": {
    metadata: {
      title: "Pedro Fonseca | Full Stack Developer",
      description: "Portfólio de Pedro Fonseca - Desenvolvedor Full Stack",
    },
    general: {
      name: "Pedro Fonseca",
      viewProjects: "Ver Projetos",
      contactMe: "Entre em contato",
      viewJourney: "Ver Minha Jornada",
      contactArrow: "\u2192",
    },
    header: {
      aria: {
        themeToggle: "Alternar entre tema claro e escuro",
        languageSelector: "Selecionar idioma",
      },
      nav: {
        projects: "Projetos",
        journey: "Jornada",
        contact: "Contato",
      },
    },
    hero: {
      subtitle:
        "Desenvolvedor Full Stack apaixonado por tecnologia, ciência e inovação. Criando soluções elegantes e eficientes do backend à nuvem.",
    },
    wearYourStory: {
      description:
        "Desenvolvedor full stack com foco em alta performance, capaz de criar soluções que vão desde sistemas de baixo nível até aplicações modernas em nuvem. Uno experiência prática, rigor técnico e curiosidade científica para transformar ideias em produtos reais, escaláveis e bem estruturados. Atuo com profundidade em backend, automações, engenharia de software e computação experimental sempre buscando inovação, clareza e impacto em cada projeto.",
    },
    featureCarousel: {
      title: "Habilidades & Diferenciais",
      items: [
        {
          title: "Full Stack Expertise",
          description:
            "Domínio sólido em backend, frontend e arquiteturas distribuídas, entregando soluções completas de ponta a ponta.",
          icon: "Layers",
        },
        {
          title: "Baixo Nível & Alto Desempenho",
          description:
            "Experiência com C, JavaScript e otimização, criando sistemas performáticos e entendendo profundamente o funcionamento interno do software.",
          icon: "Settings",
        },
        {
          title: "Inovação Contínua",
          description:
            "Explora IA, computação quântica e biotecnologia, transformando curiosidade em projetos reais e experimentos técnicos.",
          icon: "Microscope",
        },
        {
          title: "Palestrante & Educador",
          description:
            "Palestras em SENAI, SENAC, ETEC e GDG, ensinando GitHub Actions, deploy, automações e boas práticas de desenvolvimento.",
          icon: "Presentation",
        },
        {
          title: "Projetos do Zero",
          description:
            "Criação de soluções completas do zero: jogos em C, APIs próprias, pipelines automatizados e sistemas experimentais.",
          icon: "Rocket",
        },
      ],
    },
    portfolio: {
      title: "Meus Projetos",
      subtitleSuffix: "repositórios públicos no GitHub",
      stats: {
        stars: "stars",
        forks: "forks",
      },
      loading: "Carregando projetos...",
      errorPrefix: "Erro ao carregar projetos",
      buttons: {
        previous: "Anterior",
        next: "Próxima",
      },
      labels: {
        created: "Criado:",
        updated: "Atualizado:",
        fallbackCategory: "Outros",
      },
      timeAgo: {
        prefix: "há",
        justNow: "agora mesmo",
        units: {
          year: { singular: "ano", plural: "anos" },
          month: { singular: "mês", plural: "meses" },
          week: { singular: "semana", plural: "semanas" },
          day: { singular: "dia", plural: "dias" },
          hour: { singular: "hora", plural: "horas" },
          minute: { singular: "minuto", plural: "minutos" },
        },
      },
      categories: [
        { value: "featured", label: "Destaques" },
        { value: "all", label: "Todos" },
        { value: "javascript", label: "JavaScript" },
        { value: "c", label: "C" },
        { value: "csharp", label: "C#" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
      ],
      languageCategoryMap: {
        JavaScript: "javascript",
        TypeScript: "javascript",
        C: "c",
        "C#": "csharp",
        Python: "python",
        "Jupyter Notebook": "python",
        Java: "java",
      },
      categoryLabels: {
        javascript: "JavaScript",
        c: "C",
        csharp: "C#",
        python: "Python",
        java: "Java",
        other: "Outros",
      },
    },
    timeline: {
      title: "Minha Jornada",
      subtitle: "A minha evolução ao longo dos anos",
      filters: [
        { value: "all", label: "Todos", icon: null },
        { value: "education", label: "Educação", icon: "GraduationCap" },
        { value: "career", label: "Carreira", icon: "Briefcase" },
        { value: "community", label: "Comunidade", icon: "Users" },
        { value: "talk", label: "Palestras", icon: "Mic" },
      ],
      events: [
        {
          year: 2020,
          title: "Início na Tecnologia e Automação",
          description:
            "Primeiros estudos formais em tecnologia e automação industrial.",
          details:
            "Pedro iniciou sua trajetória cursando Automação Industrial, desenvolvendo bases sólidas em lógica, eletrônica e sistemas embarcados.",
          type: "education",
        },
        {
          year: 2021,
          title: "Técnico em Desenvolvimento de Sistemas",
          description: "Início da jornada profissional como desenvolvedor.",
          details:
            "Durante o curso técnico, Pedro começou a trabalhar em projetos reais, adquirindo experiência prática em programação web e sistemas.",
          type: "education",
        },
        {
          year: 2021,
          title: "Participação em Grandes Eventos",
          description: "Presença ativa na comunidade de tecnologia.",
          details:
            "Participou de eventos como Campus Party, TDC e encontros GDG, expandindo networking e acompanhando tendências de IA e engenharia.",
          type: "community",
        },
        {
          year: 2023,
          title: "Primeiras Experiências Profissionais",
          description: "Atuação crescente como desenvolvedor fullstack.",
          details:
            "Pedro passou a trabalhar em projetos reais, com foco em backend, APIs, bancos de dados e linguagens de baixo nível.",
          type: "career",
        },
        {
          year: 2023,
          title: "Google Cloud Academy",
          description:
            "Formação em computação em nuvem e infraestrutura distribuída.",
          details:
            "Pedro concluiu a formação oficial em Google Cloud, aprofundando-se em infraestrutura, deploy, pipelines e arquitetura distribuída.",
          type: "education",
        },
        {
          year: 2022,
          title: "Início da Ciência da Computação",
          description:
            "Avanço na formação acadêmica com foco científico e prático.",
          details:
            "Pedro ingressou no SENAC, desenvolvendo projetos como um jogo educativo em C e uma API inteira em C.",
          type: "education",
        },
        {
          year: 2024,
          title: "Palestra no SENAI",
          description: "Apresentação sobre automações e GitHub Actions.",
          details:
            "Pedro apresentou automações de CI/CD e pipelines, mostrando como estudantes podem implementar deploy profissional.",
          type: "talk",
        },
        {
          year: 2024,
          title: "Avaliador de TCC",
          description:
            "Contribuição direta na formação de novos profissionais.",
          details:
            "Atuou avaliando projetos de TCC, orientando boas práticas de desenvolvimento e arquitetura.",
          type: "career",
        },
        {
          year: 2025,
          title: "Palestra de Abertura na Etec de Embu",
          description:
            "Abertura do evento anual de Desenvolvimento de Sistemas.",
          details:
            "Palestra sobre projetos, GitHub Actions e a importância do portfólio real na carreira de tecnologia.",
          type: "talk",
        },
        {
          year: 2025,
          title: "Desenvolvedor Full Stack no Grupo Raotes",
          description:
            "Atuação profissional com foco em backend, cloud e sistemas distribuídos.",
          details:
            "Atua com backend, bancos de dados, APIs, deploy em nuvem e sistemas de alta disponibilidade.",
          type: "career",
        },
      ],
    },
    footer: {
      nav: {
        about: "Sobre",
        projects: "Projetos",
        journey: "Jornada",
        contact: "Contato",
      },
      credit: "Desenvolvido por Pedro Fonseca",
    },
    services: {
      title: "Nossos Serviços",
      items: [
        {
          title: "UI/UX Design",
          description:
            "Criação de interfaces intuitivas e impactantes que encantam usuários.",
          icon: "Paintbrush",
          colorClass: "text-blue-500",
        },
        {
          title: "Desenvolvimento Web",
          description:
            "Construção de aplicações robustas, escaláveis e de alta performance.",
          icon: "Code",
          colorClass: "text-green-500",
        },
        {
          title: "Marketing Digital",
          description:
            "Estratégias que amplificam visibilidade, gerando conexões reais com o público.",
          icon: "Megaphone",
          colorClass: "text-yellow-500",
        },
        {
          title: "Desenvolvimento Mobile",
          description:
            "Criação de experiências inovadoras para dispositivos iOS e Android.",
          icon: "Smartphone",
          colorClass: "text-purple-500",
        },
      ],
    },
  },
};
