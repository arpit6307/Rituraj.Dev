"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  gradientText?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  gradientText,
  subtitle,
  center = true,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12 max-w-3xl", center && "mx-auto text-center", className)}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full glass-panel border border-orange-500/30 text-orange-500 dark:text-orange-400 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
        {title}{" "}
        {gradientText && <span className="text-gradient">{gradientText}</span>}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
