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
        "Desenvolvedor Full Stack apaixonado por tecnologia, ciência e inovação. Criando soluções elegantes e eficientes do baixo nível à nuvem.",
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
            "Pedro iniciou sua trajetória cursando Automação Industrial na ETEC de Embu, desenvolvendo bases sólidas em lógica e sistemas embarcados.",
          type: "education",
        },
        {
          year: 2021,
          title: "Técnico em Desenvolvimento de Sistemas",
          description:
            "Início da jornada formal em desenvolvimento de software.",
          details:
            "Iniciou o curso técnico na ETEC, focando em programação web e lógica de sistemas.",
          type: "education",
        },
        {
          year: 2022,
          title: "Estágio: Sistema de Biblioteca ETEC",
          description: "Desenvolvimento de software real para gestão escolar.",
          details:
            "Durante o estágio na ETEC, desenvolveu um sistema de biblioteca utilizando NodeJS, React, MySQL e Azure, aumentando a eficiência e organização da instituição.",
          type: "career",
        },
        {
          year: 2022,
          title: "Voluntário no The Developer's Conference (TDC)",
          description:
            "Apoio na organização de um dos maiores eventos de TI do Brasil.",
          details:
            "Atuou como Assistente de Trilha e Credenciamento, auxiliando na logística das palestras e recepção dos participantes.",
          type: "community",
        },
        {
          year: 2022,
          title: "Voluntário na Campus Party Brasil",
          description: "Assistente de Comunidade e Acessibilidade.",
          details:
            "Contribuiu para a inclusão e organização das comunidades dentro do evento, garantindo uma boa experiência para os campuseiros.",
          type: "community",
        },
        {
          year: 2023,
          title: "Desenvolvedor Full Stack Júnior no Grupo Raotes",
          description: "Início da carreira profissional em tempo integral.",
          details:
            "Iniciou no Grupo Raotes atuando com VueJS, Quasar, Sequelize e Postgres, contribuindo na criação de módulos e manutenção de sistemas.",
          type: "career",
        },
        {
          year: 2024,
          title: "Desenvolvedor Web Voluntário - Jovens do Futuro",
          description: "Desenvolvimento front-end para impacto social.",
          details:
            "Atuou como Desenvolvedor Web na Associação Jovens do Futuro, criando soluções digitais para apoiar a missão da ONG.",
          type: "community",
        },
        {
          year: 2024,
          title: "Bacharelado em Ciência da Computação",
          description: "Início da graduação no Senac São Paulo.",
          details:
            "Ingressou no ensino superior para aprofundar os conhecimentos teóricos e científicos da computação.",
          type: "education",
        },
        {
          year: 2024,
          title: "Voluntário no DevOpsDays São Paulo",
          description:
            "Apoio técnico e organizacional no evento de cultura DevOps.",
          details:
            "Atuou na equipe de credenciamento, facilitando a entrada e organização dos participantes do evento.",
          type: "community",
        },
        {
          year: 2024,
          title: "Projetos de Extensão na USP",
          description:
            "Especialização em Inteligência Artificial e Machine Learning.",
          details:
            "Concluiu extensões universitárias no IME-USP e ICMC-USP focadas em Aprendizado de Máquina e Inteligência Artificial.",
          type: "education",
        },
        {
          year: 2024,
          title: "Palestra no SENAI",
          description:
            "Compartilhando conhecimento sobre automação e desenvolvimento.",
          details:
            "Apresentação voltada para estudantes técnicos sobre pipelines de CI/CD e boas práticas de desenvolvimento.",
          type: "talk",
        },
        {
          year: 2024,
          title: "Palestra no Senac: Portfólio e GitHub",
          description: "Apresentação no evento Tecnologia em Foco.",
          details:
            "Ministrou a palestra 'Construindo um Portfólio com GitHub', demonstrando automações reais e Github Actions.",
          type: "talk",
        },
        {
          year: 2025,
          title: "Promoção a Desenvolvedor Pleno",
          description: "Ascensão profissional no Grupo Raotes.",
          details:
            "Promovido a Full Stack Software Developer Pleno, assumindo maiores responsabilidades na arquitetura de soluções, servidores on-premise e desenvolvimento mobile.",
          type: "career",
        },
        {
          year: 2023,
          title: "Palestra de Abertura na Etec de Embu",
          description:
            "Abertura do evento anual de Desenvolvimento de Sistemas.",
          details:
            "Retorno à instituição de origem para palestrar sobre mercado de trabalho e a importância de projetos reais.",
          type: "talk",
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
    notFound: {
      title: "404",
      subtitle: "Página Não Encontrada",
      description:
        "Ops! A página que você está procurando não existe ou foi movida para outro lugar.",
      backHome: "Voltar para Home",
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
        "Full Stack Developer passionate about technology, science, and innovation. Creating elegant and efficient solutions from low level to the cloud.",
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
          title: "Start in Technology & Automation",
          description:
            "First formal studies in technology and industrial automation.",
          details:
            "Pedro began his journey by studying Industrial Automation at ETEC Embu, developing solid foundations in logic and embedded systems.",
          type: "education",
        },
        {
          year: 2021,
          title: "Systems Development Technician",
          description:
            "Beginning of the formal journey in software development.",
          details:
            "Started the technical course at ETEC, focusing on web programming and systems logic.",
          type: "education",
        },
        {
          year: 2022,
          title: "Internship: ETEC Library System",
          description: "Real-world software development for school management.",
          details:
            "During the internship at ETEC, developed a library system using NodeJS, React, MySQL, and Azure, increasing the institution's efficiency and organization.",
          type: "career",
        },
        {
          year: 2022,
          title: "Volunteer at The Developer's Conference (TDC)",
          description:
            "Support in organizing one of the largest IT events in Brazil.",
          details:
            "Acted as a Track and Registration Assistant, helping with lecture logistics and attendee reception.",
          type: "community",
        },
        {
          year: 2022,
          title: "Volunteer at Campus Party Brazil",
          description: "Community and Accessibility Assistant.",
          details:
            "Contributed to inclusion and community organization within the event, ensuring a good experience for attendees (campuseiros).",
          type: "community",
        },
        {
          year: 2023,
          title: "Junior Full Stack Developer at Grupo Raotes",
          description: "Start of full-time professional career.",
          details:
            "Started at Grupo Raotes working with VueJS, Quasar, Sequelize, and Postgres, contributing to module creation and system maintenance.",
          type: "career",
        },
        {
          year: 2024,
          title: "Volunteer Web Developer - Jovens do Futuro",
          description: "Front-end development for social impact.",
          details:
            "Acted as a Web Developer at the Jovens do Futuro Association, creating digital solutions to support the NGO's mission.",
          type: "community",
        },
        {
          year: 2024,
          title: "Bachelor's in Computer Science",
          description: "Start of undergraduate studies at Senac São Paulo.",
          details:
            "Entered higher education to deepen theoretical and scientific knowledge of computing.",
          type: "education",
        },
        {
          year: 2024,
          title: "Volunteer at DevOpsDays São Paulo",
          description:
            "Technical and organizational support at the DevOps culture event.",
          details:
            "Worked on the registration team, facilitating entry and organization for event participants.",
          type: "community",
        },
        {
          year: 2024,
          title: "Extension Projects at USP",
          description:
            "Specialization in Artificial Intelligence and Machine Learning.",
          details:
            "Completed university extension courses at IME-USP and ICMC-USP focused on Machine Learning and Artificial Intelligence.",
          type: "education",
        },
        {
          year: 2024,
          title: "Talk at SENAI",
          description: "Sharing knowledge about automation and development.",
          details:
            "Presentation aimed at technical students regarding CI/CD pipelines and development best practices.",
          type: "talk",
        },
        {
          year: 2024,
          title: "Talk at Senac: Portfolio and GitHub",
          description: "Presentation at the 'Technology in Focus' event.",
          details:
            "Delivered the talk 'Building a Portfolio with GitHub', demonstrating real automations and GitHub Actions.",
          type: "talk",
        },
        {
          year: 2025,
          title: "Promotion to Mid-Level Developer",
          description: "Professional rise at Grupo Raotes.",
          details:
            "Promoted to Mid-Level Full Stack Software Developer, taking on greater responsibilities in solution architecture, on-premise servers, and mobile development.",
          type: "career",
        },
        {
          year: 2023,
          title: "Opening Talk at Etec Embu",
          description: "Opening of the annual Systems Development event.",
          details:
            "Returned to his alma mater to speak about the job market and the importance of real-world projects.",
          type: "talk",
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
    notFound: {
      title: "404",
      subtitle: "Page Not Found",
      description:
        "Oops! The page you're looking for doesn't exist or has been moved somewhere else.",
      backHome: "Back to Home",
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
        "Desarrollador Full Stack apasionado por la tecnología, la ciencia y la innovación. Creando soluciones elegantes y eficientes desde el bajo nivel hasta la nube.",
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
            "Pedro inició su trayectoria cursando Automatización Industrial en la ETEC de Embu, desarrollando bases sólidas en lógica y sistemas integrados.",
          type: "education",
        },
        {
          year: 2021,
          title: "Técnico en Desarrollo de Sistemas",
          description: "Inicio de la jornada formal en desarrollo de software.",
          details:
            "Comenzó el curso técnico en la ETEC, enfocándose en programación web y lógica de sistemas.",
          type: "education",
        },
        {
          year: 2022,
          title: "Pasantía: Sistema de Biblioteca ETEC",
          description: "Desarrollo de software real para gestión escolar.",
          details:
            "Durante la pasantía en la ETEC, desarrolló un sistema de biblioteca utilizando NodeJS, React, MySQL y Azure, aumentando la eficiencia y organización de la institución.",
          type: "career",
        },
        {
          year: 2022,
          title: "Voluntario en The Developer's Conference (TDC)",
          description:
            "Apoyo en la organización de uno de los mayores eventos de TI de Brasil.",
          details:
            "Actuó como Asistente de Pista (Track) y Acreditación, ayudando en la logística de las charlas y recepción de los participantes.",
          type: "community",
        },
        {
          year: 2022,
          title: "Voluntario en Campus Party Brasil",
          description: "Asistente de Comunidad y Accesibilidad.",
          details:
            "Contribuyó a la inclusión y organización de las comunidades dentro del evento, garantizando una buena experiencia para los campuseros.",
          type: "community",
        },
        {
          year: 2023,
          title: "Desarrollador Full Stack Junior en Grupo Raotes",
          description: "Inicio de la carrera profesional a tiempo completo.",
          details:
            "Comenzó en Grupo Raotes trabajando con VueJS, Quasar, Sequelize y Postgres, contribuyendo en la creación de módulos y mantenimiento de sistemas.",
          type: "career",
        },
        {
          year: 2023,
          title: "Desarrollador Web Voluntario - Jovens do Futuro",
          description: "Desarrollo front-end para impacto social.",
          details:
            "Actuó como Desarrollador Web en la Asociación Jovens do Futuro, creando soluciones digitales para apoyar la misión de la ONG.",
          type: "community",
        },
        {
          year: 2023,
          title: "Licenciatura en Ciencias de la Computación",
          description: "Inicio del grado universitario en Senac São Paulo.",
          details:
            "Ingresó a la educación superior para profundizar los conocimientos teóricos y científicos de la computación.",
          type: "education",
        },
        {
          year: 2024,
          title: "Voluntario en DevOpsDays São Paulo",
          description:
            "Apoyo técnico y organizacional en el evento de cultura DevOps.",
          details:
            "Actuó en el equipo de acreditación, facilitando la entrada y organización de los participantes del evento.",
          type: "community",
        },
        {
          year: 2024,
          title: "Proyectos de Extensión en la USP",
          description:
            "Especialización en Inteligencia Artificial y Machine Learning.",
          details:
            "Concluyó extensiones universitarias en el IME-USP e ICMC-USP enfocadas en Aprendizaje Automático e Inteligencia Artificial.",
          type: "education",
        },
        {
          year: 2024,
          title: "Charla en SENAI",
          description:
            "Compartiendo conocimiento sobre automatización y desarrollo.",
          details:
            "Presentación dirigida a estudiantes técnicos sobre pipelines de CI/CD y buenas prácticas de desarrollo.",
          type: "talk",
        },
        {
          year: 2024,
          title: "Charla en Senac: Portafolio y GitHub",
          description: "Presentación en el evento Tecnología en Foco.",
          details:
            "Impartió la charla 'Construyendo un Portafolio con GitHub', demostrando automatizaciones reales y GitHub Actions.",
          type: "talk",
        },
        {
          year: 2025,
          title: "Promoción a Desarrollador Pleno",
          description: "Ascenso profesional en Grupo Raotes.",
          details:
            "Promovido a Desarrollador de Software Full Stack Pleno (Semi-Senior), asumiendo mayores responsabilidades en la arquitectura de soluciones, servidores on-premise y desarrollo móvil.",
          type: "career",
        },
        {
          year: 2023,
          title: "Charla de Apertura en Etec de Embu",
          description: "Apertura del evento anual de Desarrollo de Sistemas.",
          details:
            "Regreso a la institución de origen para dar una charla sobre el mercado laboral y la importancia de proyectos reales.",
          type: "talk",
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
    notFound: {
      title: "404",
      subtitle: "Página No Encontrada",
      description:
        "¡Ups! La página que buscas no existe o ha sido movida a otro lugar.",
      backHome: "Volver al Inicio",
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
