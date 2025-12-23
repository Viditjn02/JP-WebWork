import React from 'react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Leaf, Recycle, Sun, Droplets, Globe, Heart, Award, Wind, Factory, Sprout, CheckCircle, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Sustainability: React.FC = () => {
  return (
    <div className="pt-0">
      <div className="bg-emerald-900 text-white py-24 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/80 to-transparent"></div>
        
        <div className="container mx-auto text-center relative z-10">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-800/50 border border-emerald-700 text-emerald-200 mb-6 backdrop-blur-sm animate-fade-in-up">
              <Leaf size={16} />
              <span className="text-sm font-semibold">Commitment to Nature</span>
           </div>
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Sustainability</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             Our commitment to environmental responsibility and sustainable practices.
          </p>
        </div>
      </div>

      {/* Vision Intro */}
      <Section className="text-center">
         <div className="max-w-3xl mx-auto">
            <SectionHeader title="Our Sustainability Vision" subtitle="Driving positive environmental impact through innovative packaging solutions" />
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              At JainPackwell, sustainability is not just a buzzword—it's a core value that guides our business decisions and operations. We are committed to reducing our environmental footprint while helping our clients achieve their sustainability goals through eco-friendly packaging solutions. Our approach encompasses responsible sourcing, efficient production, waste reduction, and continuous innovation in sustainable packaging design.
            </p>
         </div>
      </Section>

      <Section light pattern="grid">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader 
              title="Eco-Friendly Materials" 
              subtitle="Sustainable sourcing for a greener future"
              align="left"
            />
            <p className="text-slate-600 mb-8">
               We carefully select materials that minimize environmental impact without compromising on quality or performance.
            </p>
            
            <div className="space-y-6">
               {[
                 {
                   title: "FSC-Certified Paper and Board",
                   desc: "Materials from responsibly managed forests that provide environmental, social, and economic benefits."
                 },
                 {
                   title: "Recycled Content",
                   desc: "Incorporating post-consumer recycled content to reduce demand for virgin materials and divert waste."
                 },
                 {
                   title: "Biodegradable Options",
                   desc: "Biodegradable and compostable materials that break down naturally at the end of their life cycle."
                 },
                 {
                   title: "Water-Based Inks & Coatings",
                   desc: "Utilizing inks with fewer volatile organic compounds (VOCs) to reduce air pollution and health risks."
                 }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                    <div className="mt-1 bg-emerald-100 text-emerald-600 p-2 rounded-full h-fit shrink-0">
                       <Leaf size={20} />
                    </div>
                    <div>
                       <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                       <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-8 bg-emerald-50 p-6 rounded-xl border border-emerald-100">
               <p className="text-emerald-800 italic font-medium">
                 "By choosing FSC-certified materials, we ensure that for every tree used in our packaging, another is planted, supporting the long-term health of our forests."
               </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1000&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Recycled Paper" />
             <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" alt="Green Forest" />
             <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1000&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-64 object-cover" alt="Water based ink" />
             <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1000&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" alt="Sustainable" />
          </div>
        </div>
      </Section>

      {/* Sustainable Operations & Impact */}
      <Section>
        <SectionHeader 
           title="Sustainable Operations" 
           subtitle="Minimizing our environmental footprint across all operations"
        />
        
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Factory size={32} />, title: "Energy Efficiency", desc: "Energy-efficient equipment reducing power consumption." },
            { icon: <Recycle size={32} />, title: "Waste Reduction", desc: "Systems minimizing landfill waste through recycling." },
            { icon: <Wind size={32} />, title: "Renewable Energy", desc: "Partial powering of operations with renewable sources." },
            { icon: <Sprout size={32} />, title: "Water Conservation", desc: "Recycling systems significantly reducing water usage." },
          ].map((op, idx) => (
             <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                   {op.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{op.title}</h3>
                <p className="text-sm text-slate-500">{op.desc}</p>
             </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-emerald-900 rounded-3xl overflow-hidden relative text-white">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2000&auto=format&fit=crop')] bg-cover opacity-10"></div>
           <div className="relative z-10 p-12 md:p-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    <h3 className="text-3xl font-bold font-heading mb-4">Our Environmental Impact</h3>
                    <p className="text-emerald-100 mb-8 opacity-90">
                       Through our sustainable operations initiatives, we have achieved significant reductions in our environmental impact since 2020.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                       <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                          <div className="text-4xl font-bold text-emerald-400 mb-2">30%</div>
                          <p className="text-sm">Energy Consumption Reduction</p>
                       </div>
                       <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                          <div className="text-4xl font-bold text-emerald-400 mb-2">85%</div>
                          <p className="text-sm">Waste Recycled / Repurposed</p>
                       </div>
                       <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                          <div className="text-4xl font-bold text-emerald-400 mb-2">25%</div>
                          <p className="text-sm">Decrease in Water Usage</p>
                       </div>
                       <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                          <div className="text-4xl font-bold text-emerald-400 mb-2">20%</div>
                          <p className="text-sm">Energy from Renewable Sources</p>
                       </div>
                    </div>
                 </div>
                 <div className="hidden md:block">
                    {/* Abstract circular graphic illustration */}
                    <div className="w-full aspect-square relative flex items-center justify-center">
                       <div className="w-64 h-64 border-[20px] border-emerald-500/30 rounded-full animate-pulse-slow"></div>
                       <div className="absolute w-48 h-48 border-[15px] border-emerald-400/50 rounded-full"></div>
                       <div className="absolute w-32 h-32 bg-white text-emerald-900 rounded-full flex items-center justify-center font-bold text-center p-4 shadow-2xl">
                          Sustainable Future
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </Section>

      {/* Product Innovations */}
      <Section light>
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1 relative">
              <img src="/assets/sustainable-lifecycle.png" className="rounded-2xl shadow-xl w-full object-cover" alt="Sustainable Product Design" />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-500 hidden md:block">
                 <p className="font-bold text-slate-800">Lifecycle Thinking</p>
                 <p className="text-sm text-slate-500">From design to disposal</p>
              </div>
           </div>
           <div className="order-1 md:order-2">
              <SectionHeader 
                 title="Sustainable Product Innovations" 
                 subtitle="Designing packaging with the entire lifecycle in mind"
                 align="left"
              />
              <p className="text-slate-600 mb-8">
                 We collaborate with clients to develop packaging solutions that not only meet branding needs but also minimize environmental impact.
              </p>
              <div className="space-y-4">
                 {[
                   { title: "Material Reduction", desc: "Optimizing designs to use less material without compromising protection." },
                   { title: "Mono-Material Solutions", desc: "Creating packaging from single materials to simplify recycling." },
                   { title: "Plastic Alternatives", desc: "Developing paper-based alternatives to plastic components." },
                   { title: "End-of-Life Considerations", desc: "Designing for easy recyclability, biodegradability, or reuse." }
                 ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-emerald-200 transition-colors">
                       <div className="bg-emerald-100 text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 shrink-0">
                          <CheckCircle size={14} />
                       </div>
                       <div>
                          <h4 className="font-bold text-slate-900">{item.title}</h4>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
              <div className="mt-8">
                 <Link to="/contact" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-emerald-700 transition-colors">
                    Discuss Sustainable Options <ArrowRight size={18} />
                 </Link>
              </div>
           </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section>
        <SectionHeader title="Certifications & Standards" subtitle="Backed by recognized global standards" />
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { name: "FSC Certification", desc: "Ensures products come from responsibly managed forests providing environmental, social, and economic benefits.", icon: <Leaf size={40} /> },
             { name: "ISO 14001", desc: "Certified environmental management system demonstrating commitment to minimizing impact.", icon: <Factory size={40} /> },
             { name: "Sustainable Packaging Coalition", desc: "Collaborating with industry partners to advance sustainable packaging solutions and best practices.", icon: <Recycle size={40} /> }
           ].map((cert, idx) => (
             <div key={idx} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl">
                <div className="bg-emerald-100 text-emerald-600 p-4 rounded-full mb-6">
                   {cert.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{cert.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cert.desc}</p>
             </div>
           ))}
        </div>
        <div className="text-center mt-10">
           <Link to="/certifications" className="text-emerald-600 font-bold hover:underline underline-offset-4">View All Certifications</Link>
        </div>
      </Section>

      {/* CSR & Community */}
      <Section light className="relative overflow-hidden">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
               <SectionHeader 
                  title="CSR & Community Initiatives" 
                  subtitle="Making a positive impact beyond our business operations"
                  align="left"
               />
               <p className="text-slate-600 mb-8">
                  We believe in giving back. Our corporate social responsibility initiatives benefit our communities and the environment through active engagement and support.
               </p>
               <div className="space-y-6">
                  {[
                    { title: "Tree Planting Program", desc: "Over 5,000 trees planted in the last five years to offset carbon emissions." },
                    { title: "Packaging Recycling Education", desc: "Workshops in schools promoting proper recycling practices." },
                    { title: "Community Clean-Up Drives", desc: "Regular activities to remove waste from local parks and public spaces." },
                    { title: "Skill Development Programs", desc: "Training for underprivileged youth in printing and packaging skills." }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg h-fit">
                           <Users size={20} />
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900">{item.title}</h4>
                           <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="grid gap-4">
               <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop" alt="Tree Planting" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
               <div className="grid grid-cols-2 gap-4">
                  <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1000&auto=format&fit=crop" alt="Education" className="rounded-2xl shadow-lg w-full h-40 object-cover" />
                  <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1000&auto=format&fit=crop" alt="Community" className="rounded-2xl shadow-lg w-full h-40 object-cover" />
               </div>
            </div>
         </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-emerald-800 py-16 text-white text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Partner with us for sustainable packaging</h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
               Discover how our eco-friendly packaging solutions can help your brand meet sustainability goals while enhancing product appeal.
            </p>
            <Link to="/contact" className="inline-block bg-white text-emerald-800 font-bold px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors shadow-lg">
               Contact Our Sustainability Team
            </Link>
         </div>
      </section>
    </div>
  );
};