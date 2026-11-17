import type React from "react";
import { about } from "@/content/profile";
import { Section } from "../ui";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Mobile engineer focused on quality apps that ship">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="reveal">
              {p}
            </p>
          ))}
        </div>

        <div className="reveal" style={{ "--i": 1 } as React.CSSProperties}>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Education</h3>
          <ol className="relative space-y-4 border-l border-line pl-6">
            {about.education.map((e) => (
              <li key={e.degree} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[calc(1.5rem+5px)] top-1.5 size-[9px] rounded-full bg-accent"
                />
                <p className="font-mono text-sm text-muted">{e.period}</p>
                <p className="mt-1 font-medium">{e.degree}</p>
                <p className="text-sm text-muted">{e.school}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
