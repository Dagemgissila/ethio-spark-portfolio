import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Fullstack Laravel Developer",
    company: "Upwork",
    location: "Remote",
    period: "April 2024 - Present",
    description:
      "Building and maintaining web-based applications using Vue.js, Laravel, PHP, and MySQL. Developing scalable, secure, and user-friendly solutions for various business needs.",
    achievements: [
      "Delivered 15+ successful projects for international clients",
      "Maintained 100% client satisfaction rating",
      "Specialized in Laravel & Vue.js full-stack development"
    ]
  },
  {
    title: "Fullstack Laravel Developer",
    company: "Ibex Technologies and Promotion Plc",
    location: "Addis Ababa, Ethiopia",
    period: "April 2023 - May 2024",
    description:
      "Developed and maintained web applications using JavaScript, Vue.js and PHP Laravel. Designed and optimized MySQL databases. Created stock management and lottery systems.",
    achievements: [
      "Built enterprise stock management system",
      "Developed secure lottery platform with 10K+ users",
      "Optimized database queries for 60% performance improvement"
    ]
  },
  {
    title: "Fullstack Laravel Developer",
    company: "Synapses Software Solutions",
    location: "Addis Ababa, Ethiopia",
    period: "November 2022 - April 2024",
    description:
      "Built dynamic web applications using PHP Laravel and MySQL. Created interactive UIs with JavaScript, jQuery, and AJAX. Worked on Wild Crime Database System for government.",
    achievements: [
      "Developed government wildlife crime database system",
      "Implemented real-time data synchronization",
      "Created comprehensive reporting dashboard"
    ]
  },
  {
    title: "Laravel Developer",
    company: "Minister of Innovation and Technology",
    location: "Addis Ababa, Ethiopia",
    period: "July 2022 - September 2022",
    description:
      "Built and maintained web applications using PHP, Laravel, MySQL, Bootstrap, and JavaScript with responsive design.",
    achievements: [
      "Contributed to national technology initiatives",
      "Developed responsive government portals",
      "Collaborated with cross-functional teams"
    ]
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30" id="experience">
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
              Professional Journey
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building amazing things, one project at a time
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                {/* Accent line */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                        <span className="font-semibold text-foreground text-lg">
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1 text-sm">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-mono text-sm bg-primary/10 px-4 py-2 rounded-lg">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">Key Achievements:</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
