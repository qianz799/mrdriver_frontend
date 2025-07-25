
import React from 'react';
import { Star } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    rating: 5,
    review: "MrDrivers is one of my best luxury fleet service so far, when their cars appeared at my front door together, all my family members were like jaw-dropping, drivers were on time, polite and well dressed, cars were so luxury, and super clean. Yesss, definitely and highly recommend MrDrivers Chauffeur to anyone is looking for super VIP transfer service."
  },
  {
    id: 2,
    rating: 5,
    review: "Great experience, staff was so accomodating, professional service, value for money, very clean and great smelling cars."
  },
  {
    id: 3,
    rating: 5,
    review: "The S Class was comfortable and fit all our luggage easily. Communication from Mr. Drivers was excellent (and loved they used WhatsApp which helped whilst I was overseas and couldn't use SMS). Wouldn't use any other service :)"
  },
  {
    id: 4,
    rating: 5,
    review: "We recently used Mr. Drivers for transfers from Sydney airport to hotel and reused them for our return ride. They were punctual, great communication with friendly, professional service. The quality of the car provided were first-rate too. I highly recommend using them."
  },
  {
    id: 5,
    rating: 5,
    review: "Amazing service with a very accommodating safe driver. We appreciate you. He never disappoints"
  },
  {
    id: 6,
    rating: 5,
    review: "Excellent service.we ordered a car with a baby seat for international flights to and from Sydney airport .the driver was on time, adjusted the baby seat to suit,the car immaculately clean.the drive back home was so calming after a long flight we could have fallen asleep if it wasn't for the conversation .we would definitely use them again."
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
        
        <div className="flex overflow-x-auto gap-6 pb-4 max-w-full">
          {reviewsData.map((review) => (
            <div 
              key={review.id} 
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[350px] max-w-[400px] flex-shrink-0"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-resort-navy/80 italic text-sm leading-relaxed">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
