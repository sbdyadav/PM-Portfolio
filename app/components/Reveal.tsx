"use client";

import { useEffect } from "react";

export default function Reveal() {
  useEffect(() => {
    const reduce =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(max-width: 680px)").matches;
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (reduce || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    nodes.forEach((n) => io.observe(n));

    // failsafe: never leave content invisible
    const t = setTimeout(() => {
      nodes.forEach((n) => n.classList.add("is-in"));
    }, 3000);

    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return null;
}
