import { ArrowRight, ShoppingBag, Sparkles, TrendingUp } from "lucide-react";

const Hero = () => {
    return (
      <section
        className="relative overflow-hidden pb-24 pt-20 lg:pt-28"
        style={{ background: "linear-gradient(135deg, #EEF2FF 0%, #F8F9FF 60%, #EDF4FF 100%)" }}
      >
        {/* Blurred blobs */}
        <div className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
  
        <div className="relative mx-auto max-w-7xl px-6 grid items-center gap-16 lg:grid-cols-2">
  
          {/* Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600">
              <Sparkles className="h-3.5 w-3.5" />
              All-in-one growth toolkit
            </div>
  
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl" style={{ lineHeight: 1.05 }}>
              Everything You Need to{" "}
              <span
                className="bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-transparent"
              >
                Grow Sales Smarter
              </span>
            </h1>
  
            <p className="max-w-xl text-lg leading-relaxed text-gray-500">
              Opsell helps you track competitors, improve pricing, and grow revenue automatically — without complicated tools.
            </p>
  
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary CTA */}
              <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 active:scale-95">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </button>
              {/* Secondary CTA */}
              <button className="inline-flex items-center rounded-full border border-gray-300 bg-white px-7 py-3.5 text-base font-semibold text-gray-800 transition hover:border-blue-300 hover:text-blue-600">
                Book a Demo
              </button>
            </div>
  
            <div className="flex items-center gap-6 pt-2 text-sm text-gray-400">
              <span>✓ No credit card</span>
              <span>✓ 14-day free trial</span>
              <span className="hidden sm:inline">✓ Cancel anytime</span>
            </div>
          </div>
  
          {/* Dashboard mockup */}
          <div className="relative">
            <div className="relative rounded-3xl border border-gray-200/60 bg-white p-6 shadow-[0_8px_40px_0_rgba(59,111,240,0.13)]">
  
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Live Dashboard</p>
                  <p className="text-base font-bold text-gray-900">Today's overview</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                </div>
              </div>
  
              <div className="space-y-3">
                <p className="text-xs font-semibold text-gray-400">Competitor prices</p>
                {[
                  { name: "Competitor A", price: "$24.90", trend: "-3%",  trendClass: "text-blue-600" },
                  { name: "Competitor B", price: "$27.50", trend: "+1%",  trendClass: "text-gray-400" },
                  { name: "Your store",   price: "$25.00", trend: "Best", trendClass: "text-blue-600" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center justify-between rounded-2xl bg-blue-50/50 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
                      <span className="text-sm font-medium text-gray-800">{c.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-gray-900">{c.price}</span>
                      <span className={`text-xs font-semibold ${c.trendClass}`}>{c.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
  
              <div className="mt-5 rounded-2xl border border-gray-100 bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400">Revenue · 7 days</span>
                  <span className="text-sm font-bold text-blue-600">+18.4%</span>
                </div>
                <svg viewBox="0 0 200 60" className="h-14 w-full">
                  <defs>
                    <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#3B6FF0" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3B6FF0" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,45 L25,38 L50,42 L75,30 L100,32 L125,22 L150,25 L175,12 L200,15 L200,60 L0,60 Z" fill="url(#g)" />
                  <path d="M0,45 L25,38 L50,42 L75,30 L100,32 L125,22 L150,25 L175,12 L200,15" fill="none" stroke="#3B6FF0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
  
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 hidden w-64 rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_4px_24px_0_rgba(59,111,240,0.10)] sm:block">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                  <ShoppingBag className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">Suggested action</p>
                  <p className="mt-1 text-sm font-medium leading-snug text-gray-800">Bundle "Hat + Tee" — could lift sales by 12%.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Hero;