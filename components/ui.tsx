import type { ComponentProps, ReactNode } from "react";

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Alternating background for visual rhythm. */
  tinted?: boolean;
};

export function Section({ id, eyebrow, title, intro, children, className, tinted }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "py-20 sm:py-24 lg:py-28",
        tinted && "border-y border-line bg-surface-2/50",
        className,
      )}
    >
      <Container>
        <header className="reveal mb-10 max-w-2xl sm:mb-14">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>
          ) : null}
        </header>
        {children}
      </Container>
    </section>
  );
}

type ButtonVariant = "primary" | "secondary" | "ghost";

const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.98] whitespace-nowrap";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-fg hover:bg-accent-strong shadow-sm",
  secondary: "border border-line bg-surface text-fg hover:border-fg/30 hover:bg-surface-2",
  ghost: "text-fg hover:bg-surface-2",
};

export function buttonClass(variant: ButtonVariant = "primary", className?: string) {
  return cn(buttonBase, buttonVariants[variant], className);
}

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: ButtonVariant;
  external?: boolean;
};

export function ButtonLink({ variant = "primary", external, className, ...props }: ButtonLinkProps) {
  return (
    <a
      className={buttonClass(variant, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    />
  );
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-surface px-2.5 py-1 text-xs font-medium text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Card({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("rounded-2xl border border-line bg-surface shadow-card", className)}
      {...props}
    />
  );
}

/** Visually hidden "(opens in a new tab)" hint for screen readers. */
export function NewTabHint() {
  return <span className="sr-only"> (opens in a new tab)</span>;
}
