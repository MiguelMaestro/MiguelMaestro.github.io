"use client";

import { useI18n } from "@/lib/i18n";
import { Experience } from "@/lib/types";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * ExperienceTimeline Component
 *
 * Displays professional experience in a vertical timeline with:
 * - GSAP ScrollTrigger animations
 * - Glassmorphism cards
 * - Technology badges
 * - Responsive design (horizontal on mobile, vertical on desktop)
 */
export default function ExperienceTimeline() {
  const { t } = useI18n();
  const timelineRef = useRef<HTMLDivElement>(null);
  const experiences: Experience[] = t.experience.jobs as Experience[];

  useEffect(() => {
    if (!timelineRef.current) return;

    const cards = timelineRef.current.querySelectorAll(".experience-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative py-20 px-4 overflow-hidden" id="experience">
      {/* Section Header */}
      <div className="container mx-auto max-w-6xl mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-azure-500 to-accent bg-clip-text text-transparent">
          {t.experience.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-azure-500 to-accent mx-auto rounded-full" />
      </div>

      {/* Timeline Container */}
      <div ref={timelineRef} className="container mx-auto max-w-5xl relative">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-azure-500/20 via-accent/20 to-transparent" />

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-card relative flex flex-col md:flex-row items-center gap-6 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Logo Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-azure-500 to-accent flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-azure-500/50 hover:scale-110 transition-transform duration-300">
                  {exp.logo}
                </div>
              </div>

              {/* Card Content */}
              <div
                className={`flex-1 group hover:scale-[1.02] transition-all duration-300 ${
                  index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="relative p-6 rounded-2xl backdrop-blur-sm bg-white/10 dark:bg-black/20 border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-azure-500/20 transition-all duration-300">
                  {/* Period Badge */}
                  <div
                    className={`inline-block px-4 py-1 rounded-full bg-azure-500/20 text-azure-500 text-sm font-semibold mb-3`}
                  >
                    {exp.period}
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-2xl font-bold mb-1 text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-azure-500 font-semibold mb-3">
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div
                    className={`flex flex-wrap gap-2 mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium border border-accent/30 hover:bg-accent/30 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className={`space-y-2 text-sm text-foreground/80`}>
                    {exp.highlights.map((highlight, hlIndex) => (
                      <li
                        key={hlIndex}
                        className={`flex items-start gap-2 ${
                          index % 2 === 0
                            ? "md:flex-row-reverse md:text-right"
                            : ""
                        }`}
                      >
                        <span className="text-accent text-lg flex-shrink-0">
                          ▸
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
