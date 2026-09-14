import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const education = {
  degree: "B.Sc. Information Technology",
  school: "Arba Minch University",
  period: "September 2019 - September 2023",
  gpa: "3.51/4.00",
  highlights: [
    "Strong theoretical and practical knowledge in software engineering, web development, and system design",
    "Solid foundation in programming, data structures, algorithms, and database systems",
    "Academic projects focused on real-world problem solving and application development",
  ],
};

const certificates = [
  {
    title: "The Ultimate Next.js 15 Course",
    issuer: "JavaScript Mastery",
  },
  {
    title: "React — The Complete Guide 2025",
    issuer: "Udemy (incl. Next.js, Redux)",
  },
];

const Education = () => {
  return (
    <section className="py-20 px-4 bg-card/30" id="education">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-primary">Education</span>{" "}
            <span className="text-accent">
              & Certificates
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic background and certifications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {education.degree}
                </h3>
                <p className="text-primary font-semibold mb-1">
                  {education.school}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  {education.period}
                </p>
                <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary font-semibold mb-4">
                  GPA: {education.gpa}
                </div>
                <ul className="space-y-2">
                  {education.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow h-full">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-primary font-medium text-sm">
                      {cert.issuer}
                    </p>
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

export default Education;
