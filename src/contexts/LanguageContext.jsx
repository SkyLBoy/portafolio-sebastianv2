import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext({
  lang: "es",
  toggleLang: () => {},
  t: (k) => k,
});

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
      if (typeof window === "undefined") return "es";

      try {
        const stored = localStorage.getItem("portfolio-lang");
        return stored === "en" ? "en" : "es";
      } catch {
        return "es";
      }
});

    useEffect(() => {
      try {
        localStorage.setItem("portfolio-lang", lang);
      } catch {
        // El idioma funciona aunque el navegador bloquee el almacenamiento.
      }

      document.documentElement.lang = lang;
    }, [lang]);

  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));

  const t = (key) => {
    const parts = key.split(".");
    let cur = translations[lang];
    for (const p of parts) {
      if (cur == null) return key;
      cur = cur[p];
    }
    return cur ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
