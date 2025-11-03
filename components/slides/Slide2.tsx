import { motion } from 'framer-motion';
import { Clock, Users, Monitor, Target } from 'lucide-react';
import FloatingCube from '../effects/FloatingCube';

function Slide2() {
  const stats = [
    { icon: Clock, label: 'Duration', value: '2 Hours' },
    { icon: Users, label: 'Team Size', value: '3–4 Members' },
    { icon: Monitor, label: 'Mode', value: 'Online Notebook' },
    { icon: Target, label: 'Goal', value: 'Solve ML, DL, NLP, EDA' }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0a0a0f' }}>
      <div className="absolute inset-0 circuit-pattern opacity-10" />
      <FloatingCube />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-cyber-blue text-sm font-mono mb-2 tracking-widest">
            {'>'} MISSION BRIEFING
          </div>
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold text-white mb-8">
            <span className="text-cyber-red">🧠</span> Objective: Diagnose the System
          </h2>

          <motion.div
            className="text-lg font-mono text-gray-300 leading-relaxed max-w-3xl border-l-4 border-cyber-blue pl-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">
              Before the final reboot can begin, <span className="text-cyber-blue font-bold">Debuggers</span> must
              solve malfunctioning code segments hidden inside <span className="text-cyber-red">Collab</span> or{' '}
              <span className="text-cyber-red">Kaggle</span> notebooks.
            </p>
            <p>
              Every fix restores a system component — <span className="text-cyber-red">every second counts.</span>
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative p-6 bg-dark border border-cyber-blue/30 rounded hover:border-cyber-red transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-cyber-red/10 opacity-0 group-hover:opacity-100 transition-opacity rounded" />

              <div className="relative z-10">
                <div className="w-12 h-12 mb-4 rounded-full bg-cyber-blue/20 flex items-center justify-center group-hover:bg-cyber-red/30 transition-colors">
                  <stat.icon className="text-cyber-blue group-hover:text-cyber-red transition-colors" size={24} />
                </div>
                <div className="text-cyber-blue text-xs font-mono mb-2 tracking-wider">
                  {stat.icon === Clock && '⏱'}
                  {stat.icon === Users && '👥'}
                  {stat.icon === Monitor && '💻'}
                  {stat.icon === Target && '🎯'}
                  {' '}{stat.label.toUpperCase()}
                </div>
                <div className="text-white text-xl font-orbitron font-bold">
                  {stat.value}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Slide2;
