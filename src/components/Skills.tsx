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
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-card/30" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Me Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a passionate Full-Stack Developer with expertise in building modern, scalable web applications. 
                With a strong foundation in both frontend and backend technologies, I create seamless digital experiences 
                that solve real-world problems.
              </p>
              <p>
                My journey in web development has equipped me with a diverse skill set spanning multiple frameworks 
                and languages. I specialize in creating responsive, user-friendly interfaces with React, Vue.js, and Next.js, 
                while building robust backends with Laravel and PHP.
              </p>
              <p>
                I'm committed to writing clean, maintainable code and staying updated with the latest industry trends. 
                Whether it's optimizing database queries, architecting RESTful APIs, or crafting beautiful UIs, 
                I approach every project with attention to detail and a focus on quality.
              </p>
            </div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Technologies I work with daily
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-background/50 p-2 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
