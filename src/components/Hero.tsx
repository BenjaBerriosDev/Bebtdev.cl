import { profile, brand, about, navLinks } from "../data/portfolio";

const jumpLinks = navLinks.filter((l) => l.href !== "#inicio");

export function Hero() {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen scroll-mt-24 items-center px-6 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="animate-fade-up mb-4 font-mono text-sm tracking-wider text-slate-500">
            {brand.domain}
          </p>

          {profile.available && (
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              {profile.availabilityLabel}
            </div>
          )}

          <h1 className="animate-fade-up animation-delay-100 title-glow max-w-4xl text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hola, soy{" "}
            <span className="gradient-text-animated">{profile.name}</span>
          </h1>

          <p className="animate-fade-up animation-delay-200 mt-4 text-xl font-medium text-brand-300 sm:text-2xl">
            {profile.title}
          </p>

          <p className="animate-fade-up animation-delay-300 mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            {profile.tagline}
          </p>

          <div className="animate-fade-up animation-delay-400 mt-8 flex flex-wrap gap-2">
            {jumpLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-slate-700/80 bg-slate-800/40 px-4 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-brand-500/50 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="animate-fade-up animation-delay-400 mt-8 flex flex-wrap items-center gap-4">
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
          </div>

          <p className="animate-fade-up animation-delay-400 mt-10 flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:gap-6">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {profile.location}
            </span>
            <span>{profile.languages}</span>
          </p>
        </div>

        <aside className="animate-fade-up animation-delay-200 hidden lg:block">
          <div className="animate-float-soft relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand-500/40 via-violet-500/30 to-emerald-500/30 blur-md" />
            <div className="glass relative rounded-2xl p-8">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-violet-600 text-3xl font-bold text-white shadow-lg shadow-brand-600/30">
                {initials}
              </div>
              <p className="mt-6 text-center text-sm font-medium text-slate-300">
                Resumen rápido
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-3">
                {about.highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-3 text-center"
                  >
                    <dt className="text-lg font-bold text-brand-300">{item.value}</dt>
                    <dd className="mt-0.5 text-[10px] leading-tight text-slate-500">
                      {item.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </aside>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" aria-hidden />
    </section>
  );
}
