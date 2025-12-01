import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const projectsData = [
  {
    id: "stock-management",
    title: "Stock Management System",
    description:
      "A comprehensive inventory management solution built with Laravel and Vue.js featuring real-time tracking, automated alerts, and detailed analytics.",
    longDescription:
      "This enterprise-grade inventory management system was designed to streamline stock tracking across multiple warehouses. The system provides real-time inventory updates, automated low-stock alerts, and comprehensive analytics dashboard. Built with a Laravel backend and Vue.js frontend, it handles thousands of transactions daily with sub-second response times.",
    technologies: ["Laravel", "Vue.js", "MySQL", "JavaScript", "Redis", "Docker"],
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop"
    ],
    features: [
      "Real-time inventory tracking across multiple locations",
      "Automated low-stock alerts and reorder suggestions",
      "Advanced analytics and reporting dashboard",
      "Barcode scanning integration",
      "Multi-user role management",
      "RESTful API for third-party integrations"
    ],
    stats: {
      duration: "6 months",
      team: "4 developers",
      lines: "50K+"
    },
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "lottery-system",
    title: "Lottery System",
    description:
      "An advanced lottery platform with secure random number generation, user management, and automated prize distribution system.",
    longDescription:
      "A secure and scalable lottery platform that handles thousands of concurrent users during draw events. The system implements cryptographically secure random number generation, real-time ticket purchase validation, and automated prize distribution. Built with Laravel and modern JavaScript, it ensures fair play and transparent operations.",
    technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery", "WebSockets"],
    images: [
      "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1534951009808-766178b47a4f?w=1200&h=800&fit=crop"
    ],
    features: [
      "Cryptographically secure random number generation",
      "Real-time draw broadcasting",
      "Automated prize distribution",
      "User ticket management dashboard",
      "Payment gateway integration",
      "Comprehensive audit logging"
    ],
    stats: {
      duration: "4 months",
      team: "3 developers",
      lines: "35K+"
    },
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "wild-crime-database",
    title: "Wild Crime Database System",
    description:
      "Government project for tracking and managing wildlife crime data with advanced security features and comprehensive reporting.",
    longDescription:
      "A specialized database system developed for government agencies to track and analyze wildlife crime patterns. The system features advanced security protocols, encrypted data storage, and comprehensive reporting tools. Built with Laravel and modern web technologies, it helps law enforcement agencies coordinate efforts and identify crime patterns.",
    technologies: ["Laravel", "jQuery", "AJAX", "MySQL", "PHP", "ChartJS"],
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop"
    ],
    features: [
      "Secure case management system",
      "Geographic crime pattern visualization",
      "Multi-agency data sharing",
      "Advanced search and filtering",
      "Automated report generation",
      "Role-based access control"
    ],
    stats: {
      duration: "8 months",
      team: "5 developers",
      lines: "60K+"
    },
    liveUrl: "#",
    githubUrl: "#"
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            {project.description}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-mono text-sm">{project.stats.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-mono text-sm">{project.stats.team}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Code className="h-5 w-5 text-primary" />
              <span className="font-mono text-sm">{project.stats.lines} lines</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
            <Button size="lg" variant="outline">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Button>
          </div>
        </div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-2xl mb-12"
        >
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-[400px] md:h-[600px] object-cover"
          />
        </motion.div>

        {/* Technologies */}
        <Card className="p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 font-mono text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>

        {/* Description */}
        <Card className="p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">About This Project</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {project.longDescription}
          </p>
        </Card>

        {/* Features */}
        <Card className="p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50"
              >
                <span className="text-primary mt-1">▸</span>
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Additional Images */}
        {project.images.length > 1 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 2}`}
                    className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
