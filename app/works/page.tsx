"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Plug, Brain, Tag, TrendingUp, Sparkles } from "lucide-react";
import { StepMockup } from "./stepMockup";
import { useEffect, useState } from "react";

const STEPS = [
  {
    n: "01",
    eyebrow: "Connect in minutes",
    title: "Connect your store",
    body: "Link Shopify, WooCommerce, or upload your product data as CSV. Opsell syncs your catalog in seconds — no code, no engineers.",
    icon: Plug,
    bullets: ["1-click Shopify & Woo", "CSV import for anything else", "Live product sync"],
  },
  {
    n: "02",
    eyebrow: "Let AI do the analysis",
    title: "Opsell analyzes your products",
    body: "Our AI studies competitor pricing, market demand, inventory pressure, and seasonality — then tags every SKU with what it really needs.",
    icon: Brain,
    bullets: ["Competitor price tracking", "Demand & seasonality signals", "Auto SKU health tags"],
  },
  {
    n: "03",
    eyebrow: "Pricing that converts",
    title: "Get smart suggestions",
    body: "Receive recommended prices, discount windows, and bundle ideas — each with predicted impact on conversion and revenue.",
    icon: Tag,
    bullets: ["Optimal price per SKU", "Smart discount timing", "Bundle & upsell ideas"],
  },
  {
    n: "04",
    eyebrow: "Scale without guesswork",
    title: "Track the growth",
    body: "Watch revenue, profit, and conversions improve in a live dashboard. Opsell keeps learning and surfaces new opportunities every week.",
    icon: TrendingUp,
    bullets: ["Live revenue dashboard", "Weekly opportunity alerts", "Profit & conversion lift"],
  },
];

const CountUp = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref} className="tabular-nums">
      {val}{suffix}
    </span>
  );
};

// ── Individual step row ──────────────────────────────────────────────────────
const StepRow = ({
  step,
  index,
}: {
  step: (typeof STEPS)[number];
  index: number;
}) => {
  const Icon = step.icon;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 items-center py-16 lg:py-24 border-b border-slate-200/70 last:border-0"
    >
      {/* LEFT — text content */}
      <div className="max-w-xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-5xl font-light leading-none select-none tabular-nums" style={{ color: "#4F8CFF" }}>
            {step.n}
          </span>
          <span className="h-px flex-1 bg-slate-200" />
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">
            <Icon className="h-3.5 w-3.5" />
            {step.eyebrow}
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 text-balance leading-[1.08] mb-5 tracking-tight">
          {step.title}
        </h2>

        <p className="text-lg text-slate-500 leading-relaxed mb-7 text-balance">
          {step.body}
        </p>

        <ul className="space-y-2.5 mb-8">
          {step.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-slate-900/80">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: "#4F8CFF" }} />
              {b}
            </li>
          ))}
        </ul>

        <button
          className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-900 pb-1 hover:gap-3 transition-all"
          style={{ borderBottom: "2px solid #4F8CFF" }}
        >
          Try this step in demo
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* RIGHT — mockup */}
      <div className="relative w-full">
        {/* glow */}
        <div
          className="absolute -inset-8 rounded-[3rem] blur-3xl pointer-events-none"
          style={{ backgroundColor: "rgba(79,140,255,0.08)" }}
        />

        <div className="relative rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.10)] overflow-hidden aspect-[4/5] w-full max-w-[480px] mx-auto lg:mx-0 lg:ml-auto">
          <StepMockup step={index} />
        </div>

        {/* step pill */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-8 rounded-full bg-slate-900 px-4 py-2 text-xs font-medium tracking-wide text-white shadow-xl z-10">
          Step {index + 1} of {STEPS.length}
        </div>
      </div>
    </motion.div>
  );
};

// ── Page ────────────────────────────────────────────────────────────────────
const Index = () => {
  return (
    <main
      className="bg-zinc-50 min-h-screen text-slate-900 overflow-x-hidden"
      style={{ fontFamily: "'Geist', 'Geist Sans', system-ui, -apple-system, sans-serif" }}
    >
      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-50/80 border-b border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <span className="h-7 w-7 rounded-lg grid place-items-center shrink-0" style={{ backgroundColor: "#4F8CFF" }}>
              <Sparkles className="h-4 w-4 text-white" />
            </span>
            Opsell
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-500">
            <a className="hover:text-slate-900 transition-colors" href="#">Product</a>
            <a className="text-slate-900 font-medium" href="#how">How it works</a>
            <a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
            <a className="hover:text-slate-900 transition-colors" href="#">Customers</a>
          </nav>
          <button className="text-sm font-semibold bg-slate-900 text-zinc-50 px-4 py-2 rounded-full hover:bg-slate-800 transition-colors">
            Try demo
          </button>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-14 lg:pt-28 lg:pb-20">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] mb-6"
              style={{ color: "#4F8CFF" }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "#4F8CFF" }}
              />
              How it works
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.04] tracking-tight text-balance mb-6">
              From raw product data to{" "}
              <span className="italic font-light" style={{ color: "#4F8CFF" }}>more sales</span> in 4 simple steps.
            </h1>
            <p className="text-base md:text-xl text-slate-500 max-w-2xl text-balance leading-relaxed">
              Opsell connects to your store, studies the market, and tells you exactly what to
              price, bundle, and discount — so growth stops being a guess.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-2">
            {STEPS.map((s) => (
              <span
                key={s.n}
                className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm"
              >
                <span className="tabular-nums" style={{ color: "#4F8CFF" }}>{s.n}</span>
                {s.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Steps — separate rows ── */}
      <div id="how" className="container mx-auto px-4 sm:px-6">
        <StepRow step={STEPS[0]} index={0} />
        <StepRow step={STEPS[1]} index={1} />
        <StepRow step={STEPS[2]} index={2} />
        <StepRow step={STEPS[3]} index={3} />
      </div>

      {/* ── Results strip ── */}
      <section className="bg-slate-900 text-slate-100 py-16 sm:py-20 mt-12">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.25em] mb-4 font-medium" style={{ color: "#4F8CFF" }}>
            Real outcomes
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-10 sm:mb-12 max-w-2xl text-balance leading-[1.1]">
            Stores using Opsell typically see results in the first 30 days.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { v: 32, s: "%", l: "More sales" },
              { v: 18, s: "%", l: "Higher profit margin" },
              { v: 12, s: "%", l: "Fewer abandoned carts", neg: true },
            ].map((m) => (
              <div key={m.l} className="border-t border-slate-100/15 pt-6">
                <p className="text-5xl sm:text-6xl md:text-7xl font-light tabular-nums" style={{ color: "#4F8CFF" }}>
                  {m.neg ? "−" : "+"}
                  <CountUp to={m.v} suffix={m.s} />
                </p>
                <p className="text-sm text-slate-100/70 mt-2">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 md:p-16 shadow-xl overflow-hidden">
            <div
              className="absolute -top-20 -right-20 h-72 w-72 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ backgroundColor: "#4F8CFF" }}
            />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-5 text-balance leading-[1.1]">
                Ready to stop guessing your prices?
              </h2>
              <p className="text-base sm:text-lg text-slate-500 mb-8 text-balance leading-relaxed">
                Connect your store in 2 minutes. See your first AI pricing recommendations free.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 bg-slate-900 text-zinc-50 font-semibold px-5 sm:px-6 py-3 rounded-full hover:bg-slate-800 transition-colors text-sm sm:text-base">
                  Start free trial <ArrowRight className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center gap-2 border border-slate-200 bg-white font-semibold px-5 sm:px-6 py-3 rounded-full hover:bg-slate-50 transition-colors text-sm sm:text-base">
                  Watch 90s demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-200 py-8 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Opsell. Pricing intelligence for modern commerce.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;