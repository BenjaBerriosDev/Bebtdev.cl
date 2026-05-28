export const brand = {
  name: "bebtdev",
  domain: "bebtdev.cl",
  url: "https://bebtdev.cl",
  meaning: "Benjamín Berríos Troncoso · Desarrollo",
};

export const profile = {
  name: "Benjamín Berríos Troncoso",
  title: "Consultor SAP Junior · Desarrollo Web",
  tagline:
    "Desarrollo soluciones digitales y aplicaciones web mientras consulto SAP Business One en entornos empresariales reales.",
  location: "Santiago, Chile",
  email: "benjamin.berrios.troncoso@gmail.com",
  linkedin: "https://www.linkedin.com/in/benjam%C3%ADn-berr%C3%ADos-b35254310",
  available: true,
};

export const about = {
  paragraphs: [
    "Soy consultor SAP Junior en TRAVERSO S.A., donde combino consultoría en SAP Business One con desarrollo de soluciones web para la operación interna de la empresa.",
    "Trabajo con Next.js, React, TypeScript y .NET, integrando SAP Service Layer, SQL Server y Microsoft Entra ID para construir plataformas corporativas y aplicaciones interactivas.",
  ],
  highlights: [
    { label: "Experiencia laboral", value: "6 meses" },
    { label: "Proyectos destacados", value: "3" },
    { label: "Empresa actual", value: "TRAVERSO" },
    { label: "Ubicación", value: "Chile" },
  ],
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "SAP Business One",
    skills: ["Consultoría funcional", "Service Layer", "Query Manager", "Reportes", "Soporte a usuarios"],
  },
  {
    name: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Electron", "Vite"],
  },
  {
    name: "Backend & Datos",
    skills: ["ASP.NET Core", "SQL Server", "REST APIs", "NextAuth.js", "Azure AD / Entra ID", "axios"],
  },
  {
    name: "Herramientas",
    skills: ["Git", "GitHub", "Recharts", "Zod", "Microsoft Graph", "Metodologías ágiles"],
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
      "Plataforma interna con autenticación Microsoft Entra ID, gestión de roles (RBAC) e integración con SAP Business One Service Layer. Incluye módulos de Ventas, Compras, Inventario, RR.HH. y administración de usuarios.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth.js",
      "SAP B1",
      "SQL Server",
    ],
    highlights: [
      "Login con Microsoft Entra ID y control de acceso por roles",
      "Integración con SAP Service Layer para documentos y adjuntos",
      "Dashboard modular con administración de usuarios y auditoría",
      "Backend complementario en ASP.NET Core (DocumentosAPI)",
    ],
  },
  {
    title: "Last.fm Wrapped — App de escritorio en tiempo real",
    description:
      "Aplicación de escritorio inspirada en Spotify Wrapped que consume la API de Last.fm para mostrar estadísticas musicales mensuales y anuales, con actualización en vivo del track en reproducción.",
    tags: ["Electron", "React", "TypeScript", "Vite", "Recharts", "Last.fm API"],
    highlights: [
      "Wrapped interactivo con top artistas, canciones y álbumes por período",
      "Polling en tiempo real cada 10 s del track en reproducción",
      "Gráficos con Recharts y exportación de resumen a imagen",
      "Empaquetado multiplataforma con electron-builder",
    ],
  },
  {
    title: "Tienda web de decants",
    description:
      "Sitio web orientado a la venta de decants de perfumes, con catálogo de productos y experiencia de compra pensada para el cliente final.",
    tags: ["Desarrollo Web", "E-commerce", "Catálogo", "Frontend"],
    highlights: [
      "Catálogo de productos para comercialización de decants",
      "Experiencia de compra orientada al cliente final",
      "Diseño enfocado en presentación de productos y conversión",
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
      "Consultoría en SAP Business One y desarrollo de la intranet corporativa con Next.js, integrada a SAP Service Layer y Microsoft Entra ID.",
    achievements: [
      "Creación y desarrollo de la intranet corporativa de TRAVERSO S.A.",
      "Implementación de autenticación Azure AD y gestión de roles por módulo",
      "Integración con SAP B1 Service Layer y API .NET para documentos",
    ],
  },
];

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
