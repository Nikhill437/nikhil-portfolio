import type { CSSProperties } from "react";
import { about } from "@/content/profile";
import { Gauge, Rocket, Smartphone, Waves } from "../icons";
import { ScrollScene } from "../scroll-scene";
import {
  OfflineScreen,
  PerformanceScreen,
  ReleaseScreen,
  StreamingScreen,
} from "../showcase-screens";
import { Container } from "../ui";

const screens = [StreamingScreen, OfflineScreen, PerformanceScreen, ReleaseScreen];
const icons = [Waves, Smartphone, Gauge, Rocket];

export function Showcase() {
  const items = about.focus;
  return (
    <ScrollScene
      id="focus"
      mode="pin"
      steps={items.length}
      aria-labelledby="focus-heading"
      className="showcase relative h-[420svh] border-y border-line bg-surface-2/50"
    >
      <div className="showcase-pin sticky top-0 flex h-svh flex-col overflow-hidden pt-16">
        <Container className="flex flex-1 flex-col justify-center gap-4 py-4 sm:py-6 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
              What I focus on
            </p>
            <h2
              id="focus-heading"
              className="max-w-xl text-2xl font-semibold tracking-tight text-balance sm:text-4xl"
            >
              The hard parts of mobile, handled.
            </h2>

            <ol className="caps relative mt-4 min-h-[7.5rem] sm:mt-8 sm:min-h-[9rem]">
              {items.map((f, i) => {
                const Icon = icons[i];
                return (
                  <li key={f.title} data-i={i} className="cap absolute inset-0">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-lg text-accent">
                        <Icon />
                      </span>
                      <span className="font-mono text-xs text-muted">
                        {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{f.title}</h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                      {f.text}
                    </p>
                  </li>
                );
              })}
            </ol>

            <div aria-hidden="true" className="progress mt-3 flex items-center gap-2 sm:mt-6">
              {items.map((f, i) => (
                <span key={f.title} data-i={i} className="dot h-1.5 rounded-full bg-fg/15" />
              ))}
            </div>
          </div>

          {/* Device */}
          <div aria-hidden="true" className="phone-wrap order-1 flex justify-center lg:order-2">
            <div className="phone relative aspect-[9/19] h-[560px] rounded-[2.4rem] border-[7px] border-fg/90 bg-surface shadow-2xl">
              <div className="absolute left-1/2 top-2 z-10 h-5 w-1/3 -translate-x-1/2 rounded-full bg-fg/90" />
              <div className="absolute inset-0 overflow-hidden rounded-[1.9rem] pt-7">
                {screens.map((Screen, i) => (
                  <div key={i} data-i={i} className="screen absolute inset-0 pt-7">
                    <Screen />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>

        <div
          aria-hidden="true"
          className="h-0.5 origin-left bg-accent"
          style={{ transform: "scaleX(var(--p, 0))" } as CSSProperties}
        />
      </div>
    </ScrollScene>
  );
}
