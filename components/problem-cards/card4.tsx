import { AlertTriangle, ShoppingBag, Store, Tag } from "lucide-react";

const Card4 = () => {
  return (
    <div className="w-full">
      <article className="mx-auto flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card text-card-foreground shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-border/80 hover:shadow-2xl">
        {/* Visual */}
        <div className="relative h-20 md:h-52 overflow-hidden bg-gradient-to-br from-secondary via-muted to-secondary">
          {/* Platform 1 */}
          <div className="absolute left-1 top-2 w-[46px] -rotate-3 rounded-lg border border-border bg-background p-1 shadow-md md:left-2 md:top-3 md:w-[62px] md:rounded-xl md:p-1.5 sm:left-3 sm:w-[68px]">
            <div className="mb-0.5 flex items-center justify-between md:mb-1">
              <div className="flex items-center gap-0.5 rounded bg-orange-100 px-0.5 py-0.5 md:px-1">
                <ShoppingBag className="h-1.5 w-1.5 text-orange-600 md:h-2 md:w-2" />
                <span className="text-[5px] font-bold text-orange-700 md:text-[6px]">
                  A
                </span>
              </div>
              <AlertTriangle className="h-2 w-2 text-amber-500 md:h-2.5 md:w-2.5" />
            </div>

            <div className="mb-0.5 flex h-5 items-center justify-center rounded bg-muted/70 md:mb-1 md:h-8 md:rounded-md">
              <div className="h-3 w-3 rounded-full border border-foreground/40 bg-background md:h-5 md:w-5 md:border-2" />
            </div>

            <p className="text-[5px] font-semibold leading-tight text-foreground md:text-[7px]">
              Smart Watch Pro
            </p>
            <p className="mt-0.5 text-[6px] font-bold text-foreground md:text-[9px]">
              ₹999
            </p>
          </div>

          {/* Platform 2 */}
          <div className="absolute left-1/2 top-1 w-[46px] -translate-x-1/2 rounded-lg border border-border bg-background p-1 shadow-md md:top-2 md:w-[62px] md:rounded-xl md:p-1.5 sm:w-[68px]">
            <div className="mb-0.5 flex items-center justify-between md:mb-1">
              <div className="flex items-center gap-0.5 rounded bg-blue-100 px-0.5 py-0.5 md:px-1">
                <Store className="h-1.5 w-1.5 text-blue-600 md:h-2 md:w-2" />
                <span className="text-[5px] font-bold text-blue-700 md:text-[6px]">
                  F
                </span>
              </div>
              <AlertTriangle className="h-2 w-2 text-amber-500 md:h-2.5 md:w-2.5" />
            </div>

            <div className="mb-0.5 flex h-5 items-center justify-center rounded bg-muted/40 md:mb-1 md:h-8 md:rounded-md">
              <div className="h-3 w-2 rounded-sm border border-foreground/40 bg-background md:h-5 md:w-4 md:border-2" />
            </div>

            <p className="text-[5px] font-semibold leading-tight text-foreground md:text-[7px]">
              Smartwatch
            </p>
            <p className="mt-0.5 text-[6px] font-bold text-red-600 md:text-[9px]">
              ₹899
            </p>
          </div>

          {/* Platform 3 */}
          <div className="absolute right-1 top-2 w-[46px] rotate-3 rounded-lg border border-border bg-background p-1 shadow-md md:right-2 md:top-3 md:w-[62px] md:rounded-xl md:p-1.5 sm:right-3 sm:w-[68px]">
            <div className="mb-0.5 flex items-center justify-between md:mb-1">
              <div className="flex items-center gap-0.5 rounded bg-purple-100 px-0.5 py-0.5 md:px-1">
                <Tag className="h-1.5 w-1.5 text-purple-600 md:h-2 md:w-2" />
                <span className="text-[5px] font-bold text-purple-700 md:text-[6px]">
                  M
                </span>
              </div>
              <AlertTriangle className="h-2 w-2 text-amber-500 md:h-2.5 md:w-2.5" />
            </div>

            <div className="mb-0.5 flex h-5 items-center justify-center rounded bg-muted/90 md:mb-1 md:h-8 md:rounded-md">
              <div className="h-2.5 w-3 rounded-sm border border-foreground/40 bg-background md:h-4 md:w-5 md:border-2" />
            </div>

            <p className="text-[5px] font-semibold leading-tight text-foreground md:text-[7px]">
              Watch Series X
            </p>
            <p className="mt-0.5 text-[6px] font-bold text-foreground md:text-[9px]">
              ₹1,049
            </p>
          </div>

          {/* Mismatch indicator */}
          <div className="absolute left-1/2 top-[44px] flex w-[120px] -translate-x-1/2 items-center justify-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-1.5 py-0.5 text-center shadow-sm md:top-[104px] md:w-[160px] md:px-2 md:py-1 sm:w-[180px]">
            <AlertTriangle className="h-2 w-2 shrink-0 text-amber-600 md:h-2.5 md:w-2.5" />
            <span className="text-[5px] font-medium text-amber-700 md:text-[8px]">
              Title, image & price mismatch
            </span>
          </div>

          {/* Bottom stat */}
          <div className="absolute bottom-2 left-1/2 w-[120px] -translate-x-1/2 rounded-md border border-red-200 bg-red-50/95 px-1.5 py-1 shadow-sm backdrop-blur-sm md:bottom-3 md:w-[160px] md:rounded-lg md:px-2 md:py-2 sm:w-[180px]">
            <div className="flex items-center gap-1 md:gap-2">
              <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-100 md:h-6 md:w-6">
                <AlertTriangle className="h-2.5 w-2.5 text-red-600 md:h-3.5 md:w-3.5" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-[6px] font-semibold text-red-700 md:text-[9px]">
                  Inconsistent listings reduce conversion
                </p>
                <p className="text-[6px] text-red-500 md:text-[9px]">
                  Up to 18% lower sales
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-2.5 md:p-4">
          <h2 className="text-[11px] md:text-sm font-semibold leading-[1.4] md:leading-5 text-foreground">
            Your Product Listings Are Different Everywhere
          </h2>
        </div>
      </article>
    </div>
  );
};

export default Card4;