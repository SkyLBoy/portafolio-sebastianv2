import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} });

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    try {
      const stored = localStorage.getItem("portfolio-theme");
      if (stored === "light" || stored === "dark") return stored;
    } catch {
      // Use the default theme when browser storage is unavailable.
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Theme switching does not depend on persistent storage.
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
