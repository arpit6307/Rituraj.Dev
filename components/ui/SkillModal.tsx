"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, Code2, Sparkles, Layers, FileCode2, Palette, Globe, Boxes, Server, Cpu, Workflow, Code, Radio, ShieldCheck, Database, HardDrive, Zap, Binary, Flame, GitBranch, Container, Cloud, Rocket, CheckCircle2, Terminal } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { skillCategories } from "@/data/portfolioData";

interface SkillModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export const SkillModal: React.FC<SkillModalProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  if (!isOpen) return null;

  const categories = ["All", ...skillCategories.map((c) => c.category)];
  const allSkills = skillCategories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );

  const filtered = allSkills.filter((item) => {
    const matchesCat = selectedCat === "All" || item.category === selectedCat;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl z-10 my-6"
        >
          <GlassCard className="p-6 border-orange-500/30 max-h-[85vh] overflow-y-auto flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/20 dark:border-white/10">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  All Technical Skills & Stack
                </h3>
              </div>
              <button
                type="button"
                suppressHydrationWarning
                onClick={onClose}
                className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search & Category Filter */}
            <div className="space-y-3 mb-6">
              <div className="relative">
                <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search skills (e.g. Next.js, Docker, Python)..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-panel bg-white/40 dark:bg-white/5 border border-white/20 text-sm focus:outline-none focus:border-orange-500 text-slate-900 dark:text-white placeholder-slate-400"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setSelectedCat(cat)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-all ${
                      selectedCat === cat
                        ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                        : "glass-panel text-slate-300 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[50vh] pr-1">
              {filtered.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3.5 rounded-xl glass-panel border border-white/10 hover:border-orange-500/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg glass-panel">
                        {iconMap[skill.icon] || <Code2 className="w-4 h-4 text-orange-500" />}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] text-slate-400">{skill.category}</span>
                      </div>
                    </div>
                    {skill.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                        {skill.badge}
                      </span>
                    )}
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden mt-2">
                    <div
                      style={{ width: `${skill.level}%` }}
                      className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
