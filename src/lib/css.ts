import type { CSSProperties } from "react";

/** Typed helper for inline CSS custom properties, e.g. style={cssVars({ "--d": ".2s" })}. */
export const cssVars = (vars: Record<`--${string}`, string>): CSSProperties => vars as CSSProperties;
