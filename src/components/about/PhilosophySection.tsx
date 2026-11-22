import { cssVars } from "@/lib/css";
import WaveBands from "./WaveBands";

const PRINCIPLES = [
  {
    n: "01",
    title: "La technologie doit simplifier la vie et le travail.",
    text: "Nous privilégions les solutions utiles, accessibles et faciles à utiliser.",
    delay: undefined,
  },
  {
    n: "02",
    title: "Chaque client mérite une solution adaptée.",
    text: "Nos propositions tiennent compte des besoins, des objectifs et du budget de chaque projet.",
    delay: ".15s",
  },
  {
    n: "03",
    title: "Le digital doit accompagner l’évolution.",
    text: "Nous concevons des solutions qui peuvent soutenir le développement durable des activités.",
    delay: ".3s",
  },
] as const;

export default function PhilosophySection() {
  return (
    <section id="philo">
      <WaveBands />
      <div className="w">
        <div className="phd rv">
          <div className="lab">Notre philosophie</div>
          <h2 className="t ph2">
            <span>La lumière ne montre pas seulement le chemin.</span>
            <em>Elle révèle les possibilités.</em>
          </h2>
        </div>
        <div className="p3">
          {PRINCIPLES.map((p) => (
            <div className="pc rv" key={p.n} style={p.delay ? cssVars({ "--d": p.delay }) : undefined}>
              <div className="n">{p.n}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
