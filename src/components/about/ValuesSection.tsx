import type { ReactNode } from "react";
import { cssVars } from "@/lib/css";

interface Value {
  cls: string;
  title: string;
  text: string;
  delay?: string;
  icon: ReactNode;
}

const VALUES: readonly Value[] = [
  {
    cls: "v1",
    title: "Innovation",
    text: "Explorer de nouvelles possibilités et transformer les idées en solutions pertinentes.",
    icon: <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z" />,
  },
  {
    cls: "v2",
    title: "Confiance",
    text: "Construire des relations transparentes et durables avec nos clients.",
    delay: ".1s",
    icon: (
      <>
        <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </>
    ),
  },
  {
    cls: "v3",
    title: "Créativité",
    text: "Imaginer des approches originales pour répondre aux défis de chaque projet.",
    icon: <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />,
  },
  {
    cls: "v4",
    title: "Impact",
    text: "Concevoir des solutions utiles qui apportent une réelle valeur.",
    delay: ".1s",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </>
    ),
  },
];

export default function ValuesSection() {
  return (
    <section id="valeurs">
      <div className="w">
        <div className="rv">
          <div className="lab">Nos valeurs</div>
          <h2 className="t">Ce qui guide chacune de nos actions.</h2>
        </div>
        <div className="vg">
          {VALUES.map((v) => (
            <div className={`vc ${v.cls} rv`} key={v.title} style={v.delay ? cssVars({ "--d": v.delay }) : undefined}>
              <svg viewBox="0 0 24 24">{v.icon}</svg>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
