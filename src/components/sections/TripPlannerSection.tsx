import React from 'react';
import { MessageSquare, Sparkles, Calendar } from 'lucide-react';

const TripPlannerSection = () => {
  const steps = [
    {
      icon: <MessageSquare size={36} className="text-emerald-600" />,
      title: "Tell us your preferences",
      description: "Share your travel style via our smart form or AI chat"
    },
    {
      icon: <Sparkles size={36} className="text-emerald-600" />,
      title: "We plan your perfect tour",
      description: "Our AI combines with local expertise to create your ideal itinerary"
    },
    {
      icon: <Calendar size={36} className="text-emerald-600" />,
      title: "Book & enjoy with confidence",
      description: "Secure your trip with 24/7 support throughout your journey"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Your perfect trip is just three steps away
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 w-1/4 h-0.5 bg-emerald-200"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Start Planning Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default TripPlannerSection;