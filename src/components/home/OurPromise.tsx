import AnimatedSection from '../shared/AnimatedSection';
import farmImg from '../../assets/images/farm-landscape.png';

export default function OurPromise() {
  return (
    <section className="bg-white py-[120px] md:py-20" id="our-promise-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Side */}
          <AnimatedSection animation="slideRight">
            <div className="rounded-2xl overflow-hidden min-h-[420px] lg:min-h-[500px] group">
              <img src={farmImg} alt="Ken Ethan Poultry free-range farm" loading="lazy"
                className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" />
            </div>
          </AnimatedSection>

          {/* Text Side */}
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-[#8BA888] mb-4">Our Promise</span>
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.15] mb-6">
              Raised with care.<br />
              <em className="italic text-[#1A3C2A]">Delivered with pride.</em>
            </h2>
            <p className="text-[#6B6B6B] text-[17px] leading-[1.75] mb-4">
              Every chicken at Ken Ethan Poultry is raised on open pastures, fed a carefully balanced diet of natural grains, and given the freedom to roam. We never use antibiotics, growth hormones, or artificial additives.
            </p>
            <p className="text-[#6B6B6B] text-[17px] leading-[1.75] mb-8">
              From our family-owned hatcheries to your table, we maintain a fully transparent supply chain — so you always know exactly where your food comes from and how it was raised.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { emoji: '🌱', title: '100% Natural Feed', sub: 'No GMOs, no artificial additives' },
                { emoji: '🐔', title: 'Free-Range Raised', sub: 'Open pastures, natural sunlight' },
                { emoji: '❄️', title: 'Cold Chain Delivery', sub: 'Farm-fresh to your door' },
              ].map(({ emoji, title, sub }) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{emoji}</span>
                  <div>
                    <strong className="block font-sans text-[15px] font-semibold text-[#2C2C2C] mb-0.5">{title}</strong>
                    <span className="font-sans text-[14px] text-[#6B6B6B]">{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
