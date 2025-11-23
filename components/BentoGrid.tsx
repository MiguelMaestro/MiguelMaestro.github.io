"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Code,
  Cloud,
  Briefcase,
  GraduationCap,
  Quote,
  User,
  Wrench,
  Brain,
} from "lucide-react";
import { MouseEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { useScrollReveal } from "@/lib/gsap-hooks";

export default function BentoGrid() {
  const { t } = useI18n();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridRef = useScrollReveal({ y: 30, stagger: 0.15, duration: 0.8 });

  const items = [
    {
      title: `👋 ${t.about.title}`,
      description: t.about.subtitle,
      icon: User,
      className: "md:col-span-2 md:row-span-1",
      color: "text-azure-500 dark:text-azure-neon",
      bg: "bg-gradient-to-br from-azure-500/10 dark:from-azure-neon/10 to-purple-500/10",
    },
    {
      title: `💼 ${t.experience.title}`,
      description: (
        <ul className="list-none space-y-1.5 text-xs">
          {t.experience.jobs.map((job, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-azure-500 dark:text-azure-neon">▹</span>
              <span>
                <strong>
                  {job.role} @ {job.company}
                </strong>{" "}
                ({job.period}) {idx === 0 ? "🚀" : ""}
              </span>
            </li>
          ))}
        </ul>
      ),
      icon: Briefcase,
      className: "md:col-span-2 md:row-span-2",
      color: "text-blue-500 dark:text-blue-400",
      bg: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
    },
    {
      title: `🎓 ${t.education.title}`,
      description: (
        <div className="space-y-2 text-xs">
          {t.education.degrees.map((degree, idx) => (
            <div
              key={idx}
              className={cn(
                "p-2 rounded-lg border",
                idx === 0
                  ? "bg-purple-500/10 border-purple-500/20 dark:border-purple-400/20"
                  : "bg-azure-500/10 border-azure-500/20 dark:border-azure-400/20"
              )}
            >
              <p
                className={cn(
                  "font-bold",
                  idx === 0
                    ? "text-purple-600 dark:text-purple-300"
                    : "text-azure-600 dark:text-azure-300"
                )}
              >
                {degree.title} {degree.icon}
              </p>
              <p className="text-azure-700/70 dark:text-azure-100/70">
                {degree.institution} ({degree.year})
              </p>
            </div>
          ))}
        </div>
      ),
      icon: GraduationCap,
      className: "md:col-span-1 md:row-span-2",
      color: "text-purple-500 dark:text-purple-400",
      bg: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
    },
    {
      title: "🏅 Certificaciones",
      description: (
        <div className="space-y-2 text-xs">
          {t.education.certifications?.map((cert, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 p-2 rounded-lg bg-gradient-to-r from-azure-500/10 to-accent/10 border border-azure-500/20"
            >
              <span className="text-azure-500 text-lg">✓</span>
              <div>
                <p className="font-bold text-azure-600 dark:text-azure-300">
                  {cert.name}
                </p>
                <p className="text-azure-700/70 dark:text-azure-100/70">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
      icon: Brain,
      className: "md:col-span-2",
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
    },
    {
      title: t.skills.categories.cloud.title,
      description: t.skills.categories.cloud.description,
      icon: Cloud,
      className: "md:col-span-1",
      color: "text-cyan-600 dark:text-cyan-400",
      bg: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10",
    },
    {
      title: t.skills.categories.devops.title,
      description: t.skills.categories.devops.description,
      icon: Wrench,
      className: "md:col-span-1",
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
    },
    {
      title: `💬 ${t.testimonials.title}`,
      description: (
        <blockquote className="italic text-xs border-l-4 border-azure-500/50 dark:border-azure-neon/50 pl-4 bg-gradient-to-r from-azure-500/5 dark:from-azure-neon/5 to-transparent py-2 rounded-r-lg">
          "{t.testimonials.list[0].text}" ⭐⭐⭐⭐⭐
          <footer className="not-italic font-bold mt-1 text-azure-600 dark:text-azure-neon">
            — {t.testimonials.list[0].name}, {t.testimonials.list[0].role} @ {t.testimonials.list[0].company}
          </footer>
        </blockquote>
      ),
      icon: Quote,
      className: "md:col-span-3",
      color: "text-yellow-600 dark:text-yellow-400",
      bg: "bg-gradient-to-br from-yellow-500/10 to-orange-500/10",
    },
  ];

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      className="max-w-6xl mx-auto px-4 py-20"
      onMouseMove={handleMouseMove}
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-azure-900 dark:text-white">
        Professional Hub
      </h2>
      <div
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-4 group/grid"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            data-scroll-reveal
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
              "relative overflow-hidden rounded-2xl border border-azure-200/30 dark:border-white/10 bg-white/30 dark:bg-white/5 p-6 transition-colors hover:border-azure-400/50 dark:hover:border-white/20 group/card flex flex-col justify-between cursor-pointer",
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

            <div className="space-y-0">
              <div className="flex items-center gap-2 mb-1">
                <div
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center relative z-10",
                    item.bg,
                    item.color
                  )}
                >
                  <item.icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-azure-950 dark:text-white relative z-10 group-hover/card:text-azure-700 dark:group-hover/card:text-azure-300 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>

            <div className="text-gray-900 dark:text-azure-100/70 text-sm leading-snug relative z-10">
              {item.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
