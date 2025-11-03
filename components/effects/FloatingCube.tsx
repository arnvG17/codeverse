import { motion } from 'framer-motion';

function FloatingCube() {
  return (
    <motion.div
      className="absolute right-12 top-1/2 -translate-y-1/2 w-48 h-48 hidden lg:block"
      animate={{
        rotateX: [0, 360],
        rotateY: [0, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div className="cube-container">
        <div className="cube">
          <div className="cube-face cube-front" />
          <div className="cube-face cube-back" />
          <div className="cube-face cube-right" />
          <div className="cube-face cube-left" />
          <div className="cube-face cube-top" />
          <div className="cube-face cube-bottom" />
        </div>
      </div>
    </motion.div>
  );
}

export default FloatingCube;
