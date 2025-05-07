
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
    title: 'MERCEDES GLE',
    price: 0,
    imageUrl: 'https://www.mercedes-benz.com.au/content/dam/hq/passengercars/cars/gle/gle-coupe-c167-fl-pi/modeloverview/01-2023/images/mercedes-benz-gle-coupe-c167-modeloverview-696x392-01-2023.png',
    passengers: 4,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 4
  },
  {
    id: '2',
    title: 'AUDI Q7',
    price: 0,
    imageUrl: 'https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/zhgcm3wy8fewu5jtqrsl',
    passengers: 4,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 4
  },
  {
    id: '3',
    title: 'LEXUS RX',
    price: 0,
    imageUrl: 'https://www.lexus.mx/content/dam/lexus-mx/images/models/rx/2024/visualizer/350/exterior/19-inch-five-spoke-alloy-wheels/eminent-white-pearl/small-1.jpg',
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
        backgroundImage="public/lovable-uploads/7b2e42d9-14a9-49fb-ac3e-8e518efea6de.png"
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
