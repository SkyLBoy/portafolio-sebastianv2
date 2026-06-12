import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Bot, FileText, ArrowUpRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { SectionHeader } from "./About";

const ICONS = [Code2, Server, Bot, FileText];

const Specializations = () => {
  const { t } = useLang();
  const cards = t("spec.cards");

  return (
    <section
      id="spec"
      data-testid="spec-section"
      className="section-y relative bg-[var(--surface)] border-y border-[var(--border)]"
    >
      <div className="container-x">
        <SectionHeader
          overline={t("spec.overline")}
          title={t("spec.title")}
          lead={t("spec.lead")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] mt-14 border border-[var(--border)]">
          {Array.isArray(cards) &&
            cards.map((c, i) => {
              const Icon = ICONS[i] || Code2;
              return (
                <motion.article
                  key={i}
                  data-testid={`spec-card-${i}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group relative bg-[var(--bg)] p-7 md:p-8 hover:bg-[var(--surface)] transition-colors"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 border border-[var(--border)] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs text-[var(--text-secondary)]">
                      {c.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-xl text-[var(--text-primary)] mb-3 leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 min-h-[80px]">
                    {c.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {c.tech.map((tt, j) => (
                      <span
                        key={j}
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-[var(--border)] text-[var(--text-secondary)]"
                      >
                        {tt}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-dashed border-[var(--border)] flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                      .area / {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                </motion.article>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
