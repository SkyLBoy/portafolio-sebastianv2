import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Server,
  Network,
  Bot,
  Boxes,
  FileText,
  Users,
  TrendingUp,
} from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { SectionHeader } from "./About";

const ICONS = {
  rocket: Rocket,
  server: Server,
  network: Network,
  bot: Bot,
  boxes: Boxes,
  file: FileText,
  users: Users,
  trending: TrendingUp,
};

const Achievements = () => {
  const { t } = useLang();
  const items = t("achievements.items");

  return (
    <section
      id="achievements"
      data-testid="achievements-section"
      className="section-y relative bg-[var(--surface)] border-y border-[var(--border)]"
    >
      <div className="container-x">
        <SectionHeader
          overline={t("achievements.overline")}
          title={t("achievements.title")}
          lead={t("achievements.lead")}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] mt-14 border border-[var(--border)]">
          {Array.isArray(items) &&
            items.map((it, i) => {
              const Icon = ICONS[it.icon] || Rocket;
              return (
                <motion.div
                  key={i}
                  data-testid={`achievement-${i}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                  className="bg-[var(--bg)] p-6 hover:bg-[var(--surface)] transition-colors group"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 mb-4 border border-[var(--border)] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
                    <Icon size={18} />
                  </div>
                  <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                    {it.text}
                  </p>
                  <span className="block mt-4 font-mono text-[10px] uppercase tracking-widest text-[var(--text-secondary)]">
                    / {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
