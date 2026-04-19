import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../shared/AnimatedSection';
import { products, categories } from '../../data/products';

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>('whole');
  const filtered = products.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-[#FAF8F3] py-[120px] md:py-20" id="product-showcase">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <AnimatedSection animation="fadeUp">
          <div className="text-center max-w-[640px] mx-auto mb-12">
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3.5rem)] font-semibold mb-4">Our Products</h2>
            <p className="text-[#6B6B6B] text-[17px]">From heritage whole chickens to farm-fresh eggs — every product reflects our commitment to quality, transparency, and taste.</p>
          </div>
        </AnimatedSection>

        {/* Category Tabs — Sweetgreen style */}
        <AnimatedSection animation="fadeUp" delay={0.1}>
          <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-['Playfair_Display'] text-[1.75rem] font-medium px-5 py-2 rounded-full whitespace-nowrap cursor-pointer transition-colors duration-300 relative
                  ${activeCategory === cat.id
                    ? 'text-[#2C2C2C] after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-[#2C2C2C]'
                    : 'text-[#E5E0D5] hover:text-[#6B6B6B]'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product, index) => (
            <AnimatedSection key={product.id} animation="fadeUp" delay={index * 0.1}>
              <div id={`product-${product.id}`} className="bg-white rounded-2xl overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                <div className="relative aspect-[4/3] bg-[#F0EDE5] overflow-hidden group">
                  <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
                  <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 justify-end">
                    {product.badges.map((badge) => (
                      <span key={badge} className="px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.05em] bg-white/92 backdrop-blur-sm text-[#1A3C2A] rounded-full">{badge}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#2C2C2C] mb-1">{product.name}</h3>
                  {product.weight && <span className="block font-sans text-[13px] text-[#8BA888] mb-2">{product.weight}</span>}
                  <p className="text-[15px] leading-[1.6] text-[#6B6B6B]">{product.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeUp" delay={0.3}>
          <div className="text-center mt-12">
            <Link to="/products" id="view-all-products-btn"
              className="inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-[0.08em] rounded-full px-9 py-3.5 text-[13px] bg-transparent text-[#1A3C2A] border-2 border-[#1A3C2A] hover:bg-[#1A3C2A] hover:text-white hover:-translate-y-0.5 transition-all duration-300 no-underline">
              View All Products →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
