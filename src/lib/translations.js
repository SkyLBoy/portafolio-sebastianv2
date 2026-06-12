export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      specializations: "Especialización",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
      downloadCV: "Descargar CV",
      menu: "Menú",
    },
    hero: {
      overline: "Software Engineer · IT Infrastructure",
      greeting: "Hola, soy",
      name: "Sebastián",
      title: "Ingeniero en Software especializado en Infraestructura Tecnológica",
      tagline:
        "Desarrollo de Software · Redes Empresariales · Automatización · Infraestructura TI · Documentación Técnica",
      description:
        "Profesional de Tecnologías de la Información con experiencia en desarrollo de software, administración de infraestructura tecnológica, redes empresariales, automatización de procesos y documentación técnica. Especializado en crear soluciones empresariales, optimizar procesos y resolver problemas tecnológicos complejos.",
      ctaCV: "Descargar CV",
      ctaContact: "Contactar",
      ctaProjects: "Ver proyectos",
      location: "Hermosillo, Sonora · MX",
      status: "Disponible para oportunidades",
      currentRole: "Actualmente",
      currentCompany: "Ingeniero de Software | Soporte en Vincco - CT Internacional",
    },
    about: {
      overline: "01 · Perfil profesional",
      title: "Sobre mí",
      lead:
        "Ingeniero en Software con experiencia práctica en infraestructura tecnológica, desarrollo de software, redes empresariales, automatización de procesos y documentación técnica.",
      paragraph:
        "He participado en proyectos empresariales relacionados con desarrollo web, sistemas de inventario, administración de infraestructura tecnológica, automatización documental y soporte especializado. Me apasiona la tecnología, la resolución de problemas y la mejora continua mediante herramientas innovadoras.",
      stats: [
        { value: "1+", label: "Años de experiencia profesional" },
        { value: "5+", label: "Proyectos empresariales entregados" },
        { value: "2", label: "Empresas: pública y privada" },
        { value: "B2", label: "Inglés (Intermedio)" },
      ],
      facts: {
        title: "Información clave",
        items: [
          { k: "Nombre", v: "Sebastián Calderón López" },
          { k: "Rol actual", v: "Ing. en Software | Soporte en Vincco - CT Internacional" },
          { k: "Empresa", v: "CT Internacional" },
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
      overline: "03 · Stack técnico",
      title: "Habilidades técnicas",
      lead:
        "Conjunto de tecnologías que utilizo en proyectos empresariales reales",
      groups: [
        {
          name: "Infraestructura",
          items: [
            "Aruba",
            "Fortinet",
            "VLANs",
            "TCP/IP",
            "Redes Empresariales",
            "Diagnóstico de Conectividad",
          ],
        },
        {
          name: "Automatización",
          items: [
            "Python",
            "PowerShell",
            "Automatización Documental",
            "Automatización de Reportes",
          ],
        },
        {
          name: "Desarrollo",
          items: ["React", "JavaScript", "PHP", "HTML", "CSS", "Git", "GitHub"],
        },
        {
          name: "Bases de Datos",
          items: ["SQL", "PostgreSQL", "MySQL", "SQL Server"],
        },
        {
          name: "Documentación",
          items: [
            "Manuales Técnicos",
            "Procedimientos",
            "Diagramas",
            "Reportes Técnicos",
          ],
        },
        {
          name: "Metodologías",
          items: ["Scrum", "QA Funcional", "Soporte N2 / N3"],
        },
      ],
    },
    projects: {
      overline: "04 · Casos de aplicación",
      title: "Proyectos empresariales",
      lead:
        "Soluciones reales entregadas en entornos productivos: desarrollo web corporativo, sistemas de inventario y automatización documental.",
      labels: {
        tech: "Tecnologías",
        features: "Funcionalidades",
        problem: "Problema resuelto",
        impact: "Impacto",
      },
      list: [
        {
          name: "Página Web Corporativa Vincco",
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
      overline: "05 · Trayectoria",
      title: "Experiencia profesional",
      lead:
        "Recorrido en empresas públicas y privadas, combinando desarrollo de software y operación de infraestructura tecnológica.",
      present: "Actualidad",
      achievementsLabel: "Responsabilidades & logros",
      jobs: [
        {
          role: "Ingeniero Avanzado de Soporte Técnico",
          company: "Vincco - CT Internacional",
          period: "May 2025 — Actualidad",
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
          company: "Vincco",
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
        "Bases de Datos": ["SQL", "PostgreSQL", "MySQL","MongoDB"],
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
      overline: "09 · Contacto",
      title: "Conversemos",
      lead:
        "Disponible para oportunidades de TI de nivel intermedio y avanzado, tanto presenciales como remotas.",
      emailLabel: "Email",
      phoneLabel: "Teléfono",
      locationLabel: "Ubicación",
      location: "Hermosillo, Sonora, MX",
      sendEmail: "Enviar correo",
      copy: "Copiar",
      copied: "Copiado",
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
    },
    hero: {
      overline: "Software Engineer · IT Infrastructure",
      greeting: "Hi, I'm",
      name: "Sebastián",
      title: "Software Engineer specialized in IT Infrastructure",
      tagline:
        "Software Development · Enterprise Networks · Automation · IT Infrastructure · Technical Documentation",
      description:
        "IT professional with hands-on experience in software development, IT infrastructure management, enterprise networks, process automation and technical documentation. Specialized in delivering enterprise solutions, optimizing processes and solving complex technology problems.",
      ctaCV: "Download CV",
      ctaContact: "Get in touch",
      ctaProjects: "View projects",
      location: "Hermosillo, Sonora · MX",
      status: "Open to opportunities",
      currentRole: "Currently",
      currentCompany: "Advanced Support Engineer at CT Internacional",
    },
    about: {
      overline: "01 · Professional profile",
      title: "About me",
      lead:
        "Software Engineer with hands-on experience in IT infrastructure, software development, enterprise networks, process automation and technical documentation.",
      paragraph:
        "I have contributed to enterprise projects related to web development, inventory systems, IT infrastructure administration, documentation automation and specialized support. I'm passionate about technology, problem solving and continuous improvement through innovative tools.",
      stats: [
        { value: "3+", label: "Years of professional experience" },
        { value: "5+", label: "Enterprise projects delivered" },
        { value: "2", label: "Companies: public and private" },
        { value: "B2", label: "English (Intermediate)" },
      ],
      facts: {
        title: "Key information",
        items: [
          { k: "Name", v: "Sebastián Calderón López" },
          { k: "Current role", v: "Advanced Support Engineer" },
          { k: "Company", v: "CT Internacional" },
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
      overline: "03 · Technical stack",
      title: "Technical skills",
      lead:
        "Technologies I use in real enterprise projects — no fake progress bars, no invented percentages.",
      groups: [
        {
          name: "Infrastructure",
          items: [
            "Aruba",
            "Fortinet",
            "VLANs",
            "TCP/IP",
            "Enterprise Networks",
            "Connectivity Troubleshooting",
          ],
        },
        {
          name: "Automation",
          items: [
            "Python",
            "PowerShell",
            "Document Automation",
            "Report Automation",
          ],
        },
        {
          name: "Development",
          items: ["React", "JavaScript", "PHP", "HTML", "CSS", "Git", "GitHub"],
        },
        {
          name: "Databases",
          items: ["SQL", "PostgreSQL", "MySQL", "SQL Server"],
        },
        {
          name: "Documentation",
          items: [
            "Technical Manuals",
            "Procedures",
            "Diagrams",
            "Technical Reports",
          ],
        },
        {
          name: "Methodologies",
          items: ["Scrum", "Functional QA", "N2 / N3 Support"],
        },
      ],
    },
    projects: {
      overline: "04 · Application cases",
      title: "Enterprise projects",
      lead:
        "Real solutions delivered in production environments: corporate web development, inventory systems and document automation.",
      labels: {
        tech: "Stack",
        features: "Features",
        problem: "Problem solved",
        impact: "Impact",
      },
      list: [
        {
          name: "Vincco Corporate Website",
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
      overline: "05 · Background",
      title: "Professional experience",
      lead:
        "Path through public and private companies, combining software development with IT infrastructure operations.",
      present: "Present",
      achievementsLabel: "Responsibilities & achievements",
      jobs: [
        {
          role: "Advanced Technical Support Engineer",
          company: "CT Internacional",
          period: "May 2025 — Present",
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
          company: "Vincco",
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
        Databases: ["SQL", "PostgreSQL", "MySQL"],
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
      overline: "09 · Contact",
      title: "Let's talk",
      lead:
        "Available for mid and senior IT opportunities, both on-site and remote.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      location: "Hermosillo, Sonora, MX",
      sendEmail: "Send email",
      copy: "Copy",
      copied: "Copied",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with React, Tailwind and Framer Motion.",
    },
  },
};
