import React from 'react';
import { motion } from 'motion/react';
import { Award, HeartHandshake, Users, Sparkles } from 'lucide-react';

export default function About() {
  const trustBadges = [
    {
      icon: Award,
      title: 'Experienced Care',
      description: 'Highly knowledgeable clinical care led by seasoned practitioners in Mangaluru.',
      bgColor: 'bg-brand-blush-light',
      iconColor: 'text-brand-blush-dark',
    },
    {
      icon: HeartHandshake,
      title: 'Kind & Patient',
      description: 'A gentle, supportive approach where you are heard and treated with warmth.',
      bgColor: 'bg-brand-sage-light',
      iconColor: 'text-brand-sage-dark',
    },
    {
      icon: Users,
      title: 'Trusted by Families',
      description: 'Highly rated care with a legacy of keeping children healthy and mothers secure.',
      bgColor: 'bg-brand-blush-light',
      iconColor: 'text-brand-blush-dark',
    },
    {
      icon: Sparkles,
      title: 'Clear Guidance',
      description: 'Direct communication, patient education, and clear pathways to health.',
      bgColor: 'bg-brand-sage-light',
      iconColor: 'text-brand-sage-dark',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-brand-cream-dark">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Heading & Text */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-charcoal tracking-tight">
              Gentle Care for Every Milestone
            </h2>
            <div className="w-16 h-1 bg-brand-blush mx-auto rounded-full" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-charcoal-light leading-relaxed font-normal"
          >
            At Vatsalya Woman and Child Clinic, we understand that healthcare is a personal and emotional journey. 
            Our clinic is designed to be a safe, comforting haven for women, expecting mothers, and young children. 
            By combining high clinical expertise with a nurturing and humble touch, we ensure that every diagnosis, 
            treatment, and checkup is explained clearly and handled with patient kindness.
          </motion.p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="card-soft bg-white p-6 text-center space-y-4 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${badge.bgColor} ${badge.iconColor} flex items-center justify-center mx-auto shadow-inner`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-brand-charcoal">
                  {badge.title}
                </h3>
                <p className="text-sm text-brand-charcoal-light leading-relaxed">
                  {badge.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
