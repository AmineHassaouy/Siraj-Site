"use client";

import { useEffect, useRef, useState } from "react";
import { AUDIENCES } from "@/data/home";

/**
 * Accordion: one row open at a time. Clicking the open row closes it.
 *
 * Note: rows also carry `.rv`, whose `.in` class is toggled by <ScrollReveal /> through
 * classList. To keep React from ever rewriting that className, the `op` class is toggled
 * the same way (imperatively) while `aria-expanded` is driven from state.
 */
export default function AudiencesSection() {
  const [open, setOpen] = useState<number | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    rowRefs.current.forEach((row, k) => row?.classList.toggle("op", k === open));
  }, [open]);

  const toggle = (k: number) => setOpen((cur) => (cur === k ? null : k));

  return (
    <section id="publics">
      <div className="w">
        <div className="rv">
          <div className="lab">Pour qui</div>
          <h2 className="t">Nos publics cibles</h2>
          <p className="sub">Cliquez sur une catégorie pour la découvrir.</p>
        </div>
        <div className="rows">
          {AUDIENCES.map((a, k) => (
            <div
              key={a.title}
              className="rw rv"
              role="button"
              tabIndex={0}
              aria-expanded={open === k}
              ref={(el) => {
                rowRefs.current[k] = el;
              }}
              onClick={() => toggle(k)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(k);
                }
              }}
            >
              <div className="md">
                {/* eslint-disable-next-line @next/next/no-img-element -- natural size unknown; sized purely by CSS (.ph) */}
                <img className="ph" src={a.image} alt={a.alt} loading="lazy" decoding="async" />
                <h3>{a.title}</h3>
              </div>
              <div className="tx">
                <p>{a.text}</p>
              </div>
              <span className="pm">+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
