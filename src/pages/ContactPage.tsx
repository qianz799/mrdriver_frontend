
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="pt-24">
      <div className="container mx-auto section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-playfair mb-4">{t('contact_us')}</h1>
          <p className="text-resort-navy/70 max-w-2xl mx-auto">
            Have questions about our properties or want to make a special request? 
            We're here to help make your stay perfect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-resort-sand p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold font-playfair mb-6">{t('contact_form')}</h2>
            <ContactForm />
          </div>
          
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold font-playfair mb-6">Get in Touch</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-primary" />
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p>100 Haris St, Pyromnt NSW 2009 Australia</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-3 mt-1 text-primary" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p>+61 1300 618 241</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1 text-primary" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p>info@mrdrivers.com.au</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 mt-1 text-primary" />
                  <div>
                    <h3 className="font-bold mb-1">Office Hours</h3>
                    <p>Monday to Friday: 9am - 6pm</p>
                    <p>Saturday: 10am - 4pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for Google map */}
              <div className="w-full h-full flex items-center justify-center bg-resort-blue/20">
                <p className="text-center text-resort-navy">Google Map would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
