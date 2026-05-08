import { useState } from 'react';

interface NavbarProps {
  active: string;
  scrolled: boolean;
}

const links = [
  { id: 'livestock', label: 'Livestock' },
  { id: 'shop',      label: 'Shop' },
  { id: 'wholesale', label: 'Wholesale' },
  { id: 'gallery',   label: 'Gallery' },
  { id: 'faq',       label: 'FAQ' },
  { id: 'contact',   label: 'Contact' },
];

export default function Navbar({ active, scrolled }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-row">
        <a href="#home" className="brand">
          <div className="brand-mark">K</div>
          <div>
            <div className="brand-name">KenEthan Farms</div>
            <div className="brand-sub">EST. 2018 · OGUN STATE</div>
          </div>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta">Plan a Visit</a>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="13" x2="20" y2="13" />
            <line x1="4" y1="19" x2="20" y2="19" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
