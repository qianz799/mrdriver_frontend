
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-resort-navy text-white">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-6 font-playfair">Mr Drivers</h3>
            <p className="mb-6 text-resort-white/80">
              Luxury vacation rentals in Australia's most beautiful locations.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
            </div>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6 font-playfair">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-primary transition-colors">
                  {t('properties')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6 font-playfair">{t('contact_us')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-primary" />
                <span>123 Paradise Road, Gold Coast, Australia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span>+61 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span>info@mrdrivers.com.au</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 mt-10 border-t border-white/10 text-center text-resort-white/70">
          <p>&copy; {currentYear} Mr Drivers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
