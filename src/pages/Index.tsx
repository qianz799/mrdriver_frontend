
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProperties from '@/components/sections/FeaturedProperties';
import ContactForm from '@/components/forms/ContactForm';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data
const featuredProperties = [
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
  }
];

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <HeroSection 
        title={t('discover_luxury')}
        subtitle="Experience Australia's most beautiful vacation rentals"
        backgroundImage="https://images.unsplash.com/photo-1527030280862-64139fba04ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        buttonText={t('book_now')}
      />
      
      <FeaturedProperties properties={featuredProperties} />
      
      <section className="section-padding bg-resort-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-playfair mb-6">{t('luxury_experience')}</h2>
              <p className="mb-6">
                At Mr Drivers, we offer more than just accommodations. We provide curated luxury experiences in Australia's most stunning locations.
              </p>
              <p className="mb-8">
                From beachfront villas to mountain retreats, each of our properties is carefully selected to ensure an unforgettable stay. Immerse yourself in comfort and elegance while experiencing the beauty of Australia.
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
