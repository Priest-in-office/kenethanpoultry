import { MapPin, Globe } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';
import { farmLocations, distributionRegions } from '../data/locations';

export default function Locations() {
  return (
    <main id="locations-page">
      {/* Hero */}
      <section className="bg-[#F0EDE5] pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-[#8BA888] mb-4">Global Reach</span>
            <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.02em] mb-5">
              From One Farm to<br /><em className="italic text-[#1A3C2A]">Five Continents.</em>
            </h1>
            <p className="text-[#6B6B6B] text-[18px] leading-[1.7] max-w-[600px]">
              With farms and distribution hubs on three continents, we deliver premium poultry products to over 50 countries — always fresh.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Distribution Stats */}
      <section className="bg-white py-20" id="distribution-stats">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3.5rem)] font-semibold text-center mb-12">Our Distribution Network</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {distributionRegions.map((region, i) => (
              <AnimatedSection key={region.region} animation="fadeUp" delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl border border-[#E5E0D5] transition-transform duration-400 hover:-translate-y-1">
                  <Globe size={20} className="text-[#8BA888] mb-3" />
                  <h4 className="font-['Playfair_Display'] text-xl mb-5">{region.region}</h4>
                  <div className="flex gap-8">
                    <div className="flex flex-col">
                      <strong className="font-['Playfair_Display'] text-2xl text-[#1A3C2A]">{region.countries}</strong>
                      <span className="font-sans text-[12px] uppercase tracking-[0.08em] text-[#6B6B6B]">Countries</span>
                    </div>
                    <div className="flex flex-col">
                      <strong className="font-['Playfair_Display'] text-2xl text-[#1A3C2A]">{region.partners}</strong>
                      <span className="font-sans text-[12px] uppercase tracking-[0.08em] text-[#6B6B6B]">Partners</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Locations */}
      <section className="bg-[#F0EDE5] py-20" id="farm-locations">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-12">
              <h2 className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3.5rem)] font-semibold mb-3">Our Farms & Facilities</h2>
              <p className="text-[#6B6B6B] text-[17px]">State-of-the-art farms and processing facilities across the globe.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {farmLocations.map((farm, i) => (
              <AnimatedSection key={farm.id} animation="fadeUp" delay={i * 0.1}>
                <div id={`farm-${farm.id}`} className="bg-white p-8 rounded-2xl border border-[#E5E0D5] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={18} className="text-[#8BA888]" />
                    <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-[#8BA888]">{farm.country}</span>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-xl mb-1">{farm.name}</h3>
                  <span className="block font-sans text-[14px] text-[#6B6B6B] mb-5">{farm.location}</span>
                  <div className="flex flex-col gap-3 pt-5 border-t border-[#E5E0D5]">
                    <div className="flex justify-between">
                      <strong className="font-sans text-[13px] font-semibold text-[#2C2C2C]">Capacity</strong>
                      <span className="font-sans text-[13px] text-[#6B6B6B] text-right">{farm.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <strong className="font-sans text-[13px] font-semibold text-[#2C2C2C]">Specialty</strong>
                      <span className="font-sans text-[13px] text-[#6B6B6B] text-right max-w-[55%]">{farm.specialty}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
