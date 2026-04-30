import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { supabase } from "@/integrations/supabase/client";
import {
  Loader2,
  Send,
  Wind,
  Sparkles,
  HeartHandshake,
  Brain,
  Footprints,
  Trophy,
  Flame,
  AlertTriangle,
} from "lucide-react";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Live Demo — MindEase" },
      {
        name: "description",
        content:
          "Try the MindEase mood journaling demo: AI-powered sentiment analysis with personalized coping strategies.",
      },
    ],
  }),
  component: DemoPage,
});

interface Strategy {
  title: string;
  type: "breathing" | "gratitude" | "mindfulness" | "movement" | "connection";
  description: string;
  duration: string;
}

interface AnalysisResult {
  sentiment: "positive" | "neutral" | "negative";
  intensity: number;
  emotions: string[];
  summary: string;
  reflection: string;
  strategies: Strategy[];
}

interface JournalEntry {
  date: string; // YYYY-MM-DD
  text: string;
  result: AnalysisResult;
}

const STORAGE_KEY = "mindease_journal";

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function loadEntries(): JournalEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as JournalEntry[]) : [];
  } catch {
    return [];
  }
}

function computeStreak(entries: JournalEntry[]): number {
  if (entries.length === 0) return 0;
  const dates = new Set(entries.map((e) => e.date));
  let streak = 0;
  const cur = new Date();
  while (dates.has(cur.toISOString().slice(0, 10))) {
    streak += 1;
    cur.setDate(cur.getDate() - 1);
  }
  return streak;
}

const PROMPTS = [
  "Slept badly, mind racing through tomorrow.",
  "Got positive feedback today — feeling lighter.",
  "Drained after back-to-back meetings, can't focus.",
  "Anxious about the exam next week.",
];

const STRATEGY_ICON = {
  breathing: Wind,
  gratitude: Sparkles,
  mindfulness: Brain,
  movement: Footprints,
  connection: HeartHandshake,
} as const;

const SENTIMENT_STYLES = {
  positive: {
    bg: "bg-sage/30",
    text: "text-sage-deep",
    label: "Uplifting",
  },
  neutral: {
    bg: "bg-amber/30",
    text: "text-foreground",
    label: "Steady",
  },
  negative: {
    bg: "bg-plum/15",
    text: "text-plum",
    label: "Heavy",
  },
} as const;

function DemoPage() {
  const [entry, setEntry] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  useEffect(() => {
    setEntries(loadEntries());
  }, []);

  const streak = useMemo(() => computeStreak(entries), [entries]);
  const totalEntries = entries.length;
  const badges = useMemo(() => {
    const list: { icon: typeof Trophy; name: string; earned: boolean }[] = [
      { icon: Sparkles, name: "First step", earned: totalEntries >= 1 },
      { icon: Flame, name: "3-day streak", earned: streak >= 3 },
      { icon: Trophy, name: "7-day streak", earned: streak >= 7 },
      { icon: Brain, name: "10 entries", earned: totalEntries >= 10 },
    ];
    return list;
  }, [streak, totalEntries]);

  async function handleSubmit() {
    const text = entry.trim();
    if (!text) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke(
        "analyze-mood",
        { body: { entry: text } },
      );
      if (fnError) {
        const msg = (fnError.context as { error?: string } | undefined)?.error;
        throw new Error(msg ?? fnError.message ?? "Something went wrong.");
      }
      if (!data || (data as { error?: string }).error) {
        throw new Error((data as { error: string }).error);
      }
      const parsed = data as AnalysisResult;
      setResult(parsed);

      // Save (one entry per day, replace if exists)
      const next = [
        ...entries.filter((e) => e.date !== todayKey()),
        { date: todayKey(), text, result: parsed },
      ].sort((a, b) => (a.date < b.date ? 1 : -1));
      setEntries(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore quota */
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function handleClear() {
    setEntries([]);
    setResult(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }

  return (
    <PageShell>
      <PageHeader
        eyebrow="Live demo"
        title="Take a moment. Write what's on your mind."
        description="Your entry stays in your browser. We send only the text to our AI for sentiment analysis — never your name."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Journal */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Today's check-in</p>
                <p className="text-xs text-muted-foreground">
                  {new Date().toLocaleDateString(undefined, {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>

              <textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="How are you, really?"
                rows={6}
                maxLength={2000}
                className="mt-5 w-full resize-none rounded-2xl border border-border bg-background p-4 font-display text-xl leading-relaxed placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted-foreground">Try:</span>
                {PROMPTS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setEntry(p)}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    {p}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  {entry.length}/2000
                </p>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading || !entry.trim()}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Reading…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Reflect with MindEase
                    </>
                  )}
                </button>
              </div>

              {error && (
                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
                  <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <p>{error}</p>
                </div>
              )}
            </div>

            {/* Result */}
            {result && <ResultCard result={result} />}
          </div>

          {/* Sidebar: streaks, badges, trends */}
          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Your dashboard
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Stat label="Current streak" value={`${streak} ${streak === 1 ? "day" : "days"}`} icon={Flame} />
                <Stat label="Total entries" value={String(totalEntries)} icon={Brain} />
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Badges</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {badges.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={b.name}
                      className={`rounded-2xl border p-4 transition-all ${
                        b.earned
                          ? "border-sage-deep/30 bg-sage/15"
                          : "border-dashed border-border bg-background opacity-60"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${b.earned ? "text-sage-deep" : "text-muted-foreground"}`}
                      />
                      <p className="mt-2 text-sm font-medium">{b.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Mood trend</p>
                {entries.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="text-xs text-muted-foreground underline-offset-2 hover:text-destructive hover:underline"
                  >
                    Reset
                  </button>
                )}
              </div>
              <MoodTrend entries={entries} />
            </div>
          </aside>
        </div>
      </section>

      {/* Peer support note */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-dashed border-border bg-cream/50 p-8 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-sage-deep">Coming next</p>
          <h3 className="mt-2 font-display text-3xl">Anonymous peer support forum</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            Share, vent and listen — no real names. Powered by Lovable Cloud auth + RLS,
            with AI-assisted moderation to keep the space safe.
          </p>
        </div>
      </section>
    </PageShell>
  );
}

function Stat({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: typeof Flame;
}) {
  return (
    <div className="rounded-2xl bg-secondary p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="mt-2 font-display text-2xl">{value}</p>
    </div>
  );
}

function ResultCard({ result }: { result: AnalysisResult }) {
  const style = SENTIMENT_STYLES[result.sentiment];
  return (
    <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      <div className={`p-6 sm:p-8 ${style.bg}`}>
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full bg-card/80 px-3 py-1 text-xs font-medium ${style.text}`}>
            {style.label}
          </span>
          {result.emotions.slice(0, 4).map((em) => (
            <span
              key={em}
              className="rounded-full bg-card/60 px-3 py-1 text-xs text-muted-foreground"
            >
              {em}
            </span>
          ))}
          <span className="ml-auto text-xs text-muted-foreground">
            Intensity {result.intensity}/5
          </span>
        </div>
        <p className="mt-5 font-display text-2xl leading-snug sm:text-3xl">
          {result.reflection}
        </p>
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Try one of these
        </p>
        <div className="mt-4 space-y-3">
          {result.strategies.map((s, i) => {
            const Icon = STRATEGY_ICON[s.type] ?? Sparkles;
            return (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-primary/40"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent text-sage-deep">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium">{s.title}</p>
                    <span className="text-xs text-muted-foreground">{s.duration}</span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MoodTrend({ entries }: { entries: JournalEntry[] }) {
  // Last 7 days
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().slice(0, 10);
  });

  const colorFor = (s?: AnalysisResult["sentiment"]) =>
    s === "positive" ? "bg-sage-deep" : s === "neutral" ? "bg-amber" : s === "negative" ? "bg-plum" : "bg-border";

  return (
    <div className="mt-4">
      <div className="flex items-end justify-between gap-2">
        {days.map((d) => {
          const e = entries.find((x) => x.date === d);
          const height = e ? 20 + e.result.intensity * 14 : 8;
          return (
            <div key={d} className="flex flex-1 flex-col items-center gap-2">
              <div
                className={`w-full rounded-t-lg ${colorFor(e?.result.sentiment)} transition-all`}
                style={{ height: `${height}px` }}
              />
              <span className="text-[10px] text-muted-foreground">
                {new Date(d).toLocaleDateString(undefined, { weekday: "narrow" })}
              </span>
            </div>
          );
        })}
      </div>
      {entries.length === 0 && (
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Your trend appears once you check in.
        </p>
      )}
    </div>
  );
}
