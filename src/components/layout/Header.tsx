"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { NAV_LINKS, type PageKey } from "@/data/site";

interface HeaderProps {
  /** Which nav entry is highlighted. */
  current: PageKey;
  /**
   * Home only: the logo starts large in the hero and morphs into the bar while
   * scrolling, and the bar itself fades in. Other pages render the bar already docked.
   */
  morph?: boolean;
}

const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
const smooth = (t: number) => t * t * (3 - 2 * t);

export default function Header({ current, morph = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  /** Home only — bar is visible enough to receive pointer events (`.nav.on`). */
  const [barOn, setBarOn] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const lockRef = useRef<HTMLAnchorElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const openScrollY = useRef(0);

  const closeMenu = useCallback((returnFocus = false) => {
    setMenuOpen(false);
    if (returnFocus) burgerRef.current?.focus();
  }, []);

  /* ---- Mobile menu: Escape, outside click, scroll-away and resize all close it ---- */
  useEffect(() => {
    if (!menuOpen) return;
    openScrollY.current = window.scrollY;
    panelRef.current?.querySelector("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu(true);
    };
    const onDocClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !burgerRef.current?.contains(t)) closeMenu();
    };
    const onScroll = () => {
      if (Math.abs(window.scrollY - openScrollY.current) > 40) closeMenu();
    };
    const onResize = () => {
      if (window.innerWidth > 900) closeMenu();
    };

    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onDocClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onDocClick);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen, closeMenu]);

  /* ---- Home: hero → bar logo morph + bar fade-in (logic of the original wireframe) ---- */
  useEffect(() => {
    if (!morph) return;
    const nav = navRef.current;
    const lock = lockRef.current;
    const name = nameRef.current;
    if (!nav || !lock || !name) return;

    let padX = 32;
    const readPad = () => {
      padX = parseFloat(getComputedStyle(nav).paddingLeft) || 32;
    };

    const update = () => {
      const u = Math.min(window.innerWidth / 100, window.innerHeight / 56.25);
      const y = window.scrollY;
      const p = clamp01(y / (window.innerHeight * 0.55));
      const q = smooth(p);
      const H = 10.7 * u;
      const e = Math.min(1, 46 / H);
      const n = smooth(clamp01((p - 0.55) / 0.4));

      lock.style.left = 5 * u + (padX - 5 * u) * q + "px";
      lock.style.top = 9 * u + (19 - 9 * u) * q + "px";
      lock.style.transform = "scale(" + (1 + (e - 1) * q) + ")";
      name.style.fontSize = 0.72 - 0.14 * q + "em";

      nav.style.opacity = String(n);
      setBarOn(n > 0.5);
    };

    const onResize = () => {
      readPad();
      update();
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", onResize);
    readPad();
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
    };
  }, [morph]);

  const headerClass = ["nav", barOn && "on", menuOpen && "mopen"].filter(Boolean).join(" ");

  const links = NAV_LINKS.map((l) => (
    <li key={l.key}>
      <Link
        className={l.key === current ? "cur" : undefined}
        href={l.href}
        aria-current={l.key === current ? "page" : undefined}
      >
        {l.label}
      </Link>
    </li>
  ));

  return (
    <>
      {/* Animated brand: on Home it morphs from the hero into the bar; elsewhere it sits docked. */}
      <Link className="lock" id="lock" href="/" aria-label="SIRAJ — Accueil" ref={lockRef}>
        <span className="lk">
          <span className="lg a1" />
          <span className="nm a2" ref={nameRef}>
            SIRAJ
          </span>
        </span>
      </Link>

      <header className={headerClass} id="nav" ref={navRef}>
        {/* Brand slot (left) — the fixed #lock logo lands on top of it. */}
        <span className="brand" aria-hidden="true">
          <span className="lk">
            <span className="lg" />
            <span className="nm">SIRAJ</span>
          </span>
        </span>

        <nav className="mn" aria-label="Navigation principale">
          <ul>{links}</ul>
        </nav>

        <div className="nr">
          <Link className="btn" href="/contact">
            Nous contacter
          </Link>
          <button
            className="burger"
            id="burger"
            type="button"
            ref={burgerRef}
            aria-expanded={menuOpen}
            aria-controls="mm"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((o) => !o);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav
          className={menuOpen ? "mm open" : "mm"}
          id="mm"
          ref={panelRef}
          aria-label="Navigation mobile"
          aria-hidden={!menuOpen}
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) closeMenu();
          }}
        >
          <ul>{links}</ul>
          <Link className="btn" href="/contact">
            Nous contacter
          </Link>
        </nav>
      </header>
    </>
  );
}
