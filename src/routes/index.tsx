import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import {
  Sparkles,
  Wind,
  HeartHandshake,
  Trophy,
  Lock,
  ArrowRight,
  BookOpen,
  Brain,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MindEase — Your AI Mental Health Companion" },
      {
        name: "description",
        content:
          "A privacy-first AI companion for daily mood journaling, personalized coping strategies and anonymous peer support. Built for students and professionals.",
      },
    ],
  }),
  component: HomePage,
});

const features = [
  {
    icon: BookOpen,
    title: "Daily mood journaling",
    body: "Type a few lines or pick an emoji. Sentiment analysis classifies your mood without judgement.",
  },
  {
    icon: Wind,
    title: "Personalized coping strategies",
    body: "A hybrid rule + ML engine recommends breathing, gratitude or mindfulness practices that fit your moment.",
  },
  {
    icon: Users,
    title: "Anonymous peer support",
    body: "Talk to people who get it. Moderated, no real names, no pressure.",
  },
  {
    icon: Trophy,
    title: "Streaks & badges",
    body: "Gentle gamification that rewards showing up — never optimizes for guilt.",
  },
  {
    icon: Lock,
    title: "Privacy-first by design",
    body: "Sensitive entries stay anonymized. No data sale. You own and can delete everything, anytime.",
  },
  {
    icon: Brain,
    title: "Non-clinical companion",
    body: "MindEase complements professional care. We surface crisis resources whenever it matters.",
  },
];

const stats = [
  { value: "76%", label: "of students report regular stress" },
  { value: "1 in 4", label: "professionals experience burnout" },
  { value: "60%", label: "never seek help due to stigma or cost" },
];

function HomePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="grain absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1 text-xs font-medium text-sage-deep backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-deep opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage-deep" />
                </span>
                Now with real-time AI sentiment
              </div>
              <h1 className="mt-6 text-balance font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-[5rem]">
                A quieter mind,{" "}
                <span className="italic text-sage-deep">one entry</span> at a time.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                MindEase is a non-clinical, AI-powered mental health companion for
                students and professionals. Journal your mood, receive personalized
                coping strategies, and find anonymous peer support — all in a
                privacy-first space.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to="/demo"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lift transition-transform hover:scale-[1.02]"
                >
                  Try the live demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/pitch"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  View the pitch deck
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5" /> Anonymous by default
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" /> Powered by Lovable AI
                </div>
              </div>
            </div>

            {/* Hero card mock */}
            <div className="lg:col-span-5">
              <HeroCard />
            </div>
          </div>
        </div>
      </section>

      {/* Problem stats */}
      <section className="border-y border-border/50 bg-cream/50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl text-sage-deep">{s.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-deep">
              The problem
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Stress is rising. Support is out of reach.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              Students juggling deadlines and professionals racing toward burnout
              face the same wall: real help is expensive, slow, or stigmatized.
              Therapy waitlists stretch for months. Generic meditation apps feel
              hollow.
            </p>
            <p>
              MindEase isn't trying to replace therapy — it's the warm, intelligent
              first step that fits in the cracks of a busy day. Two minutes of
              honest journaling can shift the entire afternoon.
            </p>
          </div>
        </div>
      </section>

      {/* Solution / Features */}
      <section className="bg-cream/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-deep">
            The solution
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
            A pocket-sized companion that meets you where you are.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-sage-deep">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-deep">How it works</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
          Five gentle steps. Every day.
        </h2>
        <ol className="mt-12 grid gap-6 lg:grid-cols-5">
          {[
            { n: "01", t: "Sign in securely", d: "JWT-based auth keeps your space private." },
            { n: "02", t: "Daily check-in", d: "Type a few words or pick an emoji." },
            { n: "03", t: "AI reads your mood", d: "Sentiment + emotion classification." },
            { n: "04", t: "Get coping ideas", d: "Tailored breathing, gratitude, mindfulness." },
            { n: "05", t: "Track & connect", d: "Streaks, trends, anonymous peer forum." },
          ].map((s) => (
            <li
              key={s.n}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="font-display text-3xl text-sage">{s.n}</span>
              <p className="mt-3 font-medium">{s.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-sage p-10 text-primary-foreground shadow-lift sm:p-16">
          <div className="grain absolute inset-0 opacity-20" />
          <div className="relative grid items-center gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">
                Ready to check in with yourself?
              </h2>
              <p className="mt-3 max-w-xl text-lg opacity-90">
                Open the live demo, write a sentence, and watch MindEase reflect
                back with care.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 text-base font-medium text-foreground shadow-lift transition-transform hover:scale-[1.02]"
              >
                Open the demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function HeroCard() {
  return (
    <div className="relative">
      <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-amber/30 blur-2xl" />
      <div className="absolute -bottom-8 -right-4 h-40 w-40 rounded-full bg-sage/40 blur-3xl" />
      <div className="relative rounded-[2rem] border border-border bg-card/90 p-7 shadow-lift backdrop-blur">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Today · 8:42 am</p>
          <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-sage-deep">
            Day 12 streak
          </span>
        </div>
        <p className="mt-5 font-display text-2xl leading-snug">
          "Big presentation today. Slept badly, mind racing through every slide."
        </p>
        <div className="mt-6 rounded-2xl bg-secondary p-4">
          <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
            <span>Mood detected</span>
            <span className="text-sage-deep">Anxious · 4/5</span>
          </div>
          <div className="mt-3 flex gap-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={`h-1.5 flex-1 rounded-full ${
                  i <= 4 ? "bg-sage-deep" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="mt-5 space-y-3">
          <Suggestion icon={Wind} title="Box breathing" duration="2 min" />
          <Suggestion icon={Sparkles} title="Three-thing gratitude prompt" duration="1 min" />
          <Suggestion icon={HeartHandshake} title="Text one trusted person" duration="30 sec" />
        </div>
      </div>
    </div>
  );
}

function Suggestion({
  icon: Icon,
  title,
  duration,
}: {
  icon: typeof Wind;
  title: string;
  duration: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border/70 bg-background/60 px-3 py-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sage-deep">
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{duration}</p>
      </div>
    </div>
  );
}
