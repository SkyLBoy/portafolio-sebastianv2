import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowDown, MapPin, Circle } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { PERSONAL } from "@/lib/personal";

const Hero = () => {
  const { t } = useLang();

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-24 md:pt-28 overflow-hidden w-full"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      {/* Radial accent glow */}
      <div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)",
        }}
      />

      <div className="container-x relative w-full grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* LEFT — text */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--border)] bg-[var(--surface)] text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              <Circle
                size={8}
                className="fill-emerald-500 text-emerald-500 node-pulse"
              />
              {t("hero.status")}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              <MapPin size={11} />
              {t("hero.location")}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="overline mb-4"
          >
            {t("hero.overline")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-bold text-[var(--text-primary)] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tighter mb-6"
          >
            {t("hero.greeting")}{" "}
            <span className="block sm:inline">
              <span className="text-[var(--accent)] cursor-blink">
                {t("hero.name")}
              </span>
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="font-heading text-xl md:text-2xl lg:text-[1.7rem] text-[var(--text-primary)] font-medium leading-snug mb-5 max-w-3xl"
          >
            {t("hero.title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-mono text-xs sm:text-sm text-[var(--text-secondary)] mb-6 tracking-wide"
          >
            {t("hero.tagline")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-10"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href={PERSONAL.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cv-btn"
              className="btn-primary"
            >
              <Download size={16} />
              {t("hero.ctaCV")}
            </a>
            <button
              onClick={() => go("contact")}
              data-testid="hero-contact-btn"
              className="btn-secondary"
            >
              <Mail size={16} />
              {t("hero.ctaContact")}
            </button>
            <button
              onClick={() => go("projects")}
              data-testid="hero-projects-btn"
              className="btn-secondary"
            >
              <ArrowDown size={16} />
              {t("hero.ctaProjects")}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center gap-3 pt-6 border-t border-[var(--border)] max-w-2xl"
          >
            <span className="overline text-[var(--accent)]">
              {t("hero.currentRole")}
            </span>
            <span className="text-sm text-[var(--text-primary)]">
              {t("hero.currentCompany")}
            </span>
          </motion.div>
        </div>

        {/* RIGHT — photo + tech frame */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative w-full max-w-md"
          >
            {/* Tech frame corners */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[var(--accent)] z-10" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[var(--accent)] z-10" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[var(--accent)] z-10" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[var(--accent)] z-10" />

            {/* Photo */}
            <div className="relative aspect-square bg-[var(--surface-alt)] border border-[var(--border)] overflow-hidden">
              <img
                src={PERSONAL.photoUrl}
                alt={PERSONAL.name}
                data-testid="hero-photo"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="eager"
              />
              {/* Scan-line overlay */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 3px)",
                }}
              />
            </div>

            {/* Caption block */}
            <div className="absolute -bottom-6 left-6 right-6 bg-[var(--surface)] border border-[var(--border)] px-4 py-3 shadow-sm flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  ID · 2026
                </p>
                <p className="font-heading font-semibold text-sm text-[var(--text-primary)]">
                  SC-LX · v2.0
                </p>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 node-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
