import type { Experience } from "./types";

export const site = {
  name: "Nikhil Satpute",
  title: "Flutter Developer",
  tagline: "Cross-platform & streaming applications",
  description:
    "Nikhil Satpute is a Flutter developer in Pune, India, building cross-platform apps for Android, iOS and web, with four production apps published on Google Play.",
  /** Set NEXT_PUBLIC_SITE_URL to the deployed domain so social previews use absolute URLs. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  location: "Pune, Maharashtra, India",
  email: "satputenikhil32002@gmail.com",
  resume: "/resume/Nikhil_Satpute_Resume.pdf",
  socials: {
    github: "https://github.com/Nikhill437",
    linkedin: "https://www.linkedin.com/in/nikhil-satpute-b96360286",
  },
  availability: "Open to full-time roles and freelance projects",
};

export const heroStats = [
  { value: "2 yrs", label: "Flutter experience" },
  { value: "4", label: "Apps on Google Play" },
  { value: "3", label: "Platforms: Android, iOS, web" },
];

export const about = {
  paragraphs: [
    "I'm a Flutter developer with two years of experience building cross-platform applications for Android, iOS and the web using Flutter and Dart. I've worked across business productivity, invoicing, real-time betting, social media and content delivery products, and published four production apps to the Google Play Store.",
    "My work spans the full app lifecycle: architecture, reusable UI components, REST API and Firebase integration, state management with BLoC, Provider and GetX, testing, and release through Play Console. I care about performance, quality and code that stays maintainable as a product grows.",
    "Before moving to Flutter I built responsive websites for client projects with PHP, HTML, CSS and MySQL. I hold an M.Sc. and a B.Sc. in Computer Science from PVG's College of Science and Commerce, Pune.",
  ],
  focus: [
    {
      title: "Streaming media",
      text: "Streamed playback, buffering, background audio, media notification controls and session handling.",
    },
    {
      title: "Offline-first data",
      text: "SQLite persistence with sync, conflict resolution and retry logic for unreliable networks.",
    },
    {
      title: "Performance",
      text: "Fewer widget rebuilds, tuned list rendering and lazy loading for responsive apps on low-end devices.",
    },
    {
      title: "Release & monetisation",
      text: "App signing, AAB builds, Play Console releases and Google Play Billing subscriptions.",
    },
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "PVG's College of Science and Commerce, Pune",
      period: "2023 – 2025",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "PVG's College of Science and Commerce, Pune",
      period: "2020 – 2023",
    },
  ],
};

export const skillGroups: { title: string; primary?: boolean; items: string[] }[] = [
  {
    title: "Core",
    primary: true,
    items: ["Flutter", "Dart", "Android", "iOS", "Web"],
  },
  {
    title: "State management",
    primary: true,
    items: ["BLoC", "Cubit", "Provider", "GetX"],
  },
  {
    title: "Streaming & media",
    items: [
      "Audio streaming",
      "Streamed playback & buffering",
      "Background playback",
      "Media notification controls",
      "Audio focus handling",
      "Media session handling",
    ],
  },
  {
    title: "UI & architecture",
    items: [
      "Component-driven development",
      "Reusable UI components",
      "Responsive & adaptive UI",
      "Material Design",
      "Modular & layered architecture",
      "MVC",
    ],
  },
  {
    title: "APIs & integration",
    items: [
      "REST APIs",
      "JSON",
      "JWT authentication",
      "Third-party SDKs",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Firebase & billing",
    items: [
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Cloud Messaging",
      "Google Play Billing",
    ],
  },
  {
    title: "Languages",
    items: ["Dart", "Kotlin", "Java", "JavaScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Databases & storage",
    items: ["SQLite (sqflite)", "Shared Preferences", "MySQL", "MongoDB"],
  },
  {
    title: "Tools & release",
    items: [
      "Git & GitHub",
      "Android Studio",
      "Xcode",
      "VS Code",
      "Postman",
      "Gradle",
      "Google Play Console",
      "App signing",
      "Android App Bundles",
    ],
  },
  {
    title: "Quality & practices",
    items: [
      "Unit testing",
      "Widget testing",
      "Debugging",
      "Performance profiling",
      "Code reviews",
      "Agile / Scrum",
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "Flutter Developer",
    company: "Webtrix Solutions Pvt. Ltd.",
    location: "Pune, MH",
    start: "Aug 2026",
    end: "Present",
    points: [
      "Develop and maintain Webtrix24, a cross-platform business productivity app with invoicing, CRM and event scheduling, using SQLite for offline-first data access and synchronisation.",
      "Optimise performance by reducing unnecessary widget rebuilds and tuning list rendering, improving responsiveness on low-end devices.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "HubOps",
    location: "Remote",
    start: "Mar 2026",
    end: "May 2026",
    points: [
      "Developed real-time betting apps (Cricbet, Jackpot) for mobile and web with live match data streaming, wallet management and secure transaction flows.",
      "Built reusable UI components and responsive, adaptive layouts that render consistently across screen sizes.",
      "Integrated REST APIs and third-party payment SDKs, handling authentication, error states and retry logic for reliable live data.",
      "Delivered frontend modules for the Camiwise social media app alongside backend and cross-functional teams.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Brilliantech Software",
    location: "Pune, MH",
    start: "Aug 2025",
    end: "Nov 2025",
    points: [
      "Integrated AI-driven data extraction and validation into Flutter mobile and web invoicing apps, reducing manual data entry.",
      "Built GST-compliant invoicing workflows covering tax calculation, validation and reporting.",
      "Integrated backend services through REST APIs with JWT authentication and secure storage for financial data.",
      "Resolved defects across devices and OS versions to improve stability.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Webtrix Solutions Pvt. Ltd.",
    location: "Pune, MH",
    start: "Mar 2025",
    end: "Jul 2025",
    points: [
      "Led end-to-end development of the Irise cross-platform app, owning architecture, UI, API integration and release.",
      "Designed a modular, layered architecture separating UI, business logic and data layers.",
    ],
  },
  {
    role: "Flutter Developer (Intern to Consultant)",
    company: "TechTrail Technology",
    location: "Pune, MH",
    start: "Jul 2024",
    end: "Mar 2025",
    points: [
      "Developed and deployed client-facing Flutter apps, including INDRAYANI, published on the Google Play Store.",
      "Implemented state management with Provider and GetX and wrote unit and widget tests for core flows.",
      "Managed build and release: Gradle configuration, app signing and Android App Bundle generation.",
      "Worked in an Agile team, taking part in code reviews and technical design discussions.",
    ],
  },
  {
    role: "Web Developer",
    company: "GRT Solutions",
    location: "Pune, MH",
    start: "Feb 2024",
    end: "Jul 2024",
    points: [
      "Built responsive websites for client projects (ECOBOOST.IN, INCOZYSPACE.com) with PHP, HTML, CSS and MySQL.",
      "Led BRANDSKY.com end to end as the sole developer.",
    ],
  },
];

export const services = [
  {
    title: "Cross-platform apps",
    text: "Flutter apps for Android, iOS and web from one codebase, structured in modular layers so they are easy to extend.",
  },
  {
    title: "Play Store launch",
    text: "App signing, Android App Bundles, Play Console setup and releases, plus subscriptions with Google Play Billing.",
  },
  {
    title: "API & Firebase integration",
    text: "REST APIs with JWT auth, Firebase Authentication, Firestore, push notifications with FCM, and payment SDKs.",
  },
  {
    title: "Offline-first & performance",
    text: "Local SQLite storage with sync and retry, and profiling to remove jank on low-end devices.",
  },
  {
    title: "Streaming & media",
    text: "Audio streaming with background playback, notification controls and stable media sessions.",
  },
  {
    title: "Business websites",
    text: "Responsive websites built with PHP, HTML, CSS and MySQL.",
  },
];
