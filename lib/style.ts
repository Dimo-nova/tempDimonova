import type { CSSProperties } from "react";

/** Parse an inline CSS declaration string into a React style object. */
export function s(css: string): CSSProperties {
  const out: Record<string, string> = {};
  for (const decl of css.split(";")) {
    const i = decl.indexOf(":");
    if (i === -1) continue;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (!prop) continue;
    const key = prop.startsWith("--")
      ? prop
      : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[key] = value;
  }
  return out as CSSProperties;
}
