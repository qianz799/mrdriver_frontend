import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-resort-white">
      {/* Hero Section */}
      <div className="bg-resort-navy text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair">Privacy Policy</h1>
          <p className="text-xl mt-4 text-white/80">Effective Date: July 20, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">1. Introduction</h2>
            <p className="text-resort-navy/80 leading-relaxed">
              MrDrivers ("we," "us," "our") is committed to protecting your privacy while providing luxury chauffeur services in Sydney, Australia, using our premium Mercedes-Benz fleet: Maybach S680 (3 passengers), S-Class (4 passengers), V-Class (6 passengers), GLS (4 passengers), custom VIP Sprinter (9 passengers, 10 seats including driver), and 11-14 PAX Sprinter (11-14 passengers). This Privacy Policy explains how we collect, use, and disclose your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). By accessing our website (www.mrdrivers.com.au) or using our services, you agree to the collection and use of your personal information as described below. For more information on the Privacy Act, visit www.oaic.gov.au.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">2. What Personal Information We Collect</h2>
            <p className="text-resort-navy/80 mb-4">We collect and process personal information necessary to deliver our luxury chauffeur services, including:</p>
            <ul className="list-disc pl-6 text-resort-navy/80 space-y-2">
              <li><strong>Personal Identification Information:</strong> Name, phone number, email address (e.g., info@mrdrivers.com, read as "info at mrdrivers dot com"), and other contact details.</li>
              <li><strong>Transactional Information:</strong> Booking details (e.g., pick-up/drop-off locations, travel dates, vehicle preferences like VIP Sprinter), payment information, and flight details for airport transfers.</li>
              <li><strong>Travel Preferences:</strong> Special requests (e.g., child seats, Wi-Fi), group size (e.g., up to 9 for VIP Sprinter, 11-14 for Sprinter), and luggage details for potential vehicle upgrades.</li>
              <li><strong>Usage Data:</strong> Information about your interaction with our website, such as IP addresses, browser types, pages visited, and analytics data (e.g., via Google Analytics).</li>
              <li><strong>Cookies:</strong> We use cookies and similar technologies to enhance your website experience. See our Cookies Policy for details.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">3. How We Collect Personal Information</h2>
            <p className="text-resort-navy/80 mb-4">We collect personal information directly from you when you:</p>
            <ul className="list-disc pl-6 text-resort-navy/80 space-y-2">
              <li>Book a chauffeur service online, via phone (1300 618 241, read as "one-three-zero-zero, six-one-eight, two-four-one"), or email.</li>
              <li>Register for our newsletters or promotional offers (e.g., 10% online booking discount).</li>
              <li>Contact us through our website form, phone, email, or social media (e.g., WeChat, Facebook).</li>
              <li>Complete online forms, surveys, or provide feedback about our services.</li>
              <li>Interact with our services, such as requesting vehicle upgrades based on passenger numbers or luggage.</li>
            </ul>
            <p className="text-resort-navy/80 mt-4">
              <strong>Social Media Interactions:</strong> When you contact us via social media platforms (e.g., WeChat, Facebook), we may collect your username, messages, or profile details to respond to inquiries or process bookings. We do not control these platforms' privacy practices and recommend reviewing their policies.
            </p>
            <p className="text-resort-navy/80 mt-2">
              We may also collect information indirectly from third parties, such as payment processors, booking platforms, or flight tracking services, when relevant to our operations.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">4. Purpose of Collecting Your Information</h2>
            <p className="text-resort-navy/80 mb-4">We collect your personal information to:</p>
            <ul className="list-disc pl-6 text-resort-navy/80 space-y-2">
              <li><strong>Provide Services:</strong> Manage bookings, process payments, track flights for free waiting times (60 minutes for international, 30 minutes for domestic, 15 minutes for point-to-point, 30 minutes for special event transportation), and deliver chauffeur services.</li>
              <li><strong>Communicate:</strong> Respond to inquiries, confirm bookings, and send service updates (e.g., driver details, delays).</li>
              <li><strong>Enhance Experience:</strong> Offer vehicle upgrades based on passenger numbers and luggage quantity, and honor our price match and on-time guarantees (free ride if drivers are late).</li>
              <li><strong>Marketing Preferences:</strong> With your consent, we may send marketing communications about offers like our 10% online booking discount via email, SMS, or WeChat. You can opt out at any time by clicking "unsubscribe" in emails, replying "STOP" to SMS, or contacting us at info@mrdrivers.com or 1300 618 241. We'll process opt-out requests within 5 business days.</li>
              <li><strong>Legal Compliance:</strong> Meet legal obligations, such as fraud prevention or compliance with Australian Consumer Law.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">5. Disclosure of Personal Information</h2>
            <p className="text-resort-navy/80 mb-4">We do not sell or rent your personal information. We may disclose it to:</p>
            <ul className="list-disc pl-6 text-resort-navy/80 space-y-2">
              <li><strong>Service Providers:</strong> Trusted third parties (e.g., payment processors, IT support, booking platforms) bound by privacy agreements to assist with our services.</li>
              <li><strong>Third-Party Booking Platforms:</strong> We may share booking details with trusted third-party platforms (e.g., reservation systems) to facilitate online bookings. These platforms are contractually bound to protect your data in line with Australian privacy laws.</li>
              <li><strong>Professional Drivers:</strong> Limited details (e.g., name, pick-up time, location) to fulfill your booking.</li>
              <li><strong>Legal Authorities:</strong> If required by law, such as under the Privacy Act 1988 or a court order.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your information may be transferred.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">6. Data Security</h2>
            <p className="text-resort-navy/80 mb-4">We take reasonable steps to protect your personal information from misuse, loss, unauthorized access, modification, or disclosure, including:</p>
            <ul className="list-disc pl-6 text-resort-navy/80 space-y-2">
              <li>Using encryption and secure servers for data storage in Australia.</li>
              <li>Implementing industry-standard security for payment processing.</li>
              <li>Training staff and chauffeurs on privacy compliance.</li>
              <li>Conducting regular system audits to prevent breaches.</li>
            </ul>
            <p className="text-resort-navy/80 mt-4">
              <strong>Data Retention:</strong> We retain personal information only as long as necessary for service delivery, legal compliance, or dispute resolution (typically up to 7 years for financial records, per Australian tax laws). Data no longer needed is securely destroyed or de-identified.
            </p>
            <p className="text-resort-navy/80 mt-2">
              No internet transmission is fully secure, but we strive to maintain robust protections.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">7. Data Breach Notification</h2>
            <p className="text-resort-navy/80">
              In the unlikely event of a data breach that may cause serious harm, we will notify affected individuals and the Office of the Australian Information Commissioner (OAIC) as required by the Privacy Act 1988. We'll take prompt action to mitigate harm and inform you of steps to protect your information.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">8. Overseas Disclosure</h2>
            <p className="text-resort-navy/80">
              As we serve international clients, we may share booking or flight details with overseas partners (e.g., in the USA, UK, or Asia) for coordination. We ensure these recipients comply with Australian privacy laws or equivalent protections.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">9. Your Rights Under Australian Law</h2>
            <p className="text-resort-navy/80 mb-4">Under the Privacy Act 1988, you have the right to:</p>
            <ul className="list-disc pl-6 text-resort-navy/80 space-y-2">
              <li><strong>Access:</strong> Request access to the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request corrections to inaccurate, incomplete, or outdated information.</li>
              <li><strong>Complaints:</strong> Contact us if you believe we've breached your privacy rights under the APPs. We'll respond within 30 days.</li>
            </ul>
            <p className="text-resort-navy/80 mt-4">
              To exercise these rights, contact our Privacy Officer at:
            </p>
            <ul className="list-disc pl-6 text-resort-navy/80 mt-2">
              <li>Email: info@mrdrivers.com (info at mrdrivers dot com)</li>
              <li>Phone: 1300 618 241 (one-three-zero-zero, six-one-eight, two-four-one)</li>
            </ul>
            <p className="text-resort-navy/80 mt-4">
              If unsatisfied, you may contact the OAIC at www.oaic.gov.au or 1300 363 992.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">10. Cookies and Website Analytics</h2>
            <p className="text-resort-navy/80">
              We use cookies and tools like Google Analytics to track anonymous website usage (e.g., pages visited, IP addresses) to improve functionality. You can manage cookies via browser settings or opt out using Google Analytics tools, though this may affect website performance.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">11. Updates to This Privacy Policy</h2>
            <p className="text-resort-navy/80">
              We may update this Privacy Policy to reflect changes in our practices or Australian privacy law. Updates will be posted on www.mrdrivers.com.au with the effective date. Continued use of our services implies acceptance.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-resort-navy mb-4">12. Contact Us</h2>
            <p className="text-resort-navy/80 mb-4">For questions, requests to access or correct your information, or complaints, contact:</p>
            <ul className="list-none pl-0 text-resort-navy/80 space-y-1">
              <li><strong>Company Name:</strong> MrDrivers</li>
              <li><strong>Email:</strong> info@mrdrivers.com (info at mrdrivers dot com)</li>
              <li><strong>Phone:</strong> 1300 618 241 (one-three-zero-zero, six-one-eight, two-four-one)</li>
              <li><strong>Address:</strong> 100 Harris St, Sydney, NSW, Australia</li>
              <li><strong>Website:</strong> www.mrdrivers.com.au</li>
            </ul>
            <p className="text-resort-navy/80 mt-4">
              If unsatisfied with our response, contact the OAIC at www.oaic.gov.au or 1300 363 992.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-12">
            <p className="text-sm text-resort-navy/70 italic">
              <strong>Note:</strong> This Privacy Policy complies with Australian privacy laws but should be reviewed by a legal professional to ensure full compliance with the Privacy Act 1988 and other regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 