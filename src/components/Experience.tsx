import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Fullstack Laravel Developer",
    company: "Upwork",
    location: "Remote",
    period: "April 2024 - Present",
    description:
      "Building and maintaining web-based applications using Vue.js, Laravel, PHP, and MySQL. Developing scalable, secure, and user-friendly solutions for various business needs.",
  },
  {
    title: "Fullstack Laravel Developer",
    company: "Ibex Technologies and Promotion Plc",
    location: "Addis Ababa, Ethiopia",
    period: "April 2023 - May 2024",
    description:
      "Developed and maintained web applications using JavaScript, Vue.js and PHP Laravel. Designed and optimized MySQL databases. Created stock management and lottery systems.",
  },
  {
    title: "Fullstack Laravel Developer",
    company: "Synapses Software Solutions",
    location: "Addis Ababa, Ethiopia",
    period: "November 2022 - April 2024",
    description:
      "Built dynamic web applications using PHP Laravel and MySQL. Created interactive UIs with JavaScript, jQuery, and AJAX. Worked on Wild Crime Database System for government.",
  },
  {
    title: "Laravel Developer",
    company: "Minister of Innovation and Technology",
    location: "Addis Ababa, Ethiopia",
    period: "July 2022 - September 2022",
    description:
      "Built and maintained web applications using PHP, Laravel, MySQL, Bootstrap, and JavaScript with responsive design.",
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-4" id="experience">
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
              My Professional Journey
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building innovative solutions across diverse projects
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:text-left"
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-6 w-4 h-4 rounded-full bg-primary ring-4 ring-background left-[1.875rem] md:left-1/2 md:-translate-x-1/2 ${
                index % 2 === 0 ? "md:left-[calc(50%-0.5rem)]" : "md:left-[calc(50%+0.5rem)]"
              }`}>
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
              </div>
              
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
                >
                  <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm text-primary font-semibold px-3 py-1 rounded-full bg-primary/10">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  
                  <p className="text-lg font-semibold text-primary mb-1">
                    {exp.company}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    {exp.location}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
