import { T as jsxRuntimeExports } from "./worker-entry-PuPXjF4I.js";
import { c as createLucideIcon, P as PageShell, a as PageHeader } from "./PageShell-DYXeSLXL.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-CmJ6Rixq.js";
const __iconNode$6 = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4", key: "10igwf" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M12 13h4", key: "1ku699" }],
  ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }],
  ["path", { d: "M12 8h8", key: "1lhi5i" }],
  ["path", { d: "M16 8V5a2 2 0 0 1 2-2", key: "u6izg6" }],
  ["circle", { cx: "16", cy: "13", r: ".5", key: "ry7gng" }],
  ["circle", { cx: "18", cy: "3", r: ".5", key: "1aiba7" }],
  ["circle", { cx: "20", cy: "21", r: ".5", key: "yhc1fs" }],
  ["circle", { cx: "20", cy: "8", r: ".5", key: "1e43v0" }]
];
const BrainCircuit = createLucideIcon("brain-circuit", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
];
const Cloud = createLucideIcon("cloud", __iconNode$5);
const __iconNode$4 = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
];
const Database = createLucideIcon("database", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
];
const GitBranch = createLucideIcon("git-branch", __iconNode$3);
const __iconNode$2 = [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
];
const Server = createLucideIcon("server", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$1);
const __iconNode = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode);
const stack = [{
  icon: Smartphone,
  title: "Frontend",
  tools: ["React.js", "Tailwind CSS", "Vite", "Framer Motion"],
  body: "Responsive PWA-ready UI. Mood journal, dashboard, peer forum."
}, {
  icon: Server,
  title: "Backend API",
  tools: ["Node.js", "Express", "JWT auth", "Zod validation"],
  body: "REST API for users, journals, badges, forum threads & moderation queue."
}, {
  icon: Database,
  title: "Database",
  tools: ["MongoDB Atlas", "Mongoose"],
  body: "Stores anonymized user logs, mood history, forum posts. Sensitive fields encrypted at rest."
}, {
  icon: BrainCircuit,
  title: "AI / ML layer",
  tools: ["Python", "FastAPI", "HuggingFace transformers", "scikit-learn"],
  body: "Sentiment classification (positive/neutral/negative) + hybrid recommendation engine (rules + ML)."
}, {
  icon: Cloud,
  title: "Deployment",
  tools: ["Vercel (frontend)", "Render (Node)", "Docker on AWS/GCP (ML)"],
  body: "Each layer deploys independently. ML API is containerized for portable, GPU-friendly hosting."
}, {
  icon: ShieldCheck,
  title: "Security & Privacy",
  tools: ["JWT", "bcrypt", "TLS", "Anonymized telemetry"],
  body: "No PII shared with third parties. Users own their data and can export or delete it anytime."
}, {
  icon: GitBranch,
  title: "DevOps",
  tools: ["GitHub Actions", "ESLint", "Pytest", "Vitest"],
  body: "CI runs lint + tests on every PR. CD ships frontend, API and ML container on tag."
}];
function ArchitecturePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Architecture", title: "Three layers, one calm experience.", description: "MindEase is split into a presentation layer, an application layer, and an AI inference layer — each independently scalable." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArchDiagram, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.2em] text-sage-deep", children: "Tech stack" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl", children: "Built with proven, open tools." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-sage-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.body }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: s.tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground", children: t }, t)) })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.2em] text-sage-deep", children: "Data flow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl", children: "A single mood entry, end to end." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-10 space-y-4", children: [{
        n: "1",
        t: "User submits a journal entry from the React app."
      }, {
        n: "2",
        t: "Node.js API authenticates with JWT and persists the entry to MongoDB (anonymized)."
      }, {
        n: "3",
        t: "API forwards the text to the FastAPI ML service."
      }, {
        n: "4",
        t: "HuggingFace model classifies sentiment + emotion; recommendation engine selects strategies."
      }, {
        n: "5",
        t: "API returns reflection + suggestions; UI updates streaks and badges."
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-5 rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-sage font-display text-base text-primary-foreground", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pt-1.5 text-base leading-relaxed", children: s.t })
      ] }, s.n)) })
    ] })
  ] });
}
function ArchDiagram() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DiagramColumn, { color: "bg-amber/25", title: "Client", subtitle: "Browser / mobile web", items: ["React.js UI", "Tailwind", "JWT in storage"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DiagramColumn, { color: "bg-sage/30", title: "Application", subtitle: "Node.js + Express on Render", items: ["Auth & Users", "Journals & Streaks", "Forum & Moderation", "MongoDB Atlas"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DiagramColumn, { color: "bg-plum/15", title: "AI Inference", subtitle: "Dockerized FastAPI on AWS/GCP", items: ["HuggingFace transformer", "Emotion + sentiment", "Hybrid recommender", "Crisis-keyword guard"] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col items-center gap-2 text-xs text-muted-foreground sm:flex-row sm:justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary px-3 py-1", children: "User → HTTPS → React" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-60", children: "→" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary px-3 py-1", children: "React → REST/JWT → Node API" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-60", children: "→" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary px-3 py-1", children: "Node → REST → ML API" })
    ] })
  ] });
}
function DiagramColumn({
  color,
  title,
  subtitle,
  items
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl ${color} p-6`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-widest text-foreground/70", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-xl", children: subtitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 rounded-xl bg-card/70 px-3 py-2 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-foreground/40" }),
      i
    ] }, i)) })
  ] });
}
export {
  ArchitecturePage as component
};
