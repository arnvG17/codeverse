import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import CPUCore from '../effects/CPUCore';

function Slide4() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0a0a0f' }}>
      <div className="absolute inset-0 radial-gradient opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-cyber-blue text-sm font-mono mb-2 tracking-widest">
            {'>'} FINAL PHASE
          </div>
          <h2 className="text-5xl md:text-7xl font-orbitron font-bold text-white mb-8">
            <span className="text-cyber-red">⚡</span> Progress to the Reboot Chamber
          </h2>
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CPUCore />
        </motion.div>

        <motion.div
          className="text-lg font-mono text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="border-2 border-cyber-blue/40 bg-cyber-blue/5 p-8 rounded-lg backdrop-blur-sm">
            <p className="mb-4">
              <span className="text-cyber-red font-bold">Top 16–20 Debugger Teams</span> advance to{' '}
              <span className="text-cyber-blue font-bold">Round 2: The Core System Reboot.</span>
            </p>
            <p className="mb-4">
              Each solved notebook fragment earns <span className="text-cyber-blue">stability points.</span>
            </p>
            <p className="text-cyber-red">
              The faster and more accurate your team, the closer you get to reviving the Core.
            </p>
          </div>
        </motion.div>

        <motion.button
          className="px-12 py-5 bg-cyber-red text-white font-mono text-xl rounded border-2 border-cyber-red hover:bg-transparent hover:border-cyber-blue hover:text-cyber-blue transition-all duration-300 shadow-glow-red hover:shadow-glow-blue flex items-center gap-3 mx-auto"
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
        >
          PREPARE FOR REBOOT
          <ChevronRight size={24} />
        </motion.button>

        <motion.div
          className="mt-16 text-2xl font-orbitron text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            CODEVERSE: Revive the System, Redefine Intelligence
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}

export default Slide4;
