import { profile, brand, about, navLinks } from "../data/portfolio";

const jumpLinks = navLinks.filter((l) => l.href !== "#inicio");

function ProfilePhoto({ className = "" }: { className?: string }) {
  return (
    <div
      className={`shrink-0 overflow-hidden rounded-full border-2 border-brand-500/30 shadow-lg shadow-brand-600/25 ring-4 ring-slate-900/80 ${className}`}
    >
      <img
        src={profile.photo}
        alt={profile.photoAlt}
        className="h-full w-full object-cover"
        style={{
          objectPosition: profile.photoPosition,
          transform: `scale(${profile.photoScale ?? 1})`,
        }}
        width={176}
        height={176}
        fetchPriority="high"
      />
    </div>
  );
}

function ProfileStats({ className = "" }: { className?: string }) {
  return (
    <dl className={`grid grid-cols-2 gap-3 sm:max-w-md ${className}`}>
      {about.highlights.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="card-hover rounded-lg border border-slate-700/60 bg-slate-800/40 px-3 py-3 text-center transition-colors hover:border-brand-500/40 hover:bg-slate-800/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          <dt className="text-lg font-bold text-brand-300 sm:text-xl">{item.value}</dt>
          <dd className="mt-0.5 text-[10px] leading-tight text-slate-500 sm:text-xs">
            {item.label}
          </dd>
        </a>
      ))}
    </dl>
  );
}

export function Hero() {
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

      <div className="relative mx-auto w-full max-w-6xl">
        <p className="animate-fade-up mb-4 font-mono text-sm tracking-wider text-slate-500">
          {brand.domain}
        </p>

        {profile.available && (
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            {profile.availabilityLabel}
          </div>
        )}

        <div className="animate-fade-up animation-delay-100 flex items-start gap-5 sm:gap-6">
          <ProfilePhoto className="h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40" />
          <div className="min-w-0 flex-1 pt-1">
            <h1 className="title-glow text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Hola, soy{" "}
              <span className="gradient-text-animated">{profile.name}</span>
            </h1>
            <p className="mt-3 text-lg font-medium text-brand-300 sm:mt-4 sm:text-xl md:text-2xl">
              {profile.title}
            </p>
          </div>
        </div>

        <p className="animate-fade-up animation-delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:mt-8">
          {profile.tagline}
        </p>

        <div className="animate-fade-up animation-delay-300 mt-8 flex flex-wrap gap-2">
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

        <p className="animate-fade-up animation-delay-400 mt-8 flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:gap-6">
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

        <ProfileStats className="animate-fade-up animation-delay-400 mt-10" />
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" aria-hidden />
    </section>
  );
}
