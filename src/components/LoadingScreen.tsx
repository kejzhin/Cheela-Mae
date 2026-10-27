import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface LoadingScreenProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, forceShow = false }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if previously loaded in this tab session, unless forced
    const hasLoaded = sessionStorage.getItem('portfolio_intro_shown');
    if (hasLoaded && !forceShow) {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    setIsVisible(true);
    let current = 0;
    const interval = setInterval(() => {
      // Smooth non-linear progress acceleration
      current += Math.floor(Math.random() * 12) + 6;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          sessionStorage.setItem('portfolio_intro_shown', 'true');
          onComplete?.();
        }, 500);
      } else {
        setProgress(current);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [forceShow, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF7F7] text-[#1E1A1B] px-6 select-none"
        >
          {/* Subtle background ambient glow */}
          <div className="absolute w-96 h-96 rounded-full bg-[#9E676E]/10 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-center max-w-sm w-full text-center">
            {/* Elegant Monogram Arch */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-20 h-24 mb-6 rounded-t-full bg-gradient-to-b from-[#9E676E] to-[#6A3941] flex items-center justify-center shadow-lg shadow-[#9E676E]/20"
            >
              <span className="font-display text-white text-2xl font-semibold tracking-wider">
                {PORTFOLIO_INFO.initials}
              </span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-1 rounded-t-full border border-dashed border-[#9E676E]/40"
              />
            </motion.div>

            {/* Name & Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="font-display text-2xl font-bold tracking-tight text-[#1E1A1B] mb-1"
            >
              {PORTFOLIO_INFO.name}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="text-xs uppercase tracking-widest text-[#8C777C] font-medium mb-8"
            >
              Customer Service & Retail Specialist
            </motion.p>

            {/* Progress Bar Container */}
            <div className="w-full bg-[#EADBDD] h-1.5 rounded-full overflow-hidden mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-[#9E676E] to-[#6A3941]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* Numeric Indicator */}
            <div className="flex items-center justify-between w-full text-xs text-[#8C777C] font-mono tabular-nums">
              <span>INITIALIZING PORTFOLIO</span>
              <span className="font-semibold text-[#9E676E]">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
