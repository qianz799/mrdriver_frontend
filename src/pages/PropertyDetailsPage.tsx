
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Users, Shield, Wifi, Briefcase, Calendar, ArrowLeft } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

// Mock data - in a real app, this would come from an API
const fleetData = [
  {
    id: '1',
    title: 'Mercedes-Benz GLS',
    location: 'Sydney, NSW',
    price: 120,
    imageUrl: 'https://images.unsplash.com/photo-1674468574946-774294df14de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    passengers: 4,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 4,
    description: 'Experience supreme luxury and comfort with our Mercedes-Benz GLS. This premium SUV offers a sophisticated driving experience combined with advanced technology and safety features. Perfect for corporate transfers, airport pickups, or special events.',
    features: ['Luxury Interior', 'Climate Control', 'Premium Sound System', 'Tinted Windows', 'Professional Chauffeur', 'Complimentary Water', 'USB Charging', 'Sanitized After Each Use'],
    gallery: [
      'https://images.unsplash.com/photo-1674468574946-774294df14de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '2',
    title: 'Mercedes-Benz S class',
    location: 'Sydney, NSW',
    price: 150,
    imageUrl: 'https://www.mercedes-benz.com.au/content/dam/hq/passengercars/cars/s-class/sedan-v223-fl-pi/modeloverview/01-2023/images/mercedes-benz-s-class-sedan-v223-modeloverview-696x392-01-2023.png',
    passengers: 4,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 4,
    description: 'The Mercedes-Benz S class sets the standard for luxury sedans. Enjoy unmatched comfort, advanced technology, and a smooth ride for your most important journeys.',
    features: ['Executive Seating', 'Ambient Lighting', 'Burmester Audio', 'Rear Seat Entertainment', 'Professional Chauffeur', 'Complimentary Water', 'USB Charging', 'Sanitized After Each Use'],
    gallery: [
      'https://www.mercedes-benz.com.au/content/dam/hq/passengercars/cars/s-class/sedan-v223-fl-pi/modeloverview/01-2023/images/mercedes-benz-s-class-sedan-v223-modeloverview-696x392-01-2023.png'
    ]
  },
  {
    id: '3',
    title: 'Mercedes-Benz Maybach S680',
    location: 'Sydney, NSW',
    price: 350,
    imageUrl: 'https://www.mercedes-benz.com.au/content/dam/hq/passengercars/cars/mercedes-maybach/s-class-x223-fl-pi/modeloverview/01-2023/images/mercedes-maybach-s-class-x223-modeloverview-696x392-01-2023.png',
    passengers: 4,
    interior: 'Exclusive Leather',
    wifi: 'Upon Request',
    bagCapacity: 4,
    description: 'The ultimate in luxury, the Maybach S680 offers a first-class experience with every detail. Perfect for VIPs, weddings, and special occasions.',
    features: ['First-Class Cabin', 'Reclining Rear Seats', 'Champagne Fridge', 'Burmester High-End 4D Surround Sound', 'Professional Chauffeur', 'Complimentary Water', 'USB Charging', 'Sanitized After Each Use'],
    gallery: [
      'https://www.mercedes-benz.com.au/content/dam/hq/passengercars/cars/mercedes-maybach/s-class-x223-fl-pi/modeloverview/01-2023/images/mercedes-maybach-s-class-x223-modeloverview-696x392-01-2023.png'
    ]
  },
  {
    id: '4',
    title: 'Mercedes-Benz V class',
    location: 'Sydney, NSW',
    price: 120,
    imageUrl: 'https://images.unsplash.com/photo-1617694977288-c3161aece8ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    passengers: 6,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 6,
    description: 'The Mercedes-Benz V class is the perfect choice for group travel, offering space, comfort, and luxury for up to 6 passengers.',
    features: ['Spacious Cabin', 'Flexible Seating', 'Premium Sound', 'Tinted Windows', 'Professional Chauffeur', 'Complimentary Water', 'USB Charging', 'Sanitized After Each Use'],
    gallery: [
      'https://images.unsplash.com/photo-1617694977288-c3161aece8ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: '5',
    title: 'Mercedes-Benz VIP Sprinter',
    location: 'Sydney, NSW',
    price: 300,
    imageUrl: 'https://www.mercedes-benz.com.au/content/dam/hq/vans/sprinter/van-w907/modeloverview/01-2023/images/mercedes-benz-sprinter-van-w907-modeloverview-696x392-01-2023.png',
    passengers: 8,
    interior: 'VIP Leather',
    wifi: 'Yes',
    bagCapacity: 8,
    description: 'Travel in style with the Mercedes-Benz VIP Sprinter, featuring a luxurious interior and amenities for business or leisure groups.',
    features: ['VIP Cabin', 'Conference Seating', 'Onboard WiFi', 'Entertainment System', 'Professional Chauffeur', 'Complimentary Water', 'USB Charging', 'Sanitized After Each Use'],
    gallery: [
      'https://www.mercedes-benz.com.au/content/dam/hq/vans/sprinter/van-w907/modeloverview/01-2023/images/mercedes-benz-sprinter-van-w907-modeloverview-696x392-01-2023.png'
    ]
  },
  {
    id: '6',
    title: 'Mercedes-Benz Sprinter 11-14PAX',
    location: 'Sydney, NSW',
    price: 180,
    imageUrl: 'https://www.mercedes-benz.com.au/content/dam/hq/vans/sprinter/van-w907/modeloverview/01-2023/images/mercedes-benz-sprinter-van-w907-modeloverview-696x392-01-2023.png',
    passengers: 14,
    interior: 'Leather',
    wifi: 'Yes',
    bagCapacity: 14,
    description: 'Ideal for larger groups, the Mercedes-Benz Sprinter 11-14PAX offers comfort, space, and convenience for up to 14 passengers.',
    features: ['Large Cabin', 'Flexible Seating', 'Onboard WiFi', 'Luggage Space', 'Professional Chauffeur', 'Complimentary Water', 'USB Charging', 'Sanitized After Each Use'],
    gallery: [
      'https://www.mercedes-benz.com.au/content/dam/hq/vans/sprinter/van-w907/modeloverview/01-2023/images/mercedes-benz-sprinter-van-w907-modeloverview-696x392-01-2023.png'
    ]
  }
];

const PropertyDetailsPage = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  
  const vehicle = fleetData.find(p => p.id === id);
  
  if (!vehicle) {
    return (
      <div className="pt-24 container mx-auto section-padding text-center">
        <h1 className="text-3xl font-bold mb-4">Vehicle Not Found</h1>
        <Link to="/properties">
          <Button variant="outline" className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Fleet
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div 
        className="h-[50vh] relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${vehicle.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container mx-auto h-full flex items-end pb-10 relative z-10">
          <div className="text-white">
            <Link to="/properties" className="flex items-center text-white/80 hover:text-white mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Fleet
            </Link>
            <h1 className="text-4xl font-bold font-playfair mb-2">{vehicle.title}</h1>
            <div className="flex items-center">
              <Briefcase className="h-5 w-5 mr-1" />
              <span>{vehicle.location}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Vehicle Details */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <div className="flex flex-wrap items-center pb-6 mb-6 border-b">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-1" />
                    <span>{vehicle.passengers} Passengers</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-1" />
                    <span>{vehicle.interior}</span>
                  </div>
                  <div className="flex items-center">
                    <Wifi className="h-5 w-5 text-primary mr-1" />
                    <span>WiFi: {vehicle.wifi}</span>
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold font-playfair mb-4">Description</h2>
              <p className="mb-8 leading-relaxed">{vehicle.description}</p>
              
              <h2 className="text-2xl font-bold font-playfair mb-4">Features & Amenities</h2>
              <ul className="grid grid-cols-2 gap-2 mb-8">
                {vehicle.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold font-playfair mb-4">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {vehicle.gallery.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden h-48">
                    <img 
                      src={image} 
                      alt={`${vehicle.title} - ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-resort-sand p-6 rounded-lg shadow-md sticky top-28">
              <h3 className="text-xl font-bold font-playfair mb-6">Book This Vehicle</h3>
              <div className="flex items-center space-x-2 mb-6">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Check availability</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 mb-6">
                {t('book_now')}
              </Button>
              <div className="border-t pt-6">
                <h3 className="text-xl font-bold font-playfair mb-4">Contact Us</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
