import { experience, education, certificationsLinkedIn } from "../data/portfolio";
import { BulletList } from "./BulletList";

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

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.company + job.role + job.period} className="glass rounded-xl p-6 sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold leading-snug text-white">{job.role}</h3>
                    <p className="mt-1 text-brand-400">{job.company}</p>
                  </div>
                  <span className="inline-flex shrink-0 self-start rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-400">
                    {job.period}
                  </span>
                </div>

                <p className="mt-4 leading-relaxed text-slate-400">{job.description}</p>
                <BulletList items={job.achievements} />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <div className="glass rounded-xl p-6 sm:p-7">
              <h3 className="mb-4 text-lg font-semibold text-white">Formación</h3>
              <p className="font-medium leading-snug text-slate-200">{education.degree}</p>
              <p className="mt-2 text-sm text-brand-400">{education.institution}</p>
              <p className="mt-1 text-sm text-slate-500">{education.period}</p>
            </div>

            <a
              href={certificationsLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="glass block rounded-xl p-6 transition-colors hover:border-brand-500/35 sm:p-7"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">Certificaciones</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                CCNA, CyberOps, Anthropic, IBM, ciberseguridad y Universidad Autònoma de Barcelona.
              </p>
              <p className="mt-4 text-sm font-medium text-brand-400">Ver en LinkedIn →</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
