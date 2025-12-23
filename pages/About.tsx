import React from 'react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Award, Users, Target, Factory, Calendar, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-0">
      {/* Header */}
      <div className="bg-brand-dark text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 animate-fade-in-up">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            A legacy of excellence in printing and packaging since 1973.
          </p>
        </div>
      </div>

      <Section pattern="dots">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1 relative group">
             <div className="absolute -inset-4 bg-brand-blue rounded-xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
             <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop" alt="JainPackwell Team" className="rounded-xl shadow-lg w-full object-cover" />
           </div>
           <div className="order-1 md:order-2">
             <div className="inline-block p-2 bg-brand-light text-brand-blue rounded-lg mb-4">
                <Factory size={24} />
             </div>
             <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-brand-blue">Our Story</h2>
             <p className="text-slate-600 mb-6 leading-relaxed text-lg">
               Founded in 1973, JainPackwell Pvt. Ltd. has grown from a small printing press to one of the region's leading packaging and offset printing companies. Our journey has been defined by a commitment to quality, innovation, and customer satisfaction.
             </p>
             <p className="text-slate-600 leading-relaxed">
               Today, we operate state-of-the-art manufacturing facilities equipped with the latest technology. Our team of over 200 skilled professionals works tirelessly to deliver exceptional packaging solutions that help brands stand out in competitive markets.
             </p>
           </div>
        </div>
      </Section>

      <Section light>
        <SectionHeader title="Mission & Values" subtitle="Guided by purpose and principles" />
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: 'Excellence', desc: 'We pursue excellence in every aspect of our work, from print quality to customer service.', icon: <Award size={32} />, color: 'text-blue-600', bg: 'bg-blue-50' },
            { title: 'Innovation', desc: 'We continuously explore new technologies and creative solutions to stay ahead of market trends.', icon: <Factory size={32} />, color: 'text-purple-600', bg: 'bg-purple-50' },
            { title: 'Sustainability', desc: 'We are committed to environmentally responsible practices throughout our operations.', icon: <Users size={32} />, color: 'text-green-600', bg: 'bg-green-50' },
            { title: 'Integrity', desc: 'We conduct business with honesty, transparency, and ethical standards.', icon: <CheckCircle size={32} />, color: 'text-orange-600', bg: 'bg-orange-50' },
          ].map((val, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 text-center group">
              <div className={`w-16 h-16 ${val.bg} ${val.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                {val.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{val.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{val.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Our Journey" subtitle="Key milestones in our growth and evolution" />
        
        {/* Modern Center Timeline */}
        <div className="relative max-w-4xl mx-auto">
           {/* Center Line */}
           <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -ml-[0.5px] md:ml-0"></div>

          {[
            { year: '1973', title: 'The Beginning of Excellence', desc: 'A humble start with a bold vision—JainPackwell was born as a small offset printing press committed to uncompromising quality and craftsmanship.' },
            { year: '1996', title: 'Scaling New Heights', desc: 'Growth meets innovation. We unveiled a cutting-edge manufacturing facility, multiplying our capacity and setting new industry benchmarks.' },
            { year: '2019', title: 'Going Green, Growing Bigger', desc: 'Our largest and most sustainable facility opens—a testament to our commitment to the planet and our promise to lead with responsibility.' },
            { year: '2025', title: 'The Digital Revolution', desc: 'Embracing tomorrow, today. We\'re transforming operations with AI-powered workflows, smart automation, and next-generation design technology.' }
          ].map((item, idx) => (
            <div key={idx} className={`relative flex items-center justify-between mb-12 md:mb-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              
              {/* Spacer for other side */}
              <div className="hidden md:block w-5/12"></div>

              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-brand-blue border-4 border-white rounded-full shadow-lg transform -translate-x-1/2 z-10 flex items-center justify-center">
                 <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 pl-12 md:pl-0">
                 <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-brand-accent/50 transition-colors relative ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="text-5xl font-bold text-gray-100 absolute -top-6 right-4 select-none z-0">{item.year}</span>
                    <div className="relative z-10">
                        <span className="inline-block py-1 px-3 bg-brand-light text-brand-blue text-xs font-bold rounded-full mb-2 border border-brand-blue/10">{item.year}</span>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section light>
        <SectionHeader title="Leadership Team" subtitle="Meet the experts guiding our vision" />
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Decorative shadow elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue/20 via-brand-accent/20 to-brand-blue/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            
            {/* Main image container */}
            <div className="relative bg-white p-2 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/assets/Leadership.jpg" 
                alt="JainPackwell Leadership Team" 
                className="w-full h-auto rounded-xl transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-8 py-3 rounded-full shadow-lg border-2 border-brand-light">
              <p className="text-brand-blue font-bold text-lg whitespace-nowrap">Our Leadership Team</p>
            </div>
          </div>
          
          {/* Caption */}
          <p className="text-center text-slate-600 mt-12 text-lg leading-relaxed max-w-3xl mx-auto">
            United by a shared vision of excellence, our leadership team brings together decades of expertise in printing, packaging, and sustainable innovation to drive JainPackwell forward.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Industry Affiliations" />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           {[
             "Indian Printing Packaging and Allied Machinery Manufacturers' Association (IPAMA)",
             "Federation of Indian Chambers of Commerce and Industry (FICCI)",
             "All India Federation of Master Printers (AIFMP)",
             "Confederation of Indian Industry (CII)"
           ].map((aff, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                 <div className="bg-brand-blue/10 p-2 rounded-full text-brand-blue shrink-0">
                    <CheckCircle size={20} />
                 </div>
                 <span className="font-medium text-slate-700">{aff}</span>
              </div>
           ))}
        </div>
      </Section>
    </div>
  );
};