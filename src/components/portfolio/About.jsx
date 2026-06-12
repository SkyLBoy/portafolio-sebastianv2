import React from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const SectionHeader = ({ overline, title, lead, align = "left" }) => {
  const center = align === "center";
  return (
    <div className={center ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="overline text-[var(--accent)] mb-3"
      >
        {overline}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-[var(--text-primary)] mb-4"
      >
        {title}
      </motion.h2>
      {lead && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg"
        >
          {lead}
        </motion.p>
      )}
    </div>
  );
};

const About = () => {
  const { t } = useLang();
  const stats = t("about.stats");
  const facts = t("about.facts");

  return (
    <section id="about" data-testid="about-section" className="section-y relative">
      <div className="container-x">
        <SectionHeader
          overline={t("about.overline")}
          title={t("about.title")}
          lead={t("about.lead")}
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 mt-14">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg mb-10"
            >
              {t("about.paragraph")}
            </motion.p>

            <div className="grid grid-cols-2 gap-px bg-[var(--border)]">
              {Array.isArray(stats) &&
                stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    data-testid={`about-stat-${i}`}
                    className="bg-[var(--surface)] p-6"
                  >
                    <p className="font-heading font-bold text-3xl md:text-4xl text-[var(--text-primary)] mb-1">
                      {s.value}
                    </p>
                    <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-snug">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="card-tech p-7 md:p-8"
            >
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-[var(--border)]">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-secondary)]">
                  {facts?.title}
                </p>
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              </div>
              <dl className="space-y-3">
                {Array.isArray(facts?.items) &&
                  facts.items.map((f, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 gap-3 py-2 border-b border-dashed border-[var(--border)] last:border-b-0"
                    >
                      <dt className="col-span-1 font-mono text-[11px] uppercase tracking-wider text-[var(--text-secondary)]">
                        {f.k}
                      </dt>
                      <dd className="col-span-2 text-sm text-[var(--text-primary)]">
                        {f.v}
                      </dd>
                    </div>
                  ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SectionHeader };
export default About;
