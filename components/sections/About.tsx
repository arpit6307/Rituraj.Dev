"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Cpu, Layout, Award, Rocket, CheckCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { personalData } from "@/data/portfolioData";

export const About = () => {
  const highlights = [
    {
      icon: <Zap className="w-5 h-5 text-orange-500" />,
      title: "Performance First",
      description: "Sub-second load times, optimized bundles, and fluid 60fps animations.",
    },
    {
      icon: <Layout className="w-5 h-5 text-purple-500" />,
      title: "Glassmorphic Aesthetics",
      description: "Modern, visually striking frosted glass panels with dynamic light effects.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-500" />,
      title: "Scalable Architecture",
      description: "Clean TypeScript codebases, modular components, and reliable backend APIs.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: "Quality & Security",
      description: "Robust input validation, secure authentication, and cross-browser resilience.",
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Blobs */}
      <GradientBlob variant="purple" size="md" className="top-10 -left-10" />
      <GradientBlob variant="orange" size="sm" className="bottom-10 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="About Me"
          title="Crafting Digital Experiences with"
          gradientText="Precision & Passion"
          subtitle="A look into my journey, core principles, and the stats behind my craft."
        />

        {/* Bio Breakdown + Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Left Main Bio Glass Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <GlassCard className="h-full p-8 border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Rituraj Srivastava
                    </h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {personalData.role} • {personalData.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                  {personalData.bio.split("\n\n").map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Badges footer */}
              <div className="pt-6 mt-6 border-t border-slate-200/20 dark:border-white/10 flex flex-wrap gap-2">
                {["Next.js 14", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "System Architecture"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-300 border border-orange-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Stats Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalData.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlassCard
                  hoverEffect
                  className="h-full p-6 flex flex-col justify-center items-center text-center group border-white/10"
                >
                  <span className="text-4xl sm:text-5xl font-black text-gradient mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </span>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Principles / Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlassCard hoverEffect className="p-6 h-full border-white/10">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
