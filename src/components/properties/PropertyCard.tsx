
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bed, Bath, Users } from 'lucide-react';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { t } = useLanguage();
  
  return (
    <Card className="overflow-hidden border-none shadow-lg hover-lift">
      <Link to={`/properties/${property.id}`}>
        <div className="relative h-60 overflow-hidden">
          <img 
            src={property.imageUrl} 
            alt={property.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-3 right-3 bg-white py-1 px-3 rounded-full text-primary font-medium">
            ${property.price} <span className="text-xs text-resort-navy/70">{t('per_night')}</span>
          </div>
        </div>
      </Link>
      
      <CardContent className="pt-5 pb-6">
        <h3 className="text-xl font-bold mb-1 font-playfair">{property.title}</h3>
        <p className="text-resort-navy/70 mb-4">{property.location}</p>
        
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-1">
            <Bed className="h-4 w-4 text-primary" />
            <span className="text-sm">
              {property.bedrooms} {property.bedrooms === 1 ? t('bedroom') : t('bedrooms')}
            </span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Bath className="h-4 w-4 text-primary" />
            <span className="text-sm">
              {property.bathrooms} {property.bathrooms === 1 ? t('bathroom') : t('bathrooms')}
            </span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm">{property.maxGuests} {t('guests')}</span>
          </div>
        </div>
        
        <Link to={`/properties/${property.id}`}>
          <Button 
            variant="outline" 
            className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            {t('view_details')}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
