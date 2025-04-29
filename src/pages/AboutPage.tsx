
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="bg-resort-sand">
        <div className="container mx-auto section-padding">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-playfair mb-6">{t('about_us')}</h1>
            <p className="text-resort-navy/80 max-w-3xl mx-auto">
              Mr Drivers is Australia's premier luxury vacation rental service, 
              offering exceptional properties in stunning locations across the country.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1464082354059-27db6ce50048?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold font-playfair mb-6">Our Story</h2>
            <p className="mb-4">
              Founded in 2015, Mr Drivers began with a simple mission: to provide travelers with exceptional vacation rentals that feel like a home away from home, but with the luxury and service of a five-star hotel.
            </p>
            <p className="mb-6">
              What started as a small collection of handpicked properties has grown into a curated portfolio of Australia's finest vacation rentals, each selected for its unique character, prime location, and exceptional amenities.
            </p>
            <Link to="/properties">
              <Button className="bg-primary hover:bg-primary/90">
                View Our Properties
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="bg-resort-sand">
        <div className="container mx-auto section-padding">
          <h2 className="text-3xl font-bold font-playfair mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="h-10 w-10 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3 text-center">Excellence</h3>
              <p className="text-center">
                We strive for excellence in every aspect of our service, from the properties we select to the experiences we create for our guests.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="h-10 w-10 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3 text-center">Authenticity</h3>
              <p className="text-center">
                We believe in creating authentic experiences that connect our guests with the local culture and environment of their destination.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="h-10 w-10 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3 text-center">Personalization</h3>
              <p className="text-center">
                We understand that every guest is unique, and we tailor our service to meet individual needs and exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-resort-blue text-white">
        <div className="container mx-auto section-padding text-center">
          <h2 className="text-3xl font-bold font-playfair mb-6">Ready to Experience Luxury?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Browse our collection of exceptional vacation rentals and find your perfect getaway in Australia's most beautiful locations.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/properties">
              <Button className="bg-white text-resort-blue hover:bg-white/90">
                Explore Properties
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
