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
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // ignore
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
            className="lg:col-span-7 card-tech p-8 md:p-10"
          >
            <ul className="space-y-5">
              {items.map((it, i) => {
                const Icon = it.icon;
                const Wrapper = it.href ? "a" : "div";
                return (
                  <li
                    key={i}
                    className="flex items-start gap-5 py-4 border-b border-[var(--border)] last:border-b-0"
                  >
                    <span className="inline-flex items-center justify-center w-11 h-11 border border-[var(--border)] text-[var(--accent)] flex-shrink-0">
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
                    {it.label === t("contact.emailLabel") && (
                      <button
                        onClick={copyEmail}
                        data-testid="contact-copy-email"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                        aria-label="Copy email"
                      >
                        {copied ? <Check size={12} /> : <Copy size={12} />}
                        {copied ? t("contact.copied") : t("contact.copy")}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>

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
              className="card-tech p-6 flex items-center gap-4 group"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 bg-[#0A66C2] text-white">
                <Linkedin size={20} />
              </span>
              <div className="flex-1">
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
              className="card-tech p-6 flex items-center gap-4 group"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 bg-[var(--text-primary)] text-[var(--bg)]">
                <Github size={20} />
              </span>
              <div className="flex-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                  GitHub
                </p>
                <p className="text-[var(--text-primary)] font-medium group-hover:text-[var(--accent)] transition-colors">
                  @SkyLBoy
                </p>
              </div>
            </a>

            <div className="card-tech p-6 bg-[var(--accent)] text-white border-[var(--accent)]">
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-80 mb-2">
                Status
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
