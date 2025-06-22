import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const benefits = [
    "AI-powered personalized itineraries",
    "Local guides with expert knowledge",
    "Sustainable and responsible tourism",
    "24/7 support during your trip",
    "Flexible booking options",
    "Best price guarantee"
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="rounded-xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg" 
              alt="Pearl Ventures Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900/80 to-transparent p-6">
              <span className="text-white font-semibold text-lg">Our expert travel team</span>
            </div>
          </div>
          
          {/* Right: Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Pearl Ventures
            </h2>
            
            <div className="w-24 h-1 bg-emerald-600 mb-6"></div>
            
            <p className="text-gray-700 mb-6 text-lg">
              Pearl Ventures is reimagining travel in Africa through the power of artificial intelligence. Our mission is to make immersive, safe, and seamless travel experiences available to everyone.
            </p>
            
            <p className="text-gray-700 mb-8">
              Founded by travel enthusiasts and technology experts, we combine deep local knowledge with cutting-edge AI to create personalized travel experiences that match your preferences perfectly.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check size={20} className="text-emerald-600" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;