"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * pin:     tall section with a sticky child; 0 when its top hits the viewport top,
 *          1 when its bottom reaches the viewport bottom.
 * exit:    0 at rest, 1 once the section has scrolled fully out the top.
 * through: 0 when the top enters at the bottom, 1 when the bottom leaves at the top.
 */
type Mode = "pin" | "exit" | "through";

type Props = {
  mode: Mode;
  /** When set, also writes data-step (0..steps-1) for discrete, transition-driven changes. */
  steps?: number;
  id?: string;
  className?: string;
  style?: CSSProperties;
  "aria-labelledby"?: string;
  "aria-label"?: string;
  children: ReactNode;
};

/**
 * Writes scroll progress to the `--p` CSS variable (0..1) on every animation frame
 * while scrolling. No React re-renders: all motion is expressed in CSS.
 */
export function ScrollScene({ mode, steps, children, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;

    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      let p =
        mode === "pin"
          ? -r.top / Math.max(1, r.height - vh)
          : mode === "exit"
            ? -r.top / Math.max(1, r.height)
            : (vh - r.top) / (vh + r.height);
      p = Math.min(1, Math.max(0, p));
      if (reduce.matches) p = mode === "exit" ? 0 : 1;
      el.style.setProperty("--p", p.toFixed(4));
      if (steps) el.dataset.step = String(Math.min(steps - 1, Math.floor(p * steps)));
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduce.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduce.removeEventListener("change", schedule);
    };
  }, [mode, steps]);

  return (
    <section ref={ref} data-step={steps ? "0" : undefined} {...rest}>
      {children}
    </section>
  );
}
