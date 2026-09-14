import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const projectsData = [
  {
    id: "ride-hailing",
    title: "Ride Hailing Application",
    description:
      "A scalable, real-time transportation platform with live driver/rider tracking and integrated local payments.",
    longDescription:
      "Designed and developed a ride-hailing application using modern full-stack technologies, with real-time communication between drivers and riders via WebSockets for live location and trip updates. Integrated the Telebirr payment gateway (C2B & B2C) for secure digital transactions, developed the REST APIs, and handled authentication, authorization and role-based access control. Dockerized and deployed to production with monitoring.",
    technologies: ["Node.js", "WebSockets", "Telebirr", "Docker"],
    images: [
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop",
    ],
    features: [
      "Real-time driver/rider location via WebSockets",
      "Telebirr payment gateway (C2B & B2C)",
      "RESTful APIs with auth & role-based access control",
      "Dockerized deployment with monitoring",
    ],
    role: "Fullstack Developer",
    liveUrl: null as string | null,
  },
  {
    id: "devflow",
    title: "DevFlow — Stack Overflow Clone",
    description:
      "A full-featured Q&A platform: AI-assisted answers, voting, tags, global search and a job finder — built solo.",
    longDescription:
      "A Stack Overflow-style Q&A platform built with Next.js, TypeScript and MongoDB. Implemented secure authentication with NextAuth (Email/Password, Google, GitHub), core features including question posting, AI-generated answers, voting, bookmarking and rich MDX content support. Designed home page filters, global search, tags and personalized recommendations, plus community features like profiles, badges, activity tracking and a location-based job finder.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "ShadCN UI", "NextAuth"],
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop",
    ],
    features: [
      "NextAuth login via Email, Google & GitHub",
      "AI-generated answers, voting & bookmarking",
      "Rich MDX content — images & code blocks",
      "Global search, tags & personalized recommendations",
      "User profiles, badges & a location-based job finder",
    ],
    role: "Personal Project",
    liveUrl: "https://devflow-beige.vercel.app/",
  },
  {
    id: "wildlife-crime-database",
    title: "Ethiopian Wildlife Crime Database System",
    description:
      "A government system for recording, tracking and analyzing wildlife crime cases to support law enforcement and conservation agencies.",
    longDescription:
      "A secure database system for recording, tracking and retrieving wildlife crime cases, built to improve decision-making for law enforcement and conservation agencies in Ethiopia. Implemented reporting and analytics features with filters to surface crime patterns, and structured relational models to ensure data consistency, scalability and usability.",
    technologies: ["Laravel", "MySQL", "JavaScript", "Yajra DataTables"],
    images: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&h=800&fit=crop",
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
    longDescription:
      "Built responsive, user-friendly dashboards for managing products, categories, suppliers and stock levels. Designed and implemented RESTful APIs for CRUD operations and inventory tracking, added real-time stock updates and low-inventory alerts to improve operational efficiency, and optimized database queries for production deployment.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    images: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&h=800&fit=crop",
    ],
    features: [
      "RESTful APIs for CRUD & inventory tracking",
      "Real-time stock updates & low-inventory alerts",
      "Optimized queries and production deployment",
    ],
    role: "Fullstack Developer",
    liveUrl: null as string | null,
  },
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

          {/* Role & duration */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Layers className="h-5 w-5 text-primary" />
              <span className="font-mono text-sm">{project.role}</span>
            </div>
            {project.duration && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="font-mono text-sm">{project.duration}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {project.liveUrl && (
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Site
                </a>
              </Button>
            )}
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/Dagemgissila" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub Profile
              </a>
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
