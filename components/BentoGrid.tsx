"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { Server, Container, Globe, Shield, Database, Code, Cloud } from "lucide-react";
import { MouseEvent } from "react";

const items = [
  {
    title: "Azure Expert",
    description: "Deep expertise in Azure services, from VM scale sets to AKS and Azure Functions.",
    icon: Cloud,
    className: "md:col-span-2",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Infrastructure as Code",
    description: "Terraform & Bicep master. Automating everything.",
    icon: Code,
    className: "md:col-span-1",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "Containerization",
    description: "Docker & Kubernetes (AKS) orchestration at scale.",
    icon: Container,
    className: "md:col-span-1",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Security First",
    description: "Implementing DevSecOps and Azure Sentinel policies.",
    icon: Shield,
    className: "md:col-span-2",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
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
      <h2 className="text-3xl font-bold mb-10 text-center">Technical Arsenal</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 group/grid">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 group/card",
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
            
            <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4 relative z-10", item.bg, item.color)}>
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white relative z-10 group-hover/card:text-azure-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-azure-100/70 text-sm leading-relaxed relative z-10">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
