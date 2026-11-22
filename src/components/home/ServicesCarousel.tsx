"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { HOME_SERVICES } from "@/data/home";

const N = HOME_SERVICES.length;
const AUTOPLAY_MS = 7000;

/** Orbit geometry for card `k` when card `ix` is active. */
function orbit(k: number, ix: number) {
  const d = ((k - ix + 1 + N * 2) % N) - 1;
  const a = (d * Math.PI) / 2;
  const z = Math.cos(a);
  const m = (z + 1) / 2;
  return {
    x: Math.sin(a) * 0.95, // × card width
    y: -(1 - z) * 28, // px
    scale: 0.62 + 0.38 * m,
    opacity: d === 0 ? 1 : 0.12 + 0.4 * m,
    zIndex: Math.round(m * 10),
  };
}

/**
 * Server-rendered starting positions (card 0 active). The card width is `var(--D)` (see .orb in
 * the stylesheet), so the first paint is already correct and nothing animates in after hydration.
 */
const INITIAL_STYLES: CSSProperties[] = HOME_SERVICES.map((_, k) => {
  const o = orbit(k, 0);
  return {
    transform: `translate3d(calc(var(--D) * ${o.x.toFixed(6)}), ${o.y.toFixed(4)}px, 0) scale(${o.scale.toFixed(6)})`,
    opacity: o.opacity,
    zIndex: o.zIndex,
  };
});

/**
 * 3-D orbit carousel: the active card sits in front, the others orbit around it.
 * Card transforms are measured from the DOM (card width) and applied imperatively so they
 * can be recomputed on resize without re-rendering — same maths as the wireframe.
 */
export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const orbRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const layout = useCallback((ix: number) => {
    const cards = cardRefs.current;
    const D = cards[0]?.offsetWidth ?? 0;
    cards.forEach((c, k) => {
      if (!c) return;
      const o = orbit(k, ix);
      c.style.transform = "translate3d(" + o.x * D + "px," + o.y + "px,0) scale(" + o.scale + ")";
      c.style.opacity = String(o.opacity);
      c.style.zIndex = String(o.zIndex);
    });
  }, []);

  useLayoutEffect(() => {
    layout(index);
  }, [index, layout]);

  useEffect(() => {
    const onResize = () => layout(index);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index, layout]);

  const stopAuto = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    if (window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % N), AUTOPLAY_MS);
  }, [stopAuto]);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [startAuto, stopAuto]);

  const goTo = (n: number) => {
    setIndex(((n % N) + N) % N);
    startAuto();
  };

  return (
    <>
      <div className="orb rv" id="orb" ref={orbRef} onMouseEnter={stopAuto} onMouseLeave={startAuto}>
        {HOME_SERVICES.map((s, k) => (
          <article
            key={s.title}
            className={k === index ? "pl act" : "pl"}
            style={INITIAL_STYLES[k]}
            ref={(el) => {
              cardRefs.current[k] = el;
            }}
          >
            <div className="fl" style={{ animationDelay: -k * 1.7 + "s" }}>
              <div
                className="sp"
                onClick={() => {
                  if (k !== index) goTo(k);
                }}
              >
                <Image
                  src={s.image}
                  alt={s.alt}
                  width={959}
                  height={540}
                  sizes="(max-width: 700px) 80vw, 560px"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="cp">
              <h3>{s.title}</h3>
              <div className="x">
                <p>{s.text}</p>
                <Link href={s.href}>Découvrir le service →</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="ct">
        <button type="button" className="ar" id="pv" aria-label="Service précédent" onClick={() => goTo(index - 1)}>
          ←
        </button>
        <div className="dots" id="dt">
          {HOME_SERVICES.map((s, k) => (
            <button
              key={s.title}
              type="button"
              className={k === index ? "on" : undefined}
              aria-label={"Service " + (k + 1)}
              onClick={() => goTo(k)}
            />
          ))}
        </div>
        <button type="button" className="ar" id="nx" aria-label="Service suivant" onClick={() => goTo(index + 1)}>
          →
        </button>
      </div>
    </>
  );
}
