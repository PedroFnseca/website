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

  /* ------------------------------------------------------- */
  /* ---------------------- ENGLISH ------------------------- */
  /* ------------------------------------------------------- */

  "en-US": {
    metadata: {
      title: "Pedro Fonseca | Full Stack Developer",
      description: "Portfolio of Pedro Fonseca - Full Stack Developer",
    },
    general: {
      name: "Pedro Fonseca",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      viewJourney: "View My Journey",
      contactArrow: "\u2192",
    },
    header: {
      aria: {
        themeToggle: "Toggle light and dark theme",
        languageSelector: "Select language",
      },
      nav: {
        projects: "Projects",
        journey: "Journey",
        contact: "Contact",
      },
    },
    hero: {
      subtitle:
        "Full Stack Developer passionate about technology, science, and innovation. Creating elegant and efficient solutions from backend architecture to the cloud.",
    },
    wearYourStory: {
      description:
        "Full stack developer focused on high performance, capable of building solutions from low-level systems to modern cloud applications. I combine practical experience, technical rigor, and scientific curiosity to transform ideas into real, scalable, and well-structured products. I work deeply with backend, automation, software engineering, and experimental computing, always seeking innovation, clarity, and impact.",
    },
    featureCarousel: {
      title: "Skills & Highlights",
      items: [
        {
          title: "Full Stack Expertise",
          description:
            "Strong command of backend, frontend, and distributed architectures, delivering complete end-to-end solutions.",
          icon: "Layers",
        },
        {
          title: "Low-Level & High Performance",
          description:
            "Experience with C, JavaScript, and optimization — building high-performance systems and understanding software internals.",
          icon: "Settings",
        },
        {
          title: "Constant Innovation",
          description:
            "Explores AI, quantum computing, and biotechnology, turning curiosity into real projects and technical experiments.",
          icon: "Microscope",
        },
        {
          title: "Speaker & Educator",
          description:
            "Talks at SENAI, SENAC, ETEC, and GDG, teaching GitHub Actions, deployment, automation, and development best practices.",
          icon: "Presentation",
        },
        {
          title: "Projects From Scratch",
          description:
            "Creates complete solutions from zero: C games, custom APIs, automated pipelines, and experimental systems.",
          icon: "Rocket",
        },
      ],
    },
    portfolio: {
      title: "My Projects",
      subtitleSuffix: "public repositories on GitHub",
      stats: {
        stars: "stars",
        forks: "forks",
      },
      loading: "Loading projects...",
      errorPrefix: "Error loading projects",
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
          year: { singular: "year", plural: "years" },
          month: { singular: "month", plural: "months" },
          week: { singular: "week", plural: "weeks" },
          day: { singular: "day", plural: "days" },
          hour: { singular: "hour", plural: "hours" },
          minute: { singular: "minute", plural: "minutes" },
        },
      },
      categories: [
        { value: "featured", label: "Featured" },
        { value: "all", label: "All" },
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
        other: "Other",
      },
    },
    timeline: {
      title: "My Journey",
      subtitle: "My evolution throughout the years",
      filters: [
        { value: "all", label: "All", icon: null },
        { value: "education", label: "Education", icon: "GraduationCap" },
        { value: "career", label: "Career", icon: "Briefcase" },
        { value: "community", label: "Community", icon: "Users" },
        { value: "talk", label: "Talks", icon: "Mic" },
      ],
      events: [
        {
          year: 2020,
          title: "Beginning in Technology & Automation",
          description:
            "First formal studies in technology and industrial automation.",
          details:
            "Started his journey studying Industrial Automation, developing solid foundations in logic, electronics, and embedded systems.",
          type: "education",
        },
        {
          year: 2021,
          title: "Systems Development Technician",
          description: "Start of the professional journey as a developer.",
          details:
            "During the technical program, Pedro began working on real projects, gaining practical experience in web programming and systems.",
          type: "education",
        },
        {
          year: 2021,
          title: "Participation in Major Events",
          description: "Active presence in the tech community.",
          details:
            "Attended events like Campus Party, TDC, and GDG meetups, expanding networking and following trends in AI and engineering.",
          type: "community",
        },
        {
          year: 2023,
          title: "First Professional Experiences",
          description: "Growing role as a fullstack developer.",
          details:
            "Worked on real projects focused on backend, APIs, databases, and low-level development.",
          type: "career",
        },
        {
          year: 2023,
          title: "Google Cloud Academy",
          description:
            "Training in cloud computing and distributed infrastructure.",
          details:
            "Completed official Google Cloud certification, deepening knowledge in infrastructure, deployment, pipelines, and architecture.",
          type: "education",
        },
        {
          year: 2022,
          title: "Beginning of Computer Science Degree",
          description:
            "Academic advancement with practical and scientific focus.",
          details:
            "Joined SENAC, developing projects like an educational C game and a full API entirely in C.",
          type: "education",
        },
        {
          year: 2024,
          title: "Talk at SENAI",
          description: "Presentation about automation and GitHub Actions.",
          details:
            "Presented CI/CD automation and pipelines, guiding students in implementing professional deployment.",
          type: "talk",
        },
        {
          year: 2024,
          title: "TCC Evaluator",
          description: "Contribution to the formation of new professionals.",
          details:
            "Evaluated final student projects and guided best development and architecture practices.",
          type: "career",
        },
        {
          year: 2025,
          title: "Opening Talk at Etec de Embu",
          description: "Opening of the annual Systems Development event.",
          details:
            "Talk about projects, GitHub Actions, and the importance of real portfolios in tech careers.",
          type: "talk",
        },
        {
          year: 2025,
          title: "Full Stack Developer at Grupo Raotes",
          description:
            "Professional work focusing on backend, cloud, and distributed systems.",
          details:
            "Works with backend, databases, APIs, cloud deployment, and high-availability systems.",
          type: "career",
        },
      ],
    },
    footer: {
      nav: {
        about: "About",
        projects: "Projects",
        journey: "Journey",
        contact: "Contact",
      },
      credit: "Developed by Pedro Fonseca",
    },
    services: {
      title: "Our Services",
      items: [
        {
          title: "UI/UX Design",
          description:
            "Creation of intuitive and impactful interfaces that delight users.",
          icon: "Paintbrush",
          colorClass: "text-blue-500",
        },
        {
          title: "Web Development",
          description:
            "Building robust, scalable, high-performance applications.",
          icon: "Code",
          colorClass: "text-green-500",
        },
        {
          title: "Digital Marketing",
          description:
            "Strategies that expand visibility and create real audience connection.",
          icon: "Megaphone",
          colorClass: "text-yellow-500",
        },
        {
          title: "Mobile Development",
          description:
            "Creating innovative experiences for iOS and Android devices.",
          icon: "Smartphone",
          colorClass: "text-purple-500",
        },
      ],
    },
  },

  /* ------------------------------------------------------- */
  /* ---------------------- SPANISH ------------------------- */
  /* ------------------------------------------------------- */

  "es-ES": {
    metadata: {
      title: "Pedro Fonseca | Desarrollador Full Stack",
      description: "Portafolio de Pedro Fonseca - Desarrollador Full Stack",
    },
    general: {
      name: "Pedro Fonseca",
      viewProjects: "Ver Proyectos",
      contactMe: "Contáctame",
      viewJourney: "Ver Mi Trayectoria",
      contactArrow: "\u2192",
    },
    header: {
      aria: {
        themeToggle: "Cambiar entre tema claro y oscuro",
        languageSelector: "Seleccionar idioma",
      },
      nav: {
        projects: "Proyectos",
        journey: "Trayectoria",
        contact: "Contacto",
      },
    },
    hero: {
      subtitle:
        "Desarrollador Full Stack apasionado por la tecnología, la ciencia y la innovación. Creando soluciones elegantes y eficientes desde el backend hasta la nube.",
    },
    wearYourStory: {
      description:
        "Desarrollador full stack enfocado en alto rendimiento, capaz de crear soluciones que van desde sistemas de bajo nivel hasta aplicaciones modernas en la nube. Combino experiencia práctica, rigor técnico y curiosidad científica para transformar ideas en productos reales, escalables y bien estructurados. Trabajo con profundidad en backend, automatización, ingeniería de software y computación experimental, siempre buscando innovación, claridad e impacto.",
    },
    featureCarousel: {
      title: "Habilidades & Diferenciales",
      items: [
        {
          title: "Experiencia Full Stack",
          description:
            "Dominio sólido en backend, frontend y arquitecturas distribuidas, entregando soluciones completas de extremo a extremo.",
          icon: "Layers",
        },
        {
          title: "Bajo Nivel y Alto Rendimiento",
          description:
            "Experiencia con C, JavaScript y optimización, creando sistemas de alto rendimiento y comprendiendo profundamente el funcionamiento interno del software.",
          icon: "Settings",
        },
        {
          title: "Innovación Continua",
          description:
            "Explora IA, computación cuántica y biotecnología, convirtiendo curiosidad en proyectos reales y experimentos técnicos.",
          icon: "Microscope",
        },
        {
          title: "Conferencista y Educador",
          description:
            "Charlas en SENAI, SENAC, ETEC y GDG, enseñando GitHub Actions, deploy, automatización y buenas prácticas de desarrollo.",
          icon: "Presentation",
        },
        {
          title: "Proyectos Desde Cero",
          description:
            "Creación de soluciones completas desde cero: juegos en C, APIs personalizadas, pipelines automatizados y sistemas experimentales.",
          icon: "Rocket",
        },
      ],
    },
    portfolio: {
      title: "Mis Proyectos",
      subtitleSuffix: "repositorios públicos en GitHub",
      stats: {
        stars: "stars",
        forks: "forks",
      },
      loading: "Cargando proyectos...",
      errorPrefix: "Error al cargar los proyectos",
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
        justNow: "justo ahora",
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
        other: "Otros",
      },
    },
    timeline: {
      title: "Mi Trayectoria",
      subtitle: "Mi evolución a lo largo de los años",
      filters: [
        { value: "all", label: "Todos", icon: null },
        { value: "education", label: "Educación", icon: "GraduationCap" },
        { value: "career", label: "Carrera", icon: "Briefcase" },
        { value: "community", label: "Comunidad", icon: "Users" },
        { value: "talk", label: "Charlas", icon: "Mic" },
      ],
      events: [
        {
          year: 2020,
          title: "Inicio en Tecnología y Automatización",
          description:
            "Primeros estudios formales en tecnología y automatización industrial.",
          details:
            "Inició su trayectoria estudiando Automatización Industrial, desarrollando bases sólidas en lógica, electrónica y sistemas embebidos.",
          type: "education",
        },
        {
          year: 2021,
          title: "Técnico en Desarrollo de Sistemas",
          description:
            "Inicio de la trayectoria profesional como desarrollador.",
          details:
            "Durante el curso técnico, comenzó a trabajar en proyectos reales, adquiriendo experiencia práctica en programación web y sistemas.",
          type: "education",
        },
        {
          year: 2021,
          title: "Participación en Grandes Eventos",
          description: "Presencia activa en la comunidad tecnológica.",
          details:
            "Participó en eventos como Campus Party, TDC y reuniones del GDG, expandiendo su networking y siguiendo tendencias de IA e ingeniería.",
          type: "community",
        },
        {
          year: 2023,
          title: "Primeras Experiencias Profesionales",
          description: "Creciente actuación como desarrollador fullstack.",
          details:
            "Comenzó a trabajar en proyectos reales centrados en backend, APIs, bases de datos y desarrollo de bajo nivel.",
          type: "career",
        },
        {
          year: 2023,
          title: "Google Cloud Academy",
          description:
            "Formación en computación en la nube e infraestructura distribuida.",
          details:
            "Completó la formación oficial en Google Cloud, profundizando en infraestructura, deploy, pipelines y arquitectura distribuida.",
          type: "education",
        },
        {
          year: 2022,
          title: "Inicio en Ciencias de la Computación",
          description: "Avance académico con enfoque práctico y científico.",
          details:
            "Ingresó en SENAC, desarrollando proyectos como un juego educativo en C y una API completa escrita en C.",
          type: "education",
        },
        {
          year: 2024,
          title: "Charla en SENAI",
          description: "Presentación sobre automatización y GitHub Actions.",
          details:
            "Presentó automatización de CI/CD y pipelines, enseñando a estudiantes a implementar un deploy profesional.",
          type: "talk",
        },
        {
          year: 2024,
          title: "Evaluador de Proyectos Finales",
          description:
            "Contribución directa a la formación de nuevos profesionales.",
          details:
            "Actuó evaluando proyectos finales (TCC), orientando buenas prácticas de desarrollo y arquitectura.",
          type: "career",
        },
        {
          year: 2025,
          title: "Charla de Apertura en Etec de Embu",
          description: "Apertura del evento anual de Desarrollo de Sistemas.",
          details:
            "Charla sobre proyectos, GitHub Actions y la importancia del portafolio real en la carrera tecnológica.",
          type: "talk",
        },
        {
          year: 2025,
          title: "Desarrollador Full Stack en Grupo Raotes",
          description:
            "Trabajo profesional centrado en backend, cloud y sistemas distribuidos.",
          details:
            "Actúa con backend, bases de datos, APIs, deploy en la nube y sistemas de alta disponibilidad.",
          type: "career",
        },
      ],
    },
    footer: {
      nav: {
        about: "Sobre mí",
        projects: "Proyectos",
        journey: "Trayectoria",
        contact: "Contacto",
      },
      credit: "Desarrollado por Pedro Fonseca",
    },
    services: {
      title: "Nuestros Servicios",
      items: [
        {
          title: "Diseño UI/UX",
          description:
            "Creación de interfaces intuitivas e impactantes que encantan a los usuarios.",
          icon: "Paintbrush",
          colorClass: "text-blue-500",
        },
        {
          title: "Desarrollo Web",
          description:
            "Construcción de aplicaciones robustas, escalables y de alto rendimiento.",
          icon: "Code",
          colorClass: "text-green-500",
        },
        {
          title: "Marketing Digital",
          description:
            "Estrategias que amplifican visibilidad y generan conexión real con el público.",
          icon: "Megaphone",
          colorClass: "text-yellow-500",
        },
        {
          title: "Desarrollo Móvil",
          description:
            "Creación de experiencias innovadoras para dispositivos iOS y Android.",
          icon: "Smartphone",
          colorClass: "text-purple-500",
        },
      ],
    },
  },
};
