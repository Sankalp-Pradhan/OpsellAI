import Link from "next/link"

export default function Footer() {
  const footerSections = [
    {
      title: "Solutions",
      links: [
        { label: "E-commerce", href: "/solutions/ecommerce" },
        { label: "D2C", href: "/solutions/d2c" },
        { label: "Enterprise", href: "/solutions/enterprise" },
        { label: "Startups", href: "/solutions/startups" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Story", href: "/story" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/guptashaurya96/" },
      ],
    },
  ]

  return (
    <footer className="w-full overflow-hidden bg-white font-geist-sans">
      {/* CTA */}
      <section className="relative overflow-hidden rounded-t-[28px] bg-[#2155F5]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#2C63FF_0%,#1E56F2_100%)]" />
          <div className="absolute left-1/2 top-[18%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/30 blur-3xl md:h-[560px] md:w-[560px]" />
          <div className="absolute left-1/2 top-0 h-px w-[68%] -translate-x-1/2 bg-white/30" />
          <div className="absolute left-1/2 top-0 h-[240px] w-[92%] -translate-x-1/2 rounded-b-[140px] border border-white/40 md:h-[300px] md:rounded-b-[180px]" />
          <div className="absolute right-[-120px] top-[180px] h-[360px] w-[360px] rotate-45 border border-white/40 md:right-[-60px] md:h-[480px] md:w-[480px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.14),transparent_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.08)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-5 pb-14 pt-12 text-center sm:px-8 sm:pb-16 sm:pt-16 lg:px-12 lg:pb-20 lg:pt-20">
          <h2 className="max-w-4xl text-balance text-[2.5rem] font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Automate
            <br />
            Optimize Opsell
          </h2>

          <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 lg:mt-12">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl sm:px-8 sm:py-4 sm:text-base">
              Schedule a Call
            </button>

            <p className="text-sm text-white/90 sm:text-base">
              Book a call with the founder to know more
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="border-b border-slate-200 pb-12">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
            {/* Brand */}
            <div className="w-full max-w-md shrink-0">
              <Link href="/" className="flex w-fit items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2155F5] text-white shadow-md">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 5H7a4 4 0 0 0 0 8h10" />
                    <path d="M11 19h6a4 4 0 0 0 0-8H7" />
                  </svg>
                </div>

                <span className="text-2xl font-semibold tracking-tight text-slate-900">
                  OpsellAI
                </span>
              </Link>

              <p className="mt-6 max-w-[320px] text-base leading-8 text-slate-600 sm:text-lg">
                AI-powered pricing, discounts, and marketplace optimization for
                modern brands.
              </p>
            </div>

            {/* Right side columns */}
            <div className="w-full lg:ml-auto lg:max-w-[420px]">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-14 lg:justify-end">
                {footerSections.map((section) => (
                  <FooterColumn
                    key={section.title}
                    title={section.title}
                    links={section.links}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 pt-6 text-center text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} OpsellAI. All rights reserved.</p>

          <div className="flex items-center justify-center gap-5 sm:justify-end">
            <Link href="/privacy" className="transition hover:text-slate-900">
              Privacy
            </Link>

            <Link href="/terms" className="transition hover:text-slate-900">
              Terms
            </Link>
          </div>
        </div>
      </section>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
        {title}
      </h3>

      <ul className="mt-5 grid grid-cols-1 gap-y-3">
        {links.map((link) => {
          const isExternal = link.href.startsWith("http")

          return (
            <li key={link.label}>
              <Link
                href={link.href}
                {...(isExternal && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="group inline-flex items-center text-[15px] text-slate-600 transition-colors duration-200 hover:text-slate-900"
              >
                <span>{link.label}</span>

                <span className="ml-0 max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:ml-1 group-hover:max-w-[20px] group-hover:opacity-100">
                  →
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}