import { ArrowDownRight, Clock3, TrendingDown } from "lucide-react";

const Card3 = () => {
  return (
    <div className="w-[220px] shrink-0">
      <article className="mx-auto flex h-full w-full max-w-[220px] flex-col overflow-hidden rounded-2xl border border-border/50 bg-card text-card-foreground shadow-xl">
        {/* Visual */}
        <div className="relative h-52 overflow-hidden bg-gradient-to-br from-secondary via-muted to-secondary">
          {/* Competitor side */}
          <div className="absolute left-3 top-5 w-[82px] rounded-xl border border-red-200 bg-background p-2.5 shadow-md">
            <div className="mb-2 h-9 rounded-md bg-muted/70" />

            <div className="space-y-1">
              <div className="h-1.5 w-3/4 rounded bg-muted" />
              <div className="h-1.5 w-1/2 rounded bg-muted" />
            </div>

            <div className="mt-3 flex items-end gap-1">
              <span className="text-[9px] text-muted-foreground line-through">
                ₹999
              </span>
              <span className="text-xs font-bold text-red-600">₹849</span>
            </div>

            <div className="mt-2 flex items-center gap-1 rounded-md bg-red-50 px-1.5 py-1">
              <ArrowDownRight className="h-3 w-3 text-red-600" />
              <span className="text-[9px] font-medium text-red-600">
                Dropped
              </span>
            </div>
          </div>

          {/* Your side */}
          <div className="absolute right-3 top-5 w-[82px] rounded-xl border border-red-200 bg-background p-2.5 shadow-md">
            <div className="mb-2 h-9 rounded-md bg-muted/70" />

            <div className="space-y-1">
              <div className="h-1.5 w-3/4 rounded bg-muted" />
              <div className="h-1.5 w-1/2 rounded bg-muted" />
            </div>

            <div className="mt-3">
              <span className="text-xs font-bold text-foreground">₹999</span>
            </div>

            <div className="mt-2 rounded-md border border-yellow-200 bg-yellow-50 px-1.5 py-1 text-center">
              <span className="text-[9px] font-medium text-yellow-700">
                No change
              </span>
            </div>
          </div>

          {/* Time delay chip */}
          <div className="absolute left-1/2 top-[35px] -translate-x-1/2">
            <div className="flex items-center gap-1 rounded-full border border-border bg-background px-2 py-1 shadow-sm">
              <Clock3 className="h-3 w-3 text-muted-foreground" />
              <span className="text-[12px] font-medium text-muted-foreground">
                2 days later
              </span>
            </div>
          </div>

          {/* Dashed comparison line */}
          <div className="absolute left-[72px] top-[88px] w-[72px] border-t border-dashed border-red-300" />

          {/* Revenue impact badge */}
          <div className="absolute bottom-3 left-1/2 w-[150px] -translate-x-1/2 rounded-lg border border-red-200 bg-red-50/95 px-2 py-2 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                <TrendingDown className="h-3.5 w-3.5 text-red-600" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-[9px] font-semibold text-red-700">
                  Late reactions cost revenue
                </p>
                <p className="text-[9px] text-red-500">-12% sales impact</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4">
          <h2 className="mb-3 text-sm font-semibold leading-5 text-foreground">
            Competitors Change Faster Than You Can React
          </h2>

          <p className="text-xs leading-5 text-muted-foreground">
            By the time you notice a competitor dropped prices or launched a
            bundle, you have already lost sales.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Card3;