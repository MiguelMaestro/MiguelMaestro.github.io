"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkipLink from "@/components/SkipLink";

// Lazy load heavy components for better performance
const AboutMe = dynamic(() => import("@/components/sections/AboutMe"), {
  loading: () => (
    <div className="h-[600px] animate-pulse bg-azure-100/20 dark:bg-white/5" />
  ),
});

const ExperienceTimeline = dynamic(
  () => import("@/components/sections/ExperienceTimeline"),
  {
    loading: () => (
      <div className="h-[800px] animate-pulse bg-azure-100/20 dark:bg-white/5" />
    ),
  }
);

const AISkillsRadar = dynamic(
  () => import("@/components/sections/AISkillsRadar"),
  {
    loading: () => (
      <div className="h-[500px] animate-pulse bg-azure-100/20 dark:bg-white/5" />
    ),
  }
);

const ProjectsShowcase = dynamic(
  () => import("@/components/sections/ProjectsShowcase"),
  {
    loading: () => (
      <div className="h-[600px] animate-pulse bg-azure-100/20 dark:bg-white/5" />
    ),
  }
);

const BentoGrid = dynamic(() => import("@/components/BentoGrid"), {
  loading: () => (
    <div className="h-[800px] animate-pulse bg-azure-100/20 dark:bg-white/5" />
  ),
});

const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  {
    loading: () => (
      <div className="h-[500px] animate-pulse bg-azure-100/20 dark:bg-white/5" />
    ),
  }
);

const CursorTrail = dynamic(
  () => import("@/components/ui/CursorTrail").then((mod) => mod.CursorTrail),
  {
    ssr: false,
  }
);

const EnhancedFooter = dynamic(() => import("@/components/EnhancedFooter"));

/**
 * Home Page - Professional CV Portfolio
 *
 * Section Order:
 * 1. Hero - Introduction with CTA
 * 2. AboutMe - Biography, values, achievements
 * 3. ExperienceTimeline - Professional experience timeline
 * 4. AISkillsRadar - Technical skills visualization
 * 5. ProjectsShowcase - Featured projects
 * 6. BentoGrid - Education, certifications, skills grid
 * 7. Testimonials - Recommendations carousel
 * 8. Footer - Contact and social links
 */
export default function Home() {
  return (
    <>
      <SkipLink />
      <main
        id="main-content"
        className="relative min-h-screen selection:bg-azure-500/30"
      >
        {/* <CursorTrail /> */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <AboutMe />

        {/* Experience Timeline */}
        <ExperienceTimeline />

        {/* Skills Radar */}
        <AISkillsRadar />

        {/* Projects Showcase */}
        <ProjectsShowcase />

        {/* Education & Certifications Grid */}
        <BentoGrid />

        {/* Testimonials Carousel */}
        <Testimonials />
      </main>

      {/* Footer */}
      <EnhancedFooter />
    </>
  );
}
