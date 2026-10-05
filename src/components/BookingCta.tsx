import React from 'react';
import { BUSINESS_INFO } from '../data/photography';
import { MessageCircle, Phone, Clock } from 'lucide-react';
import { useRealPhotos } from '../context/PhotoContext';

export const BookingCta: React.FC = () => {
  const { portfolioItems } = useRealPhotos();

  // Use Photo 6 (Sunset Family Birthday with glowing neon sign) as the professional background visual
  const ctaBgPhoto = portfolioItems.find((p) => p.id === 'photo-6') || portfolioItems[0];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Luxury Professional Banner with Photographic Background */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-900 bg-slate-950 text-white shadow-xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Subtle Photographic Background across entire banner */}
          <div className="absolute inset-0 pointer-events-none opacity-30 select-none">
            <img
              src={ctaBgPhoto.src}
              alt="Goa Photography Shoot Sunset"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          </div>

          {/* Text and Actions (Left 7 Cols) */}
          <div className="relative lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between z-10">
            <div>
              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-amber-400 uppercase mb-4 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>{BUSINESS_INFO.status}</span>
              </div>

              {/* Main Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-4 leading-tight">
                Planning a Photoshoot in Goa?
              </h2>

              {/* Copy */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed mb-8">
                Tell us what you have in mind and let's create something beautiful together.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                {/* Primary WhatsApp CTA */}
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-slate-950 text-sm font-bold px-6 py-3.5 rounded-lg transition-colors whitespace-nowrap shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>WhatsApp Us</span>
                </a>

                {/* Secondary Call CTA */}
                <a
                  href={BUSINESS_INFO.telLink}
                  className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-5 py-3.5 rounded-lg transition-colors whitespace-nowrap backdrop-blur-xs"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Quick response note */}
            <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="font-medium text-slate-200">Fastest response on WhatsApp</span>
              <span className="text-white/30">·</span>
              <span>Available across North &amp; South Goa</span>
              <span className="text-white/30">·</span>
              <span>Sunset golden hour slots fill quickly</span>
            </div>
          </div>

          {/* Right Image Feature Window (5 Cols) */}
          <div className="relative lg:col-span-5 min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/10 overflow-hidden">
            <img
              src={ctaBgPhoto.src}
              alt={ctaBgPhoto.alt}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-950/60 lg:to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
              <p className="font-serif italic text-sm text-white font-medium">
                “Finding the right light and creating images you will genuinely enjoy.”
              </p>
              <p className="text-[11px] text-slate-300 mt-0.5">
                {BUSINESS_INFO.name} · {BUSINESS_INFO.locationBrief}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
