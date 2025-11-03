import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

function GlitchText({ text, className = '' }: GlitchTextProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="relative z-10"
        animate={{
          textShadow: [
            '0 0 0 transparent',
            '2px 2px 0 #00AEEF, -2px -2px 0 #FF004D',
            '0 0 0 transparent',
          ],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        {text}
      </motion.div>

      <motion.div
        className="absolute inset-0 text-cyber-blue opacity-70"
        animate={{
          x: [0, 2, -2, 0],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        {text}
      </motion.div>

      <motion.div
        className="absolute inset-0 text-cyber-red opacity-70"
        animate={{
          x: [0, -2, 2, 0],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
          delay: 0.1,
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}

export default GlitchText;
