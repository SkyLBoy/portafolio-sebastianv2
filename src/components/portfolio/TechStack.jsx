import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { SectionHeader } from "./About";

const TechStack = () => {
  const { t } = useLang();
  const groups = t("tech.groups");

  return (
    <section id="tech" data-testid="tech-section" className="section-y relative">
      <div className="container-x">
        <SectionHeader
          overline={t("tech.overline")}
          title={t("tech.title")}
          lead={t("tech.lead")}
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {/* Tech cloud */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="card-tech p-8 md:p-10 min-h-[420px] relative flex flex-wrap items-center justify-center gap-3 content-center overflow-hidden"
          >
            <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
            {Object.entries(groups).flatMap(([gname, items], gi) =>
              items.map((tech, i) => {
                const sizes = [
                  "text-sm",
                  "text-base",
                  "text-lg",
                  "text-xl",
                  "text-2xl",
                ];
                const s = sizes[(i + gi) % sizes.length];
                const isAccent = (i + gi) % 4 === 0;
                return (
                  <motion.span
                    key={`${gname}-${tech}`}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.02 * (gi * 6 + i),
                    }}
                    whileHover={{ scale: 1.08 }}
                    className={`relative font-heading font-medium ${s} px-3 py-1 tracking-tight ${
                      isAccent
                        ? "text-[var(--accent)]"
                        : "text-[var(--text-primary)]"
                    }`}
                  >
                    {tech}
                  </motion.span>
                );
              })
            )}
          </motion.div>

          {/* Group breakdown */}
          <div className="space-y-4">
            {Object.entries(groups).map(([gname, items], gi) => (
              <motion.div
                key={gname}
                data-testid={`tech-group-${gi}`}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: gi * 0.06 }}
                className="card-tech p-5 md:p-6 flex flex-wrap items-center gap-3"
              >
                <div className="min-w-[140px] flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading font-semibold text-[var(--text-primary)]">
                    {gname}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {items.map((it) => (
                    <span key={it} className="chip">
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
