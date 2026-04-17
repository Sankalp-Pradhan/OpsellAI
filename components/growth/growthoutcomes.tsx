"use client";

import { motion } from "framer-motion";

import { GMVCard } from "./gmvCard";
import ImproveMarginsCard from "./marginsCard";
import ConversionCard from "./conversionCard";
import TimeSavedCard from "./TimeCard";
import { LayoutTextFlip } from "../ui/layout-text-flip";

export const GrowthOutcomes = () => {
  return (
    <section className="relative w-full overflow-hidden py-24 md:px-10 md:py-5">
      <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-glow-blue opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-glow-green opacity-30 blur-3xl pointer-events-none" />

      <div className="container relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center md:mb-20"
        >
          <span className="mb-4 inline-block rounded-full border border-border bg-white/70 px-3 py-1 text-[10px] font-light uppercase tracking-[0.18em] text-brand-blue shadow-sm backdrop-blur">
            one stop solution to all these problems
          </span>

          <motion.div className="relative mx-4 my-1 flex flex-col items-center justify-center gap-4 text-center font-semibold sm:mx-0 sm:flex-row md:text-6xl lg:text-7xl">
            <LayoutTextFlip
              text="Opsell for"
              words={["Growth", "Automation", "Optimization"]}
            />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-6">
          <div className="flex h-full md:col-span-4">
            <ImproveMarginsCard />
          </div>

          <div className="flex h-full md:col-span-2">
            <GMVCard />
          </div>

          <div className="flex h-full md:col-span-3">
            <TimeSavedCard />
          </div>

          <div className="flex h-full md:col-span-3">
            <ConversionCard />
          </div>
        </div>
      </div>
    </section>
  );
};