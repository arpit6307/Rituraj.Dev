"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = false,
  glow = false,
  ...props
}) => {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl glass-panel p-6 overflow-hidden",
        hoverEffect && "glass-panel-hover cursor-pointer",
        glow && "before:absolute before:-inset-px before:bg-gradient-to-r before:from-orange-500/20 before:to-purple-500/20 before:rounded-2xl before:-z-10",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
