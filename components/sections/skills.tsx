import type React from "react";
import { skillGroups } from "@/content/profile";
import { cn, Section } from "../ui";

export function Skills() {
  return (
    <Section
      id="skills"
      tinted
      eyebrow="Skills"
      title="Skills & technologies"
      intro="The tools I use to design, build, test and ship cross-platform apps."
    >
      <div className="gap-4 sm:columns-2 lg:columns-3">
        {skillGroups.map((g, i) => (
          <div
            key={g.title}
            style={{ "--i": i % 3 } as React.CSSProperties}
            className={cn(
              "reveal mb-4 break-inside-avoid rounded-2xl border p-5 sm:p-6",
              g.primary ? "border-accent/30 bg-accent-soft" : "border-line bg-surface",
            )}
          >
            <h3 className="mb-4 text-sm font-semibold">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className={cn(
                    "rounded-lg px-2.5 py-1.5 text-sm",
                    g.primary
                      ? "bg-surface font-medium text-fg shadow-sm"
                      : "bg-surface-2 text-muted",
                  )}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
