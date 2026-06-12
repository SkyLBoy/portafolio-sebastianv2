# Sebastián Calderón López — Portfolio v2.0

Portfolio profesional híbrido: Ingeniero en Software + Especialista en Infraestructura Tecnológica.

> Reconstrucción premium del portafolio personal — modo oscuro/claro, bilingüe ES/EN, animaciones suaves, diseño corporativo.

---

## Stack

- **React 19** (Create React App + CRACO para alias `@`)
- **Tailwind CSS 3** (theming con CSS variables)
- **Framer Motion** (animaciones)
- **Lucide React** (iconografía)
- Tipografías: **Cabinet Grotesk** (Fontshare) · **IBM Plex Sans** · **JetBrains Mono** (Google Fonts)

Sin backend. 100% estático, listo para Vercel / Netlify / Cloudflare Pages / GitHub Pages.

---

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

## Instalación local

```bash
# 1) Instalar dependencias
yarn install
# o: npm install

# 2) Levantar en modo desarrollo
yarn start
# Abre http://localhost:3000

# 3) Build de producción
yarn build
# Genera /build listo para desplegar
```

> ⚠️ Requiere Node 18+ (recomendado 20+).

---

## Personalización

### 1. Datos personales

Edita **`src/lib/personal.js`**:

```js
export const PERSONAL = {
  name: "Sebastián Calderón López",
  email: "sebastiancalderonlopez@gmail.com",
  phone: "+52 662 496 4675",
  linkedin: "https://www.linkedin.com/in/...",
  github: "https://github.com/SkyLBoy",
  cvUrl: "URL_DEL_PDF_DE_TU_CV",
  photoUrl: "URL_DE_TU_FOTO",
};
```

### 2. Contenido (textos / proyectos / experiencia)

Edita **`src/lib/translations.js`**. Tiene dos bloques: `es` y `en` con la misma estructura. Cambios aplican a ambos idiomas.

### 3. Colores

Edita las CSS variables en **`src/index.css`** dentro de `:root` (claro) y `.dark` (oscuro). El color de acento se controla con `--accent`.

### 4. CV PDF

Sube tu PDF a un hosting estático (mismo repo en `public/`, Cloudinary, S3, etc.) y reemplaza `cvUrl` en `personal.js`. Si lo pones en `public/CV.pdf`, usa `cvUrl: "/CV.pdf"`.

### 5. Foto de perfil

Igual: súbela a `public/profile.png` y usa `photoUrl: "/profile.png"`, o usa un CDN.

---

## Deploy a Vercel

```bash
# Opción A: vía CLI
npm i -g vercel
vercel

# Opción B: importar el repo de GitHub desde vercel.com/new
```

Vercel detecta CRA automáticamente. No requiere configuración adicional.

Para SPA puro asegura que el output sea `build/` (default de CRA).

---

## Deploy a Netlify

```bash
# Build command:  yarn build
# Publish dir:    build
```

---

## Funcionalidades

- ✅ Modo oscuro / claro con persistencia (`localStorage`).
- ✅ Bilingüe ES / EN con persistencia.
- ✅ 10 secciones: Hero, Sobre Mí, Áreas de Especialización (4), Habilidades, 5 Proyectos con mockups SVG custom, Experiencia (timeline), Logros, Stack Tecnológico, Valor Profesional, Contacto.
- ✅ Animaciones suaves con Framer Motion (respeta `prefers-reduced-motion`).
- ✅ Responsive completo (mobile / tablet / desktop).
- ✅ Accesibilidad básica: `aria-label`, contraste AA, focus states.
- ✅ SEO: meta tags, Open Graph, lang dinámico.
- ✅ Tipografía premium (Cabinet Grotesk + IBM Plex + JetBrains Mono).
- ✅ Todos los elementos interactivos con `data-testid` para testing.

---

## Licencia

Uso personal de Sebastián Calderón López. Diseño y código pueden ser reutilizados como referencia.
