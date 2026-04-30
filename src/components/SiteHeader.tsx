import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

const navItems = [
  { to: "/", label: "Overview" },
  { to: "/demo", label: "Live Demo" },
  { to: "/architecture", label: "Architecture" },
  { to: "/repo", label: "Repo & Deploy" },
  { to: "/pitch", label: "Pitch Deck" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-sage shadow-soft transition-transform group-hover:rotate-[-6deg]">
            <Leaf className="h-5 w-5 text-primary-foreground" strokeWidth={2.2} />
          </span>
          <span className="font-display text-xl tracking-tight">
            MindEase
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{
                className: "rounded-full px-3.5 py-1.5 text-sm bg-secondary text-foreground font-medium",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/demo"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:scale-[1.02] hover:shadow-lift sm:inline-flex"
        >
          Try the demo
        </Link>
      </div>
    </header>
  );
}
