import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const leftLinks = [
  { to: '/products', label: 'Our Products' },
  { to: '/about', label: 'Our Story' },
  { to: '/farm-story', label: 'The Farm' },
];

const rightLinks = [
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/locations', label: 'Locations' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsMobileOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const solidNav = isScrolled || !isHome;

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          solidNav
            ? 'bg-[rgba(250,248,243,0.95)] backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 py-5">
          {/* Left Links */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-start">
            {leftLinks.map((link) => (
              <Link key={link.to} to={link.to}
                className={`relative font-sans text-[13px] font-medium uppercase tracking-[0.1em] transition-colors duration-300
                  after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300
                  hover:after:w-full
                  ${solidNav
                    ? 'text-[#2C2C2C] hover:text-[#1A3C2A] after:bg-[#1A3C2A]'
                    : 'text-white hover:text-white after:bg-white'}
                  ${location.pathname === link.to ? 'after:w-full' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link to="/" id="navbar-logo" className="flex flex-col items-center flex-shrink-0 px-6 no-underline">
            <span className={`font-['Playfair_Display'] text-[1.6rem] font-bold tracking-tight transition-colors duration-300 ${solidNav ? 'text-[#1A3C2A]' : 'text-white'}`}>
              Ken Ethan
            </span>
            <span className={`font-sans text-[10px] font-medium uppercase tracking-[0.35em] mt-0.5 transition-colors duration-300 ${solidNav ? 'text-[#8BA888]' : 'text-white/70'}`}>
              Poultry
            </span>
          </Link>

          {/* Right Links */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {rightLinks.map((link) => (
              <Link key={link.to} to={link.to}
                className={`relative font-sans text-[13px] font-medium uppercase tracking-[0.1em] transition-colors duration-300
                  after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:transition-all after:duration-300
                  hover:after:w-full
                  ${solidNav
                    ? 'text-[#2C2C2C] hover:text-[#1A3C2A] after:bg-[#1A3C2A]'
                    : 'text-white hover:text-white after:bg-white'}
                  ${location.pathname === link.to ? 'after:w-full' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 z-[1001] transition-colors ${solidNav ? 'text-[#2C2C2C]' : 'text-white'}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            id="mobile-menu-toggle"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[999] bg-[#1A3C2A] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="flex flex-col items-center gap-6">
          {[...leftLinks, ...rightLinks].map((link) => (
            <Link key={link.to} to={link.to}
              className={`font-['Playfair_Display'] text-3xl transition-all duration-300 hover:translate-x-2 no-underline ${
                location.pathname === link.to ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setIsMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact"
            className="mt-6 px-10 py-3.5 bg-[#C8E64E] text-[#1A3C2A] font-sans font-semibold text-sm uppercase tracking-[0.1em] rounded-full hover:bg-[#B8D63E] hover:scale-105 transition-all no-underline"
            onClick={() => setIsMobileOpen(false)}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </>
  );
}
