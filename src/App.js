import React from "react";
import "@/App.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Specializations from "@/components/portfolio/Specializations";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Achievements from "@/components/portfolio/Achievements";
import TechStack from "@/components/portfolio/TechStack";
import Value from "@/components/portfolio/Value";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App min-h-screen bg-[var(--bg)] text-[var(--text-primary)] overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Specializations />
            <Skills />
            <Projects />
            <Experience />
            <Achievements />
            <TechStack />
            <Value />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
