
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PropertyCard, { Property } from '@/components/properties/PropertyCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Mock data
const allProperties = [
  {
    id: '1',
    title: 'Oceanfront Villa',
    location: 'Byron Bay, NSW',
    price: 450,
    imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6
  },
  {
    id: '2',
    title: 'Luxury Beach House',
    location: 'Gold Coast, QLD',
    price: 380,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8
  },
  {
    id: '3',
    title: 'Mountain Retreat',
    location: 'Blue Mountains, NSW',
    price: 320,
    imageUrl: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4
  },
  {
    id: '4',
    title: 'Waterfront Cottage',
    location: 'Port Douglas, QLD',
    price: 290,
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4
  },
  {
    id: '5',
    title: 'Penthouse Apartment',
    location: 'Sydney, NSW',
    price: 520,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6
  },
  {
    id: '6',
    title: 'Rainforest Retreat',
    location: 'Daintree, QLD',
    price: 340,
    imageUrl: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4
  }
];

const PropertiesPage = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredProperties, setFilteredProperties] = React.useState<Property[]>(allProperties);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setFilteredProperties(allProperties);
      return;
    }
    
    const filtered = allProperties.filter(property => 
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredProperties(filtered);
  };
  
  return (
    <div className="pt-24">
      <div className="container mx-auto section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-playfair mb-4">{t('all_properties')}</h1>
          <p className="text-resort-navy/70 max-w-2xl mx-auto">
            Discover our collection of luxury vacation rentals across Australia
          </p>
        </div>
        
        <div className="mb-10">
          <form onSubmit={handleSearch} className="flex w-full max-w-lg mx-auto gap-2">
            <Input
              type="text"
              placeholder="Search by location or property name"
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
          {filteredProperties.length > 0 ? (
            filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-xl">No properties found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
