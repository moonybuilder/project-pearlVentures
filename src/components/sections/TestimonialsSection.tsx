import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonialsData } from '../../utils/data';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (isAutoPlaying) {
      stopAutoPlay();
      startAutoPlay();
    }
  };

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    
    return () => {
      stopAutoPlay();
    };
  }, [isAutoPlaying]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Controls */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-6 md:-ml-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-6 md:-mr-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
          
          {/* Testimonial */}
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <div className="mb-8 relative">
              <div className="h-16 w-16 md:h-24 md:w-24 rounded-full overflow-hidden absolute -top-12 left-1/2 -translate-x-1/2 border-4 border-white shadow-md">
                <img 
                  src={testimonialsData[currentIndex].photoUrl} 
                  alt={testimonialsData[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  fill={i < testimonialsData[currentIndex].rating ? "#10b981" : "none"} 
                  className={i < testimonialsData[currentIndex].rating ? "text-emerald-500" : "text-gray-300"} 
                />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl font-medium text-gray-700 text-center mb-8 italic">
              "{testimonialsData[currentIndex].quote}"
            </blockquote>
            
            <div className="text-center">
              <p className="font-semibold text-lg text-gray-900">{testimonialsData[currentIndex].name}</p>
              <p className="text-gray-500">{testimonialsData[currentIndex].country}</p>
            </div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;