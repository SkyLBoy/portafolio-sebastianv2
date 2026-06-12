import React from "react";
import { motion } from "framer-motion";
import { Server, Network, Code2, MapPin, Calendar } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { SectionHeader } from "./About";

const ICONS = { server: Server, network: Network, code: Code2 };

const Experience = () => {
  const { t } = useLang();
  const jobs = t("experience.jobs");

  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="section-y relative"
    >
      <div className="container-x">
        <SectionHeader
          overline={t("experience.overline")}
          title={t("experience.title")}
          lead={t("experience.lead")}
        />

        <div className="mt-16 relative max-w-4xl">
          {/* Vertical line */}
          <div
            className="absolute left-5 md:left-6 top-2 bottom-2 w-px bg-[var(--border)]"
            aria-hidden="true"
          />

          <ol className="space-y-12">
            {Array.isArray(jobs) &&
              jobs.map((job, i) => {
                const Icon = ICONS[job.icon] || Server;
                const isFirst = i === 0;
                return (
                  <motion.li
                    key={i}
                    data-testid={`exp-item-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative pl-16 md:pl-20"
                  >
                    {/* Node */}
                    <div
                      className={`absolute left-0 top-0 w-10 h-10 md:w-12 md:h-12 inline-flex items-center justify-center border-2 ${
                        isFirst
                          ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                          : "border-[var(--border-strong)] bg-[var(--surface)] text-[var(--accent)]"
                      }`}
                    >
                      <Icon size={16} />
                      {isFirst && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 node-pulse border-2 border-[var(--bg)]" />
                      )}
                    </div>

                    <div className="card-tech p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] flex items-center gap-1.5">
                          <Calendar size={11} />
                          {job.period}
                        </span>
                        {isFirst && (
                          <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 bg-emerald-500/10 text-emerald-500 border border-emerald-500/40">
                            {t("experience.present")}
                          </span>
                        )}
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-1.5">
                          <MapPin size={11} />
                          {job.location}
                        </span>
                      </div>

                      <h3 className="font-heading font-semibold text-xl md:text-2xl text-[var(--text-primary)] tracking-tight mb-1">
                        {job.role}
                      </h3>
                      <p className="text-[var(--accent)] font-medium mb-5">
                        {job.company}
                      </p>

                      <p className="overline mb-3">
                        {t("experience.achievementsLabel")}
                      </p>
                      <ul className="space-y-2">
                        {job.achievements.map((a, j) => (
                          <li
                            key={j}
                            className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-relaxed pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--accent)] before:font-mono before:text-xs before:top-1"
                          >
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.li>
                );
              })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
