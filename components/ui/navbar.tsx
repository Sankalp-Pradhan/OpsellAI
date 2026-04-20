
"use client"

import Link from "next/link"
import { Geist } from "next/font/google"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const geist = Geist({
  subsets: ["latin"],
})

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "How it Works",
    href: "/works",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [screenWidth, setScreenWidth] = useState(1200)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`${geist.className} fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-7`}
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 20,
          mass: 0.8,
        }}
        animate={{
          maxWidth: scrolled ? 820 : screenWidth,
          marginTop: scrolled ? 18 : 0,
          borderRadius: scrolled ? 28 : 0,
          height: scrolled ? 56 : 72,
          paddingLeft: scrolled ? 20 : 24,
          paddingRight: scrolled ? 20 : 24,
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.85)"
            : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
          boxShadow: scrolled
            ? "0 10px 30px rgba(0,0,0,0.08)"
            : "0 0 0 rgba(0,0,0,0)",
          borderColor: scrolled
            ? "rgba(0,0,0,0.08)"
            : "rgba(0,0,0,0)",
        }}
        className="mx-auto flex w-full items-center justify-between border transition-all"
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M20 0C25.3043 4.00466e-07 30.3919 2.10669 34.1426 5.85742C34.8157 6.53058 35.4354 7.24719 36 8H20C16.8174 8 13.7651 9.26421 11.5146 11.5146C9.26421 13.7651 8 16.8174 8 20H20L36.9102 9.31934C38.1656 11.3074 39.0611 13.5027 39.5547 15.8027L32 20H40L39.9941 20.4971C39.8669 25.6213 37.776 30.5092 34.1426 34.1426C30.3919 37.8933 25.3043 40 20 40C14.6957 40 9.60815 37.8933 5.85742 34.1426C5.18426 33.4694 4.56459 32.7528 4 32H20C23.1826 32 26.2349 30.7358 28.4854 28.4854C30.5952 26.3755 31.8383 23.5608 31.9854 20.5947L32 20H20L3.08984 30.6787C1.83452 28.6906 0.941002 26.4951 0.447266 24.1953L8 20H0C8.00931e-07 14.6957 2.1067 9.60815 5.85742 5.85742C9.60815 2.1067 14.6957 -5.79361e-10 20 0Z"
              fill="#2563EB"
            />
          </svg>

          <span className="text-lg font-semibold text-slate-900">
            OpsellAI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
  <ul className="flex items-center gap-2">
    {navLinks.map((link) => {
      const isActive = pathname === link.href

      return (
        <li key={link.href} className="relative">
          <Link
            href={link.href}
            className={`relative flex h-10 items-center justify-center rounded-full px-5 text-sm font-medium transition-all duration-300 ${
              isActive
                ? "text-slate-900"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full border border-slate-200 bg-white shadow-sm"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              />
            )}

            <span className="relative z-10">{link.label}</span>
          </Link>
        </li>
      )
    })}
  </ul>
</nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-[0_6px_18px_rgba(37,99,235,0.35)] transition hover:bg-blue-700 md:inline-flex"
          >
            Try for free
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm md:hidden"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : -10,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.2 }}
        className="mx-4 mt-3 overflow-hidden rounded-3xl border border-slate-200 bg-white/95 shadow-xl backdrop-blur md:hidden"
      >
        {mobileMenuOpen && (
          <div className="flex flex-col p-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            <Link
              href="#"
              className="mt-3 flex items-center justify-center rounded-2xl bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try for free
            </Link>
          </div>
        )}
      </motion.div>
    </header>
  )
}
