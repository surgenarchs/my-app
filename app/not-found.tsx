"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Star } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#060A1F] text-white text-center p-6 relative overflow-hidden">
      {/* Glowing Neural Structure Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7A00FF33_0%,#060A1F_80%)] blur-[80px] opacity-50 pointer-events-none"></div>

      {/* Animated Brain Throwing Glowing Stars */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-6"
      >
        <Brain size={100} className="text-[#9C27B0] drop-shadow-neon animate-spin-slow" />

        {/* Animated Stars */}
        <motion.div
          initial={{ x: -10, y: 10, opacity: 0 }}
          animate={{ x: [0, -40, 40, 0], y: [0, -20, 10, 0], opacity: [0, 1, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute top-0 left-0"
        >
          <Star size={40} className="text-[#9C27B0] glow-star" />
        </motion.div>
        <motion.div
          initial={{ x: 10, y: -10, opacity: 0 }}
          animate={{ x: [0, 40, -40, 0], y: [0, -10, 20, 0], opacity: [0, 1, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-0 right-0"
        >
          <Star size={40} className="text-[#9C27B0] glow-star" />
        </motion.div>
      </motion.div>

      {/* Animated Text */}
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-bold text-[#D8B9FF] mb-3 drop-shadow-neon"
      >
        SYSTEM ERROR: 404
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="text-lg text-[#B18AFF] mb-6"
      >
        This neural pathway is empty... nothing to retrieve. 🧠💫
      </motion.p>

      {/* Return Home Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
      >
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-[#9C27B0] text-black font-semibold rounded-lg shadow-md hover:bg-[#D8B9FF] hover:text-black transition duration-300 drop-shadow-neon"
        >
          Return to Mainframe
        </Link>
      </motion.div>
    </div>
  );
}
