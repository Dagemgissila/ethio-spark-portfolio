import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grain-overlay" />
      <CursorGlow />
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <BackToTop />

      <footer className="py-8 text-center text-muted-foreground border-t border-border font-mono text-xs tracking-wide">
        <p>© {new Date().getFullYear()} Dagem Gissila. Built with React, TypeScript &amp; a lot of coffee.</p>
      </footer>
    </div>
  );
};

export default Index;
