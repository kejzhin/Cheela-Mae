import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageSquare, Clock, Cpu, Users } from 'lucide-react';
import { CORE_SKILLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    'Communication': MessageSquare,
    'Time Management': Clock,
    'Ai & Automatic Tools': Cpu,
    'Customer Service': Users
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-white border-t border-[#EADBDD] relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9E676E] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Key Competencies</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1A1B]">
            Core Skills
          </h2>
        </div>

        {/* 4 Core Skills Grid strictly from the resume image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CORE_SKILLS.map((skill, index) => {
            const Icon = iconMap[skill.name] || Sparkles;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-3xl bg-[#FAF7F7] border border-[#EADBDD] hover:border-[#9E676E]/50 transition-all flex items-start gap-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FAF0F2] flex items-center justify-center text-[#9E676E] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#1E1A1B] mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-[#594E51] leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
