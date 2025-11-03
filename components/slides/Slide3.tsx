import { motion } from 'framer-motion';
import { BarChart3, Brain, Layers, MessageSquare } from 'lucide-react';
import TerminalOutput from '../effects/TerminalOutput';
import ProgressBar from '../effects/ProgressBar';

function Slide3() {
  const nodes = [
    {
      icon: BarChart3,
      title: 'EDA Node',
      description: 'Diagnose corrupted data visuals',
      color: 'blue'
    },
    {
      icon: Brain,
      title: 'ML Engine',
      description: 'Recalibrate predictive models',
      color: 'red'
    },
    {
      icon: Layers,
      title: 'DL Core',
      description: 'Restore neural network stability',
      color: 'blue'
    },
    {
      icon: MessageSquare,
      title: 'NLP Module',
      description: 'Decode broken text layers',
      color: 'red'
    }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0a0a0f' }}>
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-cyber-blue text-sm font-mono mb-2 tracking-widest">
            {'>'} CHALLENGE MAP
          </div>
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-white">
            <span className="text-cyber-red">💾</span> Inside the System Scan
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {nodes.map((node, index) => (
            <motion.div
              key={index}
              className={`group relative p-8 bg-dark border-2 ${
                node.color === 'blue' ? 'border-cyber-blue/40' : 'border-cyber-red/40'
              } rounded-lg cursor-pointer overflow-hidden hover:scale-105 transition-transform duration-300`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                boxShadow: node.color === 'blue'
                  ? '0 0 30px rgba(0, 174, 239, 0.5)'
                  : '0 0 30px rgba(255, 0, 77, 0.5)'
              }}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity glitch-bg ${
                node.color === 'blue' ? 'bg-cyber-blue/10' : 'bg-cyber-red/10'
              }`} />

              <div className="relative z-10">
                <div className={`w-16 h-16 mb-4 rounded-lg ${
                  node.color === 'blue' ? 'bg-cyber-blue/20' : 'bg-cyber-red/20'
                } flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <node.icon
                    className={node.color === 'blue' ? 'text-cyber-blue' : 'text-cyber-red'}
                    size={32}
                  />
                </div>

                <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                  {node.title}
                </h3>

                <p className="text-gray-400 font-mono">
                  {node.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <ProgressBar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TerminalOutput />
        </motion.div>
      </div>
    </div>
  );
}

export default Slide3;
