import React, { useState } from 'react';
import { BUSINESS_INFO, SERVICES } from '../data/photography';
import { MessageCircle, Phone, Instagram, MapPin, Navigation, Send, Check, ChevronDown, HelpCircle, Clock, ShieldCheck } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'What is the best time of day for a beach photoshoot in Goa?',
    answer: 'We exclusively shoot during the magical golden hours: either early morning sunrise (6:30 AM – 8:00 AM) when the beaches are quiet and the sea breeze is calm, or late afternoon sunset (5:00 PM – 6:45 PM) for warm, luminous coastal light.',
  },
  {
    question: 'Which locations across North and South Goa do you cover?',
    answer: 'We cover iconic locations throughout Goa including Candolim, Calangute, Baga, Vagator cliffs, Morjim shores, Chapora riverbanks, as well as heritage Portuguese Latin quarters (Fontainhas) and private resort lawns.',
  },
  {
    question: 'How quickly do we receive our edited photos?',
    answer: 'We deliver your curated, color-graded high-resolution photos through a secure private online gallery link within 3 to 5 business days, ready to download and print in full quality.',
  },
  {
    question: 'Can you organize beach setups like teepees, neon signs or flowers?',
    answer: 'Yes! We frequently design custom beachside boho teepee setups with macrame, fairy lights, marquee numbers, and fresh floral bouquets (such as yellow sunflowers) for 1st birthdays, anniversaries, and proposals.',
  },
  {
    question: 'What should we wear for our couple or family shoot?',
    answer: 'Light, flowing fabrics work best in the coastal breeze. We recommend airy whites, soft pastel linens, warm beige, and gentle earth tones. We are happy to share an outfit guide upon booking.',
  },
  {
    question: 'How do we secure our preferred date and time slot?',
    answer: 'Simply reach out via WhatsApp with your preferred dates and group size. We will confirm slot availability immediately and provide personalized location recommendations.',
  },
];

export const Contact: React.FC = () => {
  const [shootType, setShootType] = useState<string>('Wedding Photography');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [guestCount, setGuestCount] = useState<string>('Couple / 2 People');
  const [clientName, setClientName] = useState<string>('');
  const [customNotes, setCustomNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const generateWhatsAppMessage = () => {
    let msg = `Hello ${encodeURIComponent(BUSINESS_INFO.name)}!%0A`;
    if (clientName) msg += `Name: ${encodeURIComponent(clientName)}%0A`;
    msg += `Shoot: ${encodeURIComponent(shootType)}%0A`;
    if (preferredDate) msg += `Date: ${encodeURIComponent(preferredDate)}%0A`;
    msg += `People: ${encodeURIComponent(guestCount)}%0A`;
    if (customNotes) msg += `Notes: ${encodeURIComponent(customNotes)}%0A`;
    msg += `%0AI would like to check your availability and package pricing in Goa. Thank you!`;
    return `https://wa.me/${BUSINESS_INFO.phoneCall.replace('+', '')}/?text=${msg}`;
  };

  const handleCopyDetails = () => {
    const text = `${BUSINESS_INFO.name} Enquiry:\nName: ${clientName || 'Visitor'}\nShoot: ${shootType}\nDate: ${preferredDate || 'To be discussed'}\nGroup: ${guestCount}\nNotes: ${customNotes || 'None'}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
            GET IN TOUCH
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 mb-3">
            Let's Create Your Photos Together
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Reach out via WhatsApp or phone call to discuss dates, timing, locations, and styling for your Goa photoshoot.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Shoot Planner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Business Details & Direct Action Buttons (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-100 space-y-6 shadow-2xs">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-slate-900">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {BUSINESS_INFO.hindiName} · {BUSINESS_INFO.category}
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <MapPin className="w-4 h-4 text-amber-600 mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Studio Location
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {BUSINESS_INFO.fullAddress}
                  </p>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    Plus Code: {BUSINESS_INFO.plusCode}
                  </p>
                </div>
              </div>

              {/* Phone & Status */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <Phone className="w-4 h-4 text-amber-600 mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Phone &amp; Working Hours
                  </p>
                  <p className="text-sm font-semibold text-slate-900 tabular-nums">
                    {BUSINESS_INFO.phoneDisplay}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                    <Clock className="w-3 h-3 text-emerald-600" />
                    <span>{BUSINESS_INFO.status}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Details */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <MessageCircle className="w-4 h-4 text-[#25D366] mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    WhatsApp
                  </p>
                  <p className="text-xs text-slate-600">
                    Available for direct enquiries, portfolio samples &amp; instant booking queries.
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <Instagram className="w-4 h-4 text-[#E1306C] mt-1 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Instagram
                  </p>
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-900 font-semibold hover:text-amber-600 underline underline-offset-4"
                  >
                    {BUSINESS_INFO.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* WhatsApp */}
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-slate-950 text-xs font-bold py-3.5 px-4 rounded-lg transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>WhatsApp</span>
              </a>

              {/* Call */}
              <a
                href={BUSINESS_INFO.telLink}
                className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3.5 px-4 rounded-lg transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Us</span>
              </a>

              {/* Instagram */}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#E1306C]" />
                <span>Instagram</span>
              </a>

              {/* Get Directions */}
              <a
                href={BUSINESS_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-600" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Pre-Plan Shoot & Instant WhatsApp Composer (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-100 shadow-2xs">
              <h3 className="font-serif text-xl font-medium text-slate-900 mb-1">
                Plan Your Shoot
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill in what you're planning, and launch WhatsApp directly with your requirements pre-filled.
              </p>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Aditi &amp; Rahul"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                  />
                </div>

                {/* Shoot Type & Preferred Date (2 Cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Shoot Type
                    </label>
                    <select
                      value={shootType}
                      onChange={(e) => setShootType(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Preferred Date in Goa
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Group Size / Occasion */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Who is this shoot for?
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors"
                  >
                    <option value="Couple / 2 People">Couple (2 People)</option>
                    <option value="Baby &amp; Kids Milestone">Baby / Toddler Milestone</option>
                    <option value="Family / Small Group (3-6 People)">Family / Small Group (3–6 People)</option>
                    <option value="1st Birthday / Special Celebration">1st Birthday / Beach Celebration</option>
                    <option value="Wedding / Multi-Day Event">Wedding / Multi-Day Event</option>
                    <option value="Solo Portrait / Modeling">Solo Portrait / Modeling (1 Person)</option>
                  </select>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Specific locations or ideas (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    placeholder="e.g. Sunset beach shoot at Candolim or Vagator, traditional outfits, sunflowers or boho birthday teepee setup."
                    className="w-full text-xs sm:text-sm px-3.5 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-slate-900 focus:outline-none focus:border-amber-600 focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Action Buttons (Standard direct anchor to avoid window.open iframe blocks) */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-slate-950 font-bold text-xs sm:text-sm py-3.5 px-6 rounded-lg transition-colors cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>Send Enquiry on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyDetails}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-semibold py-3.5 px-4 rounded-lg transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Details Copied!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Message</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct connection with our photography team. Instant WhatsApp response.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive FAQ Section */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-slate-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900">
                Planning Your Goa Photoshoot
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Common questions about timing, locations, wardrobe, and deliverables.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200/80 bg-white overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-slate-900 hover:text-amber-700 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-amber-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
