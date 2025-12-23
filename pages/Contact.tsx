import React, { useEffect, useState } from 'react';
import { Section } from '../components/ui/Section';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Check window size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="pt-0">
      <div className="bg-brand-dark text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get in touch for quotes, inquiries, or just to say hello.
          </p>
        </div>
      </div>

      <Section>
        <div className="gap-16 items-start" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold font-heading mb-6 text-brand-blue">Get in Touch</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We are always ready to assist you with your packaging needs. Visit our factory or drop us an email.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-blue shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Factory Address</h3>
                  <p className="text-slate-600">Jain Packwell Pvt Ltd,<br />Bhattian, Bahadarke,<br />Punjab 141008, India</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-blue shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-slate-600">+91 9814027668</p>
                  <p className="text-slate-500 text-sm">Mon-Sat, 9am - 6pm</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-blue shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-slate-600">info@jainpackwell.com</p>
                  <p className="text-slate-600">sales@jainpackwell.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Typeform Embed */}
          <div className="w-full h-full min-h-[700px]">
            <div data-tf-live="01KCXEFQ6VAZ93B155P2711F35" className="w-full h-full"></div>
          </div>
        </div>

        {/* Google Map - Full Width Below */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg h-96 bg-gray-100">
           {/* Interactive Google Map */}
           <iframe
              src="https://www.google.com/maps?q=Jain+Packwell+Pvt+Ltd,+Bhattian,+Bahadarke,+Punjab+141008,+India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Jain Packwell Location"
           />
        </div>
      </Section>
    </div>
  );
};