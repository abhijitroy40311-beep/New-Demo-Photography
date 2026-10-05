/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustIntro } from './components/TrustIntro';
import { Services } from './components/Services';
import { PortfolioGallery } from './components/PortfolioGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { BookingCta } from './components/BookingCta';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { PhotoProvider } from './context/PhotoContext';

export default function App() {
  const [isPageMounted, setIsPageMounted] = useState(false);

  useEffect(() => {
    // Enable smooth page entrance
    setIsPageMounted(true);

    // Prevent jarring browser scroll jumping before styles mount
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToTarget = () => {
      try {
        let targetSelector = '';
        if (window.location.hash) {
          targetSelector = window.location.hash;
        } else if (window.location.pathname && window.location.pathname !== '/') {
          // Map URL subpaths like /portfolio, /services to section IDs
          const cleanPath = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
          const validSections = ['home', 'portfolio', 'services', 'why-us', 'reviews', 'contact'];
          if (validSections.includes(cleanPath)) {
            targetSelector = `#${cleanPath}`;
          }
        }

        if (targetSelector && targetSelector.startsWith('#')) {
          const targetEl = document.querySelector(targetSelector);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } catch (err) {
        // Silently handle any malformed URL hash or invalid selector
        console.warn('Safe hash navigation handled:', err);
      }
    };

    // Delay slightly to ensure fonts and layout dimensions have rendered
    const timeoutId = setTimeout(scrollToTarget, 80);

    const handleHashChange = () => {
      scrollToTarget();
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const scrollToContact = () => {
    try {
      const el = document.querySelector('#contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', '#contact');
      }
    } catch {
      // Safe fallback
    }
  };

  const scrollToPortfolio = () => {
    try {
      const el = document.querySelector('#portfolio');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', '#portfolio');
      }
    } catch {
      // Safe fallback
    }
  };

  return (
    <PhotoProvider>
      <div
        className={`min-h-screen flex flex-col bg-white text-slate-900 font-sans transition-opacity duration-300 ease-out ${
          isPageMounted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* 1. Header with smooth navigation */}
        <Header onBookClick={scrollToContact} />

        {/* Main Page Flow */}
        <main className="flex-1">
          {/* 2. Hero Section */}
          <Hero onViewPortfolio={scrollToPortfolio} />

          {/* 3. Trust & Intro Section */}
          <TrustIntro />

          {/* 4. Services Section */}
          <Services />

          {/* 5. Portfolio Section */}
          <PortfolioGallery />

          {/* 6. Why People Choose Us */}
          <WhyChooseUs />

          {/* 7. Google Reviews (5.0 ★ · 532 Reviews) */}
          <Reviews />

          {/* 8. Booking CTA Section */}
          <BookingCta />

          {/* 9. Contact Section */}
          <Contact />
        </main>

        {/* 10. Clean Footer */}
        <Footer />

        {/* Floating WhatsApp and Scroll to top */}
        <FloatingContact />
      </div>
    </PhotoProvider>
  );
}
