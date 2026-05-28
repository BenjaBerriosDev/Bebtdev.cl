import { about } from "../data/portfolio";

export function About() {
  return (
    <section id="sobre-mi" className="px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold tracking-widest text-brand-400 uppercase">
            Sobre mí
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ingeniería, SAP productivo y desarrollo full stack
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-10">
          <div className="space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed text-slate-400">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 auto-rows-fr">
            {about.highlights.map((item) => (
              <div
                key={item.label}
                className="glass flex min-h-[7.5rem] flex-col items-center justify-center rounded-xl p-4 text-center sm:min-h-[8.5rem] sm:p-6"
              >
                <p className="text-xl font-bold leading-none text-brand-400 sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-2 text-xs leading-snug text-slate-500 sm:mt-3 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
