"use client";

import { useLayoutEffect } from "react";
import { Moon, Sun } from "./icons";

const KEY = "theme";

/** Runs in <head> before paint so the stored theme never flashes. */
export const themeScript = `(function(){try{var t=localStorage.getItem("${KEY}");if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

function currentTheme(): "dark" | "light" {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "dark" || attr === "light") return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle({ className }: { className?: string }) {
  // React's dev-mode remount clears attributes set by the inline script; re-apply them.
  useLayoutEffect(() => {
    try {
      const t = localStorage.getItem(KEY);
      if (t === "dark" || t === "light") document.documentElement.setAttribute("data-theme", t);
    } catch {}
  }, []);

  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(KEY, next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={
        "inline-flex size-11 items-center justify-center rounded-full text-lg text-muted transition-colors hover:bg-surface-2 hover:text-fg " +
        (className ?? "")
      }
    >
      <Sun className="icon-sun" />
      <Moon className="icon-moon" />
    </button>
  );
}
