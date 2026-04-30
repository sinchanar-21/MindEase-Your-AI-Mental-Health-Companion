import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import {
  Smartphone,
  Server,
  Database,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  GitBranch,
} from "lucide-react";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title: "Architecture & Tech Stack — MindEase" },
      {
        name: "description",
        content:
          "System architecture, tech stack, and data flow for MindEase: React frontend, Node.js backend, MongoDB, and a Python ML sentiment service.",
      },
    ],
  }),
  component: ArchitecturePage,
});

const stack = [
  {
    icon: Smartphone,
    title: "Frontend",
    tools: ["React.js", "Tailwind CSS", "Vite", "Framer Motion"],
    body: "Responsive PWA-ready UI. Mood journal, dashboard, peer forum.",
  },
  {
    icon: Server,
    title: "Backend API",
    tools: ["Node.js", "Express", "JWT auth", "Zod validation"],
    body: "REST API for users, journals, badges, forum threads & moderation queue.",
  },
  {
    icon: Database,
    title: "Database",
    tools: ["MongoDB Atlas", "Mongoose"],
    body: "Stores anonymized user logs, mood history, forum posts. Sensitive fields encrypted at rest.",
  },
  {
    icon: BrainCircuit,
    title: "AI / ML layer",
    tools: ["Python", "FastAPI", "HuggingFace transformers", "scikit-learn"],
    body: "Sentiment classification (positive/neutral/negative) + hybrid recommendation engine (rules + ML).",
  },
  {
    icon: Cloud,
    title: "Deployment",
    tools: ["Vercel (frontend)", "Render (Node)", "Docker on AWS/GCP (ML)"],
    body: "Each layer deploys independently. ML API is containerized for portable, GPU-friendly hosting.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Privacy",
    tools: ["JWT", "bcrypt", "TLS", "Anonymized telemetry"],
    body: "No PII shared with third parties. Users own their data and can export or delete it anytime.",
  },
  {
    icon: GitBranch,
    title: "DevOps",
    tools: ["GitHub Actions", "ESLint", "Pytest", "Vitest"],
    body: "CI runs lint + tests on every PR. CD ships frontend, API and ML container on tag.",
  },
];

function ArchitecturePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Architecture"
        title="Three layers, one calm experience."
        description="MindEase is split into a presentation layer, an application layer, and an AI inference layer — each independently scalable."
      />

      {/* Diagram */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ArchDiagram />
      </section>

      {/* Stack */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-deep">Tech stack</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
          Built with proven, open tools.
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-sage-deep">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Data flow */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-deep">Data flow</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
          A single mood entry, end to end.
        </h2>
        <ol className="mt-10 space-y-4">
          {[
            { n: "1", t: "User submits a journal entry from the React app." },
            { n: "2", t: "Node.js API authenticates with JWT and persists the entry to MongoDB (anonymized)." },
            { n: "3", t: "API forwards the text to the FastAPI ML service." },
            { n: "4", t: "HuggingFace model classifies sentiment + emotion; recommendation engine selects strategies." },
            { n: "5", t: "API returns reflection + suggestions; UI updates streaks and badges." },
          ].map((s) => (
            <li
              key={s.n}
              className="flex items-start gap-5 rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-sage font-display text-base text-primary-foreground">
                {s.n}
              </span>
              <p className="pt-1.5 text-base leading-relaxed">{s.t}</p>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}

function ArchDiagram() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-10">
      <div className="grid gap-6 lg:grid-cols-3">
        <DiagramColumn
          color="bg-amber/25"
          title="Client"
          subtitle="Browser / mobile web"
          items={["React.js UI", "Tailwind", "JWT in storage"]}
        />
        <DiagramColumn
          color="bg-sage/30"
          title="Application"
          subtitle="Node.js + Express on Render"
          items={["Auth & Users", "Journals & Streaks", "Forum & Moderation", "MongoDB Atlas"]}
        />
        <DiagramColumn
          color="bg-plum/15"
          title="AI Inference"
          subtitle="Dockerized FastAPI on AWS/GCP"
          items={["HuggingFace transformer", "Emotion + sentiment", "Hybrid recommender", "Crisis-keyword guard"]}
        />
      </div>
      <div className="mt-8 flex flex-col items-center gap-2 text-xs text-muted-foreground sm:flex-row sm:justify-center">
        <span className="rounded-full bg-secondary px-3 py-1">User → HTTPS → React</span>
        <span className="opacity-60">→</span>
        <span className="rounded-full bg-secondary px-3 py-1">React → REST/JWT → Node API</span>
        <span className="opacity-60">→</span>
        <span className="rounded-full bg-secondary px-3 py-1">Node → REST → ML API</span>
      </div>
    </div>
  );
}

function DiagramColumn({
  color,
  title,
  subtitle,
  items,
}: {
  color: string;
  title: string;
  subtitle: string;
  items: string[];
}) {
  return (
    <div className={`rounded-3xl ${color} p-6`}>
      <p className="text-xs font-medium uppercase tracking-widest text-foreground/70">{title}</p>
      <p className="mt-1 font-display text-xl">{subtitle}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2 rounded-xl bg-card/70 px-3 py-2 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
