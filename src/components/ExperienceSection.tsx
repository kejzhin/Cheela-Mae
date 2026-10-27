import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Briefcase, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-white border-y border-[#EADBDD] relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9E676E] mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Experience</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1A1B]">
            Experience
          </h2>
        </div>

        {/* Experience Card (Only real information from resume image) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F7] border border-[#EADBDD] shadow-sm relative overflow-hidden"
        >
          {/* Subtle accent corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#9E676E]/10 to-transparent rounded-bl-full pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1E1A1B]">
              {EXPERIENCE.role}
            </h3>
            <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#9E676E] bg-[#F2E8EA] px-3 py-1 rounded-full border border-[#E8D6D9]">
              <Calendar className="w-3 h-3" />
              <span>{EXPERIENCE.period}</span>
            </div>
          </div>

          <div className="text-xs uppercase tracking-wider text-[#8C777C] font-mono mb-6">
            {EXPERIENCE.establishment}
          </div>

          {/* Exact bullet point from resume */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EADBDD] flex items-start gap-3.5">
            <CheckCircle2 className="w-5 h-5 text-[#9E676E] shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base text-[#594E51] leading-relaxed">
              {EXPERIENCE.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
