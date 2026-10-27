import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="profile" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Soft Ambient Accents */}
      <div className="absolute top-12 right-0 -z-10 w-96 h-96 rounded-full bg-[#9E676E]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -z-10 w-80 h-80 rounded-full bg-[#D8BFC2]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Real Profile & Name from Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Editorial Kicker */}
            <div className="text-xs font-semibold uppercase tracking-widest text-[#9E676E] mb-3">
              {PORTFOLIO_INFO.role}
            </div>

            {/* User's Name as Main Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1E1A1B] leading-[1.08] mb-6">
              {PORTFOLIO_INFO.name}
            </h1>

            {/* Profile Paragraph directly from the Resume Image */}
            <p className="text-base sm:text-lg text-[#594E51] leading-relaxed mb-8 max-w-2xl font-normal">
              {PORTFOLIO_INFO.profileText}
            </p>

            {/* Navigation CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#9E676E] hover:bg-[#885259] rounded-xl transition-all shadow-md shadow-[#9E676E]/20 hover:shadow-lg hover:shadow-[#9E676E]/30 cursor-pointer active:scale-95"
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1E1A1B] bg-white hover:bg-[#FAF0F2] border border-[#EADBDD] rounded-xl transition-all cursor-pointer active:scale-95 shadow-sm"
              >
                Contact Details
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Profile Picture with Mauve Arch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Signature Dusty Rose Architectural Arch from the reference image */}
              <div className="absolute inset-0 top-6 -bottom-6 -left-4 -right-4 rounded-t-[12rem] rounded-b-3xl bg-gradient-to-b from-[#9E676E] to-[#6A3941] opacity-95 -z-10 shadow-2xl shadow-[#9E676E]/30" />

              {/* Decorative Subtle Arch Accent Ring */}
              <div className="absolute inset-0 top-2 -bottom-2 -left-2 -right-2 rounded-t-[12.5rem] rounded-b-[2rem] border border-white/30 pointer-events-none -z-10" />

              {/* Profile Image Container - Completely clean and unobstructed */}
              <div className="relative overflow-hidden rounded-t-[11.5rem] rounded-b-2xl pt-6 px-4 bg-transparent">
                <img
                  src={PORTFOLIO_INFO.profileImage}
                  alt={PORTFOLIO_INFO.name}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== PORTFOLIO_INFO.fallbackProfileImage) {
                      target.src = PORTFOLIO_INFO.fallbackProfileImage;
                    }
                  }}
                  className="w-full h-auto max-h-[520px] object-contain drop-shadow-2xl mx-auto transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
