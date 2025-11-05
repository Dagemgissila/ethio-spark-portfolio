import { motion } from "framer-motion";
import { Code2, Database, GitBranch, Server, Smartphone, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python", "PHP", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks",
    icon: Globe,
    items: ["Laravel", "Vue.js", "React.js", "Next.js", "Nuxt.js"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["MySQL", "Database Optimization", "Query Performance"],
  },
  {
    category: "Tools",
    icon: GitBranch,
    items: ["Git", "Composer", "NPM", "Agile"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["RESTful APIs", "API Development", "Laravel"],
  },
  {
    category: "Frontend",
    icon: Smartphone,
    items: ["Responsive Design", "Modern UI/UX", "SPA Development"],
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
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
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
