import { site } from "@/content/profile";
import { GitHub, LinkedIn, Mail } from "./icons";
import { navLinks } from "./nav-links";
import { Container } from "./ui";

export function Footer() {
  const socials = [
    { label: "Email", href: `mailto:${site.email}`, icon: Mail },
    { label: "LinkedIn", href: site.socials.linkedin, icon: LinkedIn },
    { label: "GitHub", href: site.socials.github, icon: GitHub },
  ];
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-muted">
            {site.title} · {site.location}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="flex gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="grid size-11 place-items-center rounded-full border border-line text-lg text-muted transition-colors hover:border-fg/30 hover:text-fg"
              >
                <s.icon />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
