
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import FleetCard, { Fleet } from '../fleet/FleetCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FeaturedFleetFleet {
  fleets: Fleet[];
}

const FeaturedFleet: React.FC<FeaturedFleetFleet> = ({ fleets }) => {
  const { t } = useLanguage();
  // Only show GLS, Maybach, S class
  const featured = fleets.filter(f => [
    'Mercedes-Benz GLS',
    'Mercedes-Benz Maybach S680',
    'Mercedes-Benz S class'
  ].includes(f.title));
  return (
    <section className="pt-24 pb-16 bg-accent/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-playfair mb-4">Fleets</h2>
          <p className="text-resort-navy/70 max-w-2xl mx-auto">
            Discover our collection of luxury vehicles for your premium transportation needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map(fleet => (
            <FleetCard key={fleet.id} fleet={fleet} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/fleets">
            <Button className="bg-primary text-white px-8 py-2 font-semibold rounded-md shadow hover:bg-primary/90">
              {t('all_vehicles') || 'View All Vehicles'}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFleet;
