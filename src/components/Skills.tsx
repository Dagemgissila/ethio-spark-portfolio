import { motion } from "framer-motion";
import { Server, Database, Cog, Code2, MapPin, Briefcase, Github, Linkedin } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import Magnetic from "@/components/Magnetic";

type Skill = { name: string; icon?: string };

const coreStack = [
  "Next.js",
  "React.js",
  "NestJS",
  "Node.js",
  "Laravel",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
];

// Tech stack data organized by category — mirrors the Skills section of the CV
const skillCategories: { title: string; icon: typeof Code2; color: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-purple-500 to-pink-400",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "PHP (Laravel)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    ],
  },
  {
    title: "Data",
    icon: Database,
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Prisma" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    ],
  },
  {
    title: "DevOps",
    icon: Cog,
    color: "from-orange-500 to-amber-400",
    skills: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Helm" },
      { name: "Jenkins CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "GitLab CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
      { name: "GitHub Actions" },
      { name: "Argo CD" },
    ],
  },
];

// All skills for horizontal scroll
const allSkills: Skill[] = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const duplicatedSkills = [...allSkills, ...allSkills];

const Skills = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="skills">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      {/* About Me Section */}
      <div className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
              About Me
            </span>
            <h2 className="text-xl md:text-4xl font-bold mb-6 font-display tracking-tight text-foreground">
              Who I Am
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-base md:text-lg">
                I'm a <span className="text-foreground font-semibold">Full-Stack Developer</span> specializing in
                <span className="text-foreground font-medium"> TypeScript</span>,
                <span className="text-foreground font-medium"> Node.js</span>,
                <span className="text-foreground font-medium"> NestJS</span>,
                <span className="text-foreground font-medium"> React</span>, and
                <span className="text-foreground font-medium"> Next.js</span>, with a strong focus on backend
                development and scalable web applications.
              </p>
              <p className="text-base md:text-lg">
                I enjoy building reliable APIs, business logic, authentication systems, database-driven
                applications, and third-party integrations. I also have hands-on experience with
                <span className="text-foreground font-medium"> PostgreSQL</span>,
                <span className="text-foreground font-medium"> Prisma</span>,
                <span className="text-foreground font-medium"> Redis</span>,
                <span className="text-foreground font-medium"> Docker</span>,
                <span className="text-foreground font-medium"> Kubernetes</span>,
                <span className="text-foreground font-medium"> Helm</span>,
                <span className="text-foreground font-medium"> Jenkins</span>, and
                <span className="text-foreground font-medium"> Argo CD</span>, giving me experience across both
                software development and deployment.
              </p>
              <p className="text-base md:text-lg">
                I'm passionate about backend engineering, system design, DevOps, and continuous learning, and
                I'm always looking for better ways to build clean, maintainable, and production-ready software.
              </p>
            </div>
          </motion.div>

          {/* At a glance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
          <TiltCard maxTilt={5}>
          <div className="rounded-xl border border-border bg-card p-6 sm:p-7 shadow-md">
            <div className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase mb-5">
              At a Glance
            </div>

            <div className="flex items-start gap-3 mb-5">
              <Briefcase className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <div>
                <div className="text-sm font-semibold text-foreground">Fullstack Developer</div>
                <div className="text-sm text-primary">Safaricom Ethiopia</div>
                <div className="font-mono text-xs text-muted-foreground mt-0.5">May 2026 — Present</div>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
              <div className="text-sm text-foreground">Addis Ababa, Ethiopia</div>
            </div>

            <div className="h-px bg-border mb-6" />

            <div className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase mb-3">
              Core Stack
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {coreStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="font-mono text-xs px-2.5 py-1.5 rounded-md bg-secondary/60 border border-border text-foreground/80 hover:border-primary/50 hover:text-primary hover:shadow-glow transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Magnetic strength={0.35}>
                <a
                  href="https://github.com/Dagemgissila"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="flex p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Magnetic>
              <Magnetic strength={0.35}>
                <a
                  href="https://www.linkedin.com/in/dagem-gissila-999987243/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Magnetic>
            </div>
          </div>
          </TiltCard>
          </motion.div>
        </div>
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
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            My Expertise
          </span>
          <h3 className="font-display text-2xl md:text-5xl font-bold tracking-tight text-foreground">
            Technical Skills
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
              <TiltCard maxTilt={8}>
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 h-full relative overflow-hidden">
                {/* Decorative blob */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.color} opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`} />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>

                  <h4 className="font-display text-lg font-bold text-foreground mb-4">{category.title}</h4>

                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 group/skill"
                      >
                        <div className="w-8 h-8 rounded-lg bg-background/50 p-1.5 group-hover/skill:scale-110 transition-transform flex items-center justify-center">
                          {skill.icon ? (
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-full h-full object-contain dark:brightness-110"
                            />
                          ) : (
                            <span className="font-mono text-[10px] font-semibold text-primary">
                              {skill.name.slice(0, 2).toUpperCase()}
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </TiltCard>
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
              <motion.div
                key={`${skill.name}-${index}`}
                whileHover={{ y: -6, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex-shrink-0 flex flex-col items-center gap-1 md:gap-2 p-2 md:px-6 md:py-4 rounded-full md:rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-colors duration-300 cursor-pointer group min-w-[56px] md:min-w-[100px]"
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
