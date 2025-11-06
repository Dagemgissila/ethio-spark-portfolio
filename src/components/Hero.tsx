import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown, Code2, Palette, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Floating tech stack icons */}
      <motion.div
        className="absolute top-20 left-[15%] w-16 h-16 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Code2 className="w-8 h-8 text-primary" />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-[20%] w-20 h-20 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Palette className="w-10 h-10 text-primary" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-[10%] w-14 h-14 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Zap className="w-7 h-7 text-primary" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 right-[15%] w-16 h-16 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <Sparkles className="w-8 h-8 text-primary" />
      </motion.div>

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

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse" />
              <img 
                src={profileImage} 
                alt="Dagem Gissila - Full Stack Developer"
                className="relative w-full h-auto rounded-3xl object-cover border-4 border-primary/30 shadow-2xl"
              />
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
