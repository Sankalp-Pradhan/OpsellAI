"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const chips = [
  { label: "+12% Orders", delay: 1.2 },
  { label: "+8% AOV", delay: 1.45 },
  { label: "+18% Revenue", delay: 1.7 },
];

export const GMVCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative h-full overflow-hidden shadow-2xl rounded-[28px] border border-slate-200/70 bg-white/85 p-5  backdrop-blur-xl transition-all duration-500 ]"
    >
      {/* Background */}
   
      {/* Arrow badge */}
      <div className="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.45)] transition-transform duration-500 group-hover:scale-110">
        <ArrowUpRight className="h-4 w-4 text-white" />
      </div>

      <div className="relative z-10">
        <span className="mb-2 inline-block text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-900">
          Increase GMV
        </span>

        <div className="mb-1 flex items-baseline gap-2">
          <h3 className="text-5xl font-bold leading-none text-emerald-500 md:text-6xl">
            +18%
          </h3>
        </div>

        <p className="mb-5 text-xs font-medium text-slate-500">
          Average GMV Growth
        </p>
      </div>

      {/* Chart */}
      <div className="relative z-10 mt-2 h-32 md:h-36">
        <svg
          viewBox="0 0 400 200"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>

            <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[40, 80, 120, 160].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="400"
              y2={y}
              stroke="rgba(148,163,184,0.18)"
              strokeWidth="1"
              strokeDasharray="3 5"
            />
          ))}

          <motion.path
            d="M 0 180 C 60 170, 100 150, 140 140 S 220 110, 260 80 S 340 40, 400 20 L 400 200 L 0 200 Z"
            fill="url(#areaGrad)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.5 }}
          />

          <motion.path
            d="M 0 180 C 60 170, 100 150, 140 140 S 220 110, 260 80 S 340 40, 400 20"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 0.2,
            }}
            style={{
              filter: "drop-shadow(0 0 14px rgba(16,185,129,0.45))",
            }}
          />

          <motion.circle
            r="5"
            fill="#10B981"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.4 }}
            style={{
              filter: "drop-shadow(0 0 10px rgba(16,185,129,0.8))",
            }}
          >
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M 0 180 C 60 170, 100 150, 140 140 S 220 110, 260 80 S 340 40, 400 20"
            />
          </motion.circle>

          <motion.circle
            cx="400"
            cy="20"
            r="5"
            fill="#10B981"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2, type: "spring" }}
            style={{
              filter: "drop-shadow(0 0 12px rgba(16,185,129,0.9))",
            }}
          />
        </svg>

        {/* Floating particles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400"
            style={{
              left: `${20 + i * 18}%`,
              top: `${60 - i * 10}%`,
              boxShadow: "0 0 12px rgba(16,185,129,0.8)",
            }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.25, 0.8],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Description */}
      <div className="relative z-10 mt-5">
        <p className="max-w-md text-sm leading-6 text-slate-600">
          Smarter pricing, AI-powered bundles, and optimized product listings
          help brands drive more sales, improve order value, and unlock faster
          growth across every platform.
        </p>

        {/* Chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <motion.span
              key={chip.label}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: chip.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-full border border-emerald-200 bg-emerald-50/80 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 shadow-sm backdrop-blur"
            >
              {chip.label}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}