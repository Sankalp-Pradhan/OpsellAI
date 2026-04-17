"use client"

import { Geist } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import { motion, type Variants } from "framer-motion"
import AnimatedBackground from "@/components/ui/animatedBackground";
import { BorderBeam } from "@/components/ui/border-beam";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import Card1 from "@/components/problem-cards/card1";
import Card2 from "@/components/problem-cards/card2";
import Card4 from "@/components/problem-cards/card4";
import Card3 from "@/components/problem-cards/card3";
import { GrowthOutcomes } from "@/components/growth/growthoutcomes";
import OrbitApps from "@/components/integrate/orbitApps";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";


const geist = Geist({ subsets: ["latin"] });

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      delay: i * 0.08,
    },
  }),
}

export default function Home() {
  return (
    <div className={`${geist.className}  py-4  border-4`}>
      <div className=" border-b-4 z-1">
        <Navbar />

        <AnimatedBackground />


        <section className="relative min-h-screen overflow-hidden  border-b-1 border-slate-2  bg-white  pt-28 md:px-10 lg:px-16  ">

          {/* BACKGROUND GRADIENT 
          This mimics the screenshot: White at the top center, 
          fading into a soft blue that fills the bottom and corners.
          */}


          {/* CONTENT LAYER */}
          <div className="relative z-10 mx-auto pt-10 flex max-w-5xl flex-col items-center text-center">

            {/* Announcement pill */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="relative mb-8 inline-flex rounded-full"
            >
              <div className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-slate-200 bg-white/80 px-5 py-2 text-sm font-light text-slate-700 shadow-sm backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-slate-500"
                >
                  <path d="M12 2 3 7l9 5 9-5-9-5Zm0 8.2L4.21 6 12 2.8 19.79 6 12 10.2Zm-9 3.3 9 5 9-5v3l-9 5-9-5v-3Z" />
                </svg>
                <span>Your AI growth Agent</span>
                <BorderBeam
                  size={50}
                  duration={5}
                  className="from-transparent via-cyan-500 to-transparent"
                />
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="max-w-4xl text-balance text-4xl font-medium leading-[0.95] tracking-[-0.04em] text-slate-950 md:text-5xl lg:text-7xl"
            >
              Growth Across Every Marketplace
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="mt-6 max-w-2xl text-balance text-sm font-medium leading-6 text-slate-600 md:text-base md:leading-7"
            >
              Grow faster across all your e-commerce platforms with AI-powered analysis, pricing optimization, competitor tracking, and automated actions from one platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            >
              <InteractiveHoverButton className="rounded-full px-5 py-2 text-md font-light shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition hover:scale-[1.02] hover:bg-blue-700">
                Book a Demo
              </InteractiveHoverButton>

              <button className="rounded-full px-5 py-2 text-md text-white font-normal bg-blue-600 shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition hover:scale-[1.02] hover:bg-blue-700">
                Get Early Access
              </button>
            </motion.div>
          </div>

          {/* Decorative bottom fade to ensure smooth transition to next section */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />

        </section >




        {/* problem section */}
        <div className="relative w-full overflow-hidden bg-slate-50">
          {/* Diagonal line background */}
          <div
            className="absolute inset-0 z-0 opacity-40"
            style={{
              backgroundImage: `
        repeating-linear-gradient(
          -45deg,
          rgba(148, 163, 184, 0.12) 0px,
          rgba(148, 163, 184, 0.12) 1px,
          transparent 1px,
          transparent 18px
        )
      `,
            }}
          />

          {/* Soft fade so it looks cleaner */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white border-b border-slate-300" />

          <section className="relative z-10 mx-10 overflow-hidden border border-slate-200 bg-white/95 pt-16 pb-20 md:px-10 lg:px-16">
            <div className="mt-2">
              <p className="mb-1 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
                Why Growth Slows Down
              </p>

              <h1 className="text-5xl font-extralight text-slate-900">
                The Hidden Reasons Brands Lose Sales
              </h1>

              <p className="mt-2 text-md leading-8 text-slate-600">
                Your team spends more time switching tools and reacting late than
                actually growing the business.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 items-stretch justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card1 />
              <Card2 />
              <Card3 />
              <Card4 />
            </div>
          </section>
        </div>

        {/* how opsell delivers growth */}

        <div className="w-full border border-slate-200">

          <section className="relative mx-10  bg-blur-100  pt-16  lg:px-16 pb-16 border-1  ">
            <GrowthOutcomes />
          </section>
        </div>




        <section className="relative overflow-hidden border border-slate-200 bg-white mx-10">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-12 px-8">

            {/* Left Side - Orbit Apps */}
            <div className="flex w-1/2 justify-start">
              <OrbitApps />
            </div>

            {/* Right Side - Text */}
            <div className="w-1/2 max-w-xl">
              <h1 className="text-5xl font-semibold leading-tight text-slate-800">
                One Hub for Every <br /> E-commerce Platform
              </h1>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Opsell brings together pricing, listings, competitor tracking and
                automation from every marketplace into one intelligent platform,
                helping your team make faster decisions, react instantly and grow more
                efficiently.
              </p>
              <button className="px-4 py-2 mt-3 border border-slate-700 rounded-md text-slate-900">Learn more</button>
            </div>
          </div>
        </section>


      </div >
    </div>
  );
}
