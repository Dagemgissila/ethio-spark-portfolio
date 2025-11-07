import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import reactLogo from "@/assets/skills/react.svg";
import vueLogo from "@/assets/skills/vue.svg";
import nextLogo from "@/assets/skills/nextjs.svg";
import laravelLogo from "@/assets/skills/laravel.svg";
import expressLogo from "@/assets/skills/express.svg";
import typescriptLogo from "@/assets/skills/typescript.svg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              className="text-2xl md:text-4xl text-foreground font-bold mb-4"
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              Specialized in building modern web applications with React, Next.js, Vue.js,
              Laravel, and TypeScript. Passionate about creating elegant solutions.
            </motion.p>

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
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto">
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
              <div className="relative z-10">
                <img 
                  src={profileImage} 
                  alt="Dagem Gissila - Full Stack Developer"
                  className="relative w-full h-auto rounded-full object-cover border-4 border-primary/50 shadow-2xl backdrop-blur-sm"
                  style={{ aspectRatio: '1/1' }}
                />
              </div>

              {/* Floating tech stack logos around image */}
              {/* React - Top */}
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl bg-card/80 backdrop-blur-md border-2 border-primary/30 flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={reactLogo} alt="React" className="w-12 h-12" />
              </motion.div>

              {/* Next.js - Top Right */}
              <motion.div
                className="absolute top-8 -right-12 w-24 h-24 rounded-2xl bg-card/80 backdrop-blur-md border-2 border-primary/30 flex items-center justify-center shadow-lg"
                animate={{ 
                  x: [0, 15, 0],
                  y: [0, -10, 0],
                  rotate: [0, -5, 0, 5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <img src={nextLogo} alt="Next.js" className="w-14 h-14 dark:invert" />
              </motion.div>

              {/* Laravel - Right */}
              <motion.div
                className="absolute top-1/2 -right-16 -translate-y-1/2 w-20 h-20 rounded-2xl bg-card/80 backdrop-blur-md border-2 border-primary/30 flex items-center justify-center shadow-lg"
                animate={{ 
                  x: [0, 20, 0],
                  rotate: [0, 10, 0, -10, 0]
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <img src={laravelLogo} alt="Laravel" className="w-12 h-12" />
              </motion.div>

              {/* Express.js - Bottom Right */}
              <motion.div
                className="absolute bottom-12 -right-8 w-22 h-22 rounded-2xl bg-card/80 backdrop-blur-md border-2 border-primary/30 flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, 10, 0],
                  rotate: [0, -8, 0, 8, 0]
                }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <img src={expressLogo} alt="Express.js" className="w-12 h-12 dark:invert" />
              </motion.div>

              {/* Vue.js - Bottom Left */}
              <motion.div
                className="absolute bottom-8 -left-12 w-24 h-24 rounded-2xl bg-card/80 backdrop-blur-md border-2 border-primary/30 flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, 12, 0],
                  x: [0, -10, 0],
                  rotate: [0, 6, 0, -6, 0]
                }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <img src={vueLogo} alt="Vue.js" className="w-14 h-14" />
              </motion.div>

              {/* TypeScript - Left */}
              <motion.div
                className="absolute top-1/2 -left-14 -translate-y-1/2 w-20 h-20 rounded-2xl bg-card/80 backdrop-blur-md border-2 border-primary/30 flex items-center justify-center shadow-lg"
                animate={{ 
                  x: [0, -15, 0],
                  rotate: [0, -10, 0, 10, 0]
                }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              >
                <img src={typescriptLogo} alt="TypeScript" className="w-12 h-12" />
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
