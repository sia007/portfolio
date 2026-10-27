// Everything the site says lives in this file.
// Edit text, links and images here; the page layout reads from it.

export const site = {
  name: "Sarmad Ahmed",
  role: "Full-stack software engineer",
  location: "Salem, NJ",
  intro:
    "I’ve spent nearly four years building production web apps, most recently on ShowClix’s ticketing platform: React and TypeScript on the front, PHP/Laravel and SQL behind it, and payments that have to work when an event goes on sale.",
  github: "https://github.com/sia007",
  // Anything left empty is hidden on the page.
  email: "sia000777@gmail.com",
  linkedin: "https://www.linkedin.com/in/sarmad-irfan-6733b972",
  // Drop your PDF in /public (e.g. /public/resume.pdf) and set this to "/resume.pdf".
  resume: "",
  url: "https://sarmad-ahmed.vercel.app",
};

export const projects = [
  {
    slug: "cinema",
    title: "Cinema AI Seat Picker",
    tagline: "A movie booking flow that learns what you like and feels like walking into the theater.",
    summary:
      "An animated seat booking app with AI movie recommendations. It started as an experiment in more immersive ticketing UI, drawing on Seats.io, Ticketbooth and ShowClix, the platform I built features for at work, and grew through several versions into a full booking flow with recommendations, upsells and checkout.",
    theme: { band: "#17131F", accent: "#F2B544", onBand: "#F5EFE6" },
    images: [
      {
        src: "/projects/cinema-ai-seats.svg",
        alt: "Seat map with two selected premium seats, a tooltip for row D seat 8, AI movie picks and an order summary with promo code applied",
        caption: "Seat selection, AI picks and a live order total",
      },
      {
        src: "/projects/cinema-ai-checkout.svg",
        alt: "Checkout step with snack and merch cards and an order summary",
        caption: "Snacks and merch upsell before payment",
      },
    ],
    links: [
      { label: "Live demo", href: "https://cinema-seats-picker-ai.vercel.app" },
      { label: "Code", href: "https://github.com/sia007/cinema-seats-picker-ai" },
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "OpenRouter", "Vercel"],
    built: [
      "Animated seating chart with hover tooltips and booked seats that persist per movie",
      "Movie ranking by genre and tags, plus preference learning stored locally in the browser",
      "AI recommendations routed through OpenRouter’s free models",
      "Checkout with snack and merch upsells, promo codes and an animated confirmation",
    ],
    decisions: [
      {
        title: "Works without an API key",
        body: "If OpenRouter isn’t configured or doesn’t respond, recommendations fall back to local genre and tag ranking, so the booking flow never breaks because an AI call did.",
      },
      {
        title: "Preferences stay on the device",
        body: "What you book is learned in localStorage rather than a user database. No sign-up is needed, and recommendations still get better the more you use it.",
      },
    ],
    evolution: [
      {
        name: "cinema-seats-picker",
        href: "https://github.com/sia007/cinema-seats-picker",
        note: "Seat map, tooltips, promo codes and checkout in Next.js 14, deployed to GitHub Pages with GitHub Actions.",
      },
      {
        name: "cinema-seats-picker-ai",
        href: "https://github.com/sia007/cinema-seats-picker-ai",
        note: "Added AI recommendations and preference learning, and moved to Vercel for server-side API routes.",
      },
    ],
  },
  {
    slug: "fleet",
    title: "Fleet maintenance tracker",
    tagline: "A Django REST API and React dashboard for a company’s vehicles, offices, mechanics and service history.",
    summary:
      "Built for an engineering take-home where the backend counted for half the grade. Beyond CRUD, the API answers the questions a fleet manager actually asks: which offices are spending the most, which mechanics are busiest, which vehicles are overdue for service, and whether a new vehicle is a duplicate. The React front end runs end to end against it.",
    theme: { band: "#DCE4F2", accent: "#2563EB", onBand: "#16233A" },
    images: [
      {
        src: "/projects/fleet-vehicles.png",
        width: 1600,
        height: 935,
        alt: "Vehicles page with filters for office, status, make, model, service dates and mechanic certification number, above a table of vehicles with active and inactive badges",
        caption: "Vehicle search, with filters kept in the URL",
      },
      {
        src: "/projects/fleet-dashboard.png",
        width: 1600,
        height: 935,
        alt: "Fleet dashboard showing 6 offices, 45 active vehicles and $92,701.40 maintenance cost over 12 months, with a per-office table",
        caption: "Dashboard built on the office summary endpoint",
      },
      {
        src: "/projects/fleet-workload.png",
        width: 1600,
        height: 571,
        alt: "Mechanic workload table listing records completed and total cost this year, busiest mechanic first",
        caption: "Mechanic workload for the current year, busiest first",
      },
    ],
    links: [
      { label: "Code", href: "https://github.com/sia007/limit_challenge/tree/main/backend_focused" },
      {
        label: "Backend write-up",
        href: "https://github.com/sia007/limit_challenge/blob/main/backend_focused/backend/README.md",
      },
    ],
    stack: ["Python", "Django", "Django REST Framework", "django-filter", "React", "TypeScript", "Material UI", "TanStack Query", "Vite"],
    built: [
      "CRUD endpoints for offices, vehicles, mechanics and maintenance records",
      "Vehicle search by any mix of office, status, make, model, service dates and mechanic certification number",
      "Reports for office spending, mechanic workload, overdue vehicles and duplicate VIN or plate checks",
      "A seed command with realistic data, including one vehicle with 300 service records to test performance",
    ],
    decisions: [
      {
        title: "Two queries, however long the history",
        body: "Vehicle detail loads the office with a join and the whole service history, mechanics included, in one prefetch. It stays at two queries whether a vehicle has no records or 10,000, and a test with assertNumQueries holds it there.",
      },
      {
        title: "The database enforces the rules",
        body: "A conditional unique constraint stops two active vehicles sharing a plate, even through the admin or bulk inserts. The API turns violations into clear field errors, and deleting an office that still has vehicles returns a 409 instead of a crash.",
      },
      {
        title: "Reports computed in SQL",
        body: "Office totals, workload and overdue lists are single annotated queries with filtered counts and sums. Never-serviced vehicles sort first in the overdue list, since they’re the most overdue of all.",
      },
    ],
  },
  {
    slug: "voice-bot",
    title: "Voice QA caller for an AI receptionist",
    tagline: "A bot that phones a medical practice’s AI agent, plays realistic patients and writes up what goes wrong.",
    summary:
      "Built for Pretty Good AI’s voice bot challenge. The bot dials a real test line, holds natural spoken conversations as twelve different patient personas, records and transcribes every call, and drafts a bug report from the transcripts.",
    theme: { band: "#1C2230", accent: "#C9A8F2", onBand: "#E6EAF2" },
    images: [
      {
        src: "/projects/voice-bot.svg",
        alt: "Terminal log of calls being placed and transcribed, next to a drafted bug report, a Twilio to FastAPI to OpenAI Realtime diagram and a two-channel waveform",
        caption: "A run in progress, with the bug report it drafted",
      },
    ],
    links: [
      { label: "Code", href: "https://github.com/sia007/voice-bot-challenge" },
      { label: "Architecture write-up", href: "https://github.com/sia007/voice-bot-challenge/blob/main/ARCHITECTURE.md" },
    ],
    stack: ["Python", "FastAPI", "asyncio", "Twilio Media Streams", "OpenAI Realtime API", "ngrok"],
    built: [
      "Outbound calls through Twilio, streamed over WebSocket into an OpenAI Realtime session",
      "Twelve patient scenarios, from simple scheduling to refills and interruptions",
      "Transcripts written turn by turn during the call, so a crash still leaves evidence",
      "A two-pass LLM analyzer that turns transcripts into a draft bug report",
    ],
    decisions: [
      {
        title: "Speech-to-speech over a stitched pipeline",
        body: "One Realtime session handles listening, thinking and speaking with built-in interruption, instead of STT, LLM and TTS hops that each add latency. Both sides speak 8 kHz mu-law, so audio is relayed with no resampling code.",
      },
      {
        title: "Listen before speaking",
        body: "Early transcripts showed the bot talking over the practice’s phone menu and getting confused about its role. It now waits about 3.5 seconds and only opens the call if the line stays silent.",
      },
      {
        title: "A second pass across all calls",
        body: "Judged one call at a time, the analyzer reported six unrelated minor issues. Reading every call together revealed one serious bug: the agent claims to transfer you and then hangs up.",
      },
    ],
  },
  {
    slug: "folio",
    title: "Folio document sharing",
    tagline: "Scheduled publishing, readable IDs and search, added to an existing PHP app.",
    summary:
      "Feature work on an existing document sharing product. Staff can schedule when a document goes live, share documents by readable IDs, and find them by name instead of scrolling. The work includes a migration system the original codebase didn’t have.",
    theme: { band: "#E4E8E1", accent: "#2E6B4F", onBand: "#22312A" },
    images: [
      {
        src: "/projects/folio.svg",
        alt: "Documents admin screen filtered by the word welcome, with readable IDs, scheduled status badges, a schedule form and passing tests",
        caption: "Search, readable IDs and scheduled publishing",
      },
    ],
    links: [{ label: "Code", href: "https://github.com/sia007/folio-takehome" }],
    stack: ["PHP", "SQLite", "Docker Compose", "SQL migrations"],
    built: [
      "Scheduled publishing, where future documents show “Document not yet available” until their time",
      "Readable IDs like welcome-packet-a3f9, made from the title plus a random suffix",
      "Search by title with partial matching",
      "A lightweight SQL-file migration runner, plus tests for each new feature",
    ],
    decisions: [
      {
        title: "Readable IDs stay internal",
        body: "Readable IDs are for staff. Public recipient links keep their secure share tokens, so documents can’t be found by guessing a title.",
      },
      {
        title: "Collisions handled in two places",
        body: "The app checks for an existing ID and retries before inserting, and a unique index in the database guarantees it even if two requests race.",
      },
      {
        title: "Migrations instead of editing the schema",
        body: "The project only had a schema.sql file. A small runner applies numbered SQL files and records them in a schema_migrations table, so changes stay incremental.",
      },
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Leap Event Technology",
    product: "ShowClix",
    dates: "Jan 2023 – Apr 2026",
    highlight:
      "Built a self-service ticket exchange that cut manual exchanges by over 80% within three months.",
    points: [
      "Built full-stack features with React, TypeScript, PHP/Laravel and MySQL.",
      "Designed REST APIs and integrated Stripe, PayPal, Square, Apple Pay, Google Pay, Afterpay/Clearpay, TicketGuardian and Disney Membership SSO.",
      "Optimized SQL queries and backend workflows for high-traffic on-sales.",
      "Integrated a Python localization library into the PHP backend for multilingual tickets.",
      "Supported CI/CD and production deploys with GitHub Actions, Docker, Linux and Bash.",
    ],
  },
  {
    role: "Technical Support Engineer",
    company: "6 River Systems",
    product: "Shopify",
    dates: "Sep 2021 – Sep 2022",
    points: [
      "Built internal Python/Flask tools to automate operational workflows.",
      "Integrated warehouse management systems with cloud robotics software.",
    ],
  },
];

export const skills = [
  { group: "Languages", items: "JavaScript, TypeScript, PHP, Python, Java, SQL, Bash" },
  { group: "Frontend", items: "React, Next.js, Tailwind CSS, Redux, HTML, CSS" },
  { group: "Backend", items: "Laravel, Flask, FastAPI, Django, Node.js, SQLAlchemy" },
  { group: "Databases", items: "MySQL, PostgreSQL, SQLite" },
  { group: "Cloud and DevOps", items: "AWS, Docker, Linux, Git, GitHub Actions" },
  { group: "Payments and auth", items: "Stripe, PayPal, Square, Apple Pay, Google Pay, Afterpay/Clearpay, Disney SSO" },
];

export const education = [
  {
    degree: "M.S. Information Systems Engineering",
    school: "Johns Hopkins University",
    dates: "2020 – 2022",
  },
  {
    degree: "B.S. Biomedical Engineering, minor in Biomedical Informatics",
    school: "Drexel University",
    dates: "2016 – 2020",
  },
];
