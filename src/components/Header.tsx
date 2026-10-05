import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/photography';
import { Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onBookClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    try {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', href);
      }
    } catch {
      // Safe fallback for query selector
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ease-in-out border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-slate-200/80 shadow-xs'
          : 'bg-white border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex flex-col justify-center transition-transform duration-200 hover:scale-[1.01]"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
            {BUSINESS_INFO.name}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium -mt-0.5">
            {BUSINESS_INFO.hindiName}
          </span>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="hover:text-slate-900 hover:underline underline-offset-8 decoration-1 decoration-amber-600 transition-all duration-150 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Phone */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={BUSINESS_INFO.telLink}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap py-2 px-1"
            title={`Call ${BUSINESS_INFO.name}`}
          >
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span className="tabular-nums">{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onBookClick}
            className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Book a Shoot</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={BUSINESS_INFO.telLink}
            className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Call phone"
          >
            <Phone className="w-4 h-4 text-amber-600" />
          </a>
          
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-900 hover:bg-slate-100 rounded-md transition-colors relative w-9 h-9 flex items-center justify-center cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <div className="w-4.5 h-3.5 flex flex-col justify-between items-center relative">
              <span
                className={`h-0.5 w-4.5 bg-slate-900 rounded-full transition-all duration-300 ease-in-out transform origin-left ${
                  mobileMenuOpen ? 'rotate-45 translate-x-0.5 -translate-y-0.5' : ''
                }`}
              />
              <span
                className={`h-0.5 w-4.5 bg-slate-900 rounded-full transition-all duration-200 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`}
              />
              <span
                className={`h-0.5 w-4.5 bg-slate-900 rounded-full transition-all duration-300 ease-in-out transform origin-left ${
                  mobileMenuOpen ? '-rotate-45 translate-x-0.5 translate-y-0.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Ultra-Smooth Height, Opacity & Slide Transition */}
      <div
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
        className={`sm:hidden grid transition-all duration-300 ease-in-out bg-white/98 backdrop-blur-md overflow-hidden ${
          mobileMenuOpen
            ? 'grid-rows-[1fr] opacity-100 border-t border-slate-100 shadow-sm'
            : 'grid-rows-[0fr] opacity-0 border-t-0 pointer-events-none'
        }`}
      >
        <div className="min-h-0 px-4 pt-2.5 pb-5 space-y-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  transitionDelay: mobileMenuOpen ? `${idx * 25}ms` : '0ms',
                }}
                className={`px-3 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:text-amber-700 rounded-md transition-all duration-200 ${
                  mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold py-3 rounded-lg transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Book a Shoot on WhatsApp</span>
            </a>
            <a
              href={BUSINESS_INFO.telLink}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-800 text-sm font-medium py-2.5 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
