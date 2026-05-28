import { profile, brand } from "../data/portfolio";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center px-6 pt-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <p className="animate-fade-up mb-4 font-mono text-sm tracking-wider text-slate-500">
          {brand.domain}
        </p>

        {profile.available && (
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            {profile.availabilityLabel}
          </div>
        )}

        <h1 className="animate-fade-up animation-delay-100 max-w-4xl text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Hola, soy{" "}
          <span className="gradient-text">{profile.name}</span>
        </h1>

        <p className="animate-fade-up animation-delay-200 mt-4 text-xl font-medium text-brand-300 sm:text-2xl">
          {profile.title}
        </p>

        <p className="animate-fade-up animation-delay-300 mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          {profile.tagline}
        </p>

        <div className="animate-fade-up animation-delay-400 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#proyectos"
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-600/25"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-slate-500 hover:text-white"
          >
            Contactar
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-4 py-3 text-sm text-slate-400 transition-colors hover:text-brand-400"
          >
            LinkedIn →
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-4 py-3 text-sm text-slate-400 transition-colors hover:text-brand-400"
          >
            GitHub →
          </a>
        </div>

        <p className="animate-fade-up animation-delay-400 mt-12 flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:gap-6">
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {profile.location}
          </span>
          <span>{profile.languages}</span>
        </p>
      </div>
    </section>
  );
}
