import { Egg, Sun, Wheat, Truck, ShieldCheck, UtensilsCrossed, Play } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';
import farmImg from '../assets/images/farm-landscape.png';
import heroFarm from '../assets/images/hero-farm.png';

const processSteps = [
  { icon: <Egg size={28} />, title: 'Selective Breeding', desc: 'Heritage and organic breeds selected for flavor, health, and resilience. Every chick comes from NPIP-certified parent stock.' },
  { icon: <Sun size={28} />, title: 'Free-Range Living', desc: 'Birds enjoy open pastures with natural sunlight, fresh grass, and enrichment activities. No cages, ever.' },
  { icon: <Wheat size={28} />, title: 'Natural Nutrition', desc: 'Custom-formulated, non-GMO feed blends with essential minerals and probiotics. Zero antibiotics or growth promoters.' },
  { icon: <ShieldCheck size={28} />, title: 'Humane Processing', desc: 'HACCP and ISO 22000 certified facilities with controlled atmosphere stunning — the most humane method available.' },
  { icon: <Truck size={28} />, title: 'Cold Chain Logistics', desc: 'From processing to your door, products are maintained at 0–4°C through our global cold chain network.' },
  { icon: <UtensilsCrossed size={28} />, title: 'Your Kitchen', desc: 'Fully traceable, individually packaged products ready for restaurants, retailers, and home kitchens worldwide.' },
];

const certifications = ['HACCP', 'ISO 22000', 'Halal Certified', 'Organic Certified', 'Free-Range Verified', 'NPIP Certified', 'BRC Global Standard', 'GlobalG.A.P.'];

export default function FarmStory() {
  return (
    <main id="farm-story-page">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-20">
        <div className="absolute inset-0">
          <img src={heroFarm} alt="Ken Ethan Poultry Farm" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-[#C8E64E] mb-4">The Farm</span>
            <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.02em] text-white mb-4">Step Inside Our Farm</h1>
            <p className="text-white/80 text-[18px] max-w-[560px]">Where every bird is raised with care, every process is transparent, and every product tells a story of excellence.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-white py-20" id="farm-process">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <div className="text-center max-w-[600px] mx-auto mb-16">
              <h2 className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3.5rem)] font-semibold mb-4">From Our Farm to Your Table</h2>
              <p className="text-[#6B6B6B] text-[17px]">Every step is meticulously designed to ensure the highest quality, safety, and traceability.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.title} animation="fadeUp" delay={i * 0.1}>
                <div className="bg-white p-10 rounded-2xl border border-[#E5E0D5] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                  <div className="font-['Playfair_Display'] text-[13px] font-semibold text-[#E5E0D5] mb-4">{String(i + 1).padStart(2, '0')}</div>
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#FAF8F3] to-[#F0EDE5] text-[#1A3C2A] mb-5">{step.icon}</div>
                  <h4 className="font-['Playfair_Display'] text-[18px] mb-3">{step.title}</h4>
                  <p className="text-[15px] leading-[1.6] text-[#6B6B6B]">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-[#F0EDE5] py-20" id="farm-video">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="scaleUp">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/7]">
              <img src={farmImg} alt="Farm video preview" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-4">
                <button id="play-farm-video" aria-label="Play farm tour video"
                  className="w-20 h-20 rounded-full bg-[#C8E64E] text-[#1A3C2A] flex items-center justify-center cursor-pointer hover:scale-110 hover:shadow-[0_0_0_16px_rgba(200,230,78,0.2)] transition-all">
                  <Play size={32} fill="currentColor" />
                </button>
                <p className="font-sans text-[14px] uppercase tracking-[0.1em] text-white">Watch Our Farm Tour</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-20" id="farm-certifications">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <div className="text-center max-w-[560px] mx-auto mb-12">
              <h2 className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3.5rem)] font-semibold mb-4">Certified Excellence</h2>
              <p className="text-[#6B6B6B] text-[17px]">Our operations meet and exceed the world's most stringent food safety and quality standards.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3 px-6 py-5 bg-[#F0EDE5] rounded-2xl border border-[#E5E0D5] font-sans font-semibold text-[14px] text-[#1A3C2A]">
                  <ShieldCheck size={20} className="text-[#C8E64E] flex-shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
