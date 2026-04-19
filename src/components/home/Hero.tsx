import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Button from '../ui/Button';
import heroImg from '../../assets/images/hero-farm.png';

const taglines = [
  'Farm-Raised Excellence',
  'Globally Trusted Quality',
  'Sustainably Grown',
  'Naturally Delicious',
];

export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(headingRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' })
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4');
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (taglineRef.current) {
        gsap.to(taglineRef.current, {
          opacity: 0, y: -10, duration: 0.3,
          onComplete: () => {
            setCurrentTagline((prev) => (prev + 1) % taglines.length);
            gsap.fromTo(taglineRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 });
          },
        });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero-section">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Ken Ethan Poultry Farm at golden hour" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-[120px] pb-20 max-w-[900px]">
        <span ref={taglineRef} className="inline-block font-sans text-[13px] font-medium uppercase tracking-[0.2em] text-[#C8E64E] mb-6">
          {taglines[currentTagline]}
        </span>
        <h1
          ref={headingRef}
          className="font-['Playfair_Display'] text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.05] text-white mb-6 tracking-[-0.02em]"
          style={{ opacity: 0 }}
        >
          Where Quality Meets<br />
          <em className="italic text-[#C8E64E]">Nature's Best</em>
        </h1>
        <p
          ref={subtitleRef}
          className="text-[18px] leading-[1.7] text-white/80 max-w-[560px] mb-10"
          style={{ opacity: 0 }}
        >
          Premium, antibiotic-free poultry raised on open pastures and delivered fresh to tables in over 50 countries worldwide.
        </p>
        <div ref={ctaRef} className="flex items-center gap-6 flex-wrap" style={{ opacity: 0 }}>
          <Button variant="primary" size="lg" to="/products" id="hero-explore-btn">Explore Products</Button>
          <Button variant="ghost" to="/about" id="hero-story-btn" className="text-white/90 hover:text-[#C8E64E]">Our Story →</Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 hidden md:flex">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/60 animate-pulse" />
        <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-white/50">Scroll to explore</span>
      </div>
    </section>
  );
}
