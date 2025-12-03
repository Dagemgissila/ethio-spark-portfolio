import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

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
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-card/30" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Feedback from amazing people I've had the pleasure to work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
