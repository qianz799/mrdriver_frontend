
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plane, Car, MapPin, SignpostBig, Building, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      description: 'Reliable and punctual airport pickup and drop-off services with flight tracking.',
      icon: <Plane className="h-6 w-6 text-white" />,
      imageUrl: 'https://www.melbournetaxiservices.au/wp-content/uploads/2021/08/Airport-Transfer-services-1.jpg',
      buttonText: 'Learn More',
      buttonLink: '/services'
    },
    {
      id: '2',
      title: 'Corporate Services',
      description: 'Professional transportation for executives and business events with dedicated accounts.',
      icon: <Building className="h-6 w-6 text-white" />,
      imageUrl: 'https://chauffeurlimousine.com.au/wp-content/uploads/2024/03/corp.jpg',
      buttonText: 'Learn More',
      buttonLink: '/services'
    },
    {
      id: '3',
      title: 'Luxury Tours',
      description: 'Customized sightseeing tours and special events transportation with expert local drivers.',
      icon: <MapPin className="h-6 w-6 text-white" />,
      imageUrl: 'https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      buttonText: 'Learn More',
      buttonLink: '/services'
    }
  ];
  
  return (
    <section className="py-16 bg-resort-sand">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-3 text-center">Our Premium Services</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-center mb-12 text-resort-navy/70 max-w-2xl mx-auto">
          Experience luxury transportation with our professional driver services tailored to your needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <Card key={service.id} className="overflow-hidden border shadow-md hover:shadow-lg transition-shadow bg-white">
              <div className="relative h-48">
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
                <h3 className="text-xl font-bold mb-3 font-playfair">{service.title}</h3>
                <p className="text-resort-navy/70 mb-4">{service.description}</p>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  asChild
                >
                  <Link to={service.buttonLink}>
                    {service.buttonText}
                  </Link>
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
