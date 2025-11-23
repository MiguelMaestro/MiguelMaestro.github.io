"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useTheme } from "next-themes";

export default function AISkillsRadar() {
  const { t, locale } = useI18n();
  const { theme } = useTheme();

  const skillsData = [
    {
      skill: "Azure Cloud",
      level: 95,
      fullMark: 100,
      category: "cloud" as const,
    },
    {
      skill: "Terraform/IaC",
      level: 90,
      fullMark: 100,
      category: "devops" as const,
    },
    {
      skill: "PowerShell",
      level: 88,
      fullMark: 100,
      category: "programming" as const,
    },
    {
      skill: "CI/CD Pipelines",
      level: 85,
      fullMark: 100,
      category: "devops" as const,
    },
    {
      skill: "Kubernetes",
      level: 75,
      fullMark: 100,
      category: "devops" as const,
    },
    {
      skill: "SQL Server",
      level: 80,
      fullMark: 100,
      category: "programming" as const,
    },
    {
      skill: "Azure AI/ML",
      level: 70,
      fullMark: 100,
      category: "ai" as const,
    },
    {
      skill: "Problem Solving",
      level: 92,
      fullMark: 100,
      category: "soft" as const,
    },
    {
      skill: "Team Leadership",
      level: 85,
      fullMark: 100,
      category: "soft" as const,
    },
  ];

  const isDark = theme === "dark" || theme === "system";

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 dark:bg-gray-900/95 border border-azure-300/50 dark:border-azure-500/50 rounded-lg px-3 py-2 shadow-lg">
          <p className="text-sm font-semibold text-azure-900 dark:text-azure-100">
            {payload[0].payload.skill}
          </p>
          <p className="text-xs text-azure-700 dark:text-azure-300">
            {locale === "es" ? "Nivel" : "Level"}: {payload[0].value}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 py-20"
    >
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-azure-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t.skills.title}
        </motion.h2>
        <motion.p
          className="text-azure-700 dark:text-azure-200 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          {locale === "es"
            ? "Visualización interactiva de mi experiencia técnica"
            : "Interactive visualization of my technical expertise"}
        </motion.p>
      </div>

      <motion.div
        className="glass-panel rounded-3xl p-8 md:p-12 max-w-3xl mx-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={skillsData}>
            <PolarGrid
              stroke={
                isDark ? "rgba(14, 165, 233, 0.2)" : "rgba(14, 165, 233, 0.3)"
              }
              strokeWidth={1}
            />
            <PolarAngleAxis
              dataKey="skill"
              tick={{
                fill: isDark ? "#bae6fd" : "#0c4a6e",
                fontSize: 12,
                fontWeight: 600,
              }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{
                fill: isDark ? "#7dd3fc" : "#075985",
                fontSize: 10,
              }}
            />
            <Radar
              name="Skills"
              dataKey="level"
              stroke={isDark ? "#00e0ff" : "#0ea5e9"}
              fill={isDark ? "#0ea5e9" : "#38bdf8"}
              fillOpacity={0.6}
              strokeWidth={2}
              animationDuration={1500}
              animationBegin={0}
            />
            <Tooltip content={<CustomTooltip />} />
          </RadarChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs">
          {skillsData.map((skill, idx) => (
            <motion.div
              key={skill.skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-azure-100/50 dark:bg-azure-900/30 border border-azure-300/30 dark:border-azure-500/30"
            >
              <div className="w-2 h-2 rounded-full bg-azure-500 dark:bg-azure-neon animate-pulse" />
              <span className="font-medium text-azure-800 dark:text-azure-200">
                {skill.skill}
              </span>
              <span className="text-azure-600 dark:text-azure-400">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-azure-500/10 border border-purple-500/30 dark:border-azure-neon/30 text-sm font-medium text-purple-700 dark:text-purple-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          {locale === "es"
            ? "Datos actualizados con IA en tiempo real"
            : "AI-powered real-time data"}
        </span>
      </motion.div>
    </motion.section>
  );
}
