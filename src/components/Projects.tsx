import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, X, Check, Layers } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = [
  {
    id: "stock-management",
    title: "Stock Management System",
    description:
      "A comprehensive inventory management solution built with Laravel and Vue.js featuring real-time tracking, automated alerts, and detailed analytics.",
    technologies: ["Laravel", "Vue.js", "MySQL", "JavaScript"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    features: [
      "Real-time inventory tracking",
      "Automated low-stock alerts",
      "Detailed analytics dashboard",
      "Multi-warehouse support",
      "Barcode scanning integration",
    ],
    role: "Full Stack Developer",
    duration: "3 months",
  },
  {
    id: "lottery-system",
    title: "Lottery System",
    description:
      "An advanced lottery platform with secure random number generation, user management, and automated prize distribution system.",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&h=500&fit=crop",
    features: [
      "Secure random number generation",
      "User account management",
      "Automated prize distribution",
      "Payment gateway integration",
      "Real-time draw results",
    ],
    role: "Backend Developer",
    duration: "4 months",
  },
  {
    id: "wild-crime-database",
    title: "Wild Crime Database System",
    description:
      "Government project for tracking and managing wildlife crime data with advanced security features and comprehensive reporting.",
    technologies: ["Laravel", "jQuery", "AJAX", "MySQL"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    features: [
      "Secure data encryption",
      "Role-based access control",
      "Comprehensive reporting",
      "Data visualization",
      "Audit trail logging",
    ],
    role: "Lead Developer",
    duration: "6 months",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="py-20 px-4 relative" id="projects">
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
            MY WORK
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-display mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured
            </span>{" "}
            <span className="text-accent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Some of my recent work that showcases my skills and expertise
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
              <Card className="overflow-hidden bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group h-full flex flex-col">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button
                      onClick={() => setSelectedProject(project)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 border-primary text-primary hover:bg-primary/10"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-border hover:border-primary/50"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-border">
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary-foreground backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-6">
                  {/* Role & Duration */}
                  <div className="flex gap-4 flex-wrap">
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                      <Layers className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{selectedProject.role}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-lg">
                      <span className="text-sm text-foreground">Duration: {selectedProject.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">About the Project</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                        >
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Button className="flex-1 bg-primary hover:bg-primary/90">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="flex-1 border-border hover:border-primary">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
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
