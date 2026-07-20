"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  X,
  User,
  KeyRound,
  Mail,
  Trash2,
  RefreshCw,
  LogOut,
  CheckCircle,
  AlertCircle,
  Inbox,
  Clock,
  ShieldAlert,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

interface MessageItem {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Messages state
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(false);

  // Check existing session token
  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      setIsAuthenticated(true);
      fetchMessages();
    }
  }, [isOpen]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        localStorage.setItem("admin_token", data.token);
        fetchMessages();
      } else {
        setError(data.message || "Invalid credentials!");
      }
    } catch (err) {
      setError("An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setIsAuthenticated(false);
    setEmail("");
    setPassword("");
  };

  const fetchMessages = async () => {
    setLoadingMessages(true);
    try {
      const res = await fetch("/api/admin/messages");
      const data = await res.json();
      if (data.success) {
        setMessages(data.messages || []);
      }
    } catch (err) {
      console.error("Error fetching messages:", err);
    } finally {
      setLoadingMessages(false);
    }
  };

  const handleDeleteMessage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    try {
      const res = await fetch(`/api/admin/messages?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setMessages((prev) => prev.filter((m) => m.id !== id));
      }
    } catch (err) {
      console.error("Error deleting message:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl z-10 my-8"
        >
          <GlassCard className="p-6 sm:p-8 border-orange-500/30 max-h-[85vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/20 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {isAuthenticated ? "Admin Dashboard" : "Admin Panel Access"}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {isAuthenticated
                      ? "Manage user contact inquiries & site settings"
                      : "Enter administrator credentials to login"}
                  </p>
                </div>
              </div>

              <button
                type="button"
                suppressHydrationWarning
                onClick={onClose}
                className="p-2 rounded-xl glass-panel text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Login View */}
            {!isAuthenticated ? (
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Admin Email / User ID
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="riturajswaroop@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl glass-panel bg-white/40 dark:bg-white/5 border border-white/20 focus:border-orange-500 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <KeyRound className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl glass-panel bg-white/40 dark:bg-white/5 border border-white/20 focus:border-orange-500 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-medium flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  suppressHydrationWarning
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-md transition-all active:scale-98 disabled:opacity-50 text-sm"
                >
                  {loading ? "Authenticating..." : "Login to Admin Panel"}
                </button>
              </form>
            ) : (
              /* Authenticated Dashboard View */
              <div className="space-y-6">
                {/* Control bar */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Authenticated as Admin</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={fetchMessages}
                      disabled={loadingMessages}
                      className="p-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-orange-500 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${loadingMessages ? "animate-spin" : ""}`} />
                      <span className="hidden sm:inline">Refresh</span>
                    </button>

                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={handleLogout}
                      className="px-3 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>

                {/* Received Messages Section */}
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Inbox className="w-4 h-4 text-orange-500" />
                    <span>Contact Inquiries ({messages.length})</span>
                  </h4>

                  {messages.length === 0 ? (
                    <div className="p-8 text-center glass-panel rounded-2xl border-dashed border-white/20">
                      <Mail className="w-10 h-10 mx-auto text-slate-400 mb-2 opacity-50" />
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        No contact submissions received yet.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className="p-4 rounded-xl glass-panel border border-white/10 space-y-2 hover:border-orange-500/30 transition-all"
                        >
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/20 dark:border-white/10 pb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm text-slate-900 dark:text-white">
                                {msg.name}
                              </span>
                              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                ({msg.email})
                              </span>
                            </div>

                            <div className="flex items-center gap-3">
                              <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {new Date(msg.date).toLocaleDateString()} {new Date(msg.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>

                              <button
                                type="button"
                                suppressHydrationWarning
                                onClick={() => handleDeleteMessage(msg.id)}
                                className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-colors"
                                title="Delete submission"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          <div className="text-xs font-semibold text-orange-500 dark:text-orange-400">
                            Subject: {msg.subject}
                          </div>

                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-black/10 dark:bg-white/5 p-3 rounded-lg border border-white/5">
                            {msg.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
