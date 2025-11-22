"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { Server, Container, Globe, Shield, Database, Code, Cloud, Briefcase, GraduationCap, Quote, User } from "lucide-react";
import { MouseEvent } from "react";

const items = [
  {
    title: "👋 About Me",
    description: "Azure Administrator with 2 years of experience optimizing cloud infrastructures. Focused on scalability, security, and DevOps automation. Passionate about AI and continuous learning! 🎓",
    icon: User,
    className: "md:col-span-2 md:row-span-1",
    color: "text-azure-neon",
    bg: "bg-gradient-to-br from-azure-neon/10 to-purple-500/10",
  },
  {
    title: "💼 Experience",
    description: (
      <ul className="list-none space-y-2 text-xs mt-2">
        <li className="flex items-start gap-2">
          <span className="text-azure-neon">▹</span>
          <span><strong>Cloud Engineer @ Kyndryl</strong> (Dec 2024 - Present) 🚀</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-azure-neon">▹</span>
          <span><strong>Azure Platform Engineer @ Naturgy</strong> (Nov 2022 - Apr 2025)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-azure-neon">▹</span>
          <span><strong>Azure Specialist @ Experis</strong> (Apr 2022 - Jun 2022)</span>
        </li>
      </ul>
    ),
    icon: Briefcase,
    className: "md:col-span-2 md:row-span-2",
    color: "text-blue-400",
    bg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "🎓 Education",
    description: (
      <div className="space-y-3 text-xs mt-2">
        <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
          <p className="font-bold text-purple-300">Master in Applied AI 🤖</p>
          <p className="text-azure-100/70">Universidad Isabel I (2025)</p>
        </div>
        <div className="p-2 rounded-lg bg-azure-500/10 border border-azure-500/20">
          <p className="font-bold text-azure-300">Telecom & IT Systems</p>
          <p className="text-azure-100/70">IES Pacífico (2018-2020)</p>
        </div>
      </div>
    ),
    icon: GraduationCap,
    className: "md:col-span-1 md:row-span-2",
    color: "text-purple-400",
    bg: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
  },
  {
    title: "☁️ Azure Expert",
    description: "Deep expertise in Azure services, VM scale sets, AKS, and Azure Functions. Architecting for the cloud! ⚡",
    icon: Cloud,
    className: "md:col-span-1",
    color: "text-cyan-400",
    bg: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10",
  },
  {
    title: "🔧 DevOps & IaC",
    description: "Mastery in Terraform, Bicep, Docker, and Kubernetes orchestration. Automation is the future! 🚀",
    icon: Code,
    className: "md:col-span-1",
    color: "text-emerald-400",
    bg: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "💬 Testimonial",
    description: (
      <blockquote className="italic text-xs mt-2 border-l-4 border-azure-neon/50 pl-4 bg-gradient-to-r from-azure-neon/5 to-transparent py-2 rounded-r-lg">
        "Miguel is an exceptional colleague, proactive and committed... An expert in Azure technologies with transversal vision and great analytical capacity." ⭐⭐⭐⭐⭐
        <footer className="not-italic font-bold mt-2 text-azure-neon">— Jose Manuel Sieira</footer>
      </blockquote>
    ),
    icon: Quote,
    className: "md:col-span-3",
    color: "text-yellow-400",
    bg: "bg-gradient-to-br from-yellow-500/10 to-orange-500/10",
  },
];

export default function BentoGrid() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-20" onMouseMove={handleMouseMove}>
      <h2 className="text-3xl font-bold mb-10 text-center">Professional Hub</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-4 group/grid">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 group/card flex flex-col justify-between cursor-pointer",
              item.className
            )}
          >
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/card:opacity-100"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    650px circle at ${mouseX}px ${mouseY}px,
                    rgba(14, 165, 233, 0.15),
                    transparent 80%
                  )
                `,
              }}
            />
            
            <div>
              <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-4 relative z-10", item.bg, item.color)}>
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white relative z-10 group-hover/card:text-azure-300 transition-colors">
                {item.title}
              </h3>
            </div>
            
            <div className="text-azure-100/70 text-sm leading-relaxed relative z-10">
              {item.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
