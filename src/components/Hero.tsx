import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/Magnetic";
import FloatingTechBackground from "@/components/FloatingTechBackground";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden grid-overlay">
      {/* Ambient glow — slow drifting motion */}
      <motion.div
        className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full bg-primary/10 dark:bg-primary/15 blur-[120px]"
        animate={{ x: [0, -60, 30, 0], y: [0, 50, 90, 0], scale: [1, 1.15, 1.05, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 dark:bg-primary/10 blur-[120px]"
        animate={{ x: [0, 70, -20, 0], y: [0, -40, -80, 0], scale: [1, 1.1, 1.2, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <FloatingTechBackground />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center">
          {/* Left — text content */}
          <div className="text-center lg:text-left">
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
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4"
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
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Building enterprise web applications and backend services —
              from API design to Docker and Kubernetes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
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
              className="flex items-center justify-center lg:justify-start gap-3"
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

          {/* Right — profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center order-first lg:order-last"
          >
            <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px]">
              {/* Rotating gradient ring */}
              <motion.div
                className="absolute -inset-3 rounded-full bg-gradient-primary opacity-70 blur-md"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              />
              {/* Dashed orbit ring */}
              <motion.div
                className="absolute -inset-6 rounded-full border-2 border-dashed border-primary/25"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="relative z-10 w-full h-full rounded-full p-1.5 bg-background"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.04 }}
              >
                <img
                  src={profileImage}
                  alt="Dagem Gissila - Fullstack & Backend Developer"
                  className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
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
