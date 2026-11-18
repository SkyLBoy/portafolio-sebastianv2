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

## Imágenes reales de proyectos

Las tarjetas muestran las ilustraciones SVG existentes, identificadas como
“Ilustración del proyecto”. No se presentan como capturas reales.

Para incorporar capturas, agrega los archivos a `public/assets/projects/` y
actualiza el campo `image` de cada proyecto en `src/lib/projectMedia.js`:

| Proyecto | Archivo sugerido | Clave en `PROJECT_MEDIA` |
| --- | --- | --- |
| Página Web Corporativa Vincco | `vincco-web.webp` | `vincco-website` |
| Sistema de Inventario SEC | `inventario-sec.webp` | `sec-inventory` |
| Generador Automático de Presentaciones | `generador-presentaciones.webp` | `presentation-generator` |
| Sistema de Inventario Vincco | `inventario-vincco.webp` | `vincco-inventory` |
| Generador de Documentación Técnica | `generador-documentacion.webp` | `documentation-generator` |

Por ejemplo, configura `image: "/assets/projects/vincco-web.webp"` cuando ese
archivo exista. La captura sustituirá la ilustración y su etiqueta automáticamente.
Las imágenes se muestran en proporción 16:10; una captura de 1280 × 800 px es adecuada.
No es necesario modificar el componente ni duplicar la ruta entre idiomas.
