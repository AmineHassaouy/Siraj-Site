import Link from "next/link";
import { cssVars } from "@/lib/css";

export default function AboutIntro() {
  return (
    <section id="about">
      <div className="w">
        <div className="rv">
          <div className="lab">À propos</div>
          <p className="big">
            SIRAJ accompagne les entreprises, les restaurants, les commerces et les porteurs de petits projets : être
            visibles en ligne, attirer des clients et gagner du temps, avec des solutions simples, modernes et adaptées
            à chaque budget.
          </p>
          <p className="sm">
            Basée à Casablanca, notre agence réunit web, marketing digital, intelligence artificielle et analyse de
            données. Avec SIRAJ, un seul interlocuteur transforme vos idées en solutions durables.
          </p>
          <Link className="btn o" href="/about">
            Découvrir SIRAJ <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="arch rv" style={cssVars({ "--d": ".2s" })}>
          <i />
          <div className="lg" />
          <div className="nm">SIRAJ</div>
        </div>
      </div>
    </section>
  );
}
