import { Check } from "./icons";

/* Illustrative UI for each focus area. Decorative only, not app screenshots. */

function Bar({ w, className = "" }: { w: string; className?: string }) {
  return <div className={`h-2 rounded-full bg-fg/10 ${className}`} style={{ width: w }} />;
}

export function StreamingScreen() {
  return (
    <div className="flex h-full flex-col p-5">
      <div className="aspect-square w-full rounded-2xl bg-[radial-gradient(120%_100%_at_0%_0%,hsl(20_90%_60%),hsl(340_75%_45%))] shadow-lg" />
      <div className="mt-5 space-y-2">
        <Bar w="70%" className="bg-fg/25" />
        <Bar w="45%" />
      </div>
      <div className="mt-5 flex h-8 items-end justify-center gap-1" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="eq-bar w-1.5 rounded-full bg-accent motion-reduce:animate-none"
            style={{ animationDelay: `${(i * 97) % 700}ms` }}
          />
        ))}
      </div>
      <div className="mt-4 h-1 overflow-hidden rounded-full bg-fg/10">
        <div className="playhead h-full rounded-full bg-fg/70 motion-reduce:animate-none" />
      </div>
      <div className="mt-auto flex items-center justify-center gap-6 pb-2">
        <span className="size-0 border-y-[7px] border-r-[11px] border-y-transparent border-r-fg/50" />
        <span className="grid size-12 place-items-center rounded-full bg-fg">
          <span className="flex gap-1">
            <span className="h-4 w-1.5 rounded-sm bg-bg" />
            <span className="h-4 w-1.5 rounded-sm bg-bg" />
          </span>
        </span>
        <span className="size-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-fg/50" />
      </div>
    </div>
  );
}

export function OfflineScreen() {
  return (
    <div className="flex h-full flex-col p-5">
      <div className="flex items-center justify-between">
        <Bar w="40%" className="bg-fg/25" />
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-2.5 py-1 text-[10px] font-semibold text-lead">
          <span className="size-1.5 rounded-full bg-lead" /> Offline
        </span>
      </div>
      <ul className="mt-5 space-y-2.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <li key={i} className="flex items-center gap-3 rounded-xl bg-fg/[0.04] p-3">
            <span className="size-8 shrink-0 rounded-lg bg-fg/10" />
            <span className="flex-1 space-y-1.5">
              <Bar w={`${80 - i * 9}%`} className="bg-fg/20" />
              <Bar w={`${50 - i * 4}%`} />
            </span>
            {i < 3 ? (
              <Check className="text-emerald-500" />
            ) : (
              <span className="sync size-3.5 rounded-full border-2 border-accent border-t-transparent motion-reduce:animate-none" />
            )}
          </li>
        ))}
      </ul>
      <div className="mt-auto rounded-xl border border-dashed border-line p-3 text-center text-[10px] font-medium text-muted">
        Changes sync when you&apos;re back online
      </div>
    </div>
  );
}

export function PerformanceScreen() {
  const bars = [38, 42, 36, 40, 44, 39, 41, 37, 43, 40, 38, 42, 39, 41, 36, 40];
  return (
    <div className="flex h-full flex-col p-5">
      <Bar w="50%" className="bg-fg/25" />
      <Bar w="32%" className="mt-2" />
      <div className="relative mt-6 flex h-32 items-end gap-1 rounded-xl bg-fg/[0.04] p-3">
        <div className="absolute inset-x-3 top-[38%] border-t border-dashed border-emerald-500/60" />
        {bars.map((h, i) => (
          <span
            key={i}
            className="perf-bar flex-1 rounded-sm bg-emerald-500/80"
            style={{ height: `${h}%`, animationDelay: `${i * 40}ms` }}
          />
        ))}
      </div>
      <div className="mt-5 space-y-2.5">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="size-6 shrink-0 rounded-md bg-fg/10" />
            <Bar w={`${88 - ((i * 23) % 40)}%`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReleaseScreen() {
  const steps = ["Signed", "App bundle built", "Billing configured", "Released"];
  return (
    <div className="flex h-full flex-col p-5">
      <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-accent to-accent-strong text-2xl text-accent-fg shadow-lg">
        <Check />
      </div>
      <div className="mx-auto mt-4 w-2/3 space-y-2">
        <Bar w="100%" className="bg-fg/25" />
        <Bar w="60%" className="mx-auto" />
      </div>
      <ol className="mt-6 space-y-2.5">
        {steps.map((s, i) => (
          <li
            key={s}
            className="release-step flex items-center gap-3 rounded-xl bg-fg/[0.04] p-3 text-[11px] font-medium"
            style={{ animationDelay: `${150 + i * 180}ms` }}
          >
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald-500 text-[10px] text-white">
              <Check />
            </span>
            {s}
          </li>
        ))}
      </ol>
    </div>
  );
}
