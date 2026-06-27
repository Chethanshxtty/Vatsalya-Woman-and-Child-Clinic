import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareCode, ArrowUpRight } from 'lucide-react';

/**
 * Reviews Component
 * Displays real clinical review summaries (paraphrased to protect privacy)
 * detailing experiences from expectant mothers, pediatric patients, and general gynecological care.
 * Displays overall Google reviews badge and outbound link to Google search listings.
 */
export default function Reviews() {
  // Paraphrased clinical testimonials representing core care themes
  const reviews = [
    {
      author: 'A Happy Mother',
      relation: 'Maternity Patient',
      text: 'The doctor is exceptionally experienced and gentle. They patiently answered all of my pregnancy concerns and made me feel completely comfortable throughout the journey.',
      stars: 5,
    },
    {
      author: 'Family from Kadri',
      relation: 'Gynecology Patient',
      text: 'Without a doubt, one of the best and most recommended clinics in Mangaluru for gynecology. The warmth and care they extend to families is truly reassuring.',
      stars: 5,
    },
    {
      author: 'Parent of Toddler',
      relation: 'Pediatric Care',
      text: 'A very knowledgeable and humble physician. Their clear advice and soft handling made our baby\'s vaccination appointment completely smooth and stress-free.',
      stars: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-brand-cream-dark">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading & Rating Highlight */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-brand-blush/20">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-charcoal">
              Loved by Local Families
            </h2>
            <p className="text-brand-charcoal-light max-w-lg text-sm sm:text-base">
              Here is what parents and patients in Mangaluru share about their visits and treatment experiences.
            </p>
          </div>

          {/* Aggregate Rating Score and Stars representation */}
          <div className="flex flex-col items-center md:items-end gap-2 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold text-brand-charcoal">4.7</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current stroke-current" />
                ))}
              </div>
            </div>
            <span className="text-xs text-brand-charcoal-light font-semibold">
              Based on 15 Google Reviews
            </span>
            <a
              href="https://www.google.com/search?q=Vatsalya+Woman+and+Child+Clinic+Mangaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-brand-blush-dark hover:text-brand-blush font-bold group transition-colors duration-200"
            >
              Read more on Google
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Testimonial Cards Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="card-soft bg-white p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Overlay Quote Graphic for aesthetics */}
              <div className="absolute top-6 right-8 text-brand-blush-light select-none pointer-events-none">
                <MessageSquareCode className="w-8 h-8 opacity-40" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Renders star icons list */}
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current stroke-current" />
                  ))}
                </div>
                
                <p className="text-sm sm:text-base italic text-brand-charcoal-light leading-relaxed font-normal">
                  "{rev.text}"
                </p>
              </div>

              <div className="border-t border-brand-cream-dark pt-4 mt-6">
                <h4 className="font-heading font-bold text-brand-charcoal text-sm sm:text-base">
                  {rev.author}
                </h4>
                <p className="text-xs text-brand-sage-dark font-semibold">
                  {rev.relation}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
