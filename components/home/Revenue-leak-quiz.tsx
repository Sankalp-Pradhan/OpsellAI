"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Zap,
  Eye,
  Tag,
  FileText,
  FlaskConical,
} from "lucide-react"

const questions = [
  {
    id: "skus",
    label: "Question 1 of 3",
    title: "How many SKUs do you manage?",
    options: [
      { label: "Under 50", value: "small" },
      { label: "50 – 500", value: "mid" },
      { label: "500+", value: "large" },
    ],
  },
  {
    id: "platforms",
    label: "Question 2 of 3",
    title: "How many platforms do you sell on?",
    options: [
      { label: "Just 1", value: "one" },
      { label: "2 to 4", value: "multi" },
      { label: "5 or more", value: "omni" },
    ],
  },
  {
    id: "repricing",
    label: "Question 3 of 3",
    title: "How do you handle repricing?",
    options: [
      { label: "Manually", value: "manual" },
      { label: "Basic rules", value: "rules" },
      { label: "Not at all", value: "none" },
    ],
  },
]

const features = [
  {
    id: "pricing",
    icon: Zap,
    name: "AI Pricing Engine",
    desc: "Tracks competitor pricing and recommends the best price per platform automatically.",
    result: "+18% GMV with better margins",
    triggers: (a: Answers) => a.repricing === "manual" || a.repricing === "none" || a.skus === "large" || a.skus === "mid",
  },
  {
    id: "competitor",
    icon: Eye,
    name: "Competitor Tracker",
    desc: "Monitors rival prices, bundles and listing changes in real time.",
    result: "2× faster repricing decisions",
    triggers: (a: Answers) => a.platforms === "multi" || a.platforms === "omni" || a.repricing === "manual",
  },
  {
    id: "bundle",
    icon: Tag,
    name: "Discount & Bundle Optimizer",
    desc: "Suggests the best discount or bundle combos to clear stock without killing margin.",
    result: "+23% average order value",
    triggers: (a: Answers) => a.skus === "large" || a.platforms === "omni",
  },
  {
    id: "listing",
    icon: FileText,
    name: "Listing & Content Manager",
    desc: "Keeps titles, images and descriptions consistent across every marketplace.",
    result: "+15% conversion rate",
    triggers: (a: Answers) => a.platforms === "multi" || a.platforms === "omni",
  },
  {
    id: "experiment",
    icon: FlaskConical,
    name: "Experimentation Engine",
    desc: "Tests different titles, creatives and offers automatically across listings.",
    result: "Continuous measurable growth",
    triggers: (a: Answers) => a.platforms === "omni" || a.skus === "large",
  },
]

type Answers = {
  skus: string
  platforms: string
  repricing: string
}

function calcLeak(answers: Answers): number {
  const skuBase: Record<string, number> = { small: 4000, mid: 9000, large: 16000 }
  const platformMult: Record<string, number> = { one: 1, multi: 1.4, omni: 1.8 }
  const repricingAdd: Record<string, number> = { manual: 2400, rules: 800, none: 3600 }

  const base = skuBase[answers.skus] ?? 4000
  const mult = platformMult[answers.platforms] ?? 1
  const add = repricingAdd[answers.repricing] ?? 800

  return Math.round(base * mult + add)
}

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0)
  const startTime = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    setValue(0)
    startTime.current = null

    const animate = (now: number) => {
      if (!startTime.current) startTime.current = now
      const elapsed = now - startTime.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [target, duration])

  return value
}

export default function RevenueLeakQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Partial<Answers>>({})
  const [selected, setSelected] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const questionKeys: (keyof Answers)[] = ["skus", "platforms", "repricing"]

  const finalAnswers = answers as Answers
  const leak = showResult ? calcLeak(finalAnswers) : 0
  const animatedLeak = useCountUp(leak)

  const highlightedFeatures = showResult
    ? features.filter((f) => f.triggers(finalAnswers))
    : []

  function handleSelect(value: string) {
    setSelected(value)
    setTimeout(() => {
      const key = questionKeys[step]
      const newAnswers = { ...answers, [key]: value }
      setAnswers(newAnswers)
      setSelected(null)
      if (step < questions.length - 1) {
        setStep((s) => s + 1)
      } else {
        setShowResult(true)
      }
    }, 320)
  }

  function restart() {
    setStep(0)
    setAnswers({})
    setSelected(null)
    setShowResult(false)
  }

  return (
    <div className="relative w-full overflow-hidden bg-slate-50">
      {/* Diagonal line background — matches problem section */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            rgba(148,163,184,0.12) 0px,
            rgba(148,163,184,0.12) 1px,
            transparent 1px,
            transparent 18px
          )`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white border-b border-slate-300" />

      <section className="relative z-10 mx-10 overflow-hidden border border-slate-200 bg-white/95 pt-16 pb-20 px-4 md:px-10 lg:px-16">

        {/* Section header — centered */}
        <div className="text-center mb-10">
          <p className="mb-1 text-[10px] md:text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">
            Revenue Leak Diagnosis
          </p>
          <h2 className="text-2xl md:text-6xl font-extralight text-slate-900">
            What's Costing You Money?
          </h2>
          <p className="mt-4 text-sm md:text-base md:leading-8 text-slate-600 max-w-xl mx-auto">
            Answer 3 quick questions and we'll show you exactly where revenue is slipping through.
          </p>
        </div>

        <div className="flex justify-center">
          <AnimatePresence mode="wait">

            {/* ── QUIZ STAGE ── */}
            {!showResult ? (
              <motion.div
                key={`question-${step}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-xl"
              >
                {/* Progress bars */}
                <div className="flex gap-2 mb-8">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i < step ? "bg-blue-600 flex-[2]" : "bg-slate-200 flex-1"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2 text-center">
                  {questions[step].label}
                </p>
                <h3 className="text-xl md:text-2xl font-medium text-slate-900 mb-6 text-center">
                  {questions[step].title}
                </h3>

                <div className="flex flex-col gap-3">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelect(opt.value)}
                      className={`w-full text-left px-5 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200
                        ${selected === opt.value
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "bg-white border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600"
                        }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>

            ) : (

              /* ── RESULT STAGE ── */
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-3xl"
              >
                {/* Leak number — centered */}
                <div className="mb-10 text-center">
                  <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
                    Estimated monthly revenue leak
                  </p>
                  <div className="text-5xl md:text-6xl font-medium text-slate-900 tracking-tight">
                    ${animatedLeak.toLocaleString()}
                    <span className="text-2xl text-slate-400 font-light">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    Based on your business profile. Here's what's causing it.
                  </p>
                </div>

                {/* Section divider label — matches screenshot "HOW OPSELL FIXES IT" */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-slate-200" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 whitespace-nowrap">
                    How Opsell Fixes It
                  </span>
                  <div className="flex-1 h-px bg-slate-200" />
                </div>

                {/* Feature cards — mimics screenshot exactly */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((f, i) => {
                    const isHighlighted = highlightedFeatures.some((h) => h.id === f.id)
                    const Icon = f.icon
                    return (
                      <motion.div
                        key={f.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: isHighlighted ? 1 : 0.38, y: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className={`relative rounded-xl border bg-white p-5 flex flex-col gap-3 transition-all duration-300
                          ${isHighlighted
                            ? "border-slate-200 border-l-[3px] border-l-blue-500"
                            : "border-slate-200 grayscale"
                          }`}
                      >
                        {/* Top row: icon + badge */}
                        <div className="flex items-start justify-between">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isHighlighted ? "bg-blue-50" : "bg-slate-100"}`}>
                            <Icon size={18} className={isHighlighted ? "text-blue-500" : "text-slate-400"} />
                          </div>
                          {isHighlighted && (
                            <span className="text-[10px] font-semibold uppercase tracking-wide text-blue-600">
                              Fixes your leak
                            </span>
                          )}
                        </div>

                        {/* Name + desc */}
                        <div>
                          <p className="text-sm font-semibold text-slate-900 mb-1">{f.name}</p>
                          <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                        </div>

                        {/* Result metric */}
                        <div className="flex items-center gap-1.5 mt-auto">
                          <span className={`w-1.5 h-1.5 rounded-full ${isHighlighted ? "bg-blue-500" : "bg-slate-300"}`} />
                          <span className={`text-sm font-medium ${isHighlighted ? "text-slate-700" : "text-slate-400"}`}>
                            ↑ {f.result}
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* CTA — centered */}
                <div className="mt-10 flex flex-col items-center gap-3">
                  <button className="w-full max-w-xs rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition hover:scale-[1.02] hover:bg-blue-700">
                    Start fixing this — free trial
                  </button>
                  <p className="text-xs text-slate-400">No credit card required.</p>
                  <button
                    onClick={restart}
                    className="text-xs text-slate-400 hover:text-slate-700 transition-colors"
                  >
                    ← Retake quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}