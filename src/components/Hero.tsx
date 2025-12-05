import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import profileImage from "@/assets/profile.jpg";
import nextLogo from "@/assets/skills/nextjs.svg";
import laravelLogo from "@/assets/skills/laravel.svg";
import expressLogo from "@/assets/skills/express.svg";
import typescriptLogo from "@/assets/skills/typescript.svg";

const technologies = ["Express.js", "Nest.js", "Laravel", "Next.js", "React.js"];

const Hero = () => {
  const [currentTech, setCurrentTech] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Amazing animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <motion.div
          className="absolute -top-1/3 -left-1/3 w-[800px] h-[800px] bg-gradient-to-br from-primary/40 via-primary/20 to-transparent rounded-full blur-[100px]"
          animate={{
            x: [0, 150, 80, 0],
            y: [0, 80, 150, 0],
            scale: [1, 1.3, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/3 -right-1/3 w-[700px] h-[700px] bg-gradient-to-tl from-accent/30 via-accent/15 to-transparent rounded-full blur-[100px]"
          animate={{
            x: [0, -120, -60, 0],
            y: [0, -60, -120, 0],
            scale: [1, 1.2, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-primary/25 via-accent/20 to-primary/10 rounded-full blur-[80px]"
          animate={{
            x: [0, 80, -50, 0],
            y: [0, -50, 80, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Additional floating particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/40 rounded-full blur-xl"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-primary font-semibold text-lg">Hello, I'm</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Dagem Gissila
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-4xl text-foreground font-bold mb-2"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground mb-4"
            >
              Specialized in building scalable web applications
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground mb-8 flex items-center gap-2 flex-wrap"
            >
              <span>I craft solutions with</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTech}
                  initial={{ y: 20, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -20, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-primary font-bold text-xl md:text-2xl bg-primary/10 px-3 py-1 rounded-lg"
                >
                  {technologies[currentTech]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-border hover:border-primary/50"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-border hover:border-primary/50"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:dagem@example.com"
                className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 border border-border hover:border-primary/50"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Image with floating tech logos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center mt-12 md:mt-0"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] mx-auto">
              {/* Animated gradient background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Main profile image */}
              <div className="relative z-10 w-full h-full">
                <img 
                  src={profileImage} 
                  alt="Dagem Gissila - Full Stack Developer"
                  className="w-full h-full rounded-full object-cover shadow-2xl"
                />
              </div>

              {/* Floating tech stack logos around image */}
              {/* Next.js - Top */}
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-card/95 backdrop-blur-md flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-primary/30 z-20"
                animate={{ 
                  y: [0, -12, 0]
                }}
                transition={{ 
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <img src={nextLogo} alt="Next.js" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 dark:invert" />
              </motion.div>

              {/* TypeScript - Right */}
              <motion.div
                className="absolute top-1/2 -right-4 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-card/95 backdrop-blur-md flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-primary/30 z-20"
                animate={{ 
                  x: [0, 12, 0]
                }}
                transition={{ 
                  x: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <img src={typescriptLogo} alt="TypeScript" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
              </motion.div>

              {/* Laravel - Bottom */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-card/95 backdrop-blur-md flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-primary/30 z-20"
                animate={{ 
                  y: [0, 12, 0]
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <img src={laravelLogo} alt="Laravel" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
              </motion.div>

              {/* Express.js - Left */}
              <motion.div
                className="absolute top-1/2 -left-4 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-card/95 backdrop-blur-md flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-2 border-primary/30 z-20"
                animate={{ 
                  x: [0, -12, 0]
                }}
                transition={{ 
                  x: { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <img src={expressLogo} alt="Express.js" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 dark:invert" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll Down</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
