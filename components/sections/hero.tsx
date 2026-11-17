import type React from "react";
import { heroStats, site } from "@/content/profile";
import { ArrowRight, Download, GitHub, LinkedIn, MapPin, Mail } from "../icons";
import { ScrollScene } from "../scroll-scene";
import { ButtonLink, Container, NewTabHint, Tag } from "../ui";

const stackPreview = ["Flutter", "Dart", "BLoC", "Firebase", "REST APIs", "SQLite"];

export function Hero() {
  return (
    <ScrollScene mode="exit" id="top" aria-labelledby="hero-heading" className="hero relative isolate overflow-hidden">
      <div aria-hidden="true" className="hero-grid hero-bg absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="hero-glow absolute left-1/2 top-[-10rem] -z-10 h-[28rem] w-[min(60rem,140vw)] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
      />

      <Container className="grid items-center gap-12 pb-12 pt-12 sm:pb-16 sm:pt-16 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pb-16 lg:pt-24">
        <div className="hero-copy">
          <p style={{ "--d": 0 } as React.CSSProperties} className="intro mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur sm:text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {site.availability}
          </p>

          <h1 id="hero-heading" style={{ "--d": 1 } as React.CSSProperties} className="intro text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {site.name}
            <span className="mt-3 block text-muted">
              <span className="text-fg">{site.title}</span> building apps for Android, iOS &amp; web.
            </span>
          </h1>

          <p style={{ "--d": 2 } as React.CSSProperties} className="intro mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I build fast, reliable cross-platform apps with Flutter and Dart, from streaming media and
            offline-first data to subscriptions and Play Store release. Four of my apps are live in
            production on Google Play.
          </p>

          <div style={{ "--d": 3 } as React.CSSProperties} className="intro mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#projects">
              View projects <ArrowRight />
            </ButtonLink>
            <ButtonLink href={site.resume} download variant="secondary">
              <Download /> Download resume
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost" className="sm:px-4">
              <Mail /> Contact me
            </ButtonLink>
          </div>

          <dl style={{ "--d": 4 } as React.CSSProperties} className="intro mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-2xl font-semibold tracking-tight sm:text-3xl">{s.value}</span>
                  <span aria-hidden="true" className="mt-1 block text-xs leading-snug text-muted sm:text-sm">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Profile card */}
        <div className="hero-card relative mx-auto w-full max-w-md lg:max-w-none">
          <div style={{ "--d": 3 } as React.CSSProperties} className="intro rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8">
            <div className="flex items-center gap-4">
              <div
                aria-hidden="true"
                className="grid size-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent-strong font-mono text-xl font-bold text-accent-fg"
              >
                NS
              </div>
              <div className="min-w-0">
                <p className="truncate text-lg font-semibold">{site.name}</p>
                <p className="text-sm text-muted">Flutter Developer at Webtrix Solutions</p>
              </div>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-muted">
              <MapPin className="shrink-0" /> {site.location}
            </p>

            <div className="mt-6">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">Daily stack</p>
              <ul className="flex flex-wrap gap-2">
                {stackPreview.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-6">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-line text-sm font-medium transition-colors hover:bg-surface-2"
              >
                <GitHub /> GitHub
                <NewTabHint />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-line text-sm font-medium transition-colors hover:bg-surface-2"
              >
                <LinkedIn /> LinkedIn
                <NewTabHint />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </ScrollScene>
  );
}
