import { Award, Heart, Lightbulb, Target, Eye, Users } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';
import { team } from '../data/team';

const values = [
  { icon: <Heart size={24} />, title: 'Integrity', desc: 'Honest and transparent in everything we do — from farm practices to business dealings.' },
  { icon: <Lightbulb size={24} />, title: 'Innovation', desc: 'Leveraging smart farming technology, AI-driven analytics, and sustainable practices.' },
  { icon: <Award size={24} />, title: 'Excellence', desc: 'Uncompromising quality at every stage — breeding, rearing, processing, and delivery.' },
];

const milestones = [
  { year: '1994', title: 'The Beginning', desc: 'Kenneth Okafor purchases a small plot of land in Ogun State and starts with 500 birds.' },
  { year: '2002', title: 'First Export', desc: 'Ken Ethan ships its first international order to the UAE, marking the start of global expansion.' },
  { year: '2008', title: 'HACCP Certified', desc: 'Processing facilities earn HACCP and ISO 22000 certification — setting new industry standards.' },
  { year: '2014', title: 'Going Organic', desc: 'Launch of certified organic and free-range product lines to meet growing consumer demand.' },
  { year: '2019', title: 'Smart Farming', desc: 'IoT sensors and AI-driven feed optimization deployed across all farms for maximum efficiency.' },
  { year: '2024', title: '50+ Countries', desc: 'Ken Ethan products now available in over 50 countries with 5 production facilities worldwide.' },
];

export default function About() {
  return (
    <main id="about-page">
      {/* Hero */}
      <section className="bg-[#F0EDE5] pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-[#8BA888] mb-4">Our Story</span>
            <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.02em] mb-5">
              From a Small Farm to<br /><em className="italic text-[#1A3C2A]">a Global Legacy.</em>
            </h1>
            <p className="text-[#6B6B6B] text-[18px] leading-[1.7] max-w-[600px]">
              What began as a dream to raise healthier chickens has grown into one of the world's most trusted poultry brands.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-20" id="about-mission">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <div className="max-w-[800px] mx-auto text-center mb-16">
              <h2 className="font-['Playfair_Display'] text-[clamp(1.75rem,4vw,2.75rem)] font-medium italic leading-[1.3] mb-6">
                We're building a food system that nourishes people <span className="not-italic text-[#1A3C2A]">and</span> the planet.
              </h2>
              <p className="text-[#6B6B6B] text-[17px] leading-[1.8]">
                Our core values guide our actions and we aim to empower our partners, team members, and communities to be a positive force on global food production.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: <Target size={28} />, title: 'Our Mission', desc: 'To provide the world with premium, sustainably raised poultry — ensuring quality, transparency, and freshness from farm to table.' },
              { icon: <Eye size={28} />, title: 'Our Vision', desc: 'To become the most trusted poultry brand globally — setting the standard for animal welfare, environmental responsibility, and food safety.' },
            ].map(({ icon, title, desc }, i) => (
              <AnimatedSection key={title} animation="fadeUp" delay={i * 0.1}>
                <div className="bg-white p-12 rounded-2xl border border-[#E5E0D5]">
                  <div className="text-[#1A3C2A] mb-5">{icon}</div>
                  <h4 className="font-['Playfair_Display'] text-xl mb-3">{title}</h4>
                  <p className="text-[15px] leading-[1.7] text-[#6B6B6B]">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#F0EDE5] py-20" id="about-timeline">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3.5rem)] font-semibold text-center mb-16">Our Journey</h2>
          </AnimatedSection>
          <div className="max-w-[800px] mx-auto flex flex-col gap-8 relative before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:bottom-0 before:w-px before:bg-[#E5E0D5]">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} animation={i % 2 === 0 ? 'slideRight' : 'slideLeft'} delay={i * 0.1}>
                <div className={`flex items-start gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-shrink-0 w-20 font-['Playfair_Display'] text-2xl font-bold text-[#1A3C2A] ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>{m.year}</div>
                  <div className="flex-1 bg-white p-6 rounded-2xl border border-[#E5E0D5]">
                    <h4 className="font-['Playfair_Display'] text-[18px] mb-2">{m.title}</h4>
                    <p className="text-[15px] leading-[1.6] text-[#6B6B6B]">{m.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20" id="about-values">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3.5rem)] font-semibold text-center mb-12">What We Stand For</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} animation="fadeUp" delay={i * 0.15}>
                <div className="text-center p-12 bg-[#F0EDE5] rounded-2xl transition-transform duration-400 hover:-translate-y-1">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#1A3C2A] mx-auto mb-5">{v.icon}</div>
                  <h4 className="font-['Playfair_Display'] text-xl mb-3">{v.title}</h4>
                  <p className="text-[15px] leading-[1.6] text-[#6B6B6B]">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#F0EDE5] py-20" id="about-team">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3.5rem)] font-semibold mb-3">Meet Our Leadership</h2>
              <p className="text-[#6B6B6B] text-[17px]">The passionate people behind Ken Ethan Poultry's global success.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <AnimatedSection key={member.id} animation="fadeUp" delay={i * 0.1}>
                <div id={`team-${member.id}`} className="bg-white p-10 rounded-2xl text-center transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center justify-center w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#FAF8F3] to-[#F0EDE5] text-[#1A3C2A] mx-auto mb-5">
                    <Users size={32} />
                  </div>
                  <h4 className="font-['Playfair_Display'] text-[18px] mb-1">{member.name}</h4>
                  <span className="block font-sans text-[13px] text-[#8BA888] uppercase tracking-[0.08em] mb-4">{member.role}</span>
                  <p className="text-[14px] leading-[1.6] text-[#6B6B6B]">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
