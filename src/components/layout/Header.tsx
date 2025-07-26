
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X, Phone, Mail } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { path: '/', label: 'home' },
    { path: '/fleets', label: 'fleets' },
    { path: '/services', label: 'services' },
    { path: '/about', label: 'about' },
    { path: '/contact', label: 'contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Top Bar with Contact Info */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/" className="text-resort-navy z-50 flex items-center">
              <img 
                src="/images/logo/logo2.jpg" 
                alt="MrDrivers Logo" 
                className="h-10 mr-3" 
              />
              <h1 className="text-2xl font-bold font-playfair">MrDrivers</h1>
            </Link>
            
            <div className="hidden md:flex items-center ml-6 text-sm text-resort-navy/80">
              <div className="flex items-center mr-6">
                <Phone className="h-4 w-4 mr-2" />
                <span>CONTACT: 1300 618 241</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@mrdrivers.com.au</span>
              </div>
            </div>
            
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-resort-navy"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Bottom Bar with Navigation and Actions */}
          <div className="hidden md:flex items-center justify-between">
            {/* Desktop Navigation */}
            <nav className="mr-6">
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`font-medium text-lg transition-colors duration-200 ${
                        isActive(link.path) 
                          ? 'text-primary border-b-2 border-primary' 
                          : 'text-resort-navy hover:text-primary'
                      }`}
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Book Now
                </Button>
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-resort-navy">
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLanguage('en')}>
                    English {language === 'en' && '✓'}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('zh')}>
                    中文 {language === 'zh' && '✓'}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('ja')}>
                    日本語 {language === 'ja' && '✓'}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-resort-navy">CONTACT: +61 1300 618 241</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-resort-navy">info@mrdrivers.com.au</span>
              </div>
            </div>
            <ul className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`font-medium text-xl ${
                      isActive(link.path) 
                        ? 'text-primary' 
                        : 'text-resort-navy'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
