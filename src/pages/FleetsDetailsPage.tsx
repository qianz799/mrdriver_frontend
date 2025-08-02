
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Users, Shield, Wifi, Briefcase, Calendar, ArrowLeft, ZoomIn, ZoomOut, X, DollarSign, Package } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

// Mock data - in a real app, this would come from an API
const fleetData = [
  {
    id: '1',
    title: 'Mercedes-Benz GLS',
    location: 'Sydney, NSW',
    price: 120,
    image: '/images/fleets/1/Front.jpg',
    passengers: 4,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 4,
    description: 'Experience supreme luxury and comfort with our Mercedes-Benz GLS. This premium SUV offers a sophisticated driving experience combined with advanced technology and safety features. Perfect for corporate transfers, airport pickups, or special events.',
    features: [
      'Luxury Interior',
      'Climate Control',
      'Premium Sound System',
      'Tinted Windows',
      'Professional Chauffeur',
      'Complimentary Water',
      'USB Charging',
      'Sanitized After Each Use'
    ],
    gallery: ['/images/fleets/1/Front.jpg'],
    interiorImages: [
      '/images/fleets/1/Interior1.jpg',
      '/images/fleets/1/Interior2.jpg',
      '/images/fleets/1/Interior3.jpg',
    ]
  },
  {
    id: '2',
    title: 'Mercedes-Benz S class',
    location: 'Sydney, NSW',
    price: 150,
    image: '/images/fleets/2/Front.jpg',
    passengers: 3,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 3,
    description: 'The Mercedes-Benz S class sets the standard for luxury sedans. Enjoy unmatched comfort, advanced technology, and a smooth ride for your most important journeys.',
    features: ['Executive Seating', 'Ambient Lighting', 'Burmester Audio', 'Rear Seat Entertainment', 'Professional Chauffeur', 'Complimentary Water', 'USB Charging', 'Sanitized After Each Use'],
    gallery: [
      '/images/fleets/2/Front.jpg'
    ],
    interiorImages: [
      '/images/fleets/2/Interior1.jpg',
      '/images/fleets/2/Interior2.jpg',
    ]
  },
  {
    id: '3',
    title: 'Mercedes-Benz Maybach S680',
    location: 'Sydney, NSW',
    price: 350,
    image: '/images/fleets/3/Front.jpg',
    passengers: 3,
    interior: 'Exclusive Leather',
    wifi: 'Upon Request',
    bagCapacity: 2,
    description: 'The ultimate in luxury, the Maybach S680 offers a first-class experience with every detail. Perfect for VIPs, weddings, and special occasions.',
    features: ['First-Class Cabin', 'Reclining Rear Seats', 'Champagne Fridge', 'Burmester High-End 4D Surround Sound', 'Professional Chauffeur', 'Complimentary Water', 'USB Charging', 'Sanitized After Each Use'],
    gallery: [
      '/images/fleets/3/Front.jpg'
    ],
    interiorImages: [
      '/images/fleets/3/Interior2.jpeg',
      '/images/fleets/3/Interior3.jpg',
      '/images/fleets/3/Interior4.jpeg',
      '/images/fleets/3/Interior5.jpeg',
    ]
  },
  {
    id: '4',
    title: 'Mercedes-Benz V class',
    location: 'Sydney, NSW',
    price: 120,
    image: '/images/fleets/4/Front.jpg',
    passengers: 6,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 6,
    description: 'The Mercedes-Benz V class is the perfect choice for group travel, offering space, comfort, and luxury for up to 6 passengers.',
    features: ['Spacious Cabin', 'Flexible Seating', 'Premium Sound', 'Tinted Windows', 'Professional Chauffeur', 'Complimentary Water', 'USB Charging', 'Sanitized After Each Use'],
    gallery: [
      '/images/fleets/4/Front.jpg'
    ],
    interiorImages: [
      '/images/fleets/4/Interior1.jpg',
      '/images/fleets/4/Interior2.jpg',
    ]
  },
  {
    id: '5',
    title: 'Mercedes-Benz VIP Sprinter',
    location: 'Sydney, NSW',
    price: 300,
    image: '/images/fleets/5/Front.jpg',
    passengers: 8,
    interior: 'VIP Leather',
    wifi: 'Upon Request',
    bagCapacity: 8,
    description: 'Travel in style with the Mercedes-Benz VIP Sprinter, featuring a luxurious interior and amenities for business or leisure groups.',
    features: ['VIP Cabin', 'Conference Seating', 'Onboard WiFi', 'Entertainment System', 'Professional Chauffeur', 'Complimentary Water', 'USB Charging', 'Sanitized After Each Use'],
    gallery: [
      'https://www.mercedes-benz.com.au/content/dam/hq/vans/sprinter/van-w907/modeloverview/01-2023/images/mercedes-benz-sprinter-van-w907-modeloverview-696x392-01-2023.png'
    ],
    interiorImages: []
  },
  {
    id: '6',
    title: 'Mercedes-Benz Sprinter 11-14PAX',
    location: 'Sydney, NSW',
    price: 180,
    image: '/images/fleets/6/Front.jpg',
    passengers: '11-14',
    interior: 'Leather',
    wifi: 'Upon Request',
    bagCapacity: '11-14',
    description: 'Ideal for larger groups, the Mercedes-Benz Sprinter 11-14PAX offers comfort, space, and convenience for up to 14 passengers.',
    features: ['Large Cabin', 'Flexible Seating', 'Onboard WiFi', 'Luggage Space', 'Professional Chauffeur', 'Complimentary Water', 'USB Charging', 'Sanitized After Each Use'],
    gallery: [
      'https://www.mercedes-benz.com.au/content/dam/hq/vans/sprinter/van-w907/modeloverview/01-2023/images/mercedes-benz-sprinter-van-w907-modeloverview-696x392-01-2023.png'
    ],
    interiorImages: []
  },
  {
    id: '7',
    title: 'Mercedes-Benz Maybach GLS 600',
    location: 'Sydney, NSW',
    price: 250,
    image: '/images/fleets/7/Front.jpg',
    passengers: 3,
    interior: 'Black Leather',
    wifi: 'Upon Request',
    bagCapacity: 3,
    description: 'Step into an unparalleled world of opulence with the Mercedes-Benz Maybach GLS 600. This ultra-luxury SUV is a seamless fusion of power, elegance, and refined craftsmanship. Designed to cater to those with the highest standards, it offers a serene ride, a commanding presence, and features tailored for a truly first-class travel experience. Ideal for executive transfers, VIP airport pick-ups, and distinguished occasions where prestige matters.',
    features: [
      'Executive Rear Seating',
      'Massage & Recline Function',
      'Burmester® High-End 3D Surround Sound',
      'Panoramic Sunroof',
      'Ambient Lighting (64 Colors)',
      'Professional Chauffeur',
      'Complimentary Refreshments',
      'Advanced Climate Control',
      'USB-C Fast Charging',
      'Wireless Device Integration',
      'Sanitized After Each Use',
      'Adaptive Air Suspension for Ultra Smooth Ride',
      'Discreet Privacy Glass'
    ],
  
    gallery: ['/images/fleets/1/Front.jpg'],
    interiorImages: [
      '/images/fleets/7/Interior1.jpg',
      '/images/fleets/7/Interior2.jpg',
      '/images/fleets/7/Interior3.jpg',
      '/images/fleets/7/Interior4.jpg',
    ]
  },
];

const FleetsDetailsPage = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const vehicle = fleetData.find((v) => v.id === id);
  
  if (!vehicle) {
    return (
      <div className="pt-24 container mx-auto section-padding text-center">
        <h1 className="text-3xl font-bold mb-4">Vehicle Not Found</h1>
        <Link to="/fleets">
          <Button variant="outline" className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Fleet
          </Button>
        </Link>
      </div>
    );
  }

  const { interiorImages } = vehicle;
  const totalImages = interiorImages.length;

  const goPrev = () => setGalleryIndex((prev) => (prev - 1 + totalImages) % totalImages);
  const goNext = () => setGalleryIndex((prev) => (prev + 1) % totalImages);

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const modalPrev = () => setModalImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  const modalNext = () => setModalImageIndex((prev) => (prev + 1) % totalImages);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div 
        className="h-[50vh] relative shadow-md"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.2),
              rgba(0, 0, 0, 0.4)
            ),
            url('/images/about/background.png')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container mx-auto h-full flex items-end pb-10 relative z-10">
          <div className="text-white">
            <Link to="/fleets" className="flex items-center text-white/80 hover:text-white mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Fleet
            </Link>
            <h1 className="text-4xl font-bold font-playfair mb-2">{vehicle.title}</h1>
            <div className="flex items-center">
              <Briefcase className="h-5 w-5 mr-1" />
              <span>{vehicle.location}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Vehicle Details Card */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b">
                <div className="flex items-center space-x-6">
                  {/* 1. Passengers */}
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-1" />
                    <span>{vehicle.passengers} Passengers</span>
                  </div>

                  {/* 2. Bag Capacity */}
                  <div className="flex items-center">
                    <Package className="h-5 w-5 text-primary mr-1" />
                    <span>{vehicle.bagCapacity} Bags</span>
                  </div>

                  {/* 3. Interior */}
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-1" />
                    <span>{vehicle.interior}</span>
                  </div>

                  {/* 4. WiFi */}
                  <div className="flex items-center">
                    <Wifi className="h-5 w-5 text-primary mr-1" />
                    <span>WiFi: {vehicle.wifi}</span>
                  </div>
                </div>

                {/* 5. Price - aligned to the right */}
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-primary mr-1" />
                  <span className="font-semibold">From ${vehicle.price}</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold font-playfair mb-4">Description</h2>
              <p className="mb-8 leading-relaxed">{vehicle.description}</p>
              
              <h2 className="text-2xl font-bold font-playfair mb-4">Features & Amenities</h2>
              <ul className="grid grid-cols-2 gap-2 mb-8">
                {vehicle.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold font-playfair mb-4">Gallery</h2>
              {totalImages > 0 ? (
                <div className="flex flex-col sm:flex-row items-center justify-center mb-8 gap-4">
                  <button
                    onClick={goPrev}
                    className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-full sm:mr-4 disabled:opacity-50 transition-colors order-2 sm:order-1"
                    disabled={totalImages <= 1}
                    aria-label="Previous image"
                  >
                    &#8592;
                  </button>
                  <div className="relative w-full max-w-[800px] h-[300px] sm:h-[400px] md:h-[500px] bg-gray-100 rounded-lg shadow overflow-hidden flex items-center justify-center group cursor-pointer order-1 sm:order-2"
                       onClick={() => openModal(galleryIndex)}>
                    <img
                      src={interiorImages[galleryIndex]}
                      alt={`${vehicle.title} Interior ${galleryIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      onError={e => { e.currentTarget.src = '/placeholder.svg'; }}
                    />
                    {/* Zoom icon overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {/* Image counter */}
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {galleryIndex + 1}/{totalImages}
                    </div>
                  </div>
                  <button
                    onClick={goNext}
                    className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-full sm:ml-4 disabled:opacity-50 transition-colors order-3"
                    disabled={totalImages <= 1}
                    aria-label="Next image"
                  >
                    &#8594;
                  </button>
                </div>
              ) : (
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gray-100 rounded-lg shadow overflow-hidden flex items-center justify-center mb-8">
                  <p className="text-gray-500">No interior images available</p>
                </div>
              )}

              {/* Modal for full-screen image view */}
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-black/90 border-none">
                  <div className="relative h-full flex items-center justify-center">
                    {/* Close button */}
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    {/* Previous button */}
                    {totalImages > 1 && (
                      <button
                        onClick={modalPrev}
                        className="absolute left-4 z-40 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                        aria-label="Previous image"
                      >
                        &#8592;
                      </button>
                    )}

                    {/* Image */}
                    <img
                      src={interiorImages[modalImageIndex]}
                      alt={`${vehicle.title} Interior ${modalImageIndex + 1}`}
                      className="max-w-full max-h-full object-contain"
                      onError={e => { e.currentTarget.src = '/placeholder.svg'; }}
                    />

                    {/* Next button */}
                    {totalImages > 1 && (
                      <button
                        onClick={modalNext}
                        className="absolute right-4 z-40 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                        aria-label="Next image"
                      >
                        &#8594;
                      </button>
                    )}

                    {/* Image counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full">
                      {modalImageIndex + 1} / {totalImages}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-resort-sand p-6 rounded-lg shadow-md sticky top-28">
              <h3 className="text-xl font-bold font-playfair mb-6">Book This Vehicle</h3>
              <div className="flex items-center space-x-2 mb-6">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Check availability</span>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 mb-6">
                {t('book_now')}
              </Button>
              <div className="border-t pt-6">
                <h3 className="text-xl font-bold font-playfair mb-4">Contact Us</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FleetsDetailsPage;
