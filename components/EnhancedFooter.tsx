"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function EnhancedFooter() {
  const { t, locale } = useI18n();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/MiguelMaestro",
      icon: Github,
      label: "Visitar perfil de GitHub",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/miguelmaestromartinez",
      icon: Linkedin,
      label: "Conectar en LinkedIn",
    },
    {
      name: "Email",
      href: "mailto:miguel@maestro.cloud",
      icon: Mail,
      label: "Enviar correo electrónico",
    },
  ];

  const footerLinks = [
    {
      section: locale === "es" ? "Secciones" : "Sections",
      links: [
        { name: locale === "es" ? "Inicio" : "Home", href: "#" },
        { name: locale === "es" ? "Proyectos" : "Projects", href: "#projects" },
        { name: locale === "es" ? "Habilidades" : "Skills", href: "#skills" },
        {
          name: "Blueprints",
          href: "/cloud-blueprints",
        },
      ],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-transparent via-azure-50/30 to-azure-100/50 dark:from-transparent dark:via-gray-900/30 dark:to-gray-950/50 border-t border-azure-200/30 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Maestro.Cloud</h3>
            <p className="text-sm text-azure-700 dark:text-azure-200/70 max-w-xs">
              {locale === "es"
                ? "Transformando infraestructuras cloud en ecosistemas potentes y automatizados."
                : "Transforming cloud infrastructures into powerful and automated ecosystems."}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-azure-100/50 dark:bg-white/5 border border-azure-200/50 dark:border-white/10 hover:border-azure-500/50 dark:hover:border-azure-neon/50 transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-azure-600 dark:text-azure-300 group-hover:text-azure-700 dark:group-hover:text-azure-neon transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((column) => (
            <div key={column.section}>
              <h4 className="font-semibold text-azure-900 dark:text-white mb-4">
                {column.section}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-azure-700 dark:text-azure-200/70 hover:text-azure-900 dark:hover:text-azure-neon transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-azure-500 dark:bg-azure-neon transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Status Badge */}
          <div className="space-y-4">
            <h4 className="font-semibold text-azure-900 dark:text-white mb-4">
              Status
            </h4>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-700 dark:text-emerald-300">
                {locale === "es"
                  ? "Disponible para proyectos"
                  : "Available for projects"}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-azure-200/30 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-azure-600/70 dark:text-azure-200/50">
          <p>
            © {currentYear} Miguel Maestro Martínez.{" "}
            {locale === "es"
              ? "Todos los derechos reservados."
              : "All rights reserved."}
          </p>
          <p className="flex items-center gap-2">
            <span>{locale === "es" ? "Construido con" : "Built with"}</span>
            <span className="text-azure-700 dark:text-azure-neon font-medium">
              Next.js & Tailwind
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
