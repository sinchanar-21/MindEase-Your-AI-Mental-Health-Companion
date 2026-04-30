import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import {
  Leaf,
  ArrowRight,
  Heart,
  Layers,
  PlayCircle,
  Globe2,
  Rocket,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/pitch")({
  head: () => ({
    meta: [
      { title: "Pitch Deck — MindEase" },
      {
        name: "description",
        content:
          "MindEase pitch deck: problem, solution, tech stack, demo flow, impact and roadmap.",
      },
    ],
  }),
  component: PitchPage,
});

function PitchPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-deep">
          Pitch deck · 7 slides
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
          The MindEase story.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Scroll through each slide. Built to present in under 4 minutes.
        </p>
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-4 pb-20 sm:px-6 lg:px-8">
        {/* Slide 1 — Title */}
        <Slide
          n="01"
          theme="dark"
          eyebrow="Title slide"
          title={
            <>
              MindEase —{" "}
              <span className="italic">Your AI mental health companion.</span>
            </>
          }
        >
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream/15">
              <Leaf className="h-7 w-7 text-cream" />
            </span>
            <p className="text-lg opacity-90">
              A privacy-first, non-clinical companion for everyday wellbeing.
            </p>
          </div>
        </Slide>

        {/* Slide 2 — Problem */}
        <Slide n="02" eyebrow="The problem" title="Stress, burnout and stigma are everywhere.">
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Stat big="76%" label="of students report regular stress" />
            <Stat big="1 in 4" label="professionals experience burnout" />
            <Stat big="60%" label="never seek help — cost or stigma" />
          </div>
          <p className="mt-8 max-w-2xl text-base text-muted-foreground">
            Therapy is expensive, waitlists are long, and meditation apps feel
            generic. The gap between "I'm not okay" and "I have help" is the
            biggest mental health problem of our generation.
          </p>
        </Slide>

        {/* Slide 3 — Solution */}
        <Slide
          n="03"
          eyebrow="The solution"
          title="An AI companion for journaling + coping."
        >
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Daily mood journaling", "Type or emoji — sentiment in real-time."],
              ["Personalized coping", "Breathing, gratitude, mindfulness picked for the moment."],
              ["Anonymous peer support", "Talk to people who get it. Moderated, no names."],
              ["Streaks & badges", "Gentle gamification — never guilt-driven."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-2xl bg-cream/60 p-5">
                <p className="font-display text-lg">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ul>
        </Slide>

        {/* Slide 4 — Tech */}
        <Slide n="04" eyebrow="Tech stack & architecture" title="Open tools, cleanly separated.">
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <TechBlock title="Frontend" items={["React.js", "Tailwind", "Vercel"]} />
            <TechBlock title="Backend" items={["Node.js + Express", "MongoDB", "JWT", "Render"]} />
            <TechBlock title="AI / ML" items={["FastAPI", "HuggingFace", "Docker", "AWS / GCP"]} />
          </div>
          <Link
            to="/architecture"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sage-deep hover:underline"
          >
            See full architecture diagram
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Slide>

        {/* Slide 5 — Demo */}
        <Slide n="05" eyebrow="Demo flow" title="From entry to insight in 6 seconds.">
          <ol className="mt-8 grid gap-3 md:grid-cols-5">
            {["Sign in", "Write a line", "AI sentiment", "Coping ideas", "Streak +1"].map(
              (s, i) => (
                <li
                  key={s}
                  className="rounded-2xl border border-border bg-cream/60 p-5"
                >
                  <span className="font-display text-3xl text-sage">0{i + 1}</span>
                  <p className="mt-2 font-medium">{s}</p>
                </li>
              ),
            )}
          </ol>
          <Link
            to="/demo"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            <PlayCircle className="h-4 w-4" />
            Open the live demo
          </Link>
        </Slide>

        {/* Slide 6 — Impact */}
        <Slide
          n="06"
          theme="dark"
          eyebrow="Impact"
          title="Accessible. Scalable. Built for social good."
        >
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <ImpactCard icon={Heart} title="Free at the core" body="Reduces the cost barrier to first-line wellbeing support." />
            <ImpactCard icon={Globe2} title="Always available" body="Works on any device, any time zone, in seconds." />
            <ImpactCard icon={Layers} title="Scales with cloud" body="Stateless services scale from 100 to 10M users." />
          </div>
        </Slide>

        {/* Slide 7 — Roadmap */}
        <Slide n="07" eyebrow="Roadmap" title="Where MindEase goes next.">
          <ol className="mt-8 space-y-4">
            {[
              { q: "Q1", t: "Native mobile (React Native) + push reminders" },
              { q: "Q2", t: "Multilingual support — Hindi, Spanish, Arabic, French" },
              { q: "Q3", t: "Partnerships with universities & employee wellness programs" },
              { q: "Q4", t: "Therapist hand-off (with consent) for users who want clinical care" },
            ].map((r) => (
              <li
                key={r.q}
                className="flex items-start gap-5 rounded-2xl border border-border bg-cream/60 p-5"
              >
                <span className="rounded-full bg-gradient-sage px-3 py-1 font-display text-sm text-primary-foreground">
                  {r.q}
                </span>
                <p className="pt-0.5 text-base">{r.t}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex items-center gap-2 rounded-2xl border border-dashed border-sage-deep/40 bg-sage/15 p-5">
            <Sparkles className="h-5 w-5 text-sage-deep" />
            <p className="text-sm">
              <span className="font-medium">Long-term vision:</span> a calm,
              global, AI-assisted first line of mental wellness — with humans in
              the loop where it matters most.
            </p>
          </div>
        </Slide>

        {/* Closing CTA */}
        <div className="rounded-[2rem] bg-gradient-sage p-10 text-primary-foreground shadow-lift sm:p-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] opacity-80">Thank you</p>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Let's make checking in on yourself the easiest thing you do today.
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 rounded-full bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-lift hover:scale-[1.02]"
            >
              <Rocket className="h-4 w-4" />
              Try the demo
            </Link>
            <Link
              to="/repo"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-5 py-2.5 text-sm font-medium hover:bg-cream/10"
            >
              View repo & deployment
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Slide({
  n,
  eyebrow,
  title,
  children,
  theme = "light",
}: {
  n: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  theme?: "light" | "dark";
}) {
  const dark = theme === "dark";
  return (
    <article
      className={`relative overflow-hidden rounded-[2rem] border p-8 shadow-soft sm:p-12 ${
        dark
          ? "border-ink bg-ink text-cream"
          : "border-border bg-card text-foreground"
      }`}
    >
      <div className="flex items-center justify-between">
        <p
          className={`text-xs font-medium uppercase tracking-[0.2em] ${
            dark ? "text-cream/70" : "text-sage-deep"
          }`}
        >
          {eyebrow}
        </p>
        <span
          className={`font-display text-sm ${
            dark ? "text-cream/50" : "text-muted-foreground"
          }`}
        >
          {n} / 07
        </span>
      </div>
      <h2 className="mt-4 max-w-3xl text-balance font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children}
    </article>
  );
}

function Stat({ big, label }: { big: string; label: string }) {
  return (
    <div className="rounded-2xl bg-cream/60 p-6">
      <p className="font-display text-5xl text-sage-deep">{big}</p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function TechBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl bg-cream/60 p-5">
      <p className="font-display text-lg">{title}</p>
      <ul className="mt-3 space-y-1.5">
        {items.map((i) => (
          <li
            key={i}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span className="h-1 w-1 rounded-full bg-sage-deep" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ImpactCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Heart;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl bg-cream/15 p-6 backdrop-blur">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream/20">
        <Icon className="h-5 w-5 text-cream" />
      </span>
      <p className="mt-4 font-display text-xl">{title}</p>
      <p className="mt-2 text-sm opacity-80">{body}</p>
    </div>
  );
}
