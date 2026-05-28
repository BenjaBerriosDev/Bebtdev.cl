import { experience, education, certificationsLinkedIn } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experiencia" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold tracking-widest text-brand-400 uppercase">
            Experiencia
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Trayectoria profesional
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
          <div className="space-y-6 lg:col-span-2">
            {experience.map((job) => (
              <div key={job.company + job.role} className="glass rounded-xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{job.role}</h3>
                    <p className="text-brand-400">{job.company}</p>
                  </div>
                  <span className="rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-400">
                    {job.period}
                  </span>
                </div>

                <p className="mt-3 text-slate-400">{job.description}</p>

                <ul className="mt-4 space-y-2">
                  {job.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <span className="mt-1.5 text-brand-400">▸</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className="glass rounded-xl p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Formación</h3>
              <p className="font-medium text-slate-200">{education.degree}</p>
              <p className="mt-1 text-sm text-brand-400">{education.institution}</p>
              <p className="mt-1 text-sm text-slate-500">Titulado {education.year}</p>
            </div>

            <a
              href={certificationsLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="glass block rounded-xl p-6 transition-colors hover:border-brand-500/35"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">Certificaciones</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                SAP, Anthropic, CCNA, ciberseguridad y Universidad de Barcelona.
              </p>
              <p className="mt-4 text-sm font-medium text-brand-400">Ver en LinkedIn →</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
