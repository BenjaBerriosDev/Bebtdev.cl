import { skillCategories, about } from "../data/portfolio";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="habilidades"
      variant="skills"
      index="02"
      label="Habilidades"
      title="Stack tecnológico"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, i) => (
          <div
            key={category.name}
            className={`glass card-hover rounded-xl border-t-2 p-6 ${
              i % 2 === 0 ? "border-cyan-500/50" : "border-brand-500/40"
            }`}
          >
            <h3 className="mb-4 text-lg font-semibold text-white">{category.name}</h3>
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

      <p className="mt-8 rounded-lg border border-cyan-500/20 bg-cyan-950/20 px-4 py-3 text-sm text-slate-400">
        <span className="font-medium text-cyan-300">Aprendiendo ahora:</span>{" "}
        {about.learningNow.join(" · ")}
      </p>
    </Section>
  );
}
