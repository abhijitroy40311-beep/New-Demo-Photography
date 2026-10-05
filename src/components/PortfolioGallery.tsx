import React, { useState } from 'react';
import { PortfolioItem } from '../data/photography';
import { Lightbox } from './Lightbox';
import { Maximize2, Sparkles } from 'lucide-react';
import { useRealPhotos } from '../context/PhotoContext';

export const PortfolioGallery: React.FC = () => {
  const { portfolioItems } = useRealPhotos();
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: `All Work (${portfolioItems.length})` },
    { id: 'Wedding', label: 'Weddings' },
    { id: 'Couple', label: 'Couples & Maternity' },
    { id: 'Kids', label: 'Baby & Kids' },
    { id: 'Family', label: 'Family' },
    { id: 'Event', label: '1st Birthdays' },
    { id: 'Creative', label: 'Creative & Fashion' },
  ];

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.label === activeCategory);

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                PORTFOLIO
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-600" />
                Real Client Gallery ({portfolioItems.length} Shoots)
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 mb-2">
              A Look at Our Work
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Real moments. Real people. Real photography across India.
            </p>
          </div>

          {/* Interactive Filter Tabs & Upload Real Photos Action */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-white text-slate-900 shadow-2xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Editorial Mixed-Layout Photography Grid of All 11 Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          
          {filteredItems.map((item) => {
            let colSpanClass = 'md:col-span-6';
            if (activeCategory === 'all') {
              if (item.id === 'photo-9') colSpanClass = 'md:col-span-8'; // Wedding Bougainvillea wide feature
              else if (item.id === 'photo-15') colSpanClass = 'md:col-span-4'; // Sunset Maternity Twirl
              else if (item.id === 'photo-13') colSpanClass = 'md:col-span-4'; // Butterfly Editorial portrait
              else if (item.id === 'photo-14') colSpanClass = 'md:col-span-4'; // Boho Festival Angel portrait
              else if (item.id === 'photo-12') colSpanClass = 'md:col-span-4'; // Girl with sunflowers portrait
              else if (item.id === 'photo-3') colSpanClass = 'md:col-span-6'; // Sunflower couple
              else if (item.id === 'photo-2') colSpanClass = 'md:col-span-6'; // B&W Movement
              else if (item.id === 'photo-7') colSpanClass = 'md:col-span-7'; // Purple smoke on rocks
              else if (item.id === 'photo-5') colSpanClass = 'md:col-span-5'; // 1st Birthday Teepee setup
              else if (item.id === 'photo-6') colSpanClass = 'md:col-span-4'; // Sunset Birthday vertical card
              else if (item.id === 'photo-8') colSpanClass = 'md:col-span-4'; // Father & son linen
              else if (item.id === 'photo-10') colSpanClass = 'md:col-span-4'; // Mother & daughter white tulle
              else if (item.id === 'photo-4') colSpanClass = 'md:col-span-6'; // Baby with bears
              else if (item.id === 'photo-11') colSpanClass = 'md:col-span-6'; // Baby girl with balloons
            }

            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`View photo: ${item.title}`}
                className={`group cursor-pointer rounded-xl overflow-hidden bg-white border border-slate-100 hover:border-slate-300 shadow-2xs hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${colSpanClass}`}
                onClick={() => setSelectedItem(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
              >
                <div
                  className={`relative w-full overflow-hidden bg-slate-50 ${
                    item.orientation === 'portrait'
                      ? 'aspect-[3/4]'
                      : item.id === 'photo-10' && activeCategory === 'all'
                      ? 'aspect-[21/9]'
                      : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-xs px-3.5 py-1.5 rounded-md flex items-center gap-1.5 backdrop-blur-xs font-medium">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View Full Image</span>
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-amber-600 font-bold">
                      {item.label} · {item.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {item.location.split(',')[0]}
                    </span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-medium text-slate-900 mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <Lightbox
          item={selectedItem}
          items={portfolioItems}
          onClose={() => setSelectedItem(null)}
          onNavigate={(newItem) => setSelectedItem(newItem)}
        />
      )}
    </section>
  );
};
