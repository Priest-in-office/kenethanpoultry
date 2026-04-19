import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  const t = testimonials[current];

  return (
    <section className="bg-white py-[120px] md:py-20" id="testimonials-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <AnimatedSection animation="fadeUp">
          <div className="max-w-[800px] mx-auto text-center">
            <Quote className="text-[#E5E0D5] mx-auto mb-8" size={48} />
            <blockquote className="font-['Playfair_Display'] text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium italic leading-[1.5] text-[#2C2C2C] mb-8">
              "{t.quote}"
            </blockquote>
            <div className="mb-10">
              <strong className="block font-sans text-base font-semibold text-[#2C2C2C]">{t.author}</strong>
              <span className="font-sans text-[14px] text-[#6B6B6B]">{t.role}, {t.company}</span>
            </div>
            <div className="flex items-center justify-center gap-6">
              <button onClick={prev} id="testimonial-prev" aria-label="Previous testimonial"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-[#E5E0D5] text-[#2C2C2C] cursor-pointer hover:bg-[#1A3C2A] hover:border-[#1A3C2A] hover:text-white transition-all">
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to testimonial ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-all duration-300 border-none p-0 cursor-pointer ${i === current ? 'bg-[#1A3C2A] scale-[1.3]' : 'bg-[#E5E0D5]'}`} />
                ))}
              </div>
              <button onClick={next} id="testimonial-next" aria-label="Next testimonial"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-[#E5E0D5] text-[#2C2C2C] cursor-pointer hover:bg-[#1A3C2A] hover:border-[#1A3C2A] hover:text-white transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
