"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Lock } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { AdminModal } from "@/components/admin/AdminModal";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "glass-nav-hard py-3.5 shadow-2xl" : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="#hero"
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-md group-hover:scale-105 transition-transform duration-200">
                RS
              </div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">
                Rituraj<span className="text-orange-500">.dev</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/15 dark:border-white/15 shadow-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors ${
                      isActive
                        ? "text-orange-500 dark:text-orange-400 font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-orange-500/10 dark:bg-orange-500/25 -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Controls */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />

              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setIsAdminOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-md hover:shadow-orange-500/25 transition-all duration-200 active:scale-95"
              >
                <Lock className="w-4 h-4" />
                <span>Admin Login</span>
              </button>
            </div>

            {/* Mobile Button Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />

              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setIsAdminOpen(true)}
                className="p-2 rounded-xl glass-panel text-orange-500 border border-orange-500/30"
                aria-label="Admin Panel"
              >
                <Lock className="w-5 h-5" />
              </button>

              <button
                type="button"
                suppressHydrationWarning
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl glass-panel text-slate-800 dark:text-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Hard Frosted Blur Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden glass-menu-hard px-5 py-6 mt-3 border-b border-white/10 shadow-2xl absolute top-full left-0 right-0 z-50"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 rounded-xl glass-panel text-base font-bold text-slate-800 dark:text-slate-200 hover:text-orange-500 dark:hover:text-orange-400 flex items-center justify-between border border-white/10"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-orange-500 font-mono">→</span>
                  </Link>
                ))}

                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsAdminOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3.5 mt-2 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-orange-500 to-red-500 shadow-lg"
                >
                  <Lock className="w-5 h-5" />
                  <span>Admin Panel Login</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Admin Modal Popup */}
      <AdminModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </>
  );
};
