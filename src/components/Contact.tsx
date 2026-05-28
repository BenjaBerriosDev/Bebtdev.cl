import { profile, certificationsLinkedIn } from "../data/portfolio";

export function Contact() {
  return (
    <section id="contacto" className="px-6 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="glass relative overflow-hidden rounded-2xl p-5 sm:p-8 lg:p-12">
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-600/20 blur-3xl" />

          <div className="relative grid min-w-0 gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center">
            <div className="min-w-0">
              <p className="mb-2 text-sm font-semibold tracking-widest text-brand-400 uppercase">
                Contacto
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                ¿Conectamos?
              </h2>
              <p className="mt-4 text-base leading-relaxed break-words text-slate-400 sm:text-lg">
                Busco activamente nuevas oportunidades en consultoría SAP, desarrollo
                full stack e integraciones empresariales.
              </p>
            </div>

            <div className="min-w-0 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 p-4 transition-colors hover:border-brand-500/50 hover:bg-slate-800 sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600/20 text-brand-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm font-medium break-all text-white sm:break-normal sm:text-base">
                    {profile.email}
                  </p>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 p-4 transition-colors hover:border-brand-500/50 hover:bg-slate-800 sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600/20 text-brand-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 012.063-2.063 2.063 2.063 0 012.065 2.063 2.062 2.062 0 01-2.065 2.063zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-500">LinkedIn</p>
                  <p className="text-sm font-medium break-words text-white sm:text-base">
                    Benjamín Berríos Troncoso
                  </p>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 p-4 transition-colors hover:border-brand-500/50 hover:bg-slate-800 sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600/20 text-brand-400">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-500">GitHub</p>
                  <p className="text-sm font-medium text-white sm:text-base">BenjaBerriosDev</p>
                </div>
              </a>

              <a
                href={certificationsLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 p-4 transition-colors hover:border-brand-500/50 hover:bg-slate-800 sm:gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600/20 text-brand-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-slate-500">Certificaciones</p>
                  <p className="text-sm font-medium text-white sm:text-base">Ver en LinkedIn</p>
                </div>
              </a>

              <p className="flex items-center gap-2 px-1 text-sm text-slate-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {profile.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
