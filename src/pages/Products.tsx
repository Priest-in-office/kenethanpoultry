import { useState } from 'react';
import AnimatedSection from '../components/shared/AnimatedSection';
import { products, categories } from '../data/products';

const badgeClasses = 'px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.05em] bg-white/92 backdrop-blur-sm text-[#1A3C2A] rounded-full';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('whole');
  const filtered = products.filter((p) => p.category === activeCategory);

  return (
    <main id="products-page">
      {/* Hero */}
      <section className="bg-[#F0EDE5] pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-[#8BA888] mb-4">Our Products</span>
            <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.02em] mb-5">
              Farm-Raised.<br /><em className="italic text-[#1A3C2A]">Naturally Superior.</em>
            </h1>
            <p className="text-[#6B6B6B] text-[18px] leading-[1.7] max-w-[600px]">
              From heritage whole chickens to omega-3 enriched eggs — every product is raised with care, processed with precision, and delivered with pride.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-4 border-b border-[#E5E0D5]">
            {categories.map((cat) => (
              <button key={cat.id} id={`products-tab-${cat.id}`} onClick={() => setActiveCategory(cat.id)}
                className={`font-sans text-[14px] font-medium uppercase tracking-[0.08em] px-6 py-3 rounded-full whitespace-nowrap cursor-pointer transition-all border ${
                  activeCategory === cat.id
                    ? 'bg-[#1A3C2A] text-white border-[#1A3C2A]'
                    : 'text-[#6B6B6B] border-transparent hover:text-[#2C2C2C] hover:border-[#E5E0D5]'}`}>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product, i) => (
              <AnimatedSection key={product.id} animation="fadeUp" delay={i * 0.08}>
                <div id={`product-full-${product.id}`} className="bg-white rounded-2xl overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                  <div className="relative aspect-[4/3] bg-[#F0EDE5] overflow-hidden group">
                    <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105" />
                    <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 justify-end">
                      {product.badges.map((b) => <span key={b} className={badgeClasses}>{b}</span>)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#2C2C2C] mb-1">{product.name}</h3>
                    {product.weight && <span className="block text-[13px] text-[#8BA888] mb-2">{product.weight}</span>}
                    <p className="text-[15px] leading-[1.6] text-[#6B6B6B]">{product.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Wholesale CTA */}
          <AnimatedSection animation="fadeUp" delay={0.3}>
            <div className="mt-20 bg-[#1A3C2A] rounded-3xl p-16 text-center">
              <h3 className="font-['Playfair_Display'] text-[clamp(1.5rem,3vw,2rem)] text-white mb-4">Looking for Wholesale or Bulk Orders?</h3>
              <p className="text-white/70 max-w-[520px] mx-auto mb-8 text-[15px]">
                We supply restaurants, retailers, and food service companies across 50+ countries. Get in touch for custom pricing and supply chain solutions.
              </p>
              <a href="/contact" id="wholesale-contact-btn"
                className="inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-[0.08em] rounded-full px-12 py-[18px] text-[14px] bg-[#C8E64E] text-[#1A3C2A] hover:bg-[#B8D63E] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,230,78,0.3)] transition-all no-underline">
                Request a Quote →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
