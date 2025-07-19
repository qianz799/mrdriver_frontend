
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import PartnersSection from '@/components/sections/PartnersSection';
import GetInTouchSection from '@/components/sections/GetInTouchSection';
import CtaSection from '@/components/sections/CtaSection';
import FeaturedFleet from '@/components/sections/FeaturedFleet';

const fleets = [
  {
    id: '1',
    title: 'Mercedes-Benz GLS',
    price: 120,
    imageUrl: 'https://images.unsplash.com/photo-1674468574946-774294df14de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    passengers: 4,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 4
  },
  {
    id: '2',
    title: 'Mercedes-Benz Maybach S680',
    price: 350,
    imageUrl: 'https://www.mercedes-benz.com.au/content/dam/hq/passengercars/cars/mercedes-maybach/s-class-x223-fl-pi/modeloverview/01-2023/images/mercedes-maybach-s-class-x223-modeloverview-696x392-01-2023.png',
    passengers: 4,
    interior: 'Exclusive Leather',
    wifi: 'Upon Request',
    bagCapacity: 4
  },
  {
    id: '3',
    title: 'Mercedes-Benz S class',
    price: 150,
    imageUrl: 'https://www.mercedes-benz.com.au/content/dam/hq/passengercars/cars/s-class/sedan-v223-fl-pi/modeloverview/01-2023/images/mercedes-benz-s-class-sedan-v223-modeloverview-696x392-01-2023.png',
    passengers: 4,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 4
  }
];

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <HeroSection 
        title="Premium Transportation Services"
        subtitle="Experience luxury and comfort with our professional driver services across Australia."
        backgroundImage="https://bangkokcelebrations.com/wp-content/uploads/2024/09/lt1-1024x683.jpg"
        buttonText="Contact Us"
        buttonLink="/contact"
      />
      
      <ServicesSection />
      <AboutSection />
      <PartnersSection />
      <FeaturedFleet fleets={fleets} />
      <GetInTouchSection />
      <CtaSection />
    </div>
  );
};

export default Index;
