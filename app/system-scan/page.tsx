"use client";
import React, { useState, useEffect } from 'react';
import MatrixRain from '../../components/effects/MatrixRain';
import GlitchText from '../../components/effects/GlitchText';

export default function SystemScan() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [systemStability, setSystemStability] = useState(0);
  const [glitchActive, setGlitchActive] = useState(true);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(prev => !prev);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    if (currentSlide === 2) {
      const interval = setInterval(() => {
        setSystemStability(prev => (prev < 100 ? prev + 1 : 100));
      }, 30);
      return () => clearInterval(interval);
    }
  }, [currentSlide]);

  useEffect(() => {
    if (currentSlide === 2) {
      const scanInterval = setInterval(() => {
        setScanProgress(prev => (prev < 100 ? prev + 2 : 100));
      }, 100);
      return () => clearInterval(scanInterval);
    }
  }, [currentSlide]);

  const scrollToSlide = (index: number) => {
    setCurrentSlide(index);
    const element = document.getElementById(`slide-${index}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          background: #0A0A0F;
          color: #fff;
          overflow-x: hidden;
          scroll-snap-type: y mandatory;
          height: 100vh;
          overflow-y: scroll;
          font-family: 'Share Tech Mono', monospace;
        }

        .nav {
          position: fixed;
          top: 20px;
          right: 20px;
          display: flex;
          gap: 15px;
          z-index: 1000;
        }

        .nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #00AEEF;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 0 10px #00AEEF;
        }

        .nav-dot:hover, .nav-dot.active {
          background: #FF004D;
          box-shadow: 0 0 20px #FF004D;
          transform: scale(1.3);
        }

        .slide {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 40px;
          scroll-snap-align: start;
          position: relative;
          overflow: hidden;
        }

        .matrix-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .matrix-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .scanline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0, 174, 239, 0.05) 50%,
            transparent 100%
          );
          animation: scanline 8s linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          text-align: center;
        }

        .glitch {
          font-family: 'Orbitron', sans-serif;
          font-size: 8.5rem;
          font-weight: 900;
          text-transform: uppercase;
          position: relative;
          color: #fff;
          letter-spacing: 0.1em;
          animation: glitch-text 1s infinite;
          text-align: center;
        }

        .glitch-title {
          font-family: 'Orbitron', sans-serif !important;
          font-size: 20rem !important;
          font-weight: 900 !important;
          text-transform: uppercase !important;
          position: relative;
          color: #fff !important;
          letter-spacing: 0.1em !important;
          animation: glitch-text 1s infinite;
          text-align: center !important;
        }

        .glitch-title::before,
        .glitch-title::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-title::before {
          left: 2px;
          text-shadow: -2px 0 #FF004D;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim 3s infinite linear alternate-reverse;
        }

        .glitch-title::after {
          left: -2px;
          text-shadow: -2px 0 #00AEEF;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim 2s infinite linear alternate-reverse;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 #FF004D;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim 3s infinite linear alternate-reverse;
        }

        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 #00AEEF;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim 2s infinite linear alternate-reverse;
        }

        @keyframes glitch-text {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        @keyframes glitch-anim {
          0% { clip: rect(61px, 9999px, 89px, 0); }
          5% { clip: rect(33px, 9999px, 76px, 0); }
          10% { clip: rect(28px, 9999px, 18px, 0); }
          15% { clip: rect(65px, 9999px, 23px, 0); }
          20% { clip: rect(78px, 9999px, 45px, 0); }
          25% { clip: rect(12px, 9999px, 94px, 0); }
          30% { clip: rect(89px, 9999px, 56px, 0); }
          35% { clip: rect(44px, 9999px, 67px, 0); }
          40% { clip: rect(23px, 9999px, 82px, 0); }
          45% { clip: rect(71px, 9999px, 39px, 0); }
          50% { clip: rect(15px, 9999px, 91px, 0); }
          55% { clip: rect(58px, 9999px, 28px, 0); }
          60% { clip: rect(36px, 9999px, 73px, 0); }
          65% { clip: rect(82px, 9999px, 41px, 0); }
          70% { clip: rect(19px, 9999px, 68px, 0); }
          75% { clip: rect(54px, 9999px, 25px, 0); }
          80% { clip: rect(47px, 9999px, 86px, 0); }
          85% { clip: rect(31px, 9999px, 52px, 0); }
          90% { clip: rect(69px, 9999px, 14px, 0); }
          95% { clip: rect(22px, 9999px, 77px, 0); }
          100% { clip: rect(55px, 9999px, 34px, 0); }
        }

        .subtitle {
          font-size: 1.6rem;
          color: #00AEEF;
          margin-top: 20px;
          text-shadow: 0 0 10px #00AEEF;
          animation: pulse 2s ease-in-out infinite;
          text-align: center;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .cta-button {
          margin-top: 40px;
          padding: 18px 50px;
          font-size: 1.5rem;
          font-family: 'Orbitron', sans-serif;
          background: transparent;
          color: #00AEEF;
          border: 2px solid #00AEEF;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          transition: all 0.3s;
          box-shadow: 0 0 20px rgba(0, 174, 239, 0.3);
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, #00AEEF, transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          color: #FF004D;
          border-color: #FF004D;
          box-shadow: 0 0 30px rgba(255, 0, 77, 0.5);
          transform: translateY(-2px);
        }

        .heading {
          font-family: 'Orbitron', sans-serif;
          font-size: 2.5rem;
          color: #00AEEF;
          margin-bottom: 30px;
          text-shadow: 0 0 20px #00AEEF;
        }

        .description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #ccc;
          max-width: 800px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 40px;
        }

        .stat-box {
          padding: 25px;
          background: rgba(0, 174, 239, 0.05);
          border: 1px solid #00AEEF;
          border-radius: 8px;
          box-shadow: 0 0 20px rgba(0, 174, 239, 0.2);
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .stat-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #00AEEF, #FF004D);
          animation: scan-bar 2s linear infinite;
        }

        @keyframes scan-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .stat-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 30px rgba(255, 0, 77, 0.4);
          border-color: #FF004D;
        }

        .stat-icon {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #888;
          margin-bottom: 5px;
        }

        .stat-value {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.3rem;
          color: #fff;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .challenge-card {
          padding: 30px;
          background: linear-gradient(135deg, rgba(0, 174, 239, 0.1), rgba(255, 0, 77, 0.1));
          border: 2px solid #00AEEF;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .challenge-card::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 0, 77, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .challenge-card:hover::after {
          width: 300px;
          height: 300px;
        }

        .challenge-card:hover {
          transform: scale(1.05) rotate(1deg);
          border-color: #FF004D;
          box-shadow: 0 0 40px rgba(255, 0, 77, 0.6);
        }

        .card-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
          color: #00AEEF;
          margin-bottom: 15px;
          position: relative;
          z-index: 1;
        }

        .card-description {
          color: #ccc;
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }

        .terminal {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid #00AEEF;
          border-radius: 8px;
          padding: 20px;
          margin-top: 40px;
          font-family: 'Share Tech Mono', monospace;
          font-size: 0.9rem;
          color: #00AEEF;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 0 30px rgba(0, 174, 239, 0.3);
        }

        .terminal-line {
          margin: 8px 0;
          opacity: 0;
          animation: terminal-appear 0.5s forwards;
        }

        .terminal-line:nth-child(1) { animation-delay: 0s; }
        .terminal-line:nth-child(2) { animation-delay: 0.5s; }
        .terminal-line:nth-child(3) { animation-delay: 1s; }
        .terminal-line:nth-child(4) { animation-delay: 1.5s; }

        @keyframes terminal-appear {
          to { opacity: 1; }
        }

        .progress-bar {
          width: 100%;
          height: 30px;
          background: rgba(0, 0, 0, 0.5);
          border: 2px solid #00AEEF;
          border-radius: 15px;
          overflow: hidden;
          margin-top: 40px;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00AEEF, #FF004D);
          transition: width 0.3s;
          box-shadow: 0 0 20px rgba(0, 174, 239, 0.8);
          position: relative;
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .progress-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Orbitron', sans-serif;
          font-weight: bold;
          color: #fff;
          text-shadow: 0 0 10px #000;
        }

        .cpu-core {
          width: 200px;
          height: 200px;
          margin: 40px auto;
          border: 3px solid #00AEEF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          animation: rotate 10s linear infinite;
          box-shadow: 0 0 50px rgba(0, 174, 239, 0.5);
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .cpu-core::before,
        .cpu-core::after {
          content: '';
          position: absolute;
          border: 2px solid #FF004D;
          border-radius: 50%;
        }

        .cpu-core::before {
          width: 150px;
          height: 150px;
          animation: rotate 7s linear infinite reverse;
        }

        .cpu-core::after {
          width: 100px;
          height: 100px;
          animation: rotate 5s linear infinite;
        }

        .cpu-text {
          position: relative;
          z-index: 1;
          font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
          color: #fff;
          text-shadow: 0 0 20px #00AEEF;
        }

        .footer {
          margin-top: 60px;
          font-family: 'Orbitron', sans-serif;
          font-size: 1.2rem;
          color: #00AEEF;
          text-shadow: 0 0 15px #00AEEF;
          animation: flicker 3s infinite;
        }

        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
          55% { opacity: 1; }
          57% { opacity: 0.7; }
          60% { opacity: 1; }
        }

        .floating-cube {
          width: 150px;
          height: 150px;
          position: absolute;
          right: 10%;
          top: 20%;
          animation: float 6s ease-in-out infinite;
          opacity: 0.3;
          z-index: 2;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
          50% { transform: translateY(-30px) rotateX(180deg) rotateY(180deg); }
        }

        @media (max-width: 768px) {
          .glitch {
            font-size: 3rem;
          }
          
          .glitch-title {
            font-size: 6rem !important;
          }
          
          .subtitle {
            font-size: 1.2rem;
          }
          
          .cta-button {
            font-size: 1.2rem;
            padding: 15px 40px;
          }
          
          .heading {
            font-size: 1.8rem;
          }
          
          .stats-grid,
          .cards-grid {
            grid-template-columns: 1fr;
          }
          
          .floating-cube {
            display: none;
          }
        }
      `}</style>

      <div className="container">
        <div className="nav">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`nav-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => scrollToSlide(index)}
            />
          ))}
        </div>

        {/* Slide 1 - The Crash */}
        <div id="slide-0" className="slide">
          <div className="matrix-background">
            <MatrixRain />
          </div>
          <div className="scanline" />
          
          <div className="content">
            <GlitchText 
              text="SYSTEM SCAN" 
              className="glitch-title"
              fontSize="12rem"
            />
            <p className="subtitle">REBOOT PROTOCOL INITIATED</p>
            <p className="subtitle" style={{ fontSize: '1rem', marginTop: '10px' }}>
              The Core System has crashed. Begin diagnostics.
            </p>
            <button className="cta-button" onClick={() => scrollToSlide(1)}>
              START SCAN
            </button>
          </div>
        </div>

        {/* Slide 2 - Mission Brief */}
        <div id="slide-1" className="slide">
          <div className="matrix-background">
            <MatrixRain />
          </div>
          <div className="scanline" />
          <div className="content">
            <GlitchText 
              text="🧠 Objective: Diagnose the System" 
              className="heading"
            />
            <p className="description">
              Before the final reboot can begin, Debuggers must solve malfunctioning code segments 
              hidden inside Collab or Kaggle notebooks. Every fix restores a system component — 
              every second counts.
            </p>

            <div className="floating-cube">
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                <rect x="25" y="25" width="50" height="50" fill="none" stroke="#00AEEF" strokeWidth="2">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    dur="10s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="30" y="30" width="40" height="40" fill="none" stroke="#FF004D" strokeWidth="2">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 50 50"
                    to="0 50 50"
                    dur="7s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>

            <div className="stats-grid">
              <div className="stat-box">
                <div className="stat-icon">⏱</div>
                <div className="stat-label">Duration</div>
                <div className="stat-value">2 Hours</div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">👥</div>
                <div className="stat-label">Team Size</div>
                <div className="stat-value">3–4 Members</div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">💻</div>
                <div className="stat-label">Mode</div>
                <div className="stat-value">Online Notebook</div>
              </div>
              <div className="stat-box">
                <div className="stat-icon">🎯</div>
                <div className="stat-label">Goal</div>
                <div className="stat-value">Solve ML/DL/NLP/EDA</div>
              </div>
            </div>

            <button className="cta-button" onClick={() => scrollToSlide(2)} style={{ marginTop: '40px' }}>
              View Challenge Map
            </button>
          </div>
        </div>

        {/* Slide 3 - Challenge Map */}
        <div id="slide-2" className="slide">
          <div className="matrix-background">
            <MatrixRain />
          </div>
          <div className="scanline" />
          <div className="content">
            <GlitchText 
              text="💾 Inside the System Scan" 
              className="heading"
            />

            <div className="cards-grid">
              <div className="challenge-card">
                <div className="card-title">EDA Node</div>
                <div className="card-description">
                  Diagnose corrupted data visuals. Restore clarity to broken datasets and uncover hidden patterns.
                </div>
              </div>
              <div className="challenge-card">
                <div className="card-title">ML Engine</div>
                <div className="card-description">
                  Recalibrate predictive models. Fix regression algorithms and classification systems.
                </div>
              </div>
              <div className="challenge-card">
                <div className="card-title">DL Core</div>
                <div className="card-description">
                  Restore neural network stability. Debug deep learning architectures and optimize training loops.
                </div>
              </div>
              <div className="challenge-card">
                <div className="card-title">NLP Module</div>
                <div className="card-description">
                  Decode broken text layers. Repair language models and sentiment analysis pipelines.
                </div>
              </div>
            </div>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${systemStability}%` }} />
              <div className="progress-text">System Stability: {systemStability}%</div>
            </div>

            {currentSlide === 2 && (
              <div className="terminal">
                <div className="terminal-line">&gt; Scanning node_01... <span style={{ color: '#FF004D' }}>Error detected.</span></div>
                <div className="terminal-line">&gt; Deploying Debugger...</div>
                <div className="terminal-line">&gt; Module Restored <span style={{ color: '#00FF00' }}>[{scanProgress}%]</span></div>
                <div className="terminal-line">&gt; System integrity improving...</div>
              </div>
            )}

            <button className="cta-button" onClick={() => scrollToSlide(3)} style={{ marginTop: '40px' }}>
              Next Phase
            </button>
          </div>
        </div>

        {/* Slide 4 - Shortlisting */}
        <div id="slide-3" className="slide">
          <div className="matrix-background">
            <MatrixRain />
          </div>
          <div className="scanline" />
          <div className="content">
            <GlitchText 
              text="⚡ Progress to the Reboot Chamber" 
              className="heading"
            />
            <p className="description">
              Top 16–20 Debugger Teams advance to Round 2: The Core System Reboot. 
              Each solved notebook fragment earns stability points. The faster and more 
              accurate your team, the closer you get to reviving the Core.
            </p>

            <div className="cpu-core">
              <div className="cpu-text">CORE</div>
            </div>

            <button className="cta-button">
              PREPARE FOR REBOOT →
            </button>

            <div className="footer">
              CODEVERSE: Revive the System, Redefine Intelligence
            </div>
          </div>
        </div>
      </div>
    </>
  );
}