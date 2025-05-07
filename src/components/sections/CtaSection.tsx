
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-16 bg-resort-navy text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Ready for a Premium Ride Experience?</h2>
        <p className="max-w-2xl mx-auto mb-10">
          Book your journey with MR Drivers today and experience luxury transportation at its finest.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button className="bg-white text-resort-navy">
              Book Now
            </Button>
          </Link>
          <Link to="/fleets">
            <Button className="bg-white text-resort-navy">
              View Our Fleet
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
