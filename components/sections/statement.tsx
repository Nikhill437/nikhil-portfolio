import type { CSSProperties } from "react";
import { ScrollScene } from "../scroll-scene";
import { Container } from "../ui";

/** Words wrapped in *asterisks* are drawn in the accent colour. */
const STATEMENT =
  "I build cross-platform apps for *Android,* *iOS* and *web* with Flutter. Streaming media, offline-first data, subscriptions and Play Store releases, built with a focus on performance, quality and code that stays maintainable.";

export function Statement() {
  const words = STATEMENT.split(" ").map((raw) => ({
    text: raw.replace(/\*/g, ""),
    accent: raw.startsWith("*"),
  }));

  return (
    <ScrollScene mode="pin" aria-label="Summary" className="statement relative h-[230svh]">
      <div className="statement-pin sticky top-0 flex h-svh items-center">
        <Container>
          <p
            className="max-w-5xl text-[1.75rem] font-semibold leading-[1.18] tracking-tight text-balance sm:text-5xl lg:text-6xl"
            style={{ "--n": words.length } as CSSProperties}
          >
            {words.map((w, i) => (
              <span
                key={i}
                className={w.accent ? "word text-accent" : "word"}
                style={{ "--i": i } as CSSProperties}
              >
                {w.text}{" "}
              </span>
            ))}
          </p>
        </Container>
      </div>
    </ScrollScene>
  );
}
