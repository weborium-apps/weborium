import { useScroll, useSpring, motion } from 'framer-motion';
import './scrollrail.css';

export default function ScrollRail() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <div className="scroll-rail" aria-hidden="true">
      <div className="scroll-rail__track">
        <motion.div className="scroll-rail__fill" style={{ scaleY }} />
      </div>
    </div>
  );
}
