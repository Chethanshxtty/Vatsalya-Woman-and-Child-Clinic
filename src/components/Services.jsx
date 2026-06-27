import React from 'react';
import { motion } from 'motion/react';
import { Heart, Baby } from 'lucide-react';

/**
 * Services Component
 * Renders the healthcare specialties offered by the clinic.
 * Divided clearly into two distinct columns to avoid mixing specialties:
 * 1. Women's Health (Pink accent colors and icons)
 * 2. Child Care (Sage green accent colors and icons)
 */
export default function Services() {
  // Gynecology and Pregnancy-related offerings
  const womensHealthServices = [
    {
      title: 'Gynecology Consultation',
      desc: 'Expert care for general gynecological issues, wellness visits, and hormone health.',
    },
    {
      title: 'Prenatal Care',
      desc: 'Nurturing checkups, health guidelines, and scans for expecting mothers.',
    },
    {
      title: 'Postnatal Care',
      desc: 'Recovery guidance, breastfeeding counsel, and wellness tracking after birth.',
    },
    {
      title: 'Family Planning',
      desc: 'Confidential consultations and safe options for spacing pregnancies.',
    },
  ];

  // Pediatric-related offerings
  const childCareServices = [
    {
      title: 'Pediatric Checkups',
      desc: 'Comprehensive checkups, common cold/fever care, and childhood health solutions.',
    },
    {
      title: 'Vaccination',
      desc: 'Complete immunization programs mapping to standard guidelines.',
    },
    {
      title: 'Growth Monitoring',
      desc: 'Scientific tracking of child height, weight, and developmental milestones.',
    },
    {
      title: 'Newborn Care',
      desc: 'Gentle support for lactation, newborn sleep patterns, and early health needs.',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-charcoal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            Specialized Care Under One Roof
          </motion.h2>
          <p className="text-brand-charcoal-light text-sm sm:text-base">
            Providing comprehensive care across two primary medical wings, tailored to the unique needs of mothers and children.
          </p>
          <div className="w-16 h-1 bg-brand-blush mx-auto rounded-full mt-2" />
        </div>

        {/* Split Grid: Separates the specialties visually using pink and sage green accents */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Column 1: Women's Health (Pink Accent) */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {/* Header for Women's Health Wing */}
            <div className="flex items-center gap-3 bg-brand-blush-light p-4 rounded-2xl border border-brand-blush/20">
              <div className="w-12 h-12 rounded-xl bg-brand-blush flex items-center justify-center text-white shadow-sm">
                <Heart className="w-6 h-6 fill-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-charcoal">Women's Health</h3>
                <p className="text-xs text-brand-blush-dark font-semibold">Gynecology & Maternity Care</p>
              </div>
            </div>

            {/* Grid of subservices */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {womensHealthServices.map((service, index) => (
                <div 
                  key={index}
                  className="card-soft bg-white p-5 space-y-3 hover:shadow-lg hover:shadow-brand-blush/5 transition-all duration-300 border-l-4 border-l-brand-blush"
                >
                  <h4 className="font-heading font-bold text-base text-brand-charcoal">
                    {service.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-charcoal-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Child Care (Sage Green Accent) */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {/* Header for Child Care Wing */}
            <div className="flex items-center gap-3 bg-brand-sage-light p-4 rounded-2xl border border-brand-sage/20">
              <div className="w-12 h-12 rounded-xl bg-brand-sage flex items-center justify-center text-white shadow-sm">
                <Baby className="w-6 h-6 fill-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-charcoal">Child Care</h3>
                <p className="text-xs text-brand-sage-dark font-semibold">Pediatric Care & Immunizations</p>
              </div>
            </div>

            {/* Grid of subservices */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {childCareServices.map((service, index) => (
                <div 
                  key={index}
                  className="card-soft bg-white p-5 space-y-3 hover:shadow-lg hover:shadow-brand-sage/5 transition-all duration-300 border-l-4 border-l-brand-sage"
                >
                  <h4 className="font-heading font-bold text-base text-brand-charcoal">
                    {service.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-charcoal-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
