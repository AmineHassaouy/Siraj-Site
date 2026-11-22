"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll choreography of the contact page:
 *  - the form card rises in the first time the stage gets within 80% of the viewport (`.go`),
 *  - the panel behind it slides out in proportion to scroll via the `--p` custom property.
 * Also renders the empty `#contact` band that fades into the footer.
 */
export default function ContactStage({ children }: { children: ReactNode }) {
  const [go, setGo] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const panel = stage.querySelector<HTMLElement>(".panel");
    let seen = false;

    const update = () => {
      const r = stage.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.9 - r.top) / (vh * 0.55)));
      panel?.style.setProperty("--p", p.toFixed(3));
      if (!seen && r.top < vh * 0.8) {
        seen = true;
        setGo(true);
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <main className={go ? "stage-wrap go" : "stage-wrap"} id="form">
      <div className="stage" id="stage" ref={stageRef}>
        {children}
      </div>
      <section id="contact" />
    </main>
  );
}
