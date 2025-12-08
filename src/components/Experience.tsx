import { motion } from "framer-motion";
import { Briefcase, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Fullstack Laravel Developer",
    company: "Upwork",
    location: "Remote",
    startDate: "Apr 2024",
    endDate: "Present",
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
    startDate: "Apr 2023",
    endDate: "May 2024",
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
    startDate: "Nov 2022",
    endDate: "Apr 2024",
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
    startDate: "Jul 2022",
    endDate: "Sep 2022",
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

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="group relative bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                whileHover={{ y: -5 }}
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b ${exp.color}`} />
                
                <div className="pl-4">
                  {/* Header with title and date */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${exp.color} shadow-lg`}>
                        <Briefcase className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-primary font-semibold">{exp.company}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Date badge */}
                    <div className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-semibold shadow-md w-fit`}>
                      {exp.startDate} — {exp.endDate}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.span 
                        key={i} 
                        className="inline-flex items-center gap-1.5 text-sm bg-secondary/50 text-foreground/80 px-3 py-1.5 rounded-full"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        <ChevronRight className="h-3 w-3 text-primary" />
                        {achievement}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
