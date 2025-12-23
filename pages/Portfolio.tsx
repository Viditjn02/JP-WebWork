import React, { useState } from 'react';
import { Section, SectionHeader } from '../components/ui/Section';
import { Category, PortfolioItem } from '../types';
import { X, Award, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';

// Enhanced Mock Data based on source content
const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { 
    id: '1', 
    title: 'Premium Textile Packaging Box', 
    category: Category.RIGID_BOXES, 
    description: 'Luxury rigid box with gold foil stamping and embossing for a premium textile brand. Features a magnetic closure and custom insert to securely hold clothing items with elegant presentation.', 
    image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=2024&auto=format&fit=crop',
    industry: "Textile",
    features: ["Gold foil stamping", "Embossing", "Magnetic closure", "Custom insert"],
    award: "Best Luxury Packaging - PrintWeek Awards 2022"
  },
  { 
    id: '2', 
    title: 'Organic Food Packaging', 
    category: Category.FOLDING_CARTONS, 
    description: 'Eco-friendly folding carton for an organic food brand. Made from 100% recycled paperboard with water-based inks and a natural, minimalist design that emphasizes sustainability.', 
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop',
    industry: "Food & Beverage",
    features: ["100% recycled materials", "Water-based inks", "Window patch", "Easy-open design"]
  },
  { 
    id: '3', 
    title: 'Cosmetic Gift Set', 
    category: Category.SPECIALTY, 
    description: 'Custom-designed gift set packaging for a premium cosmetics brand. Features a rigid box with drawer mechanism, soft-touch lamination, and intricate pattern embossing.', 
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2070&auto=format&fit=crop',
    industry: "Cosmetics",
    features: ["Drawer mechanism", "Soft-touch lamination", "Pattern embossing", "Custom foam insert"]
  },
  { 
    id: '4', 
    title: 'Pharmaceutical Cartons', 
    category: Category.FOLDING_CARTONS, 
    description: 'High-quality folding cartons for pharmaceutical products with security features. Includes tamper-evident seals, UV spot coating, and precise color reproduction for brand consistency.', 
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop',
    industry: "Pharmaceuticals",
    features: ["Tamper-evident seals", "UV spot coating", "Braille embossing", "Anti-counterfeit features"]
  },
  { 
    id: '5', 
    title: 'Premium Chocolate Packaging', 
    category: Category.RIGID_BOXES, 
    description: 'Elegant rigid box for premium chocolates featuring a book-style opening, ribbon pull, and gold foil accents. The design combines luxury aesthetics with practical functionality.', 
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=2070&auto=format&fit=crop',
    industry: "Food & Beverage",
    features: ["Book-style opening", "Ribbon pull", "Gold foil accents", "Magnetic closure"],
    award: "Packaging Design Excellence - Food Category 2023"
  },
  { 
    id: '6', 
    title: 'Electronics Product Labels', 
    category: Category.LABELS, 
    description: 'Durable, high-quality labels for electronics products featuring QR codes, sequential numbering, and scratch-off security features. Designed to withstand various environmental conditions.', 
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2070&auto=format&fit=crop',
    industry: "Electronics",
    features: ["QR codes", "Sequential numbering", "Scratch-off security", "Temperature resistant"]
  },
  { 
    id: '7', 
    title: 'Holiday Gift Box Collection', 
    category: Category.PROMOTIONAL, 
    description: 'Seasonal gift box collection featuring festive designs, special finishes, and versatile sizes. Created for a retail brand\'s holiday promotion campaign.', 
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=2070&auto=format&fit=crop',
    industry: "Consumer Goods",
    features: ["Seasonal design", "Holographic foil", "Multiple sizes", "Ribbon handle"]
  },
  { 
    id: '8', 
    title: 'Sustainable Beverage Carrier', 
    category: Category.SPECIALTY, 
    description: 'Innovative, plastic-free beverage carrier made from 100% recycled paperboard. Features a comfortable handle, secure bottle holders, and fully recyclable construction.', 
    image: 'https://images.unsplash.com/photo-1615332579037-3c44b3660b53?q=80&w=2070&auto=format&fit=crop',
    industry: "Food & Beverage",
    features: ["Plastic-free design", "Ergonomic handle", "Secure bottle holders", "100% recyclable"],
    award: "Sustainable Packaging Innovation Award 2023"
  },
  { 
    id: '9', 
    title: 'Premium Skincare Line', 
    category: Category.FOLDING_CARTONS, 
    description: 'Sophisticated folding cartons for a premium skincare line featuring soft-touch coating, spot UV, and minimalist design that communicates luxury and purity.', 
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1974&auto=format&fit=crop',
    industry: "Cosmetics",
    features: ["Soft-touch coating", "Spot UV", "Minimalist design", "Custom inserts"]
  },
];

const CASE_STUDIES = [
  {
    title: "Sustainable Packaging Redesign",
    client: "Organic Foods Co.",
    challenge: "Replace plastic packaging with eco-friendly alternatives while maintaining product freshness and shelf appeal.",
    solution: "Developed a custom paperboard carton with plant-based coating and window patch, reducing plastic use by 95%.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Luxury Brand Experience",
    client: "Premium Textile Co.",
    challenge: "Create packaging that elevates the unboxing experience for a limited edition premium clothing collection.",
    solution: "Designed a multi-component rigid box with custom inserts, hidden compartments, and premium finishes.",
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "E-commerce Optimization",
    client: "Beauty Direct",
    challenge: "Develop packaging optimized for e-commerce that reduces shipping costs while ensuring product protection.",
    solution: "Created a right-sized folding carton with innovative internal structure that eliminated the need for void fill.",
    image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=2070&auto=format&fit=crop"
  }
];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-0">
      <div className="bg-brand-dark text-white py-24 px-4 relative overflow-hidden">
         {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/80 to-brand-dark"></div>

        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 animate-fade-in-up">Our Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Showcasing our finest packaging solutions across industries.
          </p>
        </div>
      </div>

      <Section pattern="dots">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
           <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === 'All'
                  ? 'bg-brand-blue text-white shadow-md scale-105'
                  : 'bg-white text-slate-600 border border-gray-200 hover:border-brand-blue hover:text-brand-blue'
              }`}
            >
              All
            </button>
          {Object.values(Category).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-brand-blue text-white shadow-md scale-105'
                  : 'bg-white text-slate-600 border border-gray-200 hover:border-brand-blue hover:text-brand-blue'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {item.award && (
                  <div className="absolute top-4 left-4 bg-yellow-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                    <Award size={12} />
                    Award Winner
                  </div>
                )}
                
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-1 block">{item.category}</span>
                  <h3 className="text-xl font-bold font-heading text-white">{item.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-500 text-sm line-clamp-2 mb-4">{item.description}</p>
                <div className="flex items-center text-sm text-brand-blue font-bold group-hover:gap-2 transition-all">
                    View Details <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              <p>No items found in this category.</p>
            </div>
        )}
      </Section>

      {/* Case Studies Section */}
      <Section light>
        <SectionHeader 
          title="Featured Case Studies" 
          subtitle="In-depth look at our packaging solutions and the challenges they solved" 
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
             <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                <div className="h-48 overflow-hidden relative">
                   <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8">
                   <h3 className="text-xl font-bold font-heading mb-2 text-slate-900">{study.title}</h3>
                   <p className="text-sm font-semibold text-brand-accent mb-4">Client: {study.client}</p>
                   
                   <div className="mb-4">
                     <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Challenge</h4>
                     <p className="text-sm text-slate-600 leading-relaxed">{study.challenge}</p>
                   </div>
                   
                   <div>
                     <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Solution</h4>
                     <p className="text-sm text-slate-600 leading-relaxed">{study.solution}</p>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-brand-blue py-20 px-4 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready to create your own success story?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 font-light">
             Contact us to discuss your packaging needs and discover how we can bring your vision to life.
          </p>
          <a href="/#/contact" className="inline-block px-10 py-4 bg-white text-brand-blue font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
             Start Your Project
          </a>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row overflow-hidden">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors z-20 text-slate-800"
            >
              <X size={24} />
            </button>

            {/* Image Side */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-100">
               <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[60vh] md:max-h-[90vh]">
               <div className="mb-6">
                 <span className="inline-block py-1 px-3 rounded-full bg-brand-light text-brand-blue text-xs font-bold uppercase tracking-wider mb-2">
                    {selectedItem.category}
                 </span>
                 {selectedItem.industry && (
                    <span className="inline-block ml-2 py-1 px-3 rounded-full bg-gray-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-2">
                        {selectedItem.industry}
                    </span>
                 )}
                 <h2 className="text-3xl font-bold font-heading text-slate-900">{selectedItem.title}</h2>
               </div>

               <div className="prose prose-slate mb-8">
                 <h3 className="text-lg font-bold mb-2">Description</h3>
                 <p className="text-slate-600 leading-relaxed">{selectedItem.description}</p>
               </div>

               {selectedItem.features && selectedItem.features.length > 0 && (
                 <div className="mb-8">
                    <h3 className="text-lg font-bold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedItem.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                           <CheckCircle size={18} className="text-brand-accent mt-0.5 shrink-0" />
                           <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                 </div>
               )}

               {selectedItem.award && (
                 <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
                    <Award className="text-yellow-600 mt-1 shrink-0" size={20} />
                    <div>
                       <h4 className="font-bold text-yellow-800 text-sm">Award Winner</h4>
                       <p className="text-yellow-700 text-sm">{selectedItem.award}</p>
                    </div>
                 </div>
               )}

               <div className="pt-6 border-t border-gray-100">
                 <a href="/#/contact" className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all">
                    Inquire About Similar Projects <ArrowRight size={18} />
                 </a>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};