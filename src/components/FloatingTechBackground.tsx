import { motion } from "framer-motion";

const icons = [
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true, top: "12%", left: "8%", size: 42, duration: 9, delay: 0 },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", invert: false, top: "20%", left: "88%", size: 46, duration: 10, delay: 0.6 },
  { name: "NestJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg", invert: false, top: "72%", left: "10%", size: 40, duration: 11, delay: 1.2 },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", invert: false, top: "80%", left: "85%", size: 44, duration: 9.5, delay: 0.3 },
  { name: "Laravel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", invert: false, top: "42%", left: "4%", size: 38, duration: 12, delay: 1.8 },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", invert: false, top: "10%", left: "48%", size: 40, duration: 10.5, delay: 0.9 },
  { name: "Kubernetes", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", invert: false, top: "88%", left: "48%", size: 42, duration: 11.5, delay: 1.5 },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", invert: false, top: "34%", left: "94%", size: 38, duration: 9, delay: 2.1 },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", invert: false, top: "60%", left: "92%", size: 40, duration: 10, delay: 0.4 },
];

/**
 * Decorative, low-opacity tech-stack field with a pseudo-3D drift (perspective +
 * rotateY wobble). Purely atmospheric — pointer-events disabled, sits behind content.
 */
const FloatingTechBackground = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ perspective: "1000px" }}
      aria-hidden
    >
      {icons.map((icon) => (
        <motion.div
          key={icon.name}
          className="absolute opacity-[0.08] dark:opacity-[0.14]"
          style={{
            top: icon.top,
            left: icon.left,
            width: icon.size,
            height: icon.size,
            transformStyle: "preserve-3d",
          }}
          animate={{
            y: [0, -18, 0],
            rotateY: [0, 25, -25, 0],
            rotateX: [0, 12, -12, 0],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: icon.delay,
          }}
        >
          <img
            src={icon.src}
            alt=""
            className={`w-full h-full object-contain ${icon.invert ? "dark:invert" : ""}`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingTechBackground;
