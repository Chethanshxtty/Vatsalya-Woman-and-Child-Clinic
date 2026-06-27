import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-brand-blush/20 blob-gradient -z-10" />
      <div className="absolute top-1/3 right-1/10 w-80 h-80 rounded-full bg-brand-sage/20 blob-gradient -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & CTAs */}
        <motion.div 
          className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Reassured Star Rating */}
          <div className="inline-flex items-center gap-1.5 bg-brand-blush-light text-brand-blush-dark px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-sm border border-brand-blush/10">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current stroke-current" />
              ))}
            </div>
            <span>4.7★ — 15 Happy Families</span>
          </div>

          {/* Heading and Subtitle */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-charcoal leading-tight">
              Vatsalya Woman & <br className="hidden sm:inline" />
              <span className="text-brand-blush-dark">Child Clinic</span>
            </h1>
            <p className="text-lg sm:text-xl font-medium text-brand-charcoal-light max-w-xl mx-auto lg:mx-0">
              Compassionate Care for Women & Children
            </p>
          </div>

          {/* Location details */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-brand-charcoal-light text-sm sm:text-base">
            <MapPin className="w-5 h-5 text-brand-sage-dark shrink-0" />
            <span>Balmatta Rd, Mallikatte, Kadri, Mangaluru</span>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="tel:+919482062584"
              className="w-full sm:w-auto btn-soft inline-flex items-center justify-center gap-3 bg-brand-blush hover:bg-brand-blush-dark text-white px-8 py-4 shadow-lg shadow-brand-blush/25 hover:shadow-xl cursor-pointer text-base sm:text-lg"
            >
              <Phone className="w-5 h-5 fill-white" />
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Right Column: Abstract Graphic (No photo) */}
        <motion.div 
          className="lg:col-span-5 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-[40px] bg-brand-cream-dark flex items-center justify-center p-8 border border-white shadow-xl shadow-brand-charcoal/5">
            {/* Organic circles floating behind */}
            <div className="absolute inset-4 rounded-[36px] border-2 border-dashed border-brand-blush/20 pointer-events-none" />
            
            {/* Custom Modern Mother and Child Line Art / Abstract SVG */}
            <svg 
              viewBox="0 0 400 400" 
              className="w-full h-full text-brand-blush"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Overlapping soft color shapes */}
              <circle cx="160" cy="190" r="85" fill="#FFEFEA" />
              <circle cx="240" cy="220" r="75" fill="#EBF3ED" />
              <path 
                d="M 190 260 A 60 60 0 0 1 310 260 Z" 
                fill="#FFF9F2" 
                transform="rotate(-15, 250, 260)"
              />
              
              {/* Elegant organic leaves in background */}
              <path 
                d="M 70,160 Q 60,110 100,100 Q 110,140 70,160 Z" 
                fill="#D8E8DC" 
                opacity="0.8"
              />
              <path 
                d="M 330,120 Q 300,100 290,140 Q 310,160 330,120 Z" 
                fill="#F7D8D5" 
                opacity="0.9"
              />

              {/* Mother Outline (Warm Rose Gold color) */}
              <path 
                d="M 160 310 
                   C 140 270, 145 220, 165 190 
                   C 155 170, 160 140, 175 125 
                   C 195 105, 225 110, 235 130 
                   C 245 150, 235 180, 225 195
                   C 245 220, 250 250, 255 285
                   C 260 310, 235 315, 205 315
                   C 185 315, 170 315, 160 310 Z" 
                fill="none" 
                stroke="#DE7D71" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              {/* Mother Head */}
              <circle cx="205" cy="145" r="18" fill="none" stroke="#DE7D71" strokeWidth="4" />

              {/* Baby/Child Outline (Soft Sage color) */}
              <path 
                d="M 215 280 
                   C 205 255, 210 230, 225 215 
                   C 235 200, 250 205, 255 220 
                   C 260 235, 250 250, 245 260
                   C 250 270, 255 280, 255 290" 
                fill="none" 
                stroke="#6D8E73" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              {/* Baby Head */}
              <circle cx="238" cy="222" r="11" fill="none" stroke="#6D8E73" strokeWidth="3.5" />

              {/* Swirling Heart detailing connection */}
              <path 
                d="M 190 220 C 180 200, 210 190, 205 210 C 200 230, 190 220, 190 220" 
                fill="none" 
                stroke="#DE7D71" 
                strokeWidth="2.5" 
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
