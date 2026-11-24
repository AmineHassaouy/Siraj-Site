"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { HERO_LIGHT_PATH } from "@/data/hero-path";

const LIGHT_COUNT = 7;
const IMG_RATIO = 1672 / 941;

const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const bgwRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const lightRefs = useRef<(SVGGElement | null)[]>([]);

  /* Scroll: text fades out, cue fades out, photo parallax (original wireframe maths). */
  useEffect(() => {
    const bg = bgRef.current;
    const text = textRef.current;
    const cue = cueRef.current;
    if (!bg || !text || !cue) return;

    const coarse = window.matchMedia("(pointer:coarse)");
    const update = () => {
      const y = window.scrollY;
      const p = clamp01(y / (window.innerHeight * 0.55));
      text.style.opacity = String(1 - clamp01(p * 2.2));
      cue.style.opacity = String(1 - clamp01(p * 4));
      // Scroll-linked parallax stutters on phones: only on mouse-driven devices.
      bg.style.transform = coarse.matches ? "" : "translateY(" + y * 0.2 + "px)";
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  /* Photo is "cover"-fitted to the hero box, anchored 70% to the right. */
  useEffect(() => {
    const bg = bgRef.current;
    const bgw = bgwRef.current;
    if (!bg || !bgw) return;

    const fit = () => {
      const W = bg.clientWidth;
      const H = bg.clientHeight;
      const w = Math.max(W, H * IMG_RATIO);
      const h = w / IMG_RATIO;
      bgw.style.width = w + "px";
      bgw.style.height = h + "px";
      bgw.style.left = (W - w) * 0.7 + "px";
      bgw.style.top = (H - h) * 0.5 + "px";
    };
    // Ignore height-only resizes (mobile address bar) so the photo doesn't jump.
    let lastWidth = window.innerWidth;
    const onResize = () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      fit();
    };
    window.addEventListener("resize", onResize);
    fit();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Fireflies gliding back and forth along the road path. */
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const total = path.getTotalLength();
    const pointAt = (t: number) => path.getPointAtLength(Math.max(0, Math.min(1, t)) * total);
    const lights = lightRefs.current.filter((g): g is SVGGElement => g !== null);
    let raf = 0;

    const tick = (ts: number) => {
      const s = ts / 1000;
      const still = window.matchMedia("(prefers-reduced-motion:reduce)").matches;

      lights.forEach((g, k) => {
        const x = ((still ? 0 : s * 0.06) + (k * 2) / lights.length) % 2;
        const dir = x < 1 ? 1 : -1;
        const t = x < 1 ? x : 2 - x;
        const p = pointAt(t);
        const c = g.children;

        g.setAttribute("transform", "translate(" + p.x + " " + p.y + ")");
        [0, 1, 2].forEach((i) => {
          const q = pointAt(t - dir * 0.022 * (i + 1));
          c[i].setAttribute("cx", String(q.x - p.x));
          c[i].setAttribute("cy", String(q.y - p.y));
        });
        g.style.opacity = String(Math.min(1, t * 12, (1 - t) * 12));
      });

      if (!still) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="hero" id="home" aria-label="Accueil">
      <div className="bg" id="bg" ref={bgRef}>
        <div className="bgw" id="bgw" ref={bgwRef}>
          <Image src="/images/hero-bg.jpg" alt="" width={1599} height={900} sizes="100vw" quality={85} preload />
          <svg viewBox="0 0 1672 941" aria-hidden="true">
            <defs>
              <radialGradient id="lgl">
                <stop offset="0" stopColor="#FFF3D6" stopOpacity=".95" />
                <stop offset=".35" stopColor="#FFB45E" stopOpacity=".55" />
                <stop offset="1" stopColor="#FF9A3C" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path id="cp" fill="none" d={HERO_LIGHT_PATH} ref={pathRef} />
            {Array.from({ length: LIGHT_COUNT }, (_, k) => (
              <g
                key={k}
                ref={(el) => {
                  lightRefs.current[k] = el;
                }}
              >
                <circle r="10" fill="#FFD9A0" opacity=".35" />
                <circle r="7" fill="#FFD9A0" opacity=".5" />
                <circle r="4.5" fill="#FFE9C4" opacity=".7" />
                <circle r="38" fill="url(#lgl)" />
                <circle r="6" fill="#FFF8E6" />
              </g>
            ))}
          </svg>
        </div>
      </div>
      <div className="sh" />
      <div className="hc" id="hc" ref={textRef}>
        <h1>
          <span className="a3">Vos ambitions,</span>
          <em className="a3b" style={{ display: "block" }}>
            notre lumière.
          </em>
        </h1>
        <p className="intro a4">Éclairer la présence digitale de chaque projet, de l’idée à la grande entreprise.</p>
        <a className="btn a5" href="#services">
          Découvrir nos services
        </a>
      </div>
      <div className="cue a6" id="cue" ref={cueRef}>
        <i />
        <span>Défiler</span>
      </div>
    </section>
  );
}
