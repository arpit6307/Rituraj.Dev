"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { personalData } from "@/data/portfolioData";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 glass-panel py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/20 dark:border-white/10">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
              RS
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white block">
                Rituraj Srivastava
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Full Stack Web Architect & UI Craftsman
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <Link href="#hero" className="hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-orange-500 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-orange-500 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-orange-500 transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="hover:text-orange-500 transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            suppressHydrationWarning
            onClick={scrollToTop}
            className="p-3 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-orange-500 hover:scale-110 transition-all flex items-center gap-2 text-xs font-semibold"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-medium text-slate-500 dark:text-slate-400">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} {personalData.name}. All rights reserved. Crafted with{" "}
            <Heart className="w-3.5 h-3.5 text-red-500 inline fill-red-500" /> & Next.js 14.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={personalData.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500 transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={personalData.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500 transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalData.socialLinks.twitter}
              target="_blank"
              rel="noreferrer"
              className="hover:text-orange-500 transition-colors flex items-center gap-1"
            >
              <TwitterIcon className="w-4 h-4" />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
