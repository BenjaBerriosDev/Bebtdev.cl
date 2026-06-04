import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  scrollToSection,
  sectionIdFromHash,
  syncUrlWithSection,
} from "../utils/sectionNavigation";

/** Punto de referencia: ~35% desde arriba del viewport (donde suele mirar el usuario). */
const VIEWPORT_PROBE_RATIO = 0.35;

export function getActiveSectionId(sectionIds: string[]): string {
  if (sectionIds.length === 0) return "";

  const vh = window.innerHeight;
  const scrollY = window.scrollY;
  const docHeight = document.documentElement.scrollHeight;

  if (scrollY + vh >= docHeight - 80) {
    return sectionIds[sectionIds.length - 1];
  }

  const probe = vh * VIEWPORT_PROBE_RATIO;
  let active = sectionIds[0];

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    const { top, bottom } = el.getBoundingClientRect();
    if (top <= probe && bottom > probe) {
      active = id;
    }
  }

  return active;
}

const ActiveSectionContext = createContext<string>("");

type ProviderProps = {
  sectionIds: string[];
  children: ReactNode;
};

export function ActiveSectionProvider({ sectionIds, children }: ProviderProps) {
  const [activeId, setActiveId] = useState(() => {
    const fromHash = sectionIdFromHash();
    if (fromHash && sectionIds.includes(fromHash)) return fromHash;
    return sectionIds[0] ?? "";
  });

  useEffect(() => {
    const update = () => setActiveId(getActiveSectionId(sectionIds));

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionIds.join(",")]);

  useEffect(() => {
    syncUrlWithSection(activeId);
  }, [activeId]);

  useEffect(() => {
    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest('a[href^="#"]');
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.slice(1);
      if (!id || !document.getElementById(id)) return;

      e.preventDefault();
      scrollToSection(id);
      setActiveId(id);
    };

    document.addEventListener("click", onAnchorClick);
    return () => document.removeEventListener("click", onAnchorClick);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const id = sectionIdFromHash();
      if (!id || !sectionIds.includes(id)) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [sectionIds.join(",")]);

  return (
    <ActiveSectionContext.Provider value={activeId}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection(): string {
  return useContext(ActiveSectionContext);
}
