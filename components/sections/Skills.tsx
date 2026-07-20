"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  FileCode2,
  Palette,
  Sparkles,
  Globe,
  Boxes,
  Server,
  Cpu,
  Workflow,
  Code,
  Radio,
  ShieldCheck,
  Database,
  HardDrive,
  Zap,
  Binary,
  Flame,
  GitBranch,
  Container,
  Cloud,
  Rocket,
  CheckCircle2,
  Terminal,
  ChevronDown,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillModal } from "@/components/ui/SkillModal";
import { skillCategories } from "@/data/portfolioData";

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-sky-500" />,
  Layers: <Layers className="w-5 h-5 text-orange-500" />,
  FileCode2: <FileCode2 className="w-5 h-5 text-blue-500" />,
  Palette: <Palette className="w-5 h-5 text-cyan-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-purple-400" />,
  Globe: <Globe className="w-5 h-5 text-amber-500" />,
  Boxes: <Boxes className="w-5 h-5 text-indigo-400" />,
  Server: <Server className="w-5 h-5 text-emerald-500" />,
  Cpu: <Cpu className="w-5 h-5 text-yellow-500" />,
  Workflow: <Workflow className="w-5 h-5 text-pink-500" />,
  Code: <Code className="w-5 h-5 text-blue-400" />,
  Radio: <Radio className="w-5 h-5 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-green-500" />,
  Database: <Database className="w-5 h-5 text-blue-600" />,
  HardDrive: <HardDrive className="w-5 h-5 text-emerald-600" />,
  Zap: <Zap className="w-5 h-5 text-red-500" />,
  Binary: <Binary className="w-5 h-5 text-violet-500" />,
  Flame: <Flame className="w-5 h-5 text-amber-600" />,
  GitBranch: <GitBranch className="w-5 h-5 text-orange-600" />,
  Container: <Container className="w-5 h-5 text-blue-500" />,
  Cloud: <Cloud className="w-5 h-5 text-amber-400" />,
  Rocket: <Rocket className="w-5 h-5 text-purple-500" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-teal-400" />,
  Terminal: <Terminal className="w-5 h-5 text-orange-500" />,
};

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["All", ...skillCategories.map((c) => c.category)];

  const allSkills = skillCategories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );

  const displayedSkills =
    selectedCategory === "All"
      ? allSkills
      : allSkills.filter((item) => item.category === selectedCategory);

  // Duplicate list for seamless infinite horizontal scrolling marquee loop
  const marqueeList = [...displayedSkills, ...displayedSkills];

  return (
    <section id="skills" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
        <SectionHeading
          badge="Technical Toolkit"
          title="Skills & Technologies I Use To Build"
          gradientText="Next-Gen Software"
          subtitle="A comprehensive overview of my technical proficiency across frontend, backend, databases, and DevOps."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-10 overflow-x-auto pb-3 sm:pb-0 scrollbar-none w-full max-w-full">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                suppressHydrationWarning
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap shrink-0 transition-all duration-200 ${
                  isSelected
                    ? "text-white shadow-lg"
                    : "glass-panel text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeSkillTab"
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

      {/* CONTINUOUS AUTOMATIC HORIZONTAL SCROLLING MARQUEE TRACK */}
      <div className="relative w-full overflow-hidden py-4 border-y border-white/5 bg-black/5 dark:bg-white/5">
        <div className="flex animate-marquee gap-6">
          {marqueeList.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="w-72 shrink-0 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <GlassCard hoverEffect className="p-4 border-white/10 group h-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl glass-panel group-hover:scale-110 transition-transform">
                      {iconMap[skill.icon] || <Code2 className="w-5 h-5 text-orange-500" />}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {skill.badge && (
                    <span className="px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-300 border border-orange-500/20">
                      {skill.badge}
                    </span>
                  )}
                </div>

                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                    <span className="text-slate-600 dark:text-slate-400">Proficiency</span>
                    <span className="text-orange-500 dark:text-orange-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden p-0.5">
                    <div
                      style={{ width: `${skill.level}%` }}
                      className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500"
                    />
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>

      {/* Button to open full SkillModal popup */}
      <div className="mt-10 text-center max-w-md mx-auto px-4">
        <button
          type="button"
          suppressHydrationWarning
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg hover:shadow-orange-500/30 transition-all active:scale-95 w-full sm:w-auto justify-center"
        >
          <span>View All Skills & Full Matrix</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>

      {/* Skill Modal Popup */}
      <SkillModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
