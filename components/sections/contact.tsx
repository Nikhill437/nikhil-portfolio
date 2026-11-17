import { site } from "@/content/profile";
import { ContactForm } from "../contact-form";
import { CopyEmail } from "../copy-email";
import { ArrowUpRight, GitHub, LinkedIn, Mail, MapPin } from "../icons";
import { NewTabHint, Section } from "../ui";

export function Contact() {
  const channels = [
    {
      label: "LinkedIn",
      value: "Nikhil Satpute",
      href: site.socials.linkedin,
      icon: LinkedIn,
    },
    {
      label: "GitHub",
      value: "Nikhill437",
      href: site.socials.github,
      icon: GitHub,
    },
  ];

  return (
    <Section
      id="contact"
      tinted
      eyebrow="Contact"
      title="Let's work together"
      intro="Recruiters, hiring managers and clients are all welcome. Reach me by email, LinkedIn or the form below."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <div className="reveal space-y-4">
          <div className="rounded-2xl border border-line bg-surface p-5 shadow-card sm:p-6">
            <p className="mb-3 flex items-center gap-2 text-sm text-muted">
              <Mail className="text-accent" /> Email
            </p>
            <div className="flex items-center justify-between gap-3">
              <a
                href={`mailto:${site.email}`}
                className="min-w-0 break-all text-base font-semibold underline-offset-4 hover:text-accent hover:underline sm:text-lg"
              >
                {site.email}
              </a>
              <CopyEmail email={site.email} />
            </div>
          </div>

          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 shadow-card transition-colors hover:border-accent sm:p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface-2 text-xl">
                <c.icon />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm text-muted">{c.label}</span>
                <span className="block truncate font-semibold">{c.value}</span>
              </span>
              <ArrowUpRight className="text-muted transition-colors group-hover:text-accent" />
              <NewTabHint />
            </a>
          ))}

          <p className="flex items-center gap-2 px-1 text-sm text-muted">
            <MapPin /> Based in {site.location}.
          </p>
        </div>

        <div className="reveal rounded-2xl border border-line bg-surface p-5 shadow-card sm:p-8">
          <h3 className="mb-6 text-lg font-semibold">Send a message</h3>
          <ContactForm email={site.email} />
        </div>
      </div>
    </Section>
  );
}
