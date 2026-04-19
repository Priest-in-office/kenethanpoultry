import { useCounter } from '../../hooks/useCounter';
import AnimatedSection from '../shared/AnimatedSection';

const stats = [
  { value: 50, suffix: '+', label: 'Countries Served' },
  { value: 1, suffix: 'M+', label: 'Birds Raised Monthly' },
  { value: 100, suffix: '%', label: 'Antibiotic-Free' },
  { value: 30, suffix: '+', label: 'Years of Excellence' },
];

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value, 2000);
  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4 relative last:[&::after]:hidden after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-px after:h-12 after:bg-white/15">
      <span className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3rem)] font-bold text-[#C8E64E] leading-none mb-2">
        {count}<span className="text-[0.65em]">{suffix}</span>
      </span>
      <span className="font-sans text-[13px] uppercase tracking-[0.12em] text-white/60">{label}</span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <AnimatedSection animation="fadeUp">
      <section className="bg-[#1A3C2A] py-14" id="stats-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => <StatItem key={s.label} {...s} />)}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
