import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Sun, Moon, Languages, Menu, X, Download, Terminal } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLang } from "@/contexts/LanguageContext";
import { PERSONAL } from "@/lib/personal";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();
  const menuButtonRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const links = [
    { id: "projects", label: t("nav.projects") },
    { id: "about", label: t("nav.about") },
    { id: "experience", label: t("nav.experience") },
    { id: "skills", label: t("nav.specializations") },
    { id: "contact", label: t("nav.contact") },
  ];

  const reducedMotion = useReducedMotion();

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" });
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-sm bg-[var(--nav-bg)] border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => go("hero")}
          aria-label={t("nav.home")}
          data-testid="navbar-logo"
          className="flex items-center gap-2 group"
        >
          <span className="w-9 h-9 inline-flex items-center justify-center bg-[var(--accent)] text-white font-mono font-bold text-sm">
            SC
          </span>
          <span className="hidden sm:flex flex-col leading-tight text-left">
            <span className="font-heading font-bold text-[var(--text-primary)] text-sm tracking-tight">
              Sebastián Calderón
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-secondary)] flex items-center gap-1">
              <Terminal size={10} /> SW · IT Infra
            </span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            data-testid="lang-toggle"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono uppercase tracking-wider border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            aria-label={t("nav.switchLanguage")}
          >
            <Languages size={14} />
            {lang === "es" ? "ES" : "EN"}
          </button>

          <button
            onClick={toggleTheme}
            data-testid="theme-toggle"
            className="inline-flex items-center justify-center w-10 h-10 border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            aria-label={t(theme === "dark" ? "nav.lightTheme" : "nav.darkTheme")}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href={PERSONAL.cvUrl}
            target="_blank"
            download="cv-sebastian-calderon.pdf"
            rel="noopener noreferrer"
            data-testid="navbar-cv-btn"
            className="hidden md:inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white px-4 py-2 text-sm font-medium transition-colors"
          >
            <Download size={14} />
            {t("nav.downloadCV")}
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            data-testid="mobile-menu-toggle"
            ref={menuButtonRef}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-[var(--border)] text-[var(--text-secondary)]"
            aria-label={t(open ? "nav.closeMenu" : "nav.openMenu")}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          aria-label={t("nav.menu")}
          data-testid="mobile-menu"
          className="lg:hidden border-t border-[var(--border)] bg-[var(--bg)]"
        >
          <div className="container-x py-4 flex flex-col">
            {links.map((l) => (
              <button
                key={l.id}
                data-testid={`mobile-nav-link-${l.id}`}
                onClick={() => go(l.id)}
                className="py-3 text-left text-[var(--text-primary)] border-b border-[var(--border)] last:border-b-0"
              >
                {l.label}
              </button>
            ))}
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={toggleLang}
                aria-label={t("nav.switchLanguage")}
                data-testid="mobile-lang-toggle"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-mono uppercase border border-[var(--border)] text-[var(--text-secondary)]"
              >
                <Languages size={14} />
                {lang === "es" ? "ES" : "EN"}
              </button>
              <a
                href={PERSONAL.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="mobile-cv-btn"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-white px-4 py-2.5 text-sm font-medium"
              >
                <Download size={14} />
                CV
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
