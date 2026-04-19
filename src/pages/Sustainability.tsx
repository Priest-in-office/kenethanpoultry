import { Leaf, Heart, Users, Droplets, Zap, TreePine } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';
import sustainImg from '../assets/images/sustainability.png';

const pillars = [
  { icon: <TreePine size={28} />, title: 'Environmental Stewardship', desc: 'Carbon-neutral farming operations by 2030. We use renewable energy, regenerative agriculture, and zero-waste processing.' },
  { icon: <Heart size={28} />, title: 'Animal Welfare', desc: 'Free-range living, enrichment programs, and the most humane processing methods. Every bird deserves dignity.' },
  { icon: <Users size={28} />, title: 'Community Impact', desc: 'Over 5,000 jobs created, farmer training programs, and scholarship funds for agricultural education.' },
];

const metrics = [
  { icon: <Droplets size={24} />, value: '40%', label: 'Water Reduction', desc: 'Vs. industry average' },
  { icon: <Zap size={24} />, value: '65%', label: 'Renewable Energy', desc: 'Across all operations' },
  { icon: <Leaf size={24} />, value: '0', label: 'Waste to Landfill', desc: 'Zero-waste processing' },
  { icon: <TreePine size={24} />, value: '10K+', label: 'Trees Planted', desc: 'In reforestation program' },
];

export default function Sustainability() {
  return (
    <main id="sustainability-page">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-20">
        <div className="absolute inset-0">
          <img src={sustainImg} alt="Sustainable farming" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-[#C8E64E] mb-4">Sustainability</span>
            <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.02em] text-white mb-4">
              Growing Responsibly.<br /><em className="italic text-[#C8E64E]">Farming for Tomorrow.</em>
            </h1>
            <p className="text-white/80 text-[18px] max-w-[560px]">We believe great food and environmental responsibility aren't competing goals — they're inseparable.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-20" id="sustain-pillars">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3.5rem)] font-semibold text-center mb-12">Three Pillars of Sustainability</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.title} animation="fadeUp" delay={i * 0.15}>
                <div className="text-center p-12 bg-white rounded-2xl border border-[#E5E0D5] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#FAF8F3] to-[#A8C4A5]/30 text-[#1A3C2A] mx-auto mb-6">{p.icon}</div>
                  <h3 className="font-['Playfair_Display'] text-xl mb-3">{p.title}</h3>
                  <p className="text-[15px] leading-[1.6] text-[#6B6B6B]">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-[#1A3C2A] py-20" id="sustain-metrics">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3.5rem)] font-semibold text-white mb-3">Our Impact in Numbers</h2>
              <p className="text-white/60 text-[17px]">Measurable progress toward a healthier planet.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <AnimatedSection key={m.label} animation="fadeUp" delay={i * 0.1}>
                <div className="bg-white/8 border border-white/10 rounded-2xl p-9 text-center hover:bg-white/12 transition-colors">
                  <div className="text-[#C8E64E] flex justify-center mb-4">{m.icon}</div>
                  <div className="font-['Playfair_Display'] text-[2.5rem] font-bold text-white leading-none mb-2">{m.value}</div>
                  <div className="font-sans text-[14px] font-semibold uppercase tracking-[0.08em] text-[#C8E64E] mb-1">{m.label}</div>
                  <div className="font-sans text-[13px] text-white/50">{m.desc}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pledge */}
      <section className="bg-[#F0EDE5] py-20" id="sustain-pledge">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <div className="max-w-[700px] mx-auto text-center">
              <Leaf size={48} className="text-[#8BA888] mx-auto mb-6" />
              <h2 className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3.5rem)] font-semibold mb-5">Our 2030 Pledge</h2>
              <p className="text-[#6B6B6B] text-[18px] leading-[1.8]">
                By 2030, Ken Ethan Poultry commits to achieving carbon-neutral operations, 100% renewable energy usage, zero waste to landfill, and planting 1 million trees across our farming communities.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
