import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import MatrixRain from '../effects/MatrixRain';
import GlitchText from '../effects/GlitchText';

interface Slide1Props {
  onNext: () => void;
}

function Slide1({ onNext }: Slide1Props) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0a0a0f' }}>
      <MatrixRain />

      <motion.div
        className="relative z-10 text-center px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          className="mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-cyber-red text-sm font-mono mb-2 tracking-widest">
            {'>'} SYSTEM STATUS: CRITICAL
          </div>
          <GlitchText
            text="SYSTEM SCAN"
            className="font-orbitron text-white mb-4"
            fontSize="16rem"
          />
          <motion.div
            className="text-2xl md:text-3xl font-mono text-cyber-blue"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Reboot Protocol Initiated
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 text-lg font-mono text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="border border-cyber-red/30 bg-cyber-red/5 p-6 rounded backdrop-blur-sm">
            <p className="text-cyber-red glitch-text">ERROR_CODE: 0x7F3A</p>
            <p className="mt-2">The Core System has crashed.</p>
            <p>Begin diagnostics immediately.</p>
          </div>
        </motion.div>

        <motion.button
          onClick={onNext}
          className="mt-12 px-10 py-4 bg-cyber-blue text-white font-mono text-lg rounded border-2 border-cyber-blue hover:bg-transparent hover:border-cyber-red hover:text-cyber-red transition-all duration-300 shadow-glow-blue hover:shadow-glow-red"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          START SCAN
        </motion.button>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-cyber-blue" size={32} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Slide1;
