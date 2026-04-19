"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What does OpsellAI actually do?",
    answer:
      "Opsell helps brands find and fix the places where they are losing revenue across different marketplaces. It automatically tracks competitor pricing, optimizes prices, discounts and bundles, and keeps product listings consistent across every platform. Instead of managing everything manually, Opsell shows you exactly what to change — or can do it for you automatically.",
  },
  {
    question: "Which marketplaces does Opsell support?",
    answer:
      "Opsell works across Amazon, Shopify, Flipkart, Myntra, Meesho and other major sales channels. You can manage pricing and listings from one place.",
  },
  {
    question: "Will Opsell automatically change my prices?",
    answer:
      "Only if you want it to. You can choose between fully automatic updates, suggested recommendations, or approval before anything goes live.",
  },
  {
    question: "Can Opsell lower my margins?",
    answer:
      "No. You can set minimum margin and pricing rules, so Opsell never discounts below the limits you choose.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most brands connect their stores and start seeing recommendations in under 15 minutes.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most businesses notice pricing opportunities and listing issues within the first few days. Revenue improvements typically appear within 2–4 weeks.",
  },
  {
    question: "What if I already use spreadsheets or another repricer?",
    answer:
      "Opsell can work alongside your current process. Many teams start by using it only for recommendations before switching fully.",
  },
  {
    question: "Do I need a large catalog for this to be useful?",
    answer:
      "No. Opsell helps businesses of all sizes, but it becomes especially valuable once you manage 50+ products or sell on multiple platforms.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. You can try Opsell for free before deciding whether to automate anything.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="pt-16 text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
          Answers to common questions about Opsell and its features. If you have
          any other questions, please don't hesitate to contact us.
        </p>
      </div>

      {/* Accordion list */}
      <div className="pt-10  px-4 sm:px-6">
        <div className="mx-auto w-full max-w-2xl flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="flex flex-col gap-0">
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border text-left transition-colors duration-200
                    ${isOpen
                      ? "bg-white border-slate-200"
                      : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                >
                  <span className="text-sm sm:text-base font-normal text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  {isOpen
                    ? <ChevronUp size={18} className="text-slate-500 flex-shrink-0" />
                    : <ChevronDown size={18} className="text-slate-400 flex-shrink-0" />
                  }
                </button>

                {/* Answer panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 px-5 py-4 bg-white border border-slate-200 rounded-xl">
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}