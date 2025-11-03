'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FloatingParticle = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-cyber-blue rounded-full opacity-60"
      initial={{ 
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 10,
        opacity: 0 
      }}
      animate={{
        y: -10,
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.5]
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

const GlitchText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        textShadow: [
          "0 0 0 transparent",
          "2px 0 0 #FF004D, -2px 0 0 #00AEEF",
          "0 0 0 transparent"
        ]
      }}
      transition={{
        duration: 0.1,
        repeat: Infinity,
        repeatDelay: Math.random() * 3 + 1
      }}
    >
      {children}
    </motion.div>
  );
};

export default function RebootProtocol() {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  return (
    <div className="min-h-screen bg-dark relative overflow-hidden flex flex-col items-center justify-center">
      {/* Floating Particles */}
      {particles.map((i) => (
        <FloatingParticle key={i} delay={i * 0.2} />
      ))}

      {/* Scanline Effect */}
      <div className="scanline"></div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="circuit-pattern w-full h-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl">
        {/* Status Indicators */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <motion.div
            className="w-3 h-3 bg-cyber-red rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.div
            className="text-xs text-cyber-blue font-orbitron tracking-widest"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SYSTEM STATUS: CRITICAL
          </motion.div>
          <motion.div
            className="w-3 h-3 bg-cyber-blue rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>

        {/* Main Title */}
        <GlitchText className="text-6xl md:text-8xl font-orbitron font-black text-white mb-4 tracking-wider">
          SYSTEM SCAN
        </GlitchText>

        {/* Subtitle */}
        <motion.h2
          className="text-2xl md:text-3xl font-orbitron text-cyber-blue mb-12 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Reboot Protocol Initiated
        </motion.h2>

        {/* Error Message Box */}
        <motion.div
          className="bg-black/80 border-2 border-cyber-red p-8 mb-12 max-w-2xl mx-auto relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyber-red"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyber-red"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyber-red"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyber-red"></div>

          <motion.div
            className="text-cyber-red font-orbitron font-bold text-lg mb-4 tracking-wider"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ERROR_CODE: 0x7F3A
          </motion.div>
          
          <div className="text-white font-orbitron text-base leading-relaxed">
            <div className="mb-2">The Core System has crashed.</div>
            <div>Begin diagnostics immediately.</div>
          </div>
        </motion.div>

        {/* Start Scan Button */}
        <motion.button
          className="bg-cyber-blue hover:bg-blue-600 text-black font-orbitron font-bold py-4 px-12 text-xl tracking-wider transition-all duration-300 relative overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-cyber-blue opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
          
          <span className="relative z-10">START SCAN</span>
          
          {/* Button border animation */}
          <motion.div
            className="absolute inset-0 border-2 border-cyber-blue"
            animate={{
              boxShadow: [
                "0 0 0 rgba(0, 174, 239, 0)",
                "0 0 20px rgba(0, 174, 239, 0.5)",
                "0 0 0 rgba(0, 174, 239, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>

        {/* Bottom Status */}
        <motion.div
          className="mt-12 text-xs text-gray-400 font-orbitron tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          AWAITING USER INPUT...
        </motion.div>
      </div>

      {/* Additional Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyber-blue/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-cyber-red/20 rotate-45 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
    </div>
  );
}
