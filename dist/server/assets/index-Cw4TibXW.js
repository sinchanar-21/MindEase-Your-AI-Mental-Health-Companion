import { T as jsxRuntimeExports } from "./worker-entry-PuPXjF4I.js";
import { L as Link } from "./router-CmJ6Rixq.js";
import { c as createLucideIcon, P as PageShell } from "./PageShell-DYXeSLXL.js";
import { A as ArrowRight } from "./arrow-right-BGXif6AV.js";
import { S as Sparkles } from "./sparkles-qPijCGK5.js";
import { W as Wind, T as Trophy, B as Brain, H as HeartHandshake } from "./wind-CUn4Q1rj.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$2);
const __iconNode$1 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
const features = [{
  icon: BookOpen,
  title: "Daily mood journaling",
  body: "Type a few lines or pick an emoji. Sentiment analysis classifies your mood without judgement."
}, {
  icon: Wind,
  title: "Personalized coping strategies",
  body: "A hybrid rule + ML engine recommends breathing, gratitude or mindfulness practices that fit your moment."
}, {
  icon: Users,
  title: "Anonymous peer support",
  body: "Talk to people who get it. Moderated, no real names, no pressure."
}, {
  icon: Trophy,
  title: "Streaks & badges",
  body: "Gentle gamification that rewards showing up — never optimizes for guilt."
}, {
  icon: Lock,
  title: "Privacy-first by design",
  body: "Sensitive entries stay anonymized. No data sale. You own and can delete everything, anytime."
}, {
  icon: Brain,
  title: "Non-clinical companion",
  body: "MindEase complements professional care. We surface crisis resources whenever it matters."
}];
const stats = [{
  value: "76%",
  label: "of students report regular stress"
}, {
  value: "1 in 4",
  label: "professionals experience burnout"
}, {
  value: "60%",
  label: "never seek help due to stigma or cost"
}];
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-gradient-hero", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain absolute inset-0 opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 lg:px-8 lg:pt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1 text-xs font-medium text-sage-deep backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-deep opacity-60" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-sage-deep" })
            ] }),
            "Now with real-time AI sentiment"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-balance font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-[5rem]", children: [
            "A quieter mind,",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-sage-deep", children: "one entry" }),
            " at a time."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground", children: "MindEase is a non-clinical, AI-powered mental health companion for students and professionals. Journal your mood, receive personalized coping strategies, and find anonymous peer support — all in a privacy-first space." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/demo", className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lift transition-transform hover:scale-[1.02]", children: [
              "Try the live demo",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pitch", className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary", children: "View the pitch deck" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center gap-6 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5" }),
              " Anonymous by default"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
              " Powered by Lovable AI"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroCard, {}) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/50 bg-cream/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-5xl text-sage-deep", children: s.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.label })
    ] }, s.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.2em] text-sage-deep", children: "The problem" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl leading-tight sm:text-5xl", children: "Stress is rising. Support is out of reach." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Students juggling deadlines and professionals racing toward burnout face the same wall: real help is expensive, slow, or stigmatized. Therapy waitlists stretch for months. Generic meditation apps feel hollow." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "MindEase isn't trying to replace therapy — it's the warm, intelligent first step that fits in the cracks of a busy day. Two minutes of honest journaling can shift the entire afternoon." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.2em] text-sage-deep", children: "The solution" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl", children: "A pocket-sized companion that meets you where you are." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-sage-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: f.body })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.2em] text-sage-deep", children: "How it works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl", children: "Five gentle steps. Every day." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-12 grid gap-6 lg:grid-cols-5", children: [{
        n: "01",
        t: "Sign in securely",
        d: "JWT-based auth keeps your space private."
      }, {
        n: "02",
        t: "Daily check-in",
        d: "Type a few words or pick an emoji."
      }, {
        n: "03",
        t: "AI reads your mood",
        d: "Sentiment + emotion classification."
      }, {
        n: "04",
        t: "Get coping ideas",
        d: "Tailored breathing, gratitude, mindfulness."
      }, {
        n: "05",
        t: "Track & connect",
        d: "Streaks, trends, anonymous peer forum."
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-3xl border border-border bg-card p-6 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl text-sage", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-medium", children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: s.d })
      ] }, s.n)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] bg-gradient-sage p-10 text-primary-foreground shadow-lift sm:p-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grain absolute inset-0 opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid items-center gap-8 lg:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl leading-tight sm:text-5xl", children: "Ready to check in with yourself?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-xl text-lg opacity-90", children: "Open the live demo, write a sentence, and watch MindEase reflect back with care." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:justify-self-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/demo", className: "inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 text-base font-medium text-foreground shadow-lift transition-transform hover:scale-[1.02]", children: [
          "Open the demo",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] })
    ] }) })
  ] });
}
function HeroCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-6 -top-6 h-32 w-32 rounded-full bg-amber/30 blur-2xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-8 -right-4 h-40 w-40 rounded-full bg-sage/40 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-[2rem] border border-border bg-card/90 p-7 shadow-lift backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Today · 8:42 am" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-sage-deep", children: "Day 12 streak" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 font-display text-2xl leading-snug", children: '"Big presentation today. Slept badly, mind racing through every slide."' }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl bg-secondary p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs font-medium text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Mood detected" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sage-deep", children: "Anxious · 4/5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex gap-1.5", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1.5 flex-1 rounded-full ${i <= 4 ? "bg-sage-deep" : "bg-border"}` }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Suggestion, { icon: Wind, title: "Box breathing", duration: "2 min" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Suggestion, { icon: Sparkles, title: "Three-thing gratitude prompt", duration: "1 min" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Suggestion, { icon: HeartHandshake, title: "Text one trusted person", duration: "30 sec" })
      ] })
    ] })
  ] });
}
function Suggestion({
  icon: Icon,
  title,
  duration
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-xl border border-border/70 bg-background/60 px-3 py-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sage-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: duration })
    ] })
  ] });
}
export {
  HomePage as component
};
