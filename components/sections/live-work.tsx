import { projects, websites } from "@/content/projects";
import { ArrowUpRight, Globe, GooglePlay } from "../icons";
import { NewTabHint, Section, Tag } from "../ui";

const liveApps = projects.flatMap((p) =>
  p.links.filter((l) => l.kind === "play").map((l) => ({ project: p, link: l })),
);

export function LiveWork() {
  return (
    <Section
      id="live-work"
      eyebrow="Live work"
      title="Websites & apps you can try"
      intro="Client websites I developed and apps currently available on Google Play."
    >
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="reveal min-w-0">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold">
            <Globe className="text-accent" /> Websites
          </h3>
          <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
            {websites.map((w) => {
              const inner = (
                <>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold">{w.name}</p>
                      <span className="rounded-full bg-surface-2 px-2 py-0.5 text-xs text-muted">{w.role}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      {w.description} Built at {w.org}.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {w.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>
                  </div>
                  {w.url ? (
                    <span className="flex shrink-0 items-center gap-1 text-sm font-medium text-accent">
                      <span className="hidden sm:inline">{new URL(w.url).hostname.replace(/^www\./, "")}</span>
                      <ArrowUpRight />
                    </span>
                  ) : (
                    <span className="shrink-0 text-xs text-muted">No longer online</span>
                  )}
                </>
              );
              return (
                <li key={w.name}>
                  {w.url ? (
                    <a
                      href={w.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-5 transition-colors hover:bg-surface-2 sm:p-6"
                    >
                      {inner}
                      <NewTabHint />
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-5 sm:p-6">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="reveal min-w-0">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold">
            <GooglePlay className="text-accent" /> On Google Play
          </h3>
          <ul className="space-y-3">
            {liveApps.map(({ project, link }) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 shadow-card transition-colors hover:border-accent"
                >
                  <span
                    aria-hidden="true"
                    className="grid size-12 shrink-0 place-items-center rounded-xl font-mono text-sm font-bold text-white"
                    style={{
                      background: `linear-gradient(140deg, hsl(${project.preview.hue} 80% 55%), hsl(${(project.preview.hue + 35) % 360} 75% 45%))`,
                    }}
                  >
                    {project.name.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold">{project.name}</span>
                    <span className="mt-0.5 block text-sm leading-snug text-muted">{project.summary}</span>
                  </span>
                  <ArrowUpRight className="shrink-0 text-muted transition-colors group-hover:text-accent" />
                  <NewTabHint />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Four of my apps have been published to Google Play, including INDRAYANI, Ping and CoreText.
            Listings shown here are the ones currently live.
          </p>
        </div>
      </div>
    </Section>
  );
}
