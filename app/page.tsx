"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkipLink from "@/components/SkipLink";
import { useI18n } from "@/lib/i18n";

// Lazy load heavy components
const BentoGrid = dynamic(() => import("@/components/BentoGrid"), {
  loading: () => <div className="h-[800px] animate-pulse bg-azure-100/20" />,
});

const ProjectsShowcase = dynamic(
  () => import("@/components/sections/ProjectsShowcase"),
  {
    loading: () => <div className="h-[600px] animate-pulse bg-azure-100/20" />,
  }
);

const AISkillsRadar = dynamic(
  () => import("@/components/sections/AISkillsRadar"),
  {
    loading: () => <div className="h-[500px] animate-pulse bg-azure-100/20" />,
  }
);

const CursorTrail = dynamic(
  () => import("@/components/ui/CursorTrail").then((mod) => mod.CursorTrail),
  {
    ssr: false,
  }
);

const EnhancedFooter = dynamic(() => import("@/components/EnhancedFooter"));

export default function Home() {
  return (
    <>
      <SkipLink />
      <main
        id="main-content"
        className="relative min-h-screen selection:bg-azure-500/30"
      >
        <CursorTrail />
        <Navbar />
        <Hero />
        <BentoGrid />
        <ProjectsShowcase />
        <AISkillsRadar />
      </main>
      <EnhancedFooter />
    </>
  );
}
