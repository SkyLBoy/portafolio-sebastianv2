import React from "react";
import { motion } from "framer-motion";
import { Target, Sparkles, ListChecks, Code2 } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { SectionHeader } from "./About";
import { PROJECT_MOCKS } from "./ProjectMocks";

const Projects = () => {
  const { t } = useLang();
  const list = t("projects.list");
  const labels = t("projects.labels");

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="section-y relative bg-[var(--surface)] border-y border-[var(--border)]"
    >
      <div className="container-x">
        <SectionHeader
          overline={t("projects.overline")}
          title={t("projects.title")}
          lead={t("projects.lead")}
        />

        <div className="mt-16 space-y-8">
          {Array.isArray(list) &&
            list.map((p, i) => {
              const Mock = PROJECT_MOCKS[i];
              const reverse = i % 2 === 1;
              return (
                <motion.article
                  key={i}
                  data-testid={`project-card-${i}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="grid lg:grid-cols-12 gap-0 border border-[var(--border)] bg-[var(--bg)] overflow-hidden group hover:border-[var(--accent)] transition-colors"
                >
                  <div
                    className={`lg:col-span-6 relative ${
                      reverse ? "lg:order-2" : "lg:order-1"
                    } aspect-[16/11] lg:aspect-auto bg-[var(--surface-alt)] border-b lg:border-b-0 ${
                      reverse ? "lg:border-l" : "lg:border-r"
                    } border-[var(--border)] overflow-hidden`}
                  >
                    {Mock ? <Mock /> : null}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--bg)]/85 backdrop-blur border border-[var(--border)] font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 bg-[var(--accent)]" />
                      Project · {String(i + 1).padStart(2, "0")} / {list.length}
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-6 ${
                      reverse ? "lg:order-1" : "lg:order-2"
                    } p-7 md:p-10 lg:p-12 flex flex-col`}
                  >
                    <p className="overline mb-3">{p.subtitle}</p>
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-[var(--text-primary)] leading-tight mb-4 tracking-tight">
                      {p.name}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                      {p.desc}
                    </p>

                    <div className="mb-6">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 mb-2">
                        <Code2 size={11} /> {labels.tech}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.map((tt, j) => (
                          <span
                            key={j}
                            className="font-mono text-[11px] px-2 py-1 bg-[var(--surface-alt)] border border-[var(--border)] text-[var(--text-primary)]"
                          >
                            {tt}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 mb-6">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 mb-2">
                          <ListChecks size={11} /> {labels.features}
                        </p>
                        <ul className="space-y-1.5">
                          {p.features.map((f, j) => (
                            <li
                              key={j}
                              className="text-sm text-[var(--text-secondary)] leading-snug pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-[var(--accent)] before:font-mono"
                            >
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 mb-2">
                            <Target size={11} /> {labels.problem}
                          </p>
                          <p className="text-sm text-[var(--text-primary)] leading-snug">
                            {p.problem}
                          </p>
                        </div>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)] flex items-center gap-2 mb-2">
                            <Sparkles size={11} /> {labels.impact}
                          </p>
                          <p className="text-sm text-[var(--text-primary)] leading-snug font-medium">
                            {p.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
