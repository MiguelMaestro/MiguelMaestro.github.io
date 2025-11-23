"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NeuralBackground } from "@/components/ui/NeuralBackground";
import { useI18n } from "@/lib/i18n";
import { useMagneticButton } from "@/lib/gsap-hooks";
import Image from "next/image";

export default function Hero() {
  const { t } = useI18n();
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const projectsButtonRef = useMagneticButton();
  const linkedinButtonRef = useMagneticButton();

  const roles = t.hero.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.substring(0, text.length + 1));
          if (text === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(currentRole.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-20 relative overflow-hidden">
      <NeuralBackground />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className="mb-8 relative inline-block"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-azure-400 via-azure-neon to-purple-500 blur-xl opacity-50 animate-pulse-slow" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-azure-neon/30 shadow-[0_0_40px_rgba(0,127,255,0.4)] bg-gradient-to-br from-azure-100 to-white dark:from-gray-800 dark:to-gray-900">
            <Image
              src="/profile.png"
              alt="Miguel Ángel Maestro"
              width={160}
              height={160}
              className="object-contain scale-105"
              priority
              quality={95}
            />
          </div>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Miguel Ángel{" "}
          <span className="text-gradient drop-shadow-lg">Maestro</span>
        </h1>

        <div className="h-10 md:h-14 mb-8">
          <motion.span
            className="inline-block text-xl md:text-3xl text-azure-700 dark:text-azure-200 font-mono bg-gradient-to-r from-azure-50/80 dark:from-black/40 to-azure-100/60 dark:to-azure-900/40 px-6 py-3 rounded-xl border border-azure-300/40 dark:border-azure-500/30 shadow-lg"
            whileHover={{ scale: 1.05, borderColor: "rgba(14, 165, 233, 0.6)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            &gt; {text}
            <span className="animate-pulse text-azure-600 dark:text-azure-neon ml-1">
              _
            </span>
          </motion.span>
        </div>

        <p className="max-w-2xl mx-auto text-azure-800/90 dark:text-azure-100/90 text-base md:text-lg leading-relaxed font-light">
          {t.hero.tagline}
          <span className="block mt-2 text-azure-600 dark:text-azure-300 font-medium">
            {t.hero.experience}
          </span>
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
          role="group"
          aria-label="Enlaces de contacto principales"
        >
          <motion.a
            ref={projectsButtonRef as React.RefObject<HTMLAnchorElement>}
            href="#projects"
            aria-label="Ir a la sección de proyectos destacados"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-3 rounded-full bg-gradient-to-r from-azure-500 to-azure-600 dark:from-azure-neon dark:to-azure-600 text-white font-semibold transition-all shadow-[0_0_25px_rgba(14,165,233,0.4)] hover:shadow-[0_0_40px_rgba(14,165,233,0.6)] relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-azure-400"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.hero.cta.projects}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-azure-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          <motion.a
            ref={linkedinButtonRef as React.RefObject<HTMLAnchorElement>}
            href="https://www.linkedin.com/in/miguelmaestromartinez"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conectar en LinkedIn (abre en nueva pestaña)"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border-2 border-azure-500/40 dark:border-azure-neon/40 text-azure-700 dark:text-azure-100 font-semibold hover:bg-azure-500/10 dark:hover:bg-azure-neon/10 hover:border-azure-600 dark:hover:border-azure-neon transition-all focus:outline-none focus:ring-4 focus:ring-azure-400"
          >
            LinkedIn 🔗
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
