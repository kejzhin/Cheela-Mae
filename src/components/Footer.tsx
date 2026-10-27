import React from 'react';
import { ArrowUp, RotateCcw } from 'lucide-react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface FooterProps {
  onReplayLoading?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayLoading }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white border-t border-[#EADBDD] text-xs text-[#594E51]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Rights */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-display font-bold text-base text-[#1E1A1B]">
            {PORTFOLIO_INFO.name}
          </span>
          <span className="hidden sm:inline text-[#D8BFC2]">•</span>
          <span>© {new Date().getFullYear()} All Rights Reserved.</span>
          <span className="hidden sm:inline text-[#D8BFC2]">•</span>
          <span>Davao City, Philippines</span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          {onReplayLoading && (
            <button
              onClick={onReplayLoading}
              className="flex items-center gap-1.5 hover:text-[#9E676E] transition-colors cursor-pointer"
              title="Replay intro animation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Replay Intro</span>
            </button>
          )}

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-lg border border-[#EADBDD] hover:bg-[#FAF0F2] text-[#1E1A1B] transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
