import React from 'react';
import { Target, Shield, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const FeaturesSection = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const { ref: socialProofRef, inView: socialProofInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const features = [
    {
      icon: <Target size={48} className="text-emerald-600" />,
      title: 'AI Personalization',
      description: 'No generic tours. Every trip is uniquely designed for you.'
    },
    {
      icon: <Shield size={48} className="text-emerald-600" />,
      title: 'Verified Local Partners',
      description: 'Travel with handpicked guides and companies we trust.'
    },
    {
      icon: <Clock size={48} className="text-emerald-600" />,
      title: 'Fast, Hassle-Free Booking',
      description: 'Book your next trip in minutes, not hours.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Social Proof */}
        <div 
          ref={socialProofRef}
          className={`text-center mb-16 transition-all duration-700 transform ${
            socialProofInView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Trusted by 10,000+ travelers from over 30 countries
          </h2>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="bg-gray-100 px-6 py-3 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <span className="text-gray-600">Trustpilot</span>
              <div className="flex items-center gap-1 text-emerald-600">
                ★★★★★ <span className="text-gray-700">4.8/5</span>
              </div>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <span className="text-gray-600">Google Reviews</span>
              <div className="flex items-center gap-1 text-emerald-600">
                ★★★★★ <span className="text-gray-700">4.9/5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Benefits */}
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                sectionInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className="mb-6 transform transition-transform duration-300 hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;