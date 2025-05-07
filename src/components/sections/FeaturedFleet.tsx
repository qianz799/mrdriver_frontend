
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import FleetCard, { Fleet } from '../fleet/FleetCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FeaturedFleetProps {
  fleets: Fleet[];
}

const FeaturedFleet: React.FC<FeaturedFleetProps> = ({ fleets }) => {
  const { t } = useLanguage();
  
  return (
    <section className="section-padding bg-accent/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">Our Fleet</h2>
            <p className="text-resort-navy/70">Experience our premium vehicles for your journey</p>
          </div>
          
          <Link to="/properties">
            <Button variant="link" className="text-primary flex items-center">
              {t('all_vehicles')} <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleets.map(fleet => (
            <FleetCard key={fleet.id} fleet={fleet} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFleet;
