import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/photography';
import { MessageCircle, Star, ArrowDown, MapPin, Camera, Sparkles } from 'lucide-react';
import { useRealPhotos } from '../context/PhotoContext';

interface HeroProps {
  onViewPortfolio?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewPortfolio }) => {
  const { portfolioItems } = useRealPhotos();

  // Primary highlighted hero photos from the uploaded images
  const heroCandidates = [
    portfolioItems.find((p) => p.id === 'photo-9') || portfolioItems[0],
    portfolioItems.find((p) => p.id === 'photo-3') || portfolioItems[1],
    portfolioItems.find((p) => p.id === 'photo-2') || portfolioItems[2],
    portfolioItems.find((p) => p.id === 'photo-10') || portfolioItems[portfolioItems.length - 1],
  ].filter((p): p is typeof portfolioItems[0] => Boolean(p));

  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const currentHero = heroCandidates[activeHeroIndex] || heroCandidates[0] || portfolioItems[0];

  // Professional background image: Photo 2 (B&W artistic sheer fabric PNG)
  const bgImage = portfolioItems.find((p) => p.id === 'photo-2') || portfolioItems[0];

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-16 sm:pt-10 sm:pb-24 lg:pb-28 overflow-hidden bg-white">
      {/* PROFESSIONAL PHOTOGRAPHIC BACKGROUND WITH PURE WHITE GRADIENT SCRIM */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-20">
        <img
          src={bgImage.src}
          alt="India Photography Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top scale-105 filter grayscale contrast-125"
        />
        {/* Crisp White Scrim ensuring white background priority */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Lead Block */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          {/* Small Label */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-600">
              India PHOTOGRAPHER
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              {BUSINESS_INFO.locationBrief}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 leading-[1.14] text-balance mb-4">
            Capturing Your Best Moments in India
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal mb-6">
            Wedding moments, couple shoots, portraits and creative photoshoots — captured naturally with beautiful light and attention to detail.
          </p>

          {/* Action CTAs & Trust Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-1">
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Book a Shoot on WhatsApp</span>
              </a>

              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  if (onViewPortfolio) onViewPortfolio();
                  else handleScrollTo('#portfolio');
                }}
                className="inline-flex items-center justify-center gap-1.5 border border-slate-200 hover:border-slate-900 bg-white text-slate-800 hover:text-slate-900 text-sm font-medium px-5 py-3.5 rounded-lg transition-colors shadow-2xs"
              >
                <span>View Portfolio</span>
                <ArrowDown className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

            {/* Trust Element: 5.0 • 532 Google Reviews */}
            <div className="flex items-center gap-2 pt-1 sm:pt-0 sm:border-l sm:border-slate-200 sm:pl-6">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <div className="text-xs text-slate-600">
                <strong className="font-semibold text-slate-900 tabular-nums">5.0</strong>
                <span className="mx-1 text-slate-300">·</span>
                <span className="tabular-nums font-semibold">{BUSINESS_INFO.reviewCount}</span> Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual Container */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-50 shadow-md">
          <div className="aspect-[16/10] sm:aspect-[21/10] w-full relative bg-slate-100">
            <img
              src={currentHero.src}
              alt={currentHero.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-all duration-300"
              loading="eager"
            />
            
            {/* Subtle photographic corner caption overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent flex items-end justify-between text-white">
              <div>
                <p className="text-xs sm:text-sm font-semibold tracking-wide text-white">
                  {currentHero.title}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-200">
                  {currentHero.location} · {currentHero.category}
                </p>
              </div>

              {/* Interactive Quick-Switcher among the uploaded real photos */}
              <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md p-1 rounded-lg border border-white/10">
                {heroCandidates.map((photo, idx) => (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => setActiveHeroIndex(idx)}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors ${
                      activeHeroIndex === idx
                        ? 'bg-white text-slate-950 font-bold shadow-xs'
                        : 'text-white/70 hover:text-white'
                    }`}
                    title={photo.title}
                  >
                    {idx === 0 && 'Weddings'}
                    {idx === 1 && 'Couples'}
                    {idx === 2 && 'Creative'}
                    {idx === 3 && 'Family'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights Under Hero (Pure White Cards) */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3.5 rounded-xl border border-slate-100 bg-white shadow-2xs flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">Real Portfolio</p>
              <p className="text-[11px] text-slate-500">14 Client Moments</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-100 bg-white shadow-2xs flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">Sunset Timing</p>
              <p className="text-[11px] text-slate-500">Golden Hour Light</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-100 bg-white shadow-2xs flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">North &amp; South India</p>
              <p className="text-[11px] text-slate-500">Beaches &amp; Villas</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-100 bg-white shadow-2xs flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900">5.0 Star Rated</p>
              <p className="text-[11px] text-slate-500">532 Google Reviews</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
