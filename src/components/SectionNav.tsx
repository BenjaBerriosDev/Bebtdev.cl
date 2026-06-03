import { navLinks } from "../data/portfolio";
import { useActiveSection } from "../context/ActiveSectionContext";

const accentById: Record<string, string> = {
  inicio: "bg-brand-500",
  "sobre-mi": "bg-violet-500",
  habilidades: "bg-cyan-500",
  proyectos: "bg-emerald-500",
  experiencia: "bg-amber-500",
  contacto: "bg-brand-400",
};

export function SectionNav() {
  const activeId = useActiveSection();

  return (
    <nav
      className="group/nav fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
      aria-label="Ir a sección"
    >
      <div className="flex flex-col items-end gap-2.5 rounded-2xl border border-transparent py-2 pl-3 pr-2 transition-[background,border,box-shadow,padding] duration-200 group-hover/nav:border-slate-700/50 group-hover/nav:bg-slate-900/95 group-hover/nav:py-3 group-hover/nav:pl-4 group-hover/nav:pr-3 group-hover/nav:shadow-xl group-hover/nav:backdrop-blur-md">
        {navLinks.map((link) => {
          const id = link.href.replace("#", "");
          const isActive = id === activeId;
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive ? "location" : undefined}
              className="flex flex-row-reverse items-center gap-2.5"
            >
              <span
                className={`shrink-0 rounded-full transition-all duration-200 ${
                  accentById[id] ?? "bg-slate-500"
                } ${
                  isActive
                    ? "h-3 w-3 ring-2 ring-white/25 ring-offset-2 ring-offset-slate-900"
                    : "h-2.5 w-2.5 opacity-55 group-hover/nav:opacity-90"
                }`}
                aria-hidden
              />
              <span
                className={`max-w-0 overflow-hidden whitespace-nowrap text-right text-xs font-medium opacity-0 transition-[max-width,opacity] duration-200 ease-out group-hover/nav:max-w-[9rem] group-hover/nav:opacity-100 ${
                  isActive ? "text-white" : "text-slate-400"
                }`}
              >
                {link.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
