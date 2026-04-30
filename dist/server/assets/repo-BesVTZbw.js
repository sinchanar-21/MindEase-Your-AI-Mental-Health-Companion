import { T as jsxRuntimeExports } from "./worker-entry-PuPXjF4I.js";
import { c as createLucideIcon, P as PageShell, a as PageHeader } from "./PageShell-DYXeSLXL.js";
import { R as Rocket } from "./rocket-BFjWU-jw.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-CmJ6Rixq.js";
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 12.5 8 15l2 2.5", key: "1tg20x" }],
  ["path", { d: "m14 12.5 2 2.5-2 2.5", key: "yinavb" }]
];
const FileCode = createLucideIcon("file-code", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
];
const Folder = createLucideIcon("folder", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode);
const tree = [{
  depth: 0,
  kind: "folder",
  name: "mindease/"
}, {
  depth: 1,
  kind: "folder",
  name: "frontend/",
  note: "React.js app — Vercel"
}, {
  depth: 2,
  kind: "folder",
  name: "src/"
}, {
  depth: 3,
  kind: "file",
  name: "components/"
}, {
  depth: 3,
  kind: "file",
  name: "pages/"
}, {
  depth: 3,
  kind: "file",
  name: "lib/api.ts"
}, {
  depth: 2,
  kind: "file",
  name: "package.json"
}, {
  depth: 1,
  kind: "folder",
  name: "backend/",
  note: "Node.js + Express — Render"
}, {
  depth: 2,
  kind: "folder",
  name: "src/"
}, {
  depth: 3,
  kind: "file",
  name: "routes/"
}, {
  depth: 3,
  kind: "file",
  name: "models/"
}, {
  depth: 3,
  kind: "file",
  name: "middleware/auth.js"
}, {
  depth: 2,
  kind: "file",
  name: "package.json"
}, {
  depth: 1,
  kind: "folder",
  name: "ml-model/",
  note: "Python sentiment API — Docker"
}, {
  depth: 2,
  kind: "file",
  name: "app/main.py"
}, {
  depth: 2,
  kind: "file",
  name: "app/sentiment.py"
}, {
  depth: 2,
  kind: "file",
  name: "app/recommender.py"
}, {
  depth: 2,
  kind: "file",
  name: "Dockerfile"
}, {
  depth: 2,
  kind: "file",
  name: "requirements.txt"
}, {
  depth: 1,
  kind: "folder",
  name: ".github/workflows/"
}, {
  depth: 2,
  kind: "file",
  name: "ci.yml"
}, {
  depth: 2,
  kind: "file",
  name: "deploy-ml.yml"
}, {
  depth: 1,
  kind: "file",
  name: "README.md"
}, {
  depth: 1,
  kind: "file",
  name: "CONTRIBUTING.md"
}, {
  depth: 1,
  kind: "file",
  name: "LICENSE"
}];
const deploys = [{
  layer: "Frontend",
  service: "Vercel / Netlify",
  cmd: "vercel --prod",
  notes: "Build command: npm run build. Env: VITE_API_URL."
}, {
  layer: "Backend API",
  service: "Render / Heroku",
  cmd: "render deploy",
  notes: "Connect MongoDB Atlas. Env: JWT_SECRET, MONGO_URI, ML_API_URL."
}, {
  layer: "ML service",
  service: "Docker → AWS ECR / GCP Artifact Registry",
  cmd: "docker build -t mindease-ml . && docker push …",
  notes: "Run on Fargate / Cloud Run. Env: MODEL_NAME, HUGGINGFACE_TOKEN."
}];
function RepoPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Deliverables", title: "A clean monorepo. Three deploy targets.", description: "Public GitHub repo with README, contribution guidelines and CI/CD via GitHub Actions." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-2 shadow-soft sm:p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs", children: "github.com/your-org/mindease" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground", children: "main" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0.5 p-4 font-mono text-sm", children: tree.map((node) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-secondary", style: {
          paddingLeft: `${node.depth * 16 + 8}px`
        }, children: [
          node.kind === "folder" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Folder, { className: "h-3.5 w-3.5 text-sage-deep" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileCode, { className: "h-3.5 w-3.5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: node.name }),
          "note" in node && node.note && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-xs text-muted-foreground", children: [
            "— ",
            node.note
          ] })
        ] }, `${node.depth}-${node.name}`)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-7 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-widest text-muted-foreground", children: "README essentials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm", children: ["Project overview & screenshots", "Quickstart for each service (frontend, backend, ml-model)", "Environment variables & secrets", "Dataset links: GoEmotions, EmpatheticDialogues", "Contribution guidelines & code of conduct", "License (MIT) & roadmap"].map((line) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-4 w-4 flex-shrink-0 text-sage-deep" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: line })
        ] }, line)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl bg-ink p-4 font-mono text-xs leading-relaxed text-cream", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "opacity-60", children: "# clone & run" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "git clone https://github.com/your-org/mindease.git" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "cd mindease/frontend && npm i && npm run dev" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "cd ../backend && npm i && npm run dev" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "cd ../ml-model && docker compose up" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.2em] text-sage-deep", children: "Deployment plan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl", children: "Each layer ships independently." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 font-medium", children: "Layer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 font-medium", children: "Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "hidden px-6 py-4 font-medium sm:table-cell", children: "Command" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 font-medium", children: "Notes" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: deploys.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/60 last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-3.5 w-3.5 text-sage-deep" }),
            d.layer
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-muted-foreground", children: d.service }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "hidden px-6 py-4 font-mono text-xs text-muted-foreground sm:table-cell", children: d.cmd }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-muted-foreground", children: d.notes })
        ] }, d.layer)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-5 sm:grid-cols-3", children: [{
        t: "CI on PR",
        d: "Lint + unit tests for all three services."
      }, {
        t: "CD on tag",
        d: "Vercel deploy + Render webhook + push ML container."
      }, {
        t: "Preview envs",
        d: "Each PR gets its own Vercel + temporary backend."
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl", children: c.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: c.d })
      ] }, c.t)) })
    ] })
  ] });
}
export {
  RepoPage as component
};
