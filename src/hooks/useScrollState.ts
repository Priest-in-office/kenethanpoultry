import { useState, useEffect } from 'react';

interface ScrollState {
  scrolled: boolean;
  active: string;
}

export function useScrollState(): ScrollState {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const ids = ['home', 'livestock', 'shop', 'wholesale', 'gallery', 'faq', 'contact'];

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const y = window.scrollY + 140;
      let cur = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { scrolled, active };
}
