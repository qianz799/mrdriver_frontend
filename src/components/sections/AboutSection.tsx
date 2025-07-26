
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-resort-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-3 text-center">About MrDrivers</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="mb-4 text-resort-navy/80">
              With over a decade of experience, MrDrivers has established itself as a premier transportation service provider across Australia. We pride ourselves on punctuality, professionalism, and personalized service.
            </p>
            <p className="mb-6 text-resort-navy/80">
              Our fleet of luxury vehicles and team of experienced drivers ensure that your journey with us is comfortable, safe, and memorable.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-primary mt-1" />
                <span>Professional, experienced drivers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-primary mt-1" />
                <span>Modern, well-maintained luxury vehicles</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-primary mt-1" />
                <span>24/7 customer support</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-primary mt-1" />
                <span>Competitive, transparent pricing</span>
              </li>
            </ul>
            
            <Link to="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
          
          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg w-full max-w-2xl">
              <img 
                src="/mrdriver_frontend/images/about/aboutdrivers.png" 
                alt="Luxury Vehicle Interior" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
