import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/logo-optimized.png" alt="JainPackwell Pvt Ltd." className="h-12 w-auto" />
            <span className="text-2xl font-bold text-brand-blue" style={{ fontFamily: 'Avantgarde, sans-serif' }}>JainPackwell Pvt Ltd.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                  isActive(link.path) ? 'text-brand-blue font-bold' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-2 border-b border-gray-50 ${
                  isActive(link.path) ? 'text-brand-blue' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <Link
                to="/careers"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium py-2 border-b border-gray-50 text-slate-600"
              >
                Careers
              </Link>
             <Link
                to="/certifications"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium py-2 border-b border-gray-50 text-slate-600"
              >
                Certifications
              </Link>
          </div>
        </div>
      )}
    </header>
  );
};