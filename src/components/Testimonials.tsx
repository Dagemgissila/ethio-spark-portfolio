import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content: "Dagem delivered exceptional work on our web application. His attention to detail and technical expertise transformed our vision into reality. Highly recommended!",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at InnovateCo",
    content: "Working with Dagem was a fantastic experience. He understood our requirements perfectly and delivered a scalable solution that exceeded our expectations.",
    rating: 5,
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Williams",
    role: "Founder at DesignHub",
    content: "Dagem's full-stack expertise was exactly what we needed. From frontend to backend, he handled everything with professionalism and delivered on time.",
    rating: 5,
    avatar: "EW"
  },
  {
    id: 4,
    name: "David Park",
    role: "CTO at CloudBase",
    content: "Exceptional developer with great communication skills. Dagem built our entire platform from scratch and the code quality is outstanding.",
    rating: 5,
    avatar: "DP"
  },
  {
    id: 5,
    name: "Lisa Martinez",
    role: "Director at WebFlow",
    content: "Dagem's problem-solving skills are remarkable. He tackled complex challenges with ease and always delivered high-quality solutions on schedule.",
    rating: 5,
    avatar: "LM"
  }
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-accent">What</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feedback from amazing people I've had the pleasure to work with
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="p-3 rounded-full bg-card border border-border hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="p-3 rounded-full bg-card border border-border hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          onScroll={checkScrollButtons}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[350px] md:w-[400px] snap-start"
            >
              <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-4">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.role}</p>
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
