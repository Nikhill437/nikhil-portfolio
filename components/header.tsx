"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/profile";
import { Close, Menu } from "./icons";
import { navLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";
import { buttonClass, cn, Container } from "./ui";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: lock scroll, close on Escape and when resizing to desktop.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-line bg-bg/80 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/70"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="group flex items-center gap-2.5 font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-lg bg-fg font-mono text-xs font-bold text-bg transition-transform group-hover:-rotate-6"
          >
            NS
          </span>
          <span className="whitespace-nowrap">{site.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "rounded-full px-3 py-2 text-sm transition-colors",
                      isActive ? "bg-surface-2 text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a href="#contact" className={buttonClass("primary", "min-h-10 max-sm:hidden")}>
            Hire me
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-xl hover:bg-surface-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-bg lg:hidden"
      >
        <Container className="py-6">
          <nav aria-label="Mobile">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center border-b border-line text-lg font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 grid gap-3">
            <a href="#contact" onClick={() => setOpen(false)} className={buttonClass("primary")}>
              Hire me
            </a>
            <a href={site.resume} download className={buttonClass("secondary")}>
              Download resume
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
