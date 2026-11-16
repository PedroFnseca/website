export const languageOptions = [
  {
    code: "pt-BR",
    label: "Português (Brasil)",
    shortLabel: "PT-BR",
    icon: "Flag",
    colorClass: "text-green-500",
  },
  {
    code: "en-US",
    label: "English (US)",
    shortLabel: "EN",
    icon: "Flag",
    colorClass: "text-blue-500",
  },
  {
    code: "es-ES",
    label: "Español",
    shortLabel: "ES",
    icon: "Flag",
    colorClass: "text-red-500",
  },
];

export const translations = {
  "pt-BR": {
    metadata: {
      title: "Pedro Fonseca | Desenvolvedor Full Stack",
      description:
        "Portfólio de Pedro Fonseca — Desenvolvedor Full Stack especializado em Mobile, Web, Backend, Banco de Dados, Nuvem e Performance.",
    },
    general: {
      name: "Pedro Fonseca",
      role: "Desenvolvedor Full Stack",
      viewProjects: "Ver Projetos",
      contactMe: "Entrar em contato",
    },
    header: {
      aria: {
        themeToggle: "Alternar entre tema claro e escuro",
        languageSelector: "Selecionar idioma",
      },
      nav: {
        projects: "Projetos",
        experience: "Experiência",
        about: "Sobre",
        contact: "Contato",
      },
    },
    hero: {
      badge: "Mobile · Web · Backend · Banco · Nuvem",
      headline:
        "Desenvolvedor Full Stack — Mobile, Web, Backend, Banco de Dados e Nuvem.",
      subtitle:
        "Desenvolvo aplicações completas com foco em estabilidade e performance: interfaces web e mobile, APIs escaláveis, modelagem de bancos de dados e infraestrutura. Nas horas livres, mantenho projetos open source e exploro IoT e desenvolvimento em C/C++ para sistemas embarcados como hobby.",
      viewProjects: "Ver projetos",
      viewGithub: "GitHub",
    },
    esp32Showcase: {
      eyebrow: "Projeto Open Source · Hobby em C++",
      title: "ESP32 HTTP Client",
      description:
        "Biblioteca C++ para ESP32 projetada para simplificar requisições HTTP e realizar parsing de dados em streaming com baixo uso de memória (low-allocation). Permite vincular campos diretamente a variáveis ou estruturas sem alocar buffers intermediários pesados na RAM.",
      stats: ["Streaming de dados", "Low-allocation", "REST · JSON · APIs"],
      benchmarkNote:
        "Cenário de teste: 100 requisições GET sequenciais com payload JSON no JSONPlaceholder via Arduino Core para ESP32.",
      primaryCta: "Ver no GitHub",
      secondaryCta: "Documentação oficial",
      copyLabel: "Copiar código",
      copiedLabel: "Copiado!",
    },
    featuredCases: {
      eyebrow: "Aplicações em Produção",
      title: "Sistemas & Trabalhos Reais",
      subtitle:
        "Projetos construídos para resolver problemas operacionais e de negócio.",
      items: [
        {
          tag: "Produção Corporativa",
          title: "Sistemas Web, Mobile & Infraestrutura — Grupo Raotes",
          description:
            "Desenvolvimento de módulos de software para aplicações corporativas multiplataforma (Vue, Quasar, Capacitor). Implementação de APIs em Node.js com banco de dados PostgreSQL e atuação na estabilidade e monitoramento de servidores on-premise.",
          context:
            "Foco em sincronização confiável de dados, manutenibilidade de código e observabilidade para garantir a continuidade da operação.",
          stack: "Vue · Quasar · Capacitor · Node.js · PostgreSQL · Linux On-Premise",
        },
        {
          tag: "Gestão Escolar",
          title: "Sistema de Biblioteca — ETEC",
          description:
            "Aplicação desenvolvida durante estágio curricular para organizar o acervo e o fluxo de empréstimo e devolução de livros da instituição de ensino.",
          context:
            "Substituiu controles manuais por um fluxo digital centralizado, atendendo diretamente à equipe escolar e aos estudantes.",
          stack: "React · Node.js · MySQL · Azure",
        },
      ],
    },
    portfolio: {
      title: "Repositórios & Projetos Públicos",
      subtitleSuffix: "projetos no GitHub",
      stats: {
        stars: "stars",
        forks: "forks",
      },
      loading: "Carregando projetos...",
      errorPrefix: "Erro ao carregar projetos do GitHub",
      buttons: {
        previous: "Anterior",
        next: "Próxima",
      },
      labels: {
        created: "Criado em:",
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
        { value: "javascript", label: "JavaScript / TS" },
        { value: "c", label: "C / C++" },
        { value: "csharp", label: "C#" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
      ],
      languageCategoryMap: {
        JavaScript: "javascript",
        TypeScript: "javascript",
        C: "c",
        "C++": "c",
        "C#": "csharp",
        Python: "python",
        "Jupyter Notebook": "python",
        Java: "java",
      },
      categoryLabels: {
        javascript: "JavaScript / TypeScript",
        c: "C / C++",
        csharp: "C#",
        python: "Python",
        java: "Java",
        other: "Outros",
      },
    },
    experience: {
      title: "Experiência Profissional",
      subtitle: "Minha atuação no mercado e na docência técnica.",
      filters: [
        { value: "all", label: "Todos" },
        { value: "career", label: "Carreira" },
        { value: "education", label: "Formação" },
      ],
      events: [
        {
          year: "2026 – Atual",
          sortYear: 2026,
          title: "Docência em Tecnologia da Informação",
          organization: "Senac São Paulo",
          role: "Instrutor Técnico de TI",
          description:
            "Conduzo aulas teóricas e práticas focadas em infraestrutura, redes de computadores, suporte técnico e segurança, formando novos profissionais para a área de TI.",
          type: "career",
        },
        {
          year: "2025 – Atual",
          sortYear: 2025,
          title: "Desenvolvedor Full Stack Pleno",
          organization: "Grupo Raotes / WebGR",
          role: "Full Stack Developer",
          description:
            "Responsável pelo desenvolvimento de aplicações corporativas web e mobile (Vue/Quasar/Capacitor), criação de serviços em Node.js com PostgreSQL e sustentação da infraestrutura on-premise com foco em observabilidade.",
          type: "career",
        },
        {
          year: "2024 – Atual",
          sortYear: 2024,
          title: "Bacharelado em Ciência da Computação",
          organization: "Senac São Paulo",
          role: "Graduação",
          description:
            "Estudos formais em algoritmos, estruturas de dados, arquitetura de computadores, sistemas distribuídos e engenharia de software.",
          type: "education",
        },
        {
          year: "2023 – 2024",
          sortYear: 2023,
          title: "Desenvolvedor Full Stack Júnior",
          organization: "Grupo Raotes",
          role: "Junior Developer",
          description:
            "Implementação de interfaces em Vue.js e Quasar, desenvolvimento de regras de negócio em Node.js e manutenção de rotinas em banco de dados relacional.",
          type: "career",
        },
        {
          year: "2022",
          sortYear: 2022,
          title: "Estágio em Desenvolvimento de Software",
          organization: "ETEC de Embu",
          role: "Estagiário de Software",
          description:
            "Desenvolvimento completo da aplicação web para controle de acervo e empréstimo de livros da biblioteca da escola, utilizando React, Node.js, MySQL e Azure.",
          type: "career",
        },
        {
          year: "2021 – 2022",
          sortYear: 2021,
          title: "Técnico em Desenvolvimento de Sistemas",
          organization: "ETEC",
          role: "Curso Técnico",
          description:
            "Formação técnica com foco em programação orientada a objetos, banco de dados e desenvolvimento web.",
          type: "education",
        },
        {
          year: "2020 – 2021",
          sortYear: 2020,
          title: "Técnico em Automação Industrial",
          organization: "ETEC de Embu",
          role: "Curso Técnico",
          description:
            "Estudos em lógica de controle, circuitos eletrônicos e microcontroladores, ponto de partida para o interesse por programação de baixo nível.",
          type: "education",
        },
      ],
    },
    about: {
      eyebrow: "Contexto & Abordagem",
      title: "Sobre mim",
      paragraphs: [
        "Minha relação com a computação começou pelo hardware e pela eletrônica, no curso de Automação Industrial da ETEC. Ao programar controladores lógicos e trabalhar diretamente com sensores e circuitos, ficou claro que construir software era o caminho que eu queria seguir a fundo.",
        "No dia a dia profissional, atuo como desenvolvedor full stack cuidando de todo o ciclo de uma aplicação: desde a modelagem de bancos de dados relacionais e APIs em Node.js até interfaces web e aplicativos mobile com Vue, Quasar e Capacitor. Trabalho com servidores on-premise, métricas de observabilidade e rotinas de deploy com foco constante em estabilidade e simplicidade arquitetural.",
        "Fora do trabalho corporativo, leciono como instrutor de TI no Senac, onde ajudo novos profissionais a entenderem redes, sistemas operacionais e suporte técnico. Nas horas vagas, meu hobby é programar em C/C++ para sistemas embarcados e manter projetos de código aberto como o ESP32-HTTP-Client — uma forma prática de exercitar a otimização de memória e me manter próximo do funcionamento fundamental da máquina.",
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar",
      subtitle:
        "Disponível para novas oportunidades de engenharia de software, colaborações técnicas e projetos.",
    },
    footer: {
      nav: {
        projects: "Projetos",
        experience: "Experiência",
        about: "Sobre",
      },
      credit: "Desenvolvido por Pedro Fonseca",
    },
    notFound: {
      title: "404",
      subtitle: "Página Não Encontrada",
      description:
        "A página que você está procurando não existe ou foi movida.",
      backHome: "Voltar para a página inicial",
    },
  },
  "en-US": {
    metadata: {
      title: "Pedro Fonseca | Full Stack Developer",
      description:
        "Portfolio of Pedro Fonseca — Full Stack Developer specialized in Mobile, Web, Backend, Databases, Cloud and Performance.",
    },
    general: {
      name: "Pedro Fonseca",
      role: "Full Stack Developer",
      viewProjects: "View Projects",
      contactMe: "Get in Touch",
    },
    header: {
      aria: {
        themeToggle: "Toggle theme",
        languageSelector: "Select language",
      },
      nav: {
        projects: "Projects",
        experience: "Experience",
        about: "About",
        contact: "Contact",
      },
    },
    hero: {
      badge: "Mobile · Web · Backend · Database · Cloud",
      headline:
        "Full Stack Developer — Mobile, Web, Backend, Databases, and Cloud.",
      subtitle:
        "I build end-to-end applications with a focus on stability and performance: web and mobile interfaces, scalable APIs, relational data modeling, and infrastructure. In my spare time, I maintain open-source projects and build C/C++ embedded software and IoT tools as a hobby.",
      viewProjects: "View projects",
      viewGithub: "GitHub",
    },
    esp32Showcase: {
      eyebrow: "Open Source Project · C++ Hobby",
      title: "ESP32 HTTP Client",
      description:
        "A C++ library for ESP32 designed to simplify HTTP requests with streaming JSON parsing and low memory overhead (low-allocation). It binds payload fields directly to variables or structs without allocating intermediate RAM buffers.",
      stats: ["Streaming data", "Low-allocation", "REST · JSON · APIs"],
      benchmarkNote:
        "Benchmark scenario: 100 sequential GET requests with JSON payload on JSONPlaceholder using the ESP32 Arduino Core.",
      primaryCta: "View on GitHub",
      secondaryCta: "Official Documentation",
      copyLabel: "Copy code",
      copiedLabel: "Copied!",
    },
    featuredCases: {
      eyebrow: "Production Work",
      title: "Real Cases & Applications",
      subtitle: "Systems built to solve concrete operational and business needs.",
      items: [
        {
          tag: "Corporate Production",
          title: "Web, Mobile & Infrastructure Systems — Grupo Raotes",
          description:
            "Developing software modules for cross-platform enterprise applications (Vue, Quasar, Capacitor). Building Node.js APIs backed by PostgreSQL and maintaining on-premise server telemetry.",
          context:
            "Focused on reliable data synchronization, maintainable code, and observability to keep daily operations smooth.",
          stack: "Vue · Quasar · Capacitor · Node.js · PostgreSQL · Linux On-Premise",
        },
        {
          tag: "School Management",
          title: "Library Management System — ETEC",
          description:
            "End-to-end web system built during an internship to manage book catalogs and circulation workflows for the school unit.",
          context:
            "Replaced manual processes with a single digital system, directly serving school staff and students.",
          stack: "React · Node.js · MySQL · Azure",
        },
      ],
    },
    portfolio: {
      title: "Repositories & Public Projects",
      subtitleSuffix: "GitHub repositories",
      stats: {
        stars: "stars",
        forks: "forks",
      },
      loading: "Loading projects...",
      errorPrefix: "Error loading GitHub projects",
      buttons: {
        previous: "Previous",
        next: "Next",
      },
      labels: {
        created: "Created:",
        updated: "Updated:",
        fallbackCategory: "Other",
      },
      timeAgo: {
        prefix: "",
        justNow: "just now",
        units: {
          year: { singular: "year ago", plural: "years ago" },
          month: { singular: "month ago", plural: "months ago" },
          week: { singular: "week ago", plural: "weeks ago" },
          day: { singular: "day ago", plural: "days ago" },
          hour: { singular: "hour ago", plural: "hours ago" },
          minute: { singular: "minute ago", plural: "minutes ago" },
        },
      },
      categories: [
        { value: "featured", label: "Featured" },
        { value: "all", label: "All" },
        { value: "javascript", label: "JavaScript / TS" },
        { value: "c", label: "C / C++" },
        { value: "csharp", label: "C#" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
      ],
      languageCategoryMap: {
        JavaScript: "javascript",
        TypeScript: "javascript",
        C: "c",
        "C++": "c",
        "C#": "csharp",
        Python: "python",
        "Jupyter Notebook": "python",
        Java: "java",
      },
      categoryLabels: {
        javascript: "JavaScript / TypeScript",
        c: "C / C++",
        csharp: "C#",
        python: "Python",
        java: "Java",
        other: "Other",
      },
    },
    experience: {
      title: "Professional Experience",
      subtitle: "My industry work, technical teaching, and education.",
      filters: [
        { value: "all", label: "All" },
        { value: "career", label: "Career" },
        { value: "education", label: "Education" },
      ],
      events: [
        {
          year: "2026 – Present",
          sortYear: 2026,
          title: "IT Instructor",
          organization: "Senac São Paulo",
          role: "Technical Instructor",
          description:
            "Teaching IT fundamentals including computer networks, operating systems, technical support, and basic cybersecurity.",
          type: "career",
        },
        {
          year: "2025 – Present",
          sortYear: 2025,
          title: "Mid-level Full Stack Developer",
          organization: "Grupo Raotes / WebGR",
          role: "Full Stack Developer",
          description:
            "Building and supporting web and mobile applications with Vue and Quasar, Node.js backend services on PostgreSQL, and on-premise system monitoring.",
          type: "career",
        },
        {
          year: "2024 – Present",
          sortYear: 2024,
          title: "B.S. in Computer Science",
          organization: "Senac São Paulo",
          role: "Undergraduate Degree",
          description:
            "Formal study in computational theory, algorithm design, data structures, computer architecture, and software engineering.",
          type: "education",
        },
        {
          year: "2023 – 2024",
          sortYear: 2023,
          title: "Junior Full Stack Developer",
          organization: "Grupo Raotes",
          role: "Junior Developer",
          description:
            "Built user interfaces with Vue.js and Quasar, implemented business logic in Node.js, and maintained relational database queries.",
          type: "career",
        },
        {
          year: "2022",
          sortYear: 2022,
          title: "Software Development Intern",
          organization: "ETEC de Embu",
          role: "Software Intern",
          description:
            "Developed an end-to-end web system for library cataloging and book loan workflows using React, Node.js, MySQL, and Azure.",
          type: "career",
        },
        {
          year: "2021 – 2022",
          sortYear: 2021,
          title: "Vocational Technical Degree in Systems Development",
          organization: "ETEC",
          role: "Technical Degree",
          description:
            "Technical curriculum covering structured programming, OOP, relational databases, and web applications.",
          type: "education",
        },
        {
          year: "2020 – 2021",
          sortYear: 2020,
          title: "Vocational Technical Degree in Industrial Automation",
          organization: "ETEC de Embu",
          role: "Technical Degree",
          description:
            "Introductory studies in control logic, electronic circuits, and embedded systems, laying the groundwork for low-level development.",
          type: "education",
        },
      ],
    },
    about: {
      eyebrow: "Context & Approach",
      title: "About Me",
      paragraphs: [
        "My journey in computing started with hardware and electronics while studying Industrial Automation at technical school. Programming control logic and working hands-on with microcontrollers and circuits made it clear that building software was where I wanted to go deeper.",
        "In my daily professional work, I operate as a full-stack developer owning the complete software lifecycle: from relational database schemas and Node.js APIs to web and mobile apps with Vue, Quasar, and Capacitor. I manage on-premise servers and telemetry routines, always prioritizing stability and architectural simplicity.",
        "Beyond commercial projects, I teach as an IT instructor at Senac, helping aspiring technicians understand networks, operating systems, and technical support. In my spare time, my hobby is writing C/C++ embedded software and maintaining open-source libraries like ESP32-HTTP-Client — a practical way to exercise memory optimization and stay close to the bare metal.",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's connect",
      subtitle:
        "Available for software engineering opportunities, technical discussions, and collaborations.",
    },
    footer: {
      nav: {
        projects: "Projects",
        experience: "Experience",
        about: "About",
      },
      credit: "Built by Pedro Fonseca",
    },
    notFound: {
      title: "404",
      subtitle: "Page Not Found",
      description:
        "The page you are looking for does not exist or has been moved.",
      backHome: "Back to home",
    },
  },
  "es-ES": {
    metadata: {
      title: "Pedro Fonseca | Desarrollador Full Stack",
      description:
        "Portafolio de Pedro Fonseca — Desarrollador Full Stack especializado en Mobile, Web, Backend, Bases de Datos, Cloud y Rendimiento.",
    },
    general: {
      name: "Pedro Fonseca",
      role: "Desarrollador Full Stack",
      viewProjects: "Ver Proyectos",
      contactMe: "Contactar",
    },
    header: {
      aria: {
        themeToggle: "Cambiar tema",
        languageSelector: "Seleccionar idioma",
      },
      nav: {
        projects: "Proyectos",
        experience: "Experiencia",
        about: "Sobre mí",
        contact: "Contacto",
      },
    },
    hero: {
      badge: "Mobile · Web · Backend · Base de datos · Cloud",
      headline:
        "Desarrollador Full Stack — Mobile, Web, Backend, Bases de Datos y Cloud.",
      subtitle:
        "Desarrollo aplicaciones integrales con foco en estabilidad y rendimiento: interfaces web y móviles, APIs escaláveis, modelado de bases de datos e infraestructura. En mi tiempo libre, mantengo proyectos de código abierto y desarrollo software en C/C++ para sistemas embebidos e IoT como hobby.",
      viewProjects: "Ver proyectos",
      viewGithub: "GitHub",
    },
    esp32Showcase: {
      eyebrow: "Proyecto Open Source · Hobby en C++",
      title: "ESP32 HTTP Client",
      description:
        "Librería C++ para ESP32 diseñada para facilitar peticiones HTTP con procesamiento en streaming y bajo uso de memoria (low-allocation). Permite vincular campos directamente a variables sin almacenar buffers pesados en RAM.",
      stats: ["Streaming de datos", "Low-allocation", "REST · JSON · APIs"],
      benchmarkNote:
        "Escenario de prueba: 100 peticiones GET secuenciales con payload JSON en JSONPlaceholder mediante Arduino Core para ESP32.",
      primaryCta: "Ver en GitHub",
      secondaryCta: "Documentación oficial",
      copyLabel: "Copiar código",
      copiedLabel: "¡Copiado!",
    },
    featuredCases: {
      eyebrow: "Trabajo en Producción",
      title: "Casos y Aplicaciones Reales",
      subtitle: "Sistemas desarrollados para resolver necesidades operativas reales.",
      items: [
        {
          tag: "Producción Corporativa",
          title: "Sistemas Web, Mobile e Infraestructura — Grupo Raotes",
          description:
            "Desarrollo de módulos para aplicaciones corporativas multiplataforma (Vue, Quasar, Capacitor). Creación de APIs en Node.js con PostgreSQL y soporte a infraestructura on-premise.",
          context:
            "Enfoque en sincronización fiable de datos, código mantenible y observabilidad para garantizar la continuidad operativa.",
          stack: "Vue · Quasar · Capacitor · Node.js · PostgreSQL · Linux On-Premise",
        },
        {
          tag: "Gestión Escolar",
          title: "Sistema de Biblioteca — ETEC",
          description:
            "Aplicación integral desarrollada durante prácticas para la gestión de préstamos y catálogo escolar con React, Node.js, MySQL y Azure.",
          context:
            "Sustituyó controles manuales por un sistema digital centralizado para personal y estudiantes.",
          stack: "React · Node.js · MySQL · Azure",
        },
      ],
    },
    portfolio: {
      title: "Repositorios y Proyectos Públicos",
      subtitleSuffix: "proyectos en GitHub",
      stats: {
        stars: "stars",
        forks: "forks",
      },
      loading: "Cargando proyectos...",
      errorPrefix: "Error al cargar proyectos de GitHub",
      buttons: {
        previous: "Anterior",
        next: "Siguiente",
      },
      labels: {
        created: "Creado:",
        updated: "Actualizado:",
        fallbackCategory: "Otros",
      },
      timeAgo: {
        prefix: "hace",
        justNow: "ahora mismo",
        units: {
          year: { singular: "año", plural: "años" },
          month: { singular: "mes", plural: "meses" },
          week: { singular: "semana", plural: "semanas" },
          day: { singular: "día", plural: "días" },
          hour: { singular: "hora", plural: "horas" },
          minute: { singular: "minuto", plural: "minutos" },
        },
      },
      categories: [
        { value: "featured", label: "Destacados" },
        { value: "all", label: "Todos" },
        { value: "javascript", label: "JavaScript / TS" },
        { value: "c", label: "C / C++" },
        { value: "csharp", label: "C#" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
      ],
      languageCategoryMap: {
        JavaScript: "javascript",
        TypeScript: "javascript",
        C: "c",
        "C++": "c",
        "C#": "csharp",
        Python: "python",
        "Jupyter Notebook": "python",
        Java: "java",
      },
      categoryLabels: {
        javascript: "JavaScript / TypeScript",
        c: "C / C++",
        csharp: "C#",
        python: "Python",
        java: "Java",
        other: "Otros",
      },
    },
    experience: {
      title: "Experiencia Profesional",
      subtitle: "Mi trayectoria profesional, docencia técnica y formación.",
      filters: [
        { value: "all", label: "Todos" },
        { value: "career", label: "Carrera" },
        { value: "education", label: "Educación" },
      ],
      events: [
        {
          year: "2026 – Actual",
          sortYear: 2026,
          title: "Docencia en Tecnologías de la Información",
          organization: "Senac São Paulo",
          role: "Instructor Técnico de TI",
          description:
            "Formación de profesionales en TI con clases teóricas y prácticas sobre redes, sistemas operativos, soporte técnico y seguridad básica.",
          type: "career",
        },
        {
          year: "2025 – Actual",
          sortYear: 2025,
          title: "Desarrollador Full Stack Pleno",
          organization: "Grupo Raotes / WebGR",
          role: "Full Stack Developer",
          description:
            "Desarrollo y mantenimiento de aplicaciones corporativas: web y mobile con Vue/Quasar, servicios Node.js con PostgreSQL y observabilidad on-premise.",
          type: "career",
        },
        {
          year: "2024 – Actual",
          sortYear: 2024,
          title: "Grado en Ciencias de la Computación",
          organization: "Senac São Paulo",
          role: "Estudios Universitarios",
          description:
            "Estudios en algoritmos, estructuras de datos, arquitectura de sistemas e ingeniería de software.",
          type: "education",
        },
        {
          year: "2023 – 2024",
          sortYear: 2023,
          title: "Desarrollador Full Stack Júnior",
          organization: "Grupo Raotes",
          role: "Junior Developer",
          description:
            "Desarrollo de interfaces con Vue.js y Quasar, lógica de negocio en Node.js y consultas a bases de datos relacionales.",
          type: "career",
        },
        {
          year: "2022",
          sortYear: 2022,
          title: "Prácticas en Desarrollo de Software",
          organization: "ETEC de Embu",
          role: "Practicante de Software",
          description:
            "Desarrollo de un sistema web integral para gestión de préstamos de la biblioteca escolar con React, Node.js, MySQL y Azure.",
          type: "career",
        },
        {
          year: "2021 – 2022",
          sortYear: 2021,
          title: "Técnico en Desarrollo de Sistemas",
          organization: "ETEC",
          role: "Curso Técnico",
          description:
            "Formación técnica con foco en programación estructurada, POO, bases de datos y aplicaciones web.",
          type: "education",
        },
        {
          year: "2020 – 2021",
          sortYear: 2020,
          title: "Técnico en Automatización Industrial",
          organization: "ETEC de Embu",
          role: "Curso Técnico",
          description:
            "Fundamentos en lógica de control, circuitos y sistemas embebidos, base del interés en microcontroladores e IoT.",
          type: "education",
        },
      ],
    },
    about: {
      eyebrow: "Contexto y Enfoque",
      title: "Sobre mí",
      paragraphs: [
        "Mi relación con la informática comenzó con el hardware y la electrónica, cursando Automatización Industrial en la ETEC. Programar controladores y trabajar directamente con circuitos me hizo comprender que el desarrollo de software era mi vocación.",
        "En mi día a día profesional, me desempeño como desarrollador full stack abarcando todo el ciclo: desde modelado de bases de datos relacionales y APIs en Node.js hasta clientes web y aplicaciones móviles con Vue, Quasar y Capacitor. Administro servidores on-premise y métricas de observabilidad priorizando siempre la estabilidad y la claridad arquitectónica.",
        "Más allá de la industria, soy instructor de TI en Senac, donde enseño redes, infraestructura y soporte técnico. En mi tiempo libre, mi hobby es programar en C/C++ para sistemas embebidos y mantener librerías de código abierto como ESP32-HTTP-Client — una forma práctica de ejercitar la optimização de memoria y mantenerme cerca del funcionamiento del hardware.",
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos",
      subtitle:
        "Disponible para oportunidades de ingeniería de software, proyectos y colaboraciones técnicas.",
    },
    footer: {
      nav: {
        projects: "Proyectos",
        experience: "Experiencia",
        about: "Sobre mí",
      },
      credit: "Desarrollado por Pedro Fonseca",
    },
    notFound: {
      title: "404",
      subtitle: "Página No Encontrada",
      description: "La página que buscas no existe o ha sido movida.",
      backHome: "Volver al inicio",
    },
  },
};
