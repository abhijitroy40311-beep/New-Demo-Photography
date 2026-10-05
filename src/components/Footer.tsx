import React from 'react';
import { BUSINESS_INFO } from '../data/photography';
import { MessageCircle, Phone, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1C1816] text-[#FAF9F5] border-t border-[#312B27] py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#312B27]">
          
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="font-serif text-2xl font-semibold tracking-tight text-white">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-xs uppercase tracking-widest text-[#FDB863]">
              {BUSINESS_INFO.hindiName} · Photography • Goa
            </p>
            <p className="text-xs sm:text-sm text-[#A89F93] leading-relaxed max-w-sm">
              Capturing wedding vows, sunset couple shoots, lifestyle portraits and special celebrations naturally across Goa.
            </p>
            <p className="text-xs text-[#8C8377]">
              {BUSINESS_INFO.locationBrief}
            </p>
          </div>

          {/* Quick Nav Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Quick Links
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#CDC4B8]">
              {['Home', 'Portfolio', 'Services', 'Why Us', 'Reviews', 'Contact'].map((item) => {
                const target = item === 'Why Us' ? '#why-us' : `#${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <a
                      href={target}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(target);
                      }}
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Direct (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Direct Contact
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-[#CDC4B8]">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FDB863]" />
                <a href={BUSINESS_INFO.telLink} className="hover:text-white tabular-nums">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline underline-offset-4"
                >
                  {BUSINESS_INFO.instagramHandle}
                </a>
              </p>
              <p className="text-xs text-[#8F867B] pt-1">
                Hours: {BUSINESS_INFO.status}
              </p>
            </div>

            {/* Quick WhatsApp Action */}
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-slate-950 font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Location Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8377]">
          <p>© 2026 {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>5.0 ★ (532 Reviews)</span>
            <span aria-hidden="true">·</span>
            <span>{BUSINESS_INFO.locationBrief}, Goa</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
