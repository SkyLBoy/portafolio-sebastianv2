import React from "react";
import { motion } from "framer-motion";
import {
  Network,
  Bot,
  Code2,
  Database,
  FileText,
  GitBranch,
} from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { SectionHeader } from "./About";

const GROUP_ICONS = {
  network: Network,
  bot: Bot,
  code: Code2,
  database: Database,
  file: FileText,
  workflow: GitBranch,
};

const Skills = () => {
  const { t } = useLang();
  const groups = t("skills.groups");

  return (
    <section id="skills" data-testid="skills-section" className="section-y relative">
      <div className="container-x">
        <SectionHeader
          overline={t("skills.overline")}
          title={t("skills.title")}
          lead={t("skills.lead")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {Array.isArray(groups) &&
            groups.map((g, i) => {
              const Icon = GROUP_ICONS[g.icon] || Code2;
              const items = [...new Set(g.items)];
              return (
                <motion.div
                  key={g.id}
                  data-testid={`skills-group-${i}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`card-tech p-6 md:p-7 ${i === 0 ? "card-featured" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[var(--border)]">
                    <span className="inline-flex items-center justify-center card-icon w-11 h-11 shrink-0">
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    <h3 className="font-heading font-semibold text-base text-[var(--text-primary)] tracking-tight">
                      {g.name}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-5">
                    {g.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((it, j) => (
                      <span key={j} className="chip">
                        <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                        {it}
                      </span>
                    ))}
                  </div>
                  {g.references?.length > 0 && (
                    <div className="mt-5 border-t border-[var(--border)] pt-4">
                      <p className="text-xs text-[var(--text-secondary)] mb-2">{t("skills.evidenceLabel")}</p>
                      <ul className="space-y-2 text-sm">
                        {g.references.map(reference => (
                          <li key={reference.href}>
                            <a href={reference.href} className="inline-block py-1 text-[var(--accent)] underline underline-offset-4">{reference.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
