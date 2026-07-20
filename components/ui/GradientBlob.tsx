"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  variant?: "orange" | "purple" | "blue" | "red";
  size?: "sm" | "md" | "lg" | "xl";
}

export const GradientBlob: React.FC<GradientBlobProps> = ({
  className,
  variant = "orange",
  size = "lg",
}) => {
  const variantStyles = {
    orange: "from-orange-500/30 to-red-500/20",
    purple: "from-purple-600/30 to-indigo-600/20",
    blue: "from-blue-500/30 to-cyan-500/20",
    red: "from-rose-500/30 to-orange-500/20",
  };

  const sizeStyles = {
    sm: "w-48 h-48 blur-2xl",
    md: "w-72 h-72 blur-3xl",
    lg: "w-96 h-96 blur-3xl",
    xl: "w-[500px] h-[500px] blur-[120px]",
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute rounded-full bg-gradient-to-tr pointer-events-none -z-10 animate-pulse-slow",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    />
  );
};
