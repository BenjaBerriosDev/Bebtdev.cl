import { about } from "../data/portfolio";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="sobre-mi"
      variant="about"
      index="01"
      label="Sobre mí"
      title="Ingeniero, SAP B1, SAP HANA y Desarrollo Full Stack"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-10">
        <div className="space-y-5">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed text-slate-400">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 auto-rows-fr lg:hidden">
          {about.highlights.map((item) => (
            <div
              key={item.label}
              className="glass flex min-h-[7.5rem] flex-col items-center justify-center rounded-xl border-violet-500/20 p-4 text-center sm:min-h-[8.5rem] sm:p-6"
            >
              <p className="text-xl font-bold leading-none text-violet-300 sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-slate-500 sm:mt-3 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
