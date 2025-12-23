import React from 'react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Quote, Hexagon, Circle, Square, Triangle, Star, Box, Layers, Globe, Zap, Target, Anchor } from 'lucide-react';

// Helper for the "Pure" logo icon
const LeafIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
)

export const Clients: React.FC = () => {
  const industries = [
    { name: 'Food & Beverage', icon: <Hexagon />, clients: ['Apex Foods', 'Fresh Co.', 'Nature Box', 'Pure Eats', 'Tasty Inc', 'Golden Grain'] },
    { name: 'Pharmaceuticals', icon: <Circle />, clients: ['Orbit Pharma', 'MediLife', 'CureWell', 'BioTech', 'HealthPlus', 'GenRx'] },
    { name: 'Cosmetics', icon: <Star />, clients: ['Glow Beauty', 'Luxe Skin', 'Essence', 'Radiance', 'Pure Look', 'Vibe'] },
    { name: 'Electronics', icon: <Zap />, clients: ['TechCore', 'Smart Sys', 'Volt', 'Circuit', 'Connect', 'Future'] }
  ];

  // Map simplified client names to icons for visual variety
  const getIconForClient = (index: number) => {
    const icons = [<Hexagon />, <Circle />, <Square />, <Triangle />, <Box />, <Star />];
    return icons[index % icons.length];
  };

  return (
    <div className="pt-0">
      <div className="bg-brand-dark text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Clients</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted by leading brands across diverse industries.
          </p>
        </div>
      </div>

      <Section>
        <SectionHeader title="Partnering with Leaders" subtitle="From startups to global brands" />
        {industries.map((ind, idx) => (
          <div key={idx} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold font-heading mb-8 border-b pb-2 border-gray-100 flex items-center gap-2">
               <span className="text-brand-accent">{React.cloneElement(ind.icon as React.ReactElement, { size: 28 })}</span>
               {ind.name}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {ind.clients.map((clientName, cIdx) => (
                <div key={cIdx} className="h-28 bg-gray-50 rounded-lg flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all hover:bg-white hover:shadow-md border border-gray-100 group cursor-default">
                   <div className="text-slate-400 group-hover:text-brand-blue transition-colors mb-3">
                      {React.cloneElement(getIconForClient(cIdx) as React.ReactElement, { size: 32 })}
                   </div>
                   <span className="font-bold text-sm text-slate-500 group-hover:text-slate-800">{clientName}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section light>
        <SectionHeader title="Client Testimonials" subtitle="What our clients say about working with us" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              text: "JainPackwell has consistently delivered exceptional packaging solutions for our premium product line. Their attention to detail, innovative approach, and commitment to quality have made them our trusted packaging partner.",
              author: "Sarah Johnson",
              role: "Marketing Director",
              company: "Luxury Foods Inc."
            },
            {
              text: "Working with JainPackwell transformed our packaging strategy. Their team understood our brand vision and translated it into packaging that not only protects our products but also enhances our shelf presence.",
              author: "Rajiv Mehta",
              role: "CEO",
              company: "Wellness Pharma"
            },
            {
              text: "The team at JainPackwell went above and beyond to meet our tight deadlines without compromising on quality. Their sustainable packaging solutions have helped us reduce our environmental footprint.",
              author: "Emily Chen",
              role: "Product Development Manager",
              company: "Green Beauty Co."
            },
            {
              text: "JainPackwell's expertise in pharmaceutical packaging has been invaluable. Their attention to regulatory requirements, combined with innovative design, ensures product integrity and compliance.",
              author: "Dr. Amit Patel",
              role: "Head of Operations",
              company: "MediCare Pharmaceuticals"
            },
            {
              text: "We've been working with JainPackwell for over five years, and they consistently exceed our expectations. Their ability to scale production while maintaining exceptional quality has supported our rapid growth.",
              author: "Michael Rodriguez",
              role: "Supply Chain Director",
              company: "Global Electronics"
            },
            {
              text: "The innovative packaging solutions provided by JainPackwell have significantly enhanced our unboxing experience, resulting in increased customer satisfaction and social media engagement.",
              author: "Priya Sharma",
              role: "Brand Manager",
              company: "Luxury Cosmetics"
            }
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm relative hover:shadow-md transition-shadow">
              <Quote className="text-brand-light absolute top-6 right-6 text-6xl opacity-50" size={48} />
              <p className="text-slate-600 mb-6 relative z-10 italic text-sm leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.author}</p>
                <p className="text-xs text-brand-blue font-semibold uppercase">{t.role}</p>
                <p className="text-xs text-slate-400">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};