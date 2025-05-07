
import React from 'react';
import ContactForm from '@/components/forms/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const GetInTouchSection = () => {
  return (
    <section className="py-16 bg-resort-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-3 text-center">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="mb-8 text-resort-navy/80">
              We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-resort-navy/10 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Address</h3>
                  <p className="text-resort-navy/80">123 Main Street, Sydney, NSW 2000, Australia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-resort-navy/10 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-resort-navy/80">+61 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-resort-navy/10 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-resort-navy/80">info@mrdrivers.com.au</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold font-playfair mb-6">Contact Us</h3>
            <p className="mb-6">We'd love to hear from you</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
