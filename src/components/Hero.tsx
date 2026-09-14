import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/Magnetic";
import FloatingTechBackground from "@/components/FloatingTechBackground";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden grid-overlay">
      {/* Ambient glow */}
      <div className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-primary/10 dark:bg-primary/15 blur-[120px]" />
      <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-[120px]" />

      <FloatingTechBackground />

      <div className="max-w-3xl mx-auto w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card mb-8"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 animate-pulse-ring" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs text-muted-foreground">Available for work · Addis Ababa, ET</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-4"
        >
          Dagem Gissila
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg sm:text-xl font-medium text-primary mb-5"
        >
          Fullstack &amp; Backend Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Building enterprise web applications and backend services —
          from API design to Docker and Kubernetes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <Magnetic strength={0.25}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
          </Magnetic>
          <Magnetic strength={0.25}>
            <Button
              size="lg"
              variant="outline"
              className="border-border"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex items-center justify-center gap-3"
        >
          <Magnetic strength={0.4}>
            <a
              href="https://github.com/Dagemgissila"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex p-2.5 rounded-full text-muted-foreground hover:text-primary hover:bg-card border border-transparent hover:border-border transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </Magnetic>
          <Magnetic strength={0.4}>
            <a
              href="https://www.linkedin.com/in/dagem-gissila-999987243/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex p-2.5 rounded-full text-muted-foreground hover:text-primary hover:bg-card border border-transparent hover:border-border transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Magnetic>
          <Magnetic strength={0.4}>
            <a
              href="mailto:dagemgisila@gmail.com"
              aria-label="Send an email"
              className="flex p-2.5 rounded-full text-muted-foreground hover:text-primary hover:bg-card border border-transparent hover:border-border transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
