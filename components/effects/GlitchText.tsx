import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  fontSize?: string;
}

function GlitchText({ text, className = '', fontSize = '4rem' }: GlitchTextProps) {
  const textStyle = {
    fontSize: fontSize,
    lineHeight: '1.2',
    fontWeight: '900',
    textShadow: '0 0 10px rgba(0, 174, 239, 0.5)',
  };

  return (
    <div className={`relative ${className}`} style={textStyle}>
      <motion.div
        className="relative z-10"
        data-text={text}
        style={textStyle}
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
    </div>
  );
}

export default GlitchText;