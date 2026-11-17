import { experience } from "@/content/profile";
import { Section } from "../ui";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      intro="Flutter roles across product companies and agencies since 2024, after starting out in web development."
    >
      <ol className="relative space-y-6 sm:space-y-8">
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-[7px] top-2 w-px bg-line md:left-[calc(12.5rem+7px)]"
        />
        {experience.map((job) => {
          const current = job.end === "Present";
          return (
            <li
              key={`${job.company}-${job.start}`}
              className="reveal relative grid gap-3 pl-8 md:grid-cols-[12.5rem_1fr] md:gap-8 md:pl-0"
            >
              <span
                aria-hidden="true"
                className={
                  "absolute left-0 top-1.5 size-[15px] rounded-full border-[3px] border-bg md:left-[12.5rem] " +
                  (current ? "bg-accent ring-4 ring-accent/20" : "bg-muted/60")
                }
              />
              <p className="font-mono text-sm text-muted md:pt-0.5 md:text-right md:pr-6">
                <span className="whitespace-nowrap">{job.start}</span> – <span className="whitespace-nowrap">{job.end}</span>
              </p>
              <div className="rounded-2xl border border-line bg-surface p-5 shadow-card sm:p-6 md:ml-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                  {current ? (
                    <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                      Current
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-muted">
                  {job.company} · {job.location}
                </p>
                <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-relaxed text-muted">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
