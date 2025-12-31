import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Avantgarde, sans-serif' }}>Jain Packwell Pvt Ltd.</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading provider of innovative and sustainable packaging solutions since 1973. We elevate brands through offset printing excellence and premium quality structures.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/capabilities" className="hover:text-brand-accent transition-colors">Our Capabilities</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/sustainability" className="hover:text-brand-accent transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="hover:text-brand-accent transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/capabilities" className="hover:text-brand-accent transition-colors">Folding Cartons</Link></li>
              <li><Link to="/capabilities" className="hover:text-brand-accent transition-colors">Rigid Boxes</Link></li>
              <li><Link to="/capabilities" className="hover:text-brand-accent transition-colors">Labels & Tags</Link></li>
              <li><Link to="/capabilities" className="hover:text-brand-accent transition-colors">Design & Prototyping</Link></li>
              <li><Link to="/capabilities" className="hover:text-brand-accent transition-colors">Offset Printing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <MapPin className="flex-shrink-0 text-brand-accent" size={18} />
                <span>Jain Packwell Pvt Ltd,<br />Bhattian, Bahadarke,<br />Punjab 141008, India</span>
              </li>
              <li className="flex gap-3">
                <Phone className="flex-shrink-0 text-brand-accent" size={18} />
                <span>+91 9814027668</span>
              </li>
              <li className="flex gap-3">
                <Mail className="flex-shrink-0 text-brand-accent" size={18} />
                <span>info@jainpackwell.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} JainPackwell Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};