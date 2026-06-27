import React from 'react';
import { motion } from 'motion/react';
import { Phone, CalendarCheck, Clock } from 'lucide-react';

export default function Booking() {
  const steps = [
    {
      number: '1',
      title: 'Call us',
      desc: 'Call our reception desk directly to check slot availability.',
      icon: Phone,
      color: 'bg-brand-blush/20 text-brand-blush-dark',
    },
    {
      number: '2',
      title: 'Share preferred time',
      desc: 'Let us know your desired checkup slot and describe your general care needs.',
      icon: Clock,
      color: 'bg-brand-sage/20 text-brand-sage-dark',
    },
    {
      number: '3',
      title: 'Visit at confirmed slot',
      desc: 'Arrive at the clinic on Balmatta Road for your direct, prompt consultation.',
      icon: CalendarCheck,
      color: 'bg-brand-blush/20 text-brand-blush-dark',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-charcoal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            How to Book an Appointment
          </motion.h2>
          <p className="text-brand-charcoal-light text-sm sm:text-base">
            No complicated forms or online payments required. Booking is fast and direct in 3 simple steps.
          </p>
          <div className="w-16 h-1 bg-brand-sage mx-auto rounded-full mt-2" />
        </div>

        {/* Steps Flow Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-0.5 border-t border-dashed border-brand-sage/40 -z-10" />

          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="card-soft bg-brand-cream-light p-8 text-center space-y-4 hover:shadow-md transition-shadow duration-300 relative"
              >
                {/* Number Badge */}
                <div className="absolute top-4 left-4 w-7.5 h-7.5 rounded-full bg-white flex items-center justify-center font-heading font-bold text-sm text-brand-charcoal shadow-sm border border-brand-cream-dark">
                  {step.number}
                </div>

                <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center mx-auto shadow-sm`}>
                  <StepIcon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold text-brand-charcoal">
                  {step.title}
                </h3>
                
                <p className="text-sm text-brand-charcoal-light leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Re-highlighting CTA buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="tel:+919482062584"
            className="w-full sm:w-auto btn-soft inline-flex items-center justify-center gap-3 bg-brand-blush hover:bg-brand-blush-dark text-white px-8 py-4.5 shadow-lg shadow-brand-blush/25 hover:shadow-xl cursor-pointer text-base font-semibold"
          >
            <Phone className="w-4.5 h-4.5 fill-white" />
            Call to Book Appointment
          </a>
        </motion.div>

      </div>
    </section>
  );
}
