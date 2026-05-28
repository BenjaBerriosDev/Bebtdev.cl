export const brand = {
  name: "bebtdev",
  domain: "bebtdev.cl",
  url: "https://bebtdev.cl",
  meaning: "BEnjamin Berrios Troncoso DEV",
};

export const profile = {
  name: "Benjamín Berríos Troncoso",
  title: "Consultor SAP Junior / Desarrollador Full-Stack",
  tagline:
    "Ingeniero en Computación e Informática (UNAB 2025). Experiencia en SAP B1 y HANA productivo, integraciones y desarrollo web.",
  location: "Santiago, Chile",
  email: "benjamin.berrios.troncoso@gmail.com",
  linkedin: "https://www.linkedin.com/in/benjam%C3%ADn-berr%C3%ADos-b35254310",
  github: "https://github.com/BenjaBerriosDev",
  languages: "Español nativo · Inglés B2 · Portugués básico",
  available: true,
  availabilityLabel: "Buscando trabajo activamente",
};

export const about = {
  paragraphs: [
    "Ingeniero en Computación e Informática graduado en la UNAB (2025). Consultor SAP Junior y desarrollador full stack en TRAVERSO S.A., con foco en soporte productivo, integraciones y desarrollo de software.",
    "Parte del equipo de 3 personas en la intranet corporativa, con rol de liderazgo en desarrollo. Experiencia con Next.js, React, .NET Core, SAP HANA, Service Layer, Workato, DI API y Crystal Reports. Certificaciones en redes (CCNA), ciberseguridad (CyberOps), IA (Anthropic, IBM) y formación internacional.",
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
      "Plataforma interna con Microsoft Entra ID, RBAC híbrido (Azure AD + SQL) e integración con SAP B1 Service Layer. Desarrollo en equipo de 3 personas, con rol de liderazgo.",
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
      "Módulo de logística en producción (Devolución de Pallets)",
      "Módulo de ventas en desarrollo activo",
      "RBAC híbrido con Azure AD y SQL Server",
      "Migración de integraciones Workato a .NET Core",
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
    role: "Consultor SAP Junior / Desarrollador Full-Stack",
    company: "TRAVERSO S.A.",
    period: "Dic 2025 — Presente",
    description:
      "Soporte y mantenimiento de SAP Business One y SAP HANA en producción, resolución de incidencias en SQL Server y desarrollo de la intranet corporativa.",
    achievements: [
      "Parte del equipo de 3 personas en la intranet, con rol de liderazgo en desarrollo",
      "Soporte SAP B1 y HANA en ambiente productivo con resolución de incidencias",
      "Integración Service Layer, Workato, DI API y Crystal Reports",
      "RBAC híbrido Azure AD + SQL Server y trazabilidad de auditoría",
      "Migración de integraciones Workato hacia servicios .NET Core",
    ],
  },
];

export const education = {
  degree: "Ingeniero en Computación e Informática",
  institution: "Universidad Andrés Bello (UNAB)",
  period: "2025",
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
