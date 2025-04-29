
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import FleetCard, { Fleet } from '@/components/fleet/FleetCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Mock data for fleet vehicles
const allFleets: Fleet[] = [
  {
    id: '1',
    title: 'MERCEDES GLE',
    price: 120,
    imageUrl: 'public/lovable-uploads/306be31a-6a92-46ba-805b-b144d3d623aa.png',
    passengers: 4,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 4
  },
  {
    id: '2',
    title: 'AUDI Q7',
    price: 120,
    imageUrl: 'public/lovable-uploads/01381383-012b-4118-8385-a6e69ec1dbed.png',
    passengers: 4,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 4
  },
  {
    id: '3',
    title: 'LEXUS RX',
    price: 120,
    imageUrl: 'public/lovable-uploads/5b6e4cc4-681b-4da0-8314-b451520b2d4e.png',
    passengers: 4,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 4
  },
  {
    id: '4',
    title: 'MERCEDES GLS',
    price: 140,
    imageUrl: 'https://images.unsplash.com/photo-1674468574946-774294df14de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    passengers: 4,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 4
  },
  {
    id: '5',
    title: 'MERCEDES V CLASS',
    price: 140,
    imageUrl: 'https://images.unsplash.com/photo-1617694977288-c3161aece8ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    passengers: 4,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 4
  },
  {
    id: '6',
    title: 'BMW X7',
    price: 140,
    imageUrl: 'https://images.unsplash.com/photo-1622294891694-07a7ebbd9f37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    passengers: 4,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 4
  }
];

const PropertiesPage = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredFleets, setFilteredFleets] = React.useState<Fleet[]>(allFleets);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setFilteredFleets(allFleets);
      return;
    }
    
    const filtered = allFleets.filter(fleet => 
      fleet.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredFleets(filtered);
  };
  
  return (
    <div className="pt-24">
      <div className="container mx-auto section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-playfair mb-4">{t('our_fleet')}</h1>
          <p className="text-resort-navy/70 max-w-2xl mx-auto">
            Discover our collection of luxury vehicles for your premium transportation needs
          </p>
        </div>
        
        <div className="mb-10">
          <form onSubmit={handleSearch} className="flex w-full max-w-lg mx-auto gap-2">
            <Input
              type="text"
              placeholder="Search by vehicle name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white"
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              <Search className="h-4 w-4 mr-2" /> Search
            </Button>
          </form>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleets.length > 0 ? (
            filteredFleets.map(fleet => (
              <FleetCard key={fleet.id} fleet={fleet} />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-xl">No vehicles found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
