import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Check, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import TiltCard from "@/components/TiltCard";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const projects = [
  {
    id: "ride-hailing",
    title: "Ride Hailing Application",
    description:
      "A scalable, real-time transportation platform with live driver/rider tracking and integrated local payments.",
    technologies: ["Node.js", "WebSockets", "Telebirr", "Docker"],
    images: [
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop",
    ],
    features: [
      "Real-time driver/rider location via WebSockets",
      "Telebirr payment gateway (C2B & B2C)",
      "RESTful APIs with auth & role-based access control",
      "Dockerized deployment with monitoring",
    ],
    role: "Fullstack Developer",
  },
  {
    id: "devflow",
    title: "DevFlow — Stack Overflow Clone",
    description:
      "A full-featured Q&A platform: AI-assisted answers, voting, tags, global search and a job finder — built solo.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "ShadCN UI"],
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    ],
    features: [
      "NextAuth login via Email, Google & GitHub",
      "AI-generated answers, voting & bookmarking",
      "Rich MDX content — images & code blocks",
      "Global search, tags & personalized recommendations",
    ],
    role: "Personal Project",
    liveUrl: "https://devflow-beige.vercel.app/",
  },
  {
    id: "wildlife-crime-database",
    title: "Ethiopian Wildlife Crime Database System",
    description:
      "A government system for recording, tracking and analyzing wildlife crime cases to support law enforcement and conservation agencies.",
    technologies: ["Laravel", "MySQL", "JavaScript", "Yajra DataTables"],
    images: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=500&fit=crop",
    ],
    features: [
      "Secure case recording, tracking & retrieval",
      "Reporting & analytics with crime-pattern filters",
      "Optimized relational models for data consistency",
    ],
    role: "Laravel Developer",
    duration: "Oct 2023 – Apr 2024",
    liveUrl: "https://wildlifecrime.gov.et/",
  },
  {
    id: "inventory-management",
    title: "Inventory Management System",
    description:
      "A responsive dashboard for managing products, categories, suppliers and stock levels, with real-time low-inventory alerts.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    images: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=500&fit=crop",
    ],
    features: [
      "RESTful APIs for CRUD & inventory tracking",
      "Real-time stock updates & low-inventory alerts",
      "Optimized queries and production deployment",
    ],
    role: "Fullstack Developer",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="projects">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            My Work
          </span>
          <h2 className="font-display text-2xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            A selection of production systems I've designed, built and shipped
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TiltCard maxTilt={8} className="group h-full">
              <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-primary/10 h-full flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button
                      onClick={() => openProject(project)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] tracking-wide px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => openProject(project)}
                      className="flex-1 border-primary text-primary hover:bg-primary/10"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-border hover:border-primary/50"
                      asChild
                    >
                      <a href="https://github.com/Dagemgissila" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[88vh] md:h-[620px] overflow-y-auto md:overflow-hidden bg-card/95 backdrop-blur-xl border-border p-0">
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 md:h-full"
              >
                {/* Left — image gallery */}
                <div className="relative bg-secondary/30 flex flex-col md:h-full">
                  <div className="relative h-64 md:h-auto md:flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    {/* Navigation arrows */}
                    <button
                      onClick={prevImage}
                      aria-label="Previous image"
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      aria-label="Next image"
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          aria-label={`Show image ${idx + 1}`}
                          className={`h-2 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? "bg-primary w-6"
                              : "bg-white/50 hover:bg-white/80 w-2"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Thumbnail strip */}
                  <div className="flex gap-2 p-3 flex-shrink-0 bg-secondary/30 border-t border-border overflow-x-auto">
                    {selectedProject.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex
                            ? "border-primary"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right — project info */}
                <div className="p-6 sm:p-8 md:h-full md:overflow-y-auto space-y-6">
                  <div>
                    <h2 className="font-display text-xl md:text-3xl font-bold text-foreground mb-3 pr-8">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] tracking-wide px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Role & Duration */}
                  {(selectedProject.role || selectedProject.duration) && (
                    <div className="flex gap-3 flex-wrap">
                      {selectedProject.role && (
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-lg">
                          <Layers className="w-3.5 h-3.5 text-primary" />
                          <span className="text-sm text-foreground font-medium">{selectedProject.role}</span>
                        </div>
                      )}
                      {selectedProject.duration && (
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg">
                          <span className="font-mono text-xs text-foreground">{selectedProject.duration}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  <div>
                    <h3 className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase mb-2">
                      About the Project
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase mb-3">
                      Key Features
                    </h3>
                    <div className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.08 }}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-secondary/50 transition-colors"
                        >
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    {selectedProject.liveUrl && (
                      <Button className="flex-1 bg-primary hover:bg-primary/90" asChild>
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Site
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" className="flex-1 border-border hover:border-primary" asChild>
                      <a href="https://github.com/Dagemgissila" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub Profile
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
