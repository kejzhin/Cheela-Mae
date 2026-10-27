/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [forceLoading, setForceLoading] = useState(false);

  const handleReplayLoading = () => {
    sessionStorage.removeItem('portfolio_intro_shown');
    setForceLoading(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F7] text-[#1E1A1B] flex flex-col font-sans selection:bg-[#9E676E] selection:text-white">
      {/* Opening & Reload Loading Screen Animation */}
      <LoadingScreen
        forceShow={forceLoading}
        onComplete={() => setForceLoading(false)}
      />

      {/* Top Bar Navigation adhering to 3-zone contract */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections strictly based on the user's authentic resume */}
      <main className="flex-1">
        <Hero />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onReplayLoading={handleReplayLoading} />

      {/* Interactive Resume View & Print Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
