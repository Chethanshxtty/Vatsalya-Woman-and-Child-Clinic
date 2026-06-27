import { Heart, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-24 sm:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Upper Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-brand-blush/20 flex items-center justify-center text-brand-blush">
                <Heart className="w-5 h-5 fill-brand-blush/30" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white">
                  Vatsalya Clinic
                </span>
                <span className="text-[10px] text-brand-cream/60 font-medium tracking-wide">
                  Woman & Child Clinic
                </span>
              </div>
            </div>
            
            <p className="text-sm text-brand-cream/80 leading-relaxed font-light max-w-sm">
              Providing professional gynecology, maternity, and pediatric care for families across Mangaluru with patience and dedication.
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-base text-brand-blush">Contact Us</h4>
            
            <ul className="space-y-3 text-sm text-brand-cream/80 font-light">
              <li className="flex items-center gap-2">
                <Phone className="w-4.5 h-4.5 text-brand-sage shrink-0" />
                <a href="tel:09482062584" className="hover:text-brand-blush transition-colors duration-200">
                  094820 62584
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4.5 h-4.5 text-brand-sage mt-0.5 shrink-0" />
                <span>Balmatta Rd, Mallikatte, Kadri, Mangaluru, Karnataka 575001</span>
              </li>
            </ul>
          </div>

          {/* Timings Details */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-base text-brand-blush">Clinic Timings</h4>
            
            <div className="text-sm text-brand-cream/80 space-y-2 font-light">
              <div className="flex items-start gap-2">
                <Clock className="w-4.5 h-4.5 text-brand-sage mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  <p className="font-semibold text-white">Mon – Sat:</p>
                  <p>9:30 AM – 1:00 PM</p>
                  <p>4:30 PM – 7:30 PM</p>
                  <p className="font-semibold text-brand-blush mt-1">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Final CTA buttons */}
        <div className="border-t border-brand-cream/10 pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-sm text-brand-cream/60 mb-2 sm:mb-0">Ready to consult?</span>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="tel:09482062584"
              className="btn-soft inline-flex items-center justify-center gap-2 bg-brand-blush hover:bg-brand-blush-dark text-white px-6 py-3 cursor-pointer text-sm font-semibold text-center"
            >
              <Phone className="w-4 h-4 fill-white" />
              Call 094820 62584
            </a>
          </div>
        </div>

        {/* Disclaimer and copyright */}
        <div className="border-t border-brand-cream/10 pt-8 text-center space-y-4">
          <p className="text-xs text-brand-cream/50 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-brand-blush">Disclaimer:</span> Please call to confirm appointment availability and timings. This website is for informational purposes and does not substitute professional medical advice, diagnosis, or emergency treatments.
          </p>
          
          <p className="text-xs text-brand-cream/40 font-light">
            © {new Date().getFullYear()} Vatsalya Woman and Child Clinic. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
