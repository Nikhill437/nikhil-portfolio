import { projects } from "@/content/projects";
import { ProjectCard } from "../project-card";
import { Section } from "../ui";

const independent = projects.filter((p) => p.ownership === "independent");
const professional = projects.filter((p) => p.ownership !== "independent");

function Group({ title, description, items }: { title: string; description: string; items: typeof projects }) {
  return (
    <div>
      <div className="reveal mb-6 flex flex-col gap-1 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      tinted
      eyebrow="Projects"
      title="Selected work"
      intro="Apps I built on my own, and products I led or contributed to as part of a team. Each card shows my role and what I was responsible for."
    >
      <div className="space-y-16">
        <Group
          title="Independent projects"
          description="Designed and built by me"
          items={independent}
        />
        <Group
          title="Company & team projects"
          description="Built at Webtrix, HubOps and TechTrail"
          items={professional}
        />
      </div>
    </Section>
  );
}
