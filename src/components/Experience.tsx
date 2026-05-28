import { experience, certificationsLinkedIn } from "../data/portfolio";

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

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {experience.map((job, index) => (
              <div key={job.company + job.role} className="relative pl-8">
                {index < experience.length - 1 && (
                  <div className="absolute top-8 left-[7px] h-full w-px bg-slate-700" />
                )}
                <div className="absolute top-1.5 left-0 h-3.5 w-3.5 rounded-full border-2 border-brand-500 bg-[#0a0f1a]" />

                <div className="glass rounded-xl p-6">
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
              </div>
            ))}
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">
              Certificaciones
            </h3>
            <a
              href={certificationsLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="glass card-hover block rounded-xl p-6 transition-colors hover:border-brand-500/35"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-600/20 text-brand-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 012.063-2.063 2.063 2.063 0 012.065 2.063 2.062 2.062 0 01-2.065 2.063zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <p className="font-medium text-slate-200">
                Ver certificaciones en LinkedIn
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Todas mis certificaciones y credenciales están disponibles en mi perfil de LinkedIn.
              </p>
              <p className="mt-4 text-sm font-medium text-brand-400">
                Abrir perfil →
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
