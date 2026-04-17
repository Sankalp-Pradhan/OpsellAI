import { AlertTriangle, ShoppingBag, Store, Tag } from "lucide-react";

const Card4 = () => {
  return (
    <div className="w-[220px] shrink-0">
      <article className="mx-auto flex h-full w-full max-w-[220px] flex-col overflow-hidden rounded-2xl border border-border/50 bg-card text-card-foreground shadow-xl">
        {/* Visual */}
        <div className="relative h-52 overflow-hidden bg-gradient-to-br from-secondary via-muted to-secondary">
          {/* Platform 1 - Amazon-style (orange) */}
          <div className="absolute left-2 top-3 w-[62px] -rotate-3 rounded-xl border border-border bg-background p-1.5 shadow-md">
            <div className="mb-1 flex items-center justify-between">
              <div className="flex items-center gap-0.5 rounded bg-orange-100 px-1 py-0.5">
                <ShoppingBag className="h-2 w-2 text-orange-600" />
                <span className="text-[6px] font-bold text-orange-700">A</span>
              </div>
              <AlertTriangle className="h-2.5 w-2.5 text-amber-500" />
            </div>

            {/* Image style 1: circular watch */}
            <div className="mb-1 flex h-8 items-center justify-center rounded-md bg-muted/70">
              <div className="h-5 w-5 rounded-full border-2 border-foreground/40 bg-background" />
            </div>

            <p className="text-[7px] font-semibold leading-tight text-foreground">
              Smart Watch Pro
            </p>
            <p className="mt-0.5 text-[9px] font-bold text-foreground">₹999</p>
          </div>

          {/* Platform 2 - Flipkart-style (blue) */}
          <div className="absolute left-1/2 top-2 w-[62px] -translate-x-1/2 rounded-xl border border-border bg-background p-1.5 shadow-md">
            <div className="mb-1 flex items-center justify-between">
              <div className="flex items-center gap-0.5 rounded bg-blue-100 px-1 py-0.5">
                <Store className="h-2 w-2 text-blue-600" />
                <span className="text-[6px] font-bold text-blue-700">F</span>
              </div>
              <AlertTriangle className="h-2.5 w-2.5 text-amber-500" />
            </div>

            {/* Image style 2: square watch */}
            <div className="mb-1 flex h-8 items-center justify-center rounded-md bg-muted/40">
              <div className="h-5 w-4 rounded-sm border-2 border-foreground/40 bg-background" />
            </div>

            <p className="text-[7px] font-semibold leading-tight text-foreground">
              Smartwatch
            </p>
            <p className="mt-0.5 text-[9px] font-bold text-red-600">₹899</p>
          </div>

          {/* Platform 3 - Myntra-style (purple) */}
          <div className="absolute right-2 top-3 w-[62px] rotate-3 rounded-xl border border-border bg-background p-1.5 shadow-md">
            <div className="mb-1 flex items-center justify-between">
              <div className="flex items-center gap-0.5 rounded bg-purple-100 px-1 py-0.5">
                <Tag className="h-2 w-2 text-purple-600" />
                <span className="text-[6px] font-bold text-purple-700">M</span>
              </div>
              <AlertTriangle className="h-2.5 w-2.5 text-amber-500" />
            </div>

            {/* Image style 3: rectangular watch */}
            <div className="mb-1 flex h-8 items-center justify-center rounded-md bg-muted/90">
              <div className="h-4 w-5 rounded-sm border-2 border-foreground/40 bg-background" />
            </div>

            <p className="text-[7px] font-semibold leading-tight text-foreground">
              Watch Series X
            </p>
            <p className="mt-0.5 text-[9px] font-bold text-foreground">₹1,049</p>
          </div>

          {/* mismatch indicator */}
          <div className="absolute left-1/2 top-[105px] flex -translate-x-1/2 items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 shadow-sm">
            <AlertTriangle className="h-2.5 w-2.5 text-amber-600" />
            <span className="text-[8px] font-medium text-amber-700">
              Title, image & price mismatch
            </span>
          </div>

          {/* Bottom stat */}
          <div className="absolute bottom-3 left-1/2 w-[180px] -translate-x-1/2 rounded-lg border border-red-200 bg-red-50/95 px-2 py-2 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100">
                <AlertTriangle className="h-3.5 w-3.5 text-red-600" />
              </div>
              <div>
                <p className="text-[9px] font-semibold text-red-700">
                  Inconsistent listings reduce conversion
                </p>
                <p className="text-[9px] text-red-500">Up to 18% lower sales</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4">
          <h2 className="mb-3 text-sm font-semibold leading-5 text-foreground">
            Your Product Listings Are Different Everywhere
          </h2>
          <p className="text-xs leading-5 text-muted-foreground">
            Titles, images, prices and descriptions are inconsistent across
            marketplaces, hurting trust and conversion.
          </p>
        </div>
      </article>
    </div>
  );
};

export default Card4;
