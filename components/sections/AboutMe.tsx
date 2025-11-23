"use client";

import { useI18n } from "@/lib/i18n";
import { AboutMe as AboutMeType } from "@/lib/types";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import CVDownloadButton from "@/components/ui/CVDownloadButton";

/**
 * AboutMe Component
 *
 * Expanded "About Me" section with:
 * - Professional biography
 * - Core values
 * - Key achievements
 * - 3D tilt effects on cards
 * - GSAP fade-in animations
 * - Call-to-action button
 */
export default function AboutMe() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);
  const about = t.about as AboutMeType;

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".about-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // 3D Tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden"
      id="about"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-azure-500/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-azure-500 to-accent bg-clip-text text-transparent">
            {about.title}
          </h2>
          <p className="text-xl text-muted-foreground">{about.subtitle}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-azure-500 to-accent mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Biography */}
        <div className="about-card mb-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-2xl bg-white/5 dark:bg-black/20 border border-white/20 shadow-xl"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              {about.bio}
            </p>
          </motion.div>
        </div>

        {/* Values & Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Core Values */}
          <div
            className="about-card"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="p-6 rounded-2xl bg-white/5 dark:bg-black/20 border border-white/20 shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-azure-500">💎</span>
                <span>Valores</span>
              </h3>
              <ul className="space-y-3">
                {about.values.map((value, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-foreground/80"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-azure-500 to-accent flex-shrink-0" />
                    <span>{value}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Achievements */}
          <div
            className="about-card"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="p-6 rounded-2xl bg-white/5 dark:bg-black/20 border border-white/20 shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-accent">🏆</span>
                <span>Logros Destacados</span>
              </h3>
              <ul className="space-y-3">
                {about.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <span className="text-accent text-lg flex-shrink-0 mt-1">
                      ✓
                    </span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <CVDownloadButton />
        </motion.div>
      </div>
    </section>
  );
}
