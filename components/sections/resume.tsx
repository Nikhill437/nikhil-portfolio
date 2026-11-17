import { site } from "@/content/profile";
import { Download, Eye, FileText } from "../icons";
import { ButtonLink, NewTabHint, Section } from "../ui";

const contents = [
  "Professional summary",
  "Technical skills",
  "Six roles across Flutter and web development",
  "Projects and Play Store apps",
  "Education",
];

export function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="View or download my resume">
      <div className="reveal grid items-center gap-8 overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-10 md:grid-cols-[auto_1fr]">
        <div
          aria-hidden="true"
          className="mx-auto hidden w-40 rotate-[-4deg] rounded-lg border border-line bg-bg p-4 shadow-xl transition-transform duration-500 hover:rotate-0 sm:block"
        >
          <div className="mb-3 h-2.5 w-2/3 rounded bg-fg/70" />
          <div className="mb-4 h-1.5 w-1/2 rounded bg-accent/70" />
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="mb-1.5 h-1 rounded bg-fg/10" style={{ width: `${70 + ((i * 37) % 30)}%` }} />
          ))}
        </div>

        <div>
          <p className="flex items-center gap-2 text-sm text-muted">
            <FileText className="text-accent" /> PDF · 2 pages
          </p>
          <p className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
            {site.name}, {site.title}
          </p>
          <ul className="mt-5 grid gap-2 text-sm text-muted sm:grid-cols-2">
            {contents.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.resume} download>
              <Download /> Download PDF
            </ButtonLink>
            <ButtonLink href={site.resume} external variant="secondary">
              <Eye /> View in browser
              <NewTabHint />
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
