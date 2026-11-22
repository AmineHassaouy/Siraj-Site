"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal shared by every page: toggles `.in` on every `.rv` element while it is
 * in the viewport (replays on each entry) — same observer settings as the wireframes.
 * Renders nothing.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle("in", e.isIntersecting));
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
