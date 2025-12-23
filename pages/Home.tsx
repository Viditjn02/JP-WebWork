import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Printer, Package, Leaf, Award, CheckCircle, TrendingUp, Users, ShieldCheck, Box, Quote, Hexagon, Triangle, Circle, Square } from 'lucide-react';
import { Section, SectionHeader } from '../components/ui/Section';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-24 md:py-32 lg:py-36">
        {/* Background Image - UNCHANGED */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/printing-press-hero.png"
            alt="Modern Printing Facility"
            className="w-full h-full object-cover"
          />
          {/* Multi-stop gradient overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.60) 50%, rgba(15,23,42,0.92) 100%)'
          }}></div>
          {/* Optional subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'
          }}></div>
        </div>
        
        {/* Foreground Content - Left Aligned */}
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-[720px]">
            
            {/* Kicker Label */}
            <div className="mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-white/70">
                – OFFSET PRINTING • STRUCTURAL PACKAGING –
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-2 leading-tight" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
                Packaging that
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-black tracking-tight relative inline-block" style={{ 
                color: '#ff4d7d',
                textShadow: '0 2px 20px rgba(0,0,0,0.4)',
                letterSpacing: '-0.02em'
              }}>
                DEFINES QUALITY
                {/* Custom underline stroke */}
                <span 
                  className="absolute left-0 right-0 bottom-0 h-[0.22em] rounded-full opacity-80 -z-10 animate-underline-reveal"
                  style={{
                    transform: 'translateY(0.15em)',
                    background: 'linear-gradient(90deg, rgba(255,77,125,0.85) 0%, rgba(255,77,125,0.75) 100%)',
                    animationDelay: '0.6s',
                    animationFillMode: 'forwards',
                    transformOrigin: 'left'
                  }}
                ></span>
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-[65ch] animate-fade-in-up opacity-0" style={{ 
              animationDelay: '0.3s',
              animationFillMode: 'forwards',
              lineHeight: '1.6'
            }}>
              We engineer premium offset printing and structural packaging solutions that elevate brands and ensure product safety.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-col gap-3 mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}>
              {[
                '50+ Years Experience',
                'ISO Certified Facility',
                'High-Volume Offset Printing'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: 'rgba(134, 239, 172, 0.85)' }}>
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-base text-white/85 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <Link
                to="/capabilities"
                className="group px-8 py-3.5 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg"
                style={{
                  backgroundColor: '#ff4d7d',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(255,77,125,0.2)',
                  height: '52px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e6446f';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(255,77,125,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ff4d7d';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,77,125,0.2)';
                }}
              >
                Explore Capabilities
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-xl font-bold text-base transition-all flex items-center justify-center backdrop-blur-sm"
                style={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '1.5px solid rgba(255,255,255,0.6)',
                  height: '52px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#0F172A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Get a Quote
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="bg-brand-blue py-10 border-b border-brand-dark relative z-30 -mt-2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-white text-center">
            <div className="p-2 animate-fade-in-up">
              <div className="text-4xl md:text-5xl font-bold font-heading mb-1">50+</div>
              <div className="text-sm md:text-base text-gray-400 font-medium">Years of Excellence</div>
            </div>
            <div className="p-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold font-heading mb-1">500+</div>
              <div className="text-sm md:text-base text-gray-400 font-medium">Happy Clients</div>
            </div>
            <div className="p-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold font-heading mb-1">1M+</div>
              <div className="text-sm md:text-base text-gray-400 font-medium">Daily Production</div>
            </div>
            <div className="p-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold font-heading mb-1">24/7</div>
              <div className="text-sm md:text-base text-gray-400 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <Section pattern="dots">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-brand-accent/10 rounded-2xl transform -rotate-3 -z-10"></div>
            <div className="absolute -inset-4 bg-brand-blue/10 rounded-2xl transform rotate-2 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
              alt="Factory Floor" 
              className="rounded-xl shadow-2xl w-full h-[500px] object-cover hover:scale-[1.02] transition-transform duration-500"
            />
             {/* Floating Badge */}
             <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-xl max-w-[200px] animate-float hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 rounded-full text-green-600">
                    <Leaf size={24} />
                  </div>
                  <span className="font-bold text-slate-900">Eco-Friendly</span>
                </div>
                <p className="text-xs text-slate-500">100% Sustainable material options available.</p>
             </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h4 className="text-brand-accent font-bold uppercase tracking-wider mb-2">Who We Are</h4>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-brand-blue leading-tight">
              Your Partner in <br/>Premium Packaging
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              At JainPackwell, we don't just print boxes; we engineer brand experiences. With over two decades of expertise, we specialize in high-quality folding cartons, rigid boxes, and labels for diverse industries.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { title: 'Offset & UV Printing', desc: 'Heidelberg Precision' },
                { title: 'Sustainable Materials', desc: 'FSC Certified' },
                { title: 'Structural Design', desc: 'CAD Prototyping' },
                { title: 'Quality Control', desc: 'Zero-Defect Policy' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 p-1 rounded-full bg-brand-blue/10 text-brand-blue">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/about" className="px-8 py-3 bg-brand-dark text-white font-semibold rounded-lg hover:bg-brand-blue transition-all inline-flex items-center gap-2">
              Learn Our Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section light pattern="grid" className="text-center">
        <SectionHeader 
          title="Core Capabilities" 
          subtitle="Comprehensive printing and packaging services tailored to your industry needs."
          highlight="Excellence"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Printer size={32} />, title: "Offset Printing", desc: "High-precision printing with vibrant color reproduction." },
            { icon: <Box size={32} />, title: "Packaging Design", desc: "Structural engineering and prototype development." },
            { icon: <Leaf size={32} />, title: "Sustainable Options", desc: "Eco-friendly materials and vegetable-based inks." },
            { icon: <Award size={32} />, title: "Special Effects", desc: "Foiling, embossing, and UV coatings for premium finish." },
          ].map((service, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-blue/20 transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light rounded-bl-full -mr-4 -mt-4 transition-colors group-hover:bg-brand-blue/5"></div>
              
              <div className="inline-flex p-5 bg-brand-light text-brand-blue rounded-xl mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 relative z-10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading text-slate-900">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section className="bg-white relative overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-slate-900">Industries We Serve</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>
        
        {/* Auto-scrolling Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 md:gap-6 animate-scroll hover:pause">
            {/* Duplicate items twice for seamless loop */}
            {[...Array(2)].map((_, duplicateIdx) => (
              <React.Fragment key={duplicateIdx}>
                {[
                  { name: 'Textiles', img: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=2070&auto=format&fit=crop' },
                  { name: 'Food & Beverage', img: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=2070&auto=format&fit=crop' },
                  { name: 'Pharmaceuticals', img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2069&auto=format&fit=crop' },
                  { name: 'Cosmetics', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2070&auto=format&fit=crop' },
                  { name: 'Electronics', img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2101&auto=format&fit=crop' },
                  { name: 'Consumer Goods', img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop' },
                  { name: 'Retail', img: 'https://plus.unsplash.com/premium_photo-1683133498897-371667b71ac6?q=80&w=2070&auto=format&fit=crop' },
                  { name: 'Healthcare', img: 'https://plus.unsplash.com/premium_photo-1752073513244-9f4d6b1b8596?q=80&w=2070&auto=format&fit=crop' },
                  { name: 'Personal Care', img: 'https://plus.unsplash.com/premium_photo-1661578344207-c25ecf918f1e?q=80&w=2070&auto=format&fit=crop' }
                ].map((industry, idx) => (
                  <div key={`${duplicateIdx}-${idx}`} className="group relative overflow-hidden rounded-2xl w-[240px] h-[320px] cursor-pointer shadow-lg flex-shrink-0 hover:scale-105 transition-transform duration-300">
                    <img src={industry.img} alt={industry.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <h3 className="text-white font-bold text-lg md:text-xl">{industry.name}</h3>
                      <div className="w-0 group-hover:w-full h-0.5 bg-brand-accent mx-auto mt-2 transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Section>
      
      {/* Featured Projects */}
      <Section pattern="dots">
        <SectionHeader title="Featured Projects" subtitle="Explore our showcase of innovative packaging solutions" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Premium Textile Packaging Box",
                category: "Rigid Boxes",
                image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=2024&auto=format&fit=crop",
              },
              {
                title: "Organic Food Packaging",
                category: "Folding Cartons",
                image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Cosmetic Gift Set",
                category: "Custom Packaging",
                image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2070&auto=format&fit=crop",
              },
            ].map((project, index) => (
              <Link
                key={index}
                to="/portfolio"
                className="group overflow-hidden rounded-xl shadow-sm transition-all hover:shadow-xl border border-gray-100 bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-xs font-bold uppercase tracking-wider mb-1 text-brand-accent">{project.category}</p>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                  </div>
                </div>
                <div className="p-4 group-hover:bg-gray-50 transition-colors">
                  <h3 className="font-bold text-slate-900">{project.title}</h3>
                  <p className="text-sm text-slate-500">{project.category}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-white rounded-lg font-bold hover:bg-brand-dark transition-colors">
               View All Projects <ArrowRight size={18} />
            </Link>
          </div>
      </Section>

      {/* Testimonial */}
      <Section light className="bg-brand-light">
         <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-lg relative border border-gray-100">
             <Quote className="absolute top-8 left-8 text-brand-blue/10 transform -scale-x-100" size={80} />
             <div className="relative z-10 text-center">
                <p className="text-xl md:text-2xl text-slate-600 italic leading-relaxed mb-8">
                   "JainPackwell has consistently delivered exceptional packaging solutions for our premium product line. Their attention to detail, innovative approach, and commitment to quality have made them our trusted packaging partner."
                </p>
                <div className="flex items-center justify-center gap-4">
                   <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
                      <img src="/assets/JLO.jpg" alt="Jawahar Lal Oswal" className="w-full h-full object-cover" />
                   </div>
                   <div className="text-left">
                      <h4 className="font-bold text-slate-900">Jawahar Lal Oswal</h4>
                      <p className="text-sm text-brand-blue font-medium">Founding Chairman & Managing Director</p>
                      <p className="text-sm text-slate-600">Monte Carlo Fashions Ltd.</p>
                   </div>
                </div>
             </div>
         </div>
         {/* Trusted By Logos */}
         <div className="mt-16 text-center">
             <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-8">Trusted by Industry Leaders</p>
             <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
                {[
                  { src: '/assets/Duke.jpeg', alt: 'Duke', maxHeight: 'h-16' },
                  { src: '/assets/Kidley.png', alt: 'Kidley Gold', maxHeight: 'h-14' },
                  { src: '/assets/MAX.png', alt: 'MAX', maxHeight: 'h-12' },
                  { src: '/assets/MC.png', alt: 'MC', maxHeight: 'h-14' },
                  { src: '/assets/NEVA.jpg', alt: 'NEVA', maxHeight: 'h-14' },
                  { src: '/assets/Vardhman.png', alt: 'Vardhman', maxHeight: 'h-16' }
                ].map((logo, idx) => (
                  <div 
                    key={idx} 
                    className="group relative transition-all duration-300 hover:scale-110"
                  >
                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 bg-brand-blue/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Logo container */}
                    <div className="relative bg-white px-6 py-4 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-brand-blue/20">
                      <img 
                        src={logo.src} 
                        alt={logo.alt}
                        className={`${logo.maxHeight} w-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500`}
                      />
                    </div>
                  </div>
                ))}
             </div>
         </div>
      </Section>

      {/* CTA Footer on Home */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue">
            <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
             {/* Abstract Shapes */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">Ready to elevate your brand?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
            Let's discuss how our packaging solutions can add value to your products and streamline your supply chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
              to="/contact"
              className="px-10 py-4 bg-white text-brand-blue font-bold rounded-lg shadow-xl hover:bg-gray-100 transition-colors transform hover:-translate-y-1"
            >
              Start a Project
            </Link>
            <Link
              to="/portfolio"
              className="px-10 py-4 border-2 border-white/30 hover:border-white text-white font-bold rounded-lg transition-colors backdrop-blur-sm"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};