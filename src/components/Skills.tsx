import { motion } from "framer-motion";
import { Code2, Database, GitBranch, Server, Smartphone, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

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

const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: [
      { name: "Python", logo: pythonLogo },
      { name: "PHP", logo: phpLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "TypeScript", logo: tsLogo }
    ],
  },
  {
    category: "Frameworks",
    icon: Globe,
    items: [
      { name: "Laravel", logo: laravelLogo },
      { name: "Vue.js", logo: vueLogo },
      { name: "React.js", logo: reactLogo },
      { name: "Next.js", logo: nextLogo },
      { name: "Nuxt.js", logo: nuxtLogo }
    ],
  },
  {
    category: "Database",
    icon: Database,
    items: [
      { name: "MySQL", logo: mysqlLogo },
      { name: "Database Optimization", icon: Database },
      { name: "Query Performance", icon: Database }
    ],
  },
  {
    category: "Tools",
    icon: GitBranch,
    items: [
      { name: "Git", logo: gitLogo },
      { name: "Composer", logo: composerLogo },
      { name: "NPM", logo: npmLogo },
      { name: "Agile", icon: GitBranch }
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "RESTful APIs", icon: Server },
      { name: "API Development", icon: Server },
      { name: "Laravel", logo: laravelLogo }
    ],
  },
  {
    category: "Frontend",
    icon: Smartphone,
    items: [
      { name: "Responsive Design", icon: Smartphone },
      { name: "Modern UI/UX", icon: Smartphone },
      { name: "SPA Development", icon: Globe }
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li
                      key={item.name}
                      className="text-muted-foreground flex items-center gap-3 group/item"
                    >
                      <div className="p-1.5 rounded bg-card-foreground/5 group-hover/item:bg-primary/10 transition-colors">
                        {item.logo ? (
                          <img 
                            src={item.logo} 
                            alt={item.name}
                            className="w-5 h-5 object-contain"
                          />
                        ) : (
                          <item.icon className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <span className="group-hover/item:text-foreground transition-colors">
                        {item.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
