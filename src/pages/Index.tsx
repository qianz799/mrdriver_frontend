
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import PartnersSection from '@/components/sections/PartnersSection';
import GetInTouchSection from '@/components/sections/GetInTouchSection';
import CtaSection from '@/components/sections/CtaSection';
import FeaturedFleet from '@/components/sections/FeaturedFleet';


export interface Fleet {
  id: string;
  title: string;
  price: number;
  image: string;
  passengers: string;
  interior: string;
  wifi: string;
  bagCapacity: string;
}

const fleets: Fleet[] = [
  {
    id: '2',
    title: 'Mercedes-Benz Maybach S680',
    price: 350,
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
