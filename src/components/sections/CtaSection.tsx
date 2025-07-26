
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-16 bg-[#37475A] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-playfair mb-4">Ready for a Premium Ride Experience?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Book your journey with MrDrivers today and experience luxury transportation at its finest.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button className="bg-white text-[#37475A] font-semibold px-8 py-2 rounded-md shadow hover:bg-gray-100">
              Book Now
            </Button>
          </Link>
          <Link to="/properties">
            <Button className="bg-white text-[#37475A] font-semibold px-8 py-2 rounded-md shadow hover:bg-gray-100">
              View Our Fleet
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
