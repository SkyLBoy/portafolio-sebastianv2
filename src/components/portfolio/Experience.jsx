import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, ChevronDown } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { SectionHeader } from "./About";

const CompanyLogos = ({ job }) => {
  if (!job.logo) return null;

  return (
    <div className={`flex shrink-0 items-center gap-3 max-w-full ${job.secondaryLogo ? "w-52" : "w-36"}`}>
      {job.secondaryLogo && (
        <img
          src={`${process.env.PUBLIC_URL}${job.secondaryLogo}`}
          alt="Vincco Centro de Contacto"
          loading="lazy"
          className="w-16 h-10 object-contain"
        />
      )}
      <img
        src={`${process.env.PUBLIC_URL}${job.logo}`}
        alt={job.logo === "/assets/logo-ct.png" ? "CT Internacional" : job.company}
        loading="lazy"
        className={`min-w-0 h-10 object-contain ${job.secondaryLogo ? "w-32" : "w-full"} ${job.logo === "/assets/logo_grande_vincco.png" ? "" : "brightness-0 dark:invert"}`}
      />
    </div>
  );
};

const ResponsibilityList = ({ items }) => (
  <ul className="space-y-2 text-sm md:text-[15px] text-[var(--text-secondary)] leading-relaxed">
    {items.map((item) => (
      <li key={item} className="relative pl-4 before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)]">
        {item}
      </li>
    ))}
  </ul>
);

const Experience = () => {
  const { t } = useLang();
  const jobs = t("experience.jobs");

  return (
    <section id="experience" data-testid="experience-section" className="section-y relative">
      <div className="container-x">
        <SectionHeader
          overline={t("experience.overline")}
          title={t("experience.title")}
          lead={t("experience.lead")}
        />

        <ol className="mt-14 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.isArray(jobs) && jobs.map((job, i) => {
            const isCurrent = job.current === true;
            const primaryIndices = job.primaryIndices || [];
            const primaryItems = primaryIndices.map(index => job.achievements[index]);
            const secondaryItems = job.achievements.filter((_, index) => !primaryIndices.includes(index));
            return (
              <motion.li
                key={`${job.company}-${job.role}`}
                id={`experience-${i}`}
                data-testid={`exp-item-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4 }}
                className={isCurrent || i === jobs.length - 1 ? "md:col-span-2" : ""}
              >
                <article className={`card-tech h-full p-5 md:p-8 ${isCurrent ? "card-featured" : ""}`}>
                  <div className={`flex flex-wrap items-start gap-x-8 gap-y-4 mb-5 ${isCurrent ? "justify-between border-b border-[var(--border)] pb-5" : "flex-col"}`}>
                    <div className="space-y-2">
                      {isCurrent && (
                        <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-emerald-500/10 font-mono text-xs text-emerald-700 dark:text-emerald-300">
                          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-current" />
                          {t("experience.currentJob")}
                        </span>
                      )}
                      <p className="flex items-center gap-2 font-mono text-xs text-[var(--text-secondary)]">
                        <Calendar size={13} aria-hidden="true" className="shrink-0" />
                        {job.period}
                      </p>
                    </div>
                    <CompanyLogos job={job} />
                  </div>

                  <h3 className={`font-heading font-semibold text-[var(--text-primary)] tracking-tight leading-snug ${isCurrent ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
                    {job.role}
                  </h3>
                  <p className="mt-2 font-medium text-[var(--accent)]">{job.company}</p>
                  {job.location && (
                    <p className="mt-2 flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                      <MapPin size={13} aria-hidden="true" className="shrink-0" />
                      {job.location}
                    </p>
                  )}

                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">{job.summary}</p>
                  {primaryItems.length > 0 && (
                    <div className="mt-5">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] mb-3">
                        {t("experience.highlightsLabel")}
                      </h4>
                      <ResponsibilityList items={primaryItems} />
                    </div>
                  )}
                  {secondaryItems.length > 0 && (
                    <details className="experience-details group mt-5 border-t border-[var(--border)] pt-4">
                      <summary aria-label={`${t("experience.achievementsLabel")}: ${job.role}`} className="flex items-center justify-between gap-3 list-none cursor-pointer text-sm text-[var(--accent)] [&::-webkit-details-marker]:hidden">
                        {t("experience.achievementsLabel")}
                        <ChevronDown size={16} aria-hidden="true" className="shrink-0 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="pt-4"><ResponsibilityList items={secondaryItems} /></div>
                    </details>
                  )}
                </article>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
