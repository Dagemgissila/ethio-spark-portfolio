import { motion } from "framer-motion";
import { Server, Database, Cog, Code2 } from "lucide-react";

// Tech stack data organized by category
const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-purple-500 to-pink-400",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Nest.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Cog,
    color: "from-orange-500 to-amber-400",
    skills: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    ],
  },
];

// All skills for horizontal scroll
const allSkills = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Nest.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "TanStack", icon: "https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg" },
];

const duplicatedSkills = [...allSkills, ...allSkills];

const Skills = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="skills">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      {/* About Me Section */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            ABOUT ME
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 font-display tracking-tight">
            <span className="text-foreground">Who</span>{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Am I?
            </span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
            <p className="text-base md:text-lg">
              I am a dedicated <span className="text-primary font-semibold">Full Stack Developer</span> with expertise in 
              building scalable, high-performance web applications. I specialize in modern frontend frameworks 
              including <span className="text-foreground font-medium">React</span>, <span className="text-foreground font-medium">Vue.js</span>, and 
              <span className="text-foreground font-medium"> Next.js</span>, alongside robust backend technologies such as 
              <span className="text-foreground font-medium"> Node.js</span>, <span className="text-foreground font-medium">Nest.js</span>, and 
              <span className="text-foreground font-medium"> Laravel</span>.
            </p>
            <p className="text-base md:text-lg">
              With a strong foundation in database management, API development, and DevOps practices, 
              I deliver end-to-end solutions that are both performant and maintainable. I am passionate 
              about writing clean, efficient code and staying current with industry best practices.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Technical Skills Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
            MY EXPERTISE
          </span>
          <h3 className="text-3xl md:text-5xl font-black font-display">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent underline decoration-primary/30 decoration-4 underline-offset-8">
              Technical Skills
            </span>
          </h3>
        </motion.div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 h-full relative overflow-hidden">
                {/* Decorative blob */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.color} opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-foreground mb-4">{category.title}</h4>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill.name}
                        className="flex items-center gap-3 group/skill"
                      >
                        <div className="w-8 h-8 rounded-lg bg-background/50 p-1.5 group-hover/skill:scale-110 transition-transform">
                          <img 
                            src={skill.icon} 
                            alt={skill.name}
                            className="w-full h-full object-contain dark:brightness-110"
                          />
                        </div>
                        <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack Highlights - Horizontal Scroll */}
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 px-4"
        >
          <h4 className="text-xl md:text-2xl font-bold text-foreground">
            Tech Stack <span className="text-primary">Highlights</span>
          </h4>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling content */}
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -100 * allSkills.length],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center gap-1 md:gap-2 p-2 md:px-6 md:py-4 rounded-full md:rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group min-w-[56px] md:min-w-[100px]"
              >
                <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full md:rounded-xl bg-background/50 p-1.5 md:p-2 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-full h-full object-contain dark:brightness-110"
                  />
                </div>
                <span className="text-[10px] md:text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap hidden md:block">
                  {skill.name}
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
