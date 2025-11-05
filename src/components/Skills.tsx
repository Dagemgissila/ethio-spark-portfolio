import { motion } from "framer-motion";
import { Code2, Database, GitBranch, Server, Smartphone, Globe, FileCode, Blocks, Boxes, Package, Cloud, Layout } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: [
      { name: "Python", icon: FileCode },
      { name: "PHP", icon: FileCode },
      { name: "JavaScript", icon: Code2 },
      { name: "TypeScript", icon: Code2 }
    ],
  },
  {
    category: "Frameworks",
    icon: Blocks,
    items: [
      { name: "Laravel", icon: Server },
      { name: "Vue.js", icon: Globe },
      { name: "React.js", icon: Globe },
      { name: "Next.js", icon: Layout },
      { name: "Nuxt.js", icon: Layout }
    ],
  },
  {
    category: "Database",
    icon: Database,
    items: [
      { name: "MySQL", icon: Database },
      { name: "Database Optimization", icon: Database },
      { name: "Query Performance", icon: Database }
    ],
  },
  {
    category: "Tools",
    icon: GitBranch,
    items: [
      { name: "Git", icon: GitBranch },
      { name: "Composer", icon: Package },
      { name: "NPM", icon: Package },
      { name: "Agile", icon: Boxes }
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "RESTful APIs", icon: Cloud },
      { name: "API Development", icon: Server },
      { name: "Laravel", icon: Server }
    ],
  },
  {
    category: "Frontend",
    icon: Smartphone,
    items: [
      { name: "Responsive Design", icon: Smartphone },
      { name: "Modern UI/UX", icon: Layout },
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
                  {skill.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <li
                        key={item.name}
                        className="text-muted-foreground flex items-center gap-3 group/item"
                      >
                        <div className="p-1.5 rounded bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                          <ItemIcon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="group-hover/item:text-foreground transition-colors">
                          {item.name}
                        </span>
                      </li>
                    );
                  })}
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
