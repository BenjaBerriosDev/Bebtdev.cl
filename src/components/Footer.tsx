import { profile, brand } from "../data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm font-semibold text-white">
            {brand.name.replace("dev", "")}
            <span className="text-brand-400">dev</span>
            <span className="text-slate-600">.cl</span>
          </p>
          <p className="mt-1 text-xs text-slate-500">
            © {year} {profile.name} · {brand.meaning}
          </p>
        </div>
        <p className="text-sm text-slate-600">
          Consultor SAP · Desarrollo Web
        </p>
      </div>
    </footer>
  );
}
