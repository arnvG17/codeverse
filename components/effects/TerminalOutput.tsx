import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function TerminalOutput() {
  const [lines, setLines] = useState<string[]>([]);

  const messages = [
    '> Scanning node_01... Error detected.',
    '> Deploying Debugger...',
    '> Module Restored [45%]',
    '> Analyzing node_02... Corruption found.',
    '> Initiating repair sequence...',
    '> System stability improving [72%]',
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < messages.length) {
        setLines(prev => [...prev, messages[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/50 border border-cyber-blue/30 rounded-lg p-6 font-mono text-sm max-w-2xl mx-auto backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-cyber-blue/30">
        <div className="w-3 h-3 rounded-full bg-cyber-red" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-cyber-blue">system_terminal.sh</span>
      </div>

      <div className="space-y-2">
        {lines.map((line, index) => {
          if (!line) return null;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${
                line.includes('Error') || line.includes('Corruption')
                  ? 'text-cyber-red'
                  : line.includes('Restored') || line.includes('improving')
                  ? 'text-green-400'
                  : 'text-cyber-blue'
              }`}
            >
              {line}
              {index === lines.length - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block ml-1"
                >
                  _
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default TerminalOutput;
