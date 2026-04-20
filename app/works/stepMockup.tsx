import { motion, AnimatePresence } from "framer-motion";
import { Check, Store, ShoppingBag, Package, Sparkles } from "lucide-react";

const WindowChrome = ({ url }: { url: string }) => (
  <div className="flex items-center gap-1.5 mb-5">
    <span className="h-3 w-3 rounded-full bg-red-400/70" />
    <span className="h-3 w-3 rounded-full bg-amber-400/70" />
    <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
    <span className="ml-3 text-xs text-slate-400 font-mono truncate">{url}</span>
  </div>
);

export const StepConnect = () => (
  <div className="h-full w-full p-5 md:p-7 overflow-y-auto">
    <WindowChrome url="opsell.app/connect" />

    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-4 font-medium">
      Connect a store
    </p>

    <div className="grid grid-cols-3 gap-2.5 mb-5">
      {[
        { name: "Shopify", color: "hsl(120 60% 45%)" },
        { name: "Woo", color: "hsl(280 60% 55%)" },
        { name: "CSV", color: "hsl(220 15% 35%)" },
      ].map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.12 }}
          className="rounded-2xl border border-slate-200 bg-white p-3 flex flex-col items-center gap-2 shadow-sm cursor-pointer hover:-translate-y-1 transition-transform duration-200"
        >
          <div
            className="h-8 w-8 rounded-xl flex items-center justify-center text-white font-bold text-sm"
            style={{ background: s.color }}
          >
            {s.name[0]}
          </div>
          <span className="text-xs font-medium text-slate-700">{s.name}</span>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="rounded-xl bg-emerald-400/10 border border-emerald-400/30 p-3 flex items-center gap-2.5 mb-5"
    >
      <span className="h-6 w-6 rounded-full bg-emerald-500 text-white grid place-items-center shrink-0">
        <Check className="h-3.5 w-3.5" />
      </span>
      <span className="text-xs font-medium text-emerald-700 leading-snug">
        Connected to Shopify · 248 products synced
      </span>
    </motion.div>

    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3 font-medium">
      Live import
    </p>
    <div className="space-y-2">
      {[
        { icon: ShoppingBag, name: "Cotton T-Shirt", sku: "TSH-001", price: "₹699" },
        { icon: Package, name: "Leather Wallet", sku: "WAL-204", price: "₹1,249" },
        { icon: Store, name: "Sneaker Pro X", sku: "SNK-330", price: "₹3,499" },
      ].map((p, i) => (
        <motion.div
          key={p.sku}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 + i * 0.15 }}
          className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 p-2.5"
        >
          <div className="h-8 w-8 rounded-lg bg-white grid place-items-center shrink-0 border border-slate-100">
            <p.icon className="h-4 w-4 text-slate-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate text-slate-900">{p.name}</p>
            <p className="text-xs text-slate-400 font-mono">{p.sku}</p>
          </div>
          <span className="text-sm font-semibold tabular-nums shrink-0 text-slate-900">
            {p.price}
          </span>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4 }}
      className="mt-4 flex items-center gap-1.5 text-xs text-slate-400"
    >
      <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
      Sync complete in 12s
    </motion.div>
  </div>
);

export const StepAnalyze = () => {
  const products = [
    { name: "Cotton T-Shirt", tag: "underpriced", className: "bg-amber-400/15 text-amber-700" },
    { name: "Leather Wallet", tag: "high potential", className: "bg-emerald-400/15 text-emerald-700" },
    { name: "Sneaker Pro X", tag: "overpriced", className: "bg-red-400/15 text-red-600" },
    { name: "Smart Bottle", tag: "high potential", className: "bg-emerald-400/15 text-emerald-700" },
  ];

  return (
    <div className="h-full w-full p-5 md:p-7 overflow-y-auto">
      <WindowChrome url="opsell.app/analyze" />

      <div className="flex items-center justify-between mb-5 gap-2 flex-wrap">
        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-medium">
          AI analysis
        </p>
        <span className="text-xs font-mono text-emerald-500 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Scanning competitors…
        </span>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm mb-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-slate-900">Market demand signal</p>
          <span className="text-xs text-slate-400">7d</span>
        </div>
        <svg viewBox="0 0 300 100" className="w-full h-20">
          <defs>
            <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,80 C30,70 50,75 80,55 C110,35 140,60 170,40 C200,20 230,30 260,15 L300,10"
            fill="none"
            stroke="#34d399"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,80 C30,70 50,75 80,55 C110,35 140,60 170,40 C200,20 230,30 260,15 L300,10 L300,100 L0,100 Z"
            fill="url(#g1)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          />
        </svg>
      </div>

      <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-3 font-medium">
        Auto-tagging
      </p>
      <div className="space-y-2">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.18 }}
            className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 p-2.5 gap-2"
          >
            <span className="text-sm font-medium truncate text-slate-900">{p.name}</span>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 + i * 0.18, type: "spring", stiffness: 300 }}
              className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full shrink-0 ${p.className}`}
            >
              {p.tag}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const StepRecommend = () => (
  <div className="h-full w-full p-5 md:p-7 overflow-y-auto">
    <WindowChrome url="opsell.app/suggestions" />

    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-5 font-medium">
      Smart recommendation
    </p>

    <div className="grid grid-cols-2 gap-3 mb-5">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
      >
        <p className="text-[11px] uppercase tracking-wider text-slate-400 mb-2">Old price</p>
        <p className="text-3xl font-light text-slate-300 line-through decoration-red-400/60 decoration-2">
          ₹999
        </p>
        <p className="text-xs text-slate-400 mt-2">Conv: 2.1%</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-2xl border-2 border-emerald-400 bg-white p-4 shadow-lg shadow-emerald-400/20 relative overflow-hidden"
      >
        <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider bg-emerald-400 text-slate-900 px-2 py-0.5 rounded-full">
          AI
        </span>
        <p className="text-[11px] uppercase tracking-wider text-emerald-500 mb-2">Suggested</p>
        <p className="text-3xl font-semibold text-slate-900">₹849</p>
        <p className="text-xs text-emerald-600 mt-2 font-medium">+18% expected sales</p>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm mb-3"
    >
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <p className="text-sm font-semibold text-slate-900 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-emerald-400" /> Bundle suggestion
        </p>
        <span className="text-xs text-emerald-600 font-semibold">+₹420 AOV</span>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        {["T-Shirt", "Wallet", "Cap"].map((b, i) => (
          <motion.span
            key={b}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + i * 0.1 }}
            className="text-xs px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 font-medium text-slate-700"
          >
            {b}
          </motion.span>
        ))}
        <span className="text-xs text-slate-400 ml-auto">@ ₹1,499</span>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      className="rounded-2xl bg-slate-900 p-4 text-slate-100"
    >
      <p className="text-[11px] uppercase tracking-[0.2em] opacity-50 mb-1.5">Discount strategy</p>
      <p className="text-sm leading-relaxed">
        Run <span className="text-emerald-400 font-semibold">10% flash sale</span> Fri 6–9 pm —
        predicted +24% units sold.
      </p>
    </motion.div>
  </div>
);

export const StepGrowth = () => {
  const stats = [
    { label: "Sales", value: "+32%", className: "text-emerald-500" },
    { label: "Profit", value: "+18%", className: "text-emerald-400" },
    { label: "Abandoned carts", value: "−12%", className: "text-violet-400" },
  ];

  return (
    <div className="h-full w-full p-5 md:p-7 overflow-y-auto">
      <WindowChrome url="opsell.app/dashboard" />

      <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-medium">
          Growth dashboard
        </p>
        <span className="text-xs text-slate-400 font-mono">Last 30 days</span>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm mb-4">
        <div className="flex items-end justify-between mb-3 flex-wrap gap-2">
          <div>
            <p className="text-xs text-slate-400 mb-0.5">Revenue</p>
            <p className="text-2xl font-semibold text-slate-900 tabular-nums">₹4,82,310</p>
          </div>
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-400/10 px-2.5 py-1 rounded-full">
            ↑ 32.4%
          </span>
        </div>
        <svg viewBox="0 0 300 90" className="w-full h-20">
          <defs>
            <linearGradient id="g2" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,75 L25,72 L50,68 L75,60 L100,55 L125,48 L150,40 L175,35 L200,28 L225,22 L250,18 L275,12 L300,8"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.path
            d="M0,75 L25,72 L50,68 L75,60 L100,55 L125,48 L150,40 L175,35 L200,28 L225,22 L250,18 L275,12 L300,8 L300,90 L0,90 Z"
            fill="url(#g2)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          />
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
            className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
          >
            <p className={`text-xl font-semibold tabular-nums ${s.className}`}>{s.value}</p>
            <p className="text-[10px] uppercase tracking-wider text-slate-400 mt-1 leading-tight font-medium">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 rounded-xl bg-emerald-400/10 border border-emerald-400/30 p-3 flex items-center gap-2"
      >
        <Sparkles className="h-4 w-4 text-emerald-400 shrink-0" />
        <span className="text-sm text-slate-900">
          <span className="font-semibold">3 new opportunities</span> detected this week.
        </span>
      </motion.div>
    </div>
  );
};

export const StepMockup = ({ step }: { step: number }) => {
  const steps = [<StepConnect />, <StepAnalyze />, <StepRecommend />, <StepGrowth />];

  return (
    // This wrapper must be relative + h-full so absolute children have a resolved height
    <div className="relative h-full w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute inset-0 h-full w-full"
        >
          {steps[step]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};