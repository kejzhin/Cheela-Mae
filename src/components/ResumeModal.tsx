import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Mail, Phone, MapPin, GraduationCap, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_INFO, EDUCATION, EXPERIENCE, CORE_SKILLS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm print:p-0 print:bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl border border-[#EADBDD] shadow-2xl overflow-hidden my-8 print:shadow-none print:border-none print:m-0 print:rounded-none"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Action Bar */}
          <div className="p-4 sm:px-8 sm:py-4 bg-[#FAF7F7] border-b border-[#EADBDD] flex items-center justify-between print:hidden">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9E676E]">
              Resume Preview · {PORTFOLIO_INFO.name}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1E1A1B] bg-white hover:bg-[#F2E8EA] border border-[#EADBDD] rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Printer className="w-3.5 h-3.5 text-[#9E676E]" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-xl text-[#1E1A1B] hover:bg-[#F2E8EA] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Container styled with the Reference Theme Palette */}
          <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto print:max-h-none print:p-6">
            {/* Top Resume Header Split */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#EADBDD] items-center">
              <div className="md:col-span-8">
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1E1A1B] mb-2">
                  {PORTFOLIO_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-[#9E676E] mb-4">
                  {PORTFOLIO_INFO.role}
                </p>
                <p className="text-xs sm:text-sm text-[#594E51] leading-relaxed">
                  {PORTFOLIO_INFO.profileText}
                </p>
              </div>

              <div className="md:col-span-4 flex justify-center md:justify-end">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#9E676E] shadow-md bg-[#FAF0F2]">
                  <img
                    src={PORTFOLIO_INFO.profileImage}
                    alt={PORTFOLIO_INFO.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Resume Body 2-Column Split matching the Reference Image Structure */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
              {/* Left Column: Education, Core Skills, Contact */}
              <div className="md:col-span-5 space-y-8 md:border-r md:border-[#EADBDD] md:pr-8">
                {/* Education Section */}
                <div>
                  <h3 className="font-display text-lg font-bold text-[#1E1A1B] mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#9E676E]" />
                    <span>Education</span>
                  </h3>
                  <div className="text-xs sm:text-sm">
                    <div className="font-bold text-[#1E1A1B]">{EDUCATION.school}</div>
                    <div className="text-[#9E676E] font-medium mt-0.5">{EDUCATION.track}</div>
                    <div className="text-[#8C777C] font-mono text-xs mt-1">{EDUCATION.period}</div>
                  </div>
                </div>

                {/* Core Skills Section */}
                <div>
                  <h3 className="font-display text-lg font-bold text-[#1E1A1B] mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#9E676E]" />
                    <span>Core Skills</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#594E51]">
                    {CORE_SKILLS.map((skill) => (
                      <li key={skill.name} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9E676E]" />
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Section */}
                <div>
                  <h3 className="font-display text-lg font-bold text-[#1E1A1B] mb-3 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#9E676E]" />
                    <span>Contact</span>
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-[#594E51]">
                    <div className="flex items-start gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#9E676E] mt-0.5 shrink-0" />
                      <span>{PORTFOLIO_INFO.phone}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#9E676E] mt-0.5 shrink-0" />
                      <span className="break-all">{PORTFOLIO_INFO.email}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#9E676E] mt-0.5 shrink-0" />
                      <span>{PORTFOLIO_INFO.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Work Experience */}
              <div className="md:col-span-7 space-y-8">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#1E1A1B] mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#9E676E]" />
                    <span>Experience</span>
                  </h3>

                  <div className="p-5 rounded-2xl bg-[#FAF7F7] border border-[#EADBDD]">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-bold text-base text-[#1E1A1B]">
                        {EXPERIENCE.role}
                      </h4>
                      <span className="text-xs font-mono text-[#8C777C] whitespace-nowrap">
                        {EXPERIENCE.period}
                      </span>
                    </div>
                    <div className="text-xs text-[#9E676E] font-medium mb-3">
                      {EXPERIENCE.establishment}
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-[#594E51]">
                      <CheckCircle2 className="w-4 h-4 text-[#9E676E] shrink-0 mt-0.5" />
                      <span>{EXPERIENCE.description}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
