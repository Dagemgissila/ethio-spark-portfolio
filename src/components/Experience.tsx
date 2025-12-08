import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

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
    ],
    color: "from-emerald-500 to-teal-500"
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
    ],
    color: "from-blue-500 to-cyan-500"
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
    ],
    color: "from-violet-500 to-purple-500"
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
    ],
    color: "from-orange-500 to-amber-500"
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="experience">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Career Path
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Professional</span>{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building amazing things, one project at a time
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 md:-translate-x-1/2 z-10">
                  <motion.div 
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color} animate-ping opacity-20`} />
                </div>

                {/* Date badge - visible on desktop */}
                <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? "justify-end pr-12" : "justify-start pl-12"}`}>
                  <motion.div 
                    className="flex items-center gap-2 text-sm font-mono bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 shadow-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{exp.period}</span>
                  </motion.div>
                </div>

                {/* Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <motion.div
                    className="group relative bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                    whileHover={{ y: -5 }}
                  >
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Mobile date */}
                    <div className="md:hidden flex items-center gap-2 text-xs font-mono text-muted-foreground mb-3">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </div>

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} shadow-lg`}>
                        <Briefcase className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-start gap-2 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          <ChevronRight className={`h-4 w-4 mt-0.5 flex-shrink-0 text-transparent bg-gradient-to-r ${exp.color} bg-clip-text`} style={{ color: index === 0 ? '#10b981' : index === 1 ? '#3b82f6' : index === 2 ? '#8b5cf6' : '#f97316' }} />
                          <span className="text-foreground/80">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
