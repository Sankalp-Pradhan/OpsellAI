"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  TrendingDown,
  TrendingUp,
  Sparkles,
  MousePointerClick,
  Target,
  BarChart3,
} from "lucide-react";
import Image from "next/image";

function useCountUp(
  target: number,
  start: boolean,
  duration = 1.6,
  decimals = 1
) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (value) =>
    value.toFixed(decimals)
  );
  const [displayValue, setDisplayValue] = useState("0.0");

  useEffect(() => {
    if (!start) return;

    const controls = animate(motionValue, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });

    const unsubscribe = rounded.on("change", (value) => {
      setDisplayValue(value);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [start, target, duration, motionValue, rounded]);

  return displayValue;
}

const ProductGlyph = ({ variant }: { variant: "before" | "after" }) => {
  const isAfter = variant === "after";

  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-lg ${
        isAfter
          ? "bg-gradient-to-br from-brand-soft via-background to-background"
          : "bg-muted"
      }`}
    >
      <Image
        src="/assets/shoe.png"
        alt={
          isAfter
            ? "Optimized sneaker listing"
            : "Unoptimized sneaker listing"
        }
        width={320}
        height={240}
        className={`absolute inset-0 h-full w-full object-contain p-2 transition duration-500 ${
          isAfter
            ? ""
            : "scale-105 grayscale blur-[2px] opacity-70"
        }`}
      />

      {isAfter && (
        <>
          <motion.div
            className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-brand/20 blur-2xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.45, 0.75, 0.45],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute h-1 w-1 rounded-full bg-brand"
              style={{
                left: `${22 + index * 18}%`,
                top: `${28 + (index % 2) * 28}%`,
              }}
              animate={{
                y: [0, -8, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.2,
                delay: index * 0.3,
                repeat: Infinity,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

const metrics = [
  {
    icon: MousePointerClick,
    label: "Product Clicks",
    value: "+18%",
  },
  {
    icon: Target,
    label: "Better CTR",
    value: "+30%",
  },
  {
    icon: BarChart3,
    label: "Higher Conversion",
    value: "+1.2%",
  },
];

const ConversionCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const beforeConversion = useCountUp(4.0, inView);
  const afterConversion = useCountUp(5.2, inView, 1.8);

  return (
    <div ref={ref} className="flex h-full w-full max-w-4xl">
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="group/card relative flex h-full w-full flex-col overflow-hidden rounded-[24px] border border-border bg-white p-5 shadow-2xl md:p-6"
      >
        {/* Header */}
        <div className="mb-6 flex flex-col gap-3">
          <span className="inline-flex h-6 w-fit items-center gap-1.5 rounded-full bg-brand-soft px-2.5 text-[10px] font-medium text-brand">
            <Sparkles className="h-3 w-3" />
            Increase Conversion Rate
          </span>

          <div>
            <h2 className="font-display text-xs font-semibold tracking-tight text-foreground md:text-xl">
              Higher Conversion Across Your Listings
            </h2>

            <p className="mt-2 max-w-full text-xs leading-5 text-muted-foreground md:text-xs">
              Better titles, stronger images, smarter pricing, and continuous
              A/B testing turn more visitors into buyers.
            </p>
          </div>
        </div>

        {/* Main comparison area - grows to equalize card height */}
        <div className="grid flex-1 grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 0.9, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-xl border border-border bg-background/70 p-3 grayscale-[0.15]"
          >
            <ProductGlyph variant="before" />

            <div className="mt-3 space-y-2">
              <p className="text-xs font-medium text-foreground/80">
                Men's Sneakers — White/Black
              </p>

              <span className="inline-flex items-center gap-1 rounded-full bg-red-200 px-2 py-0.5 text-[10px] font-light text-red-900">
                <TrendingDown className="h-3 w-3" />
                {beforeConversion}% Conversion
              </span>

              <p className="text-[11px] text-muted-foreground">
                Weak title. Low engagement.
              </p>
            </div>
          </motion.div>

          {/* Arrow */}
          <div className="relative flex items-center justify-center md:flex-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.45, duration: 0.45 }}
              className="relative flex items-center"
            >
              <div className="hidden h-px w-10 bg-gradient-to-r from-transparent via-border to-border md:block" />

              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 text-white shadow-elevated"
              >
                <ArrowRight className="h-5 w-5" strokeWidth={3} />
              </motion.div>

              <div className="hidden h-px w-10 bg-gradient-to-r from-border via-border to-transparent md:block" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute -top-2 whitespace-nowrap rounded-full border border-brand/20 bg-background px-2 py-0.5 text-[10px] font-semibold text-brand shadow-soft md:-top-7"
            >
              +30% Better CTR
            </motion.div>
          </div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-xl border border-brand/30 bg-gradient-card p-3 shadow-glow transition-shadow"
          >
            <span className="absolute -top-2 right-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-300 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white">
              With Opsell
            </span>

            <ProductGlyph variant="after" />

            <div className="mt-3 space-y-2">
              <p className="text-xs font-semibold text-foreground">
                Redtape Men's Low-Top Court Sneakers — Premium Daily Wear
              </p>

              <motion.span
                animate={{
                  boxShadow: [
                    "0 0 0 0 hsl(var(--brand) / 0.35)",
                    "0 0 0 6px hsl(var(--brand) / 0)",
                  ],
                }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="inline-flex items-center gap-1 rounded-full bg-green-200 px-2 py-0.5 text-[10px] font-light text-green-700"
              >
                <TrendingUp className="h-3 w-3" />
                {afterConversion}% Conversion
              </motion.span>

              <p className="text-[11px] text-muted-foreground">
                Optimized title, image and pricing.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer Metrics */}
        <div className="mt-6 grid grid-cols-1 gap-2 border-t border-border pt-4 sm:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.95 + index * 0.1 }}
              className="flex items-center gap-2 rounded-lg bg-background/60 px-3 py-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-brand">
                <metric.icon className="h-3.5 w-3.5" />
              </div>

              <div>
                <div className="text-sm font-bold tabular-nums text-foreground">
                  {metric.value}
                </div>
                <div className="text-[11px] text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.article>
    </div>
  );
};

export default ConversionCard;