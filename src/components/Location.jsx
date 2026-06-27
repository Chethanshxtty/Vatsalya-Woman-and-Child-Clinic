import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Calendar } from 'lucide-react';

/**
 * Location Component
 * Features:
 * - A detailed contact info card containing working hours and address details
 * - A responsive Google Maps iframe showing the physical clinic location
 * - A "Get Directions" button that opens navigation to the clinic
 */
export default function Location() {
  // Query parameters formatted for Google Maps embed and direction actions
  const addressQuery = "Vatsalya Woman and Child Clinic Balmatta Rd Mallikatte Kadri Mangaluru Karnataka 575001";
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(addressQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressQuery)}`;

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-brand-cream-dark">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header content */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-charcoal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            Find Our Clinic
          </motion.h2>
          <p className="text-brand-charcoal-light text-sm sm:text-base">
            Located in the heart of Kadri/Mallikatte area, making it easy to visit for families across Mangaluru.
          </p>
          <div className="w-16 h-1 bg-brand-blush mx-auto rounded-full mt-2" />
        </div>

        {/* Content Box Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card Column */}
          <motion.div 
            className="lg:col-span-4 flex flex-col justify-between p-8 bg-white card-soft gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {/* Address detail sub block */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-blush-light text-brand-blush-dark flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-brand-charcoal text-base">Address</h4>
                  <p className="text-sm text-brand-charcoal-light leading-relaxed">
                    Vatsalya Woman and Child Clinic<br />
                    Balmatta Rd, Mallikatte, Kadri,<br />
                    Mangaluru, Karnataka 575001
                  </p>
                </div>
              </div>

              {/* Clinic Timings sub block: split into morning and evening sessions */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-sage-light text-brand-sage-dark flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-bold text-brand-charcoal text-base">Working Hours</h4>
                  <div className="text-sm text-brand-charcoal-light space-y-1 font-normal">
                    <p className="flex justify-between gap-4">
                      <span>Mon – Sat:</span>
                      <span className="font-semibold">9:30 AM – 1:00 PM</span>
                    </p>
                    <p className="flex justify-between gap-4">
                      <span></span>
                      <span className="font-semibold">4:30 PM – 7:30 PM</span>
                    </p>
                    <p className="flex justify-between gap-4 text-brand-blush-dark font-semibold">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Outbound navigation action button */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-soft inline-flex items-center justify-center gap-2.5 bg-brand-sage hover:bg-brand-sage-dark text-white py-4 shadow-md shadow-brand-sage/20 cursor-pointer text-base"
            >
              <Navigation className="w-4.5 h-4.5 fill-white" />
              Get Directions on Map
            </a>
          </motion.div>

          {/* Map Embed Column: Renders the standard Google Maps output in absolute viewport */}
          <motion.div 
            className="lg:col-span-8 overflow-hidden rounded-[24px] shadow-lg border border-white relative min-h-[300px] sm:min-h-[400px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vatsalya Woman and Child Clinic Map Location"
              className="absolute inset-0 w-full h-full"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
