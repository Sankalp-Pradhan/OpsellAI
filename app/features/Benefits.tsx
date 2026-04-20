import { Smile, Clock, TrendingUp, GraduationCap, Plug, Eye } from "lucide-react";

const benefits = [
  { Icon: Smile,         title: "Easy to Use",               text: "Designed so anyone can get started in minutes — no manual needed." },
  { Icon: Clock,         title: "Saves Time",                text: "Automate the repetitive tasks you used to do every single morning." },
  { Icon: TrendingUp,    title: "Improves Revenue",          text: "Smarter prices and clear suggestions help you sell more, every week." },
  { Icon: GraduationCap, title: "No Technical Skills Needed",text: "If you can use a phone, you can run your entire pricing with Opsell." },
  { Icon: Plug,          title: "Works with Your Store",     text: "Connects with Shopify, WooCommerce and more in just a few clicks." },
  { Icon: Eye,           title: "Gives Clear Insights",      text: "Plain-language reports tell you exactly what to do next." },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">Why Opsell</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Businesses Choose Opsell
          </h2>
          <p className="mt-4 text-lg text-gray-500">Six reasons store owners love it from day one.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-3xl border border-gray-200/60 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_4px_24px_0_rgba(59,111,240,0.10)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 transition-colors group-hover:bg-blue-600">
                <b.Icon className="h-5 w-5 text-blue-600 transition-colors group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-gray-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;