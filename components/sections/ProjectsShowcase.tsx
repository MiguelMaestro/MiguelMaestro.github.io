"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { ExternalLink, Github, FileText } from "lucide-react";
import { useTilt3D } from "@/lib/gsap-hooks";
import { Project } from "@/lib/types";
import Image from "next/image";

export default function ProjectsShowcase() {
  const { t } = useI18n();
  const projects = t.projects.list as Project[];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-azure-500 to-accent bg-clip-text text-transparent">
          {t.projects.title}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t.projects.subtitle}
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-azure-500 to-accent mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const tiltRef = useTilt3D();

  return (
    <motion.div
      ref={tiltRef as any}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-2xl overflow-hidden backdrop-blur-sm bg-white/10 dark:bg-black/20 border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-azure-500/20 transition-all duration-300"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Thumbnail Image */}
      {project.thumbnail && (
        <div className="relative w-full h-48 bg-gradient-to-br from-azure-500/20 to-accent/20 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
            💻
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-azure-500 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Stack Tags */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-foreground/60 mb-2">
            STACK
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, techIdx) => (
              <span
                key={techIdx}
                className="px-3 py-1 rounded-full text-xs font-medium bg-azure-500/20 text-azure-500 border border-azure-500/30 hover:bg-azure-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-foreground/60 mb-2">
            DESAFÍOS
          </h4>
          <ul className="space-y-1">
            {project.challenges.slice(0, 2).map((challenge, chIdx) => (
              <li
                key={chIdx}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <span className="text-accent mt-0.5">▸</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-3 border-t border-white/10">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-azure-500 hover:text-accent transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-azure-500 hover:text-accent transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Demo</span>
            </a>
          )}
          {project.links.docs && (
            <a
              href={project.links.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-azure-500 hover:text-accent transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Docs</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
