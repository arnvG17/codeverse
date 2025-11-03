import { motion } from 'framer-motion';

function CPUCore() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-cyber-blue/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute inset-0 rounded-full border-4 border-cyber-red/30"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute inset-8 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-red opacity-20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-center"
          animate={{
            textShadow: [
              '0 0 10px #00AEEF',
              '0 0 20px #FF004D',
              '0 0 10px #00AEEF',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="text-6xl font-orbitron font-bold text-white mb-2">
            85%
          </div>
          <div className="text-sm font-mono text-cyber-blue">
            STABILITY
          </div>
        </motion.div>
      </div>

      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyber-blue rounded-full"
          style={{
            top: '50%',
            left: '50%',
            marginTop: '-4px',
            marginLeft: '-4px',
          }}
          animate={{
            x: [0, Math.cos((i * Math.PI) / 2) * 120],
            y: [0, Math.sin((i * Math.PI) / 2) * 120],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}

export default CPUCore;
