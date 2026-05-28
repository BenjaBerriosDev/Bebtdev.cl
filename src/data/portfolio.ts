export const brand = {
  name: "bebtdev",
  domain: "bebtdev.cl",
  url: "https://bebtdev.cl",
  meaning: "BEnjamin Berrios Troncoso DEV",
};

export const profile = {
  name: "Benjamín Berríos Troncoso",
  title: "Desarrollador Full Stack - Consultor SAP Junior",
  tagline:
    "Ingeniero en Computación e Informática (UNAB 2025). Desarrollador full stack y consultor SAP junior en entornos productivos.",
  location: "Santiago, Chile",
  email: "benjamin.berrios.troncoso@gmail.com",
  linkedin: "https://www.linkedin.com/in/benjam%C3%ADn-berr%C3%ADos-b35254310",
  github: "https://github.com/BenjaBerriosDev",
  languages: "Español nativo · Inglés (ver nivel en LinkedIn)",
  available: true,
  availabilityLabel: "Buscando trabajo activamente",
};

export const about = {
  paragraphs: [
    "Ingeniero en Computación e Informática titulado en la UNAB (2025). Consultor SAP Junior en TRAVERSO S.A., con foco en soporte productivo y desarrollo full stack.",
    "Lidero un equipo de 3 personas en la intranet corporativa. Experiencia con Next.js, React, .NET Core, SAP HANA, Workato, DI API y Crystal Reports.",
  ],
  highlights: [
    { label: "Experiencia laboral", value: "6 meses" },
    { label: "Proyectos destacados", value: "3" },
    { label: "Empresa actual", value: "TRAVERSO" },
    { label: "Ubicación", value: "Chile" },
  ],
  learningNow: ["Golang"],
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "SAP Business One",
    skills: [
      "Todos los módulos",
      "Service Layer",
      "DI API",
      "SAP HANA",
      "Workato",
      "Crystal Reports",
      "Soporte en producción",
    ],
  },
  {
    name: "Full Stack",
    skills: [
      "C# · .NET Core 8",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Node.js",
      "Python",
    ],
  },
  {
    name: "Bases de Datos",
    skills: ["SQL Server", "SAP HANA", "Consultas SQL", "Resolución de incidencias"],
  },
  {
    name: "Herramientas",
    skills: ["Git / GitHub", "Azure AD / Entra ID", "Electron", "Metodologías ágiles"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Intranet Corporativa — TRAVERSO S.A.",
    description:
      "Plataforma interna con Microsoft Entra ID, RBAC e integración con SAP B1 Service Layer. Lidero un equipo de 3 personas en su desarrollo.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "NextAuth.js",
      "SAP B1",
      "SQL Server",
      ".NET Core",
    ],
    highlights: [
      "Módulo de logística en producción",
      "Módulo de ventas en desarrollo activo",
      "Integración con SAP Service Layer y API .NET (DocumentosAPI)",
      "Liderazgo de equipo de 3 desarrolladores",
    ],
  },
  {
    title: "Last.fm Wrapped — App de escritorio",
    description:
      "Proyecto personal: aplicación de escritorio inspirada en Spotify Wrapped con datos de Last.fm en tiempo real. Incluye instalador para distribución.",
    tags: ["Electron", "React", "TypeScript", "Vite", "Recharts", "Last.fm API"],
    highlights: [
      "Wrapped interactivo con top artistas, canciones y álbumes",
      "Actualización en vivo del track en reproducción",
      "Exportación de resumen a imagen",
      "Instalador multiplataforma con electron-builder",
    ],
  },
  {
    title: "TuDecant.cl — Tienda de decants",
    description:
      "Proyecto propio en desarrollo temprano: e-commerce de decants de perfumes. Frontend funcional en fase inicial, sin sitio publicado aún.",
    tags: ["React", "TypeScript", "Node.js", "E-commerce"],
    highlights: [
      "Marca registrada: TuDecant.cl",
      "Frontend en desarrollo activo",
      "Arquitectura pensada para catálogo y venta online",
      "Proyecto personal desde cero",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};

export const experience: Experience[] = [
  {
    role: "Consultor SAP Junior",
    company: "TRAVERSO S.A.",
    period: "Dic 2025 — Presente",
    description:
      "Soporte y mantenimiento de SAP Business One y SAP HANA en producción, resolución de incidencias en SQL Server y desarrollo de la intranet corporativa.",
    achievements: [
      "Liderazgo de equipo de 3 personas en la intranet corporativa",
      "Soporte SAP B1 y HANA en ambiente productivo",
      "Integración Service Layer, Workato, DI API y Crystal Reports",
    ],
  },
];

export const education = {
  degree: "Ingeniero en Computación e Informática",
  institution: "Universidad Andrés Bello (UNAB)",
  year: "2025",
};

export const certificationsLinkedIn =
  "https://www.linkedin.com/in/benjam%C3%ADn-berr%C3%ADos-b35254310/details/certifications/";

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];
