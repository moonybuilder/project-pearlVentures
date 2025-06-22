//import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import DestinationsSection from './components/sections/DestinationsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import TripPlannerSection from './components/sections/TripPlannerSection';
import PackagesSection from './components/sections/PackagesSection';
import AboutSection from './components/sections/AboutSection';
import NewsletterSection from './components/sections/NewsletterSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DestinationsSection />
        <TestimonialsSection />
        <TripPlannerSection />
        <PackagesSection />
        <AboutSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;