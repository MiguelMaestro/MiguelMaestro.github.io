"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ParticleBackground } from "@/components/ui/ParticleBackground";

const roles = ["Cloud Engineer", "Azure Expert", "DevOps Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-20 relative overflow-hidden">
      <ParticleBackground />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">
          Miguel Ángel <span className="text-gradient drop-shadow-lg">Maestro</span>
        </h1>
        <div className="h-8 md:h-12 mb-10">
          <span className="text-xl md:text-3xl text-azure-200 font-mono bg-black/20 px-4 py-2 rounded-lg border border-azure-500/20 backdrop-blur-sm">
            &gt; {text}
            <span className="animate-pulse text-azure-neon">_</span>
          </span>
        </div>
        <p className="max-w-2xl mx-auto text-azure-100/80 text-lg md:text-xl leading-relaxed font-light tracking-wide">
          Architecting scalable cloud solutions and automating infrastructure with precision.
          Turning complex requirements into elegant, high-availability systems on Azure.
        </p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex justify-center gap-4"
        >
           <button className="px-8 py-3 rounded-full bg-azure-neon text-white font-semibold hover:bg-azure-600 transition-colors shadow-[0_0_20px_rgba(0,127,255,0.5)]">
             View Projects
           </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
