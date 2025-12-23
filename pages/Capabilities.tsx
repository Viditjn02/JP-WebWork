import React from 'react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Check, Layers, Printer, Scissors, Box, PenTool, Truck, Settings, Package, ShieldCheck, Palette, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Capabilities: React.FC = () => {
  return (
    <div className="pt-0">
       <div className="bg-brand-dark relative overflow-hidden text-white py-24 px-4">
        {/* Background Graphic */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#E94560" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,89.1,-6.6C88.1,7.2,83.4,20.5,75.4,32C67.4,43.5,56.1,53.2,43.7,61.3C31.3,69.4,17.8,75.9,3.3,70.2C-11.2,64.5,-26.7,46.6,-39.9,31.7C-53.1,16.8,-64,4.9,-67.2,-9.6C-70.4,-24.1,-65.9,-41.2,-55.1,-54.6C-44.3,-68,-27.2,-77.7,-10.8,-76.4C5.6,-75.1,28,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 animate-fade-in-up">Our Capabilities</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Comprehensive packaging and printing solutions powered by cutting-edge technology.
          </p>
        </div>
      </div>

      {/* Production Process Visualization */}
      <Section light>
        <SectionHeader title="The Production Process" subtitle="From concept to completion" />
        
        <div className="relative max-w-6xl mx-auto mt-12">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {[
              { icon: <PenTool size={24} />, title: "Design", desc: "CAD & Prototyping" },
              { icon: <Settings size={24} />, title: "Pre-Press", desc: "Plate Making" },
              { icon: <Printer size={24} />, title: "Printing", desc: "Offset & UV" },
              { icon: <Scissors size={24} />, title: "Finishing", desc: "Die-Cut & Foil" },
              { icon: <Truck size={24} />, title: "Delivery", desc: "Logistics" },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white border-4 border-brand-light rounded-full flex items-center justify-center text-brand-blue shadow-lg group-hover:border-brand-accent group-hover:scale-110 transition-all duration-300 mb-4 bg-white">
                  {step.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
             <SectionHeader title="Printing Technologies" align="left" subtitle="Advanced capabilities for exceptional quality" />
            
            <div className="space-y-6">
               {[
                 { title: 'Offset Printing', desc: 'High-speed 6-color offset presses for high-volume packaging with consistent results.' },
                 { title: 'UV Offset Printing', desc: 'Allows printing on non-absorbent substrates with vibrant colors and instant drying.' },
                 { title: 'Special Effects', desc: 'Metallic inks, spot colors, and specialty coatings to create eye-catching packaging.' },
                 { title: 'Digital Printing', desc: 'Quick turnaround for short runs, prototypes, and variable data printing.' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                   <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-blue shrink-0">
                      <Printer size={20} />
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>
             <img src="/assets/ChatGPT Image Dec 19, 2025 at 11_19_19 PM.png" alt="Printing Press" className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform" />
          </div>
        </div>
      </Section>

      <Section light pattern="grid">
        <div className="grid md:grid-cols-2 gap-16 items-center">
           <div className="order-2 md:order-1 relative">
             <img src="/assets/Gemini_Generated_Image_x2klqlx2klqlx2kl.png" alt="Finishing" className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white transform hover:scale-[1.01] transition-transform" />
          </div>
          <div className="order-1 md:order-2">
            <SectionHeader title="Finishing & Conversion" align="left" subtitle="Premium finishing that elevates your brand" />
            
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              The magic happens in the finish. Our post-press capabilities add value and protection to your packaging, turning a simple box into a premium experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {['Die Cutting', 'Folder Gluing', 'Hot Foil Stamping', 'Embossing/Debossing', 'Spot UV', 'Window Patching', 'Lamination', 'Braille Printing'].map(item => (
                 <div key={item} className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                   <span className="text-slate-700 font-medium">{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </Section>
      
      {/* Design & Innovation */}
      <Section>
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
               <SectionHeader title="Design & Innovation" align="left" subtitle="Creative solutions bringing vision to life" />
               <p className="text-slate-600 mb-8">
                  Our in-house design team combines creativity with technical expertise to develop packaging solutions that are both visually striking and functionally superior.
               </p>
               <div className="space-y-4">
                  {[
                     { title: "Structural Design", desc: "Custom structures optimized for protection and experience." },
                     { title: "Graphic Design", desc: "Compelling visuals that enhance brand identity." },
                     { title: "3D Prototyping", desc: "Rapid prototyping to visualize designs before production." },
                     { title: "Packaging Innovation", desc: "Solutions addressing market trends and consumer needs." }
                  ].map((item, i) => (
                     <div key={i} className="flex items-start gap-3">
                        <Check className="text-brand-accent mt-1" size={18} />
                        <div>
                           <h4 className="font-bold text-slate-900">{item.title}</h4>
                           <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="mt-8">
                  <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-white rounded-lg font-bold hover:bg-brand-dark transition-colors shadow-md hover:shadow-lg">
                     Discuss Your Design Needs
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                     </svg>
                  </Link>
               </div>
            </div>
            <div>
               <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl shadow-xl" alt="Design Team" />
            </div>
         </div>
      </Section>

      {/* Quality Assurance */}
      <Section light>
         <div className="max-w-4xl mx-auto">
            <SectionHeader title="Quality Assurance" subtitle="Rigorous control at every stage" />
            <div className="grid md:grid-cols-4 gap-6">
               {[
                  { title: "Material Testing", icon: <Package size={28} /> },
                  { title: "In-Process Inspection", icon: <Monitor size={28} /> },
                  { title: "Color Management", icon: <Palette size={28} /> },
                  { title: "Final Verification", icon: <ShieldCheck size={28} /> }
               ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100">
                     <div className="text-brand-blue mb-4 flex justify-center">{item.icon}</div>
                     <h4 className="font-bold text-slate-900">{item.title}</h4>
                  </div>
               ))}
            </div>
            <div className="mt-12 text-center bg-white p-6 rounded-xl border-l-4 border-brand-accent shadow-sm">
               <p className="text-slate-600 italic">
                  "Our ISO 9001 certified quality management system ensures consistent quality and continuous improvement in all our processes."
               </p>
            </div>
         </div>
      </Section>

      <Section>
        <SectionHeader title="Packaging Formats" subtitle="Versatile structures for every product need" />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Folding Cartons', desc: 'Versatile and cost-effective solutions for FMCG, Pharma, and Food.', icon: <Box size={32} /> },
            { title: 'Rigid Boxes', desc: 'Premium luxury boxes for electronics, gifts, and high-end cosmetics.', icon: <Layers size={32} /> },
            { title: 'Litho-Laminated Boxes', desc: 'Combining strength of corrugated with high print quality.', icon: <Package size={32} /> },
            { title: 'Labels & Tags', desc: 'High-quality adhesive labels and hanging tags.', icon: <Printer size={32} /> },
            { title: 'Specialty Packaging', desc: 'Custom solutions including shaped boxes and multi-component packaging.', icon: <Settings size={32} /> },
            { title: 'Promotional Packaging', desc: 'Limited edition and seasonal packaging to drive engagement.', icon: <Layers size={32} /> },
          ].map((item, idx) => (
             <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl hover:border-brand-blue/30 hover:shadow-xl transition-all group">
               <div className="text-gray-400 group-hover:text-brand-accent mb-6 transition-colors bg-brand-light w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-brand-accent/10">
                 {item.icon}
               </div>
               <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
               <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
      </Section>
    </div>
  );
};