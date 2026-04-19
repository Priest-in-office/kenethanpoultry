import { Egg, Sun, Wheat, Truck, ShieldCheck, UtensilsCrossed } from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';

const steps = [
  { icon: <Egg size={28} />, title: 'Hatchery', desc: 'Healthy chicks from certified heritage and organic breed lines.' },
  { icon: <Sun size={28} />, title: 'Free-Range Rearing', desc: 'Open pastures with natural sunlight, fresh air, and room to roam.' },
  { icon: <Wheat size={28} />, title: 'Natural Feed', desc: '100% natural grain diet — no GMOs, antibiotics, or growth hormones.' },
  { icon: <ShieldCheck size={28} />, title: 'Quality Assurance', desc: 'HACCP, ISO 22000, and Halal certified processing facilities.' },
  { icon: <Truck size={28} />, title: 'Cold Chain Delivery', desc: 'Temperature-controlled logistics from farm to shelf, worldwide.' },
  { icon: <UtensilsCrossed size={28} />, title: 'Your Table', desc: 'Fresh, traceable, premium poultry ready for your kitchen.' },
];

export default function FarmJourney() {
  return (
    <section className="bg-[#F0EDE5] py-[120px] md:py-20" id="farm-journey-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <AnimatedSection animation="fadeUp">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-[#8BA888] mb-4">Farm to Table</span>
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3.5rem)] font-semibold mb-4">Our Journey to Your Kitchen</h2>
            <p className="text-[#6B6B6B] text-[17px]">Every step is designed to ensure maximum freshness, the highest safety standards, and complete transparency.</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} animation="fadeUp" delay={i * 0.1}>
              <div className="text-center bg-white rounded-2xl p-8 px-4 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
                <div className="font-['Playfair_Display'] text-[13px] font-semibold text-[#E5E0D5] mb-4">{String(i + 1).padStart(2, '0')}</div>
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#FAF8F3] to-[#F0EDE5] text-[#1A3C2A] mx-auto mb-4">{step.icon}</div>
                <h4 className="font-['Playfair_Display'] text-base font-semibold text-[#2C2C2C] mb-2">{step.title}</h4>
                <p className="font-sans text-[13px] leading-[1.5] text-[#6B6B6B]">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
