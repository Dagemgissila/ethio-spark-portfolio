import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Magnetic from "@/components/Magnetic";

const technologies = ["Next.js", "NestJS", "Node.js", "Laravel", "Docker & Kubernetes"];

const stack = [
  "Next.js",
  "React.js",
  "NestJS",
  "Node.js",
  "Laravel",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "Redis",
  "Argo CD",
];

const Hero = () => {
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-12 pt-28 pb-16 relative overflow-hidden grid-overlay">
      {/* Ambient glow */}
      <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-primary/10 dark:bg-primary/15 blur-[120px]" />
      <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8">
          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden"
          >
            {/* title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">whoami.sh — zsh</span>
            </div>

            <div className="p-6 sm:p-8 font-mono">
              <div className="text-sm text-muted-foreground mb-2">
                dagem@portfolio <span className="text-muted-foreground/50">~</span>{" "}
                <span className="text-primary">%</span> whoami
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-1"
              >
                Dagem Gissila
              </motion.h1>
              <div className="text-primary font-medium mb-6 flex items-center gap-2 flex-wrap">
                <span>// Fullstack &amp; Backend Developer ·</span>
                <span className="inline-flex items-center min-w-[9rem]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentTech}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {technologies[currentTech]}
                    </motion.span>
                  </AnimatePresence>
                  <span className="ml-0.5 w-[2px] h-4 bg-primary animate-blink" aria-hidden />
                </span>
              </div>

              <div className="text-sm text-muted-foreground mb-3">
                dagem@portfolio <span className="text-muted-foreground/50">~</span>{" "}
                <span className="text-primary">%</span> cat about.md
              </div>
              <p className="font-sans text-[15px] leading-relaxed text-muted-foreground max-w-xl mb-7">
                Fullstack developer with three years building enterprise web applications and backend
                services across <span className="text-foreground">Next.js, React, NestJS, Node.js and Laravel</span>.
                Comfortable owning a feature end to end — API design, database performance, and shipping
                it through <span className="text-foreground">Docker, Kubernetes and CI/CD</span>.
              </p>

              <div className="text-sm text-muted-foreground mb-4">
                dagem@portfolio <span className="text-muted-foreground/50">~</span>{" "}
                <span className="text-primary">%</span> ./run --action=contact
              </div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                <Magnetic strength={0.25}>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow font-sans"
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View Projects →
                  </Button>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <Button variant="outline" className="border-border font-sans">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </Magnetic>
              </motion.div>
            </div>

            {/* status bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-border bg-secondary/30 font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 animate-pulse-ring" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  available for work
                </span>
                <span>main*</span>
              </div>
              <span>Addis Ababa, ET</span>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            {/* current role */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase mb-2">
                current role
              </div>
              <div className="text-lg font-semibold text-foreground">Fullstack Developer</div>
              <div className="text-primary font-medium">Safaricom Ethiopia</div>
              <div className="font-mono text-xs text-muted-foreground mt-1.5">05/2026 — Present</div>
            </div>

            {/* stack */}
            <div className="rounded-xl border border-border bg-card p-6 flex-1">
              <div className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase mb-3">
                $ tech --stack
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1.5 rounded-md bg-secondary/60 border border-border text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* links */}
            <div className="rounded-xl border border-border bg-card p-6 font-mono text-sm">
              <div className="flex items-center justify-between py-1.5">
                <Magnetic strength={0.2}>
                  <a
                    href="https://github.com/Dagemgissila"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" /> github
                  </a>
                </Magnetic>
                <span className="text-primary">Dagemgissila</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <Magnetic strength={0.2}>
                  <a
                    href="https://www.linkedin.com/in/dagem-gissila-999987243/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" /> linkedin
                  </a>
                </Magnetic>
                <span className="text-primary">dagem-gissila</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <Magnetic strength={0.2}>
                  <a
                    href="mailto:dagemgisila@gmail.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" /> email
                  </a>
                </Magnetic>
                <span className="text-primary">dagemgisila@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
