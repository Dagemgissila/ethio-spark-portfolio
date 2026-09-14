import { useEffect, useRef, useState } from "react";

/**
 * A soft radial glow that follows the pointer on desktop, adding depth without
 * being a hard "custom cursor" replacement (which hurts usability/accessibility).
 * No-ops on touch devices and for users who prefer reduced motion.
 */
const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isTouch) return;

    let frame = 0;

    const handleMove = (event: PointerEvent) => {
      if (!active) setActive(true);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        ref.current?.style.setProperty("--cursor-x", `${event.clientX}px`);
        ref.current?.style.setProperty("--cursor-y", `${event.clientY}px`);
      });
    };

    const handleLeave = () => setActive(false);

    window.addEventListener("pointermove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(frame);
    };
  }, [active]);

  return <div ref={ref} className={`cursor-glow ${active ? "is-active" : ""}`} aria-hidden />;
};

export default CursorGlow;
