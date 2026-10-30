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
  Infraestructura: Network,
  Infrastructure: Network,
  Automatización: Bot,
  Automation: Bot,
  Desarrollo: Code2,
  Development: Code2,
  "Bases de Datos": Database,
  Databases: Database,
  Documentación: FileText,
  Documentation: FileText,
  Metodologías: GitBranch,
  Methodologies: GitBranch,
};

const Skills = () => {
  const { t } = useLang();
  const groups = t("skills.groups");
  const specialties = t("spec.cards");
  const technologyGroups = Object.values(t("tech.groups"));
  const descriptions = t("skills.descriptions");
  const specialtyOrder = [1, 2, 0, null, 3, null];
  const technologyOrder = [2, 1, 0, 3, null, null];

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
              const Icon = GROUP_ICONS[g.name] || Code2;
              const specialty = specialtyOrder[i] == null ? null : specialties[specialtyOrder[i]];
              const technologies = technologyOrder[i] == null ? [] : technologyGroups[technologyOrder[i]];
              const items = [...new Set([...g.items, ...(specialty?.tech || []), ...(technologies || [])])];
              return (
                <motion.div
                  key={i}
                  data-testid={`skills-group-${i}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`card-tech p-6 md:p-7 ${i === 0 ? "card-featured" : ""}`}
                >
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[var(--border)]">
                    <span className="inline-flex items-center justify-center card-icon w-11 h-11">
                      <Icon size={16} />
                    </span>
                    <h3 className="font-heading font-semibold text-base text-[var(--text-primary)] tracking-tight">
                      {g.name}
                    </h3>
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                      {String(items.length).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-5">
                    {descriptions[i]}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((it, j) => (
                      <span key={j} className="chip">
                        <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                        {it}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
