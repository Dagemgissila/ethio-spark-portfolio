import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, ChevronLeft, ChevronRight } from "lucide-react";
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
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "React — The Complete Guide 2025",
    issuer: "Udemy (incl. Next.js, Redux)",
    color: "from-emerald-500 to-teal-400",
  },
];

const Education = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: direction === "left" ? -320 : 320, behavior: "smooth" });
  };

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
          className="mb-14"
        >
          <TiltCard maxTilt={4}>
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-primary/10">
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-lg bg-primary/10 flex-shrink-0"
                  whileHover={{ rotate: -8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <GraduationCap className="h-8 w-8 text-primary" />
                </motion.div>
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

        {/* Certificates — horizontal scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-5"
        >
          <h3 className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
            Certificates
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll certificates left"
              className={`p-2 rounded-full border transition-all duration-300 ${
                canScrollLeft
                  ? "border-primary/50 hover:bg-primary/10 text-foreground"
                  : "border-border text-muted-foreground opacity-40 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll certificates right"
              className={`p-2 rounded-full border transition-all duration-300 ${
                canScrollRight
                  ? "border-primary/50 hover:bg-primary/10 text-foreground"
                  : "border-border text-muted-foreground opacity-40 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-72 sm:w-80 snap-start"
            >
              <TiltCard maxTilt={6}>
                <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-primary/10 h-full">
                  {/* Image placeholder */}
                  <div
                    className={`relative h-32 bg-gradient-to-br ${cert.color} flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Award className="h-12 w-12 text-white/90" />
                    </motion.div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-base font-bold text-foreground mb-1 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-primary font-medium text-sm">
                      {cert.issuer}
                    </p>
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
