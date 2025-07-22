
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Car, Wifi } from 'lucide-react';

export interface Fleet {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  passengers: number;
  interior: string;
  wifi: string;
  bagCapacity: number;
}

interface FleetCardProps {
  fleet: Fleet;
}

const FleetCard: React.FC<FleetCardProps> = ({ fleet }) => {
  const { t } = useLanguage();
  
  return (
    <Card className="overflow-hidden border-none shadow-lg hover-lift">
      <Link to={`/fleets/${fleet.id}`}>
        <div className="relative h-60 overflow-hidden">
          <img 
            src={fleet.imageUrl} 
            alt={fleet.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </Link>
      
      <CardContent className="pt-5 pb-6">
        <h3 className="text-xl font-bold mb-1 font-playfair">{fleet.title}</h3>
        
        <ul className="space-y-2 my-4">
          <li className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm">
              {t('passengers')}: {fleet.passengers}
            </span>
          </li>
          
          <li className="flex items-center space-x-2">
            <span className="w-4 h-4 flex justify-center items-center text-primary">
              <Car className="h-4 w-4" />
            </span>
            <span className="text-sm">
              {t('interior')}: {fleet.interior}
            </span>
          </li>
          
          <li className="flex items-center space-x-2">
            <Wifi className="h-4 w-4 text-primary" />
            <span className="text-sm">
              {t('wifi')}: {fleet.wifi}
            </span>
          </li>
          
          <li className="flex items-center space-x-2">
            <span className="w-4 h-4 flex justify-center items-center text-primary">●</span>
            <span className="text-sm">
              {t('bag_capacity')}: {fleet.bagCapacity}
            </span>
          </li>
        </ul>
        
        <Link to={`/fleets/${fleet.id}`}>
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

export default FleetCard;
