
import React from 'react';
import { Star } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Sydney",
    rating: 5,
    review: "MrDrivers is one of my best luxury fleet service so far, when their cars appeared at my front door together, all my family members were like jaw-dropping, drivers were on time, polite and well dressed, cars were so luxury, and super clean. Yesss, definitely and highly recommend Mr Drivers Chauffeur to anyone is looking for super VIP transfer service."
  },
  {
    id: 2,
    name: "Michael T.",
    location: "Melbourne",
    rating: 5,
    review: "The S Class was comfortable and fit all our luggage easily. Communication from Mr. Drivers was excellent (and loved they used WhatsApp which helped whilst I was overseas and couldn't use SMS). Wouldn't use any other service :)"
  },
  {
    id: 3,
    name: "Emma K.",
    location: "Brisbane",
    rating: 5,
    review: "Great experience, staff was so accomodating, professional service, value for money, very clean and great smelling cars."
  },
  {
    id: 4,
    name: "James R.",
    location: "Perth",
    rating: 5,
    review: "Amazing service with a very accommodating safe driver. We appreciate you. He never disappoints"
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
