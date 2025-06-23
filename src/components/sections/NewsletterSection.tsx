import React, { useState } from 'react';
import { Send } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the email to your API
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <section className="py-20 bg-emerald-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Inspired for Your Next Adventure
          </h2>
          
          <p className="text-lg text-emerald-100 mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive deals, travel tips, and destination insights from Pearl Ventures.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              
              <button
                type="submit"
                className="bg-white text-emerald-800 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send size={18} />
              </button>
            </div>
            
            {isSubmitted && (
              <div className="mt-4 text-emerald-200 text-sm">
                Thank you for subscribing! Watch your inbox for travel inspiration.
              </div>
            )}
          </form>
          
          <div className="mt-12">
            <button className="border-2 border-white hover:bg-white hover:text-emerald-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-colors">
              Start Planning Your Trip
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;