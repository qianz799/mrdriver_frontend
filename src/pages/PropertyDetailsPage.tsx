
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Bed, Bath, Users, MapPin, Calendar, ArrowLeft } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

// Mock data - in a real app, this would come from an API
const propertiesData = [
  {
    id: '1',
    title: 'Oceanfront Villa',
    location: 'Byron Bay, NSW',
    price: 450,
    imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    description: 'This stunning oceanfront villa offers panoramic views of the Pacific Ocean and direct beach access. Featuring modern architecture and luxurious finishes, this property is perfect for a family vacation or a group getaway. Enjoy the private pool, outdoor entertainment area, and spacious living spaces.',
    features: ['Private Pool', 'Direct Beach Access', 'Fully Equipped Kitchen', 'BBQ Area', 'WiFi', 'Air Conditioning', 'Smart TV', 'Laundry Facilities'],
    gallery: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ]
  },
  {
    id: '2',
    title: 'Luxury Beach House',
    location: 'Gold Coast, QLD',
    price: 380,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    description: 'Experience luxury living in this beautiful beach house located just steps from the golden sands of the Gold Coast. This spacious property features modern design, high-end furnishings, and breathtaking ocean views. Perfect for family gatherings or groups looking for a premium vacation experience.',
    features: ['Ocean Views', 'Gourmet Kitchen', 'Outdoor Terrace', 'WiFi', 'Air Conditioning', 'Smart Home System', 'BBQ', 'Parking'],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607686527-dda976efad76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ]
  },
  // Add more properties as needed
];

const PropertyDetailsPage = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  
  const property = propertiesData.find(p => p.id === id);
  
  if (!property) {
    return (
      <div className="pt-24 container mx-auto section-padding text-center">
        <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
        <Link to="/properties">
          <Button variant="outline" className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Properties
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
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${property.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container mx-auto h-full flex items-end pb-10 relative z-10">
          <div className="text-white">
            <Link to="/properties" className="flex items-center text-white/80 hover:text-white mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Properties
            </Link>
            <h1 className="text-4xl font-bold font-playfair mb-2">{property.title}</h1>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Details */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <div className="flex flex-wrap justify-between items-center pb-6 mb-6 border-b">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 text-primary mr-1" />
                    <span>{property.bedrooms} {property.bedrooms === 1 ? t('bedroom') : t('bedrooms')}</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 text-primary mr-1" />
                    <span>{property.bathrooms} {property.bathrooms === 1 ? t('bathroom') : t('bathrooms')}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-1" />
                    <span>{property.maxGuests} {t('guests')}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">
                  ${property.price} <span className="text-sm text-resort-navy/70">{t('per_night')}</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold font-playfair mb-4">Description</h2>
              <p className="mb-8 leading-relaxed">{property.description}</p>
              
              <h2 className="text-2xl font-bold font-playfair mb-4">Features & Amenities</h2>
              <ul className="grid grid-cols-2 gap-2 mb-8">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold font-playfair mb-4">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {property.gallery.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden h-48">
                    <img 
                      src={image} 
                      alt={`${property.title} - ${index + 1}`} 
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
              <h3 className="text-xl font-bold font-playfair mb-6">Book This Property</h3>
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
