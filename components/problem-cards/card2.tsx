import { TrendingDown, MousePointer2 } from "lucide-react";

const Card2 = () => {
  return (
    <div className="w-full">
      <article className="mx-auto flex h-full w-full max-w-[240px] flex-col overflow-hidden rounded-2xl border border-border/50 bg-card text-card-foreground shadow-xl">
        {/* Visual */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-secondary via-muted to-secondary">
          {/* Product card */}
          <div className="absolute left-1/2 top-1/2 w-[160px] -translate-x-1/2 -translate-y-[58%] rounded-2xl border border-border bg-background p-3 shadow-xl">
            <div className="mb-3 h-16 rounded-xl bg-muted/70" />
            <div className="space-y-2">
              <div className="h-2 w-3/4 rounded bg-muted" />
              <div className="h-2 w-1/2 rounded bg-muted" />
            </div>

            {/* Price progression: ₹999 → ₹899 → ₹949 */}
            <div className="mt-3 flex items-center gap-1">
              <span className="text-[10px] text-muted-foreground line-through">
                ₹999
              </span>
              <span className="text-[10px] text-muted-foreground">→</span>
              <span className="rounded-md bg-red-100 px-1.5 py-0.5 text-[10px] font-semibold text-red-600">
                ₹899
              </span>
              <span className="text-[10px] text-muted-foreground">→</span>
              <span className="rounded-md bg-yellow-100 px-1.5 py-0.5 text-[10px] font-semibold text-yellow-700">
                ₹949
              </span>
            </div>

            {/* Manual price slider */}
            <div className="relative mt-3">
              <div className="h-1.5 w-full rounded-full bg-muted">
                <div className="h-1.5 w-1/2 rounded-full bg-gradient-to-r from-red-400 to-yellow-400" />
              </div>
              <div className="absolute -top-1 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-background bg-foreground shadow-md" />
              {/* Hand cursor dragging the slider */}
              <MousePointer2 className="absolute -top-1 left-[calc(50%+10px)] h-4 w-4 -rotate-12 fill-background text-foreground drop-shadow" />
            </div>
          </div>

          {/* Floating "Unsure?" tag */}
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-red-500 px-2.5 py-1 shadow-md">
            <TrendingDown className="h-3 w-3 text-white" />
            <span className="text-[10px] font-medium text-white">Unsure?</span>
          </div>

          {/* Floating delta tags */}
          <div className="absolute bottom-14 left-3 rotate-[-8deg] rounded-lg border border-border bg-background px-2 py-1 shadow-md">
            <span className="text-[10px] font-semibold text-red-500">-10%</span>
          </div>
          <div className="absolute bottom-16 right-4 rotate-[16deg] rounded-lg border border-border bg-background px-2 py-1 shadow-md">
            <span className="text-[10px] font-semibold text-green-600">+5%</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4">
          <h2 className="mb-2 text-sm font-semibold leading-5 text-foreground">
            Pricing Decisions Still Happen Manually
          </h2>
          <p className="mb-3 text-xs leading-5 text-muted-foreground">
            Your team changes prices based on guesswork, competitor checks, or
            gut feeling instead of real-time data.
          </p>
         
        </div>
      </article>
    </div>
  );
};

export default Card2;
