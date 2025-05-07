
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink = '/properties'
}) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className="relative h-screen min-h-[600px] w-full flex items-center justify-start text-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-lg">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair animate-fade-in">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </p>
          )}
          
          {buttonText && (
            <Link to={buttonLink}>
              <Button 
                className="text-lg py-6 px-8 bg-primary hover:bg-primary/90 animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
