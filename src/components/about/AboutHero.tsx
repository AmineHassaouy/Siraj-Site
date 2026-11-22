import { cssVars } from "@/lib/css";

const RINGS = [
  { inset: "14%", delay: "0s" },
  { inset: "26%", delay: "1.7s" },
  { inset: "37%", delay: "3.4s" },
  { inset: "46%", delay: "5s" },
] as const;

export default function AboutHero() {
  return (
    <header className="h1s">
      <div className="lt">
        {RINGS.map((r) => (
          <i key={r.inset} style={cssVars({ "--i": r.inset, "--d": r.delay })} />
        ))}
      </div>
      <div className="w" style={{ position: "relative" }}>
        <h1>
          <span className="r" style={{ animationDelay: ".3s" }}>
            La technologie
          </span>
          <span className="r" style={{ animationDelay: ".9s" }}>
            <b>éclaire</b> les idées.
          </span>
          <em className="r" style={{ animationDelay: "1.7s" }}>
            Nous leur donnons vie.
          </em>
        </h1>
      </div>
    </header>
  );
}
