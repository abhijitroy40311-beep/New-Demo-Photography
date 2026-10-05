import React from 'react';
import { REVIEWS, BUSINESS_INFO } from '../data/photography';
import { Star, CheckCircle2 } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Trust Signal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
              TESTIMONIALS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 mb-2">
              Loved by Our Clients
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Real feedback from travelers, couples, and families in India.
            </p>
          </div>

          {/* Google Rating Badge */}
          <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-2xs self-start md:self-auto">
            {/* Google G icon */}
            <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center font-bold text-sm text-[#4285F4]">
              G
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-lg font-bold text-slate-900 tabular-nums">
                  {BUSINESS_INFO.rating}
                </span>
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                <span className="tabular-nums font-semibold text-slate-800">{BUSINESS_INFO.reviewCount}</span> Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* 3 Real Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-white border border-slate-100 hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                {/* Review Quote (Exact authentic text) */}
                <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed italic mb-6">
                  {review.quote}
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {review.reviewer}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified Google Review</span>
                  </div>
                </div>

                <span className="text-[11px] text-slate-400 font-mono">
                  India Shoot
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Quote Highlights */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-500">
            <span>“Amazing work, loved the service.”</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>“The lighting, composition, and overall quality exceeded my expectations.”</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>“Their creativity and attention to detail truly set them apart.”</span>
          </div>
        </div>

      </div>
    </section>
  );
};
