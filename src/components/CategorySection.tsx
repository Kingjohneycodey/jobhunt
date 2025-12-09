"use client";

import {
  PenTool,
  Clock,
  Megaphone,
  Wallet,
  Monitor,
  Code,
  Briefcase,
  Users,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Category {
  name: string;
  icon: LucideIcon;
  jobCount: number;
  highlighted?: boolean;
}

const categories: Category[] = [
  { name: "Design", icon: PenTool, jobCount: 235 },
  { name: "Sales", icon: Clock, jobCount: 756 },
  { name: "Marketing", icon: Megaphone, jobCount: 140, highlighted: true },
  { name: "Finance", icon: Wallet, jobCount: 325 },
  { name: "Technology", icon: Monitor, jobCount: 436 },
  { name: "Engineering", icon: Code, jobCount: 542 },
  { name: "Business", icon: Briefcase, jobCount: 211 },
  { name: "Human Resource", icon: Users, jobCount: 346 },
];

export function CategorySection() {
  return (
    <section className="py-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">
          <span className="text-primary">Explore by</span>{" "}
          <span className="text-secondary">category</span>
        </h2>
        <a
          href="#"
          className="flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
        >
          Show all jobs
          <ChevronRight className="w-5 h-5" />
        </a>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          const isHighlighted = category.highlighted;

          return (
            <div
              key={category.name}
              className={`p-6 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                isHighlighted
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-[#171717] border-gray-200 hover:border-primary/50"
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                {/* Icon */}
                <div className="flex items-center justify-center">
                  <Icon
                    className={`w-8 h-8 stroke-2 ${
                      isHighlighted ? "text-white" : "text-primary"
                    }`}
                  />
                </div>

                {/* Category Name */}
                <h3
                  className={`font-bold text-base ${
                    isHighlighted ? "text-white" : "text-[#171717]"
                  }`}
                >
                  {category.name}
                </h3>

                {/* Job Count and Arrow */}
                <div className="flex items-center gap-1.5 w-full justify-center">
                  <span
                    className={`text-sm ${
                      isHighlighted ? "text-white/90" : "text-gray-500"
                    }`}
                  >
                    {category.jobCount} jobs available
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 ${
                      isHighlighted ? "text-white" : "text-primary"
                    }`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

