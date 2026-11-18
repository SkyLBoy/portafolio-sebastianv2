export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      specializations: "Especialidades",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
      downloadCV: "Descargar CV",
      menu: "Menú",
      home: "Ir al inicio",
      switchLanguage: "Switch to English",
      lightTheme: "Activar tema claro",
      darkTheme: "Activar tema oscuro",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      overline: "Software Engineer · IT Infrastructure",
      greeting: "Hola, soy",
      name: "Sebastián",
      title: "Infraestructura TI y automatización",
      tagline:
        "Desarrollo de Software · Redes Empresariales · Automatización · Infraestructura TI · Documentación Técnica",
      description:
        "Soy ingeniero en Software. Administro redes empresariales y desarrollo herramientas que simplifican la operación tecnológica",
      ctaCV: "Descargar CV",
      ctaContact: "Contactar",
      ctaProjects: "Ver proyectos",
      location: "Hermosillo, Sonora · MX",
      status: "Disponible para oportunidades",
      currentRole: "Actualmente",
      currentCompany: "Ingeniero de Tecnología de Software en Interlogic Global",
    },
    about: {
      overline: "02 · Perfil profesional",
      title: "Sobre mí",
      strengths: ["Experiencia combinada en desarrollo de software e infraestructura.", "Documentación técnica y transferencia de conocimiento.", "Resolución de problemas con enfoque en la operación y el usuario."],
      lead:
        "Ingeniero en Software con experiencia práctica en infraestructura tecnológica, desarrollo de software, redes empresariales, automatización de procesos y documentación técnica.",
      paragraph:
        "He participado en proyectos empresariales relacionados con desarrollo web, sistemas de inventario, administración de infraestructura tecnológica, automatización documental y soporte especializado. Me apasiona la tecnología, la resolución de problemas y la mejora continua mediante herramientas innovadoras.",
      stats: [
        { value: "2+", label: "Años de experiencia profesional" },
        { value: "10+", label: "Proyectos empresariales entregados" },
        { value: "3", label: "Empresas: pública y privada" },
        { value: "B2", label: "Inglés (Intermedio)" },
      ],
      facts: {
        title: "Información clave",
        items: [
          { k: "Nombre", v: "Sebastián Calderón López" },
          { k: "Rol actual", v: "Ingeniero de Tecnología de Software" },
          { k: "Empresa", v: "Interlogic Global" },
          { k: "Formación", v: "Ing. en Software · UES" },
          { k: "Ubicación", v: "Hermosillo, Sonora, MX" },
          { k: "Idiomas", v: "Español · Inglés" },
        ],
      },
    },
    spec: {
      overline: "02 · Áreas de especialización",
      title: "Cuatro disciplinas, un mismo perfil",
      lead:
        "Operación híbrida entre desarrollo de software e infraestructura tecnológica empresarial.",
      cards: [
        {
          tag: "01",
          title: "Desarrollo de Software",
          desc: "Diseño y desarrollo de soluciones empresariales orientadas a optimizar procesos internos y mejorar la productividad.",
          tech: ["JavaScript", "React", "PHP", "HTML", "CSS", "SQL"],
        },
        {
          tag: "02",
          title: "Infraestructura Tecnológica",
          desc: "Implementación, administración y soporte de infraestructura empresarial y servicios críticos de cómputo.",
          tech: ["Aruba", "Fortinet", "VLANs", "TCP/IP", "Redes LAN"],
        },
        {
          tag: "03",
          title: "Automatización",
          desc: "Automatización de tareas repetitivas para reducir tiempos operativos y mejorar la eficiencia de los equipos.",
          tech: ["Python", "PowerShell"],
        },
        {
          tag: "04",
          title: "Documentación Técnica",
          desc: "Creación de documentación profesional para proyectos empresariales y transferencia de conocimiento.",
          tech: ["Manuales", "Procedimientos", "Diagramas", "Reportes"],
        },
      ],
    },
    skills: {
      "overline": "04 · Especialidades",
      "title": "Especialidades y tecnologías",
      "lead": "Redes e infraestructura como enfoque principal, complementadas por desarrollo, automatización y documentación técnica.",
      "evidenceLabel": "En la práctica",
      "groups": [
        {
          "id": "infrastructure",
          "name": "Infraestructura y redes",
          "icon": "network",
          "description": "Conectividad, segmentación y operación de redes empresariales.",
          "items": [
            "Aruba",
            "Fortinet",
            "TCP/IP",
            "VLANs y segmentación"
          ],
          "references": [
            {
              "href": "#experience-1",
              "label": "Vincco - CT Internacional · redes Aruba y Fortinet"
            }
          ]
        },
        {
          "id": "automation",
          "name": "Automatización",
          "icon": "bot",
          "description": "Herramientas y scripts para tareas operativas y generación de documentos.",
          "items": [
            "Python",
            "PowerShell"
          ],
          "references": [
            {
              "href": "#project-presentation-generator",
              "label": "Generador Automático de Presentaciones"
            },
            {
              "href": "#experience-0",
              "label": "Interlogic Global · scripts operativos"
            }
          ]
        },
        {
          "id": "development",
          "name": "Desarrollo de software",
          "icon": "code",
          "description": "Aplicaciones web y soluciones para procesos internos.",
          "items": [
            "React",
            "JavaScript",
            "PHP",
            "HTML y CSS",
            "Git y GitHub"
          ],
          "references": [
            {
              "href": "#project-vincco-website",
              "label": "Página Web Corporativa Vincco"
            }
          ]
        },
        {
          "id": "databases",
          "name": "Bases de datos",
          "icon": "database",
          "description": "Modelado y consultas para aplicaciones empresariales.",
          "items": [
            "SQL",
            "PostgreSQL",
            "MySQL",
            "SQL Server",
            "MongoDB"
          ],
          "references": [
            {
              "href": "#project-sec-inventory",
              "label": "Inventario SEC · PHP y SQL"
            }
          ]
        },
        {
          "id": "documentation",
          "name": "Documentación técnica",
          "icon": "file",
          "description": "Información para operar, mantener y dar soporte a los sistemas.",
          "items": [
            "Manuales y procedimientos",
            "Diagramas de red",
            "Reportes técnicos"
          ],
          "references": [
            {
              "href": "#experience-0",
              "label": "Interlogic Global · documentación técnica"
            }
          ]
        },
        {
          "id": "practices",
          "name": "Prácticas de trabajo",
          "icon": "workflow",
          "description": "Organización del trabajo, validación funcional y soporte técnico.",
          "items": [
            "Scrum",
            "QA funcional",
            "Soporte N2/N3"
          ],
          "references": [
            {
              "href": "#experience-3",
              "label": "SEC · requerimientos y pruebas funcionales"
            }
          ]
        }
      ]
    },
    projects: {
      overline: "01 · Proyectos",
      title: "Proyectos destacados",
      lead:
        "Desarrollo web, control de activos y automatización. Explora cada proyecto para conocer el problema, mi participación y el resultado.",
      labels: {
        project: "Proyecto",
        visitWebsite: "Visitar sitio",
        details: "Ver caso de estudio",
        solution: "Solución",
        participation: "Mi participación",
        result: "Resultado",
        illustration: "Ilustración del proyecto",
        image: "Vista del proyecto",
        more: "Ver más proyectos",
        less: "Ver menos proyectos",
        repository: "Ver código",
        tech: "Tecnologías",
        features: "Funcionalidades",
        problem: "Problema resuelto",
        impact: "Impacto",
      },
      list: [
        {
          name: "Página Web Corporativa Vincco",
          id: "vincco-website",
          featured: true,
          summary: "Sitio corporativo para fortalecer la presencia digital de Vincco.",
          participation: "Diseño y desarrollo del sitio web corporativo.",
          website: "https://vincco.com/",
          alternateWebsite: "https://vincco.mx/",
          repository: "https://github.com/SkyLBoy/Vincco_pagina_actu-main",
          subtitle: "Centro de Contacto",
          desc: "Diseño y desarrollo de sitio web corporativo enfocado en fortalecer la presencia digital de la empresa y mejorar su imagen institucional.",
          tech: ["HTML", "CSS", "JavaScript","React"],
          features: [
            "Diseño corporativo coherente con la marca",
            "Experiencia de usuario optimizada",
            "Adaptabilidad móvil (Responsive)",
            "Optimización visual y de tiempos de carga",
          ],
          problem:
            "La empresa carecía de una presencia digital sólida que comunicara su propuesta de valor como centro de contacto.",
          impact:
            "Imagen institucional renovada y canal digital alineado al posicionamiento comercial.",
        },
        {
          name: "Sistema de Inventario SEC",
          id: "sec-inventory",
          featured: true,
          summary: "Plataforma para registrar, consultar y controlar activos tecnológicos.",
          participation: "Desarrollo de la plataforma de administración y control de activos tecnológicos.",
          subtitle: "Secretaría de Educación y Cultura",
          desc: "Desarrollo de plataforma para administración y control de activos tecnológicos del Departamento de Informática.",
          tech: ["PHP", "SQL", "JavaScript"],
          features: [
            "Registro centralizado de activos",
            "Gestión de inventario y movimientos",
            "Consultas y reportes operativos",
            "Administración de información sensible",
          ],
          problem:
            "Control manual y disperso de activos tecnológicos sin trazabilidad ni reportes confiables.",
          impact:
            "Trazabilidad completa de equipos, reducción de errores y reportes inmediatos para la jefatura.",
        },
        {
          name: "Sistema de Inventario Vincco",
          id: "vincco-inventory",
          featured: false,
          summary: "Sistema interno para controlar inventario, movimientos y permisos.",
          participation: "Desarrollo del sistema empresarial de control y seguimiento de inventario.",
          subtitle: "Plataforma empresarial interna",
          desc: "Desarrollo de sistema empresarial para control y seguimiento de inventario, con módulos de roles, movimientos y alertas.",
          tech: ["PHP", "SQL", "JavaScript"],
          features: [
            "Gestión de activos por categoría",
            "Control de movimientos y stock",
            "Seguimiento operativo en tiempo real",
            "Sistema de roles y permisos",
          ],
          problem:
            "Falta de visibilidad y control sobre el inventario operativo de la empresa.",
          impact:
            "Operación más ordenada, decisiones basadas en datos y reducción de pérdidas de inventario.",
        },
        {
          name: "Generador Automático de Presentaciones",
          id: "presentation-generator",
          featured: true,
          summary: "Herramienta en Python para generar presentaciones corporativas con plantillas.",
          participation: "Desarrollo de la herramienta interna en Python para automatizar la creación de presentaciones.",
          subtitle: "Automatización corporativa",
          desc: "Herramienta interna desarrollada en Python para automatizar la creación de presentaciones corporativas estandarizadas.",
          tech: ["Python", "Automatización", "python-pptx"],
          features: [
            "Generación automática de diapositivas",
            "Estandarización visual corporativa",
            "Plantillas configurables",
            "Reducción de trabajo manual",
          ],
          problem:
            "Tiempo excesivo del equipo elaborando presentaciones manualmente y con formato inconsistente.",
          impact:
            "Ahorro significativo de horas operativas y consistencia visual garantizada.",
        },
        {
          name: "Generador de Documentación Técnica",
          id: "documentation-generator",
          featured: false,
          summary: "Sistema en Python para generar documentación técnica estandarizada.",
          participation: "Desarrollo del sistema en Python para generar documentación técnica empresarial.",
          subtitle: "Automatización documental",
          desc: "Sistema en Python orientado a generar documentación técnica empresarial de forma automática.",
          tech: ["Python", "Plantillas", "Automatización"],
          features: [
            "Generación de manuales automática",
            "Procedimientos estandarizados",
            "Documentación empresarial replicable",
            "Reducción de errores humanos",
          ],
          problem:
            "Documentación técnica dispersa, lenta de producir y con formatos heterogéneos.",
          impact:
            "Documentación uniforme, replicable y entregada en una fracción del tiempo original.",
        },
      ],
    },
    experience: {
      overline: "03 · Trayectoria",
      title: "Experiencia profesional",
      lead:
        "Recorrido en empresas públicas y privadas, combinando desarrollo de software y operación de infraestructura tecnológica.",
      present: "Actualidad",
      currentJob: "Trabajo actual",
      focusLabel: "Áreas de enfoque",
      achievementsLabel: "Más responsabilidades",
      highlightsLabel: "Responsabilidades principales",
      jobs: [
        {
          current: true,
          role: "Ingeniero de Tecnología de Software",
          summary: "Redes e infraestructura empresarial, con desarrollo y automatización de herramientas internas.",
          primaryIndices: [0,5],
          company: "Interlogic Global",
          logo: "/assets/interlogic-logo-transparent.png",
          period: "Octubre 2026 — Actualidad",
          icon: "code",
          achievements: [
            "Configuración y administración de redes empresariales y equipos de conectividad.",
            "Diagnóstico y resolución de incidentes de red, conectividad y comunicación entre sistemas.",
            "Configuración de VLANs y segmentación de redes para organizar y controlar el tráfico.",
            "Soporte y mantenimiento de infraestructura tecnológica para la continuidad de los servicios.",
            "Análisis de requerimientos, desarrollo y mantenimiento de soluciones de software para procesos internos.",
            "Automatización de tareas operativas mediante scripts en Python y PowerShell.",
            "Pruebas funcionales, diagnóstico de errores y resolución de problemas de software.",
            "Elaboración de diagramas de red, procedimientos y documentación técnica.",
          ],
        },
        {
          role: "Ingeniero Avanzado de Soporte Técnico",
          summary: "Soporte técnico avanzado y mantenimiento de infraestructura corporativa.",
          primaryIndices: [1,2],
          company: "Vincco - CT Internacional",
          logo: "/assets/logo-ct.png",
          secondaryLogo: "/assets/logo_grande_vincco.png",
          period: "Mayo 2025 — Octubre 2026",
          location: "Hermosillo, Sonora",
          icon: "server",
          achievements: [
            "Soporte técnico avanzado presencial y remoto garantizando continuidad operativa.",
            "Configuración, administración y mantenimiento de infraestructura de red corporativa (Aruba y Fortinet).",
            "Planes de mantenimiento preventivo y correctivo de hardware y sistemas críticos de cómputo.",
            "Elaboración de documentación técnica y participación activa en despliegue de nuevos proyectos de infraestructura.",
          ],
        },
        {
          role: "Encargado del Área de IT",
          summary: "Administración del área de TI y soporte a la operación interna.",
          primaryIndices: [0,3],
          company: "Vincco",
          logo: "/assets/logo_grande_vincco.png",
          period: "2025",
          location: "Hermosillo, Sonora",
          icon: "network",
          achievements: [
            "Administración y mantenimiento de redes corporativas.",
            "Soporte técnico y mantenimiento preventivo de equipos.",
            "Gestión de infraestructura IT y servidores internos.",
            "Implementación de políticas de seguridad informática.",
          ],
        },
        {
          role: "Desarrollador de Sistemas — Prácticas Profesionales",
          summary: "Desarrollo de un sistema de inventario durante las prácticas profesionales.",
          primaryIndices: [0,1],
          company: "Secretaría de Educación y Cultura (SEC)",
          period: "Jul 2024 — Ene 2025",
          location: "Hermosillo, Sonora",
          icon: "code",
          achievements: [
            "Desarrollo e implementación de sistema web integral de control de inventario.",
            "Levantamiento de requerimientos, diseño de base de datos y pruebas funcionales de QA.",
            "Soporte y capacitación técnica a usuarios finales.",
            "Optimización de procesos de control de activos tecnológicos.",
          ],
        },
      ],
    },
    achievements: {
      overline: "06 · Logros",
      title: "Logros profesionales",
      lead: "Resultados tangibles entregados en proyectos reales.",
      items: [
        { icon: "rocket", text: "Desarrollo de soluciones empresariales en producción." },
        { icon: "server", text: "Implementación de infraestructura tecnológica operativa." },
        { icon: "network", text: "Configuración de redes empresariales con equipos Aruba y Fortinet." },
        { icon: "bot", text: "Automatización de procesos operativos repetitivos." },
        { icon: "boxes", text: "Desarrollo de sistemas de inventario en dos empresas." },
        { icon: "file", text: "Generación automatizada de documentación técnica." },
        { icon: "users", text: "Participación en proyectos tecnológicos empresariales completos." },
        { icon: "trending", text: "Optimización de procesos mediante software a la medida." },
      ],
    },
    tech: {
      overline: "07 · Stack tecnológico",
      title: "Tecnologías con las que trabajo",
      lead: "Un stack pragmático, orientado a productividad y entornos empresariales.",
      groups: {
        Desarrollo: ["React", "JavaScript", "PHP", "HTML", "CSS"],
        Automatización: ["Python", "PowerShell"],
        Infraestructura: ["Aruba", "Fortinet", "TCP/IP", "VLANs"],
        "Bases de Datos": ["SQL", "PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
        Herramientas: ["Git", "GitHub"],
      },
    },
    value: {
      overline: "08 · Valor profesional",
      title: "¿Por qué trabajar conmigo?",
      lead:
        "Un perfil que cubre el ciclo completo: desde el código hasta la red, sin necesidad de traductores entre áreas.",
      points: [
        "Formación profesional como Ingeniero en Software.",
        "Experiencia combinada en desarrollo e infraestructura.",
        "Capacidad para resolver problemas complejos en producción.",
        "Experiencia real en automatización de procesos.",
        "Experiencia desarrollando soluciones empresariales completas.",
        "Capacidad de documentación y transferencia de conocimiento.",
        "Adaptabilidad tecnológica entre stacks y dominios.",
        "Aprendizaje continuo y mentalidad de mejora continua.",
        "Orientación a resultados medibles y al usuario final.",
      ],
    },
    contact: {
      overline: "05 · Contacto",
      title: "Conversemos",
      lead:
        "Disponible para oportunidades en infraestructura TI, redes empresariales y automatización, tanto presenciales como remotas.",
      emailLabel: "Email",
      phoneLabel: "Teléfono",
      locationLabel: "Ubicación",
      location: "Hermosillo, Sonora, MX",
      sendEmail: "Enviar correo",
      copy: "Copiar",
      copied: "Copiado",
      copying: "Copiando…",
      copySuccess: "Correo copiado al portapapeles.",
      copyError: "No se pudo copiar. Selecciona el correo y cópialo manualmente.",
      copyEmail: "Copiar correo",
      statusLabel: "Disponibilidad",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      built: "Construido con React, Tailwind y Framer Motion.",
    },
  },
  en: {
    nav: {
      about: "About",
      specializations: "Specializations",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      downloadCV: "Download CV",
      menu: "Menu",
      home: "Go to home",
      switchLanguage: "Cambiar a español",
      lightTheme: "Use light theme",
      darkTheme: "Use dark theme",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      overline: "Software Engineer · IT Infrastructure",
      greeting: "Hi, I'm",
      name: "Sebastián",
      title: "IT infrastructure and automation",
      tagline:
        "Software Development · Enterprise Networks · Automation · IT Infrastructure · Technical Documentation",
      description:
        "I'm a Software Engineer. I manage enterprise networks and develop tools that simplify technology operations.",
      ctaCV: "Download CV",
      ctaContact: "Get in touch",
      ctaProjects: "View projects",
      location: "Hermosillo, Sonora · MX",
      status: "Open to opportunities",
      currentRole: "Currently",
      currentCompany: "Software Technology Engineer at Interlogic Global",
    },
    about: {
      overline: "02 · Professional profile",
      title: "About me",
      strengths: ["Combined experience in software development and infrastructure.", "Technical documentation and knowledge transfer.", "Problem solving focused on operations and end users."],
      lead:
        "Software Engineer with hands-on experience in IT infrastructure, software development, enterprise networks, process automation and technical documentation.",
      paragraph:
        "I have contributed to enterprise projects related to web development, inventory systems, IT infrastructure administration, documentation automation and specialized support. I'm passionate about technology, problem solving and continuous improvement through innovative tools.",
      stats: [
        { value: "2+", label: "Years of professional experience" },
        { value: "10+", label: "Enterprise projects delivered" },
        { value: "3", label: "Companies: public and private" },
        { value: "B2", label: "English (Intermediate)" },
      ],
      facts: {
        title: "Key information",
        items: [
          { k: "Name", v: "Sebastián Calderón López" },
          { k: "Current role", v: "Software Technology Engineer" },
          { k: "Company", v: "Interlogic Global" },
          { k: "Education", v: "B.Sc. Software Eng. · UES" },
          { k: "Location", v: "Hermosillo, Sonora, MX" },
          { k: "Languages", v: "Spanish · English" },
        ],
      },
    },
    spec: {
      overline: "02 · Areas of specialization",
      title: "Four disciplines, one profile",
      lead:
        "Hybrid operation between software development and enterprise IT infrastructure.",
      cards: [
        {
          tag: "01",
          title: "Software Development",
          desc: "Design and development of enterprise solutions focused on optimizing internal processes and improving productivity.",
          tech: ["JavaScript", "React", "PHP", "HTML", "CSS", "SQL"],
        },
        {
          tag: "02",
          title: "IT Infrastructure",
          desc: "Implementation, administration and support of enterprise infrastructure and critical computing services.",
          tech: ["Aruba", "Fortinet", "VLANs", "TCP/IP", "LAN Networks"],
        },
        {
          tag: "03",
          title: "Automation",
          desc: "Automation of repetitive tasks to reduce operational time and improve team efficiency.",
          tech: ["Python", "PowerShell"],
        },
        {
          tag: "04",
          title: "Technical Documentation",
          desc: "Creation of professional documentation for enterprise projects and knowledge transfer.",
          tech: ["Manuals", "Procedures", "Diagrams", "Reports"],
        },
      ],
    },
    skills: {
      "overline": "04 · Specializations",
      "title": "Specializations and technologies",
      "lead": "Networks and infrastructure as my main focus, complemented by development, automation and technical documentation.",
      "evidenceLabel": "In practice",
      "groups": [
        {
          "id": "infrastructure",
          "name": "Infrastructure and networks",
          "icon": "network",
          "description": "Connectivity, segmentation and enterprise network operations.",
          "items": [
            "Aruba",
            "Fortinet",
            "TCP/IP",
            "VLANs and segmentation"
          ],
          "references": [
            {
              "href": "#experience-1",
              "label": "CT Internacional · Aruba and Fortinet networks"
            }
          ]
        },
        {
          "id": "automation",
          "name": "Automation",
          "icon": "bot",
          "description": "Tools and scripts for operational tasks and document generation.",
          "items": [
            "Python",
            "PowerShell"
          ],
          "references": [
            {
              "href": "#project-presentation-generator",
              "label": "Automatic Presentation Generator"
            },
            {
              "href": "#experience-0",
              "label": "Interlogic Global · operational scripts"
            }
          ]
        },
        {
          "id": "development",
          "name": "Software development",
          "icon": "code",
          "description": "Web applications and solutions for internal processes.",
          "items": [
            "React",
            "JavaScript",
            "PHP",
            "HTML and CSS",
            "Git and GitHub"
          ],
          "references": [
            {
              "href": "#project-vincco-website",
              "label": "Vincco Corporate Website"
            }
          ]
        },
        {
          "id": "databases",
          "name": "Databases",
          "icon": "database",
          "description": "Data modeling and queries for enterprise applications.",
          "items": [
            "SQL",
            "PostgreSQL",
            "MySQL",
            "SQL Server",
            "MongoDB"
          ],
          "references": [
            {
              "href": "#project-sec-inventory",
              "label": "SEC Inventory · PHP and SQL"
            }
          ]
        },
        {
          "id": "documentation",
          "name": "Technical documentation",
          "icon": "file",
          "description": "Information for operating, maintaining and supporting systems.",
          "items": [
            "Manuals and procedures",
            "Network diagrams",
            "Technical reports"
          ],
          "references": [
            {
              "href": "#experience-0",
              "label": "Interlogic Global · technical documentation"
            }
          ]
        },
        {
          "id": "practices",
          "name": "Work practices",
          "icon": "workflow",
          "description": "Work organization, functional validation and technical support.",
          "items": [
            "Scrum",
            "Functional QA",
            "N2/N3 support"
          ],
          "references": [
            {
              "href": "#experience-3",
              "label": "SEC · requirements and functional testing"
            }
          ]
        }
      ]
    },
    projects: {
      overline: "01 · Projects",
      title: "Featured projects",
      lead:
        "Web development, asset management and automation. Explore each project to learn about the problem, my contribution and the outcome.",
      labels: {
        project: "Project",
        visitWebsite: "Visit website",
        details: "View case study",
        solution: "Solution",
        participation: "My contribution",
        result: "Outcome",
        illustration: "Project illustration",
        image: "Project view",
        more: "View more projects",
        less: "View fewer projects",
        repository: "View code",
        tech: "Stack",
        features: "Features",
        problem: "Problem solved",
        impact: "Impact",
      },
      list: [
        {
          name: "Vincco Corporate Website",
          id: "vincco-website",
          featured: true,
          summary: "Corporate website to strengthen Vincco’s digital presence.",
          participation: "Design and development of the corporate website.",
          website: "https://vincco.com/",
          alternateWebsite: "https://vincco.mx/",
          repository: "https://github.com/SkyLBoy/Vincco_pagina_actu-main",
          subtitle: "Contact Center",
          desc: "Design and development of a corporate website focused on strengthening the company's digital presence and improving its institutional image.",
          tech: ["HTML", "CSS", "JavaScript"],
          features: [
            "Corporate design aligned with the brand",
            "Optimized user experience",
            "Mobile responsiveness",
            "Visual and performance optimization",
          ],
          problem:
            "The company lacked a solid digital presence that communicated its value proposition as a contact center.",
          impact:
            "Renewed institutional image and digital channel aligned with the commercial positioning.",
        },
        {
          name: "SEC Inventory System",
          id: "sec-inventory",
          featured: true,
          summary: "Platform for registering, querying and managing IT assets.",
          participation: "Development of the IT asset administration and management platform.",
          subtitle: "Ministry of Education and Culture",
          desc: "Platform development for the administration and control of IT assets at the IT Department.",
          tech: ["PHP", "SQL", "JavaScript"],
          features: [
            "Centralized asset registry",
            "Inventory and movement management",
            "Operational queries and reports",
            "Sensitive information administration",
          ],
          problem:
            "Manual and scattered control of IT assets without traceability or reliable reporting.",
          impact:
            "Full equipment traceability, error reduction and instant reports for management.",
        },
        {
          name: "Vincco Inventory System",
          id: "vincco-inventory",
          featured: false,
          summary: "Internal system for managing inventory, movements and permissions.",
          participation: "Development of the enterprise inventory control and tracking system.",
          subtitle: "Internal enterprise platform",
          desc: "Enterprise system for inventory control and tracking, with role, movement and alert modules.",
          tech: ["PHP", "SQL", "JavaScript"],
          features: [
            "Asset management by category",
            "Movement and stock control",
            "Real-time operational tracking",
            "Role and permission system",
          ],
          problem:
            "Lack of visibility and control over the company's operational inventory.",
          impact:
            "More structured operations, data-driven decisions and reduced inventory loss.",
        },
        {
          name: "Automatic Presentation Generator",
          id: "presentation-generator",
          featured: true,
          summary: "Python tool for generating corporate presentations from templates.",
          participation: "Development of the internal Python tool for automated presentation creation.",
          subtitle: "Corporate automation",
          desc: "Internal Python tool to automate the creation of standardized corporate presentations.",
          tech: ["Python", "Automation", "python-pptx"],
          features: [
            "Automatic slide generation",
            "Corporate visual standardization",
            "Configurable templates",
            "Reduction of manual work",
          ],
          problem:
            "Excessive time spent producing presentations manually with inconsistent formatting.",
          impact:
            "Significant savings of operational hours and guaranteed visual consistency.",
        },
        {
          name: "Technical Documentation Generator",
          id: "documentation-generator",
          featured: false,
          summary: "Python system for generating standardized technical documentation.",
          participation: "Development of the Python system for generating enterprise technical documentation.",
          subtitle: "Document automation",
          desc: "Python-based system designed to automatically generate enterprise technical documentation.",
          tech: ["Python", "Templates", "Automation"],
          features: [
            "Automatic manual generation",
            "Standardized procedures",
            "Replicable enterprise documentation",
            "Reduction of human errors",
          ],
          problem:
            "Technical documentation was scattered, slow to produce and inconsistent in format.",
          impact:
            "Uniform, replicable documentation delivered in a fraction of the original time.",
        },
      ],
    },
    experience: {
      overline: "03 · Background",
      title: "Professional experience",
      lead:
        "Path through public and private companies, combining software development with IT infrastructure operations.",
      present: "Present",
      currentJob: "Current role",
      focusLabel: "Focus areas",
      achievementsLabel: "More responsibilities",
      highlightsLabel: "Main responsibilities",
      jobs: [
        {
          current: true,
          role: "Software Technology Engineer",
          summary: "Enterprise networks and infrastructure, alongside development and automation of internal tools.",
          primaryIndices: [0,5],
          company: "Interlogic Global",
          logo: "/assets/interlogic-logo-transparent.png",
          period: "October 2026 — Present",
          icon: "code",
          achievements: [
            "Configuration and administration of enterprise networks and connectivity equipment.",
            "Diagnosis and resolution of network, connectivity and system communication incidents.",
            "VLAN configuration and network segmentation to organize and control traffic.",
            "Support and maintenance of IT infrastructure to maintain service continuity.",
            "Requirements analysis, development and maintenance of software solutions for internal processes.",
            "Automation of operational tasks using Python and PowerShell scripts.",
            "Functional testing, error diagnosis and software troubleshooting.",
            "Creation of network diagrams, procedures and technical documentation.",
          ],
        },
        {
          role: "Advanced Technical Support Engineer",
          summary: "Advanced technical support and maintenance of corporate infrastructure.",
          primaryIndices: [1,2],
          company: "CT Internacional",
          logo: "/assets/logo-ct.png",
          secondaryLogo: "/assets/logo_grande_vincco.png",
          period: "May 2025 — October 2026",
          location: "Hermosillo, Sonora",
          icon: "server",
          achievements: [
            "Advanced on-site and remote technical support ensuring operational continuity.",
            "Configuration, administration and maintenance of corporate network infrastructure (Aruba & Fortinet).",
            "Preventive and corrective maintenance of hardware and critical computing systems.",
            "Detailed technical documentation and active participation in new infrastructure rollouts.",
          ],
        },
        {
          role: "IT Lead",
          summary: "IT area administration and support for internal operations.",
          primaryIndices: [0,3],
          company: "Vincco",
          logo: "/assets/logo_grande_vincco.png",
          period: "2025",
          location: "Hermosillo, Sonora",
          icon: "network",
          achievements: [
            "Administration and maintenance of corporate networks.",
            "Technical support and preventive equipment maintenance.",
            "IT infrastructure and internal server management.",
            "Implementation of information security policies.",
          ],
        },
        {
          role: "Systems Developer — Professional Internship",
          summary: "Development of an inventory system during the professional internship.",
          primaryIndices: [0,1],
          company: "Ministry of Education and Culture (SEC)",
          period: "Jul 2024 — Jan 2025",
          location: "Hermosillo, Sonora",
          icon: "code",
          achievements: [
            "Development and deployment of a comprehensive web-based inventory control system.",
            "Requirements gathering, database design and functional QA testing.",
            "Technical support and training for end users.",
            "Optimization of IT asset control processes.",
          ],
        },
      ],
    },
    achievements: {
      overline: "06 · Highlights",
      title: "Professional achievements",
      lead: "Tangible results delivered in real projects.",
      items: [
        { icon: "rocket", text: "Development of enterprise solutions running in production." },
        { icon: "server", text: "Deployment of operational IT infrastructure." },
        { icon: "network", text: "Configuration of corporate networks with Aruba and Fortinet equipment." },
        { icon: "bot", text: "Automation of repetitive operational processes." },
        { icon: "boxes", text: "Development of inventory systems for two companies." },
        { icon: "file", text: "Automated generation of technical documentation." },
        { icon: "users", text: "Participation in full enterprise technology projects." },
        { icon: "trending", text: "Process optimization through tailor-made software." },
      ],
    },
    tech: {
      overline: "07 · Tech stack",
      title: "Technologies I work with",
      lead: "A pragmatic stack oriented to productivity and enterprise environments.",
      groups: {
        Development: ["React", "JavaScript", "PHP", "HTML", "CSS"],
        Automation: ["Python", "PowerShell"],
        Infrastructure: ["Aruba", "Fortinet", "TCP/IP", "VLANs"],
        Databases: ["SQL", "PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
        Tools: ["Git", "GitHub"],
      },
    },
    value: {
      overline: "08 · Professional value",
      title: "Why work with me?",
      lead:
        "A profile that covers the full cycle: from code to network, with no translators between areas.",
      points: [
        "Formal training as a Software Engineer.",
        "Combined experience in development and infrastructure.",
        "Ability to solve complex problems in production.",
        "Real experience in process automation.",
        "Experience developing complete enterprise solutions.",
        "Strong documentation and knowledge-transfer skills.",
        "Technological adaptability across stacks and domains.",
        "Continuous learning and improvement mindset.",
        "Outcome-driven, focused on the end user.",
      ],
    },
    contact: {
      overline: "05 · Contact",
      title: "Let's talk",
      lead:
        "Available for opportunities in IT infrastructure, enterprise networks and automation, both on-site and remote.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      location: "Hermosillo, Sonora, MX",
      sendEmail: "Send email",
      copy: "Copy",
      copied: "Copied",
      copying: "Copying…",
      copySuccess: "Email copied to clipboard.",
      copyError: "Could not copy. Select the email and copy it manually.",
      copyEmail: "Copy email",
      statusLabel: "Availability",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with React, Tailwind and Framer Motion.",
    },
  },
};
