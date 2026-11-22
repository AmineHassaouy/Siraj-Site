"use client";

import { useEffect, useRef, useState } from "react";
import { WHY_RAYS, WHY_STEPS } from "@/data/home";

/** 0 = hidden, 1 = revealed (`.on`), 2 = validated (`.on.ok`, “✓”). */
type StepPhase = 0 | 1 | 2;

const STEP_GAP = 1100;
const hidden = () => WHY_STEPS.map<StepPhase>(() => 0);

export default function WhySection() {
  const [rays, setRays] = useState<boolean[]>(() => WHY_RAYS.map(() => false));
  const [steps, setSteps] = useState<StepPhase[]>(hidden);
  const stageRef = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const clear = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    const reset = () => {
      setRays(WHY_RAYS.map(() => false));
      setSteps(hidden());
    };
    const at = (ms: number, fn: () => void) => {
      timers.current.push(setTimeout(fn, ms));
    };

    /* On entering the viewport the beam fires ray by ray: ray → step → ✓. */
    const run = () => {
      clear();
      reset();
      WHY_STEPS.forEach((_, k) => {
        at(300 + k * STEP_GAP, () => setRays((r) => r.map((v, i) => (i === k ? true : v))));
        at(900 + k * STEP_GAP, () => setSteps((s) => s.map((v, i) => (i === k ? 1 : v))));
        at(1700 + k * STEP_GAP, () => setSteps((s) => s.map((v, i) => (i === k ? 2 : v))));
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) run();
        else {
          clear();
          reset();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clear();
    };
  }, []);

  return (
    <section id="why">
      <div className="w">
        <div className="rv">
          <div className="lab">Nos atouts</div>
          <h2 className="t">Pourquoi choisir SIRAJ ?</h2>
        </div>
        <div className="pr" id="pr" ref={stageRef}>
          <svg viewBox="0 0 1000 560" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
            <defs>
              <linearGradient id="rg" gradientUnits="userSpaceOnUse" x1="500" y1="480" x2="500" y2="170">
                <stop offset="0" stopColor="#A4530C" />
                <stop offset="1" stopColor="#D99A5D" stopOpacity=".35" />
              </linearGradient>
              <radialGradient id="gw">
                <stop offset="0" stopColor="#FFFFFF" />
                <stop offset=".25" stopColor="#F2A65A" stopOpacity=".85" />
                <stop offset="1" stopColor="#D99A5D" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="bm" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0" stopColor="#D99A5D" stopOpacity=".4" />
                <stop offset="1" stopColor="#D99A5D" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="465,486 535,486 640,150 360,150" fill="url(#bm)" />
            <g>
              <ellipse className="rp" cx="500" cy="490" rx="90" ry="16" strokeWidth="1.6" />
              <ellipse className="rp" style={{ animationDelay: "1s" }} cx="500" cy="490" rx="190" ry="34" strokeWidth="1.4" />
              <ellipse className="rp" style={{ animationDelay: "2s" }} cx="500" cy="490" rx="300" ry="54" strokeWidth="1.2" />
              <ellipse className="rp" style={{ animationDelay: "3s" }} cx="500" cy="490" rx="420" ry="76" strokeWidth="1" />
            </g>
            <g fill="none" stroke="#A4530C" opacity=".2">
              <ellipse cx="500" cy="490" rx="150" ry="26" />
              <ellipse cx="500" cy="490" rx="250" ry="44" />
              <ellipse cx="500" cy="490" rx="360" ry="64" />
            </g>
            <ellipse cx="500" cy="490" rx="64" ry="12" fill="#1a0e04" />
            <ellipse className="gl" cx="500" cy="486" rx="120" ry="34" fill="url(#gw)" />
            <ellipse cx="500" cy="488" rx="26" ry="6" fill="#FFFDF4" />
            <g>
              {WHY_RAYS.map((d, k) => (
                <g key={d}>
                  <path className={rays[k] ? "ray w8 on" : "ray w8"} d={d} />
                  <path className={rays[k] ? "ray on" : "ray"} d={d} />
                </g>
              ))}
            </g>
          </svg>
          {WHY_STEPS.map((s, k) => (
            <div
              key={s.title}
              className={["st", steps[k] >= 1 && "on", steps[k] === 2 && "ok"].filter(Boolean).join(" ")}
              style={{ left: s.left, top: s.top }}
            >
              <b>{steps[k] === 2 ? "✓" : k + 1}</b>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
