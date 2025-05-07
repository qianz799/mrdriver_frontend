
import React from 'react';

const partnersData = [
  { id: 1, name: "Partner 1" },
  { id: 2, name: "Partner 2" },
  { id: 3, name: "Partner 3" },
  { id: 4, name: "Partner 4" },
  { id: 5, name: "Partner 5" },
  { id: 6, name: "Partner 6" }
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-resort-sand">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-3 text-center">Our Trusted Partners</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-center mb-12 text-resort-navy/70 max-w-2xl mx-auto">
          We are proud to work with these industry-leading companies
        </p>
        
        <div className="flex flex-wrap justify-center gap-8">
          {partnersData.map((partner) => (
            <div 
              key={partner.id} 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center shadow-md"
            >
              <span className="text-sm text-resort-navy/50">Partner Logo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
