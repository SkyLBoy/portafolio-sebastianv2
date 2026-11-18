import React from "react";
import { useReducedMotion } from "framer-motion";
import { Download, Mail, ArrowDown } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { PERSONAL } from "@/lib/personal";

const Hero = () => {
  const { t } = useLang();
  const reducedMotion = useReducedMotion();

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reducedMotion ? "instant" : "smooth",
      block: "start",
    });
  };

  return (
    <section id="hero" data-testid="hero-section" className="hero-section relative w-full">
      <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="container-x relative hero-layout">
        <div className="hero-message min-w-0">
          <p className="hero-name font-heading font-semibold text-[var(--accent)]" data-testid="hero-name">
            {PERSONAL.name}
          </p>
          <h1 className="hero-title font-heading font-bold text-[var(--text-primary)]" data-testid="hero-title">
            {t("hero.title")}
          </h1>
          <p className="hero-description text-[var(--text-secondary)]" data-testid="hero-description">
            {t("hero.description")}
          </p>

          <div className="hero-actions">
            <button type="button" onClick={() => go("projects")} data-testid="hero-projects-btn" className="btn-primary hero-action-primary">
              <ArrowDown size={17} aria-hidden="true" />
              {t("hero.ctaProjects")}
            </button>
            <button type="button" onClick={() => go("contact")} data-testid="hero-contact-btn" className="btn-secondary">
              <Mail size={16} aria-hidden="true" />
              {t("hero.ctaContact")}
            </button>
            <a href={PERSONAL.cvUrl} target="_blank" download="cv-sebastian-calderon.pdf" rel="noopener noreferrer" data-testid="hero-cv-btn" className="btn-secondary">
              <Download size={16} aria-hidden="true" />
              {t("hero.ctaCV")}
            </a>
          </div>
        </div>

        <figure className="hero-profile min-w-0">
          <div className="hero-photo-frame relative">
            <span aria-hidden="true" className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[var(--accent)] pointer-events-none" />
            <span aria-hidden="true" className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[var(--accent)] pointer-events-none" />
            <div className="aspect-square rounded-xl bg-[var(--surface-alt)] border border-[var(--border)] overflow-hidden">
              <img src={PERSONAL.photoUrl} alt={PERSONAL.name} data-testid="hero-photo" width="480" height="480" className="w-full h-full object-cover grayscale" loading="eager" decoding="async" />
            </div>
          </div>
          <figcaption className="hero-current-role" data-testid="hero-current-role">
            <span className="block font-mono text-xs text-[var(--text-secondary)] mb-2">{t("hero.currentRole")}</span>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{t("hero.currentCompany")}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
