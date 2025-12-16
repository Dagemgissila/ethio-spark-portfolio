import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import profileImage from "@/assets/profile.jpg";
import nextLogo from "@/assets/skills/nextjs.svg";
import laravelLogo from "@/assets/skills/laravel.svg";
import expressLogo from "@/assets/skills/express.svg";
import typescriptLogo from "@/assets/skills/typescript.svg";
import reactLogo from "@/assets/skills/react.svg";
import vueLogo from "@/assets/skills/vue.svg";
import phpLogo from "@/assets/skills/php.svg";
import pythonLogo from "@/assets/skills/python.svg";
import gitLogo from "@/assets/skills/git.svg";
import mysqlLogo from "@/assets/skills/mysql.svg";

const technologies = ["Express.js", "Nest.js", "Laravel", "Next.js", "React.js"];

const floatingIcons = [
  { src: nextLogo, alt: "Next.js", invert: true, top: "8%", left: "5%", delay: 0, duration: 4 },
  { src: reactLogo, alt: "React", invert: false, top: "15%", left: "85%", delay: 0.5, duration: 5 },
  { src: laravelLogo, alt: "Laravel", invert: false, top: "70%", left: "8%", delay: 1, duration: 4.5 },
  { src: typescriptLogo, alt: "TypeScript", invert: false, top: "80%", left: "90%", delay: 1.5, duration: 3.5 },
  { src: expressLogo, alt: "Express", invert: true, top: "35%", left: "3%", delay: 2, duration: 5.5 },
  { src: vueLogo, alt: "Vue", invert: false, top: "25%", left: "92%", delay: 2.5, duration: 4.2 },
  { src: phpLogo, alt: "PHP", invert: false, top: "55%", left: "95%", delay: 3, duration: 3.8 },
  { src: pythonLogo, alt: "Python", invert: false, top: "90%", left: "15%", delay: 0.8, duration: 4.8 },
  { src: gitLogo, alt: "Git", invert: false, top: "5%", left: "45%", delay: 1.2, duration: 5.2 },
  { src: mysqlLogo, alt: "MySQL", invert: false, top: "88%", left: "75%", delay: 1.8, duration: 4.3 },
  // Center area icons
  { src: reactLogo, alt: "React", invert: false, top: "30%", left: "25%", delay: 0.3, duration: 4.6 },
  { src: typescriptLogo, alt: "TypeScript", invert: false, top: "45%", left: "70%", delay: 0.7, duration: 5.1 },
  { src: nextLogo, alt: "Next.js", invert: true, top: "60%", left: "30%", delay: 1.4, duration: 4.3 },
  { src: laravelLogo, alt: "Laravel", invert: false, top: "20%", left: "60%", delay: 1.9, duration: 4.9 },
  { src: expressLogo, alt: "Express", invert: true, top: "75%", left: "55%", delay: 2.2, duration: 5.3 },
  { src: vueLogo, alt: "Vue", invert: false, top: "50%", left: "15%", delay: 2.8, duration: 4.1 },
  { src: phpLogo, alt: "PHP", invert: false, top: "12%", left: "35%", delay: 0.4, duration: 4.7 },
  { src: pythonLogo, alt: "Python", invert: false, top: "65%", left: "80%", delay: 1.1, duration: 5.4 },
];

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
      {/* Floating tech icons in background */}
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute z-0 opacity-20 dark:opacity-15"
          style={{ top: icon.top, left: icon.left }}
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: icon.delay,
          }}
        >
          <img
            src={icon.src}
            alt={icon.alt}
            className={`w-6 h-6 sm:w-8 sm:h-8 ${icon.invert ? "dark:invert" : ""}`}
          />
        </motion.div>
      ))}

      {/* Subtle animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/3 -left-1/3 w-[800px] h-[800px] bg-gradient-to-br from-muted/40 via-muted/20 to-transparent rounded-full blur-[120px]"
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
          className="absolute -bottom-1/3 -right-1/3 w-[700px] h-[700px] bg-gradient-to-tl from-muted/30 via-muted/15 to-transparent rounded-full blur-[120px]"
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-medium text-sm">Available for work</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight"
            >
              <span className="text-muted-foreground font-normal">Hi, I'm </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Dagem Gissila
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-foreground font-bold mb-2">
                Full Stack Developer
              </p>
              <p className="text-muted-foreground text-sm md:text-base max-w-md">
                Building scalable web applications with modern technologies. 
                Passionate about clean code and exceptional user experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-3 mb-8 flex-wrap"
            >
              <span className="text-sm text-muted-foreground">Specialized in</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTech}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary font-bold text-base md:text-lg bg-primary/10 px-3 py-1 rounded-lg border border-primary/20"
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

          {/* Right side - Profile Image */}
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
                  className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-primary/20"
                />
              </div>
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
