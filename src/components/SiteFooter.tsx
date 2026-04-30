import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-cream/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-sage">
              <Leaf className="h-5 w-5 text-primary-foreground" strokeWidth={2.2} />
            </span>
            <span className="font-display text-xl">MindEase</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            A non-clinical, AI-powered companion for everyday emotional wellbeing.
            Built with care for students and professionals navigating stress,
            anxiety and burnout.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/80">
            MindEase is a wellness companion, not a substitute for professional
            mental health care. If you are in crisis, please contact local
            emergency services.
          </p>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-widest text-muted-foreground">Project</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Overview</Link></li>
            <li><Link to="/demo" className="hover:text-primary">Live Demo</Link></li>
            <li><Link to="/architecture" className="hover:text-primary">Architecture</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm uppercase tracking-widest text-muted-foreground">Resources</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/repo" className="hover:text-primary">Repo & Deployment</Link></li>
            <li><Link to="/pitch" className="hover:text-primary">Pitch Deck</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MindEase — A privacy-first mental health companion.
      </div>
    </footer>
  );
}
