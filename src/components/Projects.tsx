import { projects } from "../data/portfolio";
import { BulletList } from "./BulletList";
import { Section } from "./Section";

const cardAccents = [
  "border-t-emerald-500",
  "border-t-violet-500",
  "border-t-amber-500",
];

export function Projects() {
  return (
    <Section
      id="proyectos"
      variant="projects"
      index="03"
      label="Proyectos"
      title="Trabajo destacado"
      description="Proyectos que he desarrollado como consultor SAP y desarrollador full stack."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`glass card-hover flex flex-col rounded-xl border-t-4 p-6 sm:p-7 ${cardAccents[index % cardAccents.length]} ${
              index === 0 ? "lg:col-span-2 lg:flex-row lg:gap-8" : ""
            }`}
          >
            <div className={index === 0 ? "lg:flex-1" : ""}>
              <h3 className="text-xl font-bold leading-snug text-white">{project.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-400">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-emerald-600/15 px-3 py-1 text-xs font-medium text-emerald-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={`mt-6 ${index === 0 ? "lg:mt-0 lg:w-80 lg:shrink-0" : ""}`}>
              <p className="mb-3 text-xs font-semibold tracking-wider text-emerald-500/80 uppercase">
                Resultados
              </p>
              <BulletList items={project.highlights} variant="emerald" className="mt-0" />

              <div className="mt-5 flex flex-wrap gap-4">
                {project.downloadLink && (
                  <a
                    href={project.downloadLink}
                    download
                    className="rounded-lg bg-emerald-600/25 px-3 py-1.5 text-sm font-semibold text-emerald-200 transition-colors hover:bg-emerald-600/40"
                  >
                    Descargar instalador →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
