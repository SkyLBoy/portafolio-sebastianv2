import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { PERSONAL } from "@/lib/personal";

const Footer = () => {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="footer"
      className="border-t border-[var(--border)] bg-[var(--surface)]"
    >
      <div className="container-x py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 inline-flex items-center justify-center bg-[var(--accent)] text-white font-mono font-bold text-xs">
                SC
              </span>
              <span className="font-heading font-bold text-[var(--text-primary)] tracking-tight">
                Sebastián Calderón López
              </span>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-secondary)]">
              © {year} · {t("footer.rights")}
            </p>
            <p className="text-xs text-[var(--text-secondary)] mt-2">
              {t("footer.built")}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-linkedin"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-10 h-10 border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-github"
              aria-label="GitHub"
              className="inline-flex items-center justify-center w-10 h-10 border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href={`mailto:${PERSONAL.email}`}
              data-testid="footer-email"
              aria-label="Email"
              className="inline-flex items-center justify-center w-10 h-10 border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
