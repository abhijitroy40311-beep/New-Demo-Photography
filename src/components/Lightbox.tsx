import React, { useEffect, useCallback, useState, useRef } from 'react';
import { PortfolioItem, BUSINESS_INFO } from '../data/photography';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

interface LightboxProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onNavigate: (newItem: PortfolioItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, items, onClose, onNavigate }) => {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;
  const touchStartX = useRef<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleNext = useCallback(() => {
    setImageLoaded(false);
    if (currentIndex >= 0 && currentIndex < items.length - 1) {
      onNavigate(items[currentIndex + 1]);
    } else {
      onNavigate(items[0]);
    }
  }, [currentIndex, items, onNavigate]);

  const handlePrev = useCallback(() => {
    setImageLoaded(false);
    if (currentIndex > 0) {
      onNavigate(items[currentIndex - 1]);
    } else {
      onNavigate(items[items.length - 1]);
    }
  }, [currentIndex, items, onNavigate]);

  // Preload neighboring images for instantaneous sliding
  useEffect(() => {
    if (currentIndex === -1 || items.length <= 1) return;
    const nextIdx = (currentIndex + 1) % items.length;
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    
    const nextImg = new Image();
    nextImg.src = items[nextIdx].src;
    const prevImg = new Image();
    prevImg.src = items[prevIdx].src;
  }, [currentIndex, items]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleNext, handlePrev, onClose]);

  // Mobile swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  if (!item) return null;

  const enquiryUrl = `https://wa.me/${BUSINESS_INFO.phoneCall.replace('+', '')}/?text=${encodeURIComponent(
    `Hello ${BUSINESS_INFO.name}, I loved the photo "${item.title}" (${item.category}) in your portfolio. Can we discuss a photoshoot in this style?`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 text-white animate-fade-in backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Lightbox Header Bar (Clean, minimal) */}
      <div className="w-full px-4 sm:px-8 py-3.5 flex items-center justify-between border-b border-white/10 shrink-0 bg-black/40">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-white/50">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="text-white/30">|</span>
          <span className="text-xs uppercase tracking-wider text-[#FDB863] font-medium">
            {item.label}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close Lightbox (Esc)"
          title="Close (Esc)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div 
        className="relative flex-1 flex items-center justify-center p-3 sm:p-8 min-h-0 select-none"
        onClick={(e) => {
          // If clicked directly on stage background (not on the image), close lightbox
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 z-10 p-3 text-white/70 hover:text-white hover:bg-white/15 rounded-full transition-colors cursor-pointer"
          aria-label="Previous image"
          title="Previous image (Left Arrow)"
        >
          <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
        </button>

        {/* The Image Container with subtle fade-in */}
        <div className="max-w-5xl max-h-full flex items-center justify-center p-2">
          <img
            key={item.id}
            src={item.src}
            alt={item.alt}
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            className={`max-h-[68vh] sm:max-h-[76vh] w-auto max-w-full object-contain rounded-sm transition-opacity duration-200 ${
              imageLoaded ? 'opacity-100' : 'opacity-80'
            }`}
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-10 p-3 text-white/70 hover:text-white hover:bg-white/15 rounded-full transition-colors cursor-pointer"
          aria-label="Next image"
          title="Next image (Right Arrow)"
        >
          <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* Lightbox Caption & Direct Action Footer */}
      <div className="w-full px-4 sm:px-8 py-3.5 bg-black/80 border-t border-white/10 shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="text-sm sm:text-base font-serif font-medium text-white">
            {item.title}
          </h3>
          <p className="text-xs text-white/60">
            {item.category} · {item.location}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-slate-950 font-semibold text-xs px-4 py-2 rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
            <span>Enquire on WhatsApp</span>
          </a>
          <a
            href={BUSINESS_INFO.telLink}
            className="text-xs text-white/70 hover:text-white underline underline-offset-4"
          >
            Call {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
};
