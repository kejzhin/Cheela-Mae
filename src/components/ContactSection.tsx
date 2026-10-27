import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ExternalLink, Download } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${PORTFOLIO_INFO.name}
N:Felix;Cheela Mae;;;
TITLE:${PORTFOLIO_INFO.role}
TEL;TYPE=CELL:${PORTFOLIO_INFO.phone}
EMAIL;TYPE=INTERNET:${PORTFOLIO_INFO.email}
ADR;TYPE=HOME:;;${PORTFOLIO_INFO.location};Davao City;;;Philippines
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Cheela_Mae_Felix.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF7F7] border-t border-[#EADBDD] relative">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9E676E] mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Information</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1A1B]">
            Contact
          </h2>
        </div>

        {/* 3 Contact Cards strictly matching resume details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white border border-[#EADBDD] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF0F2] flex items-center justify-center text-[#9E676E] mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8C777C] block mb-1">
                Phone
              </span>
              <div className="font-display text-lg sm:text-xl font-bold text-[#1E1A1B] mb-2">
                {PORTFOLIO_INFO.phone}
              </div>
            </div>

            <div className="pt-6 border-t border-[#F0E5E7]">
              <a
                href={`tel:${PORTFOLIO_INFO.phone}`}
                className="w-full block py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#9E676E] hover:bg-[#885259] rounded-xl transition-colors cursor-pointer"
              >
                Call
              </a>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-white border border-[#EADBDD] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF0F2] flex items-center justify-center text-[#9E676E] mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8C777C] block mb-1">
                Email
              </span>
              <div className="font-display text-base sm:text-lg font-bold text-[#1E1A1B] break-all mb-2">
                {PORTFOLIO_INFO.email}
              </div>
            </div>

            <div className="pt-6 border-t border-[#F0E5E7]">
              <a
                href={`mailto:${PORTFOLIO_INFO.email}`}
                className="w-full block py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#9E676E] hover:bg-[#885259] rounded-xl transition-colors cursor-pointer"
              >
                Email
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white border border-[#EADBDD] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF0F2] flex items-center justify-center text-[#9E676E] mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#8C777C] block mb-1">
                Location
              </span>
              <p className="text-sm font-semibold text-[#1E1A1B] leading-relaxed mb-2">
                {PORTFOLIO_INFO.location}
              </p>
            </div>

            <div className="pt-6 border-t border-[#F0E5E7]">
              <a
                href="https://maps.google.com/?q=Matina+Davao+City+Philippines"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-[#1E1A1B] bg-[#FAF7F7] hover:bg-[#F2E8EA] border border-[#EADBDD] rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>View Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Save Contact Card action */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#9E676E] to-[#6A3941] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-[#9E676E]/20">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight mb-1 text-white">
              Connect with Cheela Mae Felix
            </h3>
            <p className="text-sm text-white/80">
              Download contact details directly to your address book.
            </p>
          </div>

          <button
            onClick={downloadVCard}
            className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#6A3941] bg-white hover:bg-[#FAF0F2] rounded-xl transition-colors shadow-md flex items-center gap-2 cursor-pointer active:scale-95 shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Save Contact Card (.vcf)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
