
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import FleetCard, { Fleet } from '@/components/fleet/FleetCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Mock data for fleet vehicles
const allFleets: Fleet[] = [
  {
    id: '3',
    title: 'Mercedes-Benz Maybach S680',
    price: 250,
    image: '/images/fleets/3/Front.jpg',
    passengers: '3',
    interior: 'Exclusive Leather',
    wifi: 'Upon Request',
    bagCapacity: '2'
  },
  {
    id: '7',
    title: 'Mercedes-Benz Maybach GLS 600',
    price: 250,
    image: '/images/fleets/7/Front.jpg',
    passengers: '3',
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: '3'
  },
  {
    id: '5',
    title: 'Mercedes-Benz VIP Sprinter',
    price: 300,
    image: '/images/fleets/5/Front.jpg',
    passengers: '8',
    interior: 'VIP Leather',
    wifi: 'Upon Request',
    bagCapacity: '8'
  },
  {
    id: '2',
    title: 'Mercedes-Benz S class',
    price: 150,
    image: '/images/fleets/2/Front.jpg',
    passengers: '3',
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: '3'
  },
  {
    id: '1',
    title: 'Mercedes-Benz GLS',
    price: 120,
    image: '/images/fleets/1/Front.jpg',
    passengers: '4',
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: '4'
  },
  {
    id: '4',
    title: 'Mercedes-Benz V class',
    price: 120,
    image: '/images/fleets/4/Front.jpg',
    passengers: '6',
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: '6'
  },
  
  {
    id: '6',
    title: 'Mercedes-Benz Sprinter 11-14PAX',
    price: 180,
    image: '/images/fleets/6/Front.jpg',
    passengers: '11-14',
    interior: 'Leather',
    wifi: 'Upon Request',
    bagCapacity: '11-14'
  }
];

const FleetsPage = () => {
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
          <h1 className="text-4xl font-bold font-playfair mb-4">Our Fleets</h1>
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

export default FleetsPage;
