import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const experiences = [
  {
    title: "Fullstack Developer",
    company: "Safaricom Ethiopia",
    location: "Addis Ababa, Ethiopia",
    startDate: "May 2026",
    endDate: "Present",
    current: true,
    description:
      "Developing and maintaining internal enterprise systems using Next.js, React.js, Node.js and NestJS. Building scalable backend services and RESTful APIs, and shipping through Docker, Kubernetes and Helm.",
    achievements: [
      "Built RBAC, auth and business workflows for internal systems",
      "Deployed via Argo CD and Jenkins CI/CD pipelines",
      "Containerized services with Docker, Kubernetes and Helm",
    ],
  },
  {
    title: "Software Developer",
    company: "Ashewa Technologies Solutions",
    location: "Addis Ababa, Ethiopia",
    startDate: "Aug 2024",
    endDate: "Mar 2026",
    current: false,
    description:
      "Developed and maintained full-stack web applications using Laravel, Node.js, PostgreSQL and Express.js, including real-time features and third-party payment integrations.",
    achievements: [
      "Built RESTful APIs and WebSocket real-time communication",
      "Integrated payment gateways for secure transactions",
      "Added Redis caching and containerized with Docker",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Freelance",
    location: "Remote",
    startDate: "Apr 2024",
    endDate: "Aug 2025",
    current: false,
    description:
      "Built and maintained full-stack web applications for various clients using React.js, Next.js, Node.js, Express.js and Laravel, with JWT-based auth and automated deployment pipelines.",
    achievements: [
      "Designed scalable backend architectures for client projects",
      "Set up CI/CD with GitHub Actions and Jenkins",
      "Containerized and deployed to cloud and VPS servers",
    ],
  },
  {
    title: "Laravel Developer",
    company: "Synapse Software Solutions",
    location: "Addis Ababa, Ethiopia",
    startDate: "Oct 2023",
    endDate: "Apr 2024",
    current: false,
    description:
      "Developed dynamic web applications using PHP (Laravel) and MySQL, including a government Wildlife Crime Database System focused on performance and secure data management.",
    achievements: [
      "Contributed to a government wildlife crime database system",
      "Built interactive UIs with JavaScript, jQuery and AJAX",
      "Deployed and managed production cPanel environments",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="experience">
      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Career Path
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
            Professional Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            Three years of building production systems
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" aria-hidden />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative pl-8"
              >
                {/* Timeline dot */}
                <span
                  className={`absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2 ${
                    exp.current
                      ? "bg-primary border-primary shadow-glow"
                      : "bg-background border-muted-foreground/40"
                  }`}
                  aria-hidden
                />

                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wide mb-1.5">
                  {exp.startDate} — {exp.endDate}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-0.5">{exp.title}</h3>
                <div className="flex items-center gap-2 text-sm mb-3 flex-wrap">
                  <span className="text-primary font-medium">{exp.company}</span>
                  <span className="text-muted-foreground/50">·</span>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4 max-w-xl">
                  {exp.description}
                </p>

                <ul className="space-y-1.5">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
