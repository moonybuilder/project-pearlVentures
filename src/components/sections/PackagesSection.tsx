import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin, Star } from 'lucide-react';
import { packagesData } from '../../utils/data';

const PackagesSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const visiblePackages = packagesData.slice(startIndex, startIndex + 3);
  
  const nextSlide = () => {
    if (startIndex + 3 < packagesData.length) {
      setStartIndex(startIndex + 1);
    }
  };
  
  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Tour Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular travel experiences
          </p>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mt-6"></div>
        </div>
        
        <div className="relative">
          {/* Carousel Controls */}
          <button 
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-6 md:-ml-12 bg-white rounded-full p-3 shadow-md transition-colors ${
              startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            onClick={prevSlide}
            disabled={startIndex === 0}
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          
          <button 
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-6 md:-mr-12 bg-white rounded-full p-3 shadow-md transition-colors ${
              startIndex + 3 >= packagesData.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            onClick={nextSlide}
            disabled={startIndex + 3 >= packagesData.length}
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
          
          <div 
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500"
          >
            {visiblePackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={pkg.imageUrl} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white py-1 px-3 rounded-full text-sm font-medium">
                    {pkg.tag}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < pkg.rating ? "#10b981" : "none"} 
                        className={i < pkg.rating ? "text-emerald-500" : "text-gray-300"} 
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({pkg.reviews})</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 hover:text-emerald-600 transition-colors">
                    {pkg.title}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin size={18} className="mr-1" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-6">
                    <Clock size={18} className="mr-1" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-emerald-600">${pkg.price}</span>
                      <span className="text-gray-500 text-sm ml-1">/ person</span>
                    </div>
                    
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-colors">
            Browse All Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;