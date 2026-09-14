import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin gradient bar pinned to the top of the viewport that fills as the user scrolls.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-primary z-[60] origin-left"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
