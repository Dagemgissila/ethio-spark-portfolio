import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import TiltCard from "@/components/TiltCard";

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
    <section className="py-20 px-4 bg-card/30 relative overflow-hidden" id="education">
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Background
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
            Education &amp; Certificates
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic background and continued learning
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <TiltCard maxTilt={4}>
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-primary/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {education.degree}
                      </h3>
                      <p className="text-primary font-semibold">
                        {education.school}
                      </p>
                    </div>
                    <span className="font-mono text-xs px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary whitespace-nowrap">
                      GPA {education.gpa}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide mb-4">
                    {education.period}
                  </p>
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
          </TiltCard>
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
              <TiltCard maxTilt={6}>
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-primary/10 h-full">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
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
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
