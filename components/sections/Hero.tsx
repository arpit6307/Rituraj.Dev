"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  Terminal,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { personalData } from "@/data/portfolioData";

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const fullText = personalData.typewriterRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalData.typewriterRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Glowing Blobs */}
      <GradientBlob variant="orange" size="xl" className="-top-20 -left-20" />
      <GradientBlob variant="purple" size="lg" className="top-1/3 -right-20" />
      <GradientBlob variant="blue" size="md" className="-bottom-20 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium w-fit mb-4 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="truncate max-w-[260px] sm:max-w-none">{personalData.availability}</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-3 sm:mb-4">
              Hi, I'm{" "}
              <span className="text-gradient hover:scale-105 transition-transform inline-block">
                {personalData.name}
              </span>
            </h1>

            {/* Animated Typewriter Subheading */}
            <div className="min-h-[2.5rem] sm:min-h-[3rem] flex items-center mb-4 sm:mb-6">
              <span className="text-lg sm:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-300 leading-snug">
                I build{" "}
                <span className="text-orange-500 dark:text-orange-400 underline decoration-orange-500/40 decoration-wavy underline-offset-4">
                  {currentText}
                </span>
                <span className="animate-pulse text-orange-500 font-light">|</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl mb-6 sm:mb-8">
              {personalData.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-orange-500/30 transition-all duration-200 active:scale-95 group text-center"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-800 dark:text-white glass-panel hover:bg-white/20 dark:hover:bg-white/10 border border-white/20 transition-all duration-200 active:scale-95 text-center"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <a
                  href={personalData.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:scale-110 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalData.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:scale-110 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalData.socialLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:scale-110 transition-all"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalData.socialLinks.email}
                  className="p-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:scale-110 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Card Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0"
          >
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-red-500/20 to-purple-600/20 rounded-3xl blur-2xl -z-10 animate-pulse-slow" />

            {/* Central Glass Frame Container */}
            <GlassCard className="w-full max-w-md p-5 sm:p-8 relative border-orange-500/20 shadow-2xl">
              {/* Code Editor Header simulation */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b border-slate-200/20 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>rituraj.config.ts</span>
                </div>
              </div>

              {/* Simulated Developer Profile Snippet */}
              <div className="space-y-3 font-mono text-xs sm:text-sm">
                <div>
                  <span className="text-purple-500 dark:text-purple-400 font-bold">const</span>{" "}
                  <span className="text-orange-500 dark:text-orange-300 font-semibold">developer</span> = &#123;
                </div>
                <div className="pl-3 sm:pl-4 space-y-1.5 text-slate-700 dark:text-slate-300">
                  <div>
                    <span className="text-slate-500">name:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-300 font-semibold">"{personalData.name}"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500">status:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-300 font-semibold">"Ready to Code 🚀"</span>,
                  </div>
                  <div>
                    <span className="text-slate-500">skills:</span> [
                    <span className="text-orange-500 font-semibold">"Next.js"</span>,{" "}
                    <span className="text-orange-500 font-semibold">"React"</span>,{" "}
                    <span className="text-orange-500 font-semibold">"TypeScript"</span>],
                  </div>
                  <div>
                    <span className="text-slate-500">passion:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-300 font-semibold">"Glassmorphism"</span>,
                  </div>
                </div>
                <div>&#125;;</div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 px-3 py-1.5 rounded-xl glass-panel border border-orange-500/40 text-slate-800 dark:text-white text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 shadow-xl"
              >
                <Code2 className="w-3.5 h-3.5 text-orange-500" />
                <span>Next.js 15</span>
              </motion.div>

              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 px-3 py-1.5 rounded-xl glass-panel border border-emerald-500/40 text-slate-800 dark:text-white text-[11px] sm:text-xs font-semibold flex items-center gap-1.5 shadow-xl"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>High Speed</span>
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
