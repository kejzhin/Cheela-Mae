import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 bg-[#FAF7F7] relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9E676E] mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1A1B]">
            Education
          </h2>
        </div>

        {/* Education Card strictly based on the reference resume image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EADBDD] shadow-sm relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1E1A1B]">
              {EDUCATION.school}
            </h3>
            <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#9E676E] bg-[#FAF0F2] px-3 py-1 rounded-full border border-[#EEDBDD]">
              <Calendar className="w-3 h-3" />
              <span>{EDUCATION.period}</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF7F7] border border-[#EADBDD]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8C777C] block mb-1">
              Track & Strand
            </span>
            <p className="text-base sm:text-lg font-semibold text-[#1E1A1B]">
              {EDUCATION.track}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
