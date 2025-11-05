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
    <section className="py-20 px-4 bg-card/30" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
              } md:w-1/2`}
            >
              <div className="absolute left-0 md:left-auto md:right-[-1.75rem] top-0 w-3 h-3 rounded-full bg-primary ring-4 ring-background md:translate-x-0 md:group-even:left-[-1.75rem]" />
              
              <div className="ml-8 md:ml-0 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span className="text-sm text-primary font-medium">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {exp.title}
                </h3>
                <p className="text-primary font-medium mb-1">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-3">
                  {exp.location}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
