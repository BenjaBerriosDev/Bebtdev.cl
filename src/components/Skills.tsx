import { skillCategories, about } from "../data/portfolio";

export function Skills() {
  return (
    <section id="habilidades" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold tracking-widest text-brand-400 uppercase">
            Habilidades
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Stack técnico y competencias
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="glass rounded-xl p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-700/80 bg-slate-800/50 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Aprendiendo ahora:{" "}
          <span className="text-slate-300">{about.learningNow.join(" · ")}</span>
        </p>
      </div>
    </section>
  );
}
