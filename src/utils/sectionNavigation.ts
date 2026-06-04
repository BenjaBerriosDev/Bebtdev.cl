/** URL limpia en inicio; #seccion al bajar o al hacer clic */
export function syncUrlWithSection(sectionId: string) {
  const base = window.location.pathname + window.location.search;
  const target = sectionId === "inicio" ? base : `${base}#${sectionId}`;
  const current = base + window.location.hash;

  if (current !== target) {
    history.replaceState(null, "", target);
  }
}

export function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  syncUrlWithSection(sectionId);
}

export function sectionIdFromHash(): string | null {
  const id = window.location.hash.replace("#", "");
  return id || null;
}
