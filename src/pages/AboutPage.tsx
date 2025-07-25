
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CtaSection from '@/components/sections/CtaSection';

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
              MrDrivers is Sydney's premier luxury transportation service, 
              offering exceptional chauffeur-driven vehicles for all your transportation needs.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/mrdriver_frontend/images/about/aboutus.png" 
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold font-playfair mb-6">Our Story</h2>
            <p className="mb-4">
              Founded in 2019, Mr Drivers has quickly established itself as Sydney's premier luxury transportation service. What started as a vision to redefine chauffeur services in Sydney has grown into a trusted name for premium transportation.
            </p>
            <p className="mb-6">
              Our mission is simple - to provide an unmatched transportation experience that combines luxury, reliability, and exceptional customer service. We don't just transport people; we create memorable experiences with every journey.
            </p>
            <Link to="/properties">
              <Button className="bg-primary hover:bg-primary/90">
                View Our Fleet
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
                We strive for excellence in every journey, maintaining the highest standards of service, safety, and professionalism.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="h-10 w-10 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3 text-center">Reliability</h3>
              <p className="text-center">
                We believe in punctuality and dependability. Our chauffeurs are always on time, our vehicles are immaculately maintained, and our service is consistently exceptional.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="h-10 w-10 bg-primary rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3 text-center">Client-First Approach</h3>
              <p className="text-center">
                We tailor our services to meet the unique needs of each client, ensuring a personalized and memorable experience with every journey.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us */}
      <div className="container mx-auto section-padding">
        <h2 className="text-3xl font-bold font-playfair mb-10 text-center">Why Choose Mr Drivers?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Luxury Fleet</h3>
            <p className="mb-6">
              Our fleet consists of premium vehicles meticulously maintained to ensure comfort, safety, and style. Each vehicle is equipped with modern amenities to enhance your journey.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Professional Chauffeurs</h3>
            <p className="mb-6">
              Our chauffeurs are more than just drivers; they are hospitality professionals committed to providing exceptional service. They are carefully selected, thoroughly trained, and impeccably presented.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Tailored Services</h3>
            <p className="mb-6">
              We understand that each client has unique needs. That's why we offer customized transportation solutions for various occasions, from corporate travel to special events.
            </p>
            
            <h3 className="text-xl font-bold mb-4">Reliability & Safety</h3>
            <p className="mb-6">
              Your safety is our priority. Our vehicles undergo regular maintenance checks, and our chauffeurs follow strict safety protocols to ensure a secure journey.
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default AboutPage;
