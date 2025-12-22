"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Github,
  MessageCircle,
  Bot,
  Moon,
  Sun,
} from "lucide-react";

export default function BioPage() {
  const [dark, setDark] = useState(true);

  const links = [
    {
      title: "Portfolio Photography",
      href: "https://hakimlesmanaporto.vercel.app",
      icon: Camera,
    },
    {
      title: "AI Chat App",
      href: "https://asistenchat.vercel.app",
      icon: Bot,
    },
    {
      title: "GitHub",
      href: "https://github.com/hakimindraa",
      icon: Github,
    },
    {
      title: "WhatsApp",
      href: "https://wa.me/6283137412551",
      icon: MessageCircle,
    },
  ];

  return (
    <main
      className={`${dark ? "bg-black text-white" : "bg-white text-black"
        } min-h-screen flex items-center justify-center px-4 transition-colors`}
    >
      {/* Theme Toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="absolute top-4 right-4 p-2 rounded-full active:scale-95 transition"
        aria-label="Toggle theme"
      >
        {dark ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      {/* Card */}
      <div
        className={`w-full max-w-sm rounded-[32px] p-6 space-y-6 text-center
        ${dark
            ? "bg-white/10 border border-white/20 backdrop-blur-xl"
            : "bg-black/5 border border-black/10 backdrop-blur-xl"
          } shadow-2xl`}
      >
        {/* Avatar */}
        <img
          src="/avatar.jpg"
          alt="Hakim Lesmana"
          className="w-24 h-24 mx-auto rounded-full object-cover"
        />

        {/* Name */}
        <div>
          <h1 className="text-xl font-semibold tracking-wide">
            Hakim Lesmana
          </h1>
          <p className="text-sm opacity-70">
            Photography • AI • Web
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 260 }}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl
                ${dark
                    ? "bg-white/10 border border-white/10 hover:bg-white hover:text-black"
                    : "bg-black/5 border border-black/10 hover:bg-black hover:text-white"
                  }
                transition-colors`}
              >
                {/* Icon */}
                <motion.span
                  whileHover={{ rotate: 6 }}
                  className="flex items-center justify-center w-6 h-6"
                >
                  <Icon size={20} />
                </motion.span>

                {/* Text */}
                <span className="text-sm font-medium">
                  {link.title}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <p className="text-xs opacity-40">
          © {new Date().getFullYear()} Hakim Lesmana
        </p>
      </div>
    </main>
  );
}
