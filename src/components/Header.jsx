import React from 'react';
import { Heart, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-brand-cream/80 backdrop-blur-md border-b border-brand-blush/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Logo/Branding */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-brand-blush/20 flex items-center justify-center text-brand-blush-dark transition-transform duration-300 group-hover:scale-110">
            <Heart className="w-5 h-5 fill-brand-blush-dark/30" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-brand-charcoal">
              Vatsalya
            </span>
            <span className="text-[10px] sm:text-xs text-brand-charcoal-light font-medium tracking-wide -mt-1">
              Woman & Child Clinic
            </span>
          </div>
        </a>

        {/* CTA Call Now Button */}
        <a
          href="tel:+919482062584"
          className="btn-soft inline-flex items-center gap-2 bg-brand-blush hover:bg-brand-blush-dark text-white px-5 py-2.5 shadow-md shadow-brand-blush/20 hover:shadow-lg hover:shadow-brand-blush/30 text-sm sm:text-base cursor-pointer"
          aria-label="Call Vatsalya Clinic to book an appointment"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">Call Now</span>
          <span className="sm:hidden font-medium">Call</span>
        </a>

      </div>
    </header>
  );
}
