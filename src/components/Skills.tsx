import { motion } from "framer-motion";

// Import technology logos
import pythonLogo from "@/assets/skills/python.svg";
import phpLogo from "@/assets/skills/php.svg";
import jsLogo from "@/assets/skills/javascript.svg";
import tsLogo from "@/assets/skills/typescript.svg";
import laravelLogo from "@/assets/skills/laravel.svg";
import vueLogo from "@/assets/skills/vue.svg";
import reactLogo from "@/assets/skills/react.svg";
import nextLogo from "@/assets/skills/nextjs.svg";
import nuxtLogo from "@/assets/skills/nuxt.svg";
import mysqlLogo from "@/assets/skills/mysql.svg";
import gitLogo from "@/assets/skills/git.svg";
import composerLogo from "@/assets/skills/composer.svg";
import npmLogo from "@/assets/skills/npm.svg";
import expressLogo from "@/assets/skills/express.svg";

const techStack = [
  { name: "Python", logo: pythonLogo },
  { name: "PHP", logo: phpLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "TypeScript", logo: tsLogo },
  { name: "Laravel", logo: laravelLogo },
  { name: "Vue.js", logo: vueLogo },
  { name: "React.js", logo: reactLogo },
  { name: "Next.js", logo: nextLogo },
  { name: "Nuxt.js", logo: nuxtLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "Git", logo: gitLogo },
  { name: "Composer", logo: composerLogo },
  { name: "NPM", logo: npmLogo },
  { name: "Express.js", logo: expressLogo },
];

// Duplicate for seamless loop
const duplicatedTechStack = [...techStack, ...techStack];

const Skills = () => {
  return (
    <section className="py-20 bg-card/30" id="skills">
      {/* About Me - Full Width */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-accent">About</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg md:text-xl">
              I'm a passionate Full-Stack Developer with expertise in building modern, scalable web applications. 
              With a strong foundation in both frontend and backend technologies, I create seamless digital experiences 
              that solve real-world problems.
            </p>
            <p className="text-base md:text-lg">
              My journey in web development has equipped me with a diverse skill set spanning multiple frameworks 
              and languages. I specialize in creating responsive, user-friendly interfaces with React, Vue.js, and Next.js, 
              while building robust backends with Laravel and PHP.
            </p>
            <p className="text-base md:text-lg">
              I'm committed to writing clean, maintainable code and staying updated with the latest industry trends. 
              Whether it's optimizing database queries, architecting RESTful APIs, or crafting beautiful UIs, 
              I approach every project with attention to detail and a focus on quality.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack - Full Width Horizontal Scroll */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 px-4"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-foreground">My</span>{" "}
            <span className="text-primary">
              Tech Stack
            </span>
          </h3>
          <p className="text-muted-foreground">Technologies I work with daily</p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling content */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -50 * techStack.length * 1.5],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedTechStack.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 cursor-pointer group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-background/50 p-2 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
