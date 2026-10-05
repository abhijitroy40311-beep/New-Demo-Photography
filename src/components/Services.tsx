import React from 'react';
import { SERVICES, BUSINESS_INFO } from '../data/photography';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
            WHAT WE DO
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 mb-4">
            Photography Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Thoughtfully planned sessions across India’s most picturesque beaches and coastlines. Focused on real emotion, soft natural lighting and timeless memories.
          </p>
        </div>

        {/* Clean Editorial Grid of 6 Services with Featured Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const encodedText = encodeURIComponent(
              `Hello ${BUSINESS_INFO.name}, I am interested in booking a ${service.title} session in India. Could you share your availability and pricing?`
            );
            const serviceWhatsAppUrl = `https://wa.me/${BUSINESS_INFO.phoneCall.replace('+', '')}/?text=${encodedText}`;

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-xl border border-slate-100 bg-white hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all duration-200 overflow-hidden"
              >
                <div>
                  {/* Photo Preview from the Client's Real Work */}
                  <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={service.featuredImage}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 pb-2">
                    {/* Editorial Number */}
                    <span className="text-xs font-mono text-slate-400 font-medium">
                      0{index + 1}.
                    </span>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-medium text-slate-900 mt-2 mb-2 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      {service.description}
                    </p>

                    <p className="text-xs text-slate-400">
                      {service.suitableFor}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    India Shoot
                  </span>

                  <a
                    href={serviceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-amber-600 transition-colors whitespace-nowrap"
                    title={`Enquire for ${service.title}`}
                  >
                    <span>Enquire on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-600" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Simple Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            Need a custom package for a multi-day wedding or special event?{' '}
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 font-semibold underline underline-offset-4 decoration-amber-600 hover:text-amber-600"
            >
              Chat directly with us on WhatsApp
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
