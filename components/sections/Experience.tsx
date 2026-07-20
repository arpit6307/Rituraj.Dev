"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { experienceData } from "@/data/portfolioData";

export const Experience = () => {
  const [filter, setFilter] = useState<"All" | "Work" | "Education">("All");

  const filteredData =
    filter === "All"
      ? experienceData
      : experienceData.filter((item) => item.type === filter);

  return (
    <section id="experience" className="relative py-16 sm:py-24 overflow-hidden">
      <GradientBlob variant="blue" size="lg" className="top-10 -left-20" />
      <GradientBlob variant="orange" size="md" className="bottom-10 -right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Career Journey"
          title="Work Experience &"
          gradientText="Educational Background"
          subtitle="My professional evolution, leadership roles, and academic achievements over the years."
        />

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {(["All", "Work", "Education"] as const).map((type) => (
            <button
              key={type}
              type="button"
              suppressHydrationWarning
              onClick={() => setFilter(type)}
              className={`px-4 py-2 sm:px-5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === type
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                  : "glass-panel text-slate-700 dark:text-slate-300 hover:text-orange-500"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Vertical Glass Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-purple-500 to-transparent -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {filteredData.map((item, index) => {
              const isEven = index % 2 === 0;
              const isWork = item.type === "Work";

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Node Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-orange-500 to-red-500 flex items-center justify-center text-white shadow-lg z-20 border-2 sm:border-4 border-slate-900 top-0 md:top-auto">
                    {isWork ? (
                      <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    ) : (
                      <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    )}
                  </div>

                  {/* Content Glass Box */}
                  <div className="w-full md:w-1/2 pl-10 sm:pl-12 md:pl-0 md:px-8">
                    <GlassCard hoverEffect className="p-5 sm:p-6 border-white/10">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold bg-orange-500/10 text-orange-600 dark:text-orange-300 border border-orange-500/20">
                          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          {item.period}
                        </span>

                        <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          {item.location}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-1">
                        {item.role}
                      </h3>

                      <h4 className="text-xs sm:text-sm font-semibold text-orange-500 dark:text-orange-400 mb-4">
                        {item.company}
                      </h4>

                      <ul className="space-y-2 mb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {item.description.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Skills badges */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/20 dark:border-white/10">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded-md glass-panel text-slate-700 dark:text-slate-300 border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
