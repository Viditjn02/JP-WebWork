import React from 'react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Award, CheckCircle } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <div className="pt-0">
      <div className="bg-brand-dark text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Certifications</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our commitment to quality and sustainability, verified by global standards.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid gap-12 max-w-4xl mx-auto">
          {[
            {
              title: 'ISO 9001:2015',
              subtitle: 'Quality Management System',
              desc: 'Ensures consistent quality in our production processes, customer satisfaction, and continuous improvement.',
              color: 'bg-blue-50 border-blue-200 text-blue-700'
            },
            {
              title: 'FSC® Certified',
              subtitle: 'Forest Stewardship Council',
              desc: 'We are certified to produce packaging using paper from responsibly managed forests, ensuring environmental, social, and economic benefits.',
              color: 'bg-green-50 border-green-200 text-green-700'
            },
            {
              title: 'ISO 14001:2015',
              subtitle: 'Environmental Management',
              desc: 'Demonstrates our commitment to measuring and improving our environmental impact.',
              color: 'bg-teal-50 border-teal-200 text-teal-700'
            }
          ].map((cert, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-8 p-8 rounded-2xl border ${cert.color} bg-opacity-50`}>
              <div className="shrink-0 flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-sm mx-auto md:mx-0">
                <Award size={40} className="text-slate-400" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-1">{cert.title}</h3>
                <p className="font-semibold opacity-75 mb-4">{cert.subtitle}</p>
                <p className="leading-relaxed opacity-90">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};