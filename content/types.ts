export type LinkKind = "play" | "web" | "github" | "appstore";

export type ProjectLink = {
  label: string;
  href: string;
  kind: LinkKind;
};

/**
 * independent: built on my own
 * lead: led end to end while working inside a company
 * team: contributed as part of a larger team
 */
export type Ownership = "independent" | "lead" | "team";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  role: string;
  ownership: Ownership;
  /** Company the work was done at, when it was not independent. */
  org?: string;
  platforms: string[];
  stack: string[];
  highlights: string[];
  links: ProjectLink[];
  /** Path under /public, e.g. "/projects/ping.png". Leave empty to show the generated preview. */
  image?: string;
  /** Preview style when no screenshot is provided. */
  preview: { kind: "mobile" | "web"; hue: number };
};

export type Website = {
  name: string;
  /** Leave undefined when the site is no longer reachable. */
  url?: string;
  role: string;
  org: string;
  stack: string[];
  description: string;
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  points: string[];
};
