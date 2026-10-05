import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/photography';
import { MessageCircle, ArrowUp } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Quick contact and navigation" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-slate-950 shadow-md hover:shadow-lg flex items-center justify-center transition-all cursor-pointer"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating WhatsApp Action Pill */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-slate-950 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
        aria-label="Direct WhatsApp Enquiry"
      >
        <MessageCircle className="w-5 h-5 fill-slate-950 shrink-0" />
        <span className="hidden sm:inline-block text-xs font-bold tracking-tight">
          Chat on WhatsApp
        </span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-950 opacity-60"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-950"></span>
        </span>
      </a>
    </aside>
  );
};
