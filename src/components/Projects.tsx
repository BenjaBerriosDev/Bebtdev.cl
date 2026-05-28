import { projects } from "../data/portfolio";

export function Projects() {
  return (
    <section id="proyectos" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
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
              className={`glass card-hover flex flex-col rounded-xl p-6 ${
                index === 0 ? "lg:col-span-2 lg:flex-row lg:gap-8" : ""
              }`}
            >
              <div className={index === 0 ? "lg:flex-1" : ""}>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
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
                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-sm font-medium text-brand-400 hover:text-brand-300"
                    >
                      Ver detalle →
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
