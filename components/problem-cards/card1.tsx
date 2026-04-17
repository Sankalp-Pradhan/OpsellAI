import { Globe, ShoppingBag, ShoppingCart, Store } from "lucide-react";

const Card1 = () => {
  return (
    <div className="w-full">
      <article className="mx-auto flex h-full w-full max-w-[240px] flex-col overflow-hidden rounded-2xl border border-border/50 bg-card text-card-foreground shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:border-border/80">
        {/* Visual illustration area */}
        <div className="relative h-52 overflow-hidden bg-gradient-to-br from-secondary via-muted to-secondary">
          {/* Overlapping browser windows */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Window 1 - back */}
            <div className="absolute h-28 w-44 -translate-x-12 -translate-y-6 rotate-[-8deg] rounded-lg border border-border bg-background/90 shadow-lg">
              <div className="flex items-center gap-1.5 border-b border-border px-2 py-1.5">
                <span className="h-2 w-2 rounded-full bg-destructive/60" />
                <span className="h-2 w-2 rounded-full bg-window-amber/60" />
                <span className="h-2 w-2 rounded-full bg-window-green/60" />
              </div>
              <div className="space-y-2 p-2">
                <div className="h-2 w-3/4 rounded bg-muted" />
                <div className="h-2 w-1/2 rounded bg-muted" />
                <div className="h-6 w-full rounded bg-muted/60" />
              </div>
            </div>

            {/* Window 2 - middle */}
            <div className="absolute h-28 w-44 translate-x-2 translate-y-1 rotate-[3deg] rounded-lg border border-border bg-background shadow-xl">
              <div className="flex items-center gap-1.5 border-b border-border px-2 py-1.5">
                <span className="h-2 w-2 rounded-full bg-destructive/60" />
                <span className="h-2 w-2 rounded-full bg-window-amber/60" />
                <span className="h-2 w-2 rounded-full bg-window-green/60" />
              </div>
              <div className="grid grid-cols-3 gap-1.5 p-2">
                <div className="h-5 rounded bg-muted" />
                <div className="h-5 rounded bg-muted" />
                <div className="h-5 rounded bg-muted" />
                <div className="col-span-3 h-2 rounded bg-muted" />
                <div className="col-span-2 h-2 rounded bg-muted" />
              </div>
            </div>

            {/* Window 3 - front */}
            <div className="absolute h-28 w-44 translate-x-14 translate-y-8 rotate-[10deg] rounded-lg border border-border bg-background shadow-xl">
              <div className="flex items-center gap-1.5 border-b border-border px-2 py-1.5">
                <span className="h-2 w-2 rounded-full bg-destructive/60" />
                <span className="h-2 w-2 rounded-full bg-window-amber/60" />
                <span className="h-2 w-2 rounded-full bg-window-green/60" />
              </div>
              <div className="space-y-2 p-2">
                <div className="h-2 w-2/3 rounded bg-muted" />
                <div className="h-7 w-full rounded bg-muted/60" />
                <div className="h-2 w-1/2 rounded bg-muted" />
              </div>
            </div>
          </div>

          {/* Floating icons */}
          <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background shadow-md rotate-[-6deg]">
            <ShoppingCart className="h-4 w-4 text-foreground" />
          </div>

          <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background shadow-md rotate-[8deg]">
            <ShoppingBag className="h-4 w-4 text-foreground" />
          </div>

          <div className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-background shadow-md -rotate-[12deg]">
            <Store className="h-4 w-4 text-foreground" />
          </div>

          <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background shadow-md rotate-[14deg]">
            <Globe className="h-4 w-4 text-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4 ">
          <div className="mb-3 flex items-start justify-between gap-2">
            <h2 className="text-sm font-semibold leading-5 text-foreground">
              Your Team Is Working Across 6 Different Tools
            </h2>
          </div>

          <p className="text-xs leading-5 text-muted-foreground">
            Pricing is in one dashboard, listings in another, competitor
            tracking in spreadsheets, and performance in agency reports.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Card1;