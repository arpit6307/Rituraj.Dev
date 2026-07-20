"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/portfolioData";

export const Testimonials = () => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Recommendations"
          title="What Peers & Clients Say About"
          gradientText="My Work"
          subtitle="Direct feedback from team leads, founders, and engineering managers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <GlassCard hoverEffect className="p-8 h-full flex flex-col justify-between border-white/10">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-8 h-8 text-orange-500/40" />
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-base italic text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                    "{test.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-200/20 dark:border-white/10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500/30">
                    {/* Fallback avatar visual */}
                    <div className="w-full h-full bg-gradient-to-tr from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-lg">
                      {test.author.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {test.author}
                    </h4>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {test.role} • <span className="text-orange-500">{test.company}</span>
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
