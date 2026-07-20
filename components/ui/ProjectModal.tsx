"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Sparkles, FolderGit2, Search } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { projects } from "@/data/portfolioData";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  if (!isOpen) return null;

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filtered = projects.filter((p) => {
    const matchesCat = selectedCat === "All" || p.category === selectedCat;
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
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
          className="relative w-full max-w-5xl z-10 my-6"
        >
          <GlassCard className="p-6 border-orange-500/30 max-h-[85vh] overflow-y-auto flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/20 dark:border-white/10">
              <div className="flex items-center gap-2.5">
                <FolderGit2 className="w-5 h-5 text-orange-500" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Full Project Catalog ({projects.length})
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
                  placeholder="Search projects by title or description..."
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

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[55vh] pr-1">
              {filtered.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl glass-panel border border-white/10 overflow-hidden flex flex-col justify-between"
                >
                  <div
                    className={`h-36 w-full bg-gradient-to-tr ${project.accentGradient} p-4 flex flex-col justify-between relative`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full bg-white/20 text-white backdrop-blur-md">
                        {project.category}
                      </span>
                      {project.metrics && (
                        <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-black/40 text-amber-300 backdrop-blur-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          {project.metrics}
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white tracking-tight">{project.title}</h4>
                      <p className="text-[11px] text-white/90">{project.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                    <p className="text-xs text-slate-300 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-semibold rounded glass-panel text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 border-t border-white/10">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 text-center flex items-center justify-center gap-1.5"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
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
