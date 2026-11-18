import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Download,
  Copy,
  Check,
} from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { SectionHeader } from "./About";
import { PERSONAL } from "@/lib/personal";

const Contact = () => {
  const { t } = useLang();
  const [copyState, setCopyState] = useState("idle");
  const copied = copyState === "success";

  const copyEmail = async () => {
    setCopyState("copying");
    try {
      if (typeof navigator.clipboard?.writeText !== "function") throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(PERSONAL.email);
      setCopyState("success");
    } catch {
      setCopyState("error");
    }
  };

  const items = [
    {
      icon: Mail,
      label: t("contact.emailLabel"),
      value: PERSONAL.email,
      href: `mailto:${PERSONAL.email}`,
      testid: "contact-email",
    },
    {
      icon: Phone,
      label: t("contact.phoneLabel"),
      value: PERSONAL.phone,
      href: `tel:${PERSONAL.phoneRaw}`,
      testid: "contact-phone",
    },
    {
      icon: MapPin,
      label: t("contact.locationLabel"),
      value: t("contact.location"),
      href: null,
      testid: "contact-location",
    },
  ];

  return (
    <section id="contact" data-testid="contact-section" className="section-y relative">
      <div className="container-x">
        <SectionHeader
          overline={t("contact.overline")}
          title={t("contact.title")}
          lead={t("contact.lead")}
        />

        <div className="grid lg:grid-cols-12 gap-8 mt-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 card-tech p-5 sm:p-8 md:p-10"
          >
            <ul className="space-y-5">
              {items.map((it, i) => {
                const Icon = it.icon;
                const Wrapper = it.href ? "a" : "div";
                return (
                  <li
                    key={i}
                    className="grid grid-cols-[auto_minmax(0,1fr)] sm:grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-x-4 gap-y-3 py-4 border-b border-[var(--border)] last:border-b-0"
                  >
                    <span className="inline-flex items-center justify-center card-icon w-11 h-11 flex-shrink-0">
                      <Icon size={17} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-1">
                        {it.label}
                      </p>
                      <Wrapper
                        {...(it.href
                          ? { href: it.href }
                          : {})}
                        data-testid={it.testid}
                        className={`block text-[var(--text-primary)] font-medium break-words ${
                          it.href ? "hover:text-[var(--accent)] transition-colors" : ""
                        }`}
                      >
                        {it.value}
                      </Wrapper>
                    </div>
                    {it.testid === "contact-email" && (
                      <button
                        type="button"
                        onClick={copyEmail}
                        disabled={copyState === "copying"}
                        aria-busy={copyState === "copying"}
                        aria-describedby="contact-copy-status"
                        data-testid="contact-copy-email"
                        className="col-start-2 sm:col-start-3 justify-self-start inline-flex items-center gap-1.5 rounded-lg min-h-[44px] px-3 py-2 text-xs font-mono uppercase border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                        aria-label={t("contact.copyEmail")}
                      >
                        {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                        {copyState === "copying" ? t("contact.copying") : copied ? t("contact.copied") : t("contact.copy")}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
            <p
              id="contact-copy-status"
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className="mt-3 min-h-[1.5rem] text-sm text-[var(--text-secondary)]"
            >
              {copyState === "error" ? t("contact.copyError")
                : copyState === "success" ? t("contact.copySuccess")
                  : copyState === "copying" ? t("contact.copying") : ""}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${PERSONAL.email}`}
                data-testid="contact-send-email-btn"
                className="btn-primary"
              >
                <Mail size={16} />
                {t("contact.sendEmail")}
              </a>
              <a
                href={PERSONAL.cvUrl}
                target="_blank"
                download="cv-sebastian-calderon.pdf"
                rel="noopener noreferrer"
                data-testid="contact-cv-btn"
                className="btn-secondary"
              >
                <Download size={16} />
                {t("nav.downloadCV")}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-linkedin"
              className="card-tech card-link p-6 flex items-center gap-4 group"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0A66C2] text-white">
                <Linkedin size={20} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                  LinkedIn
                </p>
                <p className="text-[var(--text-primary)] font-medium group-hover:text-[var(--accent)] transition-colors">
                  /in/sebastián-calderón
                </p>
              </div>
            </a>

            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-github"
              className="card-tech card-link p-6 flex items-center gap-4 group"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--text-primary)] text-[var(--bg)]">
                <Github size={20} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                  GitHub
                </p>
                <p className="text-[var(--text-primary)] font-medium group-hover:text-[var(--accent)] transition-colors">
                  @SkyLBoy
                </p>
              </div>
            </a>

            <div className="card-tech card-status p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-80 mb-2">
                {t("contact.statusLabel")}
              </p>
              <p className="font-heading text-xl font-semibold leading-snug">
                {t("hero.status")}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-mono opacity-90">
                <span className="w-2 h-2 rounded-full bg-emerald-400 node-pulse" />
                {t("hero.location")}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
