import React from 'react';
import { Phone } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-brand-cream/80 backdrop-blur-lg border-t border-brand-blush/10 sm:hidden pb-safe">
      {/* Call Button (Full Width) */}
      <a
        href="tel:+919482062584"
        className="w-full btn-soft inline-flex items-center justify-center gap-2 bg-brand-blush hover:bg-brand-blush-dark text-white py-3.5 shadow-md shadow-brand-blush/20 text-sm font-semibold cursor-pointer"
      >
        <Phone className="w-4 h-4 fill-white" />
        Call Clinic to Book
      </a>
    </div>
  );
}
