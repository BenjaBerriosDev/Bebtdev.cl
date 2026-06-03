import type { ReactNode } from "react";

export type SectionVariant =
  | "hero"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact";

const variantStyles: Record<
  SectionVariant,
  { section: string; label: string; accent: string; number: string }
> = {
  hero: {
    section: "",
    label: "text-brand-400",
    accent: "from-brand-500/20",
    number: "text-brand-500/30",
  },
  about: {
    section:
      "border-t border-violet-500/25 bg-gradient-to-b from-violet-950/25 to-transparent",
    label: "text-violet-400",
    accent: "from-violet-500/25",
    number: "text-violet-500/35",
  },
  skills: {
    section:
      "border-t border-cyan-500/20 bg-gradient-to-b from-cyan-950/20 to-transparent",
    label: "text-cyan-400",
    accent: "from-cyan-500/20",
    number: "text-cyan-500/35",
  },
  projects: {
    section:
      "border-t border-emerald-500/25 bg-gradient-to-b from-emerald-950/25 to-transparent",
    label: "text-emerald-400",
    accent: "from-emerald-500/20",
    number: "text-emerald-500/35",
  },
  experience: {
    section:
      "border-t border-amber-500/20 bg-gradient-to-b from-amber-950/15 to-transparent",
    label: "text-amber-400",
    accent: "from-amber-500/20",
    number: "text-amber-500/35",
  },
  contact: {
    section:
      "border-t border-brand-500/30 bg-gradient-to-b from-brand-950/30 to-transparent",
    label: "text-brand-400",
    accent: "from-brand-500/25",
    number: "text-brand-500/35",
  },
};

type SectionProps = {
  id: string;
  variant: SectionVariant;
  index: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  variant,
  index,
  label,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  const v = variantStyles[variant];

  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 py-16 sm:py-20 ${v.section} ${className}`}
    >
      <div className="relative mx-auto max-w-6xl">
        <div
          className={`pointer-events-none absolute -left-4 top-0 h-24 w-1 rounded-full bg-gradient-to-b ${v.accent} to-transparent sm:-left-8`}
          aria-hidden
        />

        <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-start gap-4 sm:gap-6">
            <span
              className={`font-mono text-4xl font-bold leading-none sm:text-5xl ${v.number}`}
              aria-hidden
            >
              {index}
            </span>
            <div>
              <p
                className={`mb-2 text-sm font-semibold tracking-widest uppercase ${v.label}`}
              >
                {label}
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
              {description && (
                <p className="mt-3 max-w-2xl text-slate-400">{description}</p>
              )}
            </div>
          </div>
        </header>

        {children}
      </div>
    </section>
  );
}
