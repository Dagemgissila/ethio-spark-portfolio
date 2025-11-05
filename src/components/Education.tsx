import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const education = {
  degree: "Bachelor's of Information Technology",
  school: "Arbaminch University Ethiopia",
  period: "September 2019 - September 2023",
  gpa: "3.51/4.0",
  highlights: [
    "Comprehensive knowledge in software development and database management",
    "System design and architecture",
    "Web application development and optimization projects",
  ],
};

const certificates = [
  {
    title: "The Ultimate Next.js 15",
    issuer: "Javascript Mastery",
    period: "May 2025 - June 2025",
  },
  {
    title: "React - The Complete Guide 2025",
    issuer: "Udemy",
    period: "January 2025 - February 2025",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Education & Certificates
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
                    <p className="text-primary font-medium text-sm mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {cert.period}
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
