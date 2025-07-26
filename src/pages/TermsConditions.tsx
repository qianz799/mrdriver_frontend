import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-resort-white">
      {/* Hero Section */}
      <div className="bg-resort-navy text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair">Terms and Conditions</h1>
          <p className="text-xl mt-4 text-white/80">Effective Date: July 20, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">1. Introduction</h2>
            <p className="text-resort-navy/80 leading-relaxed">
              MrDrivers ("we," "us," "our") provides luxury chauffeur services in Sydney, Australia, using our premium Mercedes-Benz fleet: Maybach S680 (3 passengers), Maybach GLS600 (3 passengers), S-Class (3 passengers), V-Class (6 passengers), GLS (4 passengers), custom VIP Sprinter (9 passengers, 10 seats including driver), and 11-14 PAX Sprinter (11-14 passengers). These Terms and Conditions govern our services, ensuring a professional, safe, and reliable experience. By booking with MrDrivers, you agree to these terms.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">2. Scope</h2>
            <p className="text-resort-navy/80">
              These Terms apply to all chauffeurs employed by MrDrivers and all services, including airport transfers, business charters, city tours, and special event transportation in Sydney.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">3. Professional Conduct</h2>
            <p className="text-resort-navy/80 mb-4">Our chauffeurs uphold top professionalism:</p>
            <ul className="list-disc pl-6 text-resort-navy/80 space-y-2">
              <li><strong>Punctuality:</strong> Arriving on time, backed by our on-time guarantee (free ride if we're late).</li>
              <li><strong>Appearance:</strong> Wearing formal business attire (e.g., suits) and maintaining excellent hygiene.</li>
              <li><strong>Courtesy:</strong> Treating clients and other road users with respect.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">4. Safety Standards</h2>
            <p className="text-resort-navy/80 mb-4">Safety is paramount. Chauffeurs must:</p>
            <ul className="list-disc pl-6 text-resort-navy/80 space-y-2">
              <li><strong>Drive Responsibly:</strong> Comply with Australian road laws and speed limits.</li>
              <li><strong>Maintain Vehicles:</strong> Ensure vehicles are clean, well-maintained, and regularly serviced.</li>
              <li><strong>Be Prepared:</strong> Know the location and use of safety equipment (e.g., fire extinguishers, first aid kits).</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">5. Client Confidentiality</h2>
            <p className="text-resort-navy/80">
              Chauffeurs respect your privacy. Information obtained during service (e.g., travel details, conversations) is confidential and not shared with third parties, per our Privacy Policy.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">6. Service Expectations</h2>
            <p className="text-resort-navy/80 mb-4">Our chauffeurs provide:</p>
            <ul className="list-disc pl-6 text-resort-navy/80 space-y-2">
              <li><strong>Luggage Assistance:</strong> Helping load and unload luggage.</li>
              <li><strong>Client Comfort:</strong> Offering amenities like Wi-Fi, bottled water, and climate control on request.</li>
              <li><strong>Route Efficiency:</strong> Choosing the fastest, safest routes based on traffic and client preferences.</li>
              <li><strong>Vehicle Upgrades:</strong> MrDrivers reserves the right to upgrade vehicle types for free based on the number of passengers and luggage quantity (e.g., upgrading from S-Class to VIP Sprinter for larger groups or excess luggage).</li>
              <li><strong>Child Safety Seats:</strong> Clients must request child safety seats at booking for passengers under 7 years, per Australian road laws. MrDrivers provides compliant seats for a $20 AUD fee per seat, subject to availability. Clients may use their own approved seats, provided they meet Australian standards (AS/NZS 1754).</li>
              <li><strong>Special Event Specifications:</strong> For special event transportation (e.g., weddings, corporate events), clients must notify MrDrivers of specific requirements (e.g., vehicle decorations, additional amenities) at least 48 hours in advance. MrDrivers is not liable for damages to client-provided decorations or delays due to unnotified requests. Additional fees may apply for customizations, quoted at booking.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">7. Communication</h2>
            <p className="text-resort-navy/80 mb-4">Chauffeurs will:</p>
            <ul className="list-disc pl-6 text-resort-navy/80 space-y-2">
              <li><strong>Confirm Details:</strong> Verify pick-up/drop-off locations, times, and special requests (e.g., child seats).</li>
              <li><strong>Update Status:</strong> Notify clients of delays or changes via phone (1300 618 241, read as "one-three-zero-zero, six-one-eight, two-four-one") or email (info@mrdrivers.com, read as "info at mrdrivers dot com").</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">8. Handling Complaints</h2>
            <p className="text-resort-navy/80">
              Chauffeurs address complaints courteously and report them to management for resolution. Contact us at 1300 618 241 or info@mrdrivers.com for support.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">9. Alcohol and Drug Policy</h2>
            <p className="text-resort-navy/80">
              Chauffeurs are prohibited from consuming alcohol or illegal substances while on duty. Violations result in immediate termination.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">10. Use of Mobile Devices</h2>
            <p className="text-resort-navy/80">
              Chauffeurs may not use mobile devices for personal purposes while driving. Hands-free devices are allowed for work-related communication only.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">11. Accidents and Incidents</h2>
            <p className="text-resort-navy/80 mb-4">In case of an accident or incident:</p>
            <ul className="list-disc pl-6 text-resort-navy/80 space-y-2">
              <li><strong>Prioritize Safety:</strong> Ensure client and chauffeur safety.</li>
              <li><strong>Report Promptly:</strong> Contact emergency services if needed and notify management immediately.</li>
              <li><strong>Document:</strong> Record details like time, location, and witness information.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">12. Training and Compliance</h2>
            <p className="text-resort-navy/80">
              Chauffeurs undergo regular training on safety, customer service, and company policies to meet Australian Consumer Law and industry standards.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">13. Pricing and Payment</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-resort-navy mb-2">Point-to-Point Pricing (includes 10 km and 30 minutes driving time):</h3>
                <ul className="list-disc pl-6 text-resort-navy/80 space-y-1">
                  <li>Maybach S680 (3 passengers): $350 base, $7.00/km, $3.50/min extra.</li>
                  <li>Maybach GLS600 (3 passengers): $250 base, $5.00/km, $2.50/min extra.</li>
                  <li>S-Class (4 passengers): $150 base, $3.00/km, $1.50/min extra.</li>
                  <li>V-Class (6 passengers): $120 base, $2.40/km, $1.20/min extra.</li>
                  <li>GLS (4 passengers): $120 base, $2.40/km, $1.20/min extra.</li>
                  <li>VIP Sprinter (9 passengers): $300 base, $6.00/km, $3.00/min extra.</li>
                  <li>11-14 PAX Sprinter (11-14 passengers): $180 base, $3.60/km, $1.80/min extra.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-resort-navy mb-2">Hourly/As-Directed Pricing (minimum 3 hours, maximum 20 km per hour, e.g., 60 km for 3 hours):</h3>
                <ul className="list-disc pl-6 text-resort-navy/80 space-y-1">
                  <li>Maybach S680: $350/hour.</li>
                  <li>Maybach GLS600: $250/hour.</li>
                  <li>S-Class: $150/hour.</li>
                  <li>V-Class: $120/hour.</li>
                  <li>GLS: $120/hour.</li>
                  <li>VIP Sprinter: $300/hour.</li>
                  <li>11-14 PAX Sprinter: $180/hour.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-resort-navy mb-2">Extra Charges (beyond included km or minutes for point-to-point, or beyond 20 km/hour for hourly bookings):</h3>
                <ul className="list-disc pl-6 text-resort-navy/80 space-y-1">
                  <li><strong>Per Kilometer:</strong> Maybach S680: $7.00/km, Maybach GLS600: $5.00/km, S-Class: $3.00/km, V-Class: $2.40/km, GLS: $2.40/km, VIP Sprinter: $6.00/km, 11-14 PAX Sprinter: $3.60/km.</li>
                  <li><strong>Per Minute:</strong> Maybach S680: $3.50/min, Maybach GLS600: $2.50/min, S-Class: $1.50/min, V-Class: $1.20/min, GLS: $1.20/min, VIP Sprinter: $3.00/min, 11-14 PAX Sprinter: $1.80/min.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-resort-navy mb-2">Luggage and Passenger Limits:</h3>
                <p className="text-resort-navy/80 mb-2">Bookings must specify accurate passenger numbers and luggage details. Maximum capacities are:</p>
                <ul className="list-disc pl-6 text-resort-navy/80 space-y-1">
                  <li>Maybach S680 (3 passengers, 2 standard suitcases)</li>
                  <li>Maybach GLS600 (3 passengers, 3 standard suitcases)</li>
                  <li>S-Class (4 passengers, 3 suitcases)</li>
                  <li>V-Class (6 passengers, 4 suitcases)</li>
                  <li>GLS (4 passengers, 4 suitcases)</li>
                  <li>VIP Sprinter (9 passengers, 6 suitcases)</li>
                  <li>11-14 PAX Sprinter (11-14 passengers, 10 suitcases)</li>
                </ul>
                <p className="text-resort-navy/80 mt-2">MrDrivers may upgrade vehicles for free if capacity allows. Excess luggage or passengers may incur additional fees or require a different vehicle, quoted at booking.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-resort-navy mb-2">Online Discount:</h3>
                <p className="text-resort-navy/80">Book online at www.mrdrivers.com.au to save 10% on all services.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-resort-navy mb-2">Price Match Guarantee:</h3>
                <p className="text-resort-navy/80">We guarantee the lowest rate for the same vehicle type in Sydney. Submit a competitor's quote, and we'll match or beat it.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-resort-navy mb-2">Payment:</h3>
                <p className="text-resort-navy/80">Full payment is required at booking via secure third-party processors. Prices include driver, fuel, and tolls, with no hidden fees.</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">14. Waiting Time and Charges</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-resort-navy mb-2">Free Waiting Time (from flight landing or scheduled pick-up):</h3>
                <ul className="list-disc pl-6 text-resort-navy/80 space-y-1">
                  <li>Point-to-Point Transfers: 15 minutes.</li>
                  <li>Domestic Airport Arrivals: 30 minutes.</li>
                  <li>International Airport Arrivals: 60 minutes.</li>
                  <li>Special Event Transportation: 30 minutes.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-resort-navy mb-2">Extra Waiting Time Charges:</h3>
                <ul className="list-disc pl-6 text-resort-navy/80 space-y-1">
                  <li>Maybach S680: $3.50/minute.</li>
                  <li>Maybach GLS600: $2.50/minute.</li>
                  <li>S-Class: $1.50/minute.</li>
                  <li>V-Class: $1.20/minute.</li>
                  <li>GLS: $1.20/minute.</li>
                  <li>VIP Sprinter: $3.00/minute.</li>
                  <li>11-14 PAX Sprinter: $1.80/minute.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">15. Refund, Cancellation, and Reschedule Policy</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-resort-navy mb-2">Cancellations:</h3>
                <p className="text-resort-navy/80">Cancellations must be made at least 24 hours before the scheduled pick-up via 1300 618 241 or info@mrdrivers.com. Cancellations within 24 hours incur a 50% fee of the booked service cost. No-shows without notification are charged the full amount. Special event bookings may require a non-refundable deposit, specified at booking.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-resort-navy mb-2">No Refunds:</h3>
                <p className="text-resort-navy/80">Fees are non-refundable except for uncontrollable third-party events (e.g., flight cancellations).</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-resort-navy mb-2">Full Refund Guarantee:</h3>
                <p className="text-resort-navy/80">If our chauffeur is late or the vehicle does not match the booked description (e.g., expecting a Maybach GLS600 but receiving another model), we provide a full refund.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-resort-navy mb-2">Rescheduling:</h3>
                <p className="text-resort-navy/80">Requests must be made 12 hours in advance via 1300 618 241 or info@mrdrivers.com. A $50 AUD rescheduling fee applies, subject to availability.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-resort-navy mb-2">Force Majeure:</h3>
                <p className="text-resort-navy/80">MrDrivers is not liable for delays, cancellations, or service failures due to events beyond our control, including but not limited to natural disasters, government restrictions, traffic accidents, or airline delays. In such cases, we'll work with clients to reschedule without the $50 AUD fee or provide a full refund if rescheduling is not possible.</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">16. Service On-Time Guarantee</h2>
            <p className="text-resort-navy/80">
              Our professional drivers guarantee punctuality. If we're late for your scheduled pick-up, your ride is free, ensuring trust in MrDrivers' service.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">17. Review and Updates</h2>
            <p className="text-resort-navy/80">
              We review these Terms annually to ensure compliance with Australian Consumer Law and industry standards. Updates will be posted on www.mrdrivers.com.au with the effective date. Continued use of our services implies acceptance.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">18. Contact Information</h2>
            <p className="text-resort-navy/80 mb-4">For questions, bookings, or complaints, contact:</p>
            <ul className="list-none pl-0 text-resort-navy/80 space-y-1">
              <li><strong>Company Name:</strong> MrDrivers</li>
              <li><strong>Email:</strong> info@mrdrivers.com (info at mrdrivers dot com)</li>
              <li><strong>Phone:</strong> 1300 618 241 (one-three-zero-zero, six-one-eight, two-four-one)</li>
              <li><strong>Address:</strong> 100 Harris St, Sydney, NSW, Australia</li>
              <li><strong>Website:</strong> www.mrdrivers.com.au</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions; 