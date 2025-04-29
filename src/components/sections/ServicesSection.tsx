
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Car, MapPin, SignpostBig } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  
  const services: Service[] = [
    {
      id: '1',
      title: 'Airport Transfers',
      description: 'Chauffeur driven luxury airport transfers to and from Sydney Airport',
      icon: <Plane className="h-6 w-6 text-white" />,
      imageUrl: 'https://images.unsplash.com/photo-1588867702719-08eae92ae1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      buttonText: 'Book Now',
      buttonLink: '/contact'
    },
    {
      id: '2',
      title: 'Corporate Services',
      description: 'Premium transportation services for business executives and corporate events',
      icon: <Car className="h-6 w-6 text-white" />,
      imageUrl: 'https://images.unsplash.com/photo-1560269507-c33ad6c719bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      buttonText: 'Book Now',
      buttonLink: '/contact'
    },
    {
      id: '3',
      title: 'Wedding Services',
      description: 'Elegant luxury vehicles for your special day with professional chauffeurs',
      icon: <MapPin className="h-6 w-6 text-white" />,
      imageUrl: 'https://images.unsplash.com/photo-1608508644127-ba99d7732fee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      buttonText: 'Book Now',
      buttonLink: '/contact'
    },
    {
      id: '4',
      title: 'Special Event Transfers',
      description: 'VIP transportation for concerts, sporting events and special occasions',
      icon: <SignpostBig className="h-6 w-6 text-white" />,
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      buttonText: 'Book Now',
      buttonLink: '/contact'
    }
  ];
  
  return (
    <section className="section-padding bg-resort-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">{t('our_services')}</h2>
          <p className="text-resort-navy/70 max-w-2xl mx-auto">
            Discover our premium transportation services tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(service => (
            <Card key={service.id} className="overflow-hidden border shadow-md hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={service.imageUrl} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary rounded-full p-2">
                  {service.icon}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 font-playfair">{service.title}</h3>
                <p className="text-resort-navy/70 mb-4">{service.description}</p>
                <Button 
                  as="a"
                  href={service.buttonLink}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  {service.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
