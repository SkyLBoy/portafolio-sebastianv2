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
              return (
                <motion.div
                  key={i}
                  data-testid={`skills-group-${i}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="card-tech p-6 md:p-7"
                >
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[var(--border)]">
                    <span className="inline-flex items-center justify-center w-9 h-9 bg-[var(--accent-soft)] text-[var(--accent)]">
                      <Icon size={16} />
                    </span>
                    <h3 className="font-heading font-semibold text-base text-[var(--text-primary)] tracking-tight">
                      {g.name}
                    </h3>
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                      {String(g.items.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((it, j) => (
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
