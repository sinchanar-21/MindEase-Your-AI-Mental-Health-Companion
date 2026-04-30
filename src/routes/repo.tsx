import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import { Folder, FileCode, Github, Rocket, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/repo")({
  head: () => ({
    meta: [
      { title: "Repo & Deployment — MindEase" },
      {
        name: "description",
        content:
          "GitHub repository structure, setup instructions and deployment plan for the MindEase project.",
      },
    ],
  }),
  component: RepoPage,
});

const tree = [
  { depth: 0, kind: "folder", name: "mindease/" },
  { depth: 1, kind: "folder", name: "frontend/", note: "React.js app — Vercel" },
  { depth: 2, kind: "folder", name: "src/" },
  { depth: 3, kind: "file", name: "components/" },
  { depth: 3, kind: "file", name: "pages/" },
  { depth: 3, kind: "file", name: "lib/api.ts" },
  { depth: 2, kind: "file", name: "package.json" },
  { depth: 1, kind: "folder", name: "backend/", note: "Node.js + Express — Render" },
  { depth: 2, kind: "folder", name: "src/" },
  { depth: 3, kind: "file", name: "routes/" },
  { depth: 3, kind: "file", name: "models/" },
  { depth: 3, kind: "file", name: "middleware/auth.js" },
  { depth: 2, kind: "file", name: "package.json" },
  { depth: 1, kind: "folder", name: "ml-model/", note: "Python sentiment API — Docker" },
  { depth: 2, kind: "file", name: "app/main.py" },
  { depth: 2, kind: "file", name: "app/sentiment.py" },
  { depth: 2, kind: "file", name: "app/recommender.py" },
  { depth: 2, kind: "file", name: "Dockerfile" },
  { depth: 2, kind: "file", name: "requirements.txt" },
  { depth: 1, kind: "folder", name: ".github/workflows/" },
  { depth: 2, kind: "file", name: "ci.yml" },
  { depth: 2, kind: "file", name: "deploy-ml.yml" },
  { depth: 1, kind: "file", name: "README.md" },
  { depth: 1, kind: "file", name: "CONTRIBUTING.md" },
  { depth: 1, kind: "file", name: "LICENSE" },
] as const;

const deploys = [
  {
    layer: "Frontend",
    service: "Vercel / Netlify",
    cmd: "vercel --prod",
    notes: "Build command: npm run build. Env: VITE_API_URL.",
  },
  {
    layer: "Backend API",
    service: "Render / Heroku",
    cmd: "render deploy",
    notes: "Connect MongoDB Atlas. Env: JWT_SECRET, MONGO_URI, ML_API_URL.",
  },
  {
    layer: "ML service",
    service: "Docker → AWS ECR / GCP Artifact Registry",
    cmd: "docker build -t mindease-ml . && docker push …",
    notes: "Run on Fargate / Cloud Run. Env: MODEL_NAME, HUGGINGFACE_TOKEN.",
  },
];

function RepoPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Deliverables"
        title="A clean monorepo. Three deploy targets."
        description="Public GitHub repo with README, contribution guidelines and CI/CD via GitHub Actions."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Tree */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-2 shadow-soft sm:p-4">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <span className="font-mono text-xs">github.com/your-org/mindease</span>
                </div>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  main
                </span>
              </div>
              <ul className="space-y-0.5 p-4 font-mono text-sm">
                {tree.map((node) => (
                  <li
                    key={`${node.depth}-${node.name}`}
                    className="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-secondary"
                    style={{ paddingLeft: `${node.depth * 16 + 8}px` }}
                  >
                    {node.kind === "folder" ? (
                      <Folder className="h-3.5 w-3.5 text-sage-deep" />
                    ) : (
                      <FileCode className="h-3.5 w-3.5 text-muted-foreground" />
                    )}
                    <span>{node.name}</span>
                    {"note" in node && node.note && (
                      <span className="ml-2 text-xs text-muted-foreground">— {node.note}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* README preview */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                README essentials
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  "Project overview & screenshots",
                  "Quickstart for each service (frontend, backend, ml-model)",
                  "Environment variables & secrets",
                  "Dataset links: GoEmotions, EmpatheticDialogues",
                  "Contribution guidelines & code of conduct",
                  "License (MIT) & roadmap",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage-deep" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-ink p-4 font-mono text-xs leading-relaxed text-cream">
                <p className="opacity-60"># clone & run</p>
                <p>git clone https://github.com/your-org/mindease.git</p>
                <p>cd mindease/frontend && npm i && npm run dev</p>
                <p>cd ../backend && npm i && npm run dev</p>
                <p>cd ../ml-model && docker compose up</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deploy plan */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-deep">Deployment plan</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
          Each layer ships independently.
        </h2>
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="px-6 py-4 font-medium">Layer</th>
                <th className="px-6 py-4 font-medium">Service</th>
                <th className="hidden px-6 py-4 font-medium sm:table-cell">Command</th>
                <th className="px-6 py-4 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {deploys.map((d) => (
                <tr key={d.layer} className="border-b border-border/60 last:border-0">
                  <td className="px-6 py-4 font-medium">
                    <span className="inline-flex items-center gap-2">
                      <Rocket className="h-3.5 w-3.5 text-sage-deep" />
                      {d.layer}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{d.service}</td>
                  <td className="hidden px-6 py-4 font-mono text-xs text-muted-foreground sm:table-cell">
                    {d.cmd}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{d.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            { t: "CI on PR", d: "Lint + unit tests for all three services." },
            { t: "CD on tag", d: "Vercel deploy + Render webhook + push ML container." },
            { t: "Preview envs", d: "Each PR gets its own Vercel + temporary backend." },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <p className="font-display text-xl">{c.t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
