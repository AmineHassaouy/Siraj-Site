import { cssVars } from "@/lib/css";

const PILLS = [
  { label: "Développement web", left: "50%", top: "10%" },
  { label: "Marketing digital & design", left: "90%", top: "50%" },
  { label: "AI & Automatisation", left: "50%", top: "90%" },
  { label: "Data Engineering & Analytics", left: "10%", top: "50%" },
] as const;

export default function WhoSection() {
  return (
    <section id="qui">
      <div className="w sp2">
        <div className="rv">
          <div className="lab">Qui sommes-nous ?</div>
          <h2 className="t">Une agence, plusieurs expertises, des solutions concrètes.</h2>
          <p className="sm">
            SIRAJ est une agence digitale hybride. Nous associons créativité, technologies digitales et intelligence
            artificielle pour apporter des solutions concrètes aux entreprises, aux commerces, aux restaurants et aux
            porteurs de projets.
          </p>
          <p className="sm">
            Avant de proposer quoi que ce soit, nous prenons le temps de comprendre vos problématiques, afin de
            concevoir la solution qui vous correspond.
          </p>
        </div>
        <div className="kw rv" style={cssVars({ "--d": ".2s" })}>
          <div className="r1" />
          <div className="r2" />
          <div className="lg" />
          {PILLS.map((p) => (
            <b key={p.label} style={{ left: p.left, top: p.top }}>
              {p.label}
            </b>
          ))}
        </div>
      </div>
    </section>
  );
}
