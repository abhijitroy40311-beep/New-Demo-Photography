import React from 'react';
import { BUSINESS_INFO } from '../data/photography';
import { Camera, Sun, Heart, Sparkles, MapPin } from 'lucide-react';
import { useRealPhotos } from '../context/PhotoContext';

export const TrustIntro: React.FC = () => {
  const { portfolioItems } = useRealPhotos();

  // Use Photo 8 (Father & Son) and Photo 2 (B&W Movement) as side proof thumbnails
  const photoFatherSon = portfolioItems.find((p) => p.id === 'photo-8') || portfolioItems[0];
  const photoMovement = portfolioItems.find((p) => p.id === 'photo-2') || portfolioItems[1];

  return (
    <section className="py-14 sm:py-20 border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Location (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-600">
              <MapPin className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.locationBrief}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-normal tracking-tight text-slate-900 leading-tight text-balance">
              Photography That Feels Natural, Personal &amp; Beautiful
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Every shoot is about more than just taking photos. It's about helping you feel comfortable, finding the right light and creating images you will genuinely enjoy looking back on.
            </p>

            <p className="text-xs text-slate-400">
              Based in North India ({BUSINESS_INFO.locationBrief}). Welcoming couples, families, and travelers from around the world.
            </p>

            {/* Review Keywords unboxed metadata */}
            <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
              <span className="font-semibold text-slate-800">Review Highlights:</span>
              <span>India photographer</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Wedding photography</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Friendly staff</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Beautiful lighting</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Attention to detail</span>
            </div>
          </div>

          {/* Right Column: 2 Real Photo Highlights in Clean White Framing (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Father & Son */}
              <div className="group rounded-xl overflow-hidden border border-slate-100 bg-white shadow-2xs hover:shadow-sm transition-all">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-50">
                  <img
                    src={photoFatherSon.src}
                    alt={photoFatherSon.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-xs text-amber-600 font-semibold mb-1">
                    <Sun className="w-3.5 h-3.5" />
                    <span>Natural Coastal Light</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {photoFatherSon.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Gentle guidance and pure candid expressions under the bright India sun.
                  </p>
                </div>
              </div>

              {/* Card 2: B&W Editorial Movement */}
              <div className="group rounded-xl overflow-hidden border border-slate-100 bg-white shadow-2xs hover:shadow-sm transition-all">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-50">
                  <img
                    src={photoMovement.src}
                    alt={photoMovement.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-xs text-amber-600 font-semibold mb-1">
                    <Camera className="w-3.5 h-3.5" />
                    <span>Creative Direction</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {photoMovement.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Artistic poses and flowing fabrics synchronized with ocean winds.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
