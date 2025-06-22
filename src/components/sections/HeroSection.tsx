import React, { useState } from 'react';
import { Calendar, MapPin, User } from 'lucide-react';

const HeroSection = () => {
  const [searchParams, setSearchParams] = useState({
    destination: '',
    date: '',
    travelers: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search params:', searchParams);
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/4577791/pexels-photo-4577791.jpeg"
          alt="East African landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Unforgettable East African Adventures — Tailored by AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Let Pearl Ventures plan your next trip with precision. Smart. Seamless. Authentic.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Plan My Trip
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg text-lg font-semibold backdrop-blur-sm transition-colors">
              See Packages
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
                  <MapPin size={20} />
                </div>
                <input
                  type="text"
                  name="destination"
                  placeholder="Destination"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={searchParams.destination}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
                  <Calendar size={20} />
                </div>
                <input
                  type="date"
                  name="date"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={searchParams.date}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
                  <User size={20} />
                </div>
                <input
                  type="number"
                  name="travelers"
                  placeholder="Travelers"
                  min="1"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  value={searchParams.travelers}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;