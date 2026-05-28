import { about } from "../data/portfolio";

export function About() {
  return (
    <section id="sobre-mi" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold tracking-widest text-brand-400 uppercase">
            Sobre mí
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Consultoría SAP y desarrollo digital
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-3">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed text-slate-400">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:col-span-2">
            {about.highlights.map((item) => (
              <div
                key={item.label}
                className="glass card-hover min-w-0 overflow-hidden rounded-xl p-4 text-center sm:p-6"
              >
                <p className="text-lg font-bold break-words text-brand-400 sm:text-2xl lg:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
