import { motion } from 'framer-motion';
import { Terminal, Brain, Cpu, Zap } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  onNavigate: (slide: number) => void;
}

function Navigation({ currentSlide, onNavigate }: NavigationProps) {
  const icons = [
    { Icon: Terminal, label: 'Crash' },
    { Icon: Brain, label: 'Mission' },
    { Icon: Cpu, label: 'Challenge' },
    { Icon: Zap, label: 'Reboot' }
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex gap-6">
      {icons.map(({ Icon, label }, index) => (
        <motion.button
          key={index}
          onClick={() => onNavigate(index)}
          className="group relative flex items-center justify-center w-12 h-12"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
            currentSlide === index
              ? 'bg-cyber-red shadow-glow-red'
              : 'bg-cyber-blue/20 group-hover:bg-cyber-red/50'
          }`} />
          <Icon
            className={`relative z-10 transition-colors duration-300 ${
              currentSlide === index
                ? 'text-white'
                : 'text-cyber-blue group-hover:text-white'
            }`}
            size={20}
          />
          <span className="absolute -bottom-6 text-xs font-mono text-cyber-blue opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
          </span>
        </motion.button>
      ))}
    </nav>
  );
}

export default Navigation;
