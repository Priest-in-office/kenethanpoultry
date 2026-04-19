import AnimatedSection from '../shared/AnimatedSection';
import Button from '../ui/Button';

export default function Newsletter() {
  return (
    <section className="bg-[#F0EDE5] py-[120px] md:py-20" id="newsletter-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <AnimatedSection animation="fadeUp">
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,4vw,3.5rem)] font-semibold mb-4">Stay Connected to the Farm</h2>
            <p className="text-[#6B6B6B] text-[17px] mb-8">
              Get the latest updates on new products, sustainability milestones, farm tours, and exclusive offers delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                id="newsletter-input"
                aria-label="Email address"
                className="flex-1 px-6 py-3.5 border border-[#E5E0D5] rounded-full font-sans text-[15px] bg-white text-[#2C2C2C] placeholder-[#9A9A9A] outline-none focus:border-[#1A3C2A] transition-colors"
              />
              <Button variant="primary" type="submit" id="newsletter-subscribe-btn">Subscribe</Button>
            </form>
            <p className="mt-4 font-sans text-[13px] text-[#9A9A9A]">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
