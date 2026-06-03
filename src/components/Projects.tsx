import { projects } from "../data/portfolio";
import { BulletList } from "./BulletList";

export function Projects() {
  return (
    <section id="proyectos" className="px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold tracking-widest text-brand-400 uppercase">
            Proyectos
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Trabajo destacado
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Proyectos en los que he trabajado combinando consultoría SAP y desarrollo web.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`glass card-hover flex flex-col rounded-xl p-6 sm:p-7 ${
                index === 0 ? "lg:col-span-2 lg:flex-row lg:gap-8" : ""
              }`}
            >
              <div className={index === 0 ? "lg:flex-1" : ""}>
                <h3 className="text-xl font-bold leading-snug text-white">{project.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand-600/15 px-3 py-1 text-xs font-medium text-brand-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`mt-6 ${index === 0 ? "lg:mt-0 lg:w-80 lg:shrink-0" : ""}`}>
                <p className="mb-3 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Resultados clave
                </p>
                <BulletList items={project.highlights} variant="emerald" className="mt-0" />

                <div className="mt-5 flex flex-wrap gap-4">
                  {project.downloadLink && (
                    <a
                      href={project.downloadLink}
                      download
                      className="rounded-lg bg-brand-600/20 px-3 py-1.5 text-sm font-semibold text-brand-300 transition-colors hover:bg-brand-600/30 hover:text-brand-200"
                    >
                      Descargar instalador →
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-brand-400 hover:text-brand-300"
                    >
                      Código en GitHub →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
