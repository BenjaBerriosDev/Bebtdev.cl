import { useState, useEffect } from "react";
import { navLinks, brand } from "../data/portfolio";
import { useActiveSection } from "../context/ActiveSectionContext";

const activeLinkClass: Record<string, string> = {
  inicio: "text-white",
  "sobre-mi": "text-violet-300",
  habilidades: "text-cyan-300",
  proyectos: "text-emerald-300",
  experiencia: "text-amber-300",
  contacto: "text-brand-300",
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg shadow-black/20" : "glass-nav"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="font-mono text-lg font-bold tracking-tight text-white">
          {brand.name.replace("dev", "")}
          <span className="text-brand-400">dev</span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = id === activeId;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative text-sm transition-colors ${
                    isActive
                      ? `${activeLinkClass[id] ?? "text-white"} font-semibold`
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-current opacity-80" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-500 md:inline-block"
        >
          Contáctame
        </a>

        <button
          type="button"
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="glass-nav border-t border-slate-800 px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = id === activeId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block ${isActive ? "font-semibold text-white" : "text-slate-300 hover:text-white"}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
