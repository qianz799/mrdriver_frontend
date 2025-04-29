
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedFleet from '@/components/sections/FeaturedFleet';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactForm from '@/components/forms/ContactForm';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Fleet } from '@/components/fleet/FleetCard';

// Mock data
const featuredFleets: Fleet[] = [
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
  }
];

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <HeroSection 
        title={t('luxury_transportation')}
        subtitle="Experience Australia's premium chauffeur service"
        backgroundImage="https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        buttonText={t('book_now')}
        buttonLink="/contact"
      />
      
      <FeaturedFleet fleets={featuredFleets} />
      
      <ServicesSection />
      
      <section className="section-padding bg-resort-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-playfair mb-6">{t('luxury_experience')}</h2>
              <p className="mb-6">
                At Mr Drivers, we offer more than just transportation. We provide curated luxury experiences with professional chauffeurs in Australia's most stunning vehicles.
              </p>
              <p className="mb-8">
                From airport transfers to wedding services, each of our vehicles is carefully selected and maintained to ensure an unforgettable journey. Experience comfort and elegance while traveling across Australia.
              </p>
              <Link to="/about">
                <Button className="bg-primary hover:bg-primary/90">
                  {t('about_us')} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-resort-sand p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-playfair mb-6">{t('contact_form')}</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
