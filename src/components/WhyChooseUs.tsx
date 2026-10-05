import React from 'react';
import { WHY_CHOOSE_US } from '../data/photography';
import { Compass, Sparkles, Smile, Eye } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <Compass className="w-5 h-5 text-amber-600" />,
    <Sparkles className="w-5 h-5 text-amber-600" />,
    <Smile className="w-5 h-5 text-amber-600" />,
    <Eye className="w-5 h-5 text-amber-600" />,
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
            OUR APPROACH
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 mb-3">
            Why People Choose Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From your first message on WhatsApp to delivering your final edited gallery, we ensure every part of the experience is calm, relaxed and enjoyable.
          </p>
        </div>

        {/* 4 Clean Columns (Pure White Cards with Subtle Border) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className="p-6 rounded-xl border border-slate-100 bg-white hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-50/70 border border-amber-100 flex items-center justify-center mb-5">
                {icons[index]}
              </div>

              <h3 className="font-serif text-lg font-medium text-slate-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Quote Highlight Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="font-serif italic text-base sm:text-lg text-slate-900">
              “The team was amazing... They held our hands and literally guided us through different poses in which we would look natural and good.”
            </p>
            <p className="text-xs text-slate-500 mt-1">
              — Shanta Chakpram, Google Review (5.0 ★)
            </p>
          </div>
          <span className="text-xs font-bold text-amber-700 uppercase tracking-wider shrink-0 bg-amber-100/60 px-3 py-1.5 rounded-md">
            Comfortable for first-timers
          </span>
        </div>

      </div>
    </section>
  );
};
