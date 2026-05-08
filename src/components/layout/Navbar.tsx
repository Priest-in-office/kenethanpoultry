import { useState, useEffect } from 'react';

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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-row">
          <a href="#home" className="brand" onClick={close}>
            <div className="brand-mark">K</div>
            <div>
              <div className="brand-name">KenEthan Farms</div>
              <div className="brand-sub">EST. 2018 · OGUN STATE</div>
            </div>
          </a>

          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={active === l.id ? 'active' : ''}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="nav-cta">Plan a Visit</a>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="13" x2="20" y2="13" />
                <line x1="4" y1="19" x2="20" y2="19" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <p className="drawer-eyebrow">Pasture-raised · Ogun State, Nigeria</p>
        <ul className="drawer-links">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? 'active' : ''}
                onClick={close}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="drawer-cta-wrap">
          <a href="#contact" className="btn btn-primary" onClick={close}>
            Plan a farm visit <span className="arr">→</span>
          </a>
        </div>
      </div>
    </>
  );
}
