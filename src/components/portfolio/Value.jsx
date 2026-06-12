import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { SectionHeader } from "./About";

const Value = () => {
  const { t } = useLang();
  const points = t("value.points");

  return (
    <section
      id="value"
      data-testid="value-section"
      className="section-y relative bg-[var(--surface)] border-y border-[var(--border)]"
    >
      <div className="container-x">
        <SectionHeader
          overline={t("value.overline")}
          title={t("value.title")}
          lead={t("value.lead")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] mt-14 border border-[var(--border)]">
          {Array.isArray(points) &&
            points.map((p, i) => (
              <motion.div
                key={i}
                data-testid={`value-point-${i}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="bg-[var(--bg)] p-6 md:p-7 flex items-start gap-4 hover:bg-[var(--surface)] transition-colors"
              >
                <span className="inline-flex items-center justify-center w-7 h-7 bg-[var(--accent)] text-white flex-shrink-0">
                  <Check size={14} strokeWidth={3} />
                </span>
                <p className="text-[var(--text-primary)] leading-relaxed text-[15px]">
                  {p}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Value;
