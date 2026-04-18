import { Globe, ShoppingBag, ShoppingCart, Store } from "lucide-react";

const Card1 = () => {
  return (
    <div className="w-full">
      <article className="mx-auto flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card text-card-foreground shadow-xl">
        {/* Visual illustration area */}
        <div className="relative h-20 md:h-52 overflow-hidden bg-gradient-to-br from-secondary via-muted to-secondary">
          {/* Overlapping browser windows */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Window 1 - back */}
            <div className="absolute h-16 w-24 md:h-28 md:w-44 -translate-x-8 -translate-y-4 md:-translate-x-12 md:-translate-y-6 rotate-[-8deg] rounded-md md:rounded-lg border border-border bg-background/90 shadow-lg">
              <div className="flex items-center gap-1 md:gap-1.5 border-b border-border px-1.5 md:px-2 py-1 md:py-1.5">
                <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-destructive/60" />
                <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-window-amber/60" />
                <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-window-green/60" />
              </div>
              <div className="space-y-1 md:space-y-2 p-1.5 md:p-2">
                <div className="h-1.5 md:h-2 w-3/4 rounded bg-muted" />
                <div className="h-1.5 md:h-2 w-1/2 rounded bg-muted" />
                <div className="h-4 md:h-6 w-full rounded bg-muted/60" />
              </div>
            </div>

            {/* Window 2 - middle */}
            <div className="absolute h-16 w-24 md:h-28 md:w-44 translate-x-1 translate-y-0.5 md:translate-x-2 md:translate-y-1 rotate-[3deg] rounded-md md:rounded-lg border border-border bg-background shadow-xl">
              <div className="flex items-center gap-1 md:gap-1.5 border-b border-border px-1.5 md:px-2 py-1 md:py-1.5">
                <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-destructive/60" />
                <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-window-amber/60" />
                <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-window-green/60" />
              </div>
              <div className="grid grid-cols-3 gap-1 md:gap-1.5 p-1.5 md:p-2">
                <div className="h-3 md:h-5 rounded bg-muted" />
                <div className="h-3 md:h-5 rounded bg-muted" />
                <div className="h-3 md:h-5 rounded bg-muted" />
                <div className="col-span-3 h-1.5 md:h-2 rounded bg-muted" />
                <div className="col-span-2 h-1.5 md:h-2 rounded bg-muted" />
              </div>
            </div>

            {/* Window 3 - front */}
            <div className="absolute h-16 w-24 md:h-28 md:w-44 translate-x-9 translate-y-5 md:translate-x-14 md:translate-y-8 rotate-[10deg] rounded-md md:rounded-lg border border-border bg-background shadow-xl">
              <div className="flex items-center gap-1 md:gap-1.5 border-b border-border px-1.5 md:px-2 py-1 md:py-1.5">
                <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-destructive/60" />
                <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-window-amber/60" />
                <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-window-green/60" />
              </div>
              <div className="space-y-1 md:space-y-2 p-1.5 md:p-2">
                <div className="h-1.5 md:h-2 w-2/3 rounded bg-muted" />
                <div className="h-4 md:h-7 w-full rounded bg-muted/60" />
                <div className="h-1.5 md:h-2 w-1/2 rounded bg-muted" />
              </div>
            </div>
          </div>

          {/* Floating icons — show only 2 on mobile, all 4 on desktop */}
          <div className="absolute right-2 top-2 md:right-3 md:top-3 flex h-6 w-6 md:h-9 md:w-9 items-center justify-center rounded-md md:rounded-lg border border-border bg-background shadow-md rotate-[-6deg]">
            <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
          </div>

          <div className="hidden md:flex absolute bottom-3 left-3 h-9 w-9 items-center justify-center rounded-lg border border-border bg-background shadow-md rotate-[8deg]">
            <ShoppingBag className="h-4 w-4 text-foreground" />
          </div>

          <div className="hidden md:flex absolute left-2 top-1/2 h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-background shadow-md -rotate-[12deg]">
            <Store className="h-4 w-4 text-foreground" />
          </div>

          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 flex h-6 w-6 md:h-9 md:w-9 items-center justify-center rounded-md md:rounded-lg border border-border bg-background shadow-md rotate-[14deg]">
            <Globe className="h-3 w-3 md:h-4 md:w-4 text-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-2.5 md:p-4">
          <div className="mb-1.5 md:mb-3 flex items-start justify-between gap-2">
            <h2 className="text-[11px] md:text-sm font-semibold leading-[1.4] md:leading-5 text-foreground">
              Your Team Is Working Across 6 Different Tools
            </h2>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card1;