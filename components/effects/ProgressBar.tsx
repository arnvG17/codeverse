import { motion } from 'framer-motion';

function ProgressBar() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-2 text-sm font-mono">
        <span className="text-cyber-blue">System Stability</span>
        <motion.span
          className="text-cyber-red"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          0% → 100%
        </motion.span>
      </div>

      <div className="relative h-4 bg-dark border-2 border-cyber-blue/30 rounded overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyber-red via-cyber-blue to-green-400"
          initial={{ width: '0%' }}
          whileInView={{ width: '85%' }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <motion.div
        className="mt-2 text-xs font-mono text-gray-500 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2 }}
        viewport={{ once: true }}
      >
        [ RESTORATION IN PROGRESS ]
      </motion.div>
    </div>
  );
}

export default ProgressBar;
