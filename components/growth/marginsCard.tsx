import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function useCountUp(
  target: number,
  start: boolean,
  duration = 1.4,
  decimals = 0
) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => v.toFixed(decimals));
  const [value, setValue] = useState("0");

  useEffect(() => {
    if (!start) return;

    const controls = animate(mv, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });

    const unsubscribe = rounded.on("change", (v) => setValue(v));

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [start, target, duration, mv, rounded]);

  return value;
}

const DATA = [
  { label: "Footwear", before: 18, after: 28 },
  { label: "Apparel", before: 22, after: 32 },
  { label: "Accessories", before: 16, after: 30 },
  { label: "Bags", before: 19, after: 31 },
];

export default function MarginsCard() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const margin = useCountUp(12, inView);
  const beforeMargin = useCountUp(18, inView, 1.1);
  const afterMargin = useCountUp(30, inView, 1.5);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-2xl transition-all duration-500 "
    >
      {/* floating badge */}


      {/* heading */}
      <div className="mb-6 max-w-md">
        <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.22em] text-emerald-500">
          Improve Margins
        </p>

        <h3 className="text-lg font-bold tracking-tight text-slate-900">
          +{margin}% Higher Profit Margins
        </h3>

        <p className="mt-2 text-[11px] leading-5 text-slate-500">
          Smarter discounts and pricing decisions that protect margins while
          still increasing sales.
        </p>
      </div>

      {/* chart */}
      <div className="relative rounded-2xl border border-slate-100 bg-slate-50/60 px-10 border-2 p-2 ">
        <div className="mb-4 flex items-center justify-between text-[12px] font-semibold uppercase tracking-wide text-slate-400">
          <span>Margin by category</span>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              Before
            </span>

            <span className="flex items-center gap-1.5 text-emerald-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Opsell
            </span>
          </div>
        </div>

        <div className="flex h-28 items-end justify-between gap-3 px-1">
          {DATA.map((item, index) => {
            const max = 40;

            return (
              <div
                key={item.label}
                className="flex flex-1 flex-col items-center gap-2"
              >
                <div className="flex h-20 w-full items-end justify-center gap-1">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={
                      inView
                        ? { height: `${(item.before / max) * 100}%` }
                        : {}
                    }
                    transition={{
                      delay: 0.25 + index * 0.05,
                      duration: 0.6,
                    }}
                    className="w-full max-w-[12px] rounded-t-md bg-slate-200"
                  />

                  <motion.div
                    initial={{ height: 0 }}
                    animate={
                      inView
                        ? { height: `${(item.after / max) * 100}%` }
                        : {}
                    }
                    transition={{
                      delay: 0.45 + index * 0.05,
                      duration: 0.7,
                    }}
                    className="relative w-full max-w-[12px] rounded-t-md bg-emerald-500"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.9 + index * 0.05 }}
                      className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[8px] font-bold text-emerald-600"
                    >
                      +{item.after - item.before}
                    </motion.div>
                  </motion.div>
                </div>

                <span className="text-[9px] font-medium text-slate-500">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* before vs after */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="rounded-xl border border-slate-100 bg-white p-4"
        >
          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Before Opsell
          </p>

          <div className="flex items-end justify-between">
            <div>
              <p className="text-2xl font-bold text-slate-900">
                {beforeMargin}%
              </p>

              <p className="mt-1 text-[10px] text-slate-500">
                Random discounts
              </p>
            </div>

            <div className="flex h-7 items-center gap-1 rounded-full bg-rose-50 px-2.5 text-rose-500">
              <TrendingDown className="h-3 w-3" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.95 }}
          className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-4"
        >
          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-600">
            With Opsell
          </p>

          <div className="flex items-end justify-between">
            <div>
              <p className="text-2xl font-bold text-slate-900">
                {afterMargin}%
              </p>

              <p className="mt-1 text-[10px] text-slate-500">
                Smarter pricing
              </p>
            </div>

            <div className="flex h-7 items-center gap-1 rounded-full bg-emerald-500 px-2.5 text-white">
              <TrendingUp className="h-3 w-3" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* footer strip */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.05 }}
        className="mt-4 flex items-center justify-center gap-2 rounded-full bg-slate-50 py-2 text-[10px] font-semibold text-slate-500"
      >
        <span>Random Discounts</span>

        <ArrowRight className="h-3.5 w-3.5 text-emerald-500" />

        <span className="text-slate-900">Smart Pricing</span>
      </motion.div>
    </motion.div>
  );
}