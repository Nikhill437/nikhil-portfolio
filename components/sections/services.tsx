import type React from "react";
import { services, site } from "@/content/profile";
import { ArrowRight, Gauge, Globe, Layers, Plug, Rocket, Waves } from "../icons";
import { Card, Section } from "../ui";

const icons = [Layers, Rocket, Plug, Gauge, Waves, Globe];

export function Services() {
  return (
    <Section
      id="services"
      tinted
      eyebrow="Services"
      title="Need an app built? I can help."
      intro="I take on freelance work alongside full-time opportunities. Here's what I can deliver, based on what I've already built and shipped."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <li key={s.title} className="reveal" style={{ "--i": i % 3 } as React.CSSProperties}>
              <Card className="h-full p-6 transition-colors hover:border-accent/40">
                <span className="mb-5 grid size-11 place-items-center rounded-xl bg-accent-soft text-xl text-accent">
                  <Icon />
                </span>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </Card>
            </li>
          );
        })}
      </ul>

      <div className="reveal mt-10 flex flex-col gap-6 rounded-3xl bg-fg p-6 text-bg sm:p-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="text-xl font-semibold tracking-tight sm:text-2xl">Hiring, or have a project in mind?</p>
          <p className="mt-2 text-sm leading-relaxed opacity-75 sm:text-base">
            Tell me about the role or the app you want to build.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-bg px-5 text-sm font-medium text-fg transition-opacity hover:opacity-90"
          >
            Start a conversation <ArrowRight />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-bg/30 px-5 text-sm font-medium text-bg transition-colors hover:bg-bg/10"
          >
            Email me
          </a>
        </div>
      </div>
    </Section>
  );
}
