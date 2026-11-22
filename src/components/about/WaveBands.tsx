import { WAVE_BANDS } from "@/data/waves";
import { cssVars } from "@/lib/css";

/** Four slowly scrolling sine bands behind the philosophy section. */
export default function WaveBands() {
  return (
    <div className="wvs">
      {WAVE_BANDS.map((w) => (
        <svg
          key={w.stroke}
          viewBox="0 0 2880 440"
          preserveAspectRatio="none"
          style={{ ...cssVars({ "--s": `${w.duration}s` }), ...(w.reverse ? { animationDirection: "reverse" } : null) }}
          aria-hidden="true"
        >
          <path d={w.d} fill="none" stroke={w.stroke} strokeWidth="16" opacity={w.glowOpacity} style={{ filter: "blur(6px)" }} />
          <path d={w.d} fill="none" stroke={w.stroke} strokeWidth="2" opacity={w.lineOpacity} />
        </svg>
      ))}
    </div>
  );
}
