import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Kyle Harrison",
    role: "Co-founder & CEO at Conversant, Ex-Google 10+ yrs",
    content: "Dagem has made a significant impact on our startup. He set up and managed our development environment, architected our entire backend ingestion infrastructure, and optimized our integrations with LLM providers. He takes full ownership of projects from end to end, ensuring the quality of the output...",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    linkedIn: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "CTO at TechVentures",
    content: "Working with Dagem was an exceptional experience. His technical expertise in React and Node.js helped us deliver our platform 3 months ahead of schedule. His attention to detail and problem-solving skills are remarkable.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    linkedIn: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Michael Roberts",
    role: "Product Manager at InnovateTech",
    content: "Dagem's full-stack capabilities transformed our product development process. He built robust APIs with Laravel and beautiful interfaces with Vue.js. His code quality and documentation are exemplary.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    linkedIn: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Emily Zhang",
    role: "Startup Founder",
    content: "I've worked with many developers, but Dagem stands out for his reliability and expertise. He helped us scale our application to handle 100x traffic increase with his optimization skills.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    linkedIn: "https://linkedin.com",
  },
];

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      
      // Calculate current index
      const cardWidth = 600;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="testimonials">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            CLIENT FEEDBACK
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-display mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent underline decoration-accent/30 decoration-4 underline-offset-8">
              Testimonials
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's what people are saying about my work. Find more reviews on my{" "}
            <a href="https://linkedin.com" className="text-primary hover:underline inline-flex items-center gap-1">
              LinkedIn profile <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </motion.div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-3 rounded-full border transition-all duration-300 ${
              canScrollLeft
                ? "border-primary/50 hover:bg-primary/10 text-foreground"
                : "border-border text-muted-foreground opacity-50 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-3 rounded-full border transition-all duration-300 ${
              canScrollRight
                ? "border-primary/50 hover:bg-primary/10 text-foreground"
                : "border-border text-muted-foreground opacity-50 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Testimonials slider */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[90vw] max-w-[580px] snap-center"
              >
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 h-full relative group">
                  {/* Quote icon */}
                  <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/20" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-8 leading-relaxed text-base italic relative z-10">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 relative z-10">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <a
                        href={testimonial.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline inline-flex items-center gap-1 mt-1"
                      >
                        View on LinkedIn <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
