import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';
import Button from '../components/ui/Button';

const subjects = ['General Inquiry', 'Wholesale & Bulk Orders', 'Careers', 'Media & Press', 'Farm Visit Request', 'Product Feedback'];

const inputBase = 'w-full px-5 py-3.5 border border-[#E5E0D5] rounded-xl font-sans text-[15px] text-[#2C2C2C] bg-white outline-none focus:border-[#1A3C2A] focus:shadow-[0_0_0_3px_rgba(26,60,42,0.08)] transition-all placeholder-[#9A9A9A]';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main id="contact-page">
      {/* Hero */}
      <section className="bg-[#F0EDE5] pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimatedSection animation="fadeUp">
            <span className="inline-block font-sans text-[12px] font-semibold uppercase tracking-[0.2em] text-[#8BA888] mb-4">Contact Us</span>
            <h1 className="font-['Playfair_Display'] text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.02em] mb-5">
              Let's Talk.<br /><em className="italic text-[#1A3C2A]">We'd Love to Hear From You.</em>
            </h1>
            <p className="text-[#6B6B6B] text-[18px] leading-[1.7] max-w-[600px]">
              Whether you're a retailer, chef, distributor, or simply curious about our farm — we're always happy to connect.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white py-20" id="contact-form-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16 items-start">
            {/* Form */}
            <AnimatedSection animation="fadeUp">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2C2C2C]">Full Name</label>
                    <input type="text" id="contact-name" placeholder="Your name" className={inputBase} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2C2C2C]">Email</label>
                    <input type="email" id="contact-email" placeholder="your@email.com" className={inputBase} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-subject" className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2C2C2C]">Subject</label>
                  <select id="contact-subject" className={`${inputBase} cursor-pointer appearance-none`} value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required>
                    <option value="" disabled>Select a topic</option>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2C2C2C]">Message</label>
                  <textarea id="contact-message" rows={6} placeholder="Tell us how we can help..." className={`${inputBase} resize-y min-h-[120px]`} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                </div>
                <Button variant="primary" size="lg" type="submit" id="contact-submit-btn">Send Message →</Button>
                {submitted && (
                  <div className="px-6 py-4 bg-[#C8E64E]/15 border border-[#C8E64E] rounded-xl text-[#1A3C2A] font-semibold text-[15px] animate-[fadeInUp_0.4s_ease-out]">
                    ✓ Thank you! We'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection animation="slideLeft" delay={0.2}>
              <div className="bg-[#1A3C2A] rounded-3xl p-12">
                <h3 className="font-['Playfair_Display'] text-2xl text-white mb-8">Get in Touch</h3>
                <div className="flex flex-col gap-7">
                  {[
                    { icon: <MapPin size={20} />, label: 'Headquarters', text: 'Ken Ethan Farms, Ota,\nOgun State, Nigeria' },
                    { icon: <Phone size={20} />, label: 'Phone', text: '+234 (0) 800 KEN ETHAN\n+1 (800) 555-0199' },
                    { icon: <Mail size={20} />, label: 'Email', text: 'hello@kenethanpoultry.com\nwholesale@kenethanpoultry.com' },
                    { icon: <Clock size={20} />, label: 'Office Hours', text: 'Monday – Friday: 8:00 AM – 6:00 PM\nSaturday: 9:00 AM – 2:00 PM' },
                  ].map(({ icon, label, text }) => (
                    <div key={label} className="flex gap-4">
                      <span className="text-[#C8E64E] flex-shrink-0 mt-0.5">{icon}</span>
                      <div>
                        <strong className="block font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-white/50 mb-1.5">{label}</strong>
                        <span className="font-sans text-[15px] text-white/85 whitespace-pre-line leading-[1.5]">{text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
