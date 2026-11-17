import Image from "next/image";
import type { Project } from "@/content/types";

/**
 * Shows the real screenshot when `project.image` is set, otherwise a
 * branded device mock-up. The mock-up is decorative, not a screenshot.
 */
export function ProjectPreview({ project }: { project: Project }) {
  const { hue, kind } = project.preview;
  const initials = project.name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const bg = {
    background: `radial-gradient(120% 90% at 0% 0%, hsl(${hue} 85% 62% / 0.35), transparent 60%), radial-gradient(100% 80% at 100% 100%, hsl(${(hue + 40) % 360} 80% 55% / 0.3), transparent 60%), var(--surface-2)`,
  };

  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden" style={bg}>
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  const tile = `linear-gradient(140deg, hsl(${hue} 80% 55%), hsl(${(hue + 35) % 360} 75% 45%))`;

  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-[16/10] items-end justify-center overflow-hidden"
      style={bg}
    >
      {kind === "mobile" ? (
        <div className="parallax relative h-[86%] w-[34%] translate-y-[8%] rounded-t-[1.4rem] border-[5px] border-b-0 border-fg/85 bg-surface shadow-xl transition-transform duration-500 group-hover:translate-y-[4%]">
          <div className="mx-auto mt-1.5 h-1.5 w-1/3 rounded-full bg-fg/80" />
          <div className="flex flex-col items-center gap-2 px-3 pt-5">
            <div
              className="grid size-11 place-items-center rounded-xl font-mono text-sm font-bold text-white shadow-md"
              style={{ background: tile }}
            >
              {initials}
            </div>
            <div className="h-1.5 w-3/4 rounded-full bg-fg/15" />
            <div className="h-1.5 w-1/2 rounded-full bg-fg/10" />
            <div className="mt-2 grid w-full grid-cols-2 gap-1.5">
              <div className="h-8 rounded-md bg-fg/[0.06]" />
              <div className="h-8 rounded-md bg-fg/[0.06]" />
              <div className="h-8 rounded-md bg-fg/[0.06]" />
              <div className="h-8 rounded-md bg-fg/[0.06]" />
            </div>
          </div>
        </div>
      ) : (
        <div className="parallax relative h-[78%] w-[78%] translate-y-[6%] overflow-hidden rounded-t-xl border border-b-0 border-line bg-surface shadow-xl transition-transform duration-500 group-hover:translate-y-[3%]">
          <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
            <span className="size-2 rounded-full bg-fg/20" />
            <span className="size-2 rounded-full bg-fg/20" />
            <span className="size-2 rounded-full bg-fg/20" />
            <span className="ml-2 h-2 w-1/3 rounded-full bg-fg/10" />
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-3 p-4">
            <div
              className="grid size-10 place-items-center rounded-lg font-mono text-xs font-bold text-white"
              style={{ background: tile }}
            >
              {initials}
            </div>
            <div className="space-y-2 pt-1">
              <div className="h-2 w-2/3 rounded-full bg-fg/15" />
              <div className="h-2 w-1/2 rounded-full bg-fg/10" />
            </div>
            <div className="col-span-2 grid grid-cols-3 gap-2">
              <div className="h-10 rounded-md bg-fg/[0.06]" />
              <div className="h-10 rounded-md bg-fg/[0.06]" />
              <div className="h-10 rounded-md bg-fg/[0.06]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
