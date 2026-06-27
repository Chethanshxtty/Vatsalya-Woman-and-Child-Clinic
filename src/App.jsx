import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MobileBottomBar from './components/MobileBottomBar';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Booking from './components/Booking';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-cream text-brand-charcoal overflow-x-hidden selection:bg-brand-blush-light selection:text-brand-blush-dark pb-16 sm:pb-0">
      
      {/* Background Soft Blurry Gradient Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-brand-blush/10 blob-gradient -z-20" />
      <div className="absolute top-[35%] right-[-10%] w-[45vw] h-[45vw] max-w-[500px] rounded-full bg-brand-sage/10 blob-gradient -z-20" />
      <div className="absolute top-[60%] left-[-5%] w-[40vw] h-[40vw] max-w-[450px] rounded-full bg-brand-blush/8 blob-gradient -z-20" />
      <div className="absolute top-[80%] right-[10%] w-[35vw] h-[35vw] max-w-[400px] rounded-full bg-brand-sage/8 blob-gradient -z-20" />

      {/* Main Layout Elements */}
      <Header />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Booking />
        <Location />
      </main>

      <Footer />

      {/* Sticky Bottom Actions Bar (Mobile Only) */}
      <MobileBottomBar />

    </div>
  );
}
