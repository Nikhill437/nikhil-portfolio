import type React from "react";
import type { Ownership, Project, ProjectLink } from "@/content/types";
import { ArrowUpRight, GitHub, Globe, GooglePlay } from "./icons";
import { ProjectPreview } from "./project-preview";
import { cn, NewTabHint, Tag } from "./ui";

const ownershipLabel: Record<Ownership, string> = {
  independent: "Independent",
  lead: "Led end to end",
  team: "Team project",
};

const ownershipStyle: Record<Ownership, string> = {
  independent: "border-accent/40 bg-accent-soft text-accent",
  lead: "border-lead/40 bg-lead/10 text-lead",
  team: "border-line bg-surface-2 text-muted",
};

function LinkIcon({ kind }: { kind: ProjectLink["kind"] }) {
  if (kind === "play") return <GooglePlay />;
  if (kind === "github") return <GitHub />;
  return <Globe />;
}

export function OwnershipBadge({ ownership }: { ownership: Ownership }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        ownershipStyle[ownership],
      )}
    >
      {ownershipLabel[ownership]}
    </span>
  );
}

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const titleId = `project-${project.slug}`;
  return (
    <article
      aria-labelledby={titleId}
      style={{ "--i": index % 3 } as React.CSSProperties}
      className="reveal group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-fg/20"
    >
      <ProjectPreview project={project} />

      <div className="flex flex-1 flex-col gap-4 border-t border-line p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <OwnershipBadge ownership={project.ownership} />
          <span className="text-xs text-muted">{project.platforms.join(" · ")}</span>
        </div>

        <div>
          <h3 id={titleId} className="text-lg font-semibold tracking-tight">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-muted">
            {project.role}
            {project.org ? ` at ${project.org}` : null}
          </p>
        </div>

        <p className="text-[0.95rem] leading-relaxed">{project.summary}</p>

        <ul className="space-y-2 text-sm leading-relaxed text-muted">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5">
              <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <ul aria-label="Technologies" className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.stack.map((s) => (
            <li key={s}>
              <Tag>{s}</Tag>
            </li>
          ))}
        </ul>

        {project.links.length > 0 ? (
          <div className="flex flex-wrap gap-2 border-t border-line pt-4">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line px-4 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <LinkIcon kind={link.kind} />
                {link.label}
                <ArrowUpRight className="text-xs opacity-60" />
                <NewTabHint />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
