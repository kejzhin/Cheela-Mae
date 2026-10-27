import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Profile', href: '#profile' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#9E676E] to-[#6A3941] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F7]/95 backdrop-blur-md shadow-sm border-b border-[#EADBDD]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark */}
          <a
            href="#profile"
            className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E1A1B] font-display whitespace-nowrap shrink-0 hover:text-[#9E676E] transition-colors"
          >
            {PORTFOLIO_INFO.name}
          </a>

          {/* Zone 2: Navigation Links (Based 100% on resume sections) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#594E51]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#9E676E] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#9E676E] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#9E676E] hover:bg-[#885259] rounded-lg transition-colors shadow-sm flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
            >
              <span>View Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-[#1E1A1B] hover:bg-[#EFE3E5] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-black/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="absolute top-20 right-0 left-0 bg-[#FAF7F7] border-b border-[#EADBDD] px-6 py-6 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-2"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1E1A1B] hover:text-[#9E676E] py-2 border-b border-[#F0E5E7] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume?.();
                }}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#9E676E] rounded-lg hover:bg-[#885259] transition-colors"
              >
                View Full Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
