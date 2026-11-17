import type { Project, Website } from "./types";

/**
 * Project content. To add a screenshot, drop an image in /public/projects
 * and set `image: "/projects/<file>"`. To add a link, append to `links`.
 *
 * Ownership notes: entries from the resume's "Projects" section are marked
 * "independent"; entries from the "Experience" section are "lead" or "team".
 */
export const projects: Project[] = [
  // ---------- Independent ----------
  {
    slug: "the-fire-within",
    name: "The Fire Within",
    summary:
      "A streaming media app delivering on-demand audio, with a full transport-control player that keeps playing in the background.",
    role: "Developer",
    ownership: "independent",
    platforms: ["Android", "iOS"],
    stack: ["Flutter", "Dart", "Audio streaming", "Media playback"],
    highlights: [
      "Background playback with media notification controls and audio focus handling, stable across calls, screen lock and lifecycle changes.",
      "Tuned streaming buffers and caching to cut network use, memory and battery drain on long sessions.",
      "Responsive, component-driven player UI for phones and tablets.",
    ],
    links: [],
    preview: { kind: "mobile", hue: 20 },
  },
  {
    slug: "ping",
    name: "Ping",
    summary:
      "A real-time cross-platform app with push notifications and premium subscriptions.",
    role: "Developer",
    ownership: "independent",
    platforms: ["Android", "iOS"],
    stack: ["Flutter", "Dart", "Firebase Cloud Messaging", "Google Play Billing"],
    highlights: [
      "Push notifications with FCM, notification channels, runtime permissions and background delivery.",
      "Subscriptions with free trials and premium tiers, including purchase verification and restoration.",
    ],
    // Play Store listing (https://play.google.com/store/apps/details?id=com.reallex.ping)
    // returned 404 when checked in Nov 2026. Re-add it here once the listing is live.
    links: [],
    preview: { kind: "mobile", hue: 200 },
  },
  {
    slug: "academixstore",
    name: "AcademixStore",
    summary:
      "A content delivery app with DRM protection, single-device login and subscription billing.",
    role: "Developer",
    ownership: "independent",
    platforms: ["Android", "iOS"],
    stack: ["Flutter", "Dart", "DRM", "Play Billing"],
    highlights: [
      "Content protection that blocks downloads, screenshots and screen recording.",
      "Single-device login and entitlement checks that hold across sessions and reinstalls.",
    ],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.divyansh.academixstore",
        kind: "play",
      },
    ],
    preview: { kind: "mobile", hue: 265 },
  },
  {
    slug: "iverify",
    name: "iVerify",
    summary:
      "An offline-first app that keeps full data access on unreliable networks and syncs when back online.",
    role: "Developer",
    ownership: "independent",
    platforms: ["Android", "iOS"],
    stack: ["Flutter", "Dart", "SQLite (sqflite)", "REST APIs"],
    highlights: [
      "SQLite as the local persistence layer so users keep working offline.",
      "Two-way sync with backend APIs, with conflict resolution and retry logic.",
    ],
    links: [],
    preview: { kind: "mobile", hue: 150 },
  },
  {
    slug: "coretext",
    name: "CoreText",
    summary:
      "A production Flutter app optimised for fast loading across devices and OS versions.",
    role: "Developer",
    ownership: "independent",
    platforms: ["Android"],
    stack: ["Flutter", "Dart"],
    highlights: [
      "Advanced state management and lazy loading to reduce load times.",
      "Fixed rendering and compatibility issues across OS versions and manufacturers before launch.",
    ],
    // Play Store listing (https://play.google.com/store/apps/details?id=coretext.digital)
    // returned 404 when checked in Nov 2026. Re-add it here once the listing is live.
    links: [],
    preview: { kind: "mobile", hue: 330 },
  },

  // ---------- Professional / team ----------
  {
    slug: "webtrix24",
    name: "Webtrix24",
    summary:
      "A business productivity app with invoicing, CRM and event scheduling, built offline-first.",
    role: "Flutter Developer",
    ownership: "team",
    org: "Webtrix Solutions",
    platforms: ["Android", "iOS", "Web"],
    stack: ["Flutter", "Dart", "SQLite"],
    highlights: [
      "SQLite-backed offline data access and synchronisation.",
      "Reduced widget rebuilds and tuned list rendering for low-end devices.",
    ],
    links: [],
    preview: { kind: "mobile", hue: 225 },
  },
  {
    slug: "irise",
    name: "Irise",
    summary:
      "A cross-platform Flutter app I led from architecture through release.",
    role: "Lead Flutter Developer",
    ownership: "lead",
    org: "Webtrix Solutions",
    platforms: ["Android", "iOS"],
    stack: ["Flutter", "Dart", "REST APIs", "Layered architecture"],
    highlights: [
      "Owned architecture, UI implementation, API integration and release.",
      "Modular, layered design separating UI, business logic and data.",
    ],
    links: [],
    preview: { kind: "mobile", hue: 45 },
  },
  {
    slug: "cricbet-jackpot",
    name: "Cricbet & Jackpot",
    summary:
      "Real-time betting apps for mobile and web with live match data, wallets and secure transactions.",
    role: "Flutter Developer",
    ownership: "team",
    org: "HubOps",
    platforms: ["Android", "iOS", "Web"],
    stack: ["Flutter", "Dart", "REST APIs", "Payment SDKs"],
    highlights: [
      "Live match data streaming with retry logic and error-state handling.",
      "Wallet management and payment SDK integration.",
    ],
    links: [],
    preview: { kind: "web", hue: 120 },
  },
  {
    slug: "camiwise",
    name: "Camiwise",
    summary: "A social media app where I delivered scalable frontend modules.",
    role: "Flutter Developer",
    ownership: "team",
    org: "HubOps",
    platforms: ["Android", "iOS"],
    stack: ["Flutter", "Dart"],
    highlights: [
      "Built frontend modules in collaboration with backend and cross-functional teams.",
    ],
    links: [],
    preview: { kind: "mobile", hue: 290 },
  },
  {
    slug: "indrayani",
    name: "INDRAYANI",
    summary: "A client-facing Flutter app published on the Google Play Store.",
    role: "Flutter Developer",
    ownership: "team",
    org: "TechTrail Technology",
    platforms: ["Android"],
    stack: ["Flutter", "Dart", "Provider", "GetX"],
    highlights: [
      "Provider and GetX state management with unit and widget tests for core flows.",
      "Handled Gradle config, app signing and AAB generation for release.",
    ],
    links: [],
    preview: { kind: "mobile", hue: 185 },
  },
];

export const websites: Website[] = [
  {
    name: "BrandSky",
    url: "https://www.brandsky.com",
    role: "Sole developer",
    org: "GRT Solutions",
    stack: ["PHP", "HTML", "CSS", "MySQL"],
    description: "Led the website end to end as the only developer on the project.",
  },
  {
    name: "InCozySpace",
    url: "https://www.incozyspace.com",
    role: "Web developer",
    org: "GRT Solutions",
    stack: ["PHP", "HTML", "CSS", "MySQL"],
    description: "Built a responsive website for a client project.",
  },
  {
    name: "EcoBoost",
    // ecoboost.in did not respond when checked in Nov 2026.
    role: "Web developer",
    org: "GRT Solutions",
    stack: ["PHP", "HTML", "CSS", "MySQL"],
    description: "Built a responsive website for a client project.",
  },
];
