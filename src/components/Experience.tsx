import { experience, education, certificationsLinkedIn } from "../data/portfolio";
import { BulletList } from "./BulletList";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experiencia"
      variant="experience"
      index="04"
      label="Experiencia"
      title="Trayectoria profesional"
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
        {experience.map((job) => (
          <div
            key={job.company + job.role + job.period}
            className="glass flex flex-col rounded-xl border-l-4 border-amber-500/60 p-6 sm:p-7 lg:col-span-1"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h3 className="text-lg font-bold leading-snug text-white">{job.role}</h3>
                <p className="mt-1 text-amber-400">{job.company}</p>
              </div>
              <span className="inline-flex shrink-0 self-start rounded-md bg-amber-950/50 px-3 py-1 text-xs text-amber-200/90">
                {job.period}
              </span>
            </div>

            <p className="mt-4 leading-relaxed text-slate-400">{job.description}</p>
            <BulletList items={job.achievements} variant="emerald" />
          </div>
        ))}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
          <div className="glass flex flex-col rounded-xl border-t-4 border-amber-500/50 p-6 sm:p-7">
            <h3 className="mb-4 text-lg font-semibold text-white">Formación</h3>
            <div className="mt-auto">
              <p className="font-medium leading-snug text-slate-200">{education.degree}</p>
              <p className="mt-2 text-sm text-amber-400">{education.institution}</p>
              <p className="mt-1 text-sm text-slate-500">{education.period}</p>
            </div>
          </div>

          <a
            href={certificationsLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="glass card-hover flex flex-col rounded-xl border-t-4 border-violet-500/40 p-6 sm:p-7"
          >
            <h3 className="mb-4 text-lg font-semibold text-white">Certificaciones</h3>
            <p className="flex-1 text-sm leading-relaxed text-slate-400">
              SAP learning, CCNA, CyberOps, Anthropic, IBM, ciberseguridad y Universidad
              Autònoma de Barcelona.
            </p>
            <p className="mt-4 text-sm font-medium text-violet-400">Ver en LinkedIn →</p>
          </a>
        </div>
      </div>
    </Section>
  );
}
