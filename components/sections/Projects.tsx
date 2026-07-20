"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles, FolderGit2, ChevronDown } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { projects } from "@/data/portfolioData";

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterCategories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Duplicate list for infinite horizontal marquee loop
  const marqueeProjects = [...filteredProjects, ...filteredProjects];

  return (
    <section id="projects" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        <SectionHeading
          badge="Featured Works"
          title="Engineered for Performance &"
          gradientText="Delightful UX"
          subtitle="Explore some of my recent full-stack applications, open-source tools, and client products."
        />

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-10 overflow-x-auto pb-3 sm:pb-0 scrollbar-none w-full max-w-full">
          {filterCategories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                suppressHydrationWarning
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all duration-200 ${
                  isSelected
                    ? "text-white shadow-lg"
                    : "glass-panel text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* CONTINUOUS AUTOMATIC HORIZONTAL SCROLLING MARQUEE TRACK FOR PROJECTS */}
      <div className="relative w-full overflow-hidden py-4 border-y border-white/5 bg-black/5 dark:bg-white/5">
        <div className="flex animate-marquee-slow gap-8">
          {marqueeProjects.map((project, idx) => (
            <div
              key={`${project.id}-${idx}`}
              className="w-80 sm:w-96 shrink-0"
            >
              <GlassCard
                hoverEffect
                className="h-full p-0 flex flex-col justify-between border-white/10 group overflow-hidden"
              >
                {/* Top Gradient Banner */}
                <div
                  className={`h-44 sm:h-48 w-full bg-gradient-to-tr ${project.accentGradient} relative p-5 sm:p-6 flex flex-col justify-between overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30">
                      {project.category}
                    </span>
                    {project.metrics && (
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-black/40 text-amber-300 backdrop-blur-md border border-amber-300/30 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-medium text-white/90 drop-shadow">
                      {project.subtitle}
                    </p>
                  </div>

                  <FolderGit2 className="absolute -bottom-4 -right-4 w-28 h-28 sm:w-32 sm:h-32 text-white/10 pointer-events-none group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-semibold rounded-md glass-panel text-slate-700 dark:text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-200/20 dark:border-white/10">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-md transition-all active:scale-95"
                    >
                      <span>Live Project Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>

      {/* Button to open full ProjectModal popup */}
      <div className="mt-10 text-center max-w-md mx-auto px-4">
        <button
          type="button"
          suppressHydrationWarning
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg hover:shadow-orange-500/30 transition-all active:scale-95 w-full sm:w-auto justify-center"
        >
          <span>Explore All Projects & Catalog</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>

      {/* Project Modal Popup */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
