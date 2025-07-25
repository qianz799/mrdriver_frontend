
import React from 'react';
import { Star } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Sydney",
    rating: 5,
    review: "Exceptional service! The Mercedes was immaculate and the driver was professional and punctual. Will definitely use again for all my business meetings."
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Melbourne",
    rating: 5,
    review: "Booked for my wedding day and everything was perfect. The Maybach was stunning and made our special day even more memorable."
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "Brisbane",
    rating: 5,
    review: "Outstanding airport transfer service. On time, comfortable, and great communication throughout. Highly recommended for business travelers."
  }
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-3 text-center">What Our Customers Say</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-center mb-12 text-resort-navy/70 max-w-2xl mx-auto">
          Real experiences from our valued customers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviewsData.map((review) => (
            <div 
              key={review.id} 
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-resort-navy/80 mb-4 italic">"{review.review}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-resort-navy">{review.name}</p>
                <p className="text-sm text-resort-navy/60">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
