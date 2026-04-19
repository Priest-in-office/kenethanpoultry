import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

/* Inline SVGs for social platforms no longer in lucide-react */
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer>
      {/* Newsletter Section */}
      <div className="bg-[#F0EDE5] border-t border-[#E5E0D5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
            <div>
              <h3 className="font-['Playfair_Display'] text-2xl text-[#2C2C2C] mb-2">Join Our Newsletter</h3>
              <p className="text-[#6B6B6B] text-base">Stay updated with farm news, new products, and exclusive offers.</p>
            </div>
            <form className="w-full max-w-[460px] flex-shrink-0" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center border border-[#E5E0D5] rounded-full bg-white overflow-hidden focus-within:border-[#1A3C2A] transition-colors">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-6 py-4 border-none outline-none font-sans text-[15px] bg-transparent text-[#2C2C2C] placeholder-[#9A9A9A]"
                  id="newsletter-email"
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className="px-6 py-4 text-xl text-[#1A3C2A] cursor-pointer hover:text-[#C8E64E] hover:translate-x-1 transition-all" id="newsletter-submit" aria-label="Subscribe">
                  →
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#1A3C2A] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
            {/* Brand Column */}
            <div>
              <Link to="/" className="flex flex-col mb-4 no-underline">
                <span className="font-['Playfair_Display'] text-2xl font-bold text-white tracking-tight">Ken Ethan</span>
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-[#8BA888] mt-0.5">Poultry</span>
              </Link>
              <p className="text-white/60 text-[15px] leading-relaxed mb-6">
                Farm-raised excellence,<br />globally trusted.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <InstagramIcon />, label: 'Instagram' },
                  { icon: <TwitterIcon />, label: 'Twitter / X' },
                  { icon: <FacebookIcon />, label: 'Facebook' },
                  { icon: <YoutubeIcon />, label: 'YouTube' },
                ].map(({ icon, label }) => (
                  <a key={label} href="#" aria-label={label}
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white/70 hover:bg-[#C8E64E] hover:text-[#1A3C2A] hover:-translate-y-0.5 transition-all">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50 mb-5">Products</h4>
              <ul className="flex flex-col gap-3">
                {['Whole Chicken', 'Premium Cuts', 'Farm Eggs', 'Value-Added'].map((item) => (
                  <li key={item}>
                    <Link to="/products" className="text-white/75 text-[15px] hover:text-[#C8E64E] transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50 mb-5">Company</h4>
              <ul className="flex flex-col gap-3">
                {[
                  { label: 'Our Story', to: '/about' },
                  { label: 'The Farm', to: '/farm-story' },
                  { label: 'Sustainability', to: '/sustainability' },
                  { label: 'Locations', to: '/locations' },
                  { label: 'Careers', to: '/contact' },
                ].map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="text-white/75 text-[15px] hover:text-[#C8E64E] transition-colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50 mb-5">Contact</h4>
              <ul className="flex flex-col gap-4">
                {[
                  { icon: <MapPin size={14} />, text: 'Ken Ethan Farms, Ogun State, Nigeria' },
                  { icon: <Phone size={14} />, text: '+234 (0) 800 KEN ETHAN' },
                  { icon: <Mail size={14} />, text: 'hello@kenethanpoultry.com' },
                ].map(({ icon, text }) => (
                  <li key={text} className="flex items-start gap-2.5 text-white/50">
                    <span className="mt-0.5 flex-shrink-0">{icon}</span>
                    <span className="text-[15px] text-white/75">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 mt-12 border-t border-white/10">
            <p className="text-white/40 text-[13px]">© {new Date().getFullYear()} Ken Ethan Poultry. All rights reserved.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Use', 'Accessibility'].map((item) => (
                <a key={item} href="#" className="text-white/40 text-[13px] hover:text-white/80 transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
