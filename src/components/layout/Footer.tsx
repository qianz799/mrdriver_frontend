
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MapPin, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-resort-navy text-white">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Information */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-6 font-playfair">MrDrivers</h3>
            <p className="mb-6 text-resort-white/80">
              Premium transportation services across Australia. Experience luxury, comfort, and professionalism.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com/share/1D83ExcAtw/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              {/*
              <a href="https://www.instagram.com/mrdrivers.chauffeurs?igsh=bTIwNHlxMTg0cjAw" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
               */}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6 font-playfair">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/fleets" className="hover:text-primary transition-colors">
                  Our Fleets
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6 font-playfair">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-primary" />
                <span>100 Harris St, Pyrmont NSW 2009, Australia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <a href="tel:1300618241" className="hover:text-primary transition-colors">
                  1300 618 241
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <a
                href="mailto:info@mrdrivers.com.au"
                className="hover:text-primary transition-colors cursor-pointer"
              >
                info@mrdrivers.com.au
              </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-primary" />
                <span>Available 24/7</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6 font-playfair">Newsletter</h3>
            <p className="mb-4 text-resort-white/80">
              Subscribe for special offers and updates
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-resort-navy border-white/30 text-white placeholder:text-white/50" 
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-between items-center pt-10 mt-10 border-t border-white/10 text-resort-white/70">
          <p>&copy; {currentYear} MrDrivers. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
