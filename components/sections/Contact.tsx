"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientBlob } from "@/components/ui/GradientBlob";
import { personalData } from "@/data/portfolioData";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setStatus("success");
        setStatusMessage(resData.message || "Message sent successfully!");
        reset();
      } else {
        setStatus("error");
        setStatusMessage(resData.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Ambient Lighting */}
      <GradientBlob variant="orange" size="xl" className="-bottom-20 -right-20" />
      <GradientBlob variant="purple" size="lg" className="top-10 -left-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Build Something"
          gradientText="Extraordinary Together"
          subtitle="Have a project in mind, a job opportunity, or just want to connect? Drop me a message!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Direct Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <GlassCard className="p-6 sm:p-8 border-white/10 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Feel free to reach out via the form below or connect directly on LinkedIn.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-xl glass-panel text-slate-800 dark:text-slate-200">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-purple-500/10 text-purple-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Location</div>
                    <div className="text-xs sm:text-sm font-semibold">{personalData.location}</div>
                  </div>
                </div>

                <a
                  href={`tel:${personalData.phone}`}
                  className="flex items-center gap-4 p-3.5 sm:p-4 rounded-xl glass-panel text-slate-800 dark:text-slate-200 hover:text-orange-500 hover:border-orange-500/30 transition-all group"
                >
                  <div className="p-2.5 sm:p-3 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Phone</div>
                    <div className="text-xs sm:text-sm font-semibold">{personalData.phone}</div>
                  </div>
                </a>
              </div>

              {/* Social links - LinkedIn Only */}
              <div className="pt-6 border-t border-slate-200/20 dark:border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 block">
                  Connect on LinkedIn:
                </span>
                <a
                  href={personalData.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-3 rounded-xl glass-panel text-slate-800 dark:text-slate-200 hover:text-orange-500 hover:border-orange-500/30 transition-all w-full font-semibold text-sm"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <span>Rituraj Srivastava on LinkedIn</span>
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Glass Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-6 sm:p-8 border-white/10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      suppressHydrationWarning
                      placeholder="e.g. John Doe"
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl glass-panel bg-white/40 dark:bg-white/5 border ${
                        errors.name ? "border-red-500" : "border-white/20 focus:border-orange-500"
                      } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all text-sm`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      suppressHydrationWarning
                      placeholder="e.g. john@example.com"
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-xl glass-panel bg-white/40 dark:bg-white/5 border ${
                        errors.email ? "border-red-500" : "border-white/20 focus:border-orange-500"
                      } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all text-sm`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    suppressHydrationWarning
                    placeholder="Project Inquiry / Job Opportunity"
                    {...register("subject")}
                    className={`w-full px-4 py-3 rounded-xl glass-panel bg-white/40 dark:bg-white/5 border ${
                      errors.subject ? "border-red-500" : "border-white/20 focus:border-orange-500"
                    } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all text-sm`}
                  />
                  {errors.subject && (
                    <span className="text-xs text-red-500 mt-1 block">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    suppressHydrationWarning
                    placeholder="Tell me about your project or inquiry..."
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-xl glass-panel bg-white/40 dark:bg-white/5 border ${
                      errors.message ? "border-red-500" : "border-white/20 focus:border-orange-500"
                    } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-all text-sm resize-none`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 mt-1 block">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Feedback Toast Banner */}
                {status === "success" && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-sm font-medium flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  suppressHydrationWarning
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-orange-500/30 transition-all duration-200 active:scale-98 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
