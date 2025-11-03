import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Navigation from './Navigation';

function SystemScan() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0 && currentSlide < 3) {
        setCurrentSlide(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    };

    let timeout: NodeJS.Timeout;
    const debouncedHandleWheel = (e: WheelEvent) => {
      e.preventDefault();
      clearTimeout(timeout);
      timeout = setTimeout(() => handleWheel(e), 50);
    };

    window.addEventListener('wheel', debouncedHandleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', debouncedHandleWheel);
      clearTimeout(timeout);
    };
  }, [currentSlide]);

  const slides = [
    <Slide1 key="slide1" onNext={() => setCurrentSlide(1)} />,
    <Slide2 key="slide2" />,
    <Slide3 key="slide3" />,
    <Slide4 key="slide4" />
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: '#0a0a0f' }}>
      <Navigation currentSlide={currentSlide} onNavigate={setCurrentSlide} />

      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ y: `-${currentSlide * 100}vh` }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-screen">
            {slide}
          </div>
        ))}
      </motion.div>

      <div className="scanline" />
    </div>
  );
}

export default SystemScan;
