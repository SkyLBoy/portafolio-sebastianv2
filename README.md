# Sebastián Calderón López — Portfolio v2.0

Portfolio profesional: Ingeniero en Software + Especialista en Infraestructura Tecnológica.
---

## Stack

- **React 19** (Create React App + CRACO para alias `@`)
- **Tailwind CSS 3** (theming con CSS variables)
- **Framer Motion** (animaciones)
- **Lucide React** (iconografía)
- Tipografías: **Cabinet Grotesk** (Fontshare) · **IBM Plex Sans** · **JetBrains Mono** (Google Fonts)

## Estructura

```
portfolio/
├── public/
│   └── index.html              # Meta tags SEO, Open Graph, fonts
├── src/
│   ├── App.js                  # Composición principal (providers + secciones)
│   ├── App.css
│   ├── index.css               # Tokens de tema (light/dark) + utilidades
│   ├── index.js
│   ├── contexts/
│   │   ├── ThemeContext.jsx    # Toggle dark/light + persistencia
│   │   └── LanguageContext.jsx # Toggle ES/EN + persistencia
│   ├── lib/
│   │   ├── personal.js         # Datos personales (email, CV, fotos, redes)
│   │   └── translations.js     # Strings ES/EN
│   └── components/portfolio/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Specializations.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── ProjectMocks.jsx    # SVG mockups custom para cada proyecto
│       ├── Experience.jsx      # Timeline vertical
│       ├── Achievements.jsx
│       ├── TechStack.jsx       # Nube tecnológica
│       ├── Value.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── craco.config.js
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
└── package.json
```

---

## Licencia

Uso personal de Sebastián Calderón López. Diseño y código pueden ser reutilizados como referencia.
