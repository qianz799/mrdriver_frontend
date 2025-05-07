
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import PartnersSection from '@/components/sections/PartnersSection';
import GetInTouchSection from '@/components/sections/GetInTouchSection';
import CtaSection from '@/components/sections/CtaSection';

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
      <GetInTouchSection />
      <CtaSection />
    </div>
  );
};

export default Index;
