import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconLayoutDashboard,
  IconCurrencyRupee,
  IconClockBolt,
  IconListDetails,
  IconBuildingStore,
} from "@tabler/icons-react";

export function ProblemsBentoGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-8">
      <div className="mx-auto mb-14 max-w-3xl text-center">


      
      </div>

      <BentoGrid className="mx-auto max-w-6xl">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={item.className}
          />
        ))}
      </BentoGrid>

      <div className="mx-auto mt-16 max-w-4xl text-center">
        <p className="text-balance text-2xl font-medium leading-10 text-slate-900 md:text-3xl">
          Most brands do not lose growth because of bad products.
          <span className="block text-blue-600">
            They lose growth because they react too late and manage everything
            manually.
          </span>
        </p>
      </div>
    </section>
  );
}

const DashboardsVisual = () => {
  return (
    <div className="relative flex h-full min-h-[16rem] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4">
      <div className="absolute left-4 top-5 h-24 w-40 rounded-2xl border border-slate-200 bg-white shadow-sm" />
      <div className="absolute left-16 top-16 h-24 w-40 rounded-2xl border border-slate-200 bg-white shadow-sm" />
      <div className="absolute left-28 top-9 h-24 w-40 rounded-2xl border border-slate-200 bg-white shadow-sm" />

      <div className="absolute bottom-4 right-4 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-lg">
        6+ Tools
      </div>

      <div className="absolute bottom-4 left-4 text-sm font-medium text-slate-500">
        0 clear view
      </div>
    </div>
  );
};

const PricingVisual = () => {
  return (
    <div className="flex h-full min-h-[16rem] flex-col justify-between rounded-3xl bg-gradient-to-br from-orange-50 via-white to-slate-100 p-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-sm text-slate-500">Product Price</p>
        <div className="mt-4 flex items-center gap-2 text-xl font-semibold">
          <span className="text-slate-400 line-through">₹999</span>
          <span className="text-orange-500">₹899</span>
          <span className="text-slate-900">₹949</span>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-2xl bg-orange-100 px-4 py-3 text-sm font-medium text-orange-700">
        <span>Unsure?</span>
        <span>Manual decision</span>
      </div>
    </div>
  );
};

const CompetitorVisual = () => {
  return (
    <div className="flex h-full min-h-[16rem] flex-col justify-between rounded-3xl bg-gradient-to-br from-red-50 via-white to-orange-50 p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 rounded-2xl border border-red-200 bg-white p-4">
          <p className="text-xs font-medium text-red-500">Competitor</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">₹799 ↓</p>
        </div>

        <div className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
          2 days later
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-xs font-medium text-slate-500">Your Product</p>
        <p className="mt-2 text-lg font-semibold text-slate-900">₹999</p>
      </div>
    </div>
  );
};

const ListingsVisual = () => {
  return (
    <div className="grid h-full min-h-[16rem] grid-cols-3 gap-3 rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-4">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
        >
          <div className="h-12 rounded-lg bg-slate-100" />
          <div className="mt-3 h-2 w-3/4 rounded-full bg-slate-200" />
          <div className="mt-2 h-2 w-1/2 rounded-full bg-red-200" />
          <div className="mt-4 rounded-lg bg-red-50 px-2 py-1 text-[10px] font-medium text-red-500">
            Mismatch
          </div>
        </div>
      ))}
    </div>
  );
};

const AgencyVisual = () => {
  return (
    <div className="flex h-full min-h-[16rem] flex-col justify-between rounded-3xl bg-gradient-to-br from-slate-100 via-white to-orange-50 p-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-sm text-slate-700">“Can you update this?”</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
          3 days later
        </div>

        <div className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
          $$$
        </div>
      </div>
    </div>
  );
};

const items = [
  {
    title: "Your Team Is Working Across 6 Different Tools",
    description:
      "Pricing is in one dashboard, listings in another, competitor tracking in spreadsheets, and performance in agency reports.",
    header: <DashboardsVisual />,
    icon: <IconLayoutDashboard className="h-4 w-4 text-blue-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Pricing Decisions Still Happen Manually",
    description:
      "Your team changes prices based on guesswork, competitor checks, or gut feeling instead of real-time data.",
    header: <PricingVisual />,
    icon: <IconCurrencyRupee className="h-4 w-4 text-orange-500" />,
    className: "",
  },
  {
    title: "Competitors Change Faster Than You Can React",
    description:
      "By the time you notice a competitor dropped prices or launched a bundle, you have already lost sales.",
    header: <CompetitorVisual />,
    icon: <IconClockBolt className="h-4 w-4 text-red-500" />,
    className: "",
  },
  {
    title: "Your Product Listings Are Different Everywhere",
    description:
      "Titles, images, prices and descriptions are inconsistent across marketplaces, hurting trust and conversion.",
    header: <ListingsVisual />,
    icon: <IconListDetails className="h-4 w-4 text-blue-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Agencies Are Slow, Expensive And Hard To Scale",
    description:
      "Every pricing update, listing change or campaign request takes days and adds more cost.",
    header: <AgencyVisual />,
    icon: <IconBuildingStore className="h-4 w-4 text-slate-500" />,
    className: "",
  },
];