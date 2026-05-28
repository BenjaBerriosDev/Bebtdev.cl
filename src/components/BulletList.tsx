import type { ReactNode } from "react";

type BulletListProps = {
  items: string[];
  variant?: "brand" | "emerald";
  className?: string;
};

export function BulletList({
  items,
  variant = "brand",
  className = "",
}: BulletListProps) {
  const dotClass = variant === "emerald" ? "bullet-dot bullet-dot--emerald" : "bullet-dot";

  return (
    <ul className={`mt-4 space-y-3 ${className}`.trim()}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-300">
          <span className={dotClass} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type BulletItemProps = {
  children: ReactNode;
};

export function BulletItem({ children }: BulletItemProps) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-slate-300">
      <span className="bullet-dot" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}
