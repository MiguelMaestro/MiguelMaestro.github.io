"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-10 blur-[100px]" />
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-azure-500 to-transparent blur-3xl transform rotate-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-azure-neon to-transparent blur-3xl transform -rotate-45" />
      </motion.div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </div>
  );
};
