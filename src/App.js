import React from "react";
import { MotionConfig } from "framer-motion";
import "@/App.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <LanguageProvider>
          <div className="App min-h-screen bg-[var(--bg)] text-[var(--text-primary)] overflow-x-hidden">
            <Navbar />
            <main>
              <Hero />
              <Projects />
              <About />
              <Experience />
              <Skills />
              <Contact />
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </MotionConfig>
  );
}

export default App;
