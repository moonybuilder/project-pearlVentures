import React, { useState } from 'react';

const destinations = [
  {
    title: 'Gorilla Trekking',
    location: 'Uganda',
    image: 'https://images.pexels.com/photos/6650184/pexels-photo-6650184.jpeg'
  },
  {
    title: 'Zanzibar Beach Getaway',
    location: 'Tanzania',
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg'
  },
  {
    title: 'Maasai Mara Safari',
    location: 'Kenya',
    image: 'https://images.pexels.com/photos/13456661/pexels-photo-13456661.jpeg'
  },
  {
    title: 'Kigali Culture Tour',
    location: 'Rwanda',
    image: 'https://images.pexels.com/photos/5187231/pexels-photo-5187231.jpeg'
  },
  {
    title: 'Sipi Falls Hiking',
    location: 'Uganda',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg'
  }
];

const DestinationsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600">
            Discover our most sought-after experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{destination.title}</h3>
                  <p className="text-white/90">{destination.location}</p>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${
                    hoveredIndex === index ? 'max-h-32 mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Tours
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;