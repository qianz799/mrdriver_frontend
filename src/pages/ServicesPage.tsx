
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Car, MapPin, SignpostBig, Building, Calendar } from 'lucide-react';
import CtaSection from '@/components/sections/CtaSection';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  features: string[];
}

const ServicesPage = () => {
  const { t } = useLanguage();
  
  const services: Service[] = [
    {
      id: '1',
      title: 'Airport Transfers',
      description: 'Experience hassle-free travel with our premium airport transfer service. Our professional chauffeurs monitor flight schedules to ensure timely pickups and provide a stress-free start or end to your journey.',
      icon: <Plane className="h-6 w-6 text-white" />,
      imageUrl: '/images/service/airport-transfer.jpg',
      features: [
        'Flight monitoring',
        'Meet & greet service',
        'Door-to-door service',
        'Luggage assistance',
        '24/7 availability',
        'Fixed prices with no hidden costs'
      ]
    },
    {
      id: '2',
      title: 'Corporate Services',
      description: "Make a lasting impression with our corporate transportation solutions. Whether it's business meetings, airport transfers, or executive travel, we provide reliable, discreet, and professional service for all your corporate needs.",
      icon: <Building className="h-6 w-6 text-white" />,
      imageUrl: '/images/service/corporate-service.jpg',
      features: [
        'Corporate account management',
        'Executive ground transportation',
        'Conference and event transfers',
        'Road shows',
        'Client entertainment',
        'Customized billing solutions'
      ]
    },
    {
      id: '3',
      title: 'Wedding Services',
      description: 'Make your special day even more memorable with our elegant wedding transportation. Our luxury vehicles add sophistication and style to your wedding day, ensuring you arrive in comfort and elegance.',
      icon: <Calendar className="h-6 w-6 text-white" />,
      imageUrl: 'https://images.unsplash.com/photo-1608508644127-ba99d7732fee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Decorated vehicles upon request',
        'Punctual service',
        'Red carpet service (upon request)',
        'Uniformed chauffeurs',
        'Photography stops',
        'Champagne service (upon request)'
      ]
    },
    {
      id: '4',
      title: 'Special Event Transfers',
      description: 'Arrive in style to any special event with our luxury transportation service. From concerts and sporting events to galas and awards ceremonies, we ensure you enjoy a stress-free, luxurious journey.',
      icon: <SignpostBig className="h-6 w-6 text-white" />,
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'VIP transportation',
        'Event coordination',
        'Multiple pickup locations',
        'Flexible scheduling',
        'Group transportation',
        'Door-to-door service'
      ]
    },
    {
      id: '5',
      title: 'City Tours',
      description: 'Explore Sydney and beyond with our customized city tours. Our knowledgeable chauffeurs will take you to iconic landmarks, hidden gems, and scenic spots, providing insights about the city along the way.',
      icon: <MapPin className="h-6 w-6 text-white" />,
      imageUrl: 'https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Customized itineraries',
        'Knowledgeable chauffeurs',
        'Flexible durations',
        'Luxury vehicles',
        'Photo opportunities',
        'Hidden gems exploration'
      ]
    },
    {
      id: '6',
      title: 'Point-to-Point Transfers',
      description: 'Need to get from one location to another in style and comfort? Our point-to-point transfer service provides reliable, luxurious transportation whenever you need it.',
      icon: <Car className="h-6 w-6 text-white" />,
      imageUrl: '/images/service/point-to-point.jpg',
      features: [
        'Door-to-door service',
        'On-time pickups',
        'Professional chauffeurs',
        'Luxury vehicles',
        'Fixed pricing',
        '24/7 availability'
      ]
    }
  ];
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="bg-resort-sand">
        <div className="container mx-auto section-padding">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-playfair mb-6">{t('services')}</h1>
            <p className="text-resort-navy/80 max-w-3xl mx-auto">
              Discover our comprehensive range of luxury transportation services tailored to meet your needs
            </p>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map(service => (
            <Card key={service.id} className="overflow-hidden border-none shadow-lg">
              <div className="relative h-60">
                <img 
                  src={service.imageUrl} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary rounded-full p-2">
                  {service.icon}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold font-playfair mb-4">{service.title}</h2>
                <p className="text-resort-navy/80 mb-6">{service.description}</p>
                
                <h3 className="font-bold mb-3">What We Offer:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90 w-full">
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default ServicesPage;
